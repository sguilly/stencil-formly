import { Component, h, State, Prop, Event, EventEmitter, Watch } from '@stencil/core';

import { loadScript, loadCss, loadModule, loadNoModule } from '../../../utils/loadScript';

declare var FilePond: any;
declare var FilePondPluginImagePreview: any;
declare var FilePondPluginFileValidateType: any;

@Component({
  tag: 'field-docs',
  styleUrl: 'field-docs.css',
})
export class FieldDocs {
  displayRequired;

  @Prop() value: any;
  @Prop() disabled = false;
  @Prop() templateOptions: any = {};

  @State() docs = [];

  @Event() customChange: EventEmitter<any>;

  @Watch('value')
  calendarHandler(newValue: any, _oldValue: any) {
    this.docs = [...newValue];
  }

  async componentWillLoad() {
    if (this.value) {
      this.docs = Array.from(this.value);
    }

    let promises = [];

    promises.push(loadScript('https://unpkg.com/filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.js'));
    promises.push(loadScript('https://unpkg.com/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.js'));
    promises.push(loadCss('https://unpkg.com/filepond@^4/dist/filepond.css'));
    promises.push(loadCss('https://unpkg.com/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'));

    promises.push(loadScript('https://unpkg.com/filepond@^4/dist/filepond.js'));

    await Promise.all(promises);

    FilePond.registerPlugin(FilePondPluginImagePreview);
    FilePond.registerPlugin(FilePondPluginFileValidateType);

    FilePond.setOptions({
      name: 'file',
      server: {
        url: 'http://localhost:3333/api/files',
        process: {
          url: '/upload',
          method: 'POST',
          withCredentials: false,
          headers: { toto: 'toto' },
          timeout: 7000,
          onload: response => {
            console.log('response', response);
            response = JSON.parse(response);
            if (response.success == true && response.thumb && response.url) {
              let docs = [...this.docs, { thumb: response.thumb, url: response.url }];

              this.customChange.emit({ value: docs });
            }
          },
          onerror: null,
          ondata: null,
        },
        fetch: null,
        revert: null,
      },
    });
  }

  componentDidRender() {
    const inputElement = document.querySelector('input[type="file"]');

    const pond = FilePond.create(inputElement, {
      acceptedFileTypes: ['image/*', 'application/pdf'],
    });

    pond.on('processfile', (error, file) => {
      pond.removeFile(file.id);
    });
  }

  renderInput() {
    return <input type="file" multiple />;
  }

  removeDoc(index) {
    this.docs.splice(index, 1);
    this.customChange.emit({ value: this.docs });
  }

  renderDocs() {
    if (this.docs.length > 0) {
      console.log('render docs', JSON.stringify(this.docs));
      return (
        <div class="df-docs-container">
          {this.docs.map((element, index) => {
            return (
              <div>
                <img src={element.thumb} style={{ 'margin-left': '10px' }}></img>
                <button
                  class="delete is-small df-is-required"
                  onClick={() => {
                    console.log('this.docs', this.docs);
                    this.removeDoc(index);
                  }}
                ></button>
              </div>
            );
          })}
        </div>
      );
    }
  }

  async componentWillRender() {
    this.displayRequired = this.templateOptions?.required == true && this.docs?.length == 0;
  }

  render() {
    return (
      <field-container templateOptions={this.templateOptions} displayRequired={this.displayRequired}>
        {this.renderInput()}
      </field-container>
    );
  }
}

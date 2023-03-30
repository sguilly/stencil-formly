import { r as registerInstance, c as createEvent, h } from './index-4410364a.js';
import { b as loadScript, l as loadCss } from './loadScript-649d145b.js';

const fieldDocsCss = ".filepond--item{width:calc(25% - 0.5em)}.df-docs-container{display:flex;flex-wrap:wrap;flex-direction:row;align-items:center}";

const FieldDocs = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.customChange = createEvent(this, "customChange", 7);
    this.value = undefined;
    this.disabled = false;
    this.templateOptions = {};
    this.docs = [];
  }
  calendarHandler(newValue, _oldValue) {
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
    return h("input", { type: "file", multiple: true });
  }
  removeDoc(index) {
    this.docs.splice(index, 1);
    this.customChange.emit({ value: this.docs });
  }
  renderDocs() {
    if (this.docs.length > 0) {
      console.log('render docs', JSON.stringify(this.docs));
      return (h("div", { class: "df-docs-container" }, this.docs.map((element, index) => {
        return (h("div", null, h("img", { src: element.thumb, style: { 'margin-left': '10px' } }), h("button", { class: "delete is-small df-is-required", onClick: () => {
            console.log('this.docs', this.docs);
            this.removeDoc(index);
          } })));
      })));
    }
  }
  async componentWillRender() {
    var _a, _b;
    this.displayRequired = ((_a = this.templateOptions) === null || _a === void 0 ? void 0 : _a.required) == true && ((_b = this.docs) === null || _b === void 0 ? void 0 : _b.length) == 0;
  }
  render() {
    return (h("field-container", { templateOptions: this.templateOptions, displayRequired: this.displayRequired }, this.renderInput()));
  }
  static get watchers() { return {
    "value": ["calendarHandler"]
  }; }
};
FieldDocs.style = fieldDocsCss;

export { FieldDocs as field_docs };

//# sourceMappingURL=field-docs.entry.js.map
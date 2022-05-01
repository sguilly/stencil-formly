import { Component, h, State, Prop, Event, EventEmitter } from '@stencil/core';

import { loadScript, loadCss, loadModule, loadNoModule } from '../../../utils/loadScript';

declare var intlTelInput: any;
declare var intlTelInputUtils: any;

@Component({
  tag: 'field-phonenumber',
})
export class FieldInput {
  @Prop() value: any;
  @Prop() disabled = false;
  @Prop() templateOptions: any = {};

  @Event() customChange: EventEmitter<any>;

  refInput;
  instance;

  displayRequired;

  async componentWillLoad() {
    let promises = [];

    promises.push(loadCss('https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.16/css/intlTelInput.css'));

    promises.push(loadScript('https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.16/js/intlTelInput.min.js'));

    promises.push(loadScript('https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.16/js/utils.min.js'));

    return Promise.all(promises);
  }

  componentDidRender() {
    console.log('ref', this.refInput);
    this.instance = intlTelInput(this.refInput, {
      initialCountry: 'fr',
    });

    this.refInput.addEventListener('countrychange', function () {
      console.log('countrychange');
    });
  }

  renderInput() {
    return [
      <input
        ref={el => (this.refInput = el as HTMLElement)}
        disabled={this.disabled}
        class={'input ' + (this.templateOptions?.required == true && !this.value ? ' df-is-required' : '')}
        value={this.value}
        onInput={(ev: any) => {
          console.log('valid ? ' + this.instance.isValidNumber());

          if (this.instance.isValidNumber()) {
            this.value = this.instance.getNumber();
            if (this.value.length > 0) {
              this.customChange.emit({ value: this.value });
            }
          }
        }}
      ></input>,
      <button
        class="button"
        onClick={() => {
          this.value = null;
          this.customChange.emit({ value: this.value });
        }}
      >
        X
      </button>,
    ];
  }

  async componentWillRender() {
    this.displayRequired = this.templateOptions?.required == true && !this.value;
  }

  render() {
    return (
      <field-container templateOptions={this.templateOptions} displayRequired={this.displayRequired}>
        {this.renderInput()}
      </field-container>
    );
  }
}

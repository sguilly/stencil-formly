import { Component, h, State, Prop, Event, EventEmitter } from '@stencil/core';

import { loadScript, loadCss, loadModule, loadNoModule } from '../../../utils/loadScript';

declare var noUiSlider: any;
declare var wNumb: any;
@Component({
  tag: 'field-slider',
})
export class FieldSlider {
  @Prop() value: any;
  @Prop() disabled = false;
  @Prop() templateOptions: any = {};

  @Event() customChange: EventEmitter<any>;

  refInput;
  instance;

  displayRequired;

  async componentWillLoad() {
    let promises = [];

    promises.push(loadCss('https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/15.5.1/nouislider.min.css'));

    promises.push(loadScript('https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/15.5.1/nouislider.min.js'));

    promises.push(loadScript('https://cdnjs.cloudflare.com/ajax/libs/wnumb/1.2.0/wNumb.min.js'));

    return Promise.all(promises);
  }

  async componentWillRender() {
    this.displayRequired = this.templateOptions?.required == true && !this.value;
  }

  componentDidRender() {
    console.log('ref', this.refInput);
    if (!this.instance) {
      this.instance = noUiSlider.create(this.refInput, {
        start: this.value ? this.value : 50,
        step: 10,
        tooltips: [wNumb({ decimals: 0 })],
        connect: 'lower',
        range: {
          min: 0,
          max: 100,
        },
      });

      this.instance.on('end', () => {
        this.value = Number(this.instance.get());
        this.customChange.emit({ value: this.value });
      });
    }

    if (this.value) {
      this.instance.set(this.value);
    }
  }

  renderInput() {
    return <div ref={el => (this.refInput = el as HTMLElement)}></div>;
  }

  render() {
    return (
      <field-container templateOptions={this.templateOptions} displayRequired={this.displayRequired}>
        {this.renderInput()}
      </field-container>
    );
  }
}

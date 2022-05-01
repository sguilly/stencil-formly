import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'field-select',
  shadow: false,
})
export class FieldSelect {
  @Prop() value: any;
  @Prop() disabled = false;
  @Prop() templateOptions: any = {};

  @Event() customChange: EventEmitter<any>;

  displayRequired;

  renderInput() {
    return (
      <choices-js
        type={'single'}
        valueByDefault={this.value}
        disable={this.disabled}
        choices={[{ value: 'NULL', label: ' ' }, ...this.templateOptions.options]}
        onCallbackChoice={(data: any) => {
          this.customChange.emit({
            value: data.detail.value == 'NULL' ? null : data.detail.value,
          });
        }}
      ></choices-js>
    );
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

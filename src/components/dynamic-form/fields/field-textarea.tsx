import { Component, h, State, Prop, Event, EventEmitter } from '@stencil/core';
import { getClassNames } from '../../../styles/style';

@Component({
  tag: 'field-textarea',
})
export class FieldInput {
  @Prop() value: any;
  @Prop() disabled = false;
  @Prop() templateOptions: any = {};

  @Event() customChange: EventEmitter<any>;

  displayRequired;
  classNames

  renderInput() {
    return (
      <textarea
        disabled={this.disabled}
        class={'textarea ' + (this.classNames?.group?.control?.className || '') + (this.displayRequired == true ? ' df-is-required' : '')} 
        value={this.value}
        onInput={(ev: any) => {
          console.log(ev.target.value);
          this.customChange.emit({ value: ev.target.value });
        }}
      ></textarea>
    );
  }

  async componentWillRender() {
    this.classNames = getClassNames()
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

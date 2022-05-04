import { Component, h, State, Prop, Event, EventEmitter } from '@stencil/core';
import { getClassNames } from '../../../styles/style';

@Component({
  tag: 'field-input',
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
      <input
        disabled={this.disabled}
        class={(this.classNames?.group?.control?.className || '') + (this.displayRequired == true ? ' df-is-required' : '')}
        placeholder="Text input"
        type={this.templateOptions?.type || 'text'}
        value={this.value}
        onInput={(ev: any) => {
          console.log(ev.target.value);
          this.customChange.emit({ value: ev.target.value });
        }}
      ></input>
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

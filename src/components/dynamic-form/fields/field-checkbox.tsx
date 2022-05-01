import { Component, h, State, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'field-checkbox',
  styleUrl: 'field-checkbox.css',
})
export class FieldCheckbox {
  @Prop() value: any;
  @Prop() templateOptions: any = {};

  @Event() customChange: EventEmitter<any>;

  displayRequired;

  renderInput() {
    return (
      <div class="df-checkboxes-container">
        {this.templateOptions.options.map(item => {
          return (
            <div class="df-checkbox-container">
              <input
                class="df-checkbox-input"
                type="checkbox"
                checked={this.value && this.value.indexOf(item.value) >= 0 ? true : false}
                onInput={(ev: any) => {
                  if (this.templateOptions.multiple == true) {
                    let value = this.value ? Array.from(this.value) : [];

                    let index = value ? value.indexOf(item.value) : -1;
                    if (ev.target.checked == true) {
                      if (index < 0) {
                        value.push(item.value);
                      }
                    } else {
                      if (value) {
                        if (value?.length == 1) {
                          value = null;
                        } else {
                          value.splice(index, 1);
                        }
                      }
                    }

                    this.value = value ? Array.from(value) : null;
                  } else {
                    if (ev.target.checked == true) {
                      this.value = [item.value];
                    } else {
                      this.value = null;
                    }
                  }
                  this.customChange.emit({ value: this.value });
                }}
              ></input>
              <div>{item.label}</div>
            </div>
          );
        })}
      </div>
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

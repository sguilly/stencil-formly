import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';
import { loadCss } from '../../utils/loadScript';

import { state, onChange } from '../../stores/styleStore';

@Component({
  tag: 'dynamic-form',
  styleUrl: 'dynamic-form.css',
})
export class DynamicForm {
  @Prop() model = {};
  @Prop() fields;
  @Prop() options: any;

  @Event() event: EventEmitter<any>;

  async componentWillLoad() {
    let promises = [];
    if (this.options.style) {
      state.style = this.options.style;
    }

    if (state.style == 'bulma') {
      promises.push(loadCss('https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css'));
    } else if (state.style == 'bootstrap') {
      promises.push(loadCss('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'));
    }

    if (promises.length) {
      await Promise.all(promises);
    }
  }

  renderField(element) {
    let isDisabled = false;
    if (element.disable) {
      isDisabled = element.disable(this.model);
    }

    element.templateOptions.requiredText = this.options?.requiredText || 'This field is required';

    const Tag = 'field-' + element.type;

    return (
      <Tag
        value={this.model[element.key]}
        templateOptions={element.templateOptions}
        onCustomChange={ev => {
          if (ev.detail?.value) {
            this.model[element.key] = ev.detail?.value;
          } else {
            delete this.model[element.key];
          }

          this.model = { ...this.model };
          this.event.emit({ type: 'change', model: this.model });
        }}
      ></Tag>
    );
  }

  renderFields(elements) {
    return elements.map(element => {
      let isHide = false;
      if (element.hide) {
        isHide = element.hide(this.model);
      }

      if (isHide == false) {
        if (element.type == 'line') {
          return [
            <div class="df-fields-container">
              {element.fields.map(element => {
                return (
                  <div class={(element.type != 'html' ? this.options?.fieldClass : '') + ' is-flex-grow-' + (element.size || 1) + ' ' + (element.className || '')}>
                    {this.renderField(element)}
                  </div>
                );
              })}
            </div>,

            element.separator == true ? <hr style={{ 'text-align': 'left' }} /> : null,
          ];
        } else {
          return [
            <div class={element.type != 'html' ? this.options?.fieldClass : ''}>{this.renderField(element)}</div>,
            element.separator == true ? <hr style={{ 'text-align': 'left' }} /> : null,
          ];
        }
      }
    });
  }

  render() {
    console.log('render form', this.model, this.fields);
    return <div>{this.fields?.length ? this.renderFields(this.fields) : null}</div>;
  }
}

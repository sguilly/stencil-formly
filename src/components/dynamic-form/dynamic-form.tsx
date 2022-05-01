import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';
import { loadCss } from '../../utils/loadScript';

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
    await loadCss('https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css');
    //await loadCss('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css');
  }

  renderField(element) {
    let isDisabled = false;
    if (element.disable) {
      isDisabled = element.disable(this.model);
    }

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
                return <div class={this.options?.fieldClass + ' is-flex-grow-' + (element.size || 1) + ' ' + (element.className || '')}>{this.renderField(element)}</div>;
              })}
            </div>,

            <hr style={{ 'text-align': 'left' }} />,
          ];
        } else {
          return [<div class={this.options?.fieldClass}>{this.renderField(element)}</div>, this.options?.separator == true ? <hr style={{ 'text-align': 'left' }} /> : null];
        }
      }
    });
  }

  render() {
    console.log('render form', this.model, this.fields);
    return (
      <div>
        {this.fields?.length ? this.renderFields(this.fields) : null}
        <button
          class="button is-fullwidth is-info is-light"
          onClick={() => {
            this.event.emit({ type: 'submit', model: this.model });
          }}
        >
          SAUVEGARDER
        </button>
      </div>
    );
  }
}
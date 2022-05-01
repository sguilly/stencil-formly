import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'field-container',
})
export class FieldContainer {
  @Prop() templateOptions;
  @Prop() displayRequired = false;

  renderBulma() {
    return (
      <div class="field">
        <label class="label">
          {this.templateOptions?.label} {this.templateOptions?.required == true ? '(*)' : ''}
        </label>
        <div class="control">
          <slot />
        </div>
        {this.displayRequired ? <p class="help df-is-required">This field is required</p> : ''}
      </div>
    );
  }

  renderBootstrap() {
    return (
      <div class="form-group">
        <label>
          {this.templateOptions?.label} {this.templateOptions?.required == true ? '(*)' : ''}
        </label>

        <slot />

        <small class="form-text text-muted">{this.displayRequired ? <p class="help df-is-required">This field is required</p> : ''}</small>
      </div>
    );
  }

  render() {
    return this.renderBulma();
  }
}

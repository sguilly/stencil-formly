import { Component, h, Prop } from '@stencil/core';

import { getClassNames } from '../../styles/style';

@Component({
  tag: 'field-container',
})
export class FieldContainer {
  @Prop() templateOptions;
  @Prop() displayRequired = false;

  classNames

  componentWillRender() {
    this.classNames = getClassNames()
  }

  render() {
    return (
      <div class={this.classNames?.group.className || ""}>
        <div class={this.classNames.group.label?.className || ""}>
          {this.templateOptions?.label} {this.templateOptions?.required == true ? '(*)' : ''}
        </div>
       
          <slot />
       
        {this.displayRequired ? <p class={this.classNames.group?.helper?.className || ""}>This field is required</p> : ''}
      </div>
    );
  }
}

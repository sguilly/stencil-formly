import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'field-html',
})
export class FieldHtml {
  @Prop() templateOptions: any = {};

  render() {
    return <div innerHTML={this.templateOptions.html}></div>;
  }
}

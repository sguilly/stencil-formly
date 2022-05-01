import { EventEmitter } from '../../stencil-public-runtime';
export declare class DynamicForm {
  model: {};
  fields: any;
  options: any;
  event: EventEmitter<any>;
  componentWillLoad(): Promise<void>;
  renderField(element: any): any;
  renderFields(elements: any): any;
  render(): any;
}

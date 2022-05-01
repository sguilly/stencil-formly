import { EventEmitter } from '../../../stencil-public-runtime';
export declare class FieldInput {
  value: any;
  disabled: boolean;
  templateOptions: any;
  customChange: EventEmitter<any>;
  displayRequired: any;
  renderInput(): any;
  componentWillRender(): Promise<void>;
  render(): any;
}

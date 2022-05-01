import { EventEmitter } from '../../../stencil-public-runtime';
export declare class FieldInput {
  value: any;
  disabled: boolean;
  templateOptions: any;
  customChange: EventEmitter<any>;
  refInput: any;
  instance: any;
  displayRequired: any;
  componentWillLoad(): Promise<any[]>;
  componentDidRender(): void;
  renderInput(): any[];
  componentWillRender(): Promise<void>;
  render(): any;
}

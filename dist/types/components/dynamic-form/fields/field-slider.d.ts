import { EventEmitter } from '../../../stencil-public-runtime';
export declare class FieldSlider {
  value: any;
  disabled: boolean;
  templateOptions: any;
  customChange: EventEmitter<any>;
  refInput: any;
  instance: any;
  displayRequired: any;
  componentWillLoad(): Promise<any[]>;
  componentWillRender(): Promise<void>;
  componentDidRender(): void;
  renderInput(): any;
  render(): any;
}

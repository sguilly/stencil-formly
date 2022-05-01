import { EventEmitter } from '../../../stencil-public-runtime';
export declare class FieldDocs {
  displayRequired: any;
  value: any;
  disabled: boolean;
  templateOptions: any;
  docs: any[];
  customChange: EventEmitter<any>;
  calendarHandler(newValue: any, _oldValue: any): void;
  componentWillLoad(): Promise<void>;
  componentDidRender(): void;
  renderInput(): any;
  removeDoc(index: any): void;
  renderDocs(): any;
  componentWillRender(): Promise<void>;
  render(): any;
}

import { EventEmitter } from '../../../stencil-public-runtime';
export declare class FieldDatepickerComponent {
  value: any;
  disabled: boolean;
  templateOptions: any;
  customChange: EventEmitter<any>;
  el: HTMLElement;
  datePickerElement: any;
  calendar: any;
  displayRequired: any;
  classNames: any;
  dateStr: any;
  calendarHandler(newValue: boolean, _oldValue: boolean): void;
  componentWillLoad(): Promise<any[]>;
  componentDidLoad(): void;
  renderInput(): any[];
  componentWillRender(): Promise<void>;
  render(): any;
}

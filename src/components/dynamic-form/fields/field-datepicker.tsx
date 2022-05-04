import { Component, Event, EventEmitter, Element, State, h, Prop, Watch } from '@stencil/core';
import { getClassNames } from '../../../styles/style';
import { loadScript, loadCss, loadModule, loadNoModule } from '../../../utils/loadScript';

declare var flatpickr: any;
declare var French: any;

@Component({
  tag: 'field-datepicker',
  styleUrl: 'field-datepicker.css',
  shadow: false,
})
export class FieldDatepickerComponent {
  @Prop() value: any;
  @Prop() disabled = false;
  @Prop() templateOptions: any = {};

  @Event() customChange: EventEmitter<any>;

  @Element() el: HTMLElement;

  datePickerElement;

  calendar;

  displayRequired;
  classNames

  @State() dateStr;

  @Watch('value')
  calendarHandler(newValue: boolean, _oldValue: boolean) {
    console.log('New value for value: ', newValue);

    this.calendar.setDate(newValue);
  }

  componentWillLoad() {
    let promises = [];

    promises.push(loadCss('https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css'));

    promises.push(loadModule('https://cdn.jsdelivr.net/npm/flatpickr'));

    promises.push(loadModule('https://cdn.jsdelivr.net/npm/flatpickr/dist/l10n/fr.js'));

    return Promise.all(promises);
  }

  componentDidLoad() {
    let that = this;

    this.calendar = flatpickr(this.datePickerElement, {
      locale: 'fr',
      allowInput: true,
      defaultDate: 'today',
      dateFormat: 'd-m-Y',
      onChange: function (selectedDates, dateStr, _instance) {
        that.dateStr = dateStr;

        that.customChange.emit({ value: new Date(selectedDates) });
      },
    });

    if (this.value) {
      console.log('set value', this.value);
      this.calendar.setDate(this.value);
    }
  }

  renderInput() {
    return [<input class={(this.classNames?.group?.control?.className || '') + (this.displayRequired == true ? ' df-is-required' : '')} type="text" placeholder="Select Date.." ref={el => (this.datePickerElement = el as HTMLElement)}></input>];
  }

  async componentWillRender() {
    this.classNames = getClassNames()
    this.displayRequired = this.templateOptions?.required == true && !this.value;
  }

  render() {
    return (
      <field-container templateOptions={this.templateOptions} displayRequired={this.displayRequired}>
        {this.renderInput()}
      </field-container>
    );
  }
}

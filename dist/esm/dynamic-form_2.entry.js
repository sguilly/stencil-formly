import { r as registerInstance, c as createEvent, h } from './index-1a51116f.js';
import { l as loadCss } from './loadScript-649d145b.js';

const dynamicFormCss = ".df-fields-container{display:flex !important;flex-direction:row !important;flex-wrap:wrap !important;align-content:stretch !important}.df-is-required{border-color:#f14668 !important;color:#f14668 !important}.is-flex-grow-0{flex-grow:0 !important}.is-flex-grow-1{flex-grow:1 !important}.is-flex-grow-2{flex-grow:2 !important}.is-flex-grow-3{flex-grow:3 !important}.is-flex-grow-4{flex-grow:4 !important}.is-flex-grow-5{flex-grow:5 !important}";

const DynamicForm = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.event = createEvent(this, "event", 7);
    this.model = {};
  }
  async componentWillLoad() {
    await loadCss('https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css');
    //await loadCss('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css');
  }
  renderField(element) {
    var _a;
    if (element.disable) {
      element.disable(this.model);
    }
    element.templateOptions.requiredText = ((_a = this.options) === null || _a === void 0 ? void 0 : _a.requiredText) || 'This field is required';
    const Tag = 'field-' + element.type;
    return (h(Tag, { value: this.model[element.key], templateOptions: element.templateOptions, onCustomChange: ev => {
        var _a, _b;
        if ((_a = ev.detail) === null || _a === void 0 ? void 0 : _a.value) {
          this.model[element.key] = (_b = ev.detail) === null || _b === void 0 ? void 0 : _b.value;
        }
        else {
          delete this.model[element.key];
        }
        this.model = Object.assign({}, this.model);
        this.event.emit({ type: 'change', model: this.model });
      } }));
  }
  renderFields(elements) {
    return elements.map(element => {
      var _a, _b;
      let isHide = false;
      if (element.hide) {
        isHide = element.hide(this.model);
      }
      if (isHide == false) {
        if (element.type == 'line') {
          return [
            h("div", { class: "df-fields-container" }, element.fields.map(element => {
              var _a;
              return (h("div", { class: (element.type != 'html' ? (_a = this.options) === null || _a === void 0 ? void 0 : _a.fieldClass : '') + ' is-flex-grow-' + (element.size || 1) + ' ' + (element.className || '') }, this.renderField(element)));
            })),
            h("hr", { style: { 'text-align': 'left' } }),
          ];
        }
        else {
          return [
            h("div", { class: element.type != 'html' ? (_a = this.options) === null || _a === void 0 ? void 0 : _a.fieldClass : '' }, this.renderField(element)),
            ((_b = this.options) === null || _b === void 0 ? void 0 : _b.separator) == true && element.type != 'html' ? h("hr", { style: { 'text-align': 'left' } }) : null,
          ];
        }
      }
    });
  }
  render() {
    var _a;
    console.log('render form', this.model, this.fields);
    return h("div", null, ((_a = this.fields) === null || _a === void 0 ? void 0 : _a.length) ? this.renderFields(this.fields) : null);
  }
};
DynamicForm.style = dynamicFormCss;

const Example1 = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.model = {
      firstName: 'Stéphane',
      lastName: 'GUILLY',
    };
    this.form = [
      {
        type: 'html',
        templateOptions: {
          html: `
        <article class="message is-success mb-4">
          <div class="message-header">
            <p>Success</p>
            
          </div>
          <div class="message-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
          </div>
        </article>`,
        },
      },
      {
        type: 'line',
        fields: [
          {
            key: 'firstName',
            type: 'input',
            templateOptions: {
              label: 'First Name',
              required: true,
            },
            size: '1',
          },
          {
            key: 'lastName',
            type: 'input',
            templateOptions: {
              label: 'Last Name',
              required: true,
            },
            size: '1',
          },
        ],
      },
      {
        key: 'email',
        type: 'input',
        templateOptions: {
          label: 'Email',
          required: true,
        },
      },
      {
        type: 'html',
        templateOptions: {
          html: `
        <article class="message is-warning mb-4">
          <div class="message-header">
            <p>Warning header</p>
            
          </div>
         
        </article>`,
        },
      },
      {
        type: 'line',
        fields: [
          {
            key: 'birthday',
            type: 'datepicker',
            templateOptions: {
              label: 'Birthday Date',
              required: true,
            },
          },
          {
            key: 'birthdayTime',
            type: 'timepicker',
            templateOptions: {
              label: 'Birthday Time',
              required: true,
            },
          },
          {
            key: 'type1',
            type: 'select',
            templateOptions: {
              label: 'Birthday Country',
              required: true,
              options: [
                {
                  id: 1,
                  value: 1,
                  label: 'France',
                },
                {
                  id: 2,
                  value: 2,
                  label: 'Italy',
                },
                {
                  id: 3,
                  value: 3,
                  label: 'Spain',
                },
              ],
            },
          },
          {
            key: 'phone',
            type: 'phonenumber',
            templateOptions: {
              label: 'Phone Number :',
              required: true,
            },
          },
        ],
      },
      {
        key: 'slider',
        type: 'slider',
        templateOptions: {
          label: 'Dark Level :',
          required: true,
        },
      },
      {
        key: 'displayDocs',
        type: 'checkbox',
        templateOptions: {
          label: 'Do you want to add documents ?',
          required: true,
          multiple: false,
          options: [
            {
              value: true,
              label: 'YES',
            },
            {
              value: false,
              label: 'NO',
            },
          ],
        },
      },
      {
        key: 'docs',
        hide: model => {
          var _a;
          return ((_a = model === null || model === void 0 ? void 0 : model.displayDocs) === null || _a === void 0 ? void 0 : _a.length) && model.displayDocs[0] == true ? false : true;
        },
        type: 'docs',
        templateOptions: {
          label: 'Documents :',
          required: true,
        },
      },
      {
        key: 'level',
        type: 'checkbox',
        templateOptions: {
          label: 'Level',
          required: false,
          multiple: true,
          options: [
            {
              value: 1,
              label: 'LOW',
            },
            {
              value: 2,
              label: 'MEDIUM',
            },
            {
              value: 3,
              label: 'HIGH',
            },
          ],
        },
      },
      {
        key: 'comment',
        type: 'textarea',
        templateOptions: {
          label: 'Notes',
          required: true,
        },
      },
    ];
  }
  save() { }
  render() {
    return (h("div", { class: "m-4" }, h("dynamic-form", { model: this.model, fields: this.form, options: {
        fieldClass: 'ml-4 mr-4',
        separator: true,
        requiredText: 'This field is required !',
      } }), ";"));
  }
};

export { DynamicForm as dynamic_form, Example1 as example_1 };

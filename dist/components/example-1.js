import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './dynamic-form2.js';

const Example1$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
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
            <p>Green Header</p>
            
          </div>
          <div class="message-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
          </div>
        </article>`,
        },
      },
      {
        type: 'line',
        separator: true,
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
        separator: true,
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
            <p>Yellow header</p>
            
          </div>
         
        </article>`,
        },
      },
      {
        type: 'line',
        separator: true,
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
        requiredText: 'This field is required !',
        style: 'bulma',
      } }), ";"));
  }
}, [0, "example-1"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["example-1", "dynamic-form"];
  components.forEach(tagName => { switch (tagName) {
    case "example-1":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Example1$1);
      }
      break;
    case "dynamic-form":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const Example1 = Example1$1;
const defineCustomElement = defineCustomElement$1;

export { Example1, defineCustomElement };

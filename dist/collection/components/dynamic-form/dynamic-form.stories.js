//import { html } from 'lit';

//import { expect } from '@storybook/jest';
//import { within, userEvent } from '@storybook/testing-library';

export default {
  title: 'Dynamic-Form/Blocks',
  tags: ['autodocs'],
  component: 'dynamic-form',
};

const model = {
  firstName: 'Stéphane',
  lastName: 'GUILLY',
};

const options = {
  fieldClass: 'ml-4 mr-4',

  requiredText: 'This field is required !',
  style: 'bulma',
};

export const Html = {
  name: 'html',
  args: {
    model,
    options,
    fields: [
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
    ],
  },
  //   play: async ({ args, canvasElement }) => {
  //     console.log('play', args, canvasElement);

  //     canvasElement.addEventListener('didLoad', async e => {
  //       canvasElement.querySelector('#btPlus').click();

  //       const canvas = within(canvasElement);
  //       const button = canvas.getByText('+');
  //       userEvent.click(button);
  //     });
  //   },
};

export const Input1 = {
  name: 'input (required=true,separator=true)',
  args: {
    model,
    options,
    fields: [
      {
        key: 'email',
        type: 'input',
        separator: true,
        templateOptions: {
          label: 'Email',
          required: true,
        },
      },
    ],
  },
};

export const Input2 = {
  name: 'input (required=false)',
  args: {
    model,
    options,
    fields: [
      {
        key: 'email',
        type: 'input',

        templateOptions: {
          label: 'Email',
          required: false,
        },
      },
    ],
  },
};

export const PhoneNumber = {
  name: 'phonenumber',
  args: {
    model,
    options,
    fields: [
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
};

export const Slider = {
  name: 'slider',
  args: {
    model,
    options,
    fields: [
      {
        key: 'slider',
        type: 'slider',
        templateOptions: {
          label: 'Dark Level :',
          required: true,
        },
      },
    ],
  },
};

export const Checkbox1 = {
  name: 'checkbox (multiple=false)',
  args: {
    model,
    options,
    fields: [
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
    ],
  },
};
1;
export const Checkbox2 = {
  name: 'checkbox (multiple=true)',
  args: {
    model,
    options,
    fields: [
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
    ],
  },
};

export const Textarea = {
  name: 'textarea',
  args: {
    model,
    options,
    fields: [
      {
        key: 'comment',
        type: 'textarea',
        templateOptions: {
          label: 'Notes',
          required: true,
        },
      },
    ],
  },
};

export const Select = {
  name: 'select',
  args: {
    model,
    options,
    fields: [
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
    ],
  },
};

export const Line = {
  name: 'line',
  args: {
    model,
    options,
    fields: [
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
    ],
  },
};

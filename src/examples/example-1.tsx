import { Component, h } from '@stencil/core';

@Component({
  tag: 'example-1',
})
export class Example1 {
  model = {
    firstName: 'Stéphane',
    lastName: 'GUILLY',
  };

  form = [
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
      type: 'line',
      fields: [
        
        {
          key: 'birthday',
          type: 'datepicker',
          templateOptions: {
            label: 'Birthday Date',
            required: true,
          }
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
                label: "Spain",
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
        label: "Do you want to add documents ?",
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
        return model?.displayDocs?.length && model.displayDocs[0] == true ? false : true;
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
        label: "Level",
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

  save() {}

  render() {
    return (
      <div class="m-4">
        <dynamic-form
          model={this.model}
          fields={this.form}
          options={{
            fieldClass: 'ml-4 mr-4',
            separator: true,
          }}
        ></dynamic-form>
        ;
      </div>
    );
  }
}

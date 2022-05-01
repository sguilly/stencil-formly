import { Component, h } from '@stencil/core';

@Component({
  tag: 'example-1',
})
export class Example1 {
  model = {
    firstName: 'Stéphane',
    lastName: 'GUILLY 2',
  };

  form = [
    {
      key: 'slider',
      type: 'slider',
      templateOptions: {
        label: 'Fourchette :',
        required: true,
      },
    },
    {
      key: 'phone',
      type: 'phonenumber',
      templateOptions: {
        label: 'Téléphone :',
        required: true,
      },
    },
    {
      key: 'docs',
      hide: model => {
        //console.log("call hide", model);
        return model?.checkbox1 == true;
      },
      type: 'docs',
      templateOptions: {
        label: 'Documents :',
        required: true,
      },
    },

    {
      key: 'checkbox1',
      type: 'checkbox',
      templateOptions: {
        label: "87-Cet accident a-t-il été déclaré à l'assureur ?",
        required: true,
        multiple: false,
        options: [
          {
            value: true,
            label: 'OUI',
          },
          {
            value: false,
            label: 'NON',
          },
        ],
      },
    },
    {
      key: 'checkbox2',
      type: 'checkbox',
      templateOptions: {
        label: "Condition de l'accident",
        required: false,
        multiple: true,
        options: [
          {
            value: 1,
            label: 'VITESSE',
          },
          {
            value: 2,
            label: 'DISTANCE',
          },
          {
            value: 3,
            label: 'VITESSE',
          },
          {
            value: 4,
            label: 'DISTANCE',
          },
          {
            value: 5,
            label: 'VITESSE',
          },
          {
            value: 6,
            label: 'DISTANCE',
          },
          {
            value: 7,
            label: 'VITESSE',
          },
          {
            value: 8,
            label: 'DISTANCE',
          },
          {
            value: 9,
            label: 'VITESSE',
          },
          {
            value: 10,
            label: 'DISTANCE',
          },
        ],
      },
    },
    {
      key: 'date2',
      type: 'datepicker',
      templateOptions: {
        label: 'Date',
        required: true,
      },
    },
    {
      key: 'type1',
      type: 'select',
      templateOptions: {
        label: 'Selection du type',
        required: true,
        options: [
          {
            id: 1,
            value: 1,
            label: 'ID1',
          },
          {
            id: 2,
            value: 2,
            label: 'ID2',
          },
          {
            id: 3,
            value: 3,
            label: 'ID3',
          },
        ],
      },
    },

    {
      key: 'comment',
      type: 'textarea',
      templateOptions: {
        label: 'Commentaires',
        required: true,
      },
    },
    {
      key: 'lastName',
      type: 'input',
      templateOptions: {
        label: 'Nom',
        required: true,
      },
    },
    {
      key: 'phoneNumber',
      type: 'input',
      templateOptions: {
        label: 'Téléphone',
        type: 'number',
        required: false,
      },
      disable: model => {
        //console.log("call disable", model);
        return model?.external == true;
      },
    },
    {
      type: 'line',
      hide: model => {
        return model?.external == true;
      },
      fields: [
        {
          key: 'firstName',
          type: 'input',
          templateOptions: {
            label: 'Prénom',
            required: true,
          },
        },
        {
          key: 'lastName',
          type: 'input',
          templateOptions: {
            label: 'Nom',
            required: true,
          },
        },
        {
          key: 'age',
          type: 'input',
          templateOptions: {
            label: 'Age',
            required: true,
          },
        },
      ],
    },
    {
      type: 'line',
      fields: [
        {
          key: 'firstName',
          type: 'input',
          templateOptions: {
            label: 'Prénom',
            required: true,
          },
          size: '1',
        },
        {
          key: 'lastName',
          type: 'input',
          templateOptions: {
            label: 'Nom',
            required: true,
          },
          size: '3',
        },
      ],
    },
  ];

  save() {}

  render() {
    return (
      <div>
        <button
          class="button"
          onClick={() => {
            this.save();
          }}
        >
          SAUVER
        </button>
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

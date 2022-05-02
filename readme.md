![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# STENCIL-FORMLY

JSON   -->          |  --> Form
:-------------------------:|:-------------------------:
![](https://github.com/sguilly/stencil-formly/raw/main/docs/assets/json.png)  |  ![](https://github.com/sguilly/stencil-formly/raw/main/docs/assets/form.png)

## Getting Started

```bash
npm install
npm run start
```

# USE AS WEB COMPONENT

```html
<head>
    <script type="module" src="https://cdn.jsdelivr.net/gh/sguilly/stencil-formly/dist/stencil-formly/stencil-formly.esm.js"></script>
</head>
```

```html
<body>
    <dynamic-form></dynamic-form>
    <script>
      let df = document.querySelector('dynamic-form');
      df.model = {
        firstName: 'Stéphane',
        lastName: 'GUILLY 2',
      };
      df.fields = [
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
      ];

      df.addEventListener('event', e => {
        console.log('e=', e.detail);
      });
    </script>
  </body>
```

# USE IN STENCIL

```js

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
    }
  ]


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
          onEvent={(ev)=>{
              console.log(ev.detail)
          }}
        ></dynamic-form>
        ;
      </div>
    );
  }
}
```

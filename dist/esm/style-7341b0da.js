import { s as state } from './styleStore-bad52635.js';

function getBulmaClass() {
  return {
    group: {
      className: 'field p-4',
      label: {
        className: 'label'
      },
      control: {
        className: 'input'
      },
      helper: {
        className: 'help is-danger'
      }
    }
  };
}

function getBootstrapClass() {
  return {
    group: {
      className: 'form-group m-2',
      label: {
        className: 'label'
      },
      control: {
        className: 'form-control'
      },
      helper: {
        className: 'form-text text-danger'
      }
    }
  };
}

function getClassNames() {
  if (state.style == 'bulma') {
    return getBulmaClass();
  }
  else if (state.style == 'bootstrap') {
    return getBootstrapClass();
  }
}

export { getClassNames as g };

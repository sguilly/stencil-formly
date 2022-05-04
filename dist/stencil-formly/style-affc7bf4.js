import { s as state } from './styleStore-100e5755.js';

function getBulmaClass() {
  return {
    group: {
      className: 'field m-4',
      label: {
        className: 'label'
      },
      control: {
        className: 'control'
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
      className: 'form-group',
      label: {
        className: 'label'
      },
      control: {
        className: 'form-control'
      },
      helper: {
        className: 'form-text text-muted'
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

'use strict';

const styleStore = require('./styleStore-17ec64a1.js');

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
  if (styleStore.state.style == 'bulma') {
    return getBulmaClass();
  }
  else if (styleStore.state.style == 'bootstrap') {
    return getBootstrapClass();
  }
}

exports.getClassNames = getClassNames;

import { h, Component, Element, Method, Prop, Event } from '@stencil/core';
import { loadScript, loadCss } from '../../utils/loadScript';
import { getValues, filterObject, isDefined } from './utils';
// implements IChoicesProps, IChoicesMethods
export class ChoicesJSStencil {
  async componentWillRender() {
    if (typeof Choices == 'undefined') {
      let promises = [];
      const version = '10.1.0';
      promises.push(loadCss('https://cdn.jsdelivr.net/npm/choices.js@' + version + '/public/assets/styles/choices.min.css'));
      promises.push(loadScript('https://cdn.jsdelivr.net/npm/choices.js@' + version + '/public/assets/scripts/choices.min.js'));
      await Promise.all(promises);
    }
  }
  async highlightItem(item, runEvent) {
    this.choice.highlightItem(item, runEvent);
    return this;
  }
  async unhighlightItem(item) {
    this.choice.unhighlightItem(item);
    return this;
  }
  async highlightAll() {
    this.choice.highlightAll();
    return this;
  }
  async unhighlightAll() {
    this.choice.unhighlightAll();
    return this;
  }
  async removeActiveItemsByValue(value) {
    this.choice.removeActiveItemsByValue(value);
    return this;
  }
  async removeActiveItems(excludedId) {
    this.choice.removeActiveItems(excludedId);
    return this;
  }
  async removeHighlightedItems(runEvent) {
    this.choice.removeHighlightedItems(runEvent);
    return this;
  }
  async showDropdown(focusInput) {
    this.choice.showDropdown(focusInput);
    return this;
  }
  async hideDropdown(blurInput) {
    this.choice.hideDropdown(blurInput);
    return this;
  }
  async getValue(valueOnly) {
    return this.choice.getValue(valueOnly);
  }
  async setValue(args) {
    this.choice.setValue(args);
    return this;
  }
  async setChoiceByValue(value) {
    this.choice.setChoiceByValue(value);
    return this;
  }
  async setChoices(choices, value, label, replaceChoices) {
    this.choice.setChoices(choices, value, label, replaceChoices);
    return this;
  }
  async clearChoices() {
    this.choice.clearChoices();
    return this;
  }
  async clearStore() {
    this.choice.clearStore();
    return this;
  }
  async clearInput() {
    this.choice.clearInput();
    return this;
  }
  async enable() {
    this.choice.enable();
    return this;
  }
  async ajax(fn) {
    this.choice.ajax(fn);
    return this;
  }
  componentDidLoad() {
    this.init();
  }
  componentDidUpdate() {
    this.init();
  }
  disconnectedCallback() {
    this.destroy();
  }
  handleSelect(event) {
    console.log('choices ev', event.target.value);
  }
  render() {
    const attributes = {
      'data-selector': 'root',
      'name': this.name || null,
    };
    // destroy choices element to restore previous dom structure
    // so vdom can replace the element correctly
    this.destroy();
    switch (this.type) {
      case 'single':
        this.element = (h("select", Object.assign({ onInput: event => this.handleSelect(event) }, attributes), this.value ? this.createSelectOptions(this.value) : null));
        break;
      case 'multiple':
        this.element = (h("select", Object.assign({ onInput: event => this.handleSelect(event) }, attributes, { multiple: true }), this.value ? this.createSelectOptions(this.value) : null));
        break;
      case 'text':
      default:
        this.element = h("input", Object.assign({ type: "text", onInput: event => this.handleSelect(event), value: this.value }, attributes));
        break;
    }
    return this.element;
  }
  init() {
    const props = {
      silent: this.silent,
      items: this.items,
      choices: this.choices,
      renderChoiceLimit: this.renderChoiceLimit,
      maxItemCount: this.maxItemCount,
      addItems: this.addItems,
      removeItems: this.removeItems,
      removeItemButton: this.removeItemButton,
      editItems: this.editItems,
      duplicateItemsAllowed: this.duplicateItemsAllowed,
      delimiter: this.delimiter,
      paste: this.paste,
      searchEnabled: this.searchEnabled,
      searchChoices: this.searchChoices,
      searchFields: this.searchFields,
      searchFloor: this.searchFloor,
      searchResultLimit: this.searchResultLimit,
      position: this.position,
      resetScrollPosition: this.resetScrollPosition,
      shouldSort: this.shouldSort,
      shouldSortItems: this.shouldSortItems,
      sorter: this.sorter,
      placeholder: true,
      placeholderValue: this.placeholderValue || (typeof this.placeholder === 'string' && this.placeholder) || ' ',
      searchPlaceholderValue: this.searchPlaceholderValue,
      prependValue: this.prependValue,
      appendValue: this.appendValue,
      renderSelectedChoices: this.renderSelectedChoices,
      loadingText: this.loadingText,
      noResultsText: this.noResultsText,
      noChoicesText: this.noChoicesText,
      itemSelectText: this.itemSelectText,
      addItemText: this.addItemText,
      maxItemText: this.maxItemText,
      uniqueItemText: this.uniqueItemText,
      classNames: this.classNames,
      fuseOptions: this.fuseOptions,
      callbackOnInit: this.callbackOnInit,
      callbackOnCreateTemplates: this.callbackOnCreateTemplates,
      valueComparer: this.valueComparer,
      addItemFilter: this.addItemFilter,
      customAddItemText: this.customAddItemText,
    };
    const settings = filterObject(props, isDefined);
    console.log('new choice', settings);
    this.choice = new Choices(this.root.querySelector('[data-selector="root"]'), settings);
    if (this.valueByDefault) {
      console.log('set default value', this.valueByDefault);
      this.choice.setChoiceByValue(this.valueByDefault);
    }
    else {
      console.log('no default value');
      //this.choice.clearChoices();
    }
    if (this.disable == true) {
      this.choice.disable();
    }
    this.choice.passedElement.element.addEventListener('choice', event => {
      // do something creative here...
      this.callbackChoice.emit(event.detail.choice);
    }, false);
  }
  destroy() {
    if (this.element) {
      this.element = null;
    }
    if (this.choice) {
      this.choice.destroy();
      this.choice = null;
    }
  }
  createSelectOptions(values) {
    return getValues(values).map(value => h("option", { value: value }, value));
  }
  static get is() { return "choices-js"; }
  static get originalStyleUrls() { return {
    "$": ["choices-js.css"]
  }; }
  static get styleUrls() { return {
    "$": ["choices-js.css"]
  }; }
  static get properties() { return {
    "valueByDefault": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "value-by-default",
      "reflect": false
    },
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'single' | 'multiple' | 'text'",
        "resolved": "\"multiple\" | \"single\" | \"text\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "type",
      "reflect": false
    },
    "value": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "value",
      "reflect": false
    },
    "name": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "name",
      "reflect": false
    },
    "disable": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "disable",
      "reflect": false
    },
    "silent": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "silent",
      "reflect": false
    },
    "items": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Array<any>",
        "resolved": "any[]",
        "references": {
          "Array": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "choices": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Array<any>",
        "resolved": "any[]",
        "references": {
          "Array": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "renderChoiceLimit": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "render-choice-limit",
      "reflect": false
    },
    "maxItemCount": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "max-item-count",
      "reflect": false
    },
    "addItems": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "add-items",
      "reflect": false
    },
    "removeItems": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "remove-items",
      "reflect": false
    },
    "removeItemButton": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "remove-item-button",
      "reflect": false
    },
    "editItems": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "edit-items",
      "reflect": false
    },
    "duplicateItemsAllowed": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "duplicate-items-allowed",
      "reflect": false
    },
    "delimiter": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "delimiter",
      "reflect": false
    },
    "paste": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "paste",
      "reflect": false
    },
    "searchEnabled": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "search-enabled",
      "reflect": false
    },
    "searchChoices": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "search-choices",
      "reflect": false
    },
    "searchFields": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Array<string> | string",
        "resolved": "string | string[]",
        "references": {
          "Array": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "search-fields",
      "reflect": false
    },
    "searchFloor": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "search-floor",
      "reflect": false
    },
    "searchResultLimit": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "search-result-limit",
      "reflect": false
    },
    "position": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'auto' | 'top' | 'bottom'",
        "resolved": "\"auto\" | \"bottom\" | \"top\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "position",
      "reflect": false
    },
    "resetScrollPosition": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "reset-scroll-position",
      "reflect": false
    },
    "shouldSort": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "should-sort",
      "reflect": false
    },
    "shouldSortItems": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "should-sort-items",
      "reflect": false
    },
    "sorter": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "SortFn",
        "resolved": "(el1: any, el2: any) => number",
        "references": {
          "SortFn": {
            "location": "import",
            "path": "./interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "placeholder": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "boolean | string",
        "resolved": "boolean | string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "placeholder",
      "reflect": false
    },
    "placeholderValue": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "placeholder-value",
      "reflect": false
    },
    "searchPlaceholderValue": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "search-placeholder-value",
      "reflect": false
    },
    "prependValue": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "prepend-value",
      "reflect": false
    },
    "appendValue": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "append-value",
      "reflect": false
    },
    "renderSelectedChoices": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'always' | 'auto'",
        "resolved": "\"always\" | \"auto\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "render-selected-choices",
      "reflect": false
    },
    "loadingText": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "loading-text",
      "reflect": false
    },
    "noResultsText": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | NoResultsTextFn",
        "resolved": "(() => string) | string",
        "references": {
          "NoResultsTextFn": {
            "location": "import",
            "path": "./interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "no-results-text",
      "reflect": false
    },
    "noChoicesText": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | NoChoicesTextFn",
        "resolved": "(() => string) | string",
        "references": {
          "NoChoicesTextFn": {
            "location": "import",
            "path": "./interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "no-choices-text",
      "reflect": false
    },
    "itemSelectText": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "item-select-text",
      "reflect": false
    },
    "addItemText": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | AddItemTextFn",
        "resolved": "((value: string) => string) | string",
        "references": {
          "AddItemTextFn": {
            "location": "import",
            "path": "./interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "add-item-text",
      "reflect": false
    },
    "maxItemText": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | MaxItemTextFn",
        "resolved": "((maxItemCount: number) => string) | string",
        "references": {
          "MaxItemTextFn": {
            "location": "import",
            "path": "./interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "max-item-text",
      "reflect": false
    },
    "uniqueItemText": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "UniqueItemText",
        "resolved": "((value: string) => string) | string",
        "references": {
          "UniqueItemText": {
            "location": "import",
            "path": "./interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "unique-item-text",
      "reflect": false
    },
    "classNames": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "ClassNames",
        "resolved": "{ containerOuter?: string; containerInner?: string; input?: string; inputCloned?: string; list?: string; listItems?: string; listSingle?: string; listDropdown?: string; item?: string; itemSelectable?: string; itemDisabled?: string; itemChoice?: string; placeholder?: string; group?: string; groupHeading?: string; button?: string; activeState?: string; focusState?: string; openState?: string; disabledState?: string; highlightedState?: string; selectedState: string; flippedState?: string; loadingState?: string; noResults?: string; noChoices?: string; }",
        "references": {
          "ClassNames": {
            "location": "import",
            "path": "./interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "fuseOptions": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "FuseOptions",
        "resolved": "{ id?: string; caseSensitive?: boolean; includeMatches?: boolean; includeScore?: boolean; shouldSort?: boolean; keys?: string[] | object[] | WeightedField[]; verbose?: boolean; tokenize?: boolean; tokenSeparator?: RegExp; matchAllTokens?: boolean; location?: number; distance?: number; threshold?: number; maxPatternLength?: number; minMatchCharLength?: number; findAllMatches?: boolean; sortFn?(a: { score: number; }, b: { score: number; }): number; getFn?(obj: any, path: string): any; }",
        "references": {
          "FuseOptions": {
            "location": "import",
            "path": "./interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "addItemFilter": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | RegExp | ItemFilterFn",
        "resolved": "((value: string) => boolean) | RegExp | string",
        "references": {
          "RegExp": {
            "location": "global"
          },
          "ItemFilterFn": {
            "location": "import",
            "path": "./interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "add-item-filter",
      "reflect": false
    },
    "customAddItemText": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "CustomAddItemText",
        "resolved": "((value: string) => string) | string",
        "references": {
          "CustomAddItemText": {
            "location": "import",
            "path": "./interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "custom-add-item-text",
      "reflect": false
    },
    "callbackOnInit": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "OnInit",
        "resolved": "() => void",
        "references": {
          "OnInit": {
            "location": "import",
            "path": "./interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "callbackOnCreateTemplates": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "OnCreateTemplates",
        "resolved": "(template: any) => any",
        "references": {
          "OnCreateTemplates": {
            "location": "import",
            "path": "./interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "valueComparer": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "ValueCompareFunction",
        "resolved": "(value1: string, value2: string) => boolean",
        "references": {
          "ValueCompareFunction": {
            "location": "import",
            "path": "./interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    }
  }; }
  static get events() { return [{
      "method": "callbackChoice",
      "name": "callbackChoice",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "highlightItem": {
      "complexType": {
        "signature": "(item: HTMLElement, runEvent?: boolean) => Promise<this>",
        "parameters": [{
            "tags": [],
            "text": ""
          }, {
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "HTMLElement": {
            "location": "global"
          }
        },
        "return": "Promise<this>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "unhighlightItem": {
      "complexType": {
        "signature": "(item: HTMLElement) => Promise<this>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "HTMLElement": {
            "location": "global"
          }
        },
        "return": "Promise<this>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "highlightAll": {
      "complexType": {
        "signature": "() => Promise<this>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<this>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "unhighlightAll": {
      "complexType": {
        "signature": "() => Promise<this>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<this>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "removeActiveItemsByValue": {
      "complexType": {
        "signature": "(value: string) => Promise<this>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<this>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "removeActiveItems": {
      "complexType": {
        "signature": "(excludedId?: number) => Promise<this>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<this>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "removeHighlightedItems": {
      "complexType": {
        "signature": "(runEvent?: boolean) => Promise<this>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<this>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "showDropdown": {
      "complexType": {
        "signature": "(focusInput?: boolean) => Promise<this>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<this>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "hideDropdown": {
      "complexType": {
        "signature": "(blurInput?: boolean) => Promise<this>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<this>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "getValue": {
      "complexType": {
        "signature": "(valueOnly?: boolean) => Promise<string | Array<string>>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "Array": {
            "location": "global"
          }
        },
        "return": "Promise<string | string[]>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "setValue": {
      "complexType": {
        "signature": "(args: Array<any>) => Promise<this>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "Array": {
            "location": "global"
          }
        },
        "return": "Promise<this>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "setChoiceByValue": {
      "complexType": {
        "signature": "(value: string | Array<string>) => Promise<this>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "Array": {
            "location": "global"
          }
        },
        "return": "Promise<this>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "setChoices": {
      "complexType": {
        "signature": "(choices: Array<any>, value: string, label: string, replaceChoices?: boolean) => Promise<this>",
        "parameters": [{
            "tags": [],
            "text": ""
          }, {
            "tags": [],
            "text": ""
          }, {
            "tags": [],
            "text": ""
          }, {
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "Array": {
            "location": "global"
          }
        },
        "return": "Promise<this>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "clearChoices": {
      "complexType": {
        "signature": "() => Promise<this>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<this>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "clearStore": {
      "complexType": {
        "signature": "() => Promise<this>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<this>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "clearInput": {
      "complexType": {
        "signature": "() => Promise<this>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<this>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "enable": {
      "complexType": {
        "signature": "() => Promise<this>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<this>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "ajax": {
      "complexType": {
        "signature": "(fn: AjaxFn) => Promise<this>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "AjaxFn": {
            "location": "import",
            "path": "./interfaces"
          }
        },
        "return": "Promise<this>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "root"; }
}

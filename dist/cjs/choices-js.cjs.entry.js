'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e4330bec.js');
const loadScript = require('./loadScript-e4923893.js');

/**
 * Filter out entries from an object.
 *
 * @param obj - object to filter.
 * @param fn - filter function.
 * @returns a new object without the entries satisfying the filter function.
 */
function filterObject(obj, fn) {
  return Object.keys(obj).reduce((accum, property) => {
    const value = obj[property];
    if (fn(value, property, obj)) {
      accum[property] = value;
    }
    return accum;
  }, {});
}
/**
 * Check if given parameter is not undefined.
 *
 * @param value - value to check.
 * @returns whether the value is defined.
 */
function isDefined(value) {
  return typeof value !== 'undefined';
}
/**
 * Returns the list of values.
 *
 * @param value - Value or list of values.
 * @returns List of values.
 */
function getValues(value) {
  return typeof value !== 'undefined'
    ? [].concat(typeof value === 'string' ? value.split(',') : value)
    : [];
}

const choicesJsCss = "choices-js{min-width:200px !important}";

const ChoicesJSStencil = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.callbackChoice = index.createEvent(this, "callbackChoice", 7);
    this.valueByDefault = undefined;
    this.type = undefined;
    this.value = undefined;
    this.name = undefined;
    this.disable = undefined;
    this.silent = undefined;
    this.items = undefined;
    this.choices = undefined;
    this.renderChoiceLimit = undefined;
    this.maxItemCount = undefined;
    this.addItems = undefined;
    this.removeItems = undefined;
    this.removeItemButton = undefined;
    this.editItems = undefined;
    this.duplicateItemsAllowed = undefined;
    this.delimiter = undefined;
    this.paste = undefined;
    this.searchEnabled = undefined;
    this.searchChoices = undefined;
    this.searchFields = undefined;
    this.searchFloor = undefined;
    this.searchResultLimit = undefined;
    this.position = undefined;
    this.resetScrollPosition = undefined;
    this.shouldSort = undefined;
    this.shouldSortItems = undefined;
    this.sorter = undefined;
    this.placeholder = undefined;
    this.placeholderValue = undefined;
    this.searchPlaceholderValue = undefined;
    this.prependValue = undefined;
    this.appendValue = undefined;
    this.renderSelectedChoices = undefined;
    this.loadingText = undefined;
    this.noResultsText = undefined;
    this.noChoicesText = undefined;
    this.itemSelectText = undefined;
    this.addItemText = undefined;
    this.maxItemText = undefined;
    this.uniqueItemText = undefined;
    this.classNames = undefined;
    this.fuseOptions = undefined;
    this.addItemFilter = undefined;
    this.customAddItemText = undefined;
    this.callbackOnInit = undefined;
    this.callbackOnCreateTemplates = undefined;
    this.valueComparer = undefined;
  }
  async componentWillRender() {
    if (typeof Choices == 'undefined') {
      let promises = [];
      const version = '10.2.0';
      promises.push(loadScript.loadCss('https://cdn.jsdelivr.net/npm/choices.js@' + version + '/public/assets/styles/choices.min.css'));
      promises.push(loadScript.loadScript('https://cdn.jsdelivr.net/npm/choices.js@' + version + '/public/assets/scripts/choices.min.js'));
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
        this.element = (index.h("select", Object.assign({ onInput: event => this.handleSelect(event) }, attributes), this.value ? this.createSelectOptions(this.value) : null));
        break;
      case 'multiple':
        this.element = (index.h("select", Object.assign({ onInput: event => this.handleSelect(event) }, attributes, { multiple: true }), this.value ? this.createSelectOptions(this.value) : null));
        break;
      case 'text':
      default:
        this.element = index.h("input", Object.assign({ type: "text", onInput: event => this.handleSelect(event), value: this.value }, attributes));
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
    return getValues(values).map(value => index.h("option", { value: value }, value));
  }
  get root() { return index.getElement(this); }
};
ChoicesJSStencil.style = choicesJsCss;

exports.choices_js = ChoicesJSStencil;

//# sourceMappingURL=choices-js.cjs.entry.js.map
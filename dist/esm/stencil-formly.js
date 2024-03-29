import { p as promiseResolve, b as bootstrapLazy } from './index-4410364a.js';
export { s as setNonce } from './index-4410364a.js';

/*
 Stencil Client Patch Browser v3.2.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
        // TODO(STENCIL-661): Remove code related to the dynamic import shim
        // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["field-container",[[4,"field-container",{"templateOptions":[8,"template-options"],"displayRequired":[4,"display-required"]}]]],["field-select",[[0,"field-select",{"value":[8],"disabled":[4],"templateOptions":[8,"template-options"]}]]],["field-checkbox",[[0,"field-checkbox",{"value":[8],"templateOptions":[8,"template-options"]}]]],["field-datepicker",[[0,"field-datepicker",{"value":[8],"disabled":[4],"templateOptions":[8,"template-options"],"dateStr":[32]}]]],["field-docs",[[0,"field-docs",{"value":[8],"disabled":[4],"templateOptions":[8,"template-options"],"docs":[32]}]]],["field-input",[[0,"field-input",{"value":[8],"disabled":[4],"templateOptions":[8,"template-options"]}]]],["field-phonenumber",[[0,"field-phonenumber",{"value":[8],"disabled":[4],"templateOptions":[8,"template-options"]}]]],["field-slider",[[0,"field-slider",{"value":[8],"disabled":[4],"templateOptions":[8,"template-options"]}]]],["field-textarea",[[0,"field-textarea",{"value":[8],"disabled":[4],"templateOptions":[8,"template-options"]}]]],["field-timepicker",[[0,"field-timepicker",{"value":[8],"disabled":[4],"templateOptions":[8,"template-options"],"dateStr":[32]}]]],["field-html",[[0,"field-html",{"templateOptions":[8,"template-options"]}]]],["dynamic-form_2",[[0,"example-1"],[0,"dynamic-form",{"model":[16],"fields":[8],"options":[8]}]]],["choices-js",[[0,"choices-js",{"valueByDefault":[8,"value-by-default"],"type":[1],"value":[1],"name":[1],"disable":[4],"silent":[4],"items":[16],"choices":[16],"renderChoiceLimit":[2,"render-choice-limit"],"maxItemCount":[2,"max-item-count"],"addItems":[4,"add-items"],"removeItems":[4,"remove-items"],"removeItemButton":[4,"remove-item-button"],"editItems":[4,"edit-items"],"duplicateItemsAllowed":[4,"duplicate-items-allowed"],"delimiter":[1],"paste":[4],"searchEnabled":[4,"search-enabled"],"searchChoices":[4,"search-choices"],"searchFields":[1,"search-fields"],"searchFloor":[2,"search-floor"],"searchResultLimit":[2,"search-result-limit"],"position":[1],"resetScrollPosition":[4,"reset-scroll-position"],"shouldSort":[4,"should-sort"],"shouldSortItems":[4,"should-sort-items"],"sorter":[16],"placeholder":[8],"placeholderValue":[1,"placeholder-value"],"searchPlaceholderValue":[1,"search-placeholder-value"],"prependValue":[1,"prepend-value"],"appendValue":[1,"append-value"],"renderSelectedChoices":[1,"render-selected-choices"],"loadingText":[1,"loading-text"],"noResultsText":[1,"no-results-text"],"noChoicesText":[1,"no-choices-text"],"itemSelectText":[1,"item-select-text"],"addItemText":[1,"add-item-text"],"maxItemText":[1,"max-item-text"],"uniqueItemText":[1,"unique-item-text"],"classNames":[16],"fuseOptions":[16],"addItemFilter":[1,"add-item-filter"],"customAddItemText":[1,"custom-add-item-text"],"callbackOnInit":[16],"callbackOnCreateTemplates":[16],"valueComparer":[16],"highlightItem":[64],"unhighlightItem":[64],"highlightAll":[64],"unhighlightAll":[64],"removeActiveItemsByValue":[64],"removeActiveItems":[64],"removeHighlightedItems":[64],"showDropdown":[64],"hideDropdown":[64],"getValue":[64],"setValue":[64],"setChoiceByValue":[64],"setChoices":[64],"clearChoices":[64],"clearStore":[64],"clearInput":[64],"enable":[64],"ajax":[64]}]]]], options);
});

//# sourceMappingURL=stencil-formly.js.map
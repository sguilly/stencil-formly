/**
 * @link https://github.com/jshjohnson/Choices#classnames
 */
export declare type ClassNames = {
  containerOuter?: string;
  containerInner?: string;
  input?: string;
  inputCloned?: string;
  list?: string;
  listItems?: string;
  listSingle?: string;
  listDropdown?: string;
  item?: string;
  itemSelectable?: string;
  itemDisabled?: string;
  itemChoice?: string;
  placeholder?: string;
  group?: string;
  groupHeading?: string;
  button?: string;
  activeState?: string;
  focusState?: string;
  openState?: string;
  disabledState?: string;
  highlightedState?: string;
  selectedState: string;
  flippedState?: string;
  loadingState?: string;
  noResults?: string;
  noChoices?: string;
};
/**
 * @link https://github.com/krisk/Fuse/blob/v3.6.1/src/typings.d.ts#L51
 */
export declare type WeightedField = {
  [key: string]: any;
  weight: number;
};
/**
 * @version 3.6.1
 * @link https://github.com/krisk/Fuse/blob/v3.6.1/src/typings.d.ts#L43
 */
export declare type FuseOptions = {
  id?: string;
  caseSensitive?: boolean;
  includeMatches?: boolean;
  includeScore?: boolean;
  shouldSort?: boolean;
  keys?: Array<string> | Array<object> | Array<WeightedField>;
  verbose?: boolean;
  tokenize?: boolean;
  tokenSeparator?: RegExp;
  matchAllTokens?: boolean;
  location?: number;
  distance?: number;
  threshold?: number;
  maxPatternLength?: number;
  minMatchCharLength?: number;
  findAllMatches?: boolean;
  sortFn?(a: {
    score: number;
  }, b: {
    score: number;
  }): number;
  getFn?(obj: any, path: string): any;
};
/**
 * @link https://github.com/jshjohnson/Choices#addItemFilter
 */
export declare type ItemFilterFn = (value: string) => boolean;
/**
 * @link https://github.com/jshjohnson/Choices#noresultstext
 */
export declare type NoResultsTextFn = () => string;
/**
 * @link https://github.com/jshjohnson/Choices#nochoicestext
 */
export declare type NoChoicesTextFn = () => string;
/**
 * @link https://github.com/jshjohnson/Choices#additemtext
 */
export declare type AddItemTextFn = ((value: string) => string) | string;
/**
 * @link https://github.com/jshjohnson/Choices#maxitemtext
 */
export declare type MaxItemTextFn = (maxItemCount: number) => string;
/**
 * @link https://github.com/jshjohnson/Choices#sortfilter
 */
export declare type SortFn = (el1: any, el2: any) => number;
export declare type UniqueItemText = ((value: string) => string) | string;
export declare type CustomAddItemText = ((value: string) => string) | string;
/**
 * @link https://github.com/jshjohnson/Choices#callbackoninit
 */
export declare type OnInit = () => void;
/**
 * @link https://github.com/jshjohnson/Choices#callbackoncreatetemplates
 */
export declare type OnCreateTemplates = (template: any) => any;
/**
 * @link https://github.com/jshjohnson/Choices#valuecomparer
 */
export declare type ValueCompareFunction = (value1: string, value2: string) => boolean;
/**
 * @link https://github.com/jshjohnson/Choices#configuration-options
 */
export interface IChoicesProps {
  silent?: boolean;
  items?: Array<any>;
  choices?: Array<any>;
  renderChoiceLimit?: number;
  maxItemCount?: number;
  addItems?: boolean;
  addItemFilter?: string | RegExp | ItemFilterFn | null;
  addItemText?: string | AddItemTextFn;
  removeItems?: boolean;
  removeItemButton?: boolean;
  editItems?: boolean;
  duplicateItemsAllowed?: boolean;
  delimiter?: string;
  paste?: boolean;
  searchEnabled?: boolean;
  searchChoices?: boolean;
  searchFloor?: number;
  searchResultLimit?: number;
  searchFields?: Array<any> | string;
  position?: 'auto' | 'top' | 'bottom';
  resetScrollPosition?: boolean;
  shouldSort?: boolean;
  shouldSortItems?: boolean;
  sorter: SortFn;
  placeholder?: boolean | string;
  placeholderValue?: string | null;
  searchPlaceholderValue?: string | null;
  prependValue?: string | null;
  appendValue?: string | null;
  renderSelectedChoices?: 'always' | 'auto';
  loadingText?: string;
  noResultsText?: string | NoResultsTextFn;
  noChoicesText?: string | NoChoicesTextFn;
  itemSelectText?: string;
  maxItemText?: string | MaxItemTextFn;
  uniqueItemText: UniqueItemText;
  customAddItemText?: CustomAddItemText;
  valueComparer?: ValueCompareFunction;
  classNames?: ClassNames;
  fuseOptions?: FuseOptions;
  callbackOnInit?: OnInit;
  callbackOnCreateTemplates?: OnCreateTemplates;
}
/**
 * @link https://github.com/jshjohnson/Choices#ajaxfn
 */
export declare type AjaxFn = (callback: any) => void;
/**
 * @link https://github.com/jshjohnson/Choices#methods
 */
export interface IChoicesMethods {
  highlightItem(item: Element, runEvent?: boolean): any;
  unhighlightItem(item: Element): any;
  highlightAll(): any;
  unhighlightAll(): any;
  removeActiveItemsByValue(value: any): any;
  removeActiveItems(excludedId: any): any;
  removeHighlightedItems(): any;
  showDropdown(): any;
  hideDropdown(): any;
  setChoices(choices: any, value: any, label: any, replaceChoices: any): any;
  clearChoices(): any;
  getValue(valueOnly: any): any;
  setValue(args: any): any;
  setChoiceByValue(value: string | Array<string>): any;
  clearStore(): any;
  clearInput(): any;
  disable(): any;
  enable(): any;
}

/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { AddItemTextFn, AjaxFn, ClassNames, CustomAddItemText, FuseOptions, ItemFilterFn, MaxItemTextFn, NoChoicesTextFn, NoResultsTextFn, OnCreateTemplates, OnInit, SortFn, UniqueItemText, ValueCompareFunction } from "./components/choices-js/interfaces";
export { AddItemTextFn, AjaxFn, ClassNames, CustomAddItemText, FuseOptions, ItemFilterFn, MaxItemTextFn, NoChoicesTextFn, NoResultsTextFn, OnCreateTemplates, OnInit, SortFn, UniqueItemText, ValueCompareFunction } from "./components/choices-js/interfaces";
export namespace Components {
    interface ChoicesJs {
        "addItemFilter": string | RegExp | ItemFilterFn;
        "addItemText": string | AddItemTextFn;
        "addItems": boolean;
        "ajax": (fn: AjaxFn) => Promise<this>;
        "appendValue": string;
        "callbackOnCreateTemplates": OnCreateTemplates;
        "callbackOnInit": OnInit;
        "choices": Array<any>;
        "classNames": ClassNames;
        "clearChoices": () => Promise<this>;
        "clearInput": () => Promise<this>;
        "clearStore": () => Promise<this>;
        "customAddItemText": CustomAddItemText;
        "delimiter": string;
        "disable": boolean;
        "duplicateItemsAllowed": boolean;
        "editItems": boolean;
        "enable": () => Promise<this>;
        "fuseOptions": FuseOptions;
        "getValue": (valueOnly?: boolean) => Promise<string | Array<string>>;
        "hideDropdown": (blurInput?: boolean) => Promise<this>;
        "highlightAll": () => Promise<this>;
        "highlightItem": (item: HTMLElement, runEvent?: boolean) => Promise<this>;
        "itemSelectText": string;
        "items": Array<any>;
        "loadingText": string;
        "maxItemCount": number;
        "maxItemText": string | MaxItemTextFn;
        "name": string;
        "noChoicesText": string | NoChoicesTextFn;
        "noResultsText": string | NoResultsTextFn;
        "paste": boolean;
        "placeholder": boolean | string;
        "placeholderValue": string;
        "position": 'auto' | 'top' | 'bottom';
        "prependValue": string;
        "removeActiveItems": (excludedId?: number) => Promise<this>;
        "removeActiveItemsByValue": (value: string) => Promise<this>;
        "removeHighlightedItems": (runEvent?: boolean) => Promise<this>;
        "removeItemButton": boolean;
        "removeItems": boolean;
        "renderChoiceLimit": number;
        "renderSelectedChoices": 'always' | 'auto';
        "resetScrollPosition": boolean;
        "searchChoices": boolean;
        "searchEnabled": boolean;
        "searchFields": Array<string> | string;
        "searchFloor": number;
        "searchPlaceholderValue": string;
        "searchResultLimit": number;
        "setChoiceByValue": (value: string | Array<string>) => Promise<this>;
        "setChoices": (choices: Array<any>, value: string, label: string, replaceChoices?: boolean) => Promise<this>;
        "setValue": (args: Array<any>) => Promise<this>;
        "shouldSort": boolean;
        "shouldSortItems": boolean;
        "showDropdown": (focusInput?: boolean) => Promise<this>;
        "silent": boolean;
        "sorter": SortFn;
        "type"?: 'single' | 'multiple' | 'text';
        "unhighlightAll": () => Promise<this>;
        "unhighlightItem": (item: HTMLElement) => Promise<this>;
        "uniqueItemText": UniqueItemText;
        "value": string;
        "valueByDefault": any;
        "valueComparer": ValueCompareFunction;
    }
    interface DynamicForm {
        "fields": any;
        "model": {};
        "options": any;
    }
    interface Example1 {
    }
    interface FieldCheckbox {
        "templateOptions": any;
        "value": any;
    }
    interface FieldContainer {
        "displayRequired": boolean;
        "templateOptions": any;
    }
    interface FieldDatepicker {
        "disabled": boolean;
        "templateOptions": any;
        "value": any;
    }
    interface FieldDocs {
        "disabled": boolean;
        "templateOptions": any;
        "value": any;
    }
    interface FieldHtml {
        "templateOptions": any;
    }
    interface FieldInput {
        "disabled": boolean;
        "templateOptions": any;
        "value": any;
    }
    interface FieldPhonenumber {
        "disabled": boolean;
        "templateOptions": any;
        "value": any;
    }
    interface FieldSelect {
        "disabled": boolean;
        "templateOptions": any;
        "value": any;
    }
    interface FieldSlider {
        "disabled": boolean;
        "templateOptions": any;
        "value": any;
    }
    interface FieldTextarea {
        "disabled": boolean;
        "templateOptions": any;
        "value": any;
    }
    interface FieldTimepicker {
        "disabled": boolean;
        "templateOptions": any;
        "value": any;
    }
}
export interface ChoicesJsCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLChoicesJsElement;
}
export interface DynamicFormCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLDynamicFormElement;
}
export interface FieldCheckboxCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLFieldCheckboxElement;
}
export interface FieldDatepickerCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLFieldDatepickerElement;
}
export interface FieldDocsCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLFieldDocsElement;
}
export interface FieldInputCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLFieldInputElement;
}
export interface FieldPhonenumberCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLFieldPhonenumberElement;
}
export interface FieldSelectCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLFieldSelectElement;
}
export interface FieldSliderCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLFieldSliderElement;
}
export interface FieldTextareaCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLFieldTextareaElement;
}
export interface FieldTimepickerCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLFieldTimepickerElement;
}
declare global {
    interface HTMLChoicesJsElement extends Components.ChoicesJs, HTMLStencilElement {
    }
    var HTMLChoicesJsElement: {
        prototype: HTMLChoicesJsElement;
        new (): HTMLChoicesJsElement;
    };
    interface HTMLDynamicFormElement extends Components.DynamicForm, HTMLStencilElement {
    }
    var HTMLDynamicFormElement: {
        prototype: HTMLDynamicFormElement;
        new (): HTMLDynamicFormElement;
    };
    interface HTMLExample1Element extends Components.Example1, HTMLStencilElement {
    }
    var HTMLExample1Element: {
        prototype: HTMLExample1Element;
        new (): HTMLExample1Element;
    };
    interface HTMLFieldCheckboxElement extends Components.FieldCheckbox, HTMLStencilElement {
    }
    var HTMLFieldCheckboxElement: {
        prototype: HTMLFieldCheckboxElement;
        new (): HTMLFieldCheckboxElement;
    };
    interface HTMLFieldContainerElement extends Components.FieldContainer, HTMLStencilElement {
    }
    var HTMLFieldContainerElement: {
        prototype: HTMLFieldContainerElement;
        new (): HTMLFieldContainerElement;
    };
    interface HTMLFieldDatepickerElement extends Components.FieldDatepicker, HTMLStencilElement {
    }
    var HTMLFieldDatepickerElement: {
        prototype: HTMLFieldDatepickerElement;
        new (): HTMLFieldDatepickerElement;
    };
    interface HTMLFieldDocsElement extends Components.FieldDocs, HTMLStencilElement {
    }
    var HTMLFieldDocsElement: {
        prototype: HTMLFieldDocsElement;
        new (): HTMLFieldDocsElement;
    };
    interface HTMLFieldHtmlElement extends Components.FieldHtml, HTMLStencilElement {
    }
    var HTMLFieldHtmlElement: {
        prototype: HTMLFieldHtmlElement;
        new (): HTMLFieldHtmlElement;
    };
    interface HTMLFieldInputElement extends Components.FieldInput, HTMLStencilElement {
    }
    var HTMLFieldInputElement: {
        prototype: HTMLFieldInputElement;
        new (): HTMLFieldInputElement;
    };
    interface HTMLFieldPhonenumberElement extends Components.FieldPhonenumber, HTMLStencilElement {
    }
    var HTMLFieldPhonenumberElement: {
        prototype: HTMLFieldPhonenumberElement;
        new (): HTMLFieldPhonenumberElement;
    };
    interface HTMLFieldSelectElement extends Components.FieldSelect, HTMLStencilElement {
    }
    var HTMLFieldSelectElement: {
        prototype: HTMLFieldSelectElement;
        new (): HTMLFieldSelectElement;
    };
    interface HTMLFieldSliderElement extends Components.FieldSlider, HTMLStencilElement {
    }
    var HTMLFieldSliderElement: {
        prototype: HTMLFieldSliderElement;
        new (): HTMLFieldSliderElement;
    };
    interface HTMLFieldTextareaElement extends Components.FieldTextarea, HTMLStencilElement {
    }
    var HTMLFieldTextareaElement: {
        prototype: HTMLFieldTextareaElement;
        new (): HTMLFieldTextareaElement;
    };
    interface HTMLFieldTimepickerElement extends Components.FieldTimepicker, HTMLStencilElement {
    }
    var HTMLFieldTimepickerElement: {
        prototype: HTMLFieldTimepickerElement;
        new (): HTMLFieldTimepickerElement;
    };
    interface HTMLElementTagNameMap {
        "choices-js": HTMLChoicesJsElement;
        "dynamic-form": HTMLDynamicFormElement;
        "example-1": HTMLExample1Element;
        "field-checkbox": HTMLFieldCheckboxElement;
        "field-container": HTMLFieldContainerElement;
        "field-datepicker": HTMLFieldDatepickerElement;
        "field-docs": HTMLFieldDocsElement;
        "field-html": HTMLFieldHtmlElement;
        "field-input": HTMLFieldInputElement;
        "field-phonenumber": HTMLFieldPhonenumberElement;
        "field-select": HTMLFieldSelectElement;
        "field-slider": HTMLFieldSliderElement;
        "field-textarea": HTMLFieldTextareaElement;
        "field-timepicker": HTMLFieldTimepickerElement;
    }
}
declare namespace LocalJSX {
    interface ChoicesJs {
        "addItemFilter"?: string | RegExp | ItemFilterFn;
        "addItemText"?: string | AddItemTextFn;
        "addItems"?: boolean;
        "appendValue"?: string;
        "callbackOnCreateTemplates"?: OnCreateTemplates;
        "callbackOnInit"?: OnInit;
        "choices"?: Array<any>;
        "classNames"?: ClassNames;
        "customAddItemText"?: CustomAddItemText;
        "delimiter"?: string;
        "disable"?: boolean;
        "duplicateItemsAllowed"?: boolean;
        "editItems"?: boolean;
        "fuseOptions"?: FuseOptions;
        "itemSelectText"?: string;
        "items"?: Array<any>;
        "loadingText"?: string;
        "maxItemCount"?: number;
        "maxItemText"?: string | MaxItemTextFn;
        "name"?: string;
        "noChoicesText"?: string | NoChoicesTextFn;
        "noResultsText"?: string | NoResultsTextFn;
        "onCallbackChoice"?: (event: ChoicesJsCustomEvent<any>) => void;
        "paste"?: boolean;
        "placeholder"?: boolean | string;
        "placeholderValue"?: string;
        "position"?: 'auto' | 'top' | 'bottom';
        "prependValue"?: string;
        "removeItemButton"?: boolean;
        "removeItems"?: boolean;
        "renderChoiceLimit"?: number;
        "renderSelectedChoices"?: 'always' | 'auto';
        "resetScrollPosition"?: boolean;
        "searchChoices"?: boolean;
        "searchEnabled"?: boolean;
        "searchFields"?: Array<string> | string;
        "searchFloor"?: number;
        "searchPlaceholderValue"?: string;
        "searchResultLimit"?: number;
        "shouldSort"?: boolean;
        "shouldSortItems"?: boolean;
        "silent"?: boolean;
        "sorter"?: SortFn;
        "type"?: 'single' | 'multiple' | 'text';
        "uniqueItemText"?: UniqueItemText;
        "value"?: string;
        "valueByDefault"?: any;
        "valueComparer"?: ValueCompareFunction;
    }
    interface DynamicForm {
        "fields"?: any;
        "model"?: {};
        "onEvent"?: (event: DynamicFormCustomEvent<any>) => void;
        "options"?: any;
    }
    interface Example1 {
    }
    interface FieldCheckbox {
        "onCustomChange"?: (event: FieldCheckboxCustomEvent<any>) => void;
        "templateOptions"?: any;
        "value"?: any;
    }
    interface FieldContainer {
        "displayRequired"?: boolean;
        "templateOptions"?: any;
    }
    interface FieldDatepicker {
        "disabled"?: boolean;
        "onCustomChange"?: (event: FieldDatepickerCustomEvent<any>) => void;
        "templateOptions"?: any;
        "value"?: any;
    }
    interface FieldDocs {
        "disabled"?: boolean;
        "onCustomChange"?: (event: FieldDocsCustomEvent<any>) => void;
        "templateOptions"?: any;
        "value"?: any;
    }
    interface FieldHtml {
        "templateOptions"?: any;
    }
    interface FieldInput {
        "disabled"?: boolean;
        "onCustomChange"?: (event: FieldInputCustomEvent<any>) => void;
        "templateOptions"?: any;
        "value"?: any;
    }
    interface FieldPhonenumber {
        "disabled"?: boolean;
        "onCustomChange"?: (event: FieldPhonenumberCustomEvent<any>) => void;
        "templateOptions"?: any;
        "value"?: any;
    }
    interface FieldSelect {
        "disabled"?: boolean;
        "onCustomChange"?: (event: FieldSelectCustomEvent<any>) => void;
        "templateOptions"?: any;
        "value"?: any;
    }
    interface FieldSlider {
        "disabled"?: boolean;
        "onCustomChange"?: (event: FieldSliderCustomEvent<any>) => void;
        "templateOptions"?: any;
        "value"?: any;
    }
    interface FieldTextarea {
        "disabled"?: boolean;
        "onCustomChange"?: (event: FieldTextareaCustomEvent<any>) => void;
        "templateOptions"?: any;
        "value"?: any;
    }
    interface FieldTimepicker {
        "disabled"?: boolean;
        "onCustomChange"?: (event: FieldTimepickerCustomEvent<any>) => void;
        "templateOptions"?: any;
        "value"?: any;
    }
    interface IntrinsicElements {
        "choices-js": ChoicesJs;
        "dynamic-form": DynamicForm;
        "example-1": Example1;
        "field-checkbox": FieldCheckbox;
        "field-container": FieldContainer;
        "field-datepicker": FieldDatepicker;
        "field-docs": FieldDocs;
        "field-html": FieldHtml;
        "field-input": FieldInput;
        "field-phonenumber": FieldPhonenumber;
        "field-select": FieldSelect;
        "field-slider": FieldSlider;
        "field-textarea": FieldTextarea;
        "field-timepicker": FieldTimepicker;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "choices-js": LocalJSX.ChoicesJs & JSXBase.HTMLAttributes<HTMLChoicesJsElement>;
            "dynamic-form": LocalJSX.DynamicForm & JSXBase.HTMLAttributes<HTMLDynamicFormElement>;
            "example-1": LocalJSX.Example1 & JSXBase.HTMLAttributes<HTMLExample1Element>;
            "field-checkbox": LocalJSX.FieldCheckbox & JSXBase.HTMLAttributes<HTMLFieldCheckboxElement>;
            "field-container": LocalJSX.FieldContainer & JSXBase.HTMLAttributes<HTMLFieldContainerElement>;
            "field-datepicker": LocalJSX.FieldDatepicker & JSXBase.HTMLAttributes<HTMLFieldDatepickerElement>;
            "field-docs": LocalJSX.FieldDocs & JSXBase.HTMLAttributes<HTMLFieldDocsElement>;
            "field-html": LocalJSX.FieldHtml & JSXBase.HTMLAttributes<HTMLFieldHtmlElement>;
            "field-input": LocalJSX.FieldInput & JSXBase.HTMLAttributes<HTMLFieldInputElement>;
            "field-phonenumber": LocalJSX.FieldPhonenumber & JSXBase.HTMLAttributes<HTMLFieldPhonenumberElement>;
            "field-select": LocalJSX.FieldSelect & JSXBase.HTMLAttributes<HTMLFieldSelectElement>;
            "field-slider": LocalJSX.FieldSlider & JSXBase.HTMLAttributes<HTMLFieldSliderElement>;
            "field-textarea": LocalJSX.FieldTextarea & JSXBase.HTMLAttributes<HTMLFieldTextareaElement>;
            "field-timepicker": LocalJSX.FieldTimepicker & JSXBase.HTMLAttributes<HTMLFieldTimepickerElement>;
        }
    }
}

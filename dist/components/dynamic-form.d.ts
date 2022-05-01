import type { Components, JSX } from "../types/components";

interface DynamicForm extends Components.DynamicForm, HTMLElement {}
export const DynamicForm: {
  prototype: DynamicForm;
  new (): DynamicForm;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

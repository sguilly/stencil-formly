import type { Components, JSX } from "../types/components";

interface FieldCheckbox extends Components.FieldCheckbox, HTMLElement {}
export const FieldCheckbox: {
  prototype: FieldCheckbox;
  new (): FieldCheckbox;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

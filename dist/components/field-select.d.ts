import type { Components, JSX } from "../types/components";

interface FieldSelect extends Components.FieldSelect, HTMLElement {}
export const FieldSelect: {
  prototype: FieldSelect;
  new (): FieldSelect;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

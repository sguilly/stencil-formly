import type { Components, JSX } from "../types/components";

interface FieldInput extends Components.FieldInput, HTMLElement {}
export const FieldInput: {
  prototype: FieldInput;
  new (): FieldInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

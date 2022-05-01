import type { Components, JSX } from "../types/components";

interface FieldPhonenumber extends Components.FieldPhonenumber, HTMLElement {}
export const FieldPhonenumber: {
  prototype: FieldPhonenumber;
  new (): FieldPhonenumber;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

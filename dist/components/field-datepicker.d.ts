import type { Components, JSX } from "../types/components";

interface FieldDatepicker extends Components.FieldDatepicker, HTMLElement {}
export const FieldDatepicker: {
  prototype: FieldDatepicker;
  new (): FieldDatepicker;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

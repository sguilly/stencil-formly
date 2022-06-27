import type { Components, JSX } from "../types/components";

interface FieldTimepicker extends Components.FieldTimepicker, HTMLElement {}
export const FieldTimepicker: {
  prototype: FieldTimepicker;
  new (): FieldTimepicker;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

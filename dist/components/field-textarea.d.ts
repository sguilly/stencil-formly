import type { Components, JSX } from "../types/components";

interface FieldTextarea extends Components.FieldTextarea, HTMLElement {}
export const FieldTextarea: {
  prototype: FieldTextarea;
  new (): FieldTextarea;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

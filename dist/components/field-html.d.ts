import type { Components, JSX } from "../types/components";

interface FieldHtml extends Components.FieldHtml, HTMLElement {}
export const FieldHtml: {
  prototype: FieldHtml;
  new (): FieldHtml;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

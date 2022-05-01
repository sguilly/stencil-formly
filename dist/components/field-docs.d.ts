import type { Components, JSX } from "../types/components";

interface FieldDocs extends Components.FieldDocs, HTMLElement {}
export const FieldDocs: {
  prototype: FieldDocs;
  new (): FieldDocs;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

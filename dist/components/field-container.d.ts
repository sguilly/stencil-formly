import type { Components, JSX } from "../types/components";

interface FieldContainer extends Components.FieldContainer, HTMLElement {}
export const FieldContainer: {
  prototype: FieldContainer;
  new (): FieldContainer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

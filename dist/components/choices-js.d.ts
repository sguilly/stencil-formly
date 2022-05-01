import type { Components, JSX } from "../types/components";

interface ChoicesJs extends Components.ChoicesJs, HTMLElement {}
export const ChoicesJs: {
  prototype: ChoicesJs;
  new (): ChoicesJs;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

import type { Components, JSX } from "../types/components";

interface Example1 extends Components.Example1, HTMLElement {}
export const Example1: {
  prototype: Example1;
  new (): Example1;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

import type { Components, JSX } from "../types/components";

interface FieldSlider extends Components.FieldSlider, HTMLElement {}
export const FieldSlider: {
  prototype: FieldSlider;
  new (): FieldSlider;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

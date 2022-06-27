import { createStore } from '@stencil/store';
const { state, onChange } = createStore({
  style: 'bulma',
});
onChange('style', value => {
  state.style = value;
});
export default { state, onChange };

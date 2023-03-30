'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e4330bec.js');
const loadScript = require('./loadScript-e4923893.js');

const FieldSlider = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.customChange = index.createEvent(this, "customChange", 7);
    this.value = undefined;
    this.disabled = false;
    this.templateOptions = {};
  }
  async componentWillLoad() {
    let promises = [];
    promises.push(loadScript.loadCss('https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/15.5.1/nouislider.min.css'));
    promises.push(loadScript.loadScript('https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/15.5.1/nouislider.min.js'));
    promises.push(loadScript.loadScript('https://cdnjs.cloudflare.com/ajax/libs/wnumb/1.2.0/wNumb.min.js'));
    return Promise.all(promises);
  }
  async componentWillRender() {
    var _a;
    this.displayRequired = ((_a = this.templateOptions) === null || _a === void 0 ? void 0 : _a.required) == true && !this.value;
  }
  componentDidRender() {
    console.log('ref', this.refInput);
    if (!this.instance) {
      this.instance = noUiSlider.create(this.refInput, {
        start: this.value ? this.value : 50,
        step: 10,
        tooltips: [wNumb({ decimals: 0 })],
        connect: 'lower',
        range: {
          min: 0,
          max: 100,
        },
      });
      this.instance.on('end', () => {
        this.value = Number(this.instance.get());
        this.customChange.emit({ value: this.value });
      });
    }
    if (this.value) {
      this.instance.set(this.value);
    }
  }
  renderInput() {
    return index.h("div", { ref: el => (this.refInput = el) });
  }
  render() {
    return (index.h("field-container", { templateOptions: this.templateOptions, displayRequired: this.displayRequired }, this.renderInput()));
  }
};

exports.field_slider = FieldSlider;

//# sourceMappingURL=field-slider.cjs.entry.js.map
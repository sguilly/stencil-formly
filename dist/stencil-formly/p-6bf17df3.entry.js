import{r as s,c as i,h as t}from"./p-6eaec69f.js";import{l as e,b as n}from"./p-fdd7e6e3.js";const r=class{constructor(t){s(this,t),this.customChange=i(this,"customChange",7),this.disabled=!1,this.templateOptions={}}async componentWillLoad(){let s=[];return s.push(e("https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/15.5.1/nouislider.min.css")),s.push(n("https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/15.5.1/nouislider.min.js")),s.push(n("https://cdnjs.cloudflare.com/ajax/libs/wnumb/1.2.0/wNumb.min.js")),Promise.all(s)}async componentWillRender(){var s;this.displayRequired=1==(null===(s=this.templateOptions)||void 0===s?void 0:s.required)&&!this.value}componentDidRender(){console.log("ref",this.refInput),this.instance||(this.instance=noUiSlider.create(this.refInput,{start:this.value?this.value:50,step:10,tooltips:[wNumb({decimals:0})],connect:"lower",range:{min:0,max:100}}),this.instance.on("end",(()=>{this.value=Number(this.instance.get()),this.customChange.emit({value:this.value})}))),this.value&&this.instance.set(this.value)}renderInput(){return t("div",{ref:s=>this.refInput=s})}render(){return t("field-container",{templateOptions:this.templateOptions,displayRequired:this.displayRequired},this.renderInput())}};export{r as field_slider}
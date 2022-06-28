import{r as e,c as t,h as i}from"./p-6eaec69f.js";import{l}from"./p-fdd7e6e3.js";import{s}from"./p-772cffa5.js";const a=class{constructor(i){e(this,i),this.event=t(this,"event",7),this.model={}}async componentWillLoad(){let e=[];this.options.style&&(s.style=this.options.style),"bulma"==s.style?e.push(l("https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css")):"bootstrap"==s.style&&e.push(l("https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css")),e.length&&await Promise.all(e)}renderField(e){var t;return e.disable&&e.disable(this.model),e.templateOptions.requiredText=(null===(t=this.options)||void 0===t?void 0:t.requiredText)||"This field is required",i("field-"+e.type,{value:this.model[e.key],templateOptions:e.templateOptions,onCustomChange:t=>{var i,l;(null===(i=t.detail)||void 0===i?void 0:i.value)?this.model[e.key]=null===(l=t.detail)||void 0===l?void 0:l.value:delete this.model[e.key],this.model=Object.assign({},this.model),this.event.emit({type:"change",model:this.model})}})}renderFields(e){return e.map((e=>{var t;let l=!1;if(e.hide&&(l=e.hide(this.model)),0==l)return"line"==e.type?[i("div",{class:"df-fields-container"},e.fields.map((e=>{var t;return i("div",{class:("html"!=e.type?null===(t=this.options)||void 0===t?void 0:t.fieldClass:"")+" is-flex-grow-"+(e.size||1)+" "+(e.className||"")},this.renderField(e))}))),1==e.separator?i("hr",{style:{"text-align":"left"}}):null]:[i("div",{class:"html"!=e.type?null===(t=this.options)||void 0===t?void 0:t.fieldClass:""},this.renderField(e)),1==e.separator?i("hr",{style:{"text-align":"left"}}):null]}))}render(){var e;return console.log("render form",this.model,this.fields),i("div",null,(null===(e=this.fields)||void 0===e?void 0:e.length)?this.renderFields(this.fields):null)}};a.style=".df-fields-container{display:flex !important;flex-direction:row !important;flex-wrap:wrap !important;align-content:stretch !important}.df-is-required{border-color:#f14668 !important;color:#f14668 !important}.is-flex-grow-0{flex-grow:0 !important}.is-flex-grow-1{flex-grow:1 !important}.is-flex-grow-2{flex-grow:2 !important}.is-flex-grow-3{flex-grow:3 !important}.is-flex-grow-4{flex-grow:4 !important}.is-flex-grow-5{flex-grow:5 !important}";const r=class{constructor(t){e(this,t),this.model={firstName:"Stéphane",lastName:"GUILLY"},this.form=[{type:"html",templateOptions:{html:'\n        <article class="message is-success mb-4">\n          <div class="message-header">\n            <p>Green Header</p>\n            \n          </div>\n          <div class="message-body">\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.\n          </div>\n        </article>'}},{type:"line",separator:!0,fields:[{key:"firstName",type:"input",templateOptions:{label:"First Name",required:!0},size:"1"},{key:"lastName",type:"input",templateOptions:{label:"Last Name",required:!0},size:"1"}]},{key:"email",type:"input",separator:!0,templateOptions:{label:"Email",required:!0}},{type:"html",templateOptions:{html:'\n        <article class="message is-warning mb-4">\n          <div class="message-header">\n            <p>Yellow header</p>\n            \n          </div>\n         \n        </article>'}},{type:"line",separator:!0,fields:[{key:"birthday",type:"datepicker",templateOptions:{label:"Birthday Date",required:!0}},{key:"birthdayTime",type:"timepicker",templateOptions:{label:"Birthday Time",required:!0}},{key:"type1",type:"select",templateOptions:{label:"Birthday Country",required:!0,options:[{id:1,value:1,label:"France"},{id:2,value:2,label:"Italy"},{id:3,value:3,label:"Spain"}]}},{key:"phone",type:"phonenumber",templateOptions:{label:"Phone Number :",required:!0}}]},{key:"slider",type:"slider",templateOptions:{label:"Dark Level :",required:!0}},{key:"displayDocs",type:"checkbox",templateOptions:{label:"Do you want to add documents ?",required:!0,multiple:!1,options:[{value:!0,label:"YES"},{value:!1,label:"NO"}]}},{key:"docs",hide:e=>{var t;return!(null===(t=null==e?void 0:e.displayDocs)||void 0===t?void 0:t.length)||1!=e.displayDocs[0]},type:"docs",templateOptions:{label:"Documents :",required:!0}},{key:"level",type:"checkbox",templateOptions:{label:"Level",required:!1,multiple:!0,options:[{value:1,label:"LOW"},{value:2,label:"MEDIUM"},{value:3,label:"HIGH"}]}},{key:"comment",type:"textarea",templateOptions:{label:"Notes",required:!0}}]}save(){}render(){return i("div",{class:"m-4"},i("dynamic-form",{model:this.model,fields:this.form,options:{fieldClass:"ml-4 mr-4",requiredText:"This field is required !",style:"bulma"}}),";")}};export{a as dynamic_form,r as example_1}
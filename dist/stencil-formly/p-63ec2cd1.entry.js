import{r as t,c as e,h as i,a as s}from"./p-e187c62c.js";import{g as r}from"./p-df16a3ce.js";import{l as n,a}from"./p-fdd7e6e3.js";import"./p-7f579604.js";const l='input[type="checkbox"]{transform:scale(1)}custom-datepicker input{width:100px !important}';const o=class{constructor(i){t(this,i);this.customChange=e(this,"customChange",7);this.value=undefined;this.disabled=false;this.templateOptions={};this.dateStr=undefined}calendarHandler(t,e){console.log("New value for value: ",t);this.calendar.setDate(t)}componentWillLoad(){let t=[];t.push(n("https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css"));t.push(a("https://cdn.jsdelivr.net/npm/flatpickr"));t.push(a("https://cdn.jsdelivr.net/npm/flatpickr/dist/l10n/fr.js"));return Promise.all(t)}componentDidLoad(){let t=this;this.calendar=flatpickr(this.datePickerElement,{locale:"fr",allowInput:true,defaultDate:"today",dateFormat:"d-m-Y",onChange:function(e,i,s){t.dateStr=i;t.customChange.emit({value:new Date(e)})}});if(this.value){console.log("set value",this.value);this.calendar.setDate(this.value)}}renderInput(){var t,e,s;return[i("input",{class:(((s=(e=(t=this.classNames)===null||t===void 0?void 0:t.group)===null||e===void 0?void 0:e.control)===null||s===void 0?void 0:s.className)||"")+(this.displayRequired==true?" df-is-required":""),type:"text",placeholder:"Select Date..",ref:t=>this.datePickerElement=t})]}async componentWillRender(){var t;this.classNames=r();this.displayRequired=((t=this.templateOptions)===null||t===void 0?void 0:t.required)==true&&!this.value}render(){return i("field-container",{templateOptions:this.templateOptions,displayRequired:this.displayRequired},this.renderInput())}get el(){return s(this)}static get watchers(){return{value:["calendarHandler"]}}};o.style=l;export{o as field_datepicker};
//# sourceMappingURL=p-63ec2cd1.entry.js.map
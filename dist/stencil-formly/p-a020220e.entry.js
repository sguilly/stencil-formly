import{r as e,c as i,h as t}from"./p-e187c62c.js";import{b as s,l}from"./p-fdd7e6e3.js";const n=".filepond--item{width:calc(25% - 0.5em)}.df-docs-container{display:flex;flex-wrap:wrap;flex-direction:row;align-items:center}";const o=class{constructor(t){e(this,t);this.customChange=i(this,"customChange",7);this.value=undefined;this.disabled=false;this.templateOptions={};this.docs=[]}calendarHandler(e,i){this.docs=[...e]}async componentWillLoad(){if(this.value){this.docs=Array.from(this.value)}let e=[];e.push(s("https://unpkg.com/filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.js"));e.push(s("https://unpkg.com/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.js"));e.push(l("https://unpkg.com/filepond@^4/dist/filepond.css"));e.push(l("https://unpkg.com/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css"));e.push(s("https://unpkg.com/filepond@^4/dist/filepond.js"));await Promise.all(e);FilePond.registerPlugin(FilePondPluginImagePreview);FilePond.registerPlugin(FilePondPluginFileValidateType);FilePond.setOptions({name:"file",server:{url:"http://localhost:3333/api/files",process:{url:"/upload",method:"POST",withCredentials:false,headers:{toto:"toto"},timeout:7e3,onload:e=>{console.log("response",e);e=JSON.parse(e);if(e.success==true&&e.thumb&&e.url){let i=[...this.docs,{thumb:e.thumb,url:e.url}];this.customChange.emit({value:i})}},onerror:null,ondata:null},fetch:null,revert:null}})}componentDidRender(){const e=document.querySelector('input[type="file"]');const i=FilePond.create(e,{acceptedFileTypes:["image/*","application/pdf"]});i.on("processfile",((e,t)=>{i.removeFile(t.id)}))}renderInput(){return t("input",{type:"file",multiple:true})}removeDoc(e){this.docs.splice(e,1);this.customChange.emit({value:this.docs})}renderDocs(){if(this.docs.length>0){console.log("render docs",JSON.stringify(this.docs));return t("div",{class:"df-docs-container"},this.docs.map(((e,i)=>t("div",null,t("img",{src:e.thumb,style:{"margin-left":"10px"}}),t("button",{class:"delete is-small df-is-required",onClick:()=>{console.log("this.docs",this.docs);this.removeDoc(i)}})))))}}async componentWillRender(){var e,i;this.displayRequired=((e=this.templateOptions)===null||e===void 0?void 0:e.required)==true&&((i=this.docs)===null||i===void 0?void 0:i.length)==0}render(){return t("field-container",{templateOptions:this.templateOptions,displayRequired:this.displayRequired},this.renderInput())}static get watchers(){return{value:["calendarHandler"]}}};o.style=n;export{o as field_docs};
//# sourceMappingURL=p-a020220e.entry.js.map
import{j as p}from"./jsx-runtime-u17CrQMm.js";import{r as d}from"./iframe-CjFr7O1k.js";import{P as u}from"./phone-number-input.component-BlOgpeon.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dw_DXGOY.js";import"./input-C_CTKQ8o.js";import"./popover-D0FLAZ6m.js";import"./index-Di62WJOp.js";import"./index-BfyI75qB.js";import"./index-CzEyiHdr.js";import"./index-GzOa9i94.js";import"./index-DTz9dxLq.js";import"./index-BORO72Wa.js";import"./index-wUtrBKWq.js";import"./index-DgpmuhK4.js";import"./index-BS2L5beW.js";import"./index-BYZcajAl.js";import"./scroll-area-FJvpsh8U.js";import"./index-DIVMXv0A.js";import"./index-BdQq_4o_.js";const W={title:"Components/Form/PhoneNumberInput",component:u,tags:["autodocs"],args:{label:"Phone Number",placeholder:"8214 9836",countryCode:"+65",state:"default"}},e={},r={args:{required:!0}},a={render:m=>{const[n,c]=d.useState({number:"82149836",code:"+65"});return p.jsx(u,{...m,value:n.number,countryCode:n.code,onChange:c})}},t={args:{state:"error",subtitle:"Phone number is required",required:!0}},o={args:{state:"disabled",value:"82149836"}},s={args:{label:"Phone Number",placeholder:"Enter phone number",required:!1,state:"default"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    required: true
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState({
      number: "82149836",
      code: "+65"
    });
    return <PhoneNumberInput {...args} value={value.number} countryCode={value.code} onChange={setValue} />;
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    state: "error",
    subtitle: "Phone number is required",
    required: true
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    state: "disabled",
    value: "82149836"
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Phone Number",
    placeholder: "Enter phone number",
    required: false,
    state: "default"
  }
}`,...s.parameters?.docs?.source}}};const _=["Default","Required","WithValue","ErrorState","Disabled","Playground"];export{e as Default,o as Disabled,t as ErrorState,s as Playground,r as Required,a as WithValue,_ as __namedExportsOrder,W as default};

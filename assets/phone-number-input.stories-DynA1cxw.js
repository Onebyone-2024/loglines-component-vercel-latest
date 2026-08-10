import{j as p}from"./jsx-runtime-u17CrQMm.js";import{r as d}from"./iframe-C5W_xEFX.js";import{P as u}from"./phone-number-input.component-COhMDVzK.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-d2XQ1MEC.js";import"./input-7ufM2D47.js";import"./scroll-area-DSJDxOM6.js";import"./index-OaOcwRl1.js";import"./index-CR3nSGQj.js";import"./index-D7SXBuou.js";import"./index-CV2V9cOX.js";import"./index-DstIM6gR.js";import"./index-8oqqZjSF.js";import"./index-BAqnf6iW.js";import"./index-D085AH3H.js";import"./index-BwSLcUDK.js";import"./index-siVbq_fd.js";import"./index-BdQq_4o_.js";const j={title:"Components/Form/PhoneNumberInput",component:u,tags:["autodocs"],args:{label:"Phone Number",placeholder:"8214 9836",countryCode:"+65",state:"default"}},e={},r={args:{required:!0}},a={render:m=>{const[n,c]=d.useState({number:"82149836",code:"+65"});return p.jsx(u,{...m,value:n.number,countryCode:n.code,onChange:c})}},t={args:{state:"error",subtitle:"Phone number is required",required:!0}},o={args:{state:"disabled",value:"82149836"}},s={args:{label:"Phone Number",placeholder:"Enter phone number",required:!1,state:"default"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const I=["Default","Required","WithValue","ErrorState","Disabled","Playground"];export{e as Default,o as Disabled,t as ErrorState,s as Playground,r as Required,a as WithValue,I as __namedExportsOrder,j as default};

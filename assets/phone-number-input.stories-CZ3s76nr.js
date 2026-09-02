import{j as p}from"./jsx-runtime-u17CrQMm.js";import{r as d}from"./iframe-yIZq_qUv.js";import{P as u}from"./phone-number-input.component-W1IgW8tx.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-d2XQ1MEC.js";import"./input-CpK0F-xs.js";import"./scroll-area-DnQ1XPoY.js";import"./index-BdSyLwdX.js";import"./index-DNaPu5ki.js";import"./index-COOkIseu.js";import"./index-UY6uJnpk.js";import"./index-B4SRmbru.js";import"./index-BgCmg4wt.js";import"./index-C5idbYeC.js";import"./index-COXau9fc.js";import"./index-zMjkVKoy.js";import"./index-DKsfUBi2.js";import"./index-BdQq_4o_.js";const j={title:"Components/Form/PhoneNumberInput",component:u,tags:["autodocs"],args:{label:"Phone Number",placeholder:"8214 9836",countryCode:"+65",state:"default"}},e={},r={args:{required:!0}},a={render:m=>{const[n,c]=d.useState({number:"82149836",code:"+65"});return p.jsx(u,{...m,value:n.number,countryCode:n.code,onChange:c})}},t={args:{state:"error",subtitle:"Phone number is required",required:!0}},o={args:{state:"disabled",value:"82149836"}},s={args:{label:"Phone Number",placeholder:"Enter phone number",required:!1,state:"default"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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

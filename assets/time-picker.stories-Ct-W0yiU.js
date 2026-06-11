import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-BuAqlBhZ.js";import{T as c}from"./time-picker.component-D6d13Oow.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-d2XQ1MEC.js";import"./scroll-area-CXbg3ZSI.js";import"./index-CylV90PY.js";import"./index-ChbTZt1X.js";import"./index-C8LzSQY0.js";import"./index-DBpczWOr.js";import"./index-DwtuXSKM.js";import"./index-9REUfkzc.js";import"./index-N4AU7rWZ.js";import"./index-DcpmJe8B.js";import"./index-CO0QcRvh.js";import"./index-DiV6CbRT.js";import"./index-ehB0bJ4p.js";import"./index-BdQq_4o_.js";import"./button-Dar0KFrp.js";import"./index-JrFPKILU.js";import"./index-Drd88ecX.js";const H={title:"Components/TimePicker",component:c,tags:["autodocs"],argTypes:{timeFormat:{control:{type:"select"},options:["12h","24h"]},disabled:{control:{type:"boolean"}}},decorators:[r=>e.jsx("div",{style:{width:"400px"},children:e.jsx(r,{})})]},l=r=>{const[a,i]=p.useState();return e.jsxs("div",{className:"p-6 max-w-sm",children:[e.jsx(c,{...r,value:a,onChange:i}),e.jsxs("div",{className:"mt-4 text-sm text-neutral-600",children:["Selected: ",a?a.toLocaleTimeString():"-"]})]})},t={render:l,args:{timeFormat:"12h",placeholder:"Pick time",label:"Time"}},s={render:l,args:{timeFormat:"24h",label:"Time (24h)"}},o={render:l,args:{disabled:!0,label:"Disabled Time"}},n={render:r=>{const[a,i]=p.useState(new Date);return e.jsx("div",{className:"p-6 max-w-sm",children:e.jsx(c,{...r,value:a,onChange:i})})},args:{label:"Default Time"}},m={render:l,args:{timeFormat:"12h",label:"Playground",placeholder:"Select time"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    timeFormat: "12h",
    placeholder: "Pick time",
    label: "Time"
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    timeFormat: "24h",
    label: "Time (24h)"
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    disabled: true,
    label: "Disabled Time"
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<Date | undefined>(new Date());
    return <div className="p-6 max-w-sm">
                <TimePicker {...args} value={value} onChange={setValue} />
            </div>;
  },
  args: {
    label: "Default Time"
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    timeFormat: "12h",
    label: "Playground",
    placeholder: "Select time"
  }
}`,...m.parameters?.docs?.source}}};const W=["Default","TwentyFourHour","Disabled","WithDefaultValue","Playground"];export{t as Default,o as Disabled,m as Playground,s as TwentyFourHour,n as WithDefaultValue,W as __namedExportsOrder,H as default};

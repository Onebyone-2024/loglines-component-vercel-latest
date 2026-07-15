import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-cymgwYXB.js";import{T as c}from"./time-picker.component-Dke9n2wd.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-d2XQ1MEC.js";import"./scroll-area-BF_DVoL-.js";import"./index-C6Aw6tuK.js";import"./index-BzOSL-vF.js";import"./index-CyjNrMh3.js";import"./index-DgdxZDrx.js";import"./index-CNcYD9os.js";import"./index-CIVjHPNg.js";import"./index-B3RIeHN7.js";import"./index-D9PBXuQB.js";import"./index-CXmAya9C.js";import"./index-p6ENPEuj.js";import"./index-C7HxYMTn.js";import"./index-BdQq_4o_.js";import"./button-DnTzUNcK.js";import"./index-DT8vfFtL.js";import"./index-Drd88ecX.js";const H={title:"Components/TimePicker",component:c,tags:["autodocs"],argTypes:{timeFormat:{control:{type:"select"},options:["12h","24h"]},disabled:{control:{type:"boolean"}}},decorators:[r=>e.jsx("div",{style:{width:"400px"},children:e.jsx(r,{})})]},l=r=>{const[a,i]=p.useState();return e.jsxs("div",{className:"p-6 max-w-sm",children:[e.jsx(c,{...r,value:a,onChange:i}),e.jsxs("div",{className:"mt-4 text-sm text-neutral-600",children:["Selected: ",a?a.toLocaleTimeString():"-"]})]})},t={render:l,args:{timeFormat:"12h",placeholder:"Pick time",label:"Time"}},s={render:l,args:{timeFormat:"24h",label:"Time (24h)"}},o={render:l,args:{disabled:!0,label:"Disabled Time"}},n={render:r=>{const[a,i]=p.useState(new Date);return e.jsx("div",{className:"p-6 max-w-sm",children:e.jsx(c,{...r,value:a,onChange:i})})},args:{label:"Default Time"}},m={render:l,args:{timeFormat:"12h",label:"Playground",placeholder:"Select time"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

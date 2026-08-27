import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-kjGOCQjA.js";import{T as d}from"./time-picker.component-j_OmUEnQ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-d2XQ1MEC.js";import"./scroll-area-BDLqUjjA.js";import"./index-B7hBQu4j.js";import"./index-BeBb0PDY.js";import"./index-D2VjkFrA.js";import"./index-BEpAYUx1.js";import"./index-BV_JwH0C.js";import"./index-CN_hS4fx.js";import"./index-BaG-5Lxg.js";import"./index-lswNRSTy.js";import"./index-DAnOb33c.js";import"./index-B3nVzB2d.js";import"./index-BdQq_4o_.js";import"./button-BJpaZTdg.js";import"./index-D7HbJ00F.js";import"./index-Drd88ecX.js";const E={title:"Components/TimePicker",component:d,tags:["autodocs"],argTypes:{timeFormat:{control:{type:"select"},options:["12h","24h"]},disabled:{control:{type:"boolean"}},required:{control:{type:"boolean"}}},decorators:[r=>e.jsx("div",{style:{width:"400px"},children:e.jsx(r,{})})]},t=r=>{const[a,c]=p.useState();return e.jsxs("div",{className:"p-6 max-w-sm",children:[e.jsx(d,{...r,value:a,onChange:c}),e.jsxs("div",{className:"mt-4 text-sm text-neutral-600",children:["Selected: ",a?a.toLocaleTimeString():"-"]})]})},s={render:t,args:{timeFormat:"12h",placeholder:"Pick time",label:"Time"}},o={render:t,args:{timeFormat:"24h",label:"Time (24h)"}},n={render:t,args:{label:"Departure Time",required:!0,placeholder:"Pick time"}},m={render:t,args:{disabled:!0,label:"Disabled Time"}},l={render:r=>{const[a,c]=p.useState(new Date);return e.jsx("div",{className:"p-6 max-w-sm",children:e.jsx(d,{...r,value:a,onChange:c})})},args:{label:"Default Time"}},i={render:t,args:{timeFormat:"12h",label:"Playground",placeholder:"Select time"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    timeFormat: "12h",
    placeholder: "Pick time",
    label: "Time"
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    timeFormat: "24h",
    label: "Time (24h)"
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Departure Time",
    required: true,
    placeholder: "Pick time"
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    disabled: true,
    label: "Disabled Time"
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<Date | undefined>(new Date());
    return <div className="p-6 max-w-sm">
                <TimePicker {...args} value={value} onChange={setValue} />
            </div>;
  },
  args: {
    label: "Default Time"
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    timeFormat: "12h",
    label: "Playground",
    placeholder: "Select time"
  }
}`,...i.parameters?.docs?.source}}};const R=["Default","TwentyFourHour","Required","Disabled","WithDefaultValue","Playground"];export{s as Default,m as Disabled,i as Playground,n as Required,o as TwentyFourHour,l as WithDefaultValue,R as __namedExportsOrder,E as default};

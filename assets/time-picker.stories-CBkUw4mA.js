import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as d}from"./iframe-D9Bqm3_P.js";import{T as p}from"./time-picker.component-0lhMgBn3.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dw_DXGOY.js";import"./scroll-area-BcK2VM8J.js";import"./index-DQDqhUpf.js";import"./index-B-jb5d5n.js";import"./index-B0NvjQEE.js";import"./index-Ce7ms2Sb.js";import"./index-BIu1P_Sr.js";import"./index-S_nGUbuh.js";import"./index-xL_sUQoK.js";import"./index-BTVujERM.js";import"./index-BdQq_4o_.js";import"./button-DIlB9UvH.js";import"./index-CQHPi-22.js";import"./index-BheO4ms8.js";import"./popover-BX4q5ZUq.js";import"./index-ChRfFQCH.js";import"./index-BqsZJa9c.js";import"./index-D1Jc4a2r.js";const H={title:"Components/TimePicker",component:p,tags:["autodocs"],argTypes:{timeFormat:{control:{type:"select"},options:["12h","24h"]},disabled:{control:{type:"boolean"}},required:{control:{type:"boolean"}}},decorators:[r=>e.jsx("div",{style:{width:"400px"},children:e.jsx(r,{})})]},t=r=>{const[a,c]=d.useState();return e.jsxs("div",{className:"p-6 max-w-sm",children:[e.jsx(p,{...r,value:a,onChange:c}),e.jsxs("div",{className:"mt-4 text-sm text-neutral-600",children:["Selected: ",a?a.toLocaleTimeString():"-"]})]})},s={render:t,args:{timeFormat:"12h",placeholder:"Pick time",label:"Time"}},o={render:t,args:{timeFormat:"24h",label:"Time (24h)"}},n={render:t,args:{label:"Departure Time",required:!0,placeholder:"Pick time"}},m={render:t,args:{disabled:!0,label:"Disabled Time"}},i={render:r=>{const[a,c]=d.useState(new Date);return e.jsx("div",{className:"p-6 max-w-sm",children:e.jsx(p,{...r,value:a,onChange:c})})},args:{label:"Default Time"}},l={render:t,args:{timeFormat:"12h",label:"Playground",placeholder:"Select time"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<Date | undefined>(new Date());
    return <div className="p-6 max-w-sm">
                <TimePicker {...args} value={value} onChange={setValue} />
            </div>;
  },
  args: {
    label: "Default Time"
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    timeFormat: "12h",
    label: "Playground",
    placeholder: "Select time"
  }
}`,...l.parameters?.docs?.source}}};const W=["Default","TwentyFourHour","Required","Disabled","WithDefaultValue","Playground"];export{s as Default,m as Disabled,l as Playground,n as Required,o as TwentyFourHour,i as WithDefaultValue,W as __namedExportsOrder,H as default};

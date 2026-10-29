import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as d}from"./iframe-DfV2U1i9.js";import{T as p}from"./time-picker.component-CvAXtEM2.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dw_DXGOY.js";import"./scroll-area-S2oYvUSR.js";import"./index-B3r0pFwR.js";import"./index-DHZ7pIGk.js";import"./index-B5hyWTDS.js";import"./index-DN4WFjw_.js";import"./index-Bs04dGCt.js";import"./index-CAVth87D.js";import"./index-CgNSf1BD.js";import"./index-Bq7ggCez.js";import"./index-BdQq_4o_.js";import"./button-BFP2fP2x.js";import"./index-Bv0vOYnO.js";import"./index-BheO4ms8.js";import"./popover-D2rsAH__.js";import"./index-C6vNBNM0.js";import"./index-CEsU-e5H.js";import"./index-CEmuuvta.js";const H={title:"Components/TimePicker",component:p,tags:["autodocs"],argTypes:{timeFormat:{control:{type:"select"},options:["12h","24h"]},disabled:{control:{type:"boolean"}},required:{control:{type:"boolean"}}},decorators:[r=>e.jsx("div",{style:{width:"400px"},children:e.jsx(r,{})})]},t=r=>{const[a,c]=d.useState();return e.jsxs("div",{className:"p-6 max-w-sm",children:[e.jsx(p,{...r,value:a,onChange:c}),e.jsxs("div",{className:"mt-4 text-sm text-neutral-600",children:["Selected: ",a?a.toLocaleTimeString():"-"]})]})},s={render:t,args:{timeFormat:"12h",placeholder:"Pick time",label:"Time"}},o={render:t,args:{timeFormat:"24h",label:"Time (24h)"}},n={render:t,args:{label:"Departure Time",required:!0,placeholder:"Pick time"}},m={render:t,args:{disabled:!0,label:"Disabled Time"}},i={render:r=>{const[a,c]=d.useState(new Date);return e.jsx("div",{className:"p-6 max-w-sm",children:e.jsx(p,{...r,value:a,onChange:c})})},args:{label:"Default Time"}},l={render:t,args:{timeFormat:"12h",label:"Playground",placeholder:"Select time"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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

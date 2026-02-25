import{j as a}from"./jsx-runtime-u17CrQMm.js";import{B as e}from"./badge-hDE63uT3.js";import"./iframe-vU-aGGkt.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CEu-jUmt.js";import"./index-DXbl0Jtf.js";import"./index-Drd88ecX.js";import"./utils-d2XQ1MEC.js";const j={title:"Components/Badge",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","primary","primary2","warning","success","danger","outline","custom"]},size:{control:"select",options:["small","medium","large","custom"]}}},r={args:{children:"Badge",variant:"default",size:"medium"}},s={args:{children:"Primary",variant:"primary1"}},n={args:{children:"Primary 2",variant:"primary2"}},i={args:{children:"Warning",variant:"warning"}},t={args:{children:"Success",variant:"success"}},c={args:{children:"Danger",variant:"danger"}},o={args:{children:"Outline",variant:"outline"}},d={render:()=>a.jsxs("div",{className:"flex flex-col gap-4 items-start",children:[a.jsx(e,{size:"small",children:"Small"}),a.jsx(e,{size:"medium",children:"Medium"}),a.jsx(e,{size:"large",children:"Large"})]})},l={render:()=>a.jsx("div",{className:"flex flex-col gap-4 items-start",children:a.jsxs("div",{className:"flex gap-2 flex-wrap",children:[a.jsx(e,{variant:"default",children:"Default"}),a.jsx(e,{variant:"primary1",children:"Primary"}),a.jsx(e,{variant:"primary2",children:"Primary 2"}),a.jsx(e,{variant:"warning",children:"Warning"}),a.jsx(e,{variant:"success",children:"Success"}),a.jsx(e,{variant:"danger",children:"Danger"}),a.jsx(e,{variant:"outline",children:"Outline"})]})})},m={render:()=>a.jsxs("div",{className:"flex flex-col gap-4 items-start",children:[a.jsxs(e,{variant:"primary1",children:[a.jsx("i",{className:"ti ti-check"}),"Complete"]}),a.jsxs(e,{variant:"warning",children:[a.jsx("i",{className:"ti ti-alert-circle"}),"Warning"]}),a.jsxs(e,{variant:"danger",children:[a.jsx("i",{className:"ti ti-x"}),"Error"]})]})},g={render:()=>a.jsxs("div",{className:"flex flex-col gap-4 items-start",children:[a.jsx(e,{variant:"custom",size:"custom",className:"bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 h-28px text-sm",children:"Custom Gradient"}),a.jsx(e,{variant:"custom",size:"custom",className:"bg-blue-100 text-blue-800 px-3 h-20px text-xs",children:"Custom Blue"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Badge",
    variant: "default",
    size: "medium"
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Primary",
    variant: "primary1"
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Primary 2",
    variant: "primary2"
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Warning",
    variant: "warning"
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Success",
    variant: "success"
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Danger",
    variant: "danger"
  }
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Outline",
    variant: "outline"
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 items-start">
      <Badge size="small">Small</Badge>
      <Badge size="medium">Medium</Badge>
      <Badge size="large">Large</Badge>
    </div>
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 items-start">
      <div className="flex gap-2 flex-wrap">
        <Badge variant="default">Default</Badge>
        <Badge variant="primary1">Primary</Badge>
        <Badge variant="primary2">Primary 2</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="danger">Danger</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
    </div>
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 items-start">
      <Badge variant="primary1">
        <i className="ti ti-check" />
        Complete
      </Badge>
      <Badge variant="warning">
        <i className="ti ti-alert-circle" />
        Warning
      </Badge>
      <Badge variant="danger">
        <i className="ti ti-x" />
        Error
      </Badge>
    </div>
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 items-start">
      <Badge variant="custom" size="custom" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 h-28px text-sm">
        Custom Gradient
      </Badge>
      <Badge variant="custom" size="custom" className="bg-blue-100 text-blue-800 px-3 h-20px text-xs">
        Custom Blue
      </Badge>
    </div>
}`,...g.parameters?.docs?.source}}};const S=["Default","Primary","Primary2","Warning","Success","Danger","Outline","Sizes","AllVariants","WithIcon","CustomVariant"];export{l as AllVariants,g as CustomVariant,c as Danger,r as Default,o as Outline,s as Primary,n as Primary2,d as Sizes,t as Success,i as Warning,m as WithIcon,S as __namedExportsOrder,j as default};

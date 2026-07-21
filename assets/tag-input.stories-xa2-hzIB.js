import{j as t}from"./jsx-runtime-u17CrQMm.js";import{T as a}from"./tag-input-BNYNQLI2.js";import{r as o}from"./iframe-DPJeSJmS.js";import"./utils-d2XQ1MEC.js";import"./preload-helper-PPVm8Dsz.js";const C={title:"Components/TagInput",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},placeholder:{control:"text"},state:{control:"select",options:["default","active","error","disabled"]},required:{control:"boolean"},clearable:{control:"boolean"},subtitle:{control:"text"}},decorators:[e=>t.jsx("div",{style:{width:"400px"},children:t.jsx(e,{})})]},s={render:()=>{const[e,r]=o.useState([]);return t.jsx(a,{label:"AWB",placeholder:"Input Reference Type No",value:e,onChange:r})}},l={render:()=>{const[e,r]=o.useState(["057-71829364","001-45829104","160-84720195"]);return t.jsx(a,{label:"AWB",required:!0,value:e,onChange:r})}},n={render:()=>{const[e,r]=o.useState([]);return t.jsx(a,{label:"AWB",required:!0,state:"error",subtitle:"This field is required",value:e,onChange:r})}},u={render:()=>t.jsx(a,{label:"AWB",required:!0,state:"disabled",value:["057-71829364","001-45829104"]})},c={render:()=>{const[e,r]=o.useState([]);return t.jsx(a,{label:"AWB Numbers",placeholder:"Type AWB and press Enter or ','",subtitle:"Separate multiple values with Enter or comma",value:e,onChange:r})}},p={render:()=>{const[e,r]=o.useState(["057-71829364","001-45829104"]);return t.jsx(a,{label:"AWB",clearable:!1,value:e,onChange:r})}},d={render:()=>{const[e,r]=o.useState(["057-71829364"]);return t.jsx(a,{label:"Reference No",required:!0,value:e,onChange:r,styles:{borderColor:"border-purple-200",labelColor:"text-purple-700",onFocusBorderColor:"border-purple-500",onFocusLabelColor:"text-purple-800",chipBgColor:"bg-purple-50",chipTextColor:"text-purple-800",chipBorderColor:"border-purple-200"}})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState<string[]>([]);
    return <TagInput label="AWB" placeholder="Input Reference Type No" value={value} onChange={setValue} />;
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState<string[]>(["057-71829364", "001-45829104", "160-84720195"]);
    return <TagInput label="AWB" required value={value} onChange={setValue} />;
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState<string[]>([]);
    return <TagInput label="AWB" required state="error" subtitle="This field is required" value={value} onChange={setValue} />;
  }
}`,...n.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <TagInput label="AWB" required state="disabled" value={["057-71829364", "001-45829104"]} />
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState<string[]>([]);
    return <TagInput label="AWB Numbers" placeholder="Type AWB and press Enter or ','" subtitle="Separate multiple values with Enter or comma" value={value} onChange={setValue} />;
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState<string[]>(["057-71829364", "001-45829104"]);
    return <TagInput label="AWB" clearable={false} value={value} onChange={setValue} />;
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState<string[]>(["057-71829364"]);
    return <TagInput label="Reference No" required value={value} onChange={setValue} styles={{
      borderColor: "border-purple-200",
      labelColor: "text-purple-700",
      onFocusBorderColor: "border-purple-500",
      onFocusLabelColor: "text-purple-800",
      chipBgColor: "bg-purple-50",
      chipTextColor: "text-purple-800",
      chipBorderColor: "border-purple-200"
    }} />;
  }
}`,...d.parameters?.docs?.source}}};const v=["Default","WithValues","ErrorState","DisabledState","WithSubtitle","NoClearButton","CustomColors"];export{d as CustomColors,s as Default,u as DisabledState,n as ErrorState,p as NoClearButton,c as WithSubtitle,l as WithValues,v as __namedExportsOrder,C as default};

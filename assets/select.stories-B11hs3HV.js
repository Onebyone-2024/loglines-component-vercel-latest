import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as n}from"./iframe-D2X9EDiZ.js";import{S as l}from"./select.component-BLKXzlA-.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-d2XQ1MEC.js";import"./index-Cz4Kbsud.js";import"./index-CmP_ppr0.js";import"./index-BdQq_4o_.js";import"./index-DjJjzEuY.js";import"./index-CTlSCuTo.js";import"./index-CFV8f5oJ.js";import"./index-BaYKX93m.js";import"./index-BcSiUbNh.js";import"./index-sKyOMB2K.js";import"./index-BAGWL3Ia.js";import"./index-BUPbi4OP.js";import"./index-C-xOjnZU.js";import"./index-DgRU9K4T.js";import"./index-DKbtfO_I.js";const w={title:"Components/SelectField",component:l,args:{label:"Select Option",placeholder:"Choose option",variant:"neutral",state:"default"},argTypes:{variant:{control:"select",options:["neutral","primary-1","primary-2","auxiliary","success","warning","danger"]},state:{control:"select",options:["default","active","error","disabled"]}},decorators:[e=>a.jsx("div",{style:{width:"400px"},children:a.jsx(e,{})})]},s=[{label:"React",value:"react",additionalLabel:a.jsxs("span",{className:"text-xs text-neutral-500",children:[a.jsx("i",{className:"ti ti-info-circle"})," Additional info for React"]})},{label:"Vue",value:"vue"},{label:"Svelte",value:"svelte"},{label:"Angular",value:"angular"},{label:"React2",value:"react2"},{label:"Vue2",value:"vue2"},{label:"Svelte2",value:"svelte2"},{label:"Angular2",value:"angular2"},{label:"React3",value:"react3"},{label:"Vue3",value:"vue3"},{label:"Svelte3",value:"svelte3"},{label:"Angular3",value:"angular3"},{label:"React4",value:"react4"},{label:"Vue4",value:"vue4"},{label:"Svelte4",value:"svelte4"},{label:"Angular4",value:"angular4"},{label:"React5",value:"react5"},{label:"Vue5",value:"vue5"},{label:"Svelte5",value:"svelte5"},{label:"Angular5",value:"angular5"},{label:"React6",value:"react6"},{label:"Vue6",value:"vue6"},{label:"Svelte6",value:"svelte6"},{label:"Angular6",value:"angular6"},{label:"React7",value:"react7"},{label:"Vue7",value:"vue7"},{label:"Svelte7",value:"svelte7"},{label:"Angular7",value:"angular7"},{label:"React8",value:"react8"},{label:"Vue8",value:"vue8"},{label:"Svelte8",value:"svelte8"},{label:"Angular8",value:"angular8"}],o={render:e=>{const[r,t]=n.useState();return a.jsx(l,{...e,isMulti:!1,options:s,value:r,onChange:t})}},u={render:e=>{const[r,t]=n.useState();return a.jsx(l,{...e,state:"error",isMulti:!1,subtitle:"This field is required",options:s,value:r,onChange:t})}},i={render:e=>a.jsx(l,{...e,isMulti:!1,state:"disabled",options:s,value:"react",onChange:void 0})},c={render:()=>{const e=["neutral","primary-1","primary-2","auxiliary","success","warning","danger"];return a.jsx("div",{className:"space-y-4 w-[300px]",children:e.map(r=>a.jsx(l,{label:r,variant:r,options:s},r))})}},d={render:e=>{const[r,t]=n.useState([]);return a.jsx(l,{...e,isMulti:!0,isSearchable:!0,options:s,value:r,onChange:t})}},p={render:e=>{const[r,t]=n.useState();return a.jsx(l,{...e,isSearchable:!0,isMulti:!1,options:s,value:r,onChange:t})}},v={render:e=>a.jsx(l,{...e,isLoading:!0,options:s})},m={render:e=>{const[r,t]=n.useState();return a.jsx("div",{className:"w-[300px]",children:a.jsx(l,{...e,options:s,value:r,onChange:t})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<string>();
    return <SelectField {...args} isMulti={false} options={OPTIONS} value={value} onChange={setValue} />;
  }
}`,...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<string>();
    return <SelectField {...args} state="error" isMulti={false} subtitle="This field is required" options={OPTIONS} value={value} onChange={setValue} />;
  }
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <SelectField {...args} isMulti={false} state="disabled" options={OPTIONS} value="react" onChange={undefined} />
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const variants = ["neutral", "primary-1", "primary-2", "auxiliary", "success", "warning", "danger"] as const;
    return <div className="space-y-4 w-[300px]">
                {variants.map(variant => <SelectField key={variant} label={variant} variant={variant} options={OPTIONS} />)}
            </div>;
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<string[]>([]);
    return <SelectField {...args} isMulti isSearchable options={OPTIONS} value={value} onChange={setValue} />;
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<string>();
    return <SelectField {...args} isSearchable isMulti={false} options={OPTIONS} value={value} onChange={setValue} />;
  }
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <SelectField {...args} isLoading options={OPTIONS} />
}`,...v.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<any>();
    return <div className="w-[300px]">
                <SelectField {...args} options={OPTIONS} value={value} onChange={setValue} />
            </div>;
  }
}`,...m.parameters?.docs?.source}}};const E=["Default","Error","Disabled","Variants","MultiSelect","Searchable","Loading","Playground"];export{o as Default,i as Disabled,u as Error,v as Loading,d as MultiSelect,m as Playground,p as Searchable,c as Variants,E as __namedExportsOrder,w as default};

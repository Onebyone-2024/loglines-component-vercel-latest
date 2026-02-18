import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as n}from"./iframe-sOrGF-FJ.js";import{S as s}from"./select-BvDP0-5T.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BEHD0UYf.js";import"./index-BoqpeXNq.js";import"./index-CjstEg19.js";import"./index-BEpc4XkJ.js";import"./index-DUpUufqC.js";import"./index-DkmEXoMG.js";import"./index-DlSqLMFg.js";import"./index-PsUEyLwO.js";import"./index-DymY9m72.js";import"./index-L0k_wIeL.js";import"./index-BQnd3TUv.js";import"./index--4Hz1c9W.js";import"./index-BJkrPwQW.js";const w={title:"Components/SelectField",component:s,args:{label:"Select Option",placeholder:"Choose option",variant:"primary-1",state:"default"},argTypes:{variant:{control:"select",options:["neutral","primary-1","primary-2","auxiliary","success","warning","danger"]},state:{control:"select",options:["default","active","error","disabled"]}},decorators:[e=>r.jsx("div",{style:{width:"400px"},children:r.jsx(e,{})})]},l=[{label:"React",value:"react"},{label:"Vue",value:"vue"},{label:"Svelte",value:"svelte"},{label:"Angular",value:"angular"},{label:"React2",value:"react2"},{label:"Vue2",value:"vue2"},{label:"Svelte2",value:"svelte2"},{label:"Angular2",value:"angular2"},{label:"React3",value:"react3"},{label:"Vue3",value:"vue3"},{label:"Svelte3",value:"svelte3"},{label:"Angular3",value:"angular3"},{label:"React4",value:"react4"},{label:"Vue4",value:"vue4"},{label:"Svelte4",value:"svelte4"},{label:"Angular4",value:"angular4"},{label:"React5",value:"react5"},{label:"Vue5",value:"vue5"},{label:"Svelte5",value:"svelte5"},{label:"Angular5",value:"angular5"},{label:"React6",value:"react6"},{label:"Vue6",value:"vue6"},{label:"Svelte6",value:"svelte6"},{label:"Angular6",value:"angular6"},{label:"React7",value:"react7"},{label:"Vue7",value:"vue7"},{label:"Svelte7",value:"svelte7"},{label:"Angular7",value:"angular7"},{label:"React8",value:"react8"},{label:"Vue8",value:"vue8"},{label:"Svelte8",value:"svelte8"},{label:"Angular8",value:"angular8"}],u={render:e=>{const[a,t]=n.useState();return r.jsx(s,{...e,isMulti:!1,options:l,value:a,onChange:t})}},o={render:e=>{const[a,t]=n.useState();return r.jsx(s,{...e,state:"error",isMulti:!1,subtitle:"This field is required",options:l,value:a,onChange:t})}},i={render:e=>r.jsx(s,{...e,isMulti:!1,state:"disabled",options:l,value:"react",onChange:void 0})},c={render:()=>{const e=["neutral","primary-1","primary-2","auxiliary","success","warning","danger"];return r.jsx("div",{className:"space-y-4 w-[300px]",children:e.map(a=>r.jsx(s,{label:a,variant:a,options:l},a))})}},p={render:e=>{const[a,t]=n.useState([]);return r.jsx(s,{...e,isMulti:!0,options:l,value:a,onChange:t})}},v={render:e=>{const[a,t]=n.useState([]);return r.jsx(s,{...e,isMulti:!0,isChip:!0,options:l,value:a,onChange:t})}},d={render:e=>{const[a,t]=n.useState();return r.jsx(s,{...e,isSearchable:!0,isMulti:!1,options:l,value:a,onChange:t})}},g={render:e=>r.jsx(s,{...e,isLoading:!0,options:l})},m={render:e=>{const[a,t]=n.useState();return r.jsx("div",{className:"w-[300px]",children:r.jsx(s,{...e,options:l,value:a,onChange:t})})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<string>();
    return <SelectField {...args} isMulti={false} options={OPTIONS} value={value} onChange={setValue} />;
  }
}`,...u.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<string>();
    return <SelectField {...args} state="error" isMulti={false} subtitle="This field is required" options={OPTIONS} value={value} onChange={setValue} />;
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <SelectField {...args} isMulti={false} state="disabled" options={OPTIONS} value="react" onChange={undefined} />
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const variants = ["neutral", "primary-1", "primary-2", "auxiliary", "success", "warning", "danger"] as const;
    return <div className="space-y-4 w-[300px]">
                {variants.map(variant => <SelectField key={variant} label={variant} variant={variant} options={OPTIONS} />)}
            </div>;
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<string[]>([]);
    return <SelectField {...args} isMulti options={OPTIONS} value={value} onChange={setValue} />;
  }
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<string[]>([]);
    return <SelectField {...args} isMulti isChip options={OPTIONS} value={value} onChange={setValue} />;
  }
}`,...v.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<string>();
    return <SelectField {...args} isSearchable isMulti={false} options={OPTIONS} value={value} onChange={setValue} />;
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <SelectField {...args} isLoading options={OPTIONS} />
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<any>();
    return <div className="w-[300px]">
                <SelectField {...args} options={OPTIONS} value={value} onChange={setValue} />
            </div>;
  }
}`,...m.parameters?.docs?.source}}};const A=["Default","Error","Disabled","Variants","MultiSelect","MultiChip","Searchable","Loading","Playground"];export{u as Default,i as Disabled,o as Error,g as Loading,v as MultiChip,p as MultiSelect,m as Playground,d as Searchable,c as Variants,A as __namedExportsOrder,w as default};

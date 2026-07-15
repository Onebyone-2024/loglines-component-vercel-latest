import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as l}from"./iframe-cymgwYXB.js";import{S as r}from"./select.component-DgfDZ_Ls.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-d2XQ1MEC.js";import"./index-DgdxZDrx.js";import"./index-CNcYD9os.js";import"./index-BdQq_4o_.js";import"./index-C6Aw6tuK.js";import"./index-Ch9V1wN8.js";import"./index-CyjNrMh3.js";import"./index-BzOSL-vF.js";import"./index-C7HxYMTn.js";import"./index-CIVjHPNg.js";import"./index-B3RIeHN7.js";import"./index-D9PBXuQB.js";import"./index-CXmAya9C.js";import"./index-D2moz8aS.js";import"./index-BGnDNYWy.js";const q={title:"Components/SelectField",component:r,args:{label:"Select Option",placeholder:"Choose option",variant:"neutral",state:"default"},argTypes:{variant:{control:"select",options:["neutral","primary-1","primary-2","auxiliary","success","warning","danger"]},state:{control:"select",options:["default","active","error","disabled"]}},decorators:[e=>a.jsx("div",{style:{width:"400px"},children:a.jsx(e,{})})]},n=[{label:"React",value:"react",additionalLabel:a.jsxs("span",{className:"text-xs text-neutral-500",children:[a.jsx("i",{className:"ti ti-info-circle"})," Additional info for React"]})},{label:"Vue",value:"vue"},{label:"Svelte",value:"svelte"},{label:"Angular",value:"angular"},{label:"React2",value:"react2"},{label:"Vue2",value:"vue2"},{label:"Svelte2",value:"svelte2"},{label:"Angular2",value:"angular2"},{label:"React3",value:"react3"},{label:"Vue3",value:"vue3"},{label:"Svelte3",value:"svelte3"},{label:"Angular3",value:"angular3"},{label:"React4",value:"react4"},{label:"Vue4",value:"vue4"},{label:"Svelte4",value:"svelte4"},{label:"Angular4",value:"angular4"},{label:"React5",value:"react5"},{label:"Vue5",value:"vue5"},{label:"Svelte5",value:"svelte5"},{label:"Angular5",value:"angular5"},{label:"React6",value:"react6"},{label:"Vue6",value:"vue6"},{label:"Svelte6",value:"svelte6"},{label:"Angular6",value:"angular6"},{label:"React7",value:"react7"},{label:"Vue7",value:"vue7"},{label:"Svelte7",value:"svelte7"},{label:"Angular7",value:"angular7"},{label:"React8",value:"react8"},{label:"Vue8",value:"vue8"},{label:"Svelte8",value:"svelte8"},{label:"Angular8",value:"angular8"}],o={render:e=>{const[t,s]=l.useState();return a.jsx(r,{...e,isMulti:!1,options:n,value:t,onChange:s})}},u={render:e=>{const[t,s]=l.useState();return a.jsx(r,{...e,state:"error",isMulti:!1,subtitle:"This field is required",options:n,value:t,onChange:s})}},i={render:e=>a.jsx(r,{...e,isMulti:!1,state:"disabled",options:n,value:"react",onChange:void 0})},c={render:()=>{const e=["neutral","primary-1","primary-2","auxiliary","success","warning","danger"];return a.jsx("div",{className:"space-y-4 w-[300px]",children:e.map(t=>a.jsx(r,{label:t,variant:t,options:n},t))})}},p={render:e=>{const[t,s]=l.useState([]);return a.jsx(r,{...e,isMulti:!0,isSearchable:!0,options:n,value:t,onChange:s})}},d={render:e=>{const[t,s]=l.useState();return a.jsx(r,{...e,isSearchable:!0,isMulti:!1,options:n,value:t,onChange:s})}},m={render:e=>a.jsx(r,{...e,isLoading:!0,options:n})},v={render:e=>{const[t,s]=l.useState();return a.jsx(r,{...e,isMulti:!1,options:[],value:t,onChange:s})}},g={render:e=>{const[t,s]=l.useState();return a.jsx(r,{...e,isMulti:!1,options:[],emptyMessage:"Belum ada data tersedia",value:t,onChange:s})}},S={render:e=>{const[t,s]=l.useState();return a.jsx(r,{...e,isSearchable:!0,isMulti:!1,options:[],emptyIcon:a.jsx("i",{className:"ti ti-search-off text-3xl leading-none text-neutral-300"}),emptyMessage:"Tidak ada hasil ditemukan",value:t,onChange:s})}},x={render:e=>{const[t,s]=l.useState();return a.jsx(r,{...e,isMulti:!1,options:[],emptyContent:a.jsxs("div",{className:"flex flex-col items-center gap-2 px-3 py-6 text-center",children:[a.jsx("i",{className:"ti ti-mood-empty text-3xl leading-none text-primary-1-400"}),a.jsx("span",{className:"text-sm font-medium text-neutral-700",children:"Daftar masih kosong"}),a.jsx("button",{type:"button",className:"rounded-md bg-primary-1-500 px-3 py-1 text-xs text-white hover:bg-primary-1-600",onClick:h=>h.stopPropagation(),children:"+ Tambah data"})]}),value:t,onChange:s})}},b={render:e=>{const[t,s]=l.useState();return a.jsx("div",{className:"w-[300px]",children:a.jsx(r,{...e,options:n,value:t,onChange:s})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<string[]>([]);
    return <SelectField {...args} isMulti isSearchable options={OPTIONS} value={value} onChange={setValue} />;
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<string>();
    return <SelectField {...args} isSearchable isMulti={false} options={OPTIONS} value={value} onChange={setValue} />;
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <SelectField {...args} isLoading options={OPTIONS} />
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<string>();
    return <SelectField {...args} isMulti={false} options={[]} value={value} onChange={setValue} />;
  }
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<string>();
    return <SelectField {...args} isMulti={false} options={[]} emptyMessage="Belum ada data tersedia" value={value} onChange={setValue} />;
  }
}`,...g.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<string>();
    return <SelectField {...args} isSearchable isMulti={false} options={[]} emptyIcon={<i className="ti ti-search-off text-3xl leading-none text-neutral-300" />} emptyMessage="Tidak ada hasil ditemukan" value={value} onChange={setValue} />;
  }
}`,...S.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<string>();
    return <SelectField {...args} isMulti={false} options={[]} emptyContent={<div className="flex flex-col items-center gap-2 px-3 py-6 text-center">
                        <i className="ti ti-mood-empty text-3xl leading-none text-primary-1-400" />
                        <span className="text-sm font-medium text-neutral-700">
                            Daftar masih kosong
                        </span>
                        <button type="button" className="rounded-md bg-primary-1-500 px-3 py-1 text-xs text-white hover:bg-primary-1-600" onClick={e => e.stopPropagation()}>
                            + Tambah data
                        </button>
                    </div>} value={value} onChange={setValue} />;
  }
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<any>();
    return <div className="w-[300px]">
                <SelectField {...args} options={OPTIONS} value={value} onChange={setValue} />
            </div>;
  }
}`,...b.parameters?.docs?.source}}};const B=["Default","Error","Disabled","Variants","MultiSelect","Searchable","Loading","Empty","EmptyCustomMessage","EmptyCustomIcon","EmptyCustomContent","Playground"];export{o as Default,i as Disabled,v as Empty,x as EmptyCustomContent,S as EmptyCustomIcon,g as EmptyCustomMessage,u as Error,m as Loading,p as MultiSelect,b as Playground,d as Searchable,c as Variants,B as __namedExportsOrder,q as default};

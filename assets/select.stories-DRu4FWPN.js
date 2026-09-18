import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as n}from"./iframe-SwAe8PPA.js";import{S as r}from"./select.component-CsfRiJlk.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-d2XQ1MEC.js";import"./index-D1Ohg1_B.js";import"./index-rjoPbH_6.js";import"./index-BdQq_4o_.js";import"./index-DKPXPaO_.js";import"./index-hEFjRQeY.js";import"./index-CaPyVOFv.js";import"./index-IjqG0LGG.js";import"./index-CB0xcI5e.js";import"./index-B40yL-Zy.js";import"./index-CL-20Cae.js";import"./index-DxzVL8zs.js";import"./index-CcMbkMIK.js";import"./index-CQv7LUFm.js";import"./index-eiq2g4aT.js";const W={title:"Components/SelectField",component:r,args:{label:"Select Option",placeholder:"Choose option",variant:"neutral",state:"default"},argTypes:{variant:{control:"select",options:["neutral","primary-1","primary-2","auxiliary","success","warning","danger"]},state:{control:"select",options:["default","active","error","disabled"]}},decorators:[e=>t.jsx("div",{style:{width:"400px"},children:t.jsx(e,{})})]},l=[{label:"React",value:"react",additionalLabel:t.jsxs("span",{className:"text-xs text-neutral-500",children:[t.jsx("i",{className:"ti ti-info-circle"})," Additional info for React"]})},{label:"Vue",value:"vue"},{label:"Svelte",value:"svelte"},{label:"Angular",value:"angular"},{label:"React2",value:"react2"},{label:"Vue2",value:"vue2"},{label:"Svelte2",value:"svelte2"},{label:"Angular2",value:"angular2"},{label:"React3",value:"react3"},{label:"Vue3",value:"vue3"},{label:"Svelte3",value:"svelte3"},{label:"Angular3",value:"angular3"},{label:"React4",value:"react4"},{label:"Vue4",value:"vue4"},{label:"Svelte4",value:"svelte4"},{label:"Angular4",value:"angular4"},{label:"React5",value:"react5"},{label:"Vue5",value:"vue5"},{label:"Svelte5",value:"svelte5"},{label:"Angular5",value:"angular5"},{label:"React6",value:"react6"},{label:"Vue6",value:"vue6"},{label:"Svelte6",value:"svelte6"},{label:"Angular6",value:"angular6"},{label:"React7",value:"react7"},{label:"Vue7",value:"vue7"},{label:"Svelte7",value:"svelte7"},{label:"Angular7",value:"angular7"},{label:"React8",value:"react8"},{label:"Vue8",value:"vue8"},{label:"Svelte8",value:"svelte8"},{label:"Angular8",value:"angular8"}],u={render:e=>{const[a,s]=n.useState();return t.jsx(r,{...e,isMulti:!1,options:l,value:a,onChange:s})}},i={render:e=>{const[a,s]=n.useState();return t.jsx(r,{...e,state:"error",isMulti:!1,subtitle:"This field is required",options:l,value:a,onChange:s})}},c={render:e=>t.jsx(r,{...e,isMulti:!1,state:"disabled",options:l,value:"react",onChange:void 0})},p={render:()=>{const e=["neutral","primary-1","primary-2","auxiliary","success","warning","danger"];return t.jsx("div",{className:"space-y-4 w-[300px]",children:e.map(a=>t.jsx(r,{label:a,variant:a,options:l},a))})}},d={render:e=>{const[a,s]=n.useState([]);return t.jsx(r,{...e,isMulti:!0,isSearchable:!0,options:l,value:a,onChange:s})}},m={render:e=>{const[a,s]=n.useState();return t.jsx(r,{...e,isSearchable:!0,isMulti:!1,options:l,value:a,onChange:s})}},g={render:e=>t.jsx(r,{...e,isLoading:!0,options:l})},v={render:e=>{const[a,s]=n.useState();return t.jsx(r,{...e,isMulti:!1,options:[],value:a,onChange:s})}},S={render:e=>{const[a,s]=n.useState();return t.jsx(r,{...e,isMulti:!1,options:[],emptyMessage:"Belum ada data tersedia",value:a,onChange:s})}},h={render:e=>{const[a,s]=n.useState();return t.jsx(r,{...e,isSearchable:!0,isMulti:!1,options:[],emptyIcon:t.jsx("i",{className:"ti ti-search-off text-3xl leading-none text-neutral-300"}),emptyMessage:"Tidak ada hasil ditemukan",value:a,onChange:s})}},b={render:e=>{const[a,s]=n.useState();return t.jsx(r,{...e,isMulti:!1,options:[],emptyContent:t.jsxs("div",{className:"flex flex-col items-center gap-2 px-3 py-6 text-center",children:[t.jsx("i",{className:"ti ti-mood-empty text-3xl leading-none text-primary-1-400"}),t.jsx("span",{className:"text-sm font-medium text-neutral-700",children:"Daftar masih kosong"}),t.jsx("button",{type:"button",className:"rounded-md bg-primary-1-500 px-3 py-1 text-xs text-white hover:bg-primary-1-600",onClick:o=>o.stopPropagation(),children:"+ Tambah data"})]}),value:a,onChange:s})}},x={render:e=>{const[a,s]=n.useState();return t.jsx(r,{...e,isSearchable:!0,isMulti:!1,options:l,value:a,onChange:s,footerActionLabel:"Manage Master Type",footerActionIcon:t.jsx("i",{className:"ti ti-settings"}),onFooterAction:()=>alert("Manage Master Type clicked")})}},j=e=>new Promise(a=>{setTimeout(()=>{const s=e?l.filter(o=>o.label.toLowerCase().includes(e.toLowerCase())):l;a(s)},500)}),f={render:e=>{const[a,s]=n.useState(),[o,M]=n.useState(l),[R,V]=n.useState(!1),C=n.useRef(),N=O=>{C.current&&clearTimeout(C.current),V(!0),C.current=setTimeout(async()=>{const T=await j(O);M(T),V(!1)},300)};return t.jsx(r,{...e,isSearchable:!0,isMulti:!1,filterOption:!1,isLoading:R,options:o,value:a,onChange:s,onSearchChange:N})}},y={render:e=>{const[a,s]=n.useState();return t.jsx("div",{className:"w-[300px]",children:t.jsx(r,{...e,options:l,value:a,onChange:s})})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<string>();
    return <SelectField {...args} isMulti={false} options={OPTIONS} value={value} onChange={setValue} />;
  }
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<string>();
    return <SelectField {...args} state="error" isMulti={false} subtitle="This field is required" options={OPTIONS} value={value} onChange={setValue} />;
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <SelectField {...args} isMulti={false} state="disabled" options={OPTIONS} value="react" onChange={undefined} />
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const variants = ["neutral", "primary-1", "primary-2", "auxiliary", "success", "warning", "danger"] as const;
    return <div className="space-y-4 w-[300px]">
                {variants.map(variant => <SelectField key={variant} label={variant} variant={variant} options={OPTIONS} />)}
            </div>;
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<string[]>([]);
    return <SelectField {...args} isMulti isSearchable options={OPTIONS} value={value} onChange={setValue} />;
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<string>();
    return <SelectField {...args} isSearchable isMulti={false} options={OPTIONS} value={value} onChange={setValue} />;
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <SelectField {...args} isLoading options={OPTIONS} />
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<string>();
    return <SelectField {...args} isMulti={false} options={[]} value={value} onChange={setValue} />;
  }
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<string>();
    return <SelectField {...args} isMulti={false} options={[]} emptyMessage="Belum ada data tersedia" value={value} onChange={setValue} />;
  }
}`,...S.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<string>();
    return <SelectField {...args} isSearchable isMulti={false} options={[]} emptyIcon={<i className="ti ti-search-off text-3xl leading-none text-neutral-300" />} emptyMessage="Tidak ada hasil ditemukan" value={value} onChange={setValue} />;
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<string>();
    return <SelectField {...args} isSearchable isMulti={false} options={OPTIONS} value={value} onChange={setValue} footerActionLabel="Manage Master Type" footerActionIcon={<i className="ti ti-settings" />} onFooterAction={() => alert("Manage Master Type clicked")} />;
  }
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<string>();
    const [options, setOptions] = React.useState(OPTIONS);
    const [isLoading, setIsLoading] = React.useState(false);
    const debounceRef = React.useRef<ReturnType<typeof setTimeout>>();
    const handleSearchChange = (query: string) => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      setIsLoading(true);
      debounceRef.current = setTimeout(async () => {
        const result = await fakeServerSearch(query);
        setOptions(result);
        setIsLoading(false);
      }, 300);
    };
    return <SelectField {...args} isSearchable isMulti={false} filterOption={false} isLoading={isLoading} options={options} value={value} onChange={setValue} onSearchChange={handleSearchChange} />;
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<any>();
    return <div className="w-[300px]">
                <SelectField {...args} options={OPTIONS} value={value} onChange={setValue} />
            </div>;
  }
}`,...y.parameters?.docs?.source}}};const X=["Default","Error","Disabled","Variants","MultiSelect","Searchable","Loading","Empty","EmptyCustomMessage","EmptyCustomIcon","EmptyCustomContent","FooterAction","ServerSearch","Playground"];export{u as Default,c as Disabled,v as Empty,b as EmptyCustomContent,h as EmptyCustomIcon,S as EmptyCustomMessage,i as Error,x as FooterAction,g as Loading,d as MultiSelect,y as Playground,m as Searchable,f as ServerSearch,p as Variants,X as __namedExportsOrder,W as default};

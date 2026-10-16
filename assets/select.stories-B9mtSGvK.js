import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as l}from"./iframe-CjFr7O1k.js";import{S as s}from"./select.component-DX7zv1l0.js";import{T as I}from"./table-XypMT-HV.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dw_DXGOY.js";import"./index-DTz9dxLq.js";import"./index-BORO72Wa.js";import"./index-BdQq_4o_.js";import"./index-BfyI75qB.js";import"./index-BRqoLdFu.js";import"./index-GzOa9i94.js";import"./index-CzEyiHdr.js";import"./index-DIVMXv0A.js";import"./index-wUtrBKWq.js";import"./index-DgpmuhK4.js";import"./index-BS2L5beW.js";import"./index-Di62WJOp.js";import"./index-BYZcajAl.js";import"./index-Bne4q4Kc.js";import"./index-BiemNsrC.js";import"./spinner-DhQXXzQ0.js";const se={title:"Components/SelectField",component:s,args:{label:"Select Option",placeholder:"Choose option",variant:"neutral",state:"default"},argTypes:{variant:{control:"select",options:["neutral","primary-1","primary-2","auxiliary","success","warning","danger"]},state:{control:"select",options:["default","active","error","disabled"]}},decorators:[a=>e.jsx("div",{style:{width:"400px"},children:e.jsx(a,{})})]},i=[{label:"React",value:"react",additionalLabel:e.jsxs("span",{className:"text-xs text-neutral-500",children:[e.jsx("i",{className:"ti ti-info-circle"})," Additional info for React"]})},{label:"Vue",value:"vue"},{label:"Svelte",value:"svelte"},{label:"Angular",value:"angular"},{label:"React2",value:"react2"},{label:"Vue2",value:"vue2"},{label:"Svelte2",value:"svelte2"},{label:"Angular2",value:"angular2"},{label:"React3",value:"react3"},{label:"Vue3",value:"vue3"},{label:"Svelte3",value:"svelte3"},{label:"Angular3",value:"angular3"},{label:"React4",value:"react4"},{label:"Vue4",value:"vue4"},{label:"Svelte4",value:"svelte4"},{label:"Angular4",value:"angular4"},{label:"React5",value:"react5"},{label:"Vue5",value:"vue5"},{label:"Svelte5",value:"svelte5"},{label:"Angular5",value:"angular5"},{label:"React6",value:"react6"},{label:"Vue6",value:"vue6"},{label:"Svelte6",value:"svelte6"},{label:"Angular6",value:"angular6"},{label:"React7",value:"react7"},{label:"Vue7",value:"vue7"},{label:"Svelte7",value:"svelte7"},{label:"Angular7",value:"angular7"},{label:"React8",value:"react8"},{label:"Vue8",value:"vue8"},{label:"Svelte8",value:"svelte8"},{label:"Angular8",value:"angular8"}],m={render:a=>{const[t,r]=l.useState();return e.jsx(s,{...a,isMulti:!1,options:i,value:t,onChange:r})}},v={render:a=>{const[t,r]=l.useState();return e.jsx(s,{...a,state:"error",isMulti:!1,subtitle:"This field is required",options:i,value:t,onChange:r})}},g={render:a=>e.jsx(s,{...a,isMulti:!1,state:"disabled",options:i,value:"react",onChange:void 0})},h={render:()=>{const a=["neutral","primary-1","primary-2","auxiliary","success","warning","danger"];return e.jsx("div",{className:"space-y-4 w-[300px]",children:a.map(t=>e.jsx(s,{label:t,variant:t,options:i},t))})}},S={render:a=>{const[t,r]=l.useState([]);return e.jsx(s,{...a,isMulti:!0,isSearchable:!0,options:i,value:t,onChange:r})}},x={render:a=>{const[t,r]=l.useState();return e.jsx(s,{...a,isSearchable:!0,isMulti:!1,options:i,value:t,onChange:r})}},b={render:a=>e.jsx(s,{...a,isLoading:!0,options:i})},f={render:a=>{const[t,r]=l.useState();return e.jsx(s,{...a,isMulti:!1,options:[],value:t,onChange:r})}},C={render:a=>{const[t,r]=l.useState();return e.jsx(s,{...a,isMulti:!1,options:[],emptyMessage:"Belum ada data tersedia",value:t,onChange:r})}},T={render:a=>{const[t,r]=l.useState();return e.jsx(s,{...a,isSearchable:!0,isMulti:!1,options:[],emptyIcon:e.jsx("i",{className:"ti ti-search-off text-3xl leading-none text-neutral-300"}),emptyMessage:"Tidak ada hasil ditemukan",value:t,onChange:r})}},y={render:a=>{const[t,r]=l.useState();return e.jsx(s,{...a,isMulti:!1,options:[],emptyContent:e.jsxs("div",{className:"flex flex-col items-center gap-2 px-3 py-6 text-center",children:[e.jsx("i",{className:"ti ti-mood-empty text-3xl leading-none text-primary-1-400"}),e.jsx("span",{className:"text-sm font-medium text-neutral-700",children:"Daftar masih kosong"}),e.jsx("button",{type:"button",className:"rounded-md bg-primary-1-500 px-3 py-1 text-xs text-white hover:bg-primary-1-600",onClick:u=>u.stopPropagation(),children:"+ Tambah data"})]}),value:t,onChange:r})}},R={render:a=>{const[t,r]=l.useState();return e.jsx(s,{...a,isSearchable:!0,isMulti:!1,options:i,value:t,onChange:r,footerActionLabel:"Manage Master Type",footerActionIcon:e.jsx("i",{className:"ti ti-settings"}),onFooterAction:()=>alert("Manage Master Type clicked")})}},F=a=>new Promise(t=>{setTimeout(()=>{const r=a?i.filter(u=>u.label.toLowerCase().includes(a.toLowerCase())):i;t(r)},500)}),V={render:a=>{const[t,r]=l.useState(),[u,d]=l.useState(i),[o,n]=l.useState(!1),c=l.useRef(),j=p=>{c.current&&clearTimeout(c.current),n(!0),c.current=setTimeout(async()=>{const M=await F(p);d(M),n(!1)},300)};return e.jsx(s,{...a,isSearchable:!0,isMulti:!1,filterOption:!1,isLoading:o,options:u,value:t,onChange:r,onSearchChange:j})}},O={render:a=>{const[t,r]=l.useState();return e.jsx("div",{className:"w-[300px]",children:e.jsx(s,{...a,options:i,value:t,onChange:r})})}},E=[{label:"B 1234 XYZ",value:"b1234xyz"},{label:"B 5678 ABC",value:"b5678abc"},{label:"D 9012 DEF",value:"d9012def"}],w=[{label:"Budi Santoso",value:"budi"},{label:"Andi Wijaya",value:"andi"},{label:"Siti Rahma",value:"siti"}],A=[{label:"TR-20FT-01",value:"tr01"},{label:"TR-40FT-02",value:"tr02"}],k=[{id:"JOB-001",route:"Jakarta → Bandung",vehicle:"b1234xyz",driver:"budi"},{id:"JOB-002",route:e.jsxs(e.Fragment,{children:["Jakarta → Surabaya",e.jsx("br",{}),e.jsx("span",{className:"text-neutral-500",children:"via Semarang (transit)"})]})},{id:"JOB-003",route:"Bekasi → Cikarang",trailer:"tr01"},{id:"JOB-004",route:e.jsxs(e.Fragment,{children:["Tangerang → Cirebon",e.jsx("br",{}),e.jsx("span",{className:"text-neutral-500",children:"Error state on Trailer"})]})},{id:"JOB-005",route:"Bogor → Depok (disabled)",vehicle:"d9012def",driver:"siti"}],N={name:"Borderless in table cell",render:()=>{const[a,t]=l.useState(k),r=(o,n,c)=>t(j=>j.map((p,M)=>M===o?{...p,[n]:c}:p)),u="p-0 h-px",d=(o,n)=>o===4?"disabled":o===3&&n==="trailer"?"error":"default";return e.jsx("div",{style:{width:900},children:e.jsx(I,{data:a,columnConfig:[{accessor:"id",headerText:"Job",columnWidth:100},{accessor:"route",headerText:"Route",columnText:({data:o})=>e.jsx("div",{children:o.route})},{accessor:"vehicle",headerText:"Vehicle (searchable)",columnWidth:200,columnClassName:u,columnText:({data:o,index:n=0})=>e.jsx(s,{appearance:"borderless",isSearchable:!0,placeholder:"Select vehicle",options:E,state:d(n,"vehicle"),value:o.vehicle,onChange:c=>r(n,"vehicle",c)})},{accessor:"driver",headerText:"Driver (non-searchable)",columnWidth:200,columnClassName:u,columnText:({data:o,index:n=0})=>e.jsx(s,{appearance:"borderless",placeholder:"Select driver",options:w,state:d(n,"driver"),value:o.driver,onChange:c=>r(n,"driver",c)})},{accessor:"trailer",headerText:"Trailer",columnWidth:200,columnClassName:u,columnText:({data:o,index:n=0})=>e.jsx(s,{appearance:"borderless",isSearchable:!0,placeholder:"Select trailer",options:A,state:d(n,"trailer"),value:o.trailer,onChange:c=>r(n,"trailer",c)})}]})})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<string>();
    return <SelectField {...args} isMulti={false} options={OPTIONS} value={value} onChange={setValue} />;
  }
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<string>();
    return <SelectField {...args} state="error" isMulti={false} subtitle="This field is required" options={OPTIONS} value={value} onChange={setValue} />;
  }
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <SelectField {...args} isMulti={false} state="disabled" options={OPTIONS} value="react" onChange={undefined} />
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const variants = ["neutral", "primary-1", "primary-2", "auxiliary", "success", "warning", "danger"] as const;
    return <div className="space-y-4 w-[300px]">
                {variants.map(variant => <SelectField key={variant} label={variant} variant={variant} options={OPTIONS} />)}
            </div>;
  }
}`,...h.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<string[]>([]);
    return <SelectField {...args} isMulti isSearchable options={OPTIONS} value={value} onChange={setValue} />;
  }
}`,...S.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<string>();
    return <SelectField {...args} isSearchable isMulti={false} options={OPTIONS} value={value} onChange={setValue} />;
  }
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <SelectField {...args} isLoading options={OPTIONS} />
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<string>();
    return <SelectField {...args} isMulti={false} options={[]} value={value} onChange={setValue} />;
  }
}`,...f.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<string>();
    return <SelectField {...args} isMulti={false} options={[]} emptyMessage="Belum ada data tersedia" value={value} onChange={setValue} />;
  }
}`,...C.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<string>();
    return <SelectField {...args} isSearchable isMulti={false} options={[]} emptyIcon={<i className="ti ti-search-off text-3xl leading-none text-neutral-300" />} emptyMessage="Tidak ada hasil ditemukan" value={value} onChange={setValue} />;
  }
}`,...T.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<string>();
    return <SelectField {...args} isSearchable isMulti={false} options={OPTIONS} value={value} onChange={setValue} footerActionLabel="Manage Master Type" footerActionIcon={<i className="ti ti-settings" />} onFooterAction={() => alert("Manage Master Type clicked")} />;
  }
}`,...R.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<any>();
    return <div className="w-[300px]">
                <SelectField {...args} options={OPTIONS} value={value} onChange={setValue} />
            </div>;
  }
}`,...O.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "Borderless in table cell",
  render: () => {
    const [rows, setRows] = React.useState(ASSIGNMENT_ROWS);
    const update = (idx: number, key: "vehicle" | "driver" | "trailer", val?: string) => setRows(prev => prev.map((r, i) => i === idx ? {
      ...r,
      [key]: val
    } : r));

    // \`p-0 h-px\` on the column lets the cell's child (h-full) fill the row height.
    const cellClass = "p-0 h-px";
    const stateFor = (idx: number, key: string) => idx === 4 ? "disabled" : idx === 3 && key === "trailer" ? "error" : "default";
    return <div style={{
      width: 900
    }}>
                <Table data={rows} columnConfig={[{
        accessor: "id",
        headerText: "Job",
        columnWidth: 100
      }, {
        accessor: "route",
        headerText: "Route",
        columnText: ({
          data
        }) => <div>{data.route}</div>
      }, {
        accessor: "vehicle",
        headerText: "Vehicle (searchable)",
        columnWidth: 200,
        columnClassName: cellClass,
        columnText: ({
          data,
          index = 0
        }) => <SelectField appearance="borderless" isSearchable placeholder="Select vehicle" options={VEHICLE_OPTIONS} state={stateFor(index, "vehicle")} value={data.vehicle} onChange={v => update(index, "vehicle", v)} />
      }, {
        accessor: "driver",
        headerText: "Driver (non-searchable)",
        columnWidth: 200,
        columnClassName: cellClass,
        columnText: ({
          data,
          index = 0
        }) => <SelectField appearance="borderless" placeholder="Select driver" options={DRIVER_OPTIONS} state={stateFor(index, "driver")} value={data.driver} onChange={v => update(index, "driver", v)} />
      }, {
        accessor: "trailer",
        headerText: "Trailer",
        columnWidth: 200,
        columnClassName: cellClass,
        columnText: ({
          data,
          index = 0
        }) => <SelectField appearance="borderless" isSearchable placeholder="Select trailer" options={TRAILER_OPTIONS} state={stateFor(index, "trailer")} value={data.trailer} onChange={v => update(index, "trailer", v)} />
      }]} />
            </div>;
  }
}`,...N.parameters?.docs?.source}}};const ne=["Default","Error","Disabled","Variants","MultiSelect","Searchable","Loading","Empty","EmptyCustomMessage","EmptyCustomIcon","EmptyCustomContent","FooterAction","ServerSearch","Playground","BorderlessInTableCell"];export{N as BorderlessInTableCell,m as Default,g as Disabled,f as Empty,y as EmptyCustomContent,T as EmptyCustomIcon,C as EmptyCustomMessage,v as Error,R as FooterAction,b as Loading,S as MultiSelect,O as Playground,x as Searchable,V as ServerSearch,h as Variants,ne as __namedExportsOrder,se as default};

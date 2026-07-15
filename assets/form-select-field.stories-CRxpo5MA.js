import{j as e}from"./jsx-runtime-u17CrQMm.js";import{u as B,C as T,a as i,F as d}from"./index.esm-FZl-F2BW.js";import{a as u,o as C,b as E,s as l}from"./schemas-CM-lM5LT.js";import{r as A}from"./iframe-cymgwYXB.js";import{S as R}from"./select.component-DgfDZ_Ls.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-d2XQ1MEC.js";import"./index-DgdxZDrx.js";import"./index-CNcYD9os.js";import"./index-BdQq_4o_.js";import"./index-C6Aw6tuK.js";import"./index-Ch9V1wN8.js";import"./index-CyjNrMh3.js";import"./index-BzOSL-vF.js";import"./index-C7HxYMTn.js";import"./index-CIVjHPNg.js";import"./index-B3RIeHN7.js";import"./index-D9PBXuQB.js";import"./index-CXmAya9C.js";import"./index-D2moz8aS.js";import"./index-BGnDNYWy.js";const t=({name:r,label:a,required:o,subtitle:c,className:n,isDisabled:O,onErrorMessage:S,onSelect:N,...F})=>{let j;try{j=B()}catch{return e.jsxs("div",{className:"p-4 bg-red-50 border border-red-200 rounded text-red-700 text-sm",children:[e.jsx("strong",{children:"FormSelectField Error:"})," FormProvider not found."]})}const{control:q}=j,M=(m,s)=>S?S(m,s):s?.message||`${m} is required`;return e.jsx(T,{control:q,name:r,render:({field:m,fieldState:{error:s}})=>{const{onChange:V,value:D}=m,J=w=>{if(V(w),N){const _=F.options.find(k=>k.value===w);_&&N(_)}};return e.jsx(R,{...F,value:D,onChange:J,label:a,required:o,subtitle:s?M(r,s):c,state:O?"disabled":s?"error":"default",className:n})}})};t.displayName="FormSelectField";t.__docgenInfo={description:"",methods:[],displayName:"FormSelectField",props:{name:{required:!0,tsType:{name:"string"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},onErrorMessage:{required:!1,tsType:{name:"signature",type:"function",raw:"(fieldName: string, error: any) => string",signature:{arguments:[{type:{name:"string"},name:"fieldName"},{type:{name:"any"},name:"error"}],return:{name:"string"}}},description:""},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:'(option: ISelectFieldProps["options"][number]) => void',signature:{arguments:[{type:{name:'union["options"][number]',raw:'ISelectFieldProps["options"][number]'},name:"option"}],return:{name:"void"}}},description:""}}};const p=C({category:l().min(1,"Category is required"),tags:E(l()).min(1,"Select at least one tag")}),h=[{label:"Design",value:"design"},{label:"Development",value:"development"},{label:"Marketing",value:"marketing"}],P=[{label:"React",value:"react"},{label:"NextJS",value:"nextjs"},{label:"TypeScript",value:"typescript"}],de={title:"Forms/FormSelectField",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},label:{control:"text"},placeholder:{control:"text"},required:{control:"boolean"},isMulti:{control:"boolean"},isSearchable:{control:"boolean"},subtitle:{control:"text"},variant:{control:"select",options:["neutral","primary-1","primary-2","auxiliary","success","warning","danger"]}}},g={render:()=>{const r=i({resolver:u(p),mode:"onBlur",defaultValues:{category:"",tags:[]}}),a=o=>{alert(JSON.stringify(o,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(d,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(a),className:"space-y-4",children:[e.jsx(t,{name:"category",label:"Category",placeholder:"Select category",options:h,required:!0}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},b={render:()=>{const r=i({resolver:u(p),defaultValues:{category:"",tags:[]}});return e.jsx("div",{className:"w-[400px]",children:e.jsx(d,{...r,children:e.jsx(t,{name:"category",label:"Search Category",isSearchable:!0,options:h})})})}},x={render:()=>{const r=i({resolver:u(p),defaultValues:{category:"",tags:[]}});return e.jsx("div",{className:"w-[400px]",children:e.jsx(d,{...r,children:e.jsx(t,{name:"tags",label:"Tags",isMulti:!0,options:P,placeholder:"Select tags",required:!0})})})}},y={render:()=>{const r=i({resolver:u(p),mode:"onBlur",defaultValues:{category:"",tags:[]}}),a=o=>{alert(JSON.stringify(o,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(d,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(a),className:"space-y-4",children:[e.jsx(t,{name:"category",label:"Category",options:h,required:!0}),e.jsx(t,{name:"tags",label:"Tags",isMulti:!0,options:P,required:!0}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},K=[{label:"Jakarta Pusat",value:"JKT-01",additional:{address:"Jl. Merdeka No. 1, Jakarta Pusat",postalCode:"10110",city:"Jakarta"}},{label:"Surabaya Selatan",value:"SBY-02",additional:{address:"Jl. Ahmad Yani No. 45, Surabaya",postalCode:"60243",city:"Surabaya"}},{label:"Bandung Kota",value:"BDG-03",additional:{address:"Jl. Asia Afrika No. 8, Bandung",postalCode:"40111",city:"Bandung"}},{label:"Medan Baru",value:"MDN-04",additional:{address:"Jl. Diponegoro No. 30, Medan",postalCode:"20152",city:"Medan"}}];C({origin_location:l().min(1,"Lokasi asal wajib diisi"),origin_address:l(),origin_postal_code:l(),origin_city:l()});const f={render:()=>{const r=i({defaultValues:{origin_location:"",origin_address:"",origin_postal_code:"",origin_city:""}}),[a,o]=A.useState(null),c=r.watch();return e.jsxs("div",{className:"w-[480px] space-y-4",children:[e.jsx(d,{...r,children:e.jsxs("form",{className:"space-y-3",children:[e.jsx(t,{name:"origin_location",label:"Lokasi Asal",placeholder:"Pilih lokasi asal",options:K,required:!0,isSearchable:!0,onSelect:n=>{r.setValue("origin_address",n.additional?.address??""),r.setValue("origin_postal_code",n.additional?.postalCode??""),r.setValue("origin_city",n.additional?.city??""),o(n.label)}}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("label",{className:"text-xs font-medium text-neutral-600",children:"Alamat (auto-filled)"}),e.jsx("input",{readOnly:!0,value:c.origin_address,placeholder:"—",className:"w-full text-sm border border-neutral-200 rounded-md px-3 py-2 bg-neutral-50 text-neutral-700"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("label",{className:"text-xs font-medium text-neutral-600",children:"Kota (auto-filled)"}),e.jsx("input",{readOnly:!0,value:c.origin_city,placeholder:"—",className:"w-full text-sm border border-neutral-200 rounded-md px-3 py-2 bg-neutral-50 text-neutral-700"})]})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("label",{className:"text-xs font-medium text-neutral-600",children:"Kode Pos (auto-filled)"}),e.jsx("input",{readOnly:!0,value:c.origin_postal_code,placeholder:"—",className:"w-full text-sm border border-neutral-200 rounded-md px-3 py-2 bg-neutral-50 text-neutral-700"})]})]})}),a&&e.jsxs("div",{className:"p-3 bg-green-50 border border-green-200 rounded-lg text-xs text-green-700",children:[e.jsx("span",{className:"font-medium",children:"onSelect fired"})," — dipilih: ",e.jsx("span",{className:"font-semibold",children:a})]})]})}},v={render:()=>{const r=i({resolver:u(p),mode:"onBlur",defaultValues:{category:"",tags:[]}});return e.jsx("div",{className:"w-[400px]",children:e.jsx(d,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(()=>{}),className:"space-y-4",children:[e.jsx(t,{name:"category",label:"Category",options:h,onErrorMessage:a=>`Please select a valid ${a}`,required:!0}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm<FormData>({
      resolver: zodResolver(schema),
      mode: "onBlur",
      defaultValues: {
        category: "",
        tags: []
      }
    });
    const onSubmit = (data: FormData) => {
      alert(JSON.stringify(data, null, 2));
    };
    return <div className="w-[400px]">
                <FormProvider {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormSelectField name="category" label="Category" placeholder="Select category" options={categoryOptions} required />

                        <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                            Submit
                        </button>
                    </form>
                </FormProvider>
            </div>;
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm<FormData>({
      resolver: zodResolver(schema),
      defaultValues: {
        category: "",
        tags: []
      }
    });
    return <div className="w-[400px]">
                <FormProvider {...form}>
                    <FormSelectField name="category" label="Search Category" isSearchable options={categoryOptions} />
                </FormProvider>
            </div>;
  }
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm<FormData>({
      resolver: zodResolver(schema),
      defaultValues: {
        category: "",
        tags: []
      }
    });
    return <div className="w-[400px]">
                <FormProvider {...form}>
                    <FormSelectField name="tags" label="Tags" isMulti options={tagOptions} placeholder="Select tags" required />
                </FormProvider>
            </div>;
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm<FormData>({
      resolver: zodResolver(schema),
      mode: "onBlur",
      defaultValues: {
        category: "",
        tags: []
      }
    });
    const onSubmit = (data: FormData) => {
      alert(JSON.stringify(data, null, 2));
    };
    return <div className="w-[400px]">
                <FormProvider {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormSelectField name="category" label="Category" options={categoryOptions} required />

                        <FormSelectField name="tags" label="Tags" isMulti options={tagOptions} required />

                        <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                            Submit
                        </button>
                    </form>
                </FormProvider>
            </div>;
  }
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm<ShipmentForm>({
      defaultValues: {
        origin_location: "",
        origin_address: "",
        origin_postal_code: "",
        origin_city: ""
      }
    });
    const [lastSelected, setLastSelected] = useState<string | null>(null);
    const values = form.watch();
    return <div className="w-[480px] space-y-4">
                <FormProvider {...form}>
                    <form className="space-y-3">
                        <FormSelectField name="origin_location" label="Lokasi Asal" placeholder="Pilih lokasi asal" options={locationOptions} required isSearchable onSelect={opt => {
            form.setValue("origin_address", opt.additional?.address ?? "");
            form.setValue("origin_postal_code", opt.additional?.postalCode ?? "");
            form.setValue("origin_city", opt.additional?.city ?? "");
            setLastSelected(opt.label);
          }} />

                        <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-1">
                                <label className="text-xs font-medium text-neutral-600">Alamat (auto-filled)</label>
                                <input readOnly value={values.origin_address} placeholder="—" className="w-full text-sm border border-neutral-200 rounded-md px-3 py-2 bg-neutral-50 text-neutral-700" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-medium text-neutral-600">Kota (auto-filled)</label>
                                <input readOnly value={values.origin_city} placeholder="—" className="w-full text-sm border border-neutral-200 rounded-md px-3 py-2 bg-neutral-50 text-neutral-700" />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-medium text-neutral-600">Kode Pos (auto-filled)</label>
                            <input readOnly value={values.origin_postal_code} placeholder="—" className="w-full text-sm border border-neutral-200 rounded-md px-3 py-2 bg-neutral-50 text-neutral-700" />
                        </div>
                    </form>
                </FormProvider>

                {lastSelected && <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-xs text-green-700">
                        <span className="font-medium">onSelect fired</span> — dipilih: <span className="font-semibold">{lastSelected}</span>
                    </div>}
            </div>;
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm<FormData>({
      resolver: zodResolver(schema),
      mode: "onBlur",
      defaultValues: {
        category: "",
        tags: []
      }
    });
    return <div className="w-[400px]">
                <FormProvider {...form}>
                    <form onSubmit={form.handleSubmit(() => {})} className="space-y-4">
                        <FormSelectField name="category" label="Category" options={categoryOptions} onErrorMessage={fieldName => \`Please select a valid \${fieldName}\`} required />

                        <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                            Submit
                        </button>
                    </form>
                </FormProvider>
            </div>;
  }
}`,...v.parameters?.docs?.source}}};const ce=["Default","Searchable","MultiSelect","CompleteForm","WithOnSelect","CustomErrorMessage"];export{y as CompleteForm,v as CustomErrorMessage,g as Default,x as MultiSelect,b as Searchable,f as WithOnSelect,ce as __namedExportsOrder,de as default};

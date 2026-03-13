import{j as e}from"./jsx-runtime-u17CrQMm.js";import{u as P,C as M,a as l,F as i}from"./index.esm-D5uSVB85.js";import{a as m,o as O,b as D,s as S}from"./schemas-CWtgeHVD.js";import{S as V}from"./select.component-Dd37h3hq.js";import"./iframe-C3qFExoy.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-d2XQ1MEC.js";import"./index-gvd0BxTD.js";import"./index-CxeEkLvj.js";import"./index-BdQq_4o_.js";import"./index-VVhY5_IA.js";import"./index-DC2Tm5-L.js";import"./index-BkEObC0m.js";import"./index-qomvCNhz.js";import"./index-Cn_0pqNj.js";import"./index-DkOm31DT.js";import"./index-ByG8jHqe.js";import"./index-MZI5zDOD.js";import"./index-DjdvZ90m.js";import"./index-Deqg6hLN.js";import"./index-DVb2ViKc.js";const t=({name:r,label:o,required:n,subtitle:h,className:F,onErrorMessage:f,...N})=>{let x;try{x=P()}catch{return e.jsxs("div",{className:"p-4 bg-red-50 border border-red-200 rounded text-red-700 text-sm",children:[e.jsx("strong",{children:"FormSelectField Error:"})," FormProvider not found."]})}const{control:j}=x,w=(s,a)=>f?f(s,a):a?.message||`${s} is required`;return e.jsx(M,{control:j,name:r,render:({field:s,fieldState:{error:a}})=>{const{onChange:C,value:q}=s;return e.jsx(V,{...N,value:q,onChange:C,label:o,required:n,subtitle:a?w(r,a):h,state:a?"error":"default",className:F})}})};t.displayName="FormSelectField";t.__docgenInfo={description:"",methods:[],displayName:"FormSelectField",props:{name:{required:!0,tsType:{name:"string"},description:""},onErrorMessage:{required:!1,tsType:{name:"signature",type:"function",raw:"(fieldName: string, error: any) => string",signature:{arguments:[{type:{name:"string"},name:"fieldName"},{type:{name:"any"},name:"error"}],return:{name:"string"}}},description:""}}};const c=O({category:S().min(1,"Category is required"),tags:D(S()).min(1,"Select at least one tag")}),y=[{label:"Design",value:"design"},{label:"Development",value:"development"},{label:"Marketing",value:"marketing"}],v=[{label:"React",value:"react"},{label:"NextJS",value:"nextjs"},{label:"TypeScript",value:"typescript"}],ee={title:"Forms/FormSelectField",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},label:{control:"text"},placeholder:{control:"text"},required:{control:"boolean"},isMulti:{control:"boolean"},isSearchable:{control:"boolean"},subtitle:{control:"text"},variant:{control:"select",options:["neutral","primary-1","primary-2","auxiliary","success","warning","danger"]}}},u={render:()=>{const r=l({resolver:m(c),mode:"onBlur",defaultValues:{category:"",tags:[]}}),o=n=>{alert(JSON.stringify(n,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(i,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(o),className:"space-y-4",children:[e.jsx(t,{name:"category",label:"Category",placeholder:"Select category",options:y,required:!0}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},d={render:()=>{const r=l({resolver:m(c),defaultValues:{category:"",tags:[]}});return e.jsx("div",{className:"w-[400px]",children:e.jsx(i,{...r,children:e.jsx(t,{name:"category",label:"Search Category",isSearchable:!0,options:y})})})}},p={render:()=>{const r=l({resolver:m(c),defaultValues:{category:"",tags:[]}});return e.jsx("div",{className:"w-[400px]",children:e.jsx(i,{...r,children:e.jsx(t,{name:"tags",label:"Tags",isMulti:!0,options:v,placeholder:"Select tags",required:!0})})})}},g={render:()=>{const r=l({resolver:m(c),mode:"onBlur",defaultValues:{category:"",tags:[]}}),o=n=>{alert(JSON.stringify(n,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(i,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(o),className:"space-y-4",children:[e.jsx(t,{name:"category",label:"Category",options:y,required:!0}),e.jsx(t,{name:"tags",label:"Tags",isMulti:!0,options:v,required:!0}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},b={render:()=>{const r=l({resolver:m(c),mode:"onBlur",defaultValues:{category:"",tags:[]}});return e.jsx("div",{className:"w-[400px]",children:e.jsx(i,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(()=>{}),className:"space-y-4",children:[e.jsx(t,{name:"category",label:"Category",options:y,onErrorMessage:o=>`Please select a valid ${o}`,required:!0}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};const re=["Default","Searchable","MultiSelect","CompleteForm","CustomErrorMessage"];export{g as CompleteForm,b as CustomErrorMessage,u as Default,p as MultiSelect,d as Searchable,re as __namedExportsOrder,ee as default};

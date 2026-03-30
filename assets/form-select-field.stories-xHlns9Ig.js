import{j as e}from"./jsx-runtime-u17CrQMm.js";import{u as M,C as O,a as l,F as i}from"./index.esm-2kFZyOb8.js";import{a as m,o as D,b as V,s as S}from"./schemas-BSXY2Jsy.js";import{S as T}from"./select.component-BLKXzlA-.js";import"./iframe-D2X9EDiZ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-d2XQ1MEC.js";import"./index-Cz4Kbsud.js";import"./index-CmP_ppr0.js";import"./index-BdQq_4o_.js";import"./index-DjJjzEuY.js";import"./index-CTlSCuTo.js";import"./index-CFV8f5oJ.js";import"./index-BaYKX93m.js";import"./index-BcSiUbNh.js";import"./index-sKyOMB2K.js";import"./index-BAGWL3Ia.js";import"./index-BUPbi4OP.js";import"./index-C-xOjnZU.js";import"./index-DgRU9K4T.js";import"./index-DKbtfO_I.js";const t=({name:r,label:o,required:n,subtitle:h,className:F,isDisabled:N,onErrorMessage:f,...j})=>{let x;try{x=M()}catch{return e.jsxs("div",{className:"p-4 bg-red-50 border border-red-200 rounded text-red-700 text-sm",children:[e.jsx("strong",{children:"FormSelectField Error:"})," FormProvider not found."]})}const{control:w}=x,C=(s,a)=>f?f(s,a):a?.message||`${s} is required`;return e.jsx(O,{control:w,name:r,render:({field:s,fieldState:{error:a}})=>{const{onChange:q,value:P}=s;return e.jsx(T,{...j,value:P,onChange:q,label:o,required:n,subtitle:a?C(r,a):h,state:N?"disabled":a?"error":"default",className:F})}})};t.displayName="FormSelectField";t.__docgenInfo={description:"",methods:[],displayName:"FormSelectField",props:{name:{required:!0,tsType:{name:"string"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},onErrorMessage:{required:!1,tsType:{name:"signature",type:"function",raw:"(fieldName: string, error: any) => string",signature:{arguments:[{type:{name:"string"},name:"fieldName"},{type:{name:"any"},name:"error"}],return:{name:"string"}}},description:""}}};const c=D({category:S().min(1,"Category is required"),tags:V(S()).min(1,"Select at least one tag")}),y=[{label:"Design",value:"design"},{label:"Development",value:"development"},{label:"Marketing",value:"marketing"}],v=[{label:"React",value:"react"},{label:"NextJS",value:"nextjs"},{label:"TypeScript",value:"typescript"}],re={title:"Forms/FormSelectField",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},label:{control:"text"},placeholder:{control:"text"},required:{control:"boolean"},isMulti:{control:"boolean"},isSearchable:{control:"boolean"},subtitle:{control:"text"},variant:{control:"select",options:["neutral","primary-1","primary-2","auxiliary","success","warning","danger"]}}},u={render:()=>{const r=l({resolver:m(c),mode:"onBlur",defaultValues:{category:"",tags:[]}}),o=n=>{alert(JSON.stringify(n,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(i,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(o),className:"space-y-4",children:[e.jsx(t,{name:"category",label:"Category",placeholder:"Select category",options:y,required:!0}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},d={render:()=>{const r=l({resolver:m(c),defaultValues:{category:"",tags:[]}});return e.jsx("div",{className:"w-[400px]",children:e.jsx(i,{...r,children:e.jsx(t,{name:"category",label:"Search Category",isSearchable:!0,options:y})})})}},p={render:()=>{const r=l({resolver:m(c),defaultValues:{category:"",tags:[]}});return e.jsx("div",{className:"w-[400px]",children:e.jsx(i,{...r,children:e.jsx(t,{name:"tags",label:"Tags",isMulti:!0,options:v,placeholder:"Select tags",required:!0})})})}},g={render:()=>{const r=l({resolver:m(c),mode:"onBlur",defaultValues:{category:"",tags:[]}}),o=n=>{alert(JSON.stringify(n,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(i,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(o),className:"space-y-4",children:[e.jsx(t,{name:"category",label:"Category",options:y,required:!0}),e.jsx(t,{name:"tags",label:"Tags",isMulti:!0,options:v,required:!0}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},b={render:()=>{const r=l({resolver:m(c),mode:"onBlur",defaultValues:{category:"",tags:[]}});return e.jsx("div",{className:"w-[400px]",children:e.jsx(i,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(()=>{}),className:"space-y-4",children:[e.jsx(t,{name:"category",label:"Category",options:y,onErrorMessage:o=>`Please select a valid ${o}`,required:!0}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};const te=["Default","Searchable","MultiSelect","CompleteForm","CustomErrorMessage"];export{g as CompleteForm,b as CustomErrorMessage,u as Default,p as MultiSelect,d as Searchable,te as __namedExportsOrder,re as default};

import{j as e}from"./jsx-runtime-u17CrQMm.js";import{u as A,C as P,a as d,F as c}from"./index.esm-DCNUSy73.js";import{a as p,o as W,b as N,s as h}from"./schemas-CQzJv-aX.js";import{r as C}from"./iframe-DPJeSJmS.js";import{T as E}from"./tag-input-BNYNQLI2.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-d2XQ1MEC.js";const a=C.forwardRef(({name:r,label:o,required:t,subtitle:v,className:y,containerClassName:x,styles:w,clearable:F,placeholder:S,isDisabled:T,onErrorMessage:f,value:R,onChange:D,...q},j)=>{let g;try{g=A()}catch{return console.error(`FormTagInput Error: Component must be wrapped inside FormProvider from react-hook-form.
Make sure your component tree is: <FormProvider ...form><FormTagInput /></FormProvider>
Also ensure react-hook-form is installed in your project: npm install react-hook-form`),e.jsxs("div",{className:"p-4 bg-red-50 border border-red-200 rounded text-red-700 text-sm",children:[e.jsx("strong",{children:"FormTagInput Error:"})," FormProvider not found. This component requires FormProvider wrapper."]})}const{control:I}=g,B=(n,s)=>f?f(n,s):s?.message||`${n} is required`;return e.jsx(P,{control:I,name:r,render:({field:n,fieldState:{error:s}})=>e.jsx(E,{ref:j,...q,value:n.value??[],onChange:n.onChange,label:o,required:t,placeholder:S,subtitle:s?B(r,s):v,state:T?"disabled":s?"error":"default",className:y,containerClassName:x,styles:w,clearable:F})})});a.displayName="FormTagInput";a.__docgenInfo={description:"",methods:[],displayName:"FormTagInput",props:{label:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(values: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"values"}],return:{name:"void"}}},description:""},state:{required:!1,tsType:{name:"union",raw:'"default" | "active" | "error" | "disabled"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"active"'},{name:"literal",value:'"error"'},{name:"literal",value:'"disabled"'}]},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},containerClassName:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},clearable:{required:!1,tsType:{name:"boolean"},description:""},styles:{required:!1,tsType:{name:"ITagInputColorStyles"},description:""},name:{required:!0,tsType:{name:"TName"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},onErrorMessage:{required:!1,tsType:{name:"signature",type:"function",raw:"(fieldName: string, error?: FieldError) => string",signature:{arguments:[{type:{name:"string"},name:"fieldName"},{type:{name:"FieldError"},name:"error"}],return:{name:"string"}}},description:""}}};const b=W({awbNumbers:N(h()).min(1,"Please add at least one AWB number"),references:N(h()).min(1,"Please add at least one reference")}),H={title:"Forms/FormTagInput",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text",description:"Field name from React Hook Form"},label:{control:"text"},placeholder:{control:"text"},required:{control:"boolean"},clearable:{control:"boolean"},subtitle:{control:"text"},isDisabled:{control:"boolean"}}},l={args:{name:"awbNumbers"},render:()=>{const r=d({resolver:p(b),mode:"onBlur",defaultValues:{awbNumbers:[],references:[]}}),o=t=>{alert(JSON.stringify(t,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(c,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(o),className:"space-y-4",children:[e.jsx(a,{name:"awbNumbers",label:"AWB",placeholder:"Input Reference Type No",required:!0}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},m={args:{name:"awbNumbers"},render:()=>{const r=d({resolver:p(b),mode:"onBlur",defaultValues:{awbNumbers:[],references:[]}});return e.jsx("div",{className:"w-[400px]",children:e.jsx(c,{...r,children:e.jsx(a,{name:"awbNumbers",label:"AWB Numbers",placeholder:"Type and press Enter or ','",subtitle:"Separate multiple values with Enter or comma",required:!0})})})}},u={args:{name:"awbNumbers"},render:()=>{const r=d({resolver:p(b),mode:"onBlur",defaultValues:{awbNumbers:[],references:[]}}),o=t=>{alert(JSON.stringify(t,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(c,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(o),className:"space-y-4",children:[e.jsx(a,{name:"awbNumbers",label:"AWB",placeholder:"Input AWB No",required:!0}),e.jsx(a,{name:"references",label:"Reference No",placeholder:"Input Reference No",required:!0}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},i={args:{name:"awbNumbers"},render:()=>{const r=d({resolver:p(b),mode:"onBlur",defaultValues:{awbNumbers:[],references:[]}});return e.jsx("div",{className:"w-[400px]",children:e.jsx(c,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(()=>{}),className:"space-y-4",children:[e.jsx(a,{name:"awbNumbers",label:"AWB",placeholder:"Input AWB No",required:!0,onErrorMessage:()=>"Please add at least one AWB number"}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    name: "awbNumbers"
  },
  render: () => {
    const form = useForm<FormData>({
      resolver: zodResolver(schema),
      mode: "onBlur",
      defaultValues: {
        awbNumbers: [],
        references: []
      }
    });
    const onSubmit = (data: FormData) => {
      alert(JSON.stringify(data, null, 2));
    };
    return <div className="w-[400px]">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormTagInput name="awbNumbers" label="AWB" placeholder="Input Reference Type No" required />
            <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Submit
            </button>
          </form>
        </FormProvider>
      </div>;
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    name: "awbNumbers"
  },
  render: () => {
    const form = useForm<FormData>({
      resolver: zodResolver(schema),
      mode: "onBlur",
      defaultValues: {
        awbNumbers: [],
        references: []
      }
    });
    return <div className="w-[400px]">
        <FormProvider {...form}>
          <FormTagInput name="awbNumbers" label="AWB Numbers" placeholder="Type and press Enter or ','" subtitle="Separate multiple values with Enter or comma" required />
        </FormProvider>
      </div>;
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    name: "awbNumbers"
  },
  render: () => {
    const form = useForm<FormData>({
      resolver: zodResolver(schema),
      mode: "onBlur",
      defaultValues: {
        awbNumbers: [],
        references: []
      }
    });
    const onSubmit = (data: FormData) => {
      alert(JSON.stringify(data, null, 2));
    };
    return <div className="w-[400px]">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormTagInput name="awbNumbers" label="AWB" placeholder="Input AWB No" required />
            <FormTagInput name="references" label="Reference No" placeholder="Input Reference No" required />
            <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Submit
            </button>
          </form>
        </FormProvider>
      </div>;
  }
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    name: "awbNumbers"
  },
  render: () => {
    const form = useForm<FormData>({
      resolver: zodResolver(schema),
      mode: "onBlur",
      defaultValues: {
        awbNumbers: [],
        references: []
      }
    });
    return <div className="w-[400px]">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(() => {})} className="space-y-4">
            <FormTagInput name="awbNumbers" label="AWB" placeholder="Input AWB No" required onErrorMessage={() => "Please add at least one AWB number"} />
            <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Submit
            </button>
          </form>
        </FormProvider>
      </div>;
  }
}`,...i.parameters?.docs?.source}}};const $=["Default","WithSubtitle","CompleteForm","CustomErrorMessage"];export{u as CompleteForm,i as CustomErrorMessage,l as Default,m as WithSubtitle,$ as __namedExportsOrder,H as default};

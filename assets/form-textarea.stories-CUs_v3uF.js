import{j as e}from"./jsx-runtime-u17CrQMm.js";import{u as j,C as P,a as s,b as l,F as i,o as D,s as h}from"./schemas-CoMadCAO.js";import{r as E}from"./iframe-sOrGF-FJ.js";import{T}from"./textarea-BGMEaQKq.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BEHD0UYf.js";const t=E.forwardRef(({name:o,label:n,required:r,subtitle:g,className:F,containerClassName:S,styles:v,onErrorMessage:x,...w},y)=>{const{control:N}=j(),k=(m,a)=>x?x(m,a):a?.message||`${m} is required`;return e.jsx(P,{control:N,name:o,render:({field:m,fieldState:{error:a}})=>e.jsx(T,{ref:y,...m,...w,label:n,required:r,subtitle:a?k(o,a):g,state:a?"error":"default",className:F,containerClassName:S,styles:v})})});t.displayName="FormTextarea";t.__docgenInfo={description:"",methods:[],displayName:"FormTextarea",props:{name:{required:!0,tsType:{name:"TName"},description:""},onErrorMessage:{required:!1,tsType:{name:"signature",type:"function",raw:"(fieldName: string, error?: FieldError) => string",signature:{arguments:[{type:{name:"string"},name:"fieldName"},{type:{name:"FieldError"},name:"error"}],return:{name:"string"}}},description:""}},composes:["Omit"]};const d=D({description:h().min(10,"Description must be at least 10 characters"),feedback:h().min(5,"Feedback must be at least 5 characters"),notes:h().optional()}),C={title:"Forms/FormTextarea",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text",description:"Field name from React Hook Form"},label:{control:"text",description:"Label for textarea"},placeholder:{control:"text",description:"Placeholder text"},required:{control:"boolean",description:"Mark field as required"},rows:{control:"number",description:"Number of textarea rows"},subtitle:{control:"text",description:"Helper text or manual error message"}}},c={args:{name:"description"},render:()=>{const o=s({resolver:l(d),mode:"onBlur",defaultValues:{description:"",feedback:"",notes:""}}),n=r=>{console.log("Form data:",r),alert(JSON.stringify(r,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(i,{...o,children:e.jsxs("form",{onSubmit:o.handleSubmit(n),className:"space-y-4",children:[e.jsx(t,{name:"description",label:"Description",placeholder:"Enter description",required:!0,rows:4}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},u={args:{name:"notes"},render:()=>{const o=s({resolver:l(d),mode:"onBlur",defaultValues:{description:"",feedback:"",notes:""}}),n=r=>{console.log("Form data:",r),alert(JSON.stringify(r,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(i,{...o,children:e.jsxs("form",{onSubmit:o.handleSubmit(n),className:"space-y-4",children:[e.jsx(t,{name:"notes",label:"Additional Notes",placeholder:"Enter additional notes (optional)",rows:3}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},b={args:{name:"feedback"},render:()=>{const o=s({resolver:l(d),mode:"onBlur",defaultValues:{description:"",feedback:"",notes:""}}),n=r=>{console.log("Form data:",r),alert(JSON.stringify(r,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(i,{...o,children:e.jsxs("form",{onSubmit:o.handleSubmit(n),className:"space-y-4",children:[e.jsx(t,{name:"feedback",label:"Feedback",placeholder:"Please provide your feedback (minimum 5 characters)",subtitle:"Minimum 5 characters",required:!0,rows:5}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},p={args:{name:"description"},render:()=>{const o=s({resolver:l(d),mode:"onBlur",defaultValues:{description:"",feedback:"",notes:""}}),n=r=>{console.log("Form data:",r),alert(JSON.stringify(r,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(i,{...o,children:e.jsxs("form",{onSubmit:o.handleSubmit(n),className:"space-y-4",children:[e.jsx(t,{name:"description",label:"Product Description",placeholder:"Describe the product in detail",required:!0,rows:4}),e.jsx(t,{name:"feedback",label:"User Feedback",placeholder:"Provide user feedback",required:!0,rows:3}),e.jsx(t,{name:"notes",label:"Internal Notes",placeholder:"Add internal notes",rows:3}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},f={args:{name:"description"},render:()=>{const o=s({resolver:l(d),mode:"onBlur",defaultValues:{description:"",feedback:"",notes:""}}),n=r=>{console.log("Form data:",r),alert(JSON.stringify(r,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(i,{...o,children:e.jsxs("form",{onSubmit:o.handleSubmit(n),className:"space-y-4",children:[e.jsx(t,{name:"description",label:"Product Description",placeholder:"Enter product description",onErrorMessage:()=>"Please provide a detailed product description (minimum 10 characters)",required:!0,rows:4}),e.jsx(t,{name:"feedback",label:"User Feedback",placeholder:"Enter user feedback",onErrorMessage:r=>`We need at least 5 characters for ${r.toLowerCase()}`,required:!0,rows:3}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    name: "description"
  },
  render: () => {
    const form = useForm<FormData>({
      resolver: zodResolver(schema),
      mode: "onBlur",
      defaultValues: {
        description: "",
        feedback: "",
        notes: ""
      }
    });
    const onSubmit = (data: FormData) => {
      console.log("Form data:", data);
      alert(JSON.stringify(data, null, 2));
    };
    return <div className="w-[400px]">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormTextarea name="description" label="Description" placeholder="Enter description" required rows={4} />
            <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Submit
            </button>
          </form>
        </FormProvider>
      </div>;
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    name: "notes"
  },
  render: () => {
    const form = useForm<FormData>({
      resolver: zodResolver(schema),
      mode: "onBlur",
      defaultValues: {
        description: "",
        feedback: "",
        notes: ""
      }
    });
    const onSubmit = (data: FormData) => {
      console.log("Form data:", data);
      alert(JSON.stringify(data, null, 2));
    };
    return <div className="w-[400px]">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormTextarea name="notes" label="Additional Notes" placeholder="Enter additional notes (optional)" rows={3} />
            <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Submit
            </button>
          </form>
        </FormProvider>
      </div>;
  }
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    name: "feedback"
  },
  render: () => {
    const form = useForm<FormData>({
      resolver: zodResolver(schema),
      mode: "onBlur",
      defaultValues: {
        description: "",
        feedback: "",
        notes: ""
      }
    });
    const onSubmit = (data: FormData) => {
      console.log("Form data:", data);
      alert(JSON.stringify(data, null, 2));
    };
    return <div className="w-[400px]">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormTextarea name="feedback" label="Feedback" placeholder="Please provide your feedback (minimum 5 characters)" subtitle="Minimum 5 characters" required rows={5} />
            <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Submit
            </button>
          </form>
        </FormProvider>
      </div>;
  }
}`,...b.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    name: "description"
  },
  render: () => {
    const form = useForm<FormData>({
      resolver: zodResolver(schema),
      mode: "onBlur",
      defaultValues: {
        description: "",
        feedback: "",
        notes: ""
      }
    });
    const onSubmit = (data: FormData) => {
      console.log("Form data:", data);
      alert(JSON.stringify(data, null, 2));
    };
    return <div className="w-[400px]">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormTextarea name="description" label="Product Description" placeholder="Describe the product in detail" required rows={4} />
            <FormTextarea name="feedback" label="User Feedback" placeholder="Provide user feedback" required rows={3} />
            <FormTextarea name="notes" label="Internal Notes" placeholder="Add internal notes" rows={3} />
            <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Submit
            </button>
          </form>
        </FormProvider>
      </div>;
  }
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    name: "description"
  },
  render: () => {
    const form = useForm<FormData>({
      resolver: zodResolver(schema),
      mode: "onBlur",
      defaultValues: {
        description: "",
        feedback: "",
        notes: ""
      }
    });
    const onSubmit = (data: FormData) => {
      console.log("Form data:", data);
      alert(JSON.stringify(data, null, 2));
    };
    return <div className="w-[400px]">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormTextarea name="description" label="Product Description" placeholder="Enter product description" onErrorMessage={() => "Please provide a detailed product description (minimum 10 characters)"} required rows={4} />
            <FormTextarea name="feedback" label="User Feedback" placeholder="Enter user feedback" onErrorMessage={fieldName => \`We need at least 5 characters for \${fieldName.toLowerCase()}\`} required rows={3} />
            <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Submit
            </button>
          </form>
        </FormProvider>
      </div>;
  }
}`,...f.parameters?.docs?.source}}};const R=["Default","Optional","WithSubtitle","CompleteForm","CustomErrorMessage"];export{p as CompleteForm,f as CustomErrorMessage,c as Default,u as Optional,b as WithSubtitle,R as __namedExportsOrder,C as default};

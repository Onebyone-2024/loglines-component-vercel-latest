import{j as e}from"./jsx-runtime-u17CrQMm.js";import{u as D,C as O,a as l,b as m,F as s,o as B,s as d}from"./schemas-Di_ewp6o.js";import{r as J}from"./iframe-qX5Rn-ky.js";import{I as V}from"./input-D940-tX-.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-d2XQ1MEC.js";const o=J.forwardRef(({name:n,label:a,required:r,prefixIcon:N,suffixIcon:y,subtitle:S,className:F,containerClassName:v,styles:w,onIconClick:j,onErrorMessage:g,...E},I)=>{const{control:q}=D(),P=(i,t)=>g?g(i,t):t?.message||`${i} is required`;return e.jsx(O,{control:q,name:n,render:({field:i,fieldState:{error:t}})=>e.jsx(V,{ref:I,...i,...E,label:a,required:r,prefixIcon:N,suffixIcon:y,subtitle:t?P(n,t):S,state:t?"error":"default",className:F,containerClassName:v,styles:w,onIconClick:j})})});o.displayName="FormInput";o.__docgenInfo={description:"",methods:[],displayName:"FormInput",props:{name:{required:!0,tsType:{name:"TName"},description:""},onErrorMessage:{required:!1,tsType:{name:"signature",type:"function",raw:"(fieldName: string, error?: FieldError) => string",signature:{arguments:[{type:{name:"string"},name:"fieldName"},{type:{name:"FieldError"},name:"error"}],return:{name:"string"}}},description:""}},composes:["Omit"]};const u=B({email:d().email("Email is invalid"),fullName:d().min(3,"Full name must be at least 3 characters"),username:d().min(3,"Username must be at least 3 characters"),phone:d().min(10,"Phone number must be at least 10 characters")}),U={title:"Forms/FormInput",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text",description:"Field name from React Hook Form"},label:{control:"text",description:"Label for input"},placeholder:{control:"text",description:"Placeholder text"},required:{control:"boolean",description:"Mark field as required"},prefixIcon:{control:"text",description:"Tabler icon class for prefix"},suffixIcon:{control:"text",description:"Tabler icon class for suffix"},type:{control:"text",description:"Input type (text, email, password, etc)"},subtitle:{control:"text",description:"Helper text or manual error message"}}},c={args:{name:"email"},render:()=>{const n=l({resolver:m(u),mode:"onBlur",defaultValues:{email:"",fullName:"",username:"",phone:""}}),a=r=>{console.log("Form data:",r),alert(JSON.stringify(r,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(s,{...n,children:e.jsxs("form",{onSubmit:n.handleSubmit(a),className:"space-y-4",children:[e.jsx(o,{name:"email",label:"Email",placeholder:"Enter your email",type:"email",required:!0}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},p={args:{name:"fullName"},render:()=>{const n=l({resolver:m(u),mode:"onBlur",defaultValues:{email:"",fullName:"",username:"",phone:""}}),a=r=>{console.log("Form data:",r),alert(JSON.stringify(r,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(s,{...n,children:e.jsxs("form",{onSubmit:n.handleSubmit(a),className:"space-y-4",children:[e.jsx(o,{name:"fullName",label:"Full Name",placeholder:"Enter your full name",prefixIcon:"ti ti-user",required:!0}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},b={args:{name:"username"},render:()=>{const n=l({resolver:m(u),mode:"onBlur",defaultValues:{email:"",fullName:"",username:"",phone:""}}),a=r=>{console.log("Form data:",r),alert(JSON.stringify(r,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(s,{...n,children:e.jsxs("form",{onSubmit:n.handleSubmit(a),className:"space-y-4",children:[e.jsx(o,{name:"username",label:"Username",placeholder:"Enter your username",suffixIcon:"ti ti-check",required:!0}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},f={args:{name:"phone"},render:()=>{const n=l({resolver:m(u),mode:"onBlur",defaultValues:{email:"",fullName:"",username:"",phone:""}}),a=r=>{console.log("Form data:",r),alert(JSON.stringify(r,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(s,{...n,children:e.jsxs("form",{onSubmit:n.handleSubmit(a),className:"space-y-4",children:[e.jsx(o,{name:"phone",label:"Phone Number",placeholder:"Enter your phone number",prefixIcon:"ti ti-phone",subtitle:"Format: +62xxxxxxxxxx",required:!0}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},x={args:{name:"fullName"},render:()=>{const n=l({resolver:m(u),mode:"onBlur",defaultValues:{email:"",fullName:"",username:"",phone:""}}),a=r=>{console.log("Form data:",r),alert(JSON.stringify(r,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(s,{...n,children:e.jsxs("form",{onSubmit:n.handleSubmit(a),className:"space-y-4",children:[e.jsx(o,{name:"fullName",label:"Full Name",placeholder:"Enter your full name",prefixIcon:"ti ti-user",required:!0}),e.jsx(o,{name:"email",label:"Email",placeholder:"Enter your email",type:"email",prefixIcon:"ti ti-mail",required:!0}),e.jsx(o,{name:"username",label:"Username",placeholder:"Enter your username",prefixIcon:"ti ti-at",required:!0}),e.jsx(o,{name:"phone",label:"Phone Number",placeholder:"Enter your phone number",prefixIcon:"ti ti-phone",required:!0}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},h={args:{name:"fullName"},render:()=>{const n=l({resolver:m(u),mode:"onBlur",defaultValues:{email:"",fullName:"",username:"",phone:""}}),a=r=>{console.log("Form data:",r),alert(JSON.stringify(r,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(s,{...n,children:e.jsxs("form",{onSubmit:n.handleSubmit(a),className:"space-y-4",children:[e.jsx(o,{name:"fullName",label:"Full Name",placeholder:"Enter your full name",prefixIcon:"ti ti-user",onErrorMessage:r=>`Please enter a valid ${r.toLowerCase()}`,required:!0}),e.jsx(o,{name:"email",label:"Email Address",placeholder:"Enter your email",type:"email",prefixIcon:"ti ti-mail",onErrorMessage:r=>`${r} must be a valid email address`,required:!0}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    name: "email"
  },
  render: () => {
    const form = useForm<FormData>({
      resolver: zodResolver(schema),
      mode: "onBlur",
      defaultValues: {
        email: "",
        fullName: "",
        username: "",
        phone: ""
      }
    });
    const onSubmit = (data: FormData) => {
      console.log("Form data:", data);
      alert(JSON.stringify(data, null, 2));
    };
    return <div className="w-[400px]">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormInput name="email" label="Email" placeholder="Enter your email" type="email" required />
            <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Submit
            </button>
          </form>
        </FormProvider>
      </div>;
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    name: "fullName"
  },
  render: () => {
    const form = useForm<FormData>({
      resolver: zodResolver(schema),
      mode: "onBlur",
      defaultValues: {
        email: "",
        fullName: "",
        username: "",
        phone: ""
      }
    });
    const onSubmit = (data: FormData) => {
      console.log("Form data:", data);
      alert(JSON.stringify(data, null, 2));
    };
    return <div className="w-[400px]">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormInput name="fullName" label="Full Name" placeholder="Enter your full name" prefixIcon="ti ti-user" required />
            <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Submit
            </button>
          </form>
        </FormProvider>
      </div>;
  }
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    name: "username"
  },
  render: () => {
    const form = useForm<FormData>({
      resolver: zodResolver(schema),
      mode: "onBlur",
      defaultValues: {
        email: "",
        fullName: "",
        username: "",
        phone: ""
      }
    });
    const onSubmit = (data: FormData) => {
      console.log("Form data:", data);
      alert(JSON.stringify(data, null, 2));
    };
    return <div className="w-[400px]">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormInput name="username" label="Username" placeholder="Enter your username" suffixIcon="ti ti-check" required />
            <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Submit
            </button>
          </form>
        </FormProvider>
      </div>;
  }
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    name: "phone"
  },
  render: () => {
    const form = useForm<FormData>({
      resolver: zodResolver(schema),
      mode: "onBlur",
      defaultValues: {
        email: "",
        fullName: "",
        username: "",
        phone: ""
      }
    });
    const onSubmit = (data: FormData) => {
      console.log("Form data:", data);
      alert(JSON.stringify(data, null, 2));
    };
    return <div className="w-[400px]">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormInput name="phone" label="Phone Number" placeholder="Enter your phone number" prefixIcon="ti ti-phone" subtitle="Format: +62xxxxxxxxxx" required />
            <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Submit
            </button>
          </form>
        </FormProvider>
      </div>;
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    name: "fullName"
  },
  render: () => {
    const form = useForm<FormData>({
      resolver: zodResolver(schema),
      mode: "onBlur",
      defaultValues: {
        email: "",
        fullName: "",
        username: "",
        phone: ""
      }
    });
    const onSubmit = (data: FormData) => {
      console.log("Form data:", data);
      alert(JSON.stringify(data, null, 2));
    };
    return <div className="w-[400px]">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormInput name="fullName" label="Full Name" placeholder="Enter your full name" prefixIcon="ti ti-user" required />
            <FormInput name="email" label="Email" placeholder="Enter your email" type="email" prefixIcon="ti ti-mail" required />
            <FormInput name="username" label="Username" placeholder="Enter your username" prefixIcon="ti ti-at" required />
            <FormInput name="phone" label="Phone Number" placeholder="Enter your phone number" prefixIcon="ti ti-phone" required />
            <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Submit
            </button>
          </form>
        </FormProvider>
      </div>;
  }
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    name: "fullName"
  },
  render: () => {
    const form = useForm<FormData>({
      resolver: zodResolver(schema),
      mode: "onBlur",
      defaultValues: {
        email: "",
        fullName: "",
        username: "",
        phone: ""
      }
    });
    const onSubmit = (data: FormData) => {
      console.log("Form data:", data);
      alert(JSON.stringify(data, null, 2));
    };
    return <div className="w-[400px]">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormInput name="fullName" label="Full Name" placeholder="Enter your full name" prefixIcon="ti ti-user" onErrorMessage={fieldName => \`Please enter a valid \${fieldName.toLowerCase()}\`} required />
            <FormInput name="email" label="Email Address" placeholder="Enter your email" type="email" prefixIcon="ti ti-mail" onErrorMessage={fieldName => \`\${fieldName} must be a valid email address\`} required />
            <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Submit
            </button>
          </form>
        </FormProvider>
      </div>;
  }
}`,...h.parameters?.docs?.source}}};const $=["Default","WithPrefix","WithSuffix","WithSubtitle","CompleteForm","CustomErrorMessage"];export{x as CompleteForm,h as CustomErrorMessage,c as Default,p as WithPrefix,f as WithSubtitle,b as WithSuffix,$ as __namedExportsOrder,U as default};

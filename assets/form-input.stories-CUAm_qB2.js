import{j as e}from"./jsx-runtime-u17CrQMm.js";import{u as O,C as B,a as l,b as m,F as s,o as J,s as d}from"./schemas-Cdc-0DkG.js";import{r as V}from"./iframe-vU-aGGkt.js";import{I as C}from"./input-BrPeuhwJ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-d2XQ1MEC.js";const a=V.forwardRef(({name:n,label:o,required:r,prefixIcon:y,suffixIcon:F,subtitle:S,className:v,containerClassName:w,styles:j,onIconClick:E,onErrorMessage:g,...I},P)=>{let N;try{N=O()}catch{return console.error(`FormInput Error: Component must be wrapped inside FormProvider from react-hook-form.
Make sure your component tree is: <FormProvider ...form><FormInput /></FormProvider>
Also ensure react-hook-form is installed in your project: npm install react-hook-form`),e.jsxs("div",{className:"p-4 bg-red-50 border border-red-200 rounded text-red-700 text-sm",children:[e.jsx("strong",{children:"FormInput Error:"})," FormProvider not found. This component requires FormProvider wrapper."]})}const{control:q}=N,D=(i,t)=>g?g(i,t):t?.message||`${i} is required`;return e.jsx(B,{control:q,name:n,render:({field:i,fieldState:{error:t}})=>e.jsx(C,{ref:P,...i,...I,label:o,required:r,prefixIcon:y,suffixIcon:F,subtitle:t?D(n,t):S,state:t?"error":"default",className:v,containerClassName:w,styles:j,onIconClick:E})})});a.displayName="FormInput";a.__docgenInfo={description:"",methods:[],displayName:"FormInput",props:{name:{required:!0,tsType:{name:"TName"},description:""},onErrorMessage:{required:!1,tsType:{name:"signature",type:"function",raw:"(fieldName: string, error?: FieldError) => string",signature:{arguments:[{type:{name:"string"},name:"fieldName"},{type:{name:"FieldError"},name:"error"}],return:{name:"string"}}},description:""}},composes:["Omit"]};const u=J({email:d().email("Email is invalid"),fullName:d().min(3,"Full name must be at least 3 characters"),username:d().min(3,"Username must be at least 3 characters"),phone:d().min(10,"Phone number must be at least 10 characters")}),U={title:"Forms/FormInput",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text",description:"Field name from React Hook Form"},label:{control:"text",description:"Label for input"},placeholder:{control:"text",description:"Placeholder text"},required:{control:"boolean",description:"Mark field as required"},prefixIcon:{control:"text",description:"Tabler icon class for prefix"},suffixIcon:{control:"text",description:"Tabler icon class for suffix"},type:{control:"text",description:"Input type (text, email, password, etc)"},subtitle:{control:"text",description:"Helper text or manual error message"}}},c={args:{name:"email"},render:()=>{const n=l({resolver:m(u),mode:"onBlur",defaultValues:{email:"",fullName:"",username:"",phone:""}}),o=r=>{console.log("Form data:",r),alert(JSON.stringify(r,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(s,{...n,children:e.jsxs("form",{onSubmit:n.handleSubmit(o),className:"space-y-4",children:[e.jsx(a,{name:"email",label:"Email",placeholder:"Enter your email",type:"email",required:!0}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},p={args:{name:"fullName"},render:()=>{const n=l({resolver:m(u),mode:"onBlur",defaultValues:{email:"",fullName:"",username:"",phone:""}}),o=r=>{console.log("Form data:",r),alert(JSON.stringify(r,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(s,{...n,children:e.jsxs("form",{onSubmit:n.handleSubmit(o),className:"space-y-4",children:[e.jsx(a,{name:"fullName",label:"Full Name",placeholder:"Enter your full name",prefixIcon:"ti ti-user",required:!0}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},b={args:{name:"username"},render:()=>{const n=l({resolver:m(u),mode:"onBlur",defaultValues:{email:"",fullName:"",username:"",phone:""}}),o=r=>{console.log("Form data:",r),alert(JSON.stringify(r,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(s,{...n,children:e.jsxs("form",{onSubmit:n.handleSubmit(o),className:"space-y-4",children:[e.jsx(a,{name:"username",label:"Username",placeholder:"Enter your username",suffixIcon:"ti ti-check",required:!0}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},f={args:{name:"phone"},render:()=>{const n=l({resolver:m(u),mode:"onBlur",defaultValues:{email:"",fullName:"",username:"",phone:""}}),o=r=>{console.log("Form data:",r),alert(JSON.stringify(r,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(s,{...n,children:e.jsxs("form",{onSubmit:n.handleSubmit(o),className:"space-y-4",children:[e.jsx(a,{name:"phone",label:"Phone Number",placeholder:"Enter your phone number",prefixIcon:"ti ti-phone",subtitle:"Format: +62xxxxxxxxxx",required:!0}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},h={args:{name:"fullName"},render:()=>{const n=l({resolver:m(u),mode:"onBlur",defaultValues:{email:"",fullName:"",username:"",phone:""}}),o=r=>{console.log("Form data:",r),alert(JSON.stringify(r,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(s,{...n,children:e.jsxs("form",{onSubmit:n.handleSubmit(o),className:"space-y-4",children:[e.jsx(a,{name:"fullName",label:"Full Name",placeholder:"Enter your full name",prefixIcon:"ti ti-user",required:!0}),e.jsx(a,{name:"email",label:"Email",placeholder:"Enter your email",type:"email",prefixIcon:"ti ti-mail",required:!0}),e.jsx(a,{name:"username",label:"Username",placeholder:"Enter your username",prefixIcon:"ti ti-at",required:!0}),e.jsx(a,{name:"phone",label:"Phone Number",placeholder:"Enter your phone number",prefixIcon:"ti ti-phone",required:!0}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},x={args:{name:"fullName"},render:()=>{const n=l({resolver:m(u),mode:"onBlur",defaultValues:{email:"",fullName:"",username:"",phone:""}}),o=r=>{console.log("Form data:",r),alert(JSON.stringify(r,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(s,{...n,children:e.jsxs("form",{onSubmit:n.handleSubmit(o),className:"space-y-4",children:[e.jsx(a,{name:"fullName",label:"Full Name",placeholder:"Enter your full name",prefixIcon:"ti ti-user",onErrorMessage:r=>`Please enter a valid ${r.toLowerCase()}`,required:!0}),e.jsx(a,{name:"email",label:"Email Address",placeholder:"Enter your email",type:"email",prefixIcon:"ti ti-mail",onErrorMessage:r=>`${r} must be a valid email address`,required:!0}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};const $=["Default","WithPrefix","WithSuffix","WithSubtitle","CompleteForm","CustomErrorMessage"];export{h as CompleteForm,x as CustomErrorMessage,c as Default,p as WithPrefix,f as WithSubtitle,b as WithSuffix,$ as __namedExportsOrder,U as default};

import{j as e}from"./jsx-runtime-u17CrQMm.js";import{u as q,C as I,a as m,F as u}from"./index.esm-2kFZyOb8.js";import{a as l,o as g,s as d}from"./schemas-BSXY2Jsy.js";import{r as O}from"./iframe-D2X9EDiZ.js";import{P as D}from"./phone-number-input.component-CBXylXOi.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-d2XQ1MEC.js";import"./input-WuVdQn51.js";import"./scroll-area-B87r1791.js";import"./index-DjJjzEuY.js";import"./index-BaYKX93m.js";import"./index-CFV8f5oJ.js";import"./index-Cz4Kbsud.js";import"./index-CmP_ppr0.js";import"./index-sKyOMB2K.js";import"./index-BAGWL3Ia.js";import"./index-BUPbi4OP.js";import"./index-C-xOjnZU.js";import"./index-DHxhBRvB.js";import"./index-BcSiUbNh.js";import"./index-BdQq_4o_.js";const o=O.forwardRef(({name:r,label:t,required:n,subtitle:y,className:F,styles:B,isDisabled:P,onErrorMessage:N,...S},j)=>{let v;try{v=q()}catch{return console.error(`FormPhoneNumberInput Error: Component must be wrapped inside FormProvider from react-hook-form.
Make sure your component tree is: <FormProvider ...form><FormPhoneNumberInput /></FormProvider>`),e.jsxs("div",{className:"p-4 bg-red-50 border border-red-200 rounded text-red-700 text-sm",children:[e.jsx("strong",{children:"FormPhoneNumberInput Error:"})," FormProvider not found."]})}const{control:w}=v,E=(a,s)=>N?N(a,s):s?.message||`${a} is required`;return e.jsx(I,{control:w,name:r,render:({field:a,fieldState:{error:s}})=>e.jsx("div",{ref:j,children:e.jsx(D,{...S,label:t,required:n,value:a.value?.number||"",countryCode:a.value?.code,onChange:C=>a.onChange(C),subtitle:s?E(r,s):y,state:P?"disabled":s?"error":"default",className:F})})})});o.displayName="FormPhoneNumberInput";o.__docgenInfo={description:"",methods:[],displayName:"FormPhoneNumberInput",props:{name:{required:!0,tsType:{name:"string"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},onErrorMessage:{required:!1,tsType:{name:"signature",type:"function",raw:"(fieldName: string, error: any) => string",signature:{arguments:[{type:{name:"string"},name:"fieldName"},{type:{name:"any"},name:"error"}],return:{name:"string"}}},description:""}},composes:["Omit"]};const c=g({phone:g({number:d().min(10,"Phone number must be at least 10 digits"),code:d()}),contact:g({number:d().optional(),code:d()})}),re={title:"Forms/FormPhoneNumberInput",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text",description:"Field name from React Hook Form"},label:{control:"text",description:"Label for phone input"},placeholder:{control:"text",description:"Placeholder text"},required:{control:"boolean",description:"Mark field as required"},subtitle:{control:"text",description:"Helper text"},countryCode:{control:"text",description:"Default country code"}}},i={args:{name:"phone"},render:()=>{const r=m({resolver:l(c),mode:"onBlur",defaultValues:{phone:{number:"",code:"+62"},contact:{number:"",code:"+65"}}}),t=n=>{console.log("Form data:",n),alert(JSON.stringify(n,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(t),className:"space-y-4",children:[e.jsx(o,{name:"phone",label:"Phone Number",placeholder:"Enter your phone number",required:!0}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},p={args:{name:"contact"},render:()=>{const r=m({resolver:l(c),mode:"onBlur",defaultValues:{phone:{number:"",code:"+62"},contact:{number:"",code:"+65"}}}),t=n=>{console.log("Form data:",n),alert(JSON.stringify(n,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(t),className:"space-y-4",children:[e.jsx(o,{name:"contact",label:"Contact Number",placeholder:"Optional phone number",subtitle:"You can leave this empty"}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},b={args:{name:"phone"},render:()=>{const r=m({resolver:l(c),mode:"onBlur",defaultValues:{phone:{number:"",code:"+62"},contact:{number:"",code:"+65"}}});return e.jsx("div",{className:"w-[400px]",children:e.jsx(u,{...r,children:e.jsx("form",{className:"space-y-4",children:e.jsx(o,{name:"phone",label:"Phone Number",placeholder:"Enter your phone number",subtitle:"Format: +62xxxxxxxxxx",required:!0})})})})}},h={args:{name:"phone"},render:()=>{const r=m({resolver:l(c),mode:"onBlur",defaultValues:{phone:{number:"",code:"+62"},contact:{number:"",code:"+65"}}});return e.jsx("div",{className:"w-[400px]",children:e.jsx(u,{...r,children:e.jsxs("form",{className:"space-y-4",children:[e.jsx(o,{name:"phone",label:"Phone Number",placeholder:"Enter your phone number",required:!0}),e.jsx("button",{type:"submit",onClick:r.handleSubmit(()=>{}),className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg",children:"Trigger Error"})]})})})}},x={args:{name:"phone"},render:()=>{const r=m({resolver:l(c),mode:"onBlur",defaultValues:{phone:{number:"",code:"+62"},contact:{number:"",code:"+65"}}}),t=n=>{console.log("Form data:",n),alert(JSON.stringify(n,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(t),className:"space-y-4",children:[e.jsx(o,{name:"phone",label:"Primary Phone",required:!0}),e.jsx(o,{name:"contact",label:"Secondary Phone",subtitle:"Optional"}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},f={args:{name:"phone"},render:()=>{const r=m({resolver:l(c),mode:"onBlur",defaultValues:{phone:{number:"",code:"+62"},contact:{number:"",code:"+65"}}});return e.jsx("div",{className:"w-[400px]",children:e.jsx(u,{...r,children:e.jsx("form",{className:"space-y-4",children:e.jsx(o,{name:"phone",label:"Phone Number",required:!0,onErrorMessage:(t,n)=>n?.message?`Custom: ${n.message}`:`Please enter a valid ${t}`})})})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    name: "phone"
  },
  render: () => {
    const form = useForm<FormData>({
      resolver: zodResolver(schema),
      mode: "onBlur",
      defaultValues: {
        phone: {
          number: "",
          code: "+62"
        },
        contact: {
          number: "",
          code: "+65"
        }
      }
    });
    const onSubmit = (data: FormData) => {
      console.log("Form data:", data);
      alert(JSON.stringify(data, null, 2));
    };
    return <div className="w-[400px]">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormPhoneNumberInput name="phone" label="Phone Number" placeholder="Enter your phone number" required />
            <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Submit
            </button>
          </form>
        </FormProvider>
      </div>;
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    name: "contact"
  },
  render: () => {
    const form = useForm<FormData>({
      resolver: zodResolver(schema),
      mode: "onBlur",
      defaultValues: {
        phone: {
          number: "",
          code: "+62"
        },
        contact: {
          number: "",
          code: "+65"
        }
      }
    });
    const onSubmit = (data: FormData) => {
      console.log("Form data:", data);
      alert(JSON.stringify(data, null, 2));
    };
    return <div className="w-[400px]">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormPhoneNumberInput name="contact" label="Contact Number" placeholder="Optional phone number" subtitle="You can leave this empty" />
            <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Submit
            </button>
          </form>
        </FormProvider>
      </div>;
  }
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    name: "phone"
  },
  render: () => {
    const form = useForm<FormData>({
      resolver: zodResolver(schema),
      mode: "onBlur",
      defaultValues: {
        phone: {
          number: "",
          code: "+62"
        },
        contact: {
          number: "",
          code: "+65"
        }
      }
    });
    return <div className="w-[400px]">
        <FormProvider {...form}>
          <form className="space-y-4">
            <FormPhoneNumberInput name="phone" label="Phone Number" placeholder="Enter your phone number" subtitle="Format: +62xxxxxxxxxx" required />
          </form>
        </FormProvider>
      </div>;
  }
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    name: "phone"
  },
  render: () => {
    const form = useForm<FormData>({
      resolver: zodResolver(schema),
      mode: "onBlur",
      defaultValues: {
        phone: {
          number: "",
          code: "+62"
        },
        contact: {
          number: "",
          code: "+65"
        }
      }
    });
    return <div className="w-[400px]">
        <FormProvider {...form}>
          <form className="space-y-4">
            <FormPhoneNumberInput name="phone" label="Phone Number" placeholder="Enter your phone number" required />
            <button type="submit" onClick={form.handleSubmit(() => {})} className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg">
              Trigger Error
            </button>
          </form>
        </FormProvider>
      </div>;
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    name: "phone"
  },
  render: () => {
    const form = useForm<FormData>({
      resolver: zodResolver(schema),
      mode: "onBlur",
      defaultValues: {
        phone: {
          number: "",
          code: "+62"
        },
        contact: {
          number: "",
          code: "+65"
        }
      }
    });
    const onSubmit = (data: FormData) => {
      console.log("Form data:", data);
      alert(JSON.stringify(data, null, 2));
    };
    return <div className="w-[400px]">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormPhoneNumberInput name="phone" label="Primary Phone" required />
            <FormPhoneNumberInput name="contact" label="Secondary Phone" subtitle="Optional" />
            <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Submit
            </button>
          </form>
        </FormProvider>
      </div>;
  }
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    name: "phone"
  },
  render: () => {
    const form = useForm<FormData>({
      resolver: zodResolver(schema),
      mode: "onBlur",
      defaultValues: {
        phone: {
          number: "",
          code: "+62"
        },
        contact: {
          number: "",
          code: "+65"
        }
      }
    });
    return <div className="w-[400px]">
        <FormProvider {...form}>
          <form className="space-y-4">
            <FormPhoneNumberInput name="phone" label="Phone Number" required onErrorMessage={(fieldName, error) => {
            if (error?.message) {
              return \`Custom: \${error.message}\`;
            }
            return \`Please enter a valid \${fieldName}\`;
          }} />
          </form>
        </FormProvider>
      </div>;
  }
}`,...f.parameters?.docs?.source}}};const ne=["Default","Optional","WithSubtitle","ErrorState","CompleteForm","CustomErrorMessage"];export{x as CompleteForm,f as CustomErrorMessage,i as Default,h as ErrorState,p as Optional,b as WithSubtitle,ne as __namedExportsOrder,re as default};

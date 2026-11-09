import{j as e}from"./jsx-runtime-u17CrQMm.js";import{u as I,C as q,a as u,F as l}from"./index.esm-B9M8V_ee.js";import{a as c,o as P,s as b}from"./schemas-CxwiVSuJ.js";import{r as O}from"./iframe-20mr5vqo.js";import{P as V}from"./phone-number-input.component-CmbYq-Xr.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dw_DXGOY.js";import"./input-B-g_IFf0.js";import"./popover-C5rfmn-_.js";import"./index-BOhSDy7Q.js";import"./index-BzFQnJdJ.js";import"./index-llnbWPW2.js";import"./index-BpidSTd-.js";import"./index-4ckNbODa.js";import"./index-DuCYIphQ.js";import"./index-CfhDRmVC.js";import"./index-B8bZYDka.js";import"./index-CTIG8atG.js";import"./index-CeeKnJty.js";import"./scroll-area-B75GhQwu.js";import"./index-DTQVh2Ly.js";import"./index-BdQq_4o_.js";const B={inputMode:"numeric",onKeyDown:r=>{const o=r.key.length===1,n=r.ctrlKey||r.metaKey;o&&!n&&!/^\d$/.test(r.key)&&r.preventDefault()},onPaste:r=>{const o=r.clipboardData.getData("text"),n=o.replace(/\D/g,"");if(n===o||(r.preventDefault(),!n))return;const t=r.currentTarget,d=t.selectionStart??t.value.length,S=t.selectionEnd??t.value.length,N=t.value.slice(0,d)+n+t.value.slice(S);Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value")?.set?.call(t,N);const p=d+n.length;t.setSelectionRange(p,p),t.dispatchEvent(new Event("input",{bubbles:!0}))}},a=O.forwardRef(({name:r,label:o,required:n,subtitle:t,className:d,styles:S,isDisabled:N,onErrorMessage:F,...p},w)=>{let j;try{j=I()}catch{return console.error(`FormPhoneNumberInput Error: Component must be wrapped inside FormProvider from react-hook-form.
Make sure your component tree is: <FormProvider ...form><FormPhoneNumberInput /></FormProvider>`),e.jsxs("div",{className:"p-4 bg-red-50 border border-red-200 rounded text-red-700 text-sm",children:[e.jsx("strong",{children:"FormPhoneNumberInput Error:"})," FormProvider not found."]})}const{control:E}=j,D=(s,m)=>F?F(s,m):m?.message||`${s} is required`;return e.jsx(q,{control:E,name:r,render:({field:s,fieldState:{error:m}})=>e.jsx("div",{ref:w,children:e.jsx(V,{...p,label:o,required:n,value:s.value?.number||"",countryCode:s.value?.code,onChange:C=>s.onChange(C),subtitle:m?D(r,m):t,state:N?"disabled":m?"error":"default",...B,className:d})})})});a.displayName="FormPhoneNumberInput";a.__docgenInfo={description:"",methods:[],displayName:"FormPhoneNumberInput",props:{name:{required:!0,tsType:{name:"string"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},onErrorMessage:{required:!1,tsType:{name:"signature",type:"function",raw:"(fieldName: string, error: any) => string",signature:{arguments:[{type:{name:"string"},name:"fieldName"},{type:{name:"any"},name:"error"}],return:{name:"string"}}},description:""}},composes:["Omit"]};const i=P({phone:P({number:b().min(10,"Phone number must be at least 10 digits"),code:b()}),contact:P({number:b().optional(),code:b()})}),oe={title:"Forms/FormPhoneNumberInput",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text",description:"Field name from React Hook Form"},label:{control:"text",description:"Label for phone input"},placeholder:{control:"text",description:"Placeholder text"},required:{control:"boolean",description:"Mark field as required"},subtitle:{control:"text",description:"Helper text"},countryCode:{control:"text",description:"Default country code"}}},h={args:{name:"phone"},render:()=>{const r=u({resolver:c(i),mode:"onBlur",defaultValues:{phone:{number:"",code:"+62"},contact:{number:"",code:"+65"}}}),o=n=>{console.log("Form data:",n),alert(JSON.stringify(n,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(l,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(o),className:"space-y-4",children:[e.jsx(a,{name:"phone",label:"Phone Number",placeholder:"Enter your phone number",required:!0}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},f={args:{name:"contact"},render:()=>{const r=u({resolver:c(i),mode:"onBlur",defaultValues:{phone:{number:"",code:"+62"},contact:{number:"",code:"+65"}}}),o=n=>{console.log("Form data:",n),alert(JSON.stringify(n,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(l,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(o),className:"space-y-4",children:[e.jsx(a,{name:"contact",label:"Contact Number",placeholder:"Optional phone number",subtitle:"You can leave this empty"}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},x={args:{name:"phone"},render:()=>{const r=u({resolver:c(i),mode:"onBlur",defaultValues:{phone:{number:"",code:"+62"},contact:{number:"",code:"+65"}}});return e.jsx("div",{className:"w-[400px]",children:e.jsx(l,{...r,children:e.jsx("form",{className:"space-y-4",children:e.jsx(a,{name:"phone",label:"Phone Number",placeholder:"Enter your phone number",subtitle:"Format: +62xxxxxxxxxx",required:!0})})})})}},g={args:{name:"phone"},render:()=>{const r=u({resolver:c(i),mode:"onBlur",defaultValues:{phone:{number:"",code:"+62"},contact:{number:"",code:"+65"}}});return e.jsx("div",{className:"w-[400px]",children:e.jsx(l,{...r,children:e.jsxs("form",{className:"space-y-4",children:[e.jsx(a,{name:"phone",label:"Phone Number",placeholder:"Enter your phone number",required:!0}),e.jsx("button",{type:"submit",onClick:r.handleSubmit(()=>{}),className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg",children:"Trigger Error"})]})})})}},v={args:{name:"phone"},render:()=>{const r=u({resolver:c(i),mode:"onBlur",defaultValues:{phone:{number:"",code:"+62"},contact:{number:"",code:"+65"}}}),o=n=>{console.log("Form data:",n),alert(JSON.stringify(n,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(l,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(o),className:"space-y-4",children:[e.jsx(a,{name:"phone",label:"Primary Phone",required:!0}),e.jsx(a,{name:"contact",label:"Secondary Phone",subtitle:"Optional"}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},y={args:{name:"phone"},render:()=>{const r=u({resolver:c(i),mode:"onBlur",defaultValues:{phone:{number:"",code:"+62"},contact:{number:"",code:"+65"}}});return e.jsx("div",{className:"w-[400px]",children:e.jsx(l,{...r,children:e.jsx("form",{className:"space-y-4",children:e.jsx(a,{name:"phone",label:"Phone Number",required:!0,onErrorMessage:(o,n)=>n?.message?`Custom: ${n.message}`:`Please enter a valid ${o}`})})})})}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};const te=["Default","Optional","WithSubtitle","ErrorState","CompleteForm","CustomErrorMessage"];export{v as CompleteForm,y as CustomErrorMessage,h as Default,g as ErrorState,f as Optional,x as WithSubtitle,te as __namedExportsOrder,oe as default};

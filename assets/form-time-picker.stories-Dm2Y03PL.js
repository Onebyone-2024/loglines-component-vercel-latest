import{j as e}from"./jsx-runtime-u17CrQMm.js";import{u as q,C as k,a as t,F as o}from"./index.esm-pEyBPDOU.js";import{a as x,o as E,d as h}from"./schemas-DnoLg85_.js";import{r as V}from"./iframe-DRjycZ5i.js";import{T as C}from"./time-picker.component-B2U__D2F.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-d2XQ1MEC.js";import"./scroll-area-DThGxvCQ.js";import"./index-Bm98xLC9.js";import"./index-ngJRCTPk.js";import"./index-CCazA_Jv.js";import"./index-CQE40Jn7.js";import"./index-LR-ohNCj.js";import"./index-DzLPgyhs.js";import"./index-B-wbIS6x.js";import"./index-DZumgKRH.js";import"./index-DQBpi9x-.js";import"./index-Bizi6II4.js";import"./index-BdQq_4o_.js";import"./button-4Ap4iV0x.js";import"./index-MZswxfmJ.js";import"./index-Drd88ecX.js";const a=V.forwardRef(({name:r,label:n,required:s,subtitle:l,className:y,styles:j,isDisabled:N,onErrorMessage:F,...S},P)=>{let v;try{v=q()}catch{return console.error(`FormTimePicker Error: Component must be wrapped inside FormProvider from react-hook-form.
Make sure your component tree is: <FormProvider ...form><FormTimePicker /></FormProvider>
Also ensure react-hook-form is installed in your project: npm install react-hook-form`),e.jsxs("div",{className:"p-4 bg-red-50 border border-red-200 rounded text-red-700 text-sm",children:[e.jsx("strong",{children:"FormTimePicker Error:"})," FormProvider not found. This component requires FormProvider wrapper."]})}const{control:w}=v,D=(i,m)=>F?F(i,m):m?.message||`${i} is required`;return e.jsx(k,{control:w,name:r,render:({field:i,fieldState:{error:m}})=>e.jsx("div",{ref:P,children:e.jsx(C,{...i,...S,label:n,required:s,subtitle:m?D(r,m):l,state:N?"disabled":m?"error":"default",className:y,styles:j})})})});a.displayName="FormTimePicker";a.__docgenInfo={description:"",methods:[],displayName:"FormTimePicker",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},styles:{required:!1,tsType:{name:"any"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},onErrorMessage:{required:!1,tsType:{name:"signature",type:"function",raw:"(fieldName: string, error: any) => string",signature:{arguments:[{type:{name:"string"},name:"fieldName"},{type:{name:"any"},name:"error"}],return:{name:"string"}}},description:"Custom error message handler"}},composes:["Omit"]};const g=E({startTime:h().refine(r=>r instanceof Date,{message:"Start time is required"}),endTime:h().optional()}),ae={title:"Forms/FormTimePicker",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},label:{control:"text"},placeholder:{control:"text"},required:{control:"boolean"},timeFormat:{control:"select",options:["12h","24h"]},subtitle:{control:"text"}}},d={args:{name:"startTime",label:"Start Time",required:!0,subtitle:"Please select a start time"},render:r=>{const n=t({resolver:x(g),mode:"onBlur",defaultValues:{startTime:void 0,endTime:void 0}}),s=l=>{console.log("Form data:",l),alert(JSON.stringify(l,null,2))};return e.jsx("div",{className:"w-[300px]",children:e.jsx(o,{...n,children:e.jsxs("form",{onSubmit:n.handleSubmit(s),className:"space-y-4",children:[e.jsx(a,{...r}),e.jsx("button",{className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg",children:"Submit"})]})})})}},c={args:{name:"endTime",label:"End Time",required:!1,subtitle:"Optional field"},render:r=>{const n=t({resolver:x(g),defaultValues:{startTime:void 0,endTime:void 0}});return e.jsx("div",{className:"w-[300px]",children:e.jsx(o,{...n,children:e.jsx("form",{className:"space-y-4",children:e.jsx(a,{...r})})})})}},u={args:{name:"startTime"},render:()=>{const r=t({defaultValues:{startTime:new Date}});return e.jsx("div",{className:"w-[300px]",children:e.jsx(o,{...r,children:e.jsx("form",{className:"space-y-4",children:e.jsx(a,{name:"startTime",label:"Default Time",timeFormat:"24h"})})})})}},p={args:{name:"startTime"},render:()=>{const r=t({defaultValues:{startTime:void 0}});return e.jsx("div",{className:"w-[300px]",children:e.jsx(o,{...r,children:e.jsx("form",{className:"space-y-4",children:e.jsx(a,{name:"startTime",label:"24h Format",timeFormat:"24h",subtitle:"Using 24-hour format"})})})})}},f={args:{name:"startTime"},render:()=>{const r=t({defaultValues:{startTime:new Date}});return e.jsx("div",{className:"w-[300px]",children:e.jsx(o,{...r,children:e.jsx("form",{className:"space-y-4",children:e.jsx(a,{name:"startTime",label:"Disabled Time",isDisabled:!0})})})})}},T={args:{name:"startTime"},render:()=>{const r=t({resolver:x(g),defaultValues:{startTime:void 0}});return e.jsx("div",{className:"w-[300px]",children:e.jsx(o,{...r,children:e.jsx("form",{className:"space-y-4",children:e.jsx(a,{name:"startTime",label:"Custom Error",required:!0,onErrorMessage:(n,s)=>`Wajib isi ${n}`})})})})}},b={args:{name:"startTime"},render:()=>{const r=t({resolver:x(g),defaultValues:{startTime:void 0,endTime:void 0}}),n=s=>{console.log(s),alert(JSON.stringify(s,null,2))};return e.jsx("div",{className:"w-[300px]",children:e.jsx(o,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(n),className:"space-y-4",children:[e.jsx(a,{name:"startTime",label:"Start Time",required:!0}),e.jsx(a,{name:"endTime",label:"End Time",subtitle:"Optional"}),e.jsx("button",{className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg",children:"Submit"})]})})})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    name: "startTime",
    label: "Start Time",
    required: true,
    subtitle: "Please select a start time"
  },
  render: args => {
    const form = useForm<TimeFormData>({
      resolver: zodResolver(timeSchema),
      mode: "onBlur",
      defaultValues: {
        startTime: undefined,
        endTime: undefined
      }
    });
    const onSubmit = (data: TimeFormData) => {
      console.log("Form data:", data);
      alert(JSON.stringify(data, null, 2));
    };
    return <div className="w-[300px]">
                <FormProvider {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormTimePicker {...args} />
                        <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg">
                            Submit
                        </button>
                    </form>
                </FormProvider>
            </div>;
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    name: "endTime",
    label: "End Time",
    required: false,
    subtitle: "Optional field"
  },
  render: args => {
    const form = useForm<TimeFormData>({
      resolver: zodResolver(timeSchema),
      defaultValues: {
        startTime: undefined,
        endTime: undefined
      }
    });
    return <div className="w-[300px]">
                <FormProvider {...form}>
                    <form className="space-y-4">
                        <FormTimePicker {...args} />
                    </form>
                </FormProvider>
            </div>;
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    name: "startTime"
  },
  render: () => {
    const form = useForm<TimeFormData>({
      defaultValues: {
        startTime: new Date()
      }
    });
    return <div className="w-[300px]">
                <FormProvider {...form}>
                    <form className="space-y-4">
                        <FormTimePicker name="startTime" label="Default Time" timeFormat="24h" />
                    </form>
                </FormProvider>
            </div>;
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    name: "startTime"
  },
  render: () => {
    const form = useForm<TimeFormData>({
      defaultValues: {
        startTime: undefined
      }
    });
    return <div className="w-[300px]">
                <FormProvider {...form}>
                    <form className="space-y-4">
                        <FormTimePicker name="startTime" label="24h Format" timeFormat="24h" subtitle="Using 24-hour format" />
                    </form>
                </FormProvider>
            </div>;
  }
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    name: "startTime"
  },
  render: () => {
    const form = useForm<TimeFormData>({
      defaultValues: {
        startTime: new Date()
      }
    });
    return <div className="w-[300px]">
                <FormProvider {...form}>
                    <form className="space-y-4">
                        <FormTimePicker name="startTime" label="Disabled Time" isDisabled />
                    </form>
                </FormProvider>
            </div>;
  }
}`,...f.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    name: "startTime"
  },
  render: () => {
    const form = useForm<TimeFormData>({
      resolver: zodResolver(timeSchema),
      defaultValues: {
        startTime: undefined
      }
    });
    return <div className="w-[300px]">
                <FormProvider {...form}>
                    <form className="space-y-4">
                        <FormTimePicker name="startTime" label="Custom Error" required onErrorMessage={(field, error) => {
            return \`Wajib isi \${field}\`;
          }} />
                    </form>
                </FormProvider>
            </div>;
  }
}`,...T.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    name: "startTime"
  },
  render: () => {
    const form = useForm<TimeFormData>({
      resolver: zodResolver(timeSchema),
      defaultValues: {
        startTime: undefined,
        endTime: undefined
      }
    });
    const onSubmit = (data: TimeFormData) => {
      console.log(data);
      alert(JSON.stringify(data, null, 2));
    };
    return <div className="w-[300px]">
                <FormProvider {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormTimePicker name="startTime" label="Start Time" required />
                        <FormTimePicker name="endTime" label="End Time" subtitle="Optional" />
                        <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg">
                            Submit
                        </button>
                    </form>
                </FormProvider>
            </div>;
  }
}`,...b.parameters?.docs?.source}}};const ne=["RequiredTime","OptionalTime","WithDefaultValue","TimeFormat24h","Disabled","CustomErrorMessage","CompleteForm"];export{b as CompleteForm,T as CustomErrorMessage,f as Disabled,c as OptionalTime,d as RequiredTime,p as TimeFormat24h,u as WithDefaultValue,ne as __namedExportsOrder,ae as default};

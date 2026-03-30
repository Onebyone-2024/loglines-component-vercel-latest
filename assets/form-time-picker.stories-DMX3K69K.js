import{j as e}from"./jsx-runtime-u17CrQMm.js";import{u as q,C as k,a as s,F as o}from"./index.esm-2kFZyOb8.js";import{a as b,o as E,d as v}from"./schemas-BSXY2Jsy.js";import{r as V}from"./iframe-D2X9EDiZ.js";import{T as C}from"./time-picker.component-Bjh1zj9h.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-d2XQ1MEC.js";import"./scroll-area-B87r1791.js";import"./index-DjJjzEuY.js";import"./index-BaYKX93m.js";import"./index-CFV8f5oJ.js";import"./index-Cz4Kbsud.js";import"./index-CmP_ppr0.js";import"./index-sKyOMB2K.js";import"./index-BAGWL3Ia.js";import"./index-BUPbi4OP.js";import"./index-C-xOjnZU.js";import"./index-DHxhBRvB.js";import"./index-BcSiUbNh.js";import"./index-BdQq_4o_.js";import"./button-zALuBQub.js";import"./index-D3pbGxU6.js";import"./index-Drd88ecX.js";const t=V.forwardRef(({name:r,label:n,required:a,subtitle:h,className:y,styles:j,isDisabled:N,onErrorMessage:F,...S},P)=>{let g;try{g=q()}catch{return console.error(`FormTimePicker Error: Component must be wrapped inside FormProvider from react-hook-form.
Make sure your component tree is: <FormProvider ...form><FormTimePicker /></FormProvider>
Also ensure react-hook-form is installed in your project: npm install react-hook-form`),e.jsxs("div",{className:"p-4 bg-red-50 border border-red-200 rounded text-red-700 text-sm",children:[e.jsx("strong",{children:"FormTimePicker Error:"})," FormProvider not found. This component requires FormProvider wrapper."]})}const{control:w}=g,D=(i,m)=>F?F(i,m):m?.message||`${i} is required`;return e.jsx(k,{control:w,name:r,render:({field:i,fieldState:{error:m}})=>e.jsx("div",{ref:P,children:e.jsx(C,{...i,...S,label:n,required:a,subtitle:m?D(r,m):h,state:N?"disabled":m?"error":"default",className:y,styles:j})})})});t.displayName="FormTimePicker";t.__docgenInfo={description:"",methods:[],displayName:"FormTimePicker",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},styles:{required:!1,tsType:{name:"any"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},onErrorMessage:{required:!1,tsType:{name:"signature",type:"function",raw:"(fieldName: string, error: any) => string",signature:{arguments:[{type:{name:"string"},name:"fieldName"},{type:{name:"any"},name:"error"}],return:{name:"string"}}},description:"Custom error message handler"}},composes:["Omit"]};const x=E({startTime:v().refine(r=>r instanceof Date,{message:"Start time is required"}),endTime:v().optional()}),ae={title:"Forms/FormTimePicker",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},label:{control:"text"},placeholder:{control:"text"},required:{control:"boolean"},timeFormat:{control:"select",options:["12h","24h"]},subtitle:{control:"text"}}},l={args:{name:"startTime"},render:()=>{const r=s({resolver:b(x),mode:"onBlur",defaultValues:{startTime:void 0,endTime:void 0}}),n=a=>{console.log("Form data:",a),alert(JSON.stringify(a,null,2))};return e.jsx("div",{className:"w-[300px]",children:e.jsx(o,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(n),className:"space-y-4",children:[e.jsx(t,{name:"startTime",label:"Start Time",required:!0,subtitle:"Please select a start time"}),e.jsx("button",{className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg",children:"Submit"})]})})})}},d={args:{name:"startTime"},render:()=>{const r=s({resolver:b(x),defaultValues:{startTime:void 0,endTime:void 0}});return e.jsx("div",{className:"w-[300px]",children:e.jsx(o,{...r,children:e.jsx("form",{className:"space-y-4",children:e.jsx(t,{name:"endTime",label:"End Time",subtitle:"Optional field"})})})})}},c={args:{name:"startTime"},render:()=>{const r=s({defaultValues:{startTime:new Date}});return e.jsx("div",{className:"w-[300px]",children:e.jsx(o,{...r,children:e.jsx("form",{className:"space-y-4",children:e.jsx(t,{name:"startTime",label:"Default Time",timeFormat:"24h"})})})})}},u={args:{name:"startTime"},render:()=>{const r=s({defaultValues:{startTime:void 0}});return e.jsx("div",{className:"w-[300px]",children:e.jsx(o,{...r,children:e.jsx("form",{className:"space-y-4",children:e.jsx(t,{name:"startTime",label:"24h Format",timeFormat:"24h",subtitle:"Using 24-hour format"})})})})}},p={args:{name:"startTime"},render:()=>{const r=s({defaultValues:{startTime:new Date}});return e.jsx("div",{className:"w-[300px]",children:e.jsx(o,{...r,children:e.jsx("form",{className:"space-y-4",children:e.jsx(t,{name:"startTime",label:"Disabled Time",isDisabled:!0})})})})}},f={args:{name:"startTime"},render:()=>{const r=s({resolver:b(x),defaultValues:{startTime:void 0}});return e.jsx("div",{className:"w-[300px]",children:e.jsx(o,{...r,children:e.jsx("form",{className:"space-y-4",children:e.jsx(t,{name:"startTime",label:"Custom Error",required:!0,onErrorMessage:(n,a)=>`Wajib isi ${n}`})})})})}},T={args:{name:"startTime"},render:()=>{const r=s({resolver:b(x),defaultValues:{startTime:void 0,endTime:void 0}}),n=a=>{console.log(a),alert(JSON.stringify(a,null,2))};return e.jsx("div",{className:"w-[300px]",children:e.jsx(o,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(n),className:"space-y-4",children:[e.jsx(t,{name:"startTime",label:"Start Time",required:!0}),e.jsx(t,{name:"endTime",label:"End Time",subtitle:"Optional"}),e.jsx("button",{className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg",children:"Submit"})]})})})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    name: "startTime"
  },
  render: () => {
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
                        <FormTimePicker name="startTime" label="Start Time" required subtitle="Please select a start time" />
                        <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg">
                            Submit
                        </button>
                    </form>
                </FormProvider>
            </div>;
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
    return <div className="w-[300px]">
                <FormProvider {...form}>
                    <form className="space-y-4">
                        <FormTimePicker name="endTime" label="End Time" subtitle="Optional field" />
                    </form>
                </FormProvider>
            </div>;
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};const ne=["RequiredTime","OptionalTime","WithDefaultValue","TimeFormat24h","Disabled","CustomErrorMessage","CompleteForm"];export{T as CompleteForm,f as CustomErrorMessage,p as Disabled,d as OptionalTime,l as RequiredTime,u as TimeFormat24h,c as WithDefaultValue,ne as __namedExportsOrder,ae as default};

import{j as e}from"./jsx-runtime-u17CrQMm.js";import{u as q,C,a as o,F as l}from"./index.esm-2kFZyOb8.js";import{a as s,o as c,d as i,b as w}from"./schemas-BSXY2Jsy.js";import{r as J}from"./iframe-D2X9EDiZ.js";import{D as V}from"./date-picker.component-Cpty2LwR.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-d2XQ1MEC.js";import"./scroll-area-B87r1791.js";import"./index-DjJjzEuY.js";import"./index-BaYKX93m.js";import"./index-CFV8f5oJ.js";import"./index-Cz4Kbsud.js";import"./index-CmP_ppr0.js";import"./index-sKyOMB2K.js";import"./index-BAGWL3Ia.js";import"./index-BUPbi4OP.js";import"./index-C-xOjnZU.js";import"./index-DHxhBRvB.js";import"./index-BcSiUbNh.js";import"./index-BdQq_4o_.js";import"./calendar-pew4jGIh.js";import"./button-zALuBQub.js";import"./index-D3pbGxU6.js";import"./index-Drd88ecX.js";const a=J.forwardRef(({name:t,label:n,required:r,subtitle:b,className:P,styles:R,isDisabled:M,onErrorMessage:F,...B},k)=>{let N;try{N=q()}catch{return console.error(`FormDatePicker Error: Component must be wrapped inside FormProvider from react-hook-form.
Make sure your component tree is: <FormProvider ...form><FormDatePicker /></FormProvider>
Also ensure react-hook-form is installed in your project: npm install react-hook-form`),e.jsxs("div",{className:"p-4 bg-red-50 border border-red-200 rounded text-red-700 text-sm",children:[e.jsx("strong",{children:"FormDatePicker Error:"})," FormProvider not found. This component requires FormProvider wrapper."]})}const{control:O}=N,E=(u,m)=>F?F(u,m):m?.message||`${u} is required`;return e.jsx(C,{control:O,name:t,render:({field:u,fieldState:{error:m}})=>e.jsx("div",{ref:k,children:e.jsx(V,{...u,...B,label:n,required:r,subtitle:m?E(t,m):b,state:M?"disabled":m?"error":"default",className:P,styles:R})})})});a.displayName="FormDatePicker";a.__docgenInfo={description:"",methods:[],displayName:"FormDatePicker",props:{name:{required:!0,tsType:{name:"TName"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},onErrorMessage:{required:!1,tsType:{name:"signature",type:"function",raw:"(fieldName: string, error?: FieldError) => string",signature:{arguments:[{type:{name:"string"},name:"fieldName"},{type:{name:"FieldError"},name:"error"}],return:{name:"string"}}},description:""}},composes:["Omit"]};const d=c({birthDate:i().refine(t=>t instanceof Date,{message:"Birth date is required"}),eventDate:i().optional()}),j=c({dateRange:c({from:i().optional(),to:i().optional()}).optional(),tripDateRange:c({from:i().optional(),to:i().optional()}).optional()}),z=c({selectedDates:w(i()).min(1,"Select at least one date"),eventDates:w(i()).optional()}),me={title:"Forms/FormDatePicker",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text",description:"Field name from React Hook Form"},label:{control:"text",description:"Label for date picker"},placeholder:{control:"text",description:"Placeholder text"},required:{control:"boolean",description:"Mark field as required"},mode:{control:"select",options:["single","range","multiple"],description:"Date picker mode"},subtitle:{control:"text",description:"Helper text"}}},p={args:{name:"birthDate",mode:"single"},render:()=>{const t=o({resolver:s(d),mode:"onBlur",defaultValues:{birthDate:void 0,eventDate:void 0}}),n=r=>{console.log("Form data:",r),alert(JSON.stringify(r,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(l,{...t,children:e.jsxs("form",{onSubmit:t.handleSubmit(n),className:"space-y-4",children:[e.jsx(a,{name:"birthDate",label:"Birth Date",placeholder:"Select your birth date",mode:"single",showTime:!0,formatDate:"EEE dd/MM/yyyy",timeFormat:"24h",required:!0}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},g={args:{name:"eventDate",mode:"single"},render:()=>{const t=o({resolver:s(d),mode:"onBlur",defaultValues:{birthDate:void 0,eventDate:void 0}}),n=r=>{console.log("Form data:",r),alert(JSON.stringify(r,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(l,{...t,children:e.jsxs("form",{onSubmit:t.handleSubmit(n),className:"space-y-4",children:[e.jsx(a,{name:"eventDate",label:"Event Date",placeholder:"Select an event date (optional)",mode:"single",subtitle:"You can leave this empty",clearable:!0}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},h={args:{name:"birthDate",mode:"single"},render:()=>{const t=o({resolver:s(d),mode:"onBlur",defaultValues:{birthDate:void 0,eventDate:void 0}}),n=r=>{console.log("Form data:",r),alert(JSON.stringify(r,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(l,{...t,children:e.jsxs("form",{onSubmit:t.handleSubmit(n),className:"space-y-4",children:[e.jsx(a,{name:"birthDate",label:"Birth Date",placeholder:"Select your birth date",mode:"single",required:!0,subtitle:"Please select your date of birth",formatDate:"dd/MM/yyyy"}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},f={args:{name:"dateRange",mode:"range"},render:()=>{const t=o({resolver:s(j),mode:"onBlur",defaultValues:{dateRange:{from:void 0,to:void 0},tripDateRange:{from:void 0,to:void 0}}}),n=r=>{console.log("Form data:",r),alert(JSON.stringify(r,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(l,{...t,children:e.jsxs("form",{onSubmit:t.handleSubmit(n),className:"space-y-4",children:[e.jsx(a,{name:"dateRange",label:"Date Range",placeholder:"Select date range",mode:"range",subtitle:"Choose start and end dates",numberOfMonth:2}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},D={args:{name:"selectedDates",mode:"multiple"},render:()=>{const t=o({resolver:s(z),mode:"onBlur",defaultValues:{selectedDates:[],eventDates:[]}}),n=r=>{console.log("Form data:",r),alert(JSON.stringify(r,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(l,{...t,children:e.jsxs("form",{onSubmit:t.handleSubmit(n),className:"space-y-4",children:[e.jsx(a,{name:"selectedDates",label:"Multiple Dates",placeholder:"Select multiple dates",mode:"multiple",required:!0,subtitle:"You can select multiple dates"}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},S={args:{name:"birthDate"},render:()=>{const t=o({resolver:s(d),mode:"onBlur",defaultValues:{birthDate:void 0,eventDate:void 0}}),n=r=>{console.log("Form data:",r),alert(JSON.stringify(r,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(l,{...t,children:e.jsxs("form",{onSubmit:t.handleSubmit(n),className:"space-y-4",children:[e.jsx(a,{name:"birthDate",label:"Birth Date",placeholder:"Select your birth date",mode:"single",required:!0,subtitle:"Enter your date of birth",formatDate:"dd/MM/yyyy"}),e.jsx(a,{name:"eventDate",label:"Event Date",placeholder:"Select an event date",mode:"single",subtitle:"Optional: Enter an upcoming event date",formatDate:"dd/MM/yyyy"}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},v={args:{name:"birthDate",mode:"single"},render:()=>{const t=o({resolver:s(d),mode:"onBlur",defaultValues:{birthDate:void 0,eventDate:void 0}}),n=r=>{console.log("Form data:",r),alert(JSON.stringify(r,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(l,{...t,children:e.jsxs("form",{onSubmit:t.handleSubmit(n),className:"space-y-4",children:[e.jsx(a,{name:"birthDate",label:"Birth Date",placeholder:"Select your birth date",mode:"single",required:!0,onErrorMessage:(r,b)=>b?.message?`Custom error: ${b.message}`:`Please enter a valid ${r}`}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},y={args:{name:"birthDate",mode:"single",clearable:!0},render:()=>{const t=o({resolver:s(d),mode:"onBlur",defaultValues:{birthDate:void 0,eventDate:void 0}}),n=r=>{console.log("Form data:",r),alert(JSON.stringify(r,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(l,{...t,children:e.jsxs("form",{onSubmit:t.handleSubmit(n),className:"space-y-4",children:[e.jsx(a,{name:"birthDate",label:"Birth Date",placeholder:"Select your birth date",mode:"single",required:!0,clearable:!0,subtitle:"Click the X icon to clear the date"}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},x={args:{name:"dateRange",mode:"range",clearable:!0},render:()=>{const t=o({resolver:s(j),mode:"onBlur",defaultValues:{dateRange:{from:void 0,to:void 0},tripDateRange:{from:void 0,to:void 0}}}),n=r=>{console.log("Form data:",r),alert(JSON.stringify(r,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(l,{...t,children:e.jsxs("form",{onSubmit:t.handleSubmit(n),className:"space-y-4",children:[e.jsx(a,{name:"dateRange",label:"Date Range",placeholder:"Select date range",mode:"range",clearable:!0,subtitle:"You can clear the range with the X icon",numberOfMonth:2}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    name: "birthDate",
    mode: "single"
  },
  render: () => {
    const form = useForm<SingleDateFormData>({
      resolver: zodResolver(singleDateSchema),
      mode: "onBlur",
      defaultValues: {
        birthDate: undefined,
        eventDate: undefined
      }
    });
    const onSubmit = (data: SingleDateFormData) => {
      console.log("Form data:", data);
      alert(JSON.stringify(data, null, 2));
    };
    return <div className="w-[400px]">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormDatePicker name="birthDate" label="Birth Date" placeholder="Select your birth date" mode="single" showTime formatDate="EEE dd/MM/yyyy" timeFormat="24h" required />
            <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Submit
            </button>
          </form>
        </FormProvider>
      </div>;
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    name: "eventDate",
    mode: "single"
  },
  render: () => {
    const form = useForm<SingleDateFormData>({
      resolver: zodResolver(singleDateSchema),
      mode: "onBlur",
      defaultValues: {
        birthDate: undefined,
        eventDate: undefined
      }
    });
    const onSubmit = (data: SingleDateFormData) => {
      console.log("Form data:", data);
      alert(JSON.stringify(data, null, 2));
    };
    return <div className="w-[400px]">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormDatePicker name="eventDate" label="Event Date" placeholder="Select an event date (optional)" mode="single" subtitle="You can leave this empty" clearable />
            <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Submit
            </button>
          </form>
        </FormProvider>
      </div>;
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    name: "birthDate",
    mode: "single"
  },
  render: () => {
    const form = useForm<SingleDateFormData>({
      resolver: zodResolver(singleDateSchema),
      mode: "onBlur",
      defaultValues: {
        birthDate: undefined,
        eventDate: undefined
      }
    });
    const onSubmit = (data: SingleDateFormData) => {
      console.log("Form data:", data);
      alert(JSON.stringify(data, null, 2));
    };
    return <div className="w-[400px]">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormDatePicker name="birthDate" label="Birth Date" placeholder="Select your birth date" mode="single" required subtitle="Please select your date of birth" formatDate="dd/MM/yyyy" />
            <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Submit
            </button>
          </form>
        </FormProvider>
      </div>;
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    name: "dateRange",
    mode: "range"
  },
  render: () => {
    const form = useForm<DateRangeFormData>({
      resolver: zodResolver(dateRangeSchema),
      mode: "onBlur",
      defaultValues: {
        dateRange: {
          from: undefined,
          to: undefined
        },
        tripDateRange: {
          from: undefined,
          to: undefined
        }
      }
    });
    const onSubmit = (data: DateRangeFormData) => {
      console.log("Form data:", data);
      alert(JSON.stringify(data, null, 2));
    };
    return <div className="w-[400px]">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormDatePicker name="dateRange" label="Date Range" placeholder="Select date range" mode="range" subtitle="Choose start and end dates" numberOfMonth={2} />
            <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Submit
            </button>
          </form>
        </FormProvider>
      </div>;
  }
}`,...f.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    name: "selectedDates",
    mode: "multiple"
  },
  render: () => {
    const form = useForm<MultipleDatesFormData>({
      resolver: zodResolver(multipleDatesSchema),
      mode: "onBlur",
      defaultValues: {
        selectedDates: [],
        eventDates: []
      }
    });
    const onSubmit = (data: MultipleDatesFormData) => {
      console.log("Form data:", data);
      alert(JSON.stringify(data, null, 2));
    };
    return <div className="w-[400px]">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormDatePicker name="selectedDates" label="Multiple Dates" placeholder="Select multiple dates" mode="multiple" required subtitle="You can select multiple dates" />
            <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Submit
            </button>
          </form>
        </FormProvider>
      </div>;
  }
}`,...D.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    name: "birthDate"
  },
  render: () => {
    const form = useForm<SingleDateFormData>({
      resolver: zodResolver(singleDateSchema),
      mode: "onBlur",
      defaultValues: {
        birthDate: undefined,
        eventDate: undefined
      }
    });
    const onSubmit = (data: SingleDateFormData) => {
      console.log("Form data:", data);
      alert(JSON.stringify(data, null, 2));
    };
    return <div className="w-[400px]">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormDatePicker name="birthDate" label="Birth Date" placeholder="Select your birth date" mode="single" required subtitle="Enter your date of birth" formatDate="dd/MM/yyyy" />
            <FormDatePicker name="eventDate" label="Event Date" placeholder="Select an event date" mode="single" subtitle="Optional: Enter an upcoming event date" formatDate="dd/MM/yyyy" />
            <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Submit
            </button>
          </form>
        </FormProvider>
      </div>;
  }
}`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    name: "birthDate",
    mode: "single"
  },
  render: () => {
    const form = useForm<SingleDateFormData>({
      resolver: zodResolver(singleDateSchema),
      mode: "onBlur",
      defaultValues: {
        birthDate: undefined,
        eventDate: undefined
      }
    });
    const onSubmit = (data: SingleDateFormData) => {
      console.log("Form data:", data);
      alert(JSON.stringify(data, null, 2));
    };
    return <div className="w-[400px]">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormDatePicker name="birthDate" label="Birth Date" placeholder="Select your birth date" mode="single" required onErrorMessage={(fieldName, error) => {
            if (error?.message) {
              return \`Custom error: \${error.message}\`;
            }
            return \`Please enter a valid \${fieldName}\`;
          }} />
            <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Submit
            </button>
          </form>
        </FormProvider>
      </div>;
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    name: "birthDate",
    mode: "single",
    clearable: true
  },
  render: () => {
    const form = useForm<SingleDateFormData>({
      resolver: zodResolver(singleDateSchema),
      mode: "onBlur",
      defaultValues: {
        birthDate: undefined,
        eventDate: undefined
      }
    });
    const onSubmit = (data: SingleDateFormData) => {
      console.log("Form data:", data);
      alert(JSON.stringify(data, null, 2));
    };
    return <div className="w-[400px]">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormDatePicker name="birthDate" label="Birth Date" placeholder="Select your birth date" mode="single" required clearable subtitle="Click the X icon to clear the date" />
            <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Submit
            </button>
          </form>
        </FormProvider>
      </div>;
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    name: "dateRange",
    mode: "range",
    clearable: true
  },
  render: () => {
    const form = useForm<DateRangeFormData>({
      resolver: zodResolver(dateRangeSchema),
      mode: "onBlur",
      defaultValues: {
        dateRange: {
          from: undefined,
          to: undefined
        },
        tripDateRange: {
          from: undefined,
          to: undefined
        }
      }
    });
    const onSubmit = (data: DateRangeFormData) => {
      console.log("Form data:", data);
      alert(JSON.stringify(data, null, 2));
    };
    return <div className="w-[400px]">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormDatePicker name="dateRange" label="Date Range" placeholder="Select date range" mode="range" clearable subtitle="You can clear the range with the X icon" numberOfMonth={2} />
            <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Submit
            </button>
          </form>
        </FormProvider>
      </div>;
  }
}`,...x.parameters?.docs?.source}}};const de=["SingleDate","OptionalDate","WithSubtitle","DateRangeMode","MultipleDates","CompleteForm","CustomErrorMessage","WithClearable","ClearableRange"];export{x as ClearableRange,S as CompleteForm,v as CustomErrorMessage,f as DateRangeMode,D as MultipleDates,g as OptionalDate,p as SingleDate,y as WithClearable,h as WithSubtitle,de as __namedExportsOrder,me as default};

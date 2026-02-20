import{j as e}from"./jsx-runtime-u17CrQMm.js";import{u as k,C as q,a as o,b as l,F as s,o as u,d as i,c as N}from"./schemas-DDEJw9SD.js";import{r as E}from"./iframe-CZtJQ_4b.js";import{D as J}from"./date-picker-Dychohey.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-d2XQ1MEC.js";import"./index-B9IVvhAW.js";import"./index-BkLry5iL.js";import"./index-DFfF7Xm2.js";import"./index-u3d1b7p2.js";import"./index-C9L0kFif.js";import"./index-BMUGzazt.js";import"./index-C_MRDbiw.js";import"./index-CgdWI0uX.js";import"./index-Bz3b2su2.js";import"./index-CUkWElrq.js";import"./calendar-BOQTYTFL.js";import"./button-DV3RmwTL.js";import"./index-0WGk5y-0.js";import"./index-Drd88ecX.js";const a=E.forwardRef(({name:t,label:r,required:n,subtitle:c,className:j,styles:R,onErrorMessage:F,...P},M)=>{const{control:B}=k(),O=(b,m)=>F?F(b,m):m?.message||`${b} is required`;return e.jsx(q,{control:B,name:t,render:({field:b,fieldState:{error:m}})=>e.jsx("div",{ref:M,children:e.jsx(J,{...b,...P,label:r,required:n,subtitle:m?O(t,m):c,state:m?"error":"default",className:j,styles:R})})})});a.displayName="FormDatePicker";a.__docgenInfo={description:"",methods:[],displayName:"FormDatePicker",props:{name:{required:!0,tsType:{name:"TName"},description:""},onErrorMessage:{required:!1,tsType:{name:"signature",type:"function",raw:"(fieldName: string, error?: FieldError) => string",signature:{arguments:[{type:{name:"string"},name:"fieldName"},{type:{name:"FieldError"},name:"error"}],return:{name:"string"}}},description:""}},composes:["Omit"]};const d=u({birthDate:i().refine(t=>t instanceof Date,{message:"Birth date is required"}),eventDate:i().optional()}),w=u({dateRange:u({from:i().optional(),to:i().optional()}).optional(),tripDateRange:u({from:i().optional(),to:i().optional()}).optional()}),V=u({selectedDates:N(i()).min(1,"Select at least one date"),eventDates:N(i()).optional()}),re={title:"Forms/FormDatePicker",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text",description:"Field name from React Hook Form"},label:{control:"text",description:"Label for date picker"},placeholder:{control:"text",description:"Placeholder text"},required:{control:"boolean",description:"Mark field as required"},mode:{control:"select",options:["single","range","multiple"],description:"Date picker mode"},subtitle:{control:"text",description:"Helper text"}}},p={args:{name:"birthDate",mode:"single"},render:()=>{const t=o({resolver:l(d),mode:"onBlur",defaultValues:{birthDate:void 0,eventDate:void 0}}),r=n=>{console.log("Form data:",n),alert(JSON.stringify(n,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(s,{...t,children:e.jsxs("form",{onSubmit:t.handleSubmit(r),className:"space-y-4",children:[e.jsx(a,{name:"birthDate",label:"Birth Date",placeholder:"Select your birth date",mode:"single",required:!0}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},g={args:{name:"eventDate",mode:"single"},render:()=>{const t=o({resolver:l(d),mode:"onBlur",defaultValues:{birthDate:void 0,eventDate:void 0}}),r=n=>{console.log("Form data:",n),alert(JSON.stringify(n,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(s,{...t,children:e.jsxs("form",{onSubmit:t.handleSubmit(r),className:"space-y-4",children:[e.jsx(a,{name:"eventDate",label:"Event Date",placeholder:"Select an event date (optional)",mode:"single",subtitle:"You can leave this empty",clearable:!0}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},h={args:{name:"birthDate",mode:"single"},render:()=>{const t=o({resolver:l(d),mode:"onBlur",defaultValues:{birthDate:void 0,eventDate:void 0}}),r=n=>{console.log("Form data:",n),alert(JSON.stringify(n,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(s,{...t,children:e.jsxs("form",{onSubmit:t.handleSubmit(r),className:"space-y-4",children:[e.jsx(a,{name:"birthDate",label:"Birth Date",placeholder:"Select your birth date",mode:"single",required:!0,subtitle:"Please select your date of birth",formatDate:"dd/MM/yyyy"}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},f={args:{name:"dateRange",mode:"range"},render:()=>{const t=o({resolver:l(w),mode:"onBlur",defaultValues:{dateRange:{from:void 0,to:void 0},tripDateRange:{from:void 0,to:void 0}}}),r=n=>{console.log("Form data:",n),alert(JSON.stringify(n,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(s,{...t,children:e.jsxs("form",{onSubmit:t.handleSubmit(r),className:"space-y-4",children:[e.jsx(a,{name:"dateRange",label:"Date Range",placeholder:"Select date range",mode:"range",subtitle:"Choose start and end dates",numberOfMonth:2}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},D={args:{name:"selectedDates",mode:"multiple"},render:()=>{const t=o({resolver:l(V),mode:"onBlur",defaultValues:{selectedDates:[],eventDates:[]}}),r=n=>{console.log("Form data:",n),alert(JSON.stringify(n,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(s,{...t,children:e.jsxs("form",{onSubmit:t.handleSubmit(r),className:"space-y-4",children:[e.jsx(a,{name:"selectedDates",label:"Multiple Dates",placeholder:"Select multiple dates",mode:"multiple",required:!0,subtitle:"You can select multiple dates"}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},S={args:{name:"birthDate"},render:()=>{const t=o({resolver:l(d),mode:"onBlur",defaultValues:{birthDate:void 0,eventDate:void 0}}),r=n=>{console.log("Form data:",n),alert(JSON.stringify(n,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(s,{...t,children:e.jsxs("form",{onSubmit:t.handleSubmit(r),className:"space-y-4",children:[e.jsx(a,{name:"birthDate",label:"Birth Date",placeholder:"Select your birth date",mode:"single",required:!0,subtitle:"Enter your date of birth",formatDate:"dd/MM/yyyy"}),e.jsx(a,{name:"eventDate",label:"Event Date",placeholder:"Select an event date",mode:"single",subtitle:"Optional: Enter an upcoming event date",formatDate:"dd/MM/yyyy"}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},v={args:{name:"birthDate",mode:"single"},render:()=>{const t=o({resolver:l(d),mode:"onBlur",defaultValues:{birthDate:void 0,eventDate:void 0}}),r=n=>{console.log("Form data:",n),alert(JSON.stringify(n,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(s,{...t,children:e.jsxs("form",{onSubmit:t.handleSubmit(r),className:"space-y-4",children:[e.jsx(a,{name:"birthDate",label:"Birth Date",placeholder:"Select your birth date",mode:"single",required:!0,onErrorMessage:(n,c)=>c?.message?`Custom error: ${c.message}`:`Please enter a valid ${n}`}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},y={args:{name:"birthDate",mode:"single",clearable:!0},render:()=>{const t=o({resolver:l(d),mode:"onBlur",defaultValues:{birthDate:void 0,eventDate:void 0}}),r=n=>{console.log("Form data:",n),alert(JSON.stringify(n,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(s,{...t,children:e.jsxs("form",{onSubmit:t.handleSubmit(r),className:"space-y-4",children:[e.jsx(a,{name:"birthDate",label:"Birth Date",placeholder:"Select your birth date",mode:"single",required:!0,clearable:!0,subtitle:"Click the X icon to clear the date"}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},x={args:{name:"dateRange",mode:"range",clearable:!0},render:()=>{const t=o({resolver:l(w),mode:"onBlur",defaultValues:{dateRange:{from:void 0,to:void 0},tripDateRange:{from:void 0,to:void 0}}}),r=n=>{console.log("Form data:",n),alert(JSON.stringify(n,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(s,{...t,children:e.jsxs("form",{onSubmit:t.handleSubmit(r),className:"space-y-4",children:[e.jsx(a,{name:"dateRange",label:"Date Range",placeholder:"Select date range",mode:"range",clearable:!0,subtitle:"You can clear the range with the X icon",numberOfMonth:2}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
            <FormDatePicker name="birthDate" label="Birth Date" placeholder="Select your birth date" mode="single" required />
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
}`,...x.parameters?.docs?.source}}};const ae=["SingleDate","OptionalDate","WithSubtitle","DateRangeMode","MultipleDates","CompleteForm","CustomErrorMessage","WithClearable","ClearableRange"];export{x as ClearableRange,S as CompleteForm,v as CustomErrorMessage,f as DateRangeMode,D as MultipleDates,g as OptionalDate,p as SingleDate,y as WithClearable,h as WithSubtitle,ae as __namedExportsOrder,re as default};

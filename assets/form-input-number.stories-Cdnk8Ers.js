import{j as e}from"./jsx-runtime-u17CrQMm.js";import{u as C,C as R,a as l,b as i,F as u,o as T,n as c}from"./schemas-Cdc-0DkG.js";import{r as k}from"./iframe-vU-aGGkt.js";import{I as z}from"./input-number-zM30Dcae.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-d2XQ1MEC.js";const t=k.forwardRef(({name:r,label:n,required:a,prefixIcon:F,suffixIcon:v,subtitle:N,className:P,containerClassName:q,styles:w,onIconClick:j,thousandsSeparator:E,decimalSeparator:I,decimalPlaces:D,onErrorMessage:S,...M},O)=>{let g;try{g=C()}catch{return console.error(`FormInputNumber Error: Component must be wrapped inside FormProvider from react-hook-form.
Make sure your component tree is: <FormProvider ...form><FormInputNumber /></FormProvider>
Also ensure react-hook-form is installed in your project: npm install react-hook-form`),e.jsxs("div",{className:"p-4 bg-red-50 border border-red-200 rounded text-red-700 text-sm",children:[e.jsx("strong",{children:"FormInputNumber Error:"})," FormProvider not found. This component requires FormProvider wrapper."]})}const{control:V}=g,B=(o,s)=>S?S(o,s):s?.message||`${o} is required`;return e.jsx(R,{control:V,name:r,render:({field:o,fieldState:{error:s}})=>e.jsx(z,{ref:O,...o,onChange:x=>{const J=x.target.value?parseFloat(x.target.value):"";o.onChange(J)},...M,label:n,required:a,prefixIcon:F,suffixIcon:v,subtitle:s?B(r,s):N,state:s?"error":"default",className:P,containerClassName:q,styles:w,onIconClick:j,thousandsSeparator:E,decimalSeparator:I,decimalPlaces:D})})});t.displayName="FormInputNumber";t.__docgenInfo={description:"",methods:[],displayName:"FormInputNumber",props:{name:{required:!0,tsType:{name:"TName"},description:""},onErrorMessage:{required:!1,tsType:{name:"signature",type:"function",raw:"(fieldName: string, error?: FieldError) => string",signature:{arguments:[{type:{name:"string"},name:"fieldName"},{type:{name:"FieldError"},name:"error"}],return:{name:"string"}}},description:""}},composes:["Omit"]};const m=T({salary:c().min(0,"Salary cannot be negative"),price:c().min(0,"Price cannot be negative"),quantity:c().min(1,"Quantity must be at least 1"),discount:c().min(0).max(100,"Discount must be between 0-100%")}),L={title:"Forms/FormInputNumber",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text",description:"Field name from React Hook Form"},label:{control:"text",description:"Label for numeric input"},placeholder:{control:"text",description:"Placeholder text"},required:{control:"boolean",description:"Mark field as required"},thousandsSeparator:{control:"radio",options:[",","."],description:"Thousands separator"},decimalSeparator:{control:"radio",options:[",","."],description:"Decimal separator"},decimalPlaces:{control:"number",description:"Number of decimals"},prefixIcon:{control:"text",description:"Tabler icon class for prefix"},suffixIcon:{control:"text",description:"Tabler icon class for suffix"}}},d={args:{name:"salary"},render:()=>{const r=l({resolver:i(m),mode:"onBlur",defaultValues:{salary:0,price:0,quantity:1,discount:0}}),n=a=>{console.log("Form data:",a),alert(JSON.stringify(a,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(n),className:"space-y-4",children:[e.jsx(t,{name:"salary",label:"Monthly Salary",placeholder:"Enter salary",thousandsSeparator:",",decimalSeparator:".",decimalPlaces:0,required:!0}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},p={args:{name:"price"},render:()=>{const r=l({resolver:i(m),mode:"onBlur",defaultValues:{salary:0,price:0,quantity:1,discount:0}}),n=a=>{console.log("Form data:",a),alert(JSON.stringify(a,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(n),className:"space-y-4",children:[e.jsx(t,{name:"price",label:"Product Price",placeholder:"Enter price",thousandsSeparator:",",decimalSeparator:".",decimalPlaces:2,prefixIcon:"ti ti-currency-dollar",required:!0}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},b={args:{name:"discount"},render:()=>{const r=l({resolver:i(m),mode:"onBlur",defaultValues:{salary:0,price:0,quantity:1,discount:0}}),n=a=>{console.log("Form data:",a),alert(JSON.stringify(a,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(n),className:"space-y-4",children:[e.jsx(t,{name:"discount",label:"Discount (%)",placeholder:"Enter discount",thousandsSeparator:",",decimalSeparator:".",decimalPlaces:2,suffixIcon:"ti ti-percent",required:!0}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},y={args:{name:"salary"},render:()=>{const r=l({resolver:i(m),mode:"onBlur",defaultValues:{salary:0,price:0,quantity:1,discount:0}}),n=a=>{console.log("Form data:",a),alert(JSON.stringify(a,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(n),className:"space-y-4",children:[e.jsx(t,{name:"salary",label:"Salary (European Format)",placeholder:"Enter your salary",thousandsSeparator:".",decimalSeparator:",",decimalPlaces:2,required:!0}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},f={args:{name:"quantity"},render:()=>{const r=l({resolver:i(m),mode:"onBlur",defaultValues:{salary:0,price:0,quantity:1,discount:0}}),n=a=>{console.log("Form data:",a),alert(JSON.stringify(a,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(n),className:"space-y-4",children:[e.jsx(t,{name:"quantity",label:"Quantity",placeholder:"Enter quantity",thousandsSeparator:",",decimalSeparator:".",decimalPlaces:0,prefixIcon:"ti ti-box",required:!0}),e.jsx(t,{name:"price",label:"Unit Price",placeholder:"Enter unit price",thousandsSeparator:",",decimalSeparator:".",decimalPlaces:2,prefixIcon:"ti ti-currency-dollar",required:!0}),e.jsx(t,{name:"discount",label:"Discount (%)",placeholder:"Enter discount",thousandsSeparator:",",decimalSeparator:".",decimalPlaces:2,suffixIcon:"ti ti-percent",required:!0}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},h={args:{name:"salary"},render:()=>{const r=l({resolver:i(m),mode:"onBlur",defaultValues:{salary:0,price:0,quantity:1,discount:0}}),n=a=>{console.log("Form data:",a),alert(JSON.stringify(a,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(n),className:"space-y-4",children:[e.jsx(t,{name:"salary",label:"Monthly Salary",placeholder:"Enter your salary",thousandsSeparator:",",decimalSeparator:".",decimalPlaces:0,onErrorMessage:()=>"Salary must be a positive number",required:!0}),e.jsx(t,{name:"price",label:"Product Price",placeholder:"Enter price",thousandsSeparator:",",decimalSeparator:".",decimalPlaces:2,prefixIcon:"ti ti-currency-dollar",onErrorMessage:()=>"Please enter a valid price (e.g., 99.99)",required:!0}),e.jsx(t,{name:"discount",label:"Discount (%)",placeholder:"Enter discount",thousandsSeparator:",",decimalSeparator:".",decimalPlaces:2,suffixIcon:"ti ti-percent",onErrorMessage:()=>"Discount must be between 0-100%",required:!0}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    name: "salary"
  },
  render: () => {
    const form = useForm<FormData>({
      resolver: zodResolver(schema),
      mode: "onBlur",
      defaultValues: {
        salary: 0,
        price: 0,
        quantity: 1,
        discount: 0
      }
    });
    const onSubmit = (data: FormData) => {
      console.log("Form data:", data);
      alert(JSON.stringify(data, null, 2));
    };
    return <div className="w-[400px]">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormInputNumber name="salary" label="Monthly Salary" placeholder="Enter salary" thousandsSeparator="," decimalSeparator="." decimalPlaces={0} required />
            <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Submit
            </button>
          </form>
        </FormProvider>
      </div>;
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    name: "price"
  },
  render: () => {
    const form = useForm<FormData>({
      resolver: zodResolver(schema),
      mode: "onBlur",
      defaultValues: {
        salary: 0,
        price: 0,
        quantity: 1,
        discount: 0
      }
    });
    const onSubmit = (data: FormData) => {
      console.log("Form data:", data);
      alert(JSON.stringify(data, null, 2));
    };
    return <div className="w-[400px]">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormInputNumber name="price" label="Product Price" placeholder="Enter price" thousandsSeparator="," decimalSeparator="." decimalPlaces={2} prefixIcon="ti ti-currency-dollar" required />
            <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Submit
            </button>
          </form>
        </FormProvider>
      </div>;
  }
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    name: "discount"
  },
  render: () => {
    const form = useForm<FormData>({
      resolver: zodResolver(schema),
      mode: "onBlur",
      defaultValues: {
        salary: 0,
        price: 0,
        quantity: 1,
        discount: 0
      }
    });
    const onSubmit = (data: FormData) => {
      console.log("Form data:", data);
      alert(JSON.stringify(data, null, 2));
    };
    return <div className="w-[400px]">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormInputNumber name="discount" label="Discount (%)" placeholder="Enter discount" thousandsSeparator="," decimalSeparator="." decimalPlaces={2} suffixIcon="ti ti-percent" required />
            <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Submit
            </button>
          </form>
        </FormProvider>
      </div>;
  }
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    name: "salary"
  },
  render: () => {
    const form = useForm<FormData>({
      resolver: zodResolver(schema),
      mode: "onBlur",
      defaultValues: {
        salary: 0,
        price: 0,
        quantity: 1,
        discount: 0
      }
    });
    const onSubmit = (data: FormData) => {
      console.log("Form data:", data);
      alert(JSON.stringify(data, null, 2));
    };
    return <div className="w-[400px]">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormInputNumber name="salary" label="Salary (European Format)" placeholder="Enter your salary" thousandsSeparator="." decimalSeparator="," decimalPlaces={2} required />
            <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Submit
            </button>
          </form>
        </FormProvider>
      </div>;
  }
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    name: "quantity"
  },
  render: () => {
    const form = useForm<FormData>({
      resolver: zodResolver(schema),
      mode: "onBlur",
      defaultValues: {
        salary: 0,
        price: 0,
        quantity: 1,
        discount: 0
      }
    });
    const onSubmit = (data: FormData) => {
      console.log("Form data:", data);
      alert(JSON.stringify(data, null, 2));
    };
    return <div className="w-[400px]">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormInputNumber name="quantity" label="Quantity" placeholder="Enter quantity" thousandsSeparator="," decimalSeparator="." decimalPlaces={0} prefixIcon="ti ti-box" required />
            <FormInputNumber name="price" label="Unit Price" placeholder="Enter unit price" thousandsSeparator="," decimalSeparator="." decimalPlaces={2} prefixIcon="ti ti-currency-dollar" required />
            <FormInputNumber name="discount" label="Discount (%)" placeholder="Enter discount" thousandsSeparator="," decimalSeparator="." decimalPlaces={2} suffixIcon="ti ti-percent" required />
            <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Submit
            </button>
          </form>
        </FormProvider>
      </div>;
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    name: "salary"
  },
  render: () => {
    const form = useForm<FormData>({
      resolver: zodResolver(schema),
      mode: "onBlur",
      defaultValues: {
        salary: 0,
        price: 0,
        quantity: 1,
        discount: 0
      }
    });
    const onSubmit = (data: FormData) => {
      console.log("Form data:", data);
      alert(JSON.stringify(data, null, 2));
    };
    return <div className="w-[400px]">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormInputNumber name="salary" label="Monthly Salary" placeholder="Enter your salary" thousandsSeparator="," decimalSeparator="." decimalPlaces={0} onErrorMessage={() => "Salary must be a positive number"} required />
            <FormInputNumber name="price" label="Product Price" placeholder="Enter price" thousandsSeparator="," decimalSeparator="." decimalPlaces={2} prefixIcon="ti ti-currency-dollar" onErrorMessage={() => "Please enter a valid price (e.g., 99.99)"} required />
            <FormInputNumber name="discount" label="Discount (%)" placeholder="Enter discount" thousandsSeparator="," decimalSeparator="." decimalPlaces={2} suffixIcon="ti ti-percent" onErrorMessage={() => "Discount must be between 0-100%"} required />
            <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Submit
            </button>
          </form>
        </FormProvider>
      </div>;
  }
}`,...h.parameters?.docs?.source}}};const $=["Default","WithDecimals","Percentage","EuropeanFormat","CompleteForm","CustomErrorMessage"];export{f as CompleteForm,h as CustomErrorMessage,d as Default,y as EuropeanFormat,b as Percentage,p as WithDecimals,$ as __namedExportsOrder,L as default};

import{j as e}from"./jsx-runtime-u17CrQMm.js";import{u as J,C,a as s,b as l,F as i,o as R,n as m}from"./schemas-CoMadCAO.js";import{r as T}from"./iframe-sOrGF-FJ.js";import{I as z}from"./input-number-BCDijLE3.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BEHD0UYf.js";const t=T.forwardRef(({name:r,label:n,required:a,prefixIcon:x,suffixIcon:F,subtitle:v,className:N,containerClassName:P,styles:q,onIconClick:w,thousandsSeparator:j,decimalSeparator:E,decimalPlaces:I,onErrorMessage:h,...D},M)=>{const{control:O}=J(),V=(c,o)=>h?h(c,o):o?.message||`${c} is required`;return e.jsx(C,{control:O,name:r,render:({field:c,fieldState:{error:o}})=>e.jsx(z,{ref:M,...c,onChange:g=>{const B=g.target.value?parseFloat(g.target.value):"";c.onChange(B)},...D,label:n,required:a,prefixIcon:x,suffixIcon:F,subtitle:o?V(r,o):v,state:o?"error":"default",className:N,containerClassName:P,styles:q,onIconClick:w,thousandsSeparator:j,decimalSeparator:E,decimalPlaces:I})})});t.displayName="FormInputNumber";t.__docgenInfo={description:"",methods:[],displayName:"FormInputNumber",props:{name:{required:!0,tsType:{name:"TName"},description:""},onErrorMessage:{required:!1,tsType:{name:"signature",type:"function",raw:"(fieldName: string, error?: FieldError) => string",signature:{arguments:[{type:{name:"string"},name:"fieldName"},{type:{name:"FieldError"},name:"error"}],return:{name:"string"}}},description:""}},composes:["Omit"]};const u=R({salary:m().min(0,"Salary cannot be negative"),price:m().min(0,"Price cannot be negative"),quantity:m().min(1,"Quantity must be at least 1"),discount:m().min(0).max(100,"Discount must be between 0-100%")}),L={title:"Forms/FormInputNumber",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text",description:"Field name from React Hook Form"},label:{control:"text",description:"Label for numeric input"},placeholder:{control:"text",description:"Placeholder text"},required:{control:"boolean",description:"Mark field as required"},thousandsSeparator:{control:"radio",options:[",","."],description:"Thousands separator"},decimalSeparator:{control:"radio",options:[",","."],description:"Decimal separator"},decimalPlaces:{control:"number",description:"Number of decimals"},prefixIcon:{control:"text",description:"Tabler icon class for prefix"},suffixIcon:{control:"text",description:"Tabler icon class for suffix"}}},d={args:{name:"salary"},render:()=>{const r=s({resolver:l(u),mode:"onBlur",defaultValues:{salary:0,price:0,quantity:1,discount:0}}),n=a=>{console.log("Form data:",a),alert(JSON.stringify(a,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(i,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(n),className:"space-y-4",children:[e.jsx(t,{name:"salary",label:"Monthly Salary",placeholder:"Enter salary",thousandsSeparator:",",decimalSeparator:".",decimalPlaces:0,required:!0}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},p={args:{name:"price"},render:()=>{const r=s({resolver:l(u),mode:"onBlur",defaultValues:{salary:0,price:0,quantity:1,discount:0}}),n=a=>{console.log("Form data:",a),alert(JSON.stringify(a,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(i,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(n),className:"space-y-4",children:[e.jsx(t,{name:"price",label:"Product Price",placeholder:"Enter price",thousandsSeparator:",",decimalSeparator:".",decimalPlaces:2,prefixIcon:"ti ti-currency-dollar",required:!0}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},b={args:{name:"discount"},render:()=>{const r=s({resolver:l(u),mode:"onBlur",defaultValues:{salary:0,price:0,quantity:1,discount:0}}),n=a=>{console.log("Form data:",a),alert(JSON.stringify(a,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(i,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(n),className:"space-y-4",children:[e.jsx(t,{name:"discount",label:"Discount (%)",placeholder:"Enter discount",thousandsSeparator:",",decimalSeparator:".",decimalPlaces:2,suffixIcon:"ti ti-percent",required:!0}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},y={args:{name:"salary"},render:()=>{const r=s({resolver:l(u),mode:"onBlur",defaultValues:{salary:0,price:0,quantity:1,discount:0}}),n=a=>{console.log("Form data:",a),alert(JSON.stringify(a,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(i,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(n),className:"space-y-4",children:[e.jsx(t,{name:"salary",label:"Salary (European Format)",placeholder:"Enter your salary",thousandsSeparator:".",decimalSeparator:",",decimalPlaces:2,required:!0}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},f={args:{name:"quantity"},render:()=>{const r=s({resolver:l(u),mode:"onBlur",defaultValues:{salary:0,price:0,quantity:1,discount:0}}),n=a=>{console.log("Form data:",a),alert(JSON.stringify(a,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(i,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(n),className:"space-y-4",children:[e.jsx(t,{name:"quantity",label:"Quantity",placeholder:"Enter quantity",thousandsSeparator:",",decimalSeparator:".",decimalPlaces:0,prefixIcon:"ti ti-box",required:!0}),e.jsx(t,{name:"price",label:"Unit Price",placeholder:"Enter unit price",thousandsSeparator:",",decimalSeparator:".",decimalPlaces:2,prefixIcon:"ti ti-currency-dollar",required:!0}),e.jsx(t,{name:"discount",label:"Discount (%)",placeholder:"Enter discount",thousandsSeparator:",",decimalSeparator:".",decimalPlaces:2,suffixIcon:"ti ti-percent",required:!0}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}},S={args:{name:"salary"},render:()=>{const r=s({resolver:l(u),mode:"onBlur",defaultValues:{salary:0,price:0,quantity:1,discount:0}}),n=a=>{console.log("Form data:",a),alert(JSON.stringify(a,null,2))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(i,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(n),className:"space-y-4",children:[e.jsx(t,{name:"salary",label:"Monthly Salary",placeholder:"Enter your salary",thousandsSeparator:",",decimalSeparator:".",decimalPlaces:0,onErrorMessage:()=>"Salary must be a positive number",required:!0}),e.jsx(t,{name:"price",label:"Product Price",placeholder:"Enter price",thousandsSeparator:",",decimalSeparator:".",decimalPlaces:2,prefixIcon:"ti ti-currency-dollar",onErrorMessage:()=>"Please enter a valid price (e.g., 99.99)",required:!0}),e.jsx(t,{name:"discount",label:"Discount (%)",placeholder:"Enter discount",thousandsSeparator:",",decimalSeparator:".",decimalPlaces:2,suffixIcon:"ti ti-percent",onErrorMessage:()=>"Discount must be between 0-100%",required:!0}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Submit"})]})})})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};const $=["Default","WithDecimals","Percentage","EuropeanFormat","CompleteForm","CustomErrorMessage"];export{f as CompleteForm,S as CustomErrorMessage,d as Default,y as EuropeanFormat,b as Percentage,p as WithDecimals,$ as __namedExportsOrder,L as default};

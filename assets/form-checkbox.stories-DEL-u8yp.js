import{j as e}from"./jsx-runtime-u17CrQMm.js";import{u as R,C as A,a as h,F as x}from"./index.esm-Bbd6pRoQ.js";import{o as D,b as I,a as W}from"./schemas-uhh9XydB.js";import{r as B}from"./iframe-CVH4_Ps2.js";import{c as O}from"./utils-Dw_DXGOY.js";import{C as Y}from"./checkbox.component-CAkrxwEu.js";import{B as _}from"./button-ClKwf90x.js";import"./preload-helper-PPVm8Dsz.js";import"./index-EatugDqG.js";import"./index-D19jP8ao.js";import"./index-HbkwARDx.js";import"./index-BkXp7Ic9.js";import"./index-BaRuyUHZ.js";import"./index-D7qB6wHw.js";import"./index-DPFI1lel.js";import"./index-C1hTNCvm.js";import"./index-4nhEB_rg.js";import"./index-BheO4ms8.js";const o=B.forwardRef(({name:r,label:t,required:p,subtitle:y,className:v,containerClassName:S,labelClassName:k,descriptionClassName:C,isDisabled:N,onErrorMessage:F,variant:q,size:E,...V},n)=>{let j;try{j=R()}catch{return console.error(`FormCheckbox Error: Component must be wrapped inside FormProvider from react-hook-form.
Make sure your component tree is: <FormProvider ...form><FormCheckbox /></FormProvider>
Also ensure react-hook-form is installed in your project: npm install react-hook-form`),e.jsxs("div",{className:"p-4 bg-red-50 border border-red-200 rounded text-red-700 text-sm",children:[e.jsx("strong",{children:"FormCheckbox Error:"})," FormProvider not found. This component requires FormProvider wrapper."]})}const{control:P}=j,T=(s,i)=>F?F(s,i):i?.message||`${s} is required`;return e.jsx(A,{control:P,name:r,render:({field:{value:s,onChange:i,onBlur:w,ref:z},fieldState:{error:m}})=>e.jsx(Y,{ref:b=>{z(b),typeof n=="function"?n(b):n&&(n.current=b)},id:r,checked:s??!1,onCheckedChange:i,onBlur:w,disabled:N,variant:q,size:E,error:!!m,label:t!=null?e.jsxs(e.Fragment,{children:[t,p&&e.jsx("span",{className:"text-danger-500 ml-1",children:"*"})]}):void 0,description:m?T(r,m):y,className:v,containerClassName:S,labelClassName:k,descriptionClassName:O(m&&"text-danger-500",C),...V})})});o.displayName="FormCheckbox";o.__docgenInfo={description:"",methods:[],displayName:"FormCheckbox",props:{name:{required:!0,tsType:{name:"TName"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:"Helper text under the label; swapped for the validation error message automatically."},required:{required:!1,tsType:{name:"boolean"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},onErrorMessage:{required:!1,tsType:{name:"signature",type:"function",raw:"(fieldName: string, error?: FieldError) => string",signature:{arguments:[{type:{name:"string"},name:"fieldName"},{type:{name:"FieldError"},name:"error"}],return:{name:"string"}}},description:""}},composes:["Omit"]};const f=["neutral","primary-1","primary-2","auxiliary","danger","warning","success"],ie={title:"Form/FormCheckbox",component:o,args:{name:"terms",label:"I agree to the terms and conditions",required:!1,variant:"primary-1",size:"md"},argTypes:{variant:{control:"select",options:f},size:{control:"radio",options:["sm","md","lg"]},labelPosition:{control:"radio",options:["left","right"]}}};function g(r){const t=h({defaultValues:{[r.name]:!1}});return e.jsx(x,{...t,children:e.jsx("form",{children:e.jsx(o,{...r})})})}const c={render:r=>e.jsx(g,{...r})},l={args:{label:"Subscribe to newsletter",subtitle:"You can unsubscribe anytime."},render:r=>e.jsx(g,{...r})},d={render:()=>{const r=h({defaultValues:Object.fromEntries(f.map(t=>[t,!1]))});return e.jsx(x,{...r,children:e.jsx("form",{className:"flex flex-col gap-4",children:f.map(t=>e.jsx(o,{name:t,label:t,variant:t},t))})})}},u={args:{isDisabled:!0},render:r=>e.jsx(g,{...r})},a={render:()=>{const r=D({terms:I().refine(p=>p===!0,{message:"You must accept the terms to continue"})}),t=h({resolver:W(r),defaultValues:{terms:!1}});return e.jsx(x,{...t,children:e.jsxs("form",{className:"flex flex-col gap-4 items-start",onSubmit:t.handleSubmit(()=>{}),children:[e.jsx(o,{name:"terms",label:"I agree to the terms and conditions",subtitle:"Required to create an account"}),e.jsx(_,{type:"submit",size:"small",children:"Submit"})]})})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <FormWrapper {...args} />
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Subscribe to newsletter",
    subtitle: "You can unsubscribe anytime."
  },
  render: args => <FormWrapper {...args} />
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm({
      defaultValues: Object.fromEntries(VARIANTS.map(v => [v, false]))
    });
    return <FormProvider {...methods}>
        <form className="flex flex-col gap-4">
          {VARIANTS.map(variant => <FormCheckbox key={variant} name={variant} label={variant} variant={variant} />)}
        </form>
      </FormProvider>;
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  },
  render: args => <FormWrapper {...args} />
}`,...u.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const schema = z.object({
      terms: z.boolean().refine(v => v === true, {
        message: "You must accept the terms to continue"
      })
    });
    const methods = useForm({
      resolver: zodResolver(schema),
      defaultValues: {
        terms: false
      }
    });
    return <FormProvider {...methods}>
        <form className="flex flex-col gap-4 items-start" onSubmit={methods.handleSubmit(() => {})}>
          <FormCheckbox name="terms" label="I agree to the terms and conditions" subtitle="Required to create an account" />
          <Button type="submit" size="small">
            Submit
          </Button>
        </form>
      </FormProvider>;
  }
}`,...a.parameters?.docs?.source},description:{story:"Submits with a zod schema requiring the checkbox to be checked, to demonstrate the built-in error/subtitle swap.",...a.parameters?.docs?.description}}};const me=["Default","WithSubtitle","Variants","Disabled","ValidationError"];export{c as Default,u as Disabled,a as ValidationError,d as Variants,l as WithSubtitle,me as __namedExportsOrder,ie as default};

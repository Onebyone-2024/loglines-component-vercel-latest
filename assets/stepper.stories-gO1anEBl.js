import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as s}from"./iframe-BuAqlBhZ.js";import{c as i}from"./utils-d2XQ1MEC.js";import{c as w}from"./index-Drd88ecX.js";import"./preload-helper-PPVm8Dsz.js";const T=w("flex shrink-0 items-center justify-center rounded-full border-2 font-semibold aspect-square transition-colors",{variants:{state:{inactive:"border-neutral-300 text-neutral-400",active:"",completed:"text-white"},color:{primary:"",success:"",warning:"",danger:""},brokenLine:{true:"",false:""},size:{xs:"size-6 text-xs",sm:"size-8 text-sm",md:"size-10 text-sm",lg:"size-12 text-base",xl:"size-14 text-lg"}},compoundVariants:[{state:"inactive",brokenLine:!0,className:"border-dashed"},{state:"active",color:"primary",className:"border-primary-1-500 text-primary-1-500"},{state:"completed",color:"primary",className:"bg-primary-1-500 border-primary-1-500"},{state:"active",color:"success",className:"border-success-500 text-success-500"},{state:"completed",color:"success",className:"bg-success-500 border-success-500"},{state:"active",color:"warning",className:"border-warning-500 text-warning-500"},{state:"completed",color:"warning",className:"bg-warning-500 border-warning-500"},{state:"active",color:"danger",className:"border-danger-500 text-danger-500"},{state:"completed",color:"danger",className:"bg-danger-500 border-danger-500"}],defaultVariants:{state:"inactive",color:"primary",brokenLine:!1,size:"md"}}),L=w("transition-colors",{variants:{orientation:{horizontal:"h-0.5 w-full",vertical:"w-0.5 h-full"},active:{true:"",false:"bg-neutral-300"},color:{primary:"bg-primary-1-500",success:"bg-success-500",warning:"bg-warning-500",danger:"bg-danger-500"}},compoundVariants:[{active:!1,className:"bg-neutral-300"}],defaultVariants:{color:"primary"}}),R={xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-base",xl:"text-lg"},B={xs:"px-1",sm:"px-2",md:"px-4",lg:"px-5",xl:"px-6"},A={xs:"h-4 ml-3",sm:"h-6 ml-4",md:"h-8 ml-5",lg:"h-10 ml-6",xl:"h-12 ml-7"},o=({steps:r,onChange:a,selectedItem:t,completedStep:k=!1,disableBackClick:j=!1,indicator:N="number",orientation:u="horizontal",color:m="primary",brokenLine:z=!1,size:d="md"})=>{const[y,I]=s.useState(0),[V]=s.useState(r.map(n=>n.label));return s.useEffect(()=>{I(r.findIndex(n=>n.value===t.value))},[t]),e.jsx("div",{className:i("flex",u==="horizontal"?"items-center":"flex-col items-start"),children:r.map((n,l)=>{const p=l<y,g=l===y,S=k||g&&!j,q=p?"completed":g?"active":"inactive";return e.jsxs(s.Fragment,{children:[l!==0&&e.jsx("div",{className:i("flex",u==="horizontal"?i("flex-1",B[d]):A[d]),children:e.jsx("div",{className:L({orientation:u,active:p,color:m})})}),e.jsxs("button",{type:"button",disabled:!S,onClick:()=>{S&&(I(l),a(n))},className:i("flex gap-2 items-center",u==="horizontal"?"flex-col":"flex-row",!S&&"cursor-not-allowed"),children:[e.jsx("div",{className:T({state:q,color:m,brokenLine:z,size:d}),children:N==="icon"?e.jsx("i",{className:`ti ti-${n.icon}`}):l+1}),n.content?e.jsx("div",{children:n.content}):e.jsx("span",{className:i("text-sm font-medium",R[d],g&&`text-${m}-500`,p&&`text-${m}-600`,!g&&!p&&"text-neutral-400"),children:V[l]})]})]},l)})})};o.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"ISteps"}],raw:"ISteps[]"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(step: ISteps) => void",signature:{arguments:[{type:{name:"ISteps"},name:"step"}],return:{name:"void"}}},description:""},selectedItem:{required:!0,tsType:{name:"ISteps"},description:""},completedStep:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disableBackClick:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},brokenLine:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg" | "xl"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},indicator:{required:!1,tsType:{name:"union",raw:'"number" | "icon"',elements:[{name:"literal",value:'"number"'},{name:"literal",value:'"icon"'}]},description:"",defaultValue:{value:'"number"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"primary" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}}}};const c=[{label:"Account",value:"account",icon:"user"},{label:"Profile",value:"profile",icon:"home"},{label:"Verification",value:"verification",icon:"map-pin"},{label:"Finish",value:"finish",content:e.jsx("div",{children:"Form Step 2"}),icon:""}],$={title:"Components/Stepper",component:o,args:{steps:c,selectedItem:c[0],completedStep:!0,disableBackClick:!1,orientation:"horizontal",indicator:"number",color:"primary"},argTypes:{orientation:{control:"radio",options:["horizontal","vertical"]},indicator:{control:"radio",options:["number","icon"]},color:{control:"select",options:["primary","success","warning","danger"]}}},x={render:r=>{const[a,t]=s.useState(c[1]);return e.jsx(o,{...r,selectedItem:a,onChange:t})}},f={args:{indicator:"icon"},render:r=>{const[a,t]=s.useState(c[2]);return e.jsx(o,{...r,selectedItem:a,onChange:t})}},v={args:{color:"success"},render:r=>{const[a,t]=s.useState(c[1]);return e.jsx(o,{...r,selectedItem:a,onChange:t,brokenLine:!0})}},b={args:{color:"warning"},render:r=>{const[a,t]=s.useState(c[2]);return e.jsx(o,{...r,selectedItem:a,onChange:t})}},h={args:{indicator:"icon",color:"success",orientation:"vertical",size:"xs"},render:r=>{const[a,t]=s.useState(c[0]);return e.jsx("div",{className:"h-[300px]",children:e.jsx(o,{...r,selectedItem:a,onChange:t,brokenLine:!0})})}},C={args:{disableBackClick:!0},render:r=>{const[a,t]=s.useState(c[2]);return e.jsx(o,{...r,selectedItem:a,onChange:t})}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const [current, setCurrent] = React.useState(steps[1]);
    return <Stepper {...args} selectedItem={current} onChange={setCurrent} />;
  }
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    indicator: "icon"
  },
  render: (args: any) => {
    const [current, setCurrent] = React.useState(steps[2]);
    return <Stepper {...args} selectedItem={current} onChange={setCurrent} />;
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    color: "success"
  },
  render: (args: any) => {
    const [current, setCurrent] = React.useState(steps[1]);
    return <Stepper {...args} selectedItem={current} onChange={setCurrent} brokenLine />;
  }
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    color: "warning"
  },
  render: (args: any) => {
    const [current, setCurrent] = React.useState(steps[2]);
    return <Stepper {...args} selectedItem={current} onChange={setCurrent} />;
  }
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    indicator: "icon",
    color: "success",
    orientation: "vertical",
    size: "xs"
  },
  render: (args: any) => {
    const [current, setCurrent] = React.useState(steps[0]);
    return <div className="h-[300px]">
                <Stepper {...args} selectedItem={current} onChange={setCurrent} brokenLine />
            </div>;
  }
}`,...h.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    disableBackClick: true
  },
  render: (args: any) => {
    const [current, setCurrent] = React.useState(steps[2]);
    return <Stepper {...args} selectedItem={current} onChange={setCurrent} />;
  }
}`,...C.parameters?.docs?.source}}};const W=["Default","IconIndicator","SuccessColor","WarningColor","Vertical","DisableBackClick"];export{x as Default,C as DisableBackClick,f as IconIndicator,v as SuccessColor,h as Vertical,b as WarningColor,W as __namedExportsOrder,$ as default};

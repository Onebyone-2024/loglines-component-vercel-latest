import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as n}from"./iframe-vU-aGGkt.js";import{c as p}from"./utils-d2XQ1MEC.js";import{c as I}from"./index-Drd88ecX.js";import"./preload-helper-PPVm8Dsz.js";const z=I("flex size-10 shrink-0 items-center justify-center rounded-full border-2 text-sm font-semibold aspect-square transition-colors",{variants:{state:{inactive:"border-neutral-300 text-neutral-400",active:"",completed:"text-white"},color:{primary:"",success:"",warning:"",danger:""}},compoundVariants:[{state:"active",color:"primary",className:"border-primary-1-500 text-primary-1-500"},{state:"completed",color:"primary",className:"bg-primary-1-500 border-primary-1-500"},{state:"active",color:"success",className:"border-success-500 text-success-500"},{state:"completed",color:"success",className:"bg-success-500 border-success-500"},{state:"active",color:"warning",className:"border-warning-500 text-warning-500"},{state:"completed",color:"warning",className:"bg-warning-500 border-warning-500"},{state:"active",color:"danger",className:"border-danger-500 text-danger-500"},{state:"completed",color:"danger",className:"bg-danger-500 border-danger-500"}],defaultVariants:{state:"inactive",color:"primary"}}),q=I("transition-colors",{variants:{orientation:{horizontal:"h-0.5 w-full",vertical:"w-0.5 h-full"},active:{true:"",false:"bg-neutral-300"},color:{primary:"bg-primary-1-500",success:"bg-success-500",warning:"bg-warning-500",danger:"bg-danger-500"}},compoundVariants:[{active:!1,className:"bg-neutral-300"}],defaultVariants:{color:"primary"}}),c=({steps:e,onChange:a,selectedItem:t,completedStep:w=!1,disableBackClick:N=!1,indicator:j="number",orientation:l="horizontal",color:u="primary"})=>{const[y,S]=n.useState(0),[k]=n.useState(e.map(i=>i.label));return n.useEffect(()=>{S(e.findIndex(i=>i.value===t.value))},[t]),r.jsx("div",{className:p("flex",l==="horizontal"?"items-center":"flex-col items-start"),children:e.map((i,o)=>{const m=o<y,d=o===y,x=w||d&&!N,V=m?"completed":d?"active":"inactive";return r.jsxs(n.Fragment,{children:[o!==0&&r.jsx("div",{className:p("flex",l==="horizontal"?"flex-1 px-4":"h-8 ml-5"),children:r.jsx("div",{className:q({orientation:l,active:m,color:u})})}),r.jsxs("button",{type:"button",disabled:!x,onClick:()=>{x&&(S(o),a(i))},className:p("flex gap-2 items-center",l==="horizontal"?"flex-col":"flex-row",!x&&"cursor-not-allowed"),children:[r.jsx("div",{className:z({state:V,color:u}),children:j==="icon"?r.jsx("i",{className:`ti ti-${i.icon}`}):o+1}),r.jsx("span",{className:p("text-sm font-medium",d&&`text-${u}-500`,m&&`text-${u}-600`,!d&&!m&&"text-neutral-400"),children:k[o]})]})]},o)})})};c.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"ISteps"}],raw:"ISteps[]"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(step: ISteps) => void",signature:{arguments:[{type:{name:"ISteps"},name:"step"}],return:{name:"void"}}},description:""},selectedItem:{required:!0,tsType:{name:"ISteps"},description:""},completedStep:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disableBackClick:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},indicator:{required:!1,tsType:{name:"union",raw:'"number" | "icon"',elements:[{name:"literal",value:'"number"'},{name:"literal",value:'"icon"'}]},description:"",defaultValue:{value:'"number"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"primary" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}}}};const s=[{label:"Account",value:"account",icon:"user"},{label:"Profile",value:"profile",icon:"home"},{label:"Verification",value:"verification",icon:"map-pin"},{label:"Finish",value:"finish",icon:"refresh"}],E={title:"Components/Stepper",component:c,args:{steps:s,selectedItem:s[0],completedStep:!0,disableBackClick:!1,orientation:"horizontal",indicator:"number",color:"primary"},argTypes:{orientation:{control:"radio",options:["horizontal","vertical"]},indicator:{control:"radio",options:["number","icon"]},color:{control:"select",options:["primary","success","warning","danger"]}}},g={render:e=>{const[a,t]=n.useState(s[1]);return r.jsx(c,{...e,selectedItem:a,onChange:t})}},f={args:{indicator:"icon"},render:e=>{const[a,t]=n.useState(s[2]);return r.jsx(c,{...e,selectedItem:a,onChange:t})}},v={args:{color:"success"},render:e=>{const[a,t]=n.useState(s[1]);return r.jsx(c,{...e,selectedItem:a,onChange:t})}},b={args:{color:"warning"},render:e=>{const[a,t]=n.useState(s[2]);return r.jsx(c,{...e,selectedItem:a,onChange:t})}},C={args:{orientation:"vertical"},render:e=>{const[a,t]=n.useState(s[0]);return r.jsx("div",{className:"h-[300px]",children:r.jsx(c,{...e,selectedItem:a,onChange:t})})}},h={args:{disableBackClick:!0},render:e=>{const[a,t]=n.useState(s[2]);return r.jsx(c,{...e,selectedItem:a,onChange:t})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const [current, setCurrent] = React.useState(steps[1]);
    return <Stepper {...args} selectedItem={current} onChange={setCurrent} />;
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
    return <Stepper {...args} selectedItem={current} onChange={setCurrent} />;
  }
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    color: "warning"
  },
  render: (args: any) => {
    const [current, setCurrent] = React.useState(steps[2]);
    return <Stepper {...args} selectedItem={current} onChange={setCurrent} />;
  }
}`,...b.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: "vertical"
  },
  render: (args: any) => {
    const [current, setCurrent] = React.useState(steps[0]);
    return <div className="h-[300px]">
                <Stepper {...args} selectedItem={current} onChange={setCurrent} />
            </div>;
  }
}`,...C.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    disableBackClick: true
  },
  render: (args: any) => {
    const [current, setCurrent] = React.useState(steps[2]);
    return <Stepper {...args} selectedItem={current} onChange={setCurrent} />;
  }
}`,...h.parameters?.docs?.source}}};const _=["Default","IconIndicator","SuccessColor","WarningColor","Vertical","DisableBackClick"];export{g as Default,h as DisableBackClick,f as IconIndicator,v as SuccessColor,C as Vertical,b as WarningColor,_ as __namedExportsOrder,E as default};

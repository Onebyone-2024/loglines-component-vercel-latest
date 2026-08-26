import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as n}from"./iframe-zNYHbdym.js";import{c as l}from"./utils-d2XQ1MEC.js";import{c as R}from"./index-Drd88ecX.js";import"./preload-helper-PPVm8Dsz.js";const L=R("flex shrink-0 items-center justify-center rounded-full border-2 font-semibold aspect-square transition-colors",{variants:{state:{inactive:"border-neutral-300 text-neutral-400",active:"",completed:"text-white"},color:{primary:"",success:"",warning:"",danger:""},brokenLine:{true:"",false:""},size:{xs:"size-6 text-xs",sm:"size-8 text-sm",md:"size-10 text-sm",lg:"size-12 text-base",xl:"size-14 text-lg"}},compoundVariants:[{state:"inactive",brokenLine:!0,className:"border-dashed"},{state:"active",color:"primary",className:"border-primary-1-500 text-primary-1-500"},{state:"completed",color:"primary",className:"bg-primary-1-500 border-primary-1-500"},{state:"active",color:"success",className:"border-success-500 text-success-500"},{state:"completed",color:"success",className:"bg-success-500 border-success-500"},{state:"active",color:"warning",className:"border-warning-500 text-warning-500"},{state:"completed",color:"warning",className:"bg-warning-500 border-warning-500"},{state:"active",color:"danger",className:"border-danger-500 text-danger-500"},{state:"completed",color:"danger",className:"bg-danger-500 border-danger-500"}],defaultVariants:{state:"inactive",color:"primary",brokenLine:!1,size:"md"}}),B=R("transition-colors",{variants:{orientation:{horizontal:"h-0.5 w-full",vertical:"w-0.5 h-full"},active:{true:"",false:"bg-neutral-300"},color:{primary:"bg-primary-1-500",success:"bg-success-500",warning:"bg-warning-500",danger:"bg-danger-500"}},compoundVariants:[{active:!1,className:"bg-neutral-300"}],defaultVariants:{color:"primary"}}),_={xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-base",xl:"text-lg"},A={xs:"px-1",sm:"px-2",md:"px-4",lg:"px-5",xl:"px-6"},D={xs:"h-4 ml-3",sm:"h-6 ml-4",md:"h-8 ml-5",lg:"h-10 ml-6",xl:"h-12 ml-7"},i=({steps:r,onChange:a,selectedItem:t,completedStep:N=!1,disableBackClick:u=!1,indicator:m="number",orientation:d="horizontal",color:p="primary",brokenLine:q=!1,size:g="md",renderIndicator:w})=>{const[z,k]=n.useState(0),[T]=n.useState(r.map(s=>s.label));return n.useEffect(()=>{k(r.findIndex(s=>s.value===t.value))},[t]),e.jsx("div",{className:l("flex",d==="horizontal"?"items-center":"flex-col items-start"),children:r.map((s,o)=>{const f=o<z,x=o===z,I=N||x&&!u,V=f?"completed":x?"active":"inactive";return e.jsxs(n.Fragment,{children:[o!==0&&e.jsx("div",{className:l("flex",d==="horizontal"?l("flex-1",A[g]):D[g]),children:e.jsx("div",{className:B({orientation:d,active:f,color:p})})}),e.jsxs("button",{type:"button",disabled:!I,onClick:()=>{I&&(k(o),a(s))},className:l("flex gap-2 items-center",d==="horizontal"?"flex-col":"flex-row",!I&&"cursor-not-allowed"),children:[w?w(s,o,V):e.jsx("div",{className:L({state:V,color:p,brokenLine:q,size:g}),children:m==="icon"?e.jsx("i",{className:`ti ti-${s.icon}`}):o+1}),s.content?e.jsx("div",{children:s.content}):e.jsx("span",{className:l("text-sm font-medium",_[g],x&&`text-${p}-500`,f&&`text-${p}-600`,!x&&!f&&"text-neutral-400"),children:T[o]})]})]},o)})})};i.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"ISteps"}],raw:"ISteps[]"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(step: ISteps) => void",signature:{arguments:[{type:{name:"ISteps"},name:"step"}],return:{name:"void"}}},description:""},selectedItem:{required:!0,tsType:{name:"ISteps"},description:""},completedStep:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disableBackClick:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},brokenLine:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg" | "xl"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},indicator:{required:!1,tsType:{name:"union",raw:'"number" | "icon"',elements:[{name:"literal",value:'"number"'},{name:"literal",value:'"icon"'}]},description:"",defaultValue:{value:'"number"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"primary" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},renderIndicator:{required:!1,tsType:{name:"signature",type:"function",raw:`(
    step: ISteps,
    idx: number,
    state: "inactive" | "active" | "completed"
) => React.ReactNode`,signature:{arguments:[{type:{name:"ISteps"},name:"step"},{type:{name:"number"},name:"idx"},{type:{name:"union",raw:'"inactive" | "active" | "completed"',elements:[{name:"literal",value:'"inactive"'},{name:"literal",value:'"active"'},{name:"literal",value:'"completed"'}]},name:"state"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""}}};const c=[{label:"Account",value:"account",icon:"user"},{label:"Profile",value:"profile",icon:"home"},{label:"Verification",value:"verification",icon:"map-pin"},{label:"Finish",value:"finish",content:e.jsx("div",{children:"Form Step 2"}),icon:""}],O={title:"Components/Stepper",component:i,args:{steps:c,selectedItem:c[0],completedStep:!0,disableBackClick:!1,orientation:"horizontal",indicator:"number",color:"primary"},argTypes:{orientation:{control:"radio",options:["horizontal","vertical"]},indicator:{control:"radio",options:["number","icon"]},color:{control:"select",options:["primary","success","warning","danger"]}}},v={render:r=>{const[a,t]=n.useState(c[1]);return e.jsx(i,{...r,selectedItem:a,onChange:t})}},b={args:{indicator:"icon"},render:r=>{const[a,t]=n.useState(c[2]);return e.jsx(i,{...r,selectedItem:a,onChange:t})}},y={args:{color:"success"},render:r=>{const[a,t]=n.useState(c[1]);return e.jsx(i,{...r,selectedItem:a,onChange:t,brokenLine:!0})}},h={args:{color:"warning"},render:r=>{const[a,t]=n.useState(c[2]);return e.jsx(i,{...r,selectedItem:a,onChange:t})}},C={args:{indicator:"icon",color:"success",orientation:"vertical",size:"xs"},render:r=>{const[a,t]=n.useState(c[0]);return e.jsx("div",{className:"h-[300px]",children:e.jsx(i,{...r,selectedItem:a,onChange:t,brokenLine:!0})})}},S={render:r=>{const[a,t]=n.useState(c[1]);return e.jsx(i,{...r,selectedItem:a,onChange:t,renderIndicator:(N,u,m)=>m==="active"?e.jsx("div",{className:"flex items-center justify-center size-10 rounded-full bg-primary-1-100",children:e.jsx("div",{className:"flex items-center justify-center size-6 rounded-full bg-primary-1-200",children:e.jsx("div",{className:"size-3 rounded-full bg-primary-1-500"})})}):m==="completed"?e.jsx("div",{className:"flex items-center justify-center size-10 rounded-full bg-primary-1-500 text-white text-sm font-semibold",children:u+1}):e.jsx("div",{className:"flex items-center justify-center size-10 rounded-full border-2 border-neutral-300 text-neutral-400 text-sm font-semibold",children:u+1})})}},j={args:{disableBackClick:!0},render:r=>{const[a,t]=n.useState(c[2]);return e.jsx(i,{...r,selectedItem:a,onChange:t})}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const [current, setCurrent] = React.useState(steps[1]);
    return <Stepper {...args} selectedItem={current} onChange={setCurrent} />;
  }
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    indicator: "icon"
  },
  render: (args: any) => {
    const [current, setCurrent] = React.useState(steps[2]);
    return <Stepper {...args} selectedItem={current} onChange={setCurrent} />;
  }
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    color: "success"
  },
  render: (args: any) => {
    const [current, setCurrent] = React.useState(steps[1]);
    return <Stepper {...args} selectedItem={current} onChange={setCurrent} brokenLine />;
  }
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    color: "warning"
  },
  render: (args: any) => {
    const [current, setCurrent] = React.useState(steps[2]);
    return <Stepper {...args} selectedItem={current} onChange={setCurrent} />;
  }
}`,...h.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const [current, setCurrent] = React.useState(steps[1]);
    return <Stepper {...args} selectedItem={current} onChange={setCurrent} renderIndicator={(_step, idx, state) => {
      if (state === "active") {
        return <div className="flex items-center justify-center size-10 rounded-full bg-primary-1-100">
                                <div className="flex items-center justify-center size-6 rounded-full bg-primary-1-200">
                                    <div className="size-3 rounded-full bg-primary-1-500" />
                                </div>
                            </div>;
      }
      if (state === "completed") {
        return <div className="flex items-center justify-center size-10 rounded-full bg-primary-1-500 text-white text-sm font-semibold">
                                {idx + 1}
                            </div>;
      }
      return <div className="flex items-center justify-center size-10 rounded-full border-2 border-neutral-300 text-neutral-400 text-sm font-semibold">
                            {idx + 1}
                        </div>;
    }} />;
  }
}`,...S.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    disableBackClick: true
  },
  render: (args: any) => {
    const [current, setCurrent] = React.useState(steps[2]);
    return <Stepper {...args} selectedItem={current} onChange={setCurrent} />;
  }
}`,...j.parameters?.docs?.source}}};const P=["Default","IconIndicator","SuccessColor","WarningColor","Vertical","CustomIndicator","DisableBackClick"];export{S as CustomIndicator,v as Default,j as DisableBackClick,b as IconIndicator,y as SuccessColor,C as Vertical,h as WarningColor,P as __namedExportsOrder,O as default};

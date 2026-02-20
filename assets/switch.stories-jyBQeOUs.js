import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r}from"./iframe-qX5Rn-ky.js";import{c as g}from"./index-Drd88ecX.js";import{c as k}from"./utils-d2XQ1MEC.js";import"./preload-helper-PPVm8Dsz.js";const S=g("inline-flex relative items-center justify-start rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shrink-0 cursor-pointer",{variants:{variant:{default:"",primary1:""},size:{small:"h-[20px] w-[36px]",medium:"h-[24px] w-[44px]",large:"h-[32px] w-[56px]"},state:{checked:"",unchecked:""}},compoundVariants:[{variant:"default",state:"checked",className:"bg-primary-1-500 hover:bg-primary-1-400 focus-visible:ring-primary-1-500"},{variant:"default",state:"unchecked",className:"bg-neutral-200 hover:bg-neutral-300 focus-visible:ring-neutral-500"},{variant:"primary1",state:"checked",className:"bg-primary-1-500 hover:bg-primary-1-400 focus-visible:ring-primary-1-500"},{variant:"primary1",state:"unchecked",className:"bg-neutral-200 hover:bg-neutral-300 focus-visible:ring-neutral-500"}],defaultVariants:{variant:"default",size:"small",state:"unchecked"}}),b=g("absolute rounded-full bg-white transition-transform pointer-events-none",{variants:{size:{small:"h-[16px] w-[16px]",medium:"h-[20px] w-[20px]",large:"h-[28px] w-[28px]"},state:{checked:"",unchecked:""}},compoundVariants:[{size:"small",state:"checked",className:"translate-x-[16px]"},{size:"small",state:"unchecked",className:"translate-x-[2px]"},{size:"medium",state:"checked",className:"translate-x-[20px]"},{size:"medium",state:"unchecked",className:"translate-x-[2px]"},{size:"large",state:"checked",className:"translate-x-[28px]"},{size:"large",state:"unchecked",className:"translate-x-[2px]"}],defaultVariants:{size:"small",state:"unchecked"}}),a=r.forwardRef(({className:s,variant:t="default",size:x="small",checked:p=!1,onCheckedChange:N,...h},C)=>{const[c,f]=r.useState(p);r.useEffect(()=>{f(p)},[p]);const j=z=>{const v=!c;f(v),N?.(v),h.onClick?.(z)};return e.jsx("button",{ref:C,type:"button",role:"switch","aria-checked":c,"data-slot":"switch","data-state":c?"checked":"unchecked",className:k(S({variant:t,size:x,state:c?"checked":"unchecked"}),s),onClick:j,...h,children:e.jsx("div",{className:k(b({size:x,state:c?"checked":"unchecked"}))})})});a.displayName="Switch";a.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},variant:{defaultValue:{value:'"default"',computed:!1},required:!1},size:{defaultValue:{value:'"small"',computed:!1},required:!1}},composes:["VariantProps"]};const q={title:"Components/Switch",component:a,parameters:{layout:"centered"},tags:["autodocs"]},l={args:{variant:"default",size:"small"}},n={render:()=>{const[s,t]=r.useState(!1);return e.jsxs("div",{className:"flex flex-col gap-4 items-center",children:[e.jsx(a,{checked:s,onCheckedChange:t,variant:"default",size:"small"}),e.jsxs("p",{className:"text-md",children:["Switch is ",s?"ON":"OFF"]})]})}},i={render:()=>{const[s,t]=r.useState(!1);return e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(a,{checked:s,onCheckedChange:t,variant:"default",size:"small"}),e.jsx("span",{className:"text-md",children:"Airplane Mode"})]})}},d={render:()=>e.jsxs("div",{className:"flex gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-2 items-center",children:[e.jsx(a,{variant:"default",size:"small",defaultChecked:!0}),e.jsx("p",{className:"text-xs",children:"Small"})]}),e.jsxs("div",{className:"flex flex-col gap-2 items-center",children:[e.jsx(a,{variant:"default",size:"medium",defaultChecked:!0}),e.jsx("p",{className:"text-xs",children:"Medium"})]}),e.jsxs("div",{className:"flex flex-col gap-2 items-center",children:[e.jsx(a,{variant:"default",size:"large",defaultChecked:!0}),e.jsx("p",{className:"text-xs",children:"Large"})]})]})},m={render:()=>e.jsxs("div",{className:"flex gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-2 items-center",children:[e.jsx(a,{variant:"default",size:"small",defaultChecked:!0}),e.jsx("p",{className:"text-xs",children:"Default"})]}),e.jsxs("div",{className:"flex flex-col gap-2 items-center",children:[e.jsx(a,{variant:"primary1",size:"small",defaultChecked:!0}),e.jsx("p",{className:"text-xs",children:"Primary 1"})]})]})},o={args:{disabled:!0,variant:"default",size:"small"}},u={render:()=>e.jsxs("div",{className:"flex gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-2 items-center",children:[e.jsx(a,{variant:"default",size:"small",checked:!1}),e.jsx("p",{className:"text-xs",children:"Unchecked"})]}),e.jsxs("div",{className:"flex flex-col gap-2 items-center",children:[e.jsx(a,{variant:"default",size:"small",checked:!0}),e.jsx("p",{className:"text-xs",children:"Checked"})]})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "small"
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <div className="flex flex-col gap-4 items-center">
        <Switch checked={checked} onCheckedChange={setChecked} variant="default" size="small" />
        <p className="text-md">Switch is {checked ? "ON" : "OFF"}</p>
      </div>;
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <div className="flex items-center gap-3">
        <Switch checked={checked} onCheckedChange={setChecked} variant="default" size="small" />
        <span className="text-md">Airplane Mode</span>
      </div>;
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-6">
      <div className="flex flex-col gap-2 items-center">
        <Switch variant="default" size="small" defaultChecked />
        <p className="text-xs">Small</p>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <Switch variant="default" size="medium" defaultChecked />
        <p className="text-xs">Medium</p>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <Switch variant="default" size="large" defaultChecked />
        <p className="text-xs">Large</p>
      </div>
    </div>
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-6">
      <div className="flex flex-col gap-2 items-center">
        <Switch variant="default" size="small" defaultChecked />
        <p className="text-xs">Default</p>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <Switch variant="primary1" size="small" defaultChecked />
        <p className="text-xs">Primary 1</p>
      </div>
    </div>
}`,...m.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    variant: "default",
    size: "small"
  }
}`,...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-6">
      <div className="flex flex-col gap-2 items-center">
        <Switch variant="default" size="small" checked={false} />
        <p className="text-xs">Unchecked</p>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <Switch variant="default" size="small" checked={true} />
        <p className="text-xs">Checked</p>
      </div>
    </div>
}`,...u.parameters?.docs?.source}}};const E=["Default","Controlled","WithLabel","Sizes","Variants","Disabled","States"];export{n as Controlled,l as Default,o as Disabled,d as Sizes,u as States,m as Variants,i as WithLabel,E as __namedExportsOrder,q as default};

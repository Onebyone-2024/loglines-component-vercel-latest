import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as h}from"./iframe-D9Bqm3_P.js";import{C as s}from"./checkbox.component-DVRw8v0l.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Ce7ms2Sb.js";import"./index-DQDqhUpf.js";import"./index-B-jb5d5n.js";import"./index-B0NvjQEE.js";import"./index-S_nGUbuh.js";import"./index-D2guaqxK.js";import"./index-D1Jc4a2r.js";import"./index-BIu1P_Sr.js";import"./utils-Dw_DXGOY.js";const k=["neutral","primary-1","primary-2","auxiliary","danger","warning","success"],I={title:"Components/Checkbox",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:k},size:{control:"radio",options:["sm","md","lg"]},labelPosition:{control:"radio",options:["left","right"]}},args:{variant:"primary-1",size:"md",label:"Accept terms and conditions"}},t={},c={args:{label:"Marketing emails",description:"Occasional product updates, no spam."}},o={render:r=>{const[e,g]=h.useState(!1);return a.jsxs("div",{className:"flex flex-col items-start gap-3",children:[a.jsx(s,{...r,checked:e,onCheckedChange:b=>g(b===!0)}),a.jsxs("p",{className:"text-sm",children:["Checked: ",String(e)]})]})}},n={render:r=>{const[e,g]=h.useState("indeterminate");return a.jsx(s,{...r,checked:e,onCheckedChange:g,label:"Select all"})}},l={args:{labelPosition:"left"}},d={render:r=>a.jsx("div",{className:"flex flex-col gap-4 items-start",children:["sm","md","lg"].map(e=>a.jsx(s,{...r,size:e,label:`Size ${e}`,defaultChecked:!0},e))})},i={render:r=>a.jsx("div",{className:"flex flex-col gap-4 items-start",children:k.map(e=>a.jsx(s,{...r,variant:e,label:e,defaultChecked:!0},e))})},m={args:{error:!0,label:"You must accept to continue",defaultChecked:!1}},p={render:r=>a.jsxs("div",{className:"flex flex-col gap-4 items-start",children:[a.jsx(s,{...r,disabled:!0,label:"Disabled unchecked"}),a.jsx(s,{...r,disabled:!0,defaultChecked:!0,label:"Disabled checked"})]})},u={args:{label:void 0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Marketing emails",
    description: "Occasional product updates, no spam."
  }
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(false);
    return <div className="flex flex-col items-start gap-3">
        <Checkbox {...args} checked={checked} onCheckedChange={value => setChecked(value === true)} />
        <p className="text-sm">Checked: {String(checked)}</p>
      </div>;
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState<boolean | "indeterminate">("indeterminate");
    return <Checkbox {...args} checked={checked} onCheckedChange={setChecked} label="Select all" />;
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    labelPosition: "left"
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-4 items-start">
      {(["sm", "md", "lg"] as const).map(size => <Checkbox key={size} {...args} size={size} label={\`Size \${size}\`} defaultChecked />)}
    </div>
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-4 items-start">
      {VARIANTS.map(variant => <Checkbox key={variant} {...args} variant={variant} label={variant} defaultChecked />)}
    </div>
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    error: true,
    label: "You must accept to continue",
    defaultChecked: false
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-4 items-start">
      <Checkbox {...args} disabled label="Disabled unchecked" />
      <Checkbox {...args} disabled defaultChecked label="Disabled checked" />
    </div>
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: undefined
  }
}`,...u.parameters?.docs?.source}}};const V=["Default","WithDescription","Controlled","Indeterminate","LabelLeft","Sizes","Variants","ErrorState","Disabled","NoLabel"];export{o as Controlled,t as Default,p as Disabled,m as ErrorState,n as Indeterminate,l as LabelLeft,u as NoLabel,d as Sizes,i as Variants,c as WithDescription,V as __namedExportsOrder,I as default};

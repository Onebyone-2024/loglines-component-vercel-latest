import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-D2X9EDiZ.js";import{R as t,a as o}from"./radio-group.component-DEZyQlO5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DjJjzEuY.js";import"./index-BaYKX93m.js";import"./index-CFV8f5oJ.js";import"./index-Cz4Kbsud.js";import"./index-CmP_ppr0.js";import"./index-CB_dsBKK.js";import"./index-CTlSCuTo.js";import"./index-BAGWL3Ia.js";import"./index-BcSiUbNh.js";import"./index-BUPbi4OP.js";import"./index-DgRU9K4T.js";import"./index-DHxhBRvB.js";import"./utils-d2XQ1MEC.js";const O={title:"Components/RadioGroup",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:"select",options:["vertical","horizontal"]},disabled:{control:"boolean"}}},n={render:a=>e.jsxs(t,{defaultValue:"option-1",...a,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(o,{value:"option-1",id:"option-1"}),e.jsx("label",{htmlFor:"option-1",children:"Option One"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(o,{value:"option-2",id:"option-2"}),e.jsx("label",{htmlFor:"option-2",children:"Option Two"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(o,{value:"option-3",id:"option-3"}),e.jsx("label",{htmlFor:"option-3",children:"Option Three"})]})]})},i={args:{orientation:"horizontal"},render:a=>e.jsxs(t,{defaultValue:"option-1",className:"flex gap-6",...a,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(o,{value:"option-1",id:"h-option-1"}),e.jsx("label",{htmlFor:"h-option-1",children:"Male"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(o,{value:"option-2",id:"h-option-2"}),e.jsx("label",{htmlFor:"h-option-2",children:"Female"})]})]})},l={render:()=>e.jsxs(t,{defaultValue:"option-1",disabled:!0,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(o,{value:"option-1",id:"d-option-1"}),e.jsx("label",{htmlFor:"d-option-1",children:"Disabled One"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(o,{value:"option-2",id:"d-option-2"}),e.jsx("label",{htmlFor:"d-option-2",children:"Disabled Two"})]})]})},r={render:()=>{const[a,s]=p.useState("option-1");return e.jsxs("div",{className:"space-y-4",children:[e.jsxs(t,{value:a,onValueChange:s,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(o,{value:"option-1",id:"c-option-1"}),e.jsx("label",{htmlFor:"c-option-1",children:"React"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(o,{value:"option-2",id:"c-option-2"}),e.jsx("label",{htmlFor:"c-option-2",children:"Vue"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(o,{value:"option-3",id:"c-option-3"}),e.jsx("label",{htmlFor:"c-option-3",children:"Svelte"})]})]}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected: ",e.jsx("strong",{children:a})]})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <RadioGroup defaultValue="option-1" {...args}>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-1" id="option-1" />
        <label htmlFor="option-1">Option One</label>
      </div>

      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-2" id="option-2" />
        <label htmlFor="option-2">Option Two</label>
      </div>

      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-3" id="option-3" />
        <label htmlFor="option-3">Option Three</label>
      </div>
    </RadioGroup>
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: "horizontal"
  },
  render: args => <RadioGroup defaultValue="option-1" className="flex gap-6" {...args}>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-1" id="h-option-1" />
        <label htmlFor="h-option-1">Male</label>
      </div>

      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-2" id="h-option-2" />
        <label htmlFor="h-option-2">Female</label>
      </div>
    </RadioGroup>
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="option-1" disabled>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-1" id="d-option-1" />
        <label htmlFor="d-option-1">Disabled One</label>
      </div>

      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-2" id="d-option-2" />
        <label htmlFor="d-option-2">Disabled Two</label>
      </div>
    </RadioGroup>
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState("option-1");
    return <div className="space-y-4">
        <RadioGroup value={value} onValueChange={setValue}>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="option-1" id="c-option-1" />
            <label htmlFor="c-option-1">React</label>
          </div>

          <div className="flex items-center gap-2">
            <RadioGroupItem value="option-2" id="c-option-2" />
            <label htmlFor="c-option-2">Vue</label>
          </div>

          <div className="flex items-center gap-2">
            <RadioGroupItem value="option-3" id="c-option-3" />
            <label htmlFor="c-option-3">Svelte</label>
          </div>
        </RadioGroup>

        <p className="text-sm text-muted-foreground">
          Selected: <strong>{value}</strong>
        </p>
      </div>;
  }
}`,...r.parameters?.docs?.source}}};const S=["Default","Horizontal","Disabled","Controlled"];export{r as Controlled,n as Default,l as Disabled,i as Horizontal,S as __namedExportsOrder,O as default};

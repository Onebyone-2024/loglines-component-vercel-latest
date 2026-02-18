import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as m}from"./iframe-sOrGF-FJ.js";import{C as e}from"./calendar-cUGGbuz1.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BEHD0UYf.js";import"./button-YCwnaV_v.js";import"./index-DxvpdzRp.js";import"./index-PsUEyLwO.js";import"./index-CklPxmEV.js";const x={title:"Components/Calendar",component:e,tags:["autodocs"],argTypes:{showOutsideDays:{control:"boolean"},captionLayout:{control:"radio",options:["label","dropdown"]},buttonVariant:{control:"radio",options:["ghost","outline","secondary"]}}},s={args:{showOutsideDays:!0,mode:"single"}},n={render:()=>{const[r,t]=m.useState(new Date);return a.jsx(e,{mode:"single",selected:r,onSelect:t})}},o={render:()=>{const[r,t]=m.useState(new Date);return a.jsx(e,{mode:"single",selected:r,onSelect:t,variant:"success"})}},d={render:()=>{const[r,t]=m.useState({from:new Date,to:void 0});return a.jsx(e,{mode:"range",selected:r,onSelect:t,required:!0})}},c={render:()=>a.jsx(e,{numberOfMonths:2,showOutsideDays:!0,mode:"single"})},u={render:()=>a.jsx(e,{showWeekNumber:!0,showOutsideDays:!0,mode:"single"})},i={render:()=>{const[r,t]=m.useState(new Date);return a.jsx(e,{selected:r,onSelect:t,captionLayout:"dropdown",mode:"single"})}},l={render:()=>a.jsx(e,{mode:"single",disabled:[{before:new Date}]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    showOutsideDays: true,
    mode: 'single'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return <Calendar mode="single" selected={date} onSelect={setDate} />;
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return <Calendar mode="single" selected={date} onSelect={setDate} variant="success" />;
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [range, setRange] = React.useState<DateRange>({
      from: new Date(),
      to: undefined
    });
    return <Calendar mode="range" selected={range} onSelect={setRange} required />;
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Calendar numberOfMonths={2} showOutsideDays mode="single" />;
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Calendar showWeekNumber showOutsideDays mode="single" />;
  }
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return <Calendar selected={date} onSelect={setDate} captionLayout="dropdown" mode="single" />;
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Calendar mode="single" disabled={[{
      before: new Date()
    } // disable past dates
    ]} />;
  }
}`,...l.parameters?.docs?.source}}};const y=["Default","SingleSelect","Variant","RangeSelect","MultipleMonths","WithWeekNumber","DropdownCaption","DisabledDates"];export{s as Default,l as DisabledDates,i as DropdownCaption,c as MultipleMonths,d as RangeSelect,n as SingleSelect,o as Variant,u as WithWeekNumber,y as __namedExportsOrder,x as default};

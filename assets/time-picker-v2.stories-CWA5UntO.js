import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as n}from"./iframe-D2X9EDiZ.js";import{I as _}from"./input-WuVdQn51.js";import{S as V}from"./select.component-BLKXzlA-.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-d2XQ1MEC.js";import"./index-Cz4Kbsud.js";import"./index-CmP_ppr0.js";import"./index-BdQq_4o_.js";import"./index-DjJjzEuY.js";import"./index-CTlSCuTo.js";import"./index-CFV8f5oJ.js";import"./index-BaYKX93m.js";import"./index-BcSiUbNh.js";import"./index-sKyOMB2K.js";import"./index-BAGWL3Ia.js";import"./index-BUPbi4OP.js";import"./index-C-xOjnZU.js";import"./index-DgRU9K4T.js";import"./index-DKbtfO_I.js";function E(r){return r==="24h"?Array.from({length:24},(o,t)=>String(t).padStart(2,"0")):Array.from({length:12},(o,t)=>String(t+1).padStart(2,"0"))}function W(r){return Array.from({length:60/r},(o,t)=>String(t*r).padStart(2,"0"))}function i({format:r="12h",pickerType:o="native",minuteStep:t=1,value:a,onChange:T,state:x,styles:F,...j}){const A=E(r),D=W(t),[w,I]=n.useState(""),[b,k]=n.useState(""),[M,C]=n.useState("AM");n.useEffect(()=>{if(!(!a||typeof a!="string"))if(r==="24h"){const e=a.split(":");e.length===2&&(I(e[0]),k(e[1]))}else{const e=a.match(/(\d+):(\d+)\s?(AM|PM)/i);e&&(I(e[1]),k(e[2]),C(e[3]))}},[a,r]);function P(e,q,H){!e||!q||T?.(r==="24h"?`${e}:${q}`:`${e}:${q} ${H}`)}return o==="native"?s.jsx(_,{...j,type:"time",value:a,onChange:T}):s.jsxs("div",{className:"flex gap-2 w-full",children:[s.jsx(V,{options:A.map(e=>({label:e,value:e})),label:"Hour",value:w,placeholder:"HH",state:x,onChange:e=>{I(e),P(e,b,M)}}),s.jsx(V,{options:D.map(e=>({label:e,value:e})),label:"Minute",value:b,placeholder:"MM",state:x,onChange:e=>{k(e),P(w,e,M)}}),r==="12h"&&s.jsx(V,{options:[{label:"AM",value:"AM"},{label:"PM",value:"PM"}],label:"AM/PM",value:M,state:x,onChange:e=>{C(e),P(w,b,e)}})]})}i.displayName="TimePickerV2";i.__docgenInfo={description:"",methods:[],displayName:"TimePickerV2",props:{label:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},prefixIcon:{required:!1,tsType:{name:"string"},description:""},suffixIcon:{required:!1,tsType:{name:"string"},description:""},state:{required:!1,tsType:{name:"union",raw:'"default" | "active" | "error" | "disabled"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"active"'},{name:"literal",value:'"error"'},{name:"literal",value:'"disabled"'}]},description:""},styles:{required:!1,tsType:{name:"Partial",elements:[{name:"IInputColorStyles"}],raw:"Partial<IInputColorStyles>"},description:""},containerClassName:{required:!1,tsType:{name:"string"},description:""},format:{required:!1,tsType:{name:"union",raw:'"12h" | "24h"',elements:[{name:"literal",value:'"12h"'},{name:"literal",value:'"24h"'}]},description:"",defaultValue:{value:'"12h"',computed:!1}},pickerType:{required:!1,tsType:{name:"union",raw:'"native" | "dropdown"',elements:[{name:"literal",value:'"native"'},{name:"literal",value:'"dropdown"'}]},description:"",defaultValue:{value:'"native"',computed:!1}},minuteStep:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},onIconClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const oe={title:"Components/TimePickerV2",component:i,parameters:{layout:"centered"},decorators:[r=>s.jsx("div",{style:{width:320},children:s.jsx(r,{})})],args:{label:"Select Time",placeholder:"Choose time",format:"12h",pickerType:"native"},argTypes:{format:{control:"select",options:["12h","24h"]},pickerType:{control:"select",options:["native","dropdown"]},state:{control:"select",options:["default","active","error","disabled"]},minuteStep:{control:"number"}}},c={},p={args:{format:"24h"}},l={args:{pickerType:"dropdown",format:"12h"}},u={args:{pickerType:"dropdown",format:"24h"}},m={args:{pickerType:"dropdown",minuteStep:5}},d={render:r=>{const[o,t]=n.useState("");return s.jsx(i,{...r,value:o,onChange:a=>t(a.target.value)})}},f={args:{prefixIcon:"ti ti-clock"}},g={args:{suffixIcon:"ti ti-chevron-down"}},h={args:{prefixIcon:"ti ti-clock",suffixIcon:"ti ti-chevron-down"}},v={args:{state:"error",subtitle:"Time is required"}},y={args:{state:"disabled",value:"10:30"}},S={render:r=>{const[o,t]=n.useState("");return s.jsx(i,{...r,value:o,onChange:a=>t(a.target.value)})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    format: "24h"
  }
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    pickerType: "dropdown",
    format: "12h"
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    pickerType: "dropdown",
    format: "24h"
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    pickerType: "dropdown",
    minuteStep: 5
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<string>("");
    return <TimePickerV2 {...args} value={value} onChange={e => setValue(e.target.value)} />;
  }
}`,...d.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    prefixIcon: "ti ti-clock"
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    suffixIcon: "ti ti-chevron-down"
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    prefixIcon: "ti ti-clock",
    suffixIcon: "ti ti-chevron-down"
  }
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    state: "error",
    subtitle: "Time is required"
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    state: "disabled",
    value: "10:30"
  }
}`,...y.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<string>("");
    return <TimePickerV2 {...args} value={value} onChange={e => setValue(e.target.value)} />;
  }
}`,...S.parameters?.docs?.source}}};const ne=["Default","TwentyFourHour","Dropdown12h","Dropdown24h","MinuteStepFive","Controlled","WithPrefixIcon","WithSuffixIcon","WithBothIcons","ErrorState","Disabled","Playground"];export{d as Controlled,c as Default,y as Disabled,l as Dropdown12h,u as Dropdown24h,v as ErrorState,m as MinuteStepFive,S as Playground,p as TwentyFourHour,h as WithBothIcons,f as WithPrefixIcon,g as WithSuffixIcon,ne as __namedExportsOrder,oe as default};

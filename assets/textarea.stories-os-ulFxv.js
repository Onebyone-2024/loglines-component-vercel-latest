import{j as d}from"./jsx-runtime-u17CrQMm.js";import{T as i}from"./textarea-D385jeco.js";import{r as b}from"./iframe-vU-aGGkt.js";import"./utils-d2XQ1MEC.js";import"./preload-helper-PPVm8Dsz.js";const E={title:"Components/Textarea",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},state:{control:"select",options:["default","active","error","disabled"]},required:{control:"boolean"},placeholder:{control:"text"},subtitle:{control:"text"}},decorators:[e=>d.jsx("div",{style:{width:"500px"},children:d.jsx(e,{})})]},r={args:{label:"Description",placeholder:"Enter description...",state:"default",rows:4}},t={args:{label:"Feedback",placeholder:"Share your feedback...",state:"active",required:!0,rows:4}},o={args:{label:"Message",placeholder:"Enter message...",state:"error",required:!0,subtitle:"This field is required",rows:4}},a={args:{label:"Notes",placeholder:"Notes (disabled)",state:"disabled",value:"This textarea is disabled",required:!0,rows:4}},s={args:{label:"Bio",placeholder:"Tell us about yourself...",state:"default",subtitle:"Maximum 500 characters",rows:5}},l={render:()=>{const[e,p]=b.useState(""),u=200;return d.jsx(i,{label:"Comment",placeholder:"Enter your comment...",state:"default",subtitle:`${e.length}/${u} characters`,value:e,onChange:m=>p(m.target.value.slice(0,u)),rows:4})}},n={args:{label:"Custom Textarea",placeholder:"Custom styling...",state:"default",rows:4,styles:{borderColor:"border-purple-500",labelColor:"text-purple-700",onFocusBorderColor:"border-purple-700",onFocusLabelColor:"text-purple-800"}}},c={args:{label:"Error Message",placeholder:"Enter error...",state:"error",subtitle:"This field has validation error",rows:4,styles:{borderColor:"border-gray-300",onErrorBorderColor:"border-red-500",onErrorLabelColor:"text-red-500",onErrorSubtitleColor:"text-red-500"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Description",
    placeholder: "Enter description...",
    state: "default",
    rows: 4
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Feedback",
    placeholder: "Share your feedback...",
    state: "active",
    required: true,
    rows: 4
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Message",
    placeholder: "Enter message...",
    state: "error",
    required: true,
    subtitle: "This field is required",
    rows: 4
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Notes",
    placeholder: "Notes (disabled)",
    state: "disabled",
    value: "This textarea is disabled",
    required: true,
    rows: 4
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Bio",
    placeholder: "Tell us about yourself...",
    state: "default",
    subtitle: "Maximum 500 characters",
    rows: 5
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [text, setText] = useState("");
    const maxChars = 200;
    return <Textarea label="Comment" placeholder="Enter your comment..." state="default" subtitle={\`\${text.length}/\${maxChars} characters\`} value={text} onChange={e => setText(e.target.value.slice(0, maxChars))} rows={4} />;
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Custom Textarea",
    placeholder: "Custom styling...",
    state: "default",
    rows: 4,
    styles: {
      borderColor: "border-purple-500",
      labelColor: "text-purple-700",
      onFocusBorderColor: "border-purple-700",
      onFocusLabelColor: "text-purple-800"
    }
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Error Message",
    placeholder: "Enter error...",
    state: "error",
    subtitle: "This field has validation error",
    rows: 4,
    styles: {
      borderColor: "border-gray-300",
      onErrorBorderColor: "border-red-500",
      onErrorLabelColor: "text-red-500",
      onErrorSubtitleColor: "text-red-500"
    }
  }
}`,...c.parameters?.docs?.source}}};const S=["Default","ActiveState","ErrorState","DisabledState","WithSubtitle","WithCharacterCount","CustomColors","ErrorWithCustomColor"];export{t as ActiveState,n as CustomColors,r as Default,a as DisabledState,o as ErrorState,c as ErrorWithCustomColor,l as WithCharacterCount,s as WithSubtitle,S as __namedExportsOrder,E as default};

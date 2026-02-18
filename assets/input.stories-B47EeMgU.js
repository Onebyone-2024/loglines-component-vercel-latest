import{j as t}from"./jsx-runtime-u17CrQMm.js";import{I as s}from"./input-66AlLJX3.js";import{r as o}from"./iframe-sOrGF-FJ.js";import"./utils-BEHD0UYf.js";import"./preload-helper-PPVm8Dsz.js";const P={title:"Components/Input",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},state:{control:"select",options:["default","active","error","disabled"]},required:{control:"boolean"},placeholder:{control:"text"},subtitle:{control:"text"},prefixIcon:{control:"text"},suffixIcon:{control:"text"}},decorators:[e=>t.jsx("div",{style:{width:"400px"},children:t.jsx(e,{})})]},l={args:{label:"Label",placeholder:"Input",state:"default"}},n={args:{label:"Label",placeholder:"Input",state:"active",required:!0}},i={args:{label:"Label",placeholder:"Input",state:"error",required:!0,subtitle:"This field is required"}},c={args:{label:"Label",placeholder:"Input",state:"disabled",required:!0}},u={args:{label:"Full Name",placeholder:"Enter your full name",state:"default"}},d={args:{label:"Username",placeholder:"Enter username",state:"default",prefixIcon:"ti ti-user"}},p={args:{label:"Field",placeholder:"Enter Field",state:"default",suffixIcon:"ti ti-password"}},m={render:()=>{const[e,r]=o.useState(!1);return t.jsx(s,{label:"Password",type:e?"text":"password",placeholder:"Enter password",state:"default",subtitle:"Minimum 8 characters",suffixIcon:e?"ti ti-eye":"ti ti-eye-off",onIconClick:()=>r(!e)})}},h={args:{label:"Custom Input",placeholder:"Input",state:"default",styles:{borderColor:"border-purple-500",labelColor:"text-purple-700",onFocusBorderColor:"border-purple-700",onFocusLabelColor:"text-purple-800"}}},f={args:{label:"Email",placeholder:"Enter email",state:"error",subtitle:"Email is already registered",prefixIcon:"ti ti-mail",suffixIcon:"ti ti-alert-circle",styles:{borderColor:"border-gray-300",onErrorBorderColor:"border-red-500",onErrorLabelColor:"text-red-500",onErrorSubtitleColor:"text-red-500"}}},b={render:()=>{const[e,r]=o.useState("");return t.jsx(s,{label:"Search",placeholder:"Search anything...",state:"default",prefixIcon:"ti ti-search",suffixIcon:e?"ti ti-x":"",value:e,onChange:a=>r(a.target.value),onIconClick:()=>r("")})}},x={render:()=>{const[e,r]=o.useState("");return t.jsx(s,{label:"Phone Number",type:"tel",placeholder:"Enter phone number",state:"default",subtitle:"Click dial to make a call",prefixIcon:"ti ti-phone",suffixIcon:e?"ti ti-phone-call":"",value:e,onChange:a=>r(a.target.value),onIconClick:()=>{e&&alert(`Calling ${e}...`)}})}},C={render:()=>{const[e,r]=o.useState("user@example.com"),[a,g]=o.useState(!1);return t.jsx(s,{label:"Email Address",placeholder:"Enter email",state:"default",subtitle:a?"Copied!":"Click to copy",prefixIcon:"ti ti-mail",suffixIcon:"ti ti-copy",value:e,onChange:I=>r(I.target.value),onIconClick:()=>{navigator.clipboard.writeText(e),g(!0),setTimeout(()=>g(!1),2e3)}})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Label",
    placeholder: "Input",
    state: "default"
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Label",
    placeholder: "Input",
    state: "active",
    required: true
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Label",
    placeholder: "Input",
    state: "error",
    required: true,
    subtitle: "This field is required"
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Label",
    placeholder: "Input",
    state: "disabled",
    required: true
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Full Name",
    placeholder: "Enter your full name",
    state: "default"
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Username",
    placeholder: "Enter username",
    state: "default",
    prefixIcon: "ti ti-user"
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Field",
    placeholder: "Enter Field",
    state: "default",
    suffixIcon: "ti ti-password"
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [showPassword, setShowPassword] = useState(false);
    return <Input label="Password" type={showPassword ? "text" : "password"} placeholder="Enter password" state="default" subtitle="Minimum 8 characters" suffixIcon={showPassword ? "ti ti-eye" : "ti ti-eye-off"} onIconClick={() => setShowPassword(!showPassword)} />;
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Custom Input",
    placeholder: "Input",
    state: "default",
    styles: {
      borderColor: "border-purple-500",
      labelColor: "text-purple-700",
      onFocusBorderColor: "border-purple-700",
      onFocusLabelColor: "text-purple-800"
    }
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email",
    placeholder: "Enter email",
    state: "error",
    subtitle: "Email is already registered",
    prefixIcon: "ti ti-mail",
    suffixIcon: "ti ti-alert-circle",
    styles: {
      borderColor: "border-gray-300",
      onErrorBorderColor: "border-red-500",
      onErrorLabelColor: "text-red-500",
      onErrorSubtitleColor: "text-red-500"
    }
  }
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [search, setSearch] = useState("");
    return <Input label="Search" placeholder="Search anything..." state="default" prefixIcon="ti ti-search" suffixIcon={search ? "ti ti-x" : ""} value={search} onChange={e => setSearch(e.target.value)} onIconClick={() => setSearch("")} />;
  }
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [phone, setPhone] = useState("");
    return <Input label="Phone Number" type="tel" placeholder="Enter phone number" state="default" subtitle="Click dial to make a call" prefixIcon="ti ti-phone" suffixIcon={phone ? "ti ti-phone-call" : ""} value={phone} onChange={e => setPhone(e.target.value)} onIconClick={() => {
      if (phone) alert(\`Calling \${phone}...\`);
    }} />;
  }
}`,...x.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [email, setEmail] = useState("user@example.com");
    const [copied, setCopied] = useState(false);
    return <Input label="Email Address" placeholder="Enter email" state="default" subtitle={copied ? "Copied!" : "Click to copy"} prefixIcon="ti ti-mail" suffixIcon="ti ti-copy" value={email} onChange={e => setEmail(e.target.value)} onIconClick={() => {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }} />;
  }
}`,...C.parameters?.docs?.source}}};const k=["Default","ActiveState","ErrorState","DisabledState","WithoutIcons","WithPrefixOnly","WithSuffixOnly","WithSubtitle","CustomColors","ErrorWithCustomColor","SearchWithClear","PhoneWithDial","CopyableEmail"];export{n as ActiveState,C as CopyableEmail,h as CustomColors,l as Default,c as DisabledState,i as ErrorState,f as ErrorWithCustomColor,x as PhoneWithDial,b as SearchWithClear,d as WithPrefixOnly,m as WithSubtitle,p as WithSuffixOnly,u as WithoutIcons,k as __namedExportsOrder,P as default};

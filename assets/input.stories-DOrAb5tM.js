import{j as a}from"./jsx-runtime-u17CrQMm.js";import{I as s}from"./input-BG-EzyRV.js";import{r as o}from"./iframe-yeqx6y-b.js";import"./utils-d2XQ1MEC.js";import"./preload-helper-PPVm8Dsz.js";const k={title:"Components/Input",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},state:{control:"select",options:["default","active","error","disabled"]},required:{control:"boolean"},placeholder:{control:"text"},subtitle:{control:"text"},prefixIcon:{control:"text"},suffixIcon:{control:"text"}},decorators:[e=>a.jsx("div",{style:{width:"400px"},children:a.jsx(e,{})})]},n={args:{label:"Label",placeholder:"Input",state:"default"}},i={args:{label:"Label",placeholder:"Input",state:"active",required:!0}},c={args:{label:"Label",placeholder:"Input",state:"error",required:!0,subtitle:"This field is required"}},u={args:{label:"Label",placeholder:"Input",state:"disabled",required:!0}},d={args:{label:"Full Name",placeholder:"Enter your full name",state:"default"}},p={args:{label:"Username",placeholder:"Enter username",state:"default",prefixIcon:"ti ti-user"}},m={args:{label:"Field",placeholder:"Enter Field",state:"default",suffixIcon:"ti ti-password"}},h={render:()=>{const[e,r]=o.useState(!1);return a.jsx(s,{label:"Password",type:e?"text":"password",placeholder:"Enter password",state:"default",subtitle:"Minimum 8 characters",suffixIcon:e?"ti ti-eye":"ti ti-eye-off",onIconClick:()=>r(!e)})}},f={args:{label:"Custom Input",placeholder:"Input",state:"default",styles:{borderColor:"border-purple-500",labelColor:"text-purple-700",onFocusBorderColor:"border-purple-700",onFocusLabelColor:"text-purple-800"}}},b={args:{label:"Email",placeholder:"Enter email",state:"error",subtitle:"Email is already registered",prefixIcon:"ti ti-mail",suffixIcon:"ti ti-alert-circle",styles:{borderColor:"border-gray-300",onErrorBorderColor:"border-red-500",onErrorLabelColor:"text-red-500",onErrorSubtitleColor:"text-red-500"}}},x={render:()=>{const[e,r]=o.useState("");return a.jsx(s,{label:"Search",placeholder:"Search anything...",state:"default",prefixIcon:"ti ti-search",suffixIcon:e?"ti ti-x":"",value:e,onChange:t=>r(t.target.value),onIconClick:()=>r("")})}},I={render:()=>{const[e,r]=o.useState("");return a.jsx(s,{label:"Phone Number",type:"tel",placeholder:"Enter phone number",state:"default",subtitle:"Click dial to make a call",prefixIcon:"ti ti-phone",suffixIcon:e?"ti ti-phone-call":"",value:e,onChange:t=>r(t.target.value),onIconClick:()=>{e&&alert(`Calling ${e}...`)}})}},C={render:()=>{const[e,r]=o.useState("user@example.com"),[t,l]=o.useState(!1);return a.jsx(s,{label:"Email Address",placeholder:"Enter email",state:"default",subtitle:t?"Copied!":"Click to copy",prefixIcon:"ti ti-mail",suffixIcon:"ti ti-copy",value:e,onChange:w=>r(w.target.value),onIconClick:()=>{navigator.clipboard.writeText(e),l(!0),setTimeout(()=>l(!1),2e3)}})}},g={render:()=>{const[e,r]=o.useState(!1),[t,l]=o.useState("");return a.jsx(s,{label:"Password",type:e?"text":"password",placeholder:"Enter your password",state:"default",required:!0,subtitle:"Minimum 8 characters",prefixIcon:"ti ti-lock",suffixIcon:e?"ti ti-eye":"ti ti-eye-off",value:t,onChange:w=>l(w.target.value),onIconClick:()=>r(!e)})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Label",
    placeholder: "Input",
    state: "default"
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Label",
    placeholder: "Input",
    state: "active",
    required: true
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Label",
    placeholder: "Input",
    state: "error",
    required: true,
    subtitle: "This field is required"
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Label",
    placeholder: "Input",
    state: "disabled",
    required: true
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Full Name",
    placeholder: "Enter your full name",
    state: "default"
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Username",
    placeholder: "Enter username",
    state: "default",
    prefixIcon: "ti ti-user"
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Field",
    placeholder: "Enter Field",
    state: "default",
    suffixIcon: "ti ti-password"
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [showPassword, setShowPassword] = useState(false);
    return <Input label="Password" type={showPassword ? "text" : "password"} placeholder="Enter password" state="default" subtitle="Minimum 8 characters" suffixIcon={showPassword ? "ti ti-eye" : "ti ti-eye-off"} onIconClick={() => setShowPassword(!showPassword)} />;
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [search, setSearch] = useState("");
    return <Input label="Search" placeholder="Search anything..." state="default" prefixIcon="ti ti-search" suffixIcon={search ? "ti ti-x" : ""} value={search} onChange={e => setSearch(e.target.value)} onIconClick={() => setSearch("")} />;
  }
}`,...x.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [phone, setPhone] = useState("");
    return <Input label="Phone Number" type="tel" placeholder="Enter phone number" state="default" subtitle="Click dial to make a call" prefixIcon="ti ti-phone" suffixIcon={phone ? "ti ti-phone-call" : ""} value={phone} onChange={e => setPhone(e.target.value)} onIconClick={() => {
      if (phone) alert(\`Calling \${phone}...\`);
    }} />;
  }
}`,...I.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [email, setEmail] = useState("user@example.com");
    const [copied, setCopied] = useState(false);
    return <Input label="Email Address" placeholder="Enter email" state="default" subtitle={copied ? "Copied!" : "Click to copy"} prefixIcon="ti ti-mail" suffixIcon="ti ti-copy" value={email} onChange={e => setEmail(e.target.value)} onIconClick={() => {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }} />;
  }
}`,...C.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    return <Input label="Password" type={showPassword ? "text" : "password"} placeholder="Enter your password" state="default" required subtitle="Minimum 8 characters" prefixIcon="ti ti-lock" suffixIcon={showPassword ? "ti ti-eye" : "ti ti-eye-off"} value={password} onChange={e => setPassword(e.target.value)} onIconClick={() => setShowPassword(!showPassword)} />;
  }
}`,...g.parameters?.docs?.source}}};const W=["Default","ActiveState","ErrorState","DisabledState","WithoutIcons","WithPrefixOnly","WithSuffixOnly","WithSubtitle","CustomColors","ErrorWithCustomColor","SearchWithClear","PhoneWithDial","CopyableEmail","PasswordInput"];export{i as ActiveState,C as CopyableEmail,f as CustomColors,n as Default,u as DisabledState,c as ErrorState,b as ErrorWithCustomColor,g as PasswordInput,I as PhoneWithDial,x as SearchWithClear,p as WithPrefixOnly,h as WithSubtitle,m as WithSuffixOnly,d as WithoutIcons,W as __namedExportsOrder,k as default};

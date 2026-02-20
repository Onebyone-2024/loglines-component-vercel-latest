import{j as e}from"./jsx-runtime-u17CrQMm.js";import{I as d}from"./input-number-05gvJep6.js";import{r as b}from"./iframe-qX5Rn-ky.js";import"./utils-d2XQ1MEC.js";import"./preload-helper-PPVm8Dsz.js";const g={title:"Components/InputNumber",component:d,parameters:{layout:"centered"},tags:["autodocs"]},a={args:{placeholder:"Enter amount",label:"Amount"}},r={render:()=>e.jsxs("div",{className:"space-y-6 w-96",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"US Format (1,000.00)"}),e.jsx(d,{placeholder:"Enter amount",label:"US Format",decimalPlaces:2,thousandsSeparator:",",decimalSeparator:"."})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"European Format (1.000,00)"}),e.jsx(d,{placeholder:"Enter amount",label:"European Format",decimalPlaces:2,thousandsSeparator:".",decimalSeparator:","})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"Simple (1000, no decimals)"}),e.jsx(d,{placeholder:"Enter amount",label:"Simple Format",decimalPlaces:0})]})]})},t={args:{placeholder:"Enter price",label:"Price (USD)",decimalPlaces:2,thousandsSeparator:",",decimalSeparator:"."}},s={args:{placeholder:"Enter amount",label:"Amount (EUR)",decimalPlaces:2,thousandsSeparator:".",decimalSeparator:","}},o={args:{placeholder:"Enter amount",label:"Amount",required:!0,decimalPlaces:2}},n={args:{placeholder:"Enter amount",label:"Amount",prefixIcon:"ti ti-currency-dollar",decimalPlaces:2}},c={args:{placeholder:"Enter amount",label:"Amount",suffixIcon:"ti ti-trash",decimalPlaces:2}},l={args:{placeholder:"Enter amount",label:"Amount",state:"error",subtitle:"Please enter a valid amount",decimalPlaces:2}},m={args:{placeholder:"Enter amount",label:"Amount",state:"disabled",value:"1000",decimalPlaces:2}},i={render:()=>{const[p,u]=b.useState("");return e.jsxs("div",{className:"space-y-4 w-96",children:[e.jsx(d,{placeholder:"Enter amount",label:"Amount (USD)",decimalPlaces:2,value:p,onChange:h=>u(h.currentTarget.value)}),e.jsxs("div",{className:"text-sm text-neutral-600",children:[e.jsxs("p",{children:["Display Value: ",p||"-"]}),e.jsxs("p",{children:["Actual Value (no separators): ",p||"-"]})]})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter amount",
    label: "Amount"
  }
}`,...a.parameters?.docs?.source},description:{story:"Default InputNumber component with thousands separator (comma) and no decimals",...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div className="space-y-6 w-96">
        <div>
          <h3 className="text-sm font-semibold mb-2">US Format (1,000.00)</h3>
          <InputNumber placeholder="Enter amount" label="US Format" decimalPlaces={2} thousandsSeparator="," decimalSeparator="." />
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-2">
            European Format (1.000,00)
          </h3>
          <InputNumber placeholder="Enter amount" label="European Format" decimalPlaces={2} thousandsSeparator="." decimalSeparator="," />
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-2">
            Simple (1000, no decimals)
          </h3>
          <InputNumber placeholder="Enter amount" label="Simple Format" decimalPlaces={0} />
        </div>
      </div>;
  }
}`,...r.parameters?.docs?.source},description:{story:"Comparison of different formats",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter price",
    label: "Price (USD)",
    decimalPlaces: 2,
    thousandsSeparator: ",",
    decimalSeparator: "."
  }
}`,...t.parameters?.docs?.source},description:{story:"InputNumber with decimal places",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter amount",
    label: "Amount (EUR)",
    decimalPlaces: 2,
    thousandsSeparator: ".",
    decimalSeparator: ","
  }
}`,...s.parameters?.docs?.source},description:{story:"InputNumber with European format (dot for thousands, comma for decimals)",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter amount",
    label: "Amount",
    required: true,
    decimalPlaces: 2
  }
}`,...o.parameters?.docs?.source},description:{story:"InputNumber with required field",...o.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter amount",
    label: "Amount",
    prefixIcon: "ti ti-currency-dollar",
    decimalPlaces: 2
  }
}`,...n.parameters?.docs?.source},description:{story:"InputNumber with prefix icon",...n.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter amount",
    label: "Amount",
    suffixIcon: "ti ti-trash",
    decimalPlaces: 2
  }
}`,...c.parameters?.docs?.source},description:{story:"InputNumber with suffix icon",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter amount",
    label: "Amount",
    state: "error",
    subtitle: "Please enter a valid amount",
    decimalPlaces: 2
  }
}`,...l.parameters?.docs?.source},description:{story:"InputNumber in error state",...l.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter amount",
    label: "Amount",
    state: "disabled",
    value: "1000",
    decimalPlaces: 2
  }
}`,...m.parameters?.docs?.source},description:{story:"Disabled InputNumber",...m.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string>("");
    return <div className="space-y-4 w-96">
        <InputNumber placeholder="Enter amount" label="Amount (USD)" decimalPlaces={2} value={value} onChange={e => setValue(e.currentTarget.value)} />
        <div className="text-sm text-neutral-600">
          <p>Display Value: {value || "-"}</p>
          <p>Actual Value (no separators): {value || "-"}</p>
        </div>
      </div>;
  }
}`,...i.parameters?.docs?.source},description:{story:"Interactive example showing value updates",...i.parameters?.docs?.description}}};const P=["Default","FormatComparison","WithDecimals","EuropeanFormat","Required","WithPrefixIcon","WithSuffixIcon","Error","Disabled","Interactive"];export{a as Default,m as Disabled,l as Error,s as EuropeanFormat,r as FormatComparison,i as Interactive,o as Required,t as WithDecimals,n as WithPrefixIcon,c as WithSuffixIcon,P as __namedExportsOrder,g as default};

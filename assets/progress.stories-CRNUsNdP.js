import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as l}from"./iframe-CZtJQ_4b.js";import{P as E,c as k}from"./index-DFfF7Xm2.js";import{c as S}from"./utils-d2XQ1MEC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-u3d1b7p2.js";import"./index-C9L0kFif.js";import"./index-BkLry5iL.js";var N="Progress",R=100,[A]=k(N),[C,F]=A(N),$=l.forwardRef((e,r)=>{const{__scopeProgress:o,value:a=null,max:s,getValueLabel:d=M,...p}=e;(s||s===0)&&!I(s)&&console.error(q(`${s}`,"Progress"));const i=I(s)?s:R;a!==null&&!j(a,i)&&console.error(L(`${a}`,"Progress"));const n=j(a,i)?a:null,c=w(n)?d(n,i):void 0;return t.jsx(C,{scope:o,value:n,max:i,children:t.jsx(E.div,{"aria-valuemax":i,"aria-valuemin":0,"aria-valuenow":w(n)?n:void 0,"aria-valuetext":c,role:"progressbar","data-state":_(n,i),"data-value":n??void 0,"data-max":i,...p,ref:r})})});$.displayName=N;var V="ProgressIndicator",T=l.forwardRef((e,r)=>{const{__scopeProgress:o,...a}=e,s=F(V,o);return t.jsx(E.div,{"data-state":_(s.value,s.max),"data-value":s.value??void 0,"data-max":s.max,...a,ref:r})});T.displayName=V;function M(e,r){return`${Math.round(e/r*100)}%`}function _(e,r){return e==null?"indeterminate":e===r?"complete":"loading"}function w(e){return typeof e=="number"}function I(e){return w(e)&&!isNaN(e)&&e>0}function j(e,r){return w(e)&&!isNaN(e)&&e<=r&&e>=0}function q(e,r){return`Invalid prop \`max\` of value \`${e}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${R}\`.`}function L(e,r){return`Invalid prop \`value\` of value \`${e}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${R} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}var W=$,O=T;const U={neutral:{track:"bg-neutral-200",text:"text-neutral-900",indicator:"bg-neutral-600"},"primary-1":{track:"bg-primary-1-100",text:"text-primary-1-900",indicator:"bg-primary-1-500"},"primary-2":{track:"bg-primary-2-100",text:"text-primary-2-900",indicator:"bg-primary-2-500"},auxiliary:{track:"bg-auxiliary-100",text:"text-auxiliary-900",indicator:"bg-auxiliary-500"},success:{track:"bg-success-100",text:"text-success-900",indicator:"bg-success-500"},warning:{track:"bg-warning-100",text:"text-warning-900",indicator:"bg-warning-500"},danger:{track:"bg-danger-100",text:"text-danger-900",indicator:"bg-danger-500"}},u=({className:e,value:r=0,variant:o="primary-1",showPercentage:a,label:s,rightSlot:d,floatingSlot:p,...i})=>{const n=Math.min(100,Math.max(0,r)),c=U[o],D=p&&n>10&&n<100;return t.jsxs("div",{className:"w-full flex items-center gap-3",children:[t.jsxs("div",{className:"relative w-full",children:[t.jsx(W,{"data-slot":"progress",className:S("relative h-3 w-full overflow-hidden rounded-full",c.track,e),...i,children:t.jsx(O,{"data-slot":"progress-indicator",className:S("h-full transition-all duration-300 ease-out",c.indicator),style:{transform:`translateX(-${100-n}%)`}})}),D&&t.jsx("div",{className:"absolute top-1/2 -translate-y-1/2 transition-all duration-300 ease-out pointer-events-none",style:{left:`${n}%`,transform:"translate(-50%, -50%)"},children:p}),(a||s)&&t.jsx("div",{className:S("absolute inset-0 flex items-center justify-center text-xs font-medium pointer-events-none",c.text),children:s||(a?`${n}%`:null)})]}),d&&t.jsx("div",{className:"text-sm text-neutral-600 whitespace-nowrap",children:d})]})};u.__docgenInfo={description:"",methods:[],displayName:"Progress",props:{value:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:`| "neutral"
| "primary-1"
| "primary-2"
| "auxiliary"
| "success"
| "warning"
| "danger"`,elements:[{name:"literal",value:'"neutral"'},{name:"literal",value:'"primary-1"'},{name:"literal",value:'"primary-2"'},{name:"literal",value:'"auxiliary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"primary-1"',computed:!1}},showPercentage:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rightSlot:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},floatingSlot:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const Y={title:"Components/Progress",component:u,tags:["autodocs"],args:{value:60,variant:"primary-1",showPercentage:!1},argTypes:{variant:{control:"select",options:["neutral","primary-1","primary-2","auxiliary","success","warning","danger"]},showPercentage:{control:"boolean"},label:{control:"text"},rightSlot:{control:!1},className:{control:!1}},decorators:[e=>t.jsx("div",{style:{width:400,padding:20},children:t.jsx(e,{})})]},m={},g={args:{value:75,showPercentage:!0}},v={render:()=>{const[e,r]=l.useState(0);return l.useEffect(()=>{const o=setInterval(()=>{r(a=>a>=100?100:a+2)},80);return()=>clearInterval(o)},[]),t.jsx(u,{value:e,variant:"primary-1",floatingSlot:"🚀"})}},f={args:{value:40,label:"Uploading..."}},x={args:{value:55,showPercentage:!0,rightSlot:"3 mins left"}},y={args:{value:100,variant:"success",label:"Completed",rightSlot:"Done"}},h={args:{value:35,variant:"danger",label:"Failed",rightSlot:"Retry"}},P={render:()=>t.jsx("div",{className:"flex flex-col gap-4 w-full",children:["neutral","primary-1","primary-2","auxiliary","success","warning","danger"].map(e=>t.jsx(u,{value:60,variant:e,label:e},e))})},b={render:()=>{const[e,r]=l.useState(0);return l.useEffect(()=>{const o=setInterval(()=>{r(a=>a>=100?100:a+5)},200);return()=>clearInterval(o)},[]),t.jsx(u,{value:e,showPercentage:!0,rightSlot:e===100?"Finished":"Processing..."})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    value: 75,
    showPercentage: true
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) return 100;
          return prev + 2;
        });
      }, 80);
      return () => clearInterval(interval);
    }, []);
    return <Progress value={progress} variant="primary-1" floatingSlot={"🚀"} />;
  }
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    value: 40,
    label: "Uploading..."
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    value: 55,
    showPercentage: true,
    rightSlot: "3 mins left"
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    value: 100,
    variant: "success",
    label: "Completed",
    rightSlot: "Done"
  }
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    value: 35,
    variant: "danger",
    label: "Failed",
    rightSlot: "Retry"
  }
}`,...h.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-full">
            {(["neutral", "primary-1", "primary-2", "auxiliary", "success", "warning", "danger"] as IProgressVariant[]).map(variant => <Progress key={variant} value={60} variant={variant} label={variant} />)}
        </div>
}`,...P.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) return 100;
          return prev + 5;
        });
      }, 200);
      return () => clearInterval(interval);
    }, []);
    return <Progress value={progress} showPercentage rightSlot={progress === 100 ? "Finished" : "Processing..."} />;
  }
}`,...b.parameters?.docs?.source}}};const Z=["Default","WithPercentage","FloatingIcon","WithCustomLabel","WithRightSlot","Success","Danger","AllVariants","Animated"];export{P as AllVariants,b as Animated,h as Danger,m as Default,v as FloatingIcon,y as Success,f as WithCustomLabel,g as WithPercentage,x as WithRightSlot,Z as __namedExportsOrder,Y as default};

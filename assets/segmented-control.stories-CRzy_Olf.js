import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as l}from"./iframe-BCSYp8yh.js";import{c as L}from"./index-Drd88ecX.js";import{c as E}from"./utils-d2XQ1MEC.js";import"./preload-helper-PPVm8Dsz.js";const ee=L("relative inline-flex items-center rounded-md bg-neutral-50 px-1 py-0.5 gap-1",{variants:{fullWidth:{true:"flex w-full",false:"inline-flex max-w-full overflow-x-auto"}},defaultVariants:{fullWidth:!1}}),ae=L("absolute inset-y-1 rounded-md shadow-sm transition-[left,width] duration-300 ease-in-out pointer-events-none",{variants:{variant:{default:"bg-white",primary1:"bg-primary-1-500",primary2:"bg-primary-2-600",auxiliary:"bg-auxiliary-600"}},defaultVariants:{variant:"default"}}),re=L("relative z-10 flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-md text-center font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-primary-1-500 disabled:cursor-not-allowed disabled:opacity-50",{variants:{variant:{default:"",primary1:"",primary2:"",auxiliary:""},size:{small:"h-[28px] px-2 text-xs",medium:"h-[36px] px-3 text-sm",large:"h-[44px] px-4 text-md"},fullWidth:{true:"flex-1",false:""},active:{true:"text-neutral-800",false:"text-neutral-500 hover:text-neutral-800 hover:bg-white/60"},error:{true:"",false:""}},compoundVariants:[{variant:"primary1",active:!0,className:"text-white hover:text-white"},{variant:"primary2",active:!0,className:"text-white hover:text-white"},{variant:"auxiliary",active:!0,className:"text-white hover:text-white"},{error:!0,className:"text-danger-500 hover:text-danger-500"}],defaultVariants:{variant:"default",size:"medium",fullWidth:!1,active:!1}}),i=l.forwardRef(({options:a,value:d,defaultValue:D,onChange:K,variant:B="default",size:P="medium",fullWidth:k=!1,disabled:O=!1,name:H,className:J,itemClassName:A,indicatorClassName:q,...Q},p)=>{const U=d!==void 0,[X,Y]=l.useState(D??d??a[0]?.value),F=U?d:X,_=l.useRef(null),W=l.useRef([]),[I,Z]=l.useState(null),c=a.findIndex(e=>e.value===F),n=l.useMemo(()=>a.reduce((e,t,s)=>(!O&&!t.disabled&&e.push(s),e),[]),[a,O]),f=l.useCallback(()=>{const e=W.current[c];e&&Z({left:e.offsetLeft,width:e.offsetWidth})},[c]);l.useLayoutEffect(()=>{f()},[f,a,P,k]),l.useEffect(()=>{const e=_.current;if(!e||typeof ResizeObserver>"u")return;const t=new ResizeObserver(()=>f());return t.observe(e),()=>t.disconnect()},[f]);const G=e=>{U||Y(e),K?.(e)},T=e=>{const t=a[e];t&&(G(t.value),W.current[e]?.focus())},$=(e,t)=>{if(n.length===0)return;const s=n.indexOf(t),o=m=>{const z=(m+n.length)%n.length;T(n[z])};switch(e.key){case"ArrowRight":case"ArrowDown":e.preventDefault(),o(s+1);break;case"ArrowLeft":case"ArrowUp":e.preventDefault(),o(s-1);break;case"Home":e.preventDefault(),T(n[0]);break;case"End":e.preventDefault(),T(n[n.length-1]);break}};return a.length?r.jsxs("div",{ref:e=>{_.current=e,typeof p=="function"?p(e):p&&(p.current=e)},role:"radiogroup","data-slot":"segmented-control",className:E(ee({fullWidth:k}),J),...Q,children:[I&&c!==-1&&r.jsx("div",{"aria-hidden":"true","data-slot":"segmented-control-indicator",className:E(ae({variant:B}),typeof q=="function"?q({option:a[c],index:c}):q),style:{left:I.left,width:I.width}}),a.map((e,t)=>{const s=e.value===F,o=O||!!e.disabled,m=!!e.error,z={option:e,index:t,active:s,disabled:o,error:m};return r.jsxs("button",{ref:M=>{W.current[t]=M},type:"button",role:"radio","aria-checked":s,"aria-disabled":o||void 0,disabled:o,tabIndex:s?0:-1,name:H,"data-slot":"segmented-control-item","data-state":s?"active":"inactive","data-disabled":o||void 0,"data-error":m||void 0,onClick:()=>!o&&G(e.value),onKeyDown:M=>$(M,t),style:e.width!==void 0?{width:e.width}:void 0,className:E(re({variant:B,size:P,fullWidth:e.width!==void 0?!1:k,active:s,error:m}),typeof A=="function"?A(z):A),children:[e.icon,e.label]},e.value)})]}):null});i.displayName="SegmentedControl";i.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: React.ReactNode;
  value: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  error?: boolean;
  width?: number | string;
}`,signature:{properties:[{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"icon",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"error",value:{name:"boolean",required:!1}},{key:"width",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}}]}}],raw:"SegmentedControlOption[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:'VariantProps["variant"]',raw:'VariantProps<typeof segmentedControlItemVariants>["variant"]'},description:"",defaultValue:{value:'"default"',computed:!1}},size:{required:!1,tsType:{name:'VariantProps["size"]',raw:'VariantProps<typeof segmentedControlItemVariants>["size"]'},description:"",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},name:{required:!1,tsType:{name:"string"},description:""},itemClassName:{required:!1,tsType:{name:"union",raw:`| string
| ((state: SegmentedControlItemState) => string | undefined)`,elements:[{name:"string"},{name:"unknown"}]},description:""},indicatorClassName:{required:!1,tsType:{name:"union",raw:`| string
| ((state: SegmentedControlIndicatorState) => string | undefined)`,elements:[{name:"string"},{name:"unknown"}]},description:""},fullWidth:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit","VariantProps"]};const oe={title:"Components/SegmentedControl",component:i,parameters:{layout:"centered"},tags:["autodocs"]},u=[{label:"Role Management",value:"role"},{label:"User Management",value:"user"},{label:"Driver Access",value:"driver"}],v={args:{options:u,variant:"default",size:"medium"}},g={render:()=>{const[a,d]=l.useState("role");return r.jsxs("div",{className:"flex flex-col gap-4 items-center",children:[r.jsx(i,{options:u,value:a,onChange:d}),r.jsxs("p",{className:"text-sm",children:["Active tab: ",a]})]})}},b={render:()=>r.jsx("div",{className:"flex flex-col gap-6",children:["default","primary1","primary2","auxiliary"].map(a=>r.jsxs("div",{className:"flex flex-col gap-2 items-center",children:[r.jsx(i,{options:u,variant:a,defaultValue:"user"}),r.jsx("p",{className:"text-xs",children:a})]},a))})},x={render:()=>r.jsx("div",{className:"flex flex-col gap-6 items-center",children:["small","medium","large"].map(a=>r.jsxs("div",{className:"flex flex-col gap-2 items-center",children:[r.jsx(i,{options:u,size:a,defaultValue:"role"}),r.jsx("p",{className:"text-xs",children:a})]},a))})},h={args:{options:[{label:"List",value:"list",icon:r.jsx("i",{className:"ti ti-list"})},{label:"Grid",value:"grid",icon:r.jsx("i",{className:"ti ti-layout-grid"})},{label:"Map",value:"map",icon:r.jsx("i",{className:"ti ti-map"})}],defaultValue:"list"}},y={args:{options:[{label:"Role Management",value:"role"},{label:"User Management",value:"user"},{label:"Driver Access",value:"driver",disabled:!0}],defaultValue:"role"}},w={args:{options:[{label:"Details",value:"details"},{label:"Billing",value:"billing",error:!0},{label:"Shipping",value:"shipping"}],defaultValue:"details"}},N={args:{options:u,defaultValue:"user",className:"border border-primary-1-200 bg-primary-1-50",itemClassName:"font-semibold uppercase tracking-wide",indicatorClassName:"ring-1 ring-primary-1-300"}},S={render:()=>r.jsx(i,{options:[{label:"Details",value:"details"},{label:"Billing",value:"billing",error:!0},{label:"Shipping",value:"shipping",disabled:!0}],defaultValue:"details",itemClassName:({active:a,disabled:d,error:D})=>{if(D)return"italic";if(d)return"line-through";if(a)return"font-bold"},indicatorClassName:({option:a})=>a.value==="details"?"ring-1 ring-primary-1-300":void 0})},V={args:{options:u,defaultValue:"role",disabled:!0}},C={args:{options:u,defaultValue:"user",fullWidth:!0},render:a=>r.jsx("div",{className:"w-[480px]",children:r.jsx(i,{...a})})},j={args:{options:[{label:"LB",value:"lb",width:60},{label:"LCC",value:"lcc",width:100}],defaultValue:"lb"}},R={render:()=>r.jsx("div",{className:"w-[320px]",children:r.jsx(i,{options:[{label:"Role Management",value:"role"},{label:"User Management",value:"user"},{label:"Driver Access",value:"driver"},{label:"Fleet Settings",value:"fleet"},{label:"Billing",value:"billing"}],defaultValue:"role"})})};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    options: baseOptions,
    variant: 'default',
    size: "medium"
  }
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [tab, setTab] = useState('role');
    return <div className="flex flex-col gap-4 items-center">
                <SegmentedControl options={baseOptions} value={tab} onChange={setTab} />
                <p className="text-sm">Active tab: {tab}</p>
            </div>;
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
            {(['default', 'primary1', 'primary2', 'auxiliary'] as const).map(variant => <div key={variant} className="flex flex-col gap-2 items-center">
                        <SegmentedControl options={baseOptions} variant={variant} defaultValue="user" />
                        <p className="text-xs">{variant}</p>
                    </div>)}
        </div>
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 items-center">
            {(['small', 'medium', 'large'] as const).map(size => <div key={size} className="flex flex-col gap-2 items-center">
                    <SegmentedControl options={baseOptions} size={size} defaultValue="role" />
                    <p className="text-xs">{size}</p>
                </div>)}
        </div>
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      label: 'List',
      value: 'list',
      icon: <i className="ti ti-list" />
    }, {
      label: 'Grid',
      value: 'grid',
      icon: <i className="ti ti-layout-grid" />
    }, {
      label: 'Map',
      value: 'map',
      icon: <i className="ti ti-map" />
    }],
    defaultValue: 'list'
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      label: 'Role Management',
      value: 'role'
    }, {
      label: 'User Management',
      value: 'user'
    }, {
      label: 'Driver Access',
      value: 'driver',
      disabled: true
    }],
    defaultValue: 'role'
  }
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      label: 'Details',
      value: 'details'
    }, {
      label: 'Billing',
      value: 'billing',
      error: true
    }, {
      label: 'Shipping',
      value: 'shipping'
    }],
    defaultValue: 'details'
  }
}`,...w.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    options: baseOptions,
    defaultValue: 'user',
    className: 'border border-primary-1-200 bg-primary-1-50',
    itemClassName: 'font-semibold uppercase tracking-wide',
    indicatorClassName: 'ring-1 ring-primary-1-300'
  }
}`,...N.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <SegmentedControl options={[{
    label: 'Details',
    value: 'details'
  }, {
    label: 'Billing',
    value: 'billing',
    error: true
  }, {
    label: 'Shipping',
    value: 'shipping',
    disabled: true
  }]} defaultValue="details" itemClassName={({
    active,
    disabled,
    error
  }) => {
    if (error) return 'italic';
    if (disabled) return 'line-through';
    if (active) return 'font-bold';
    return undefined;
  }} indicatorClassName={({
    option
  }) => option.value === 'details' ? 'ring-1 ring-primary-1-300' : undefined} />
}`,...S.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    options: baseOptions,
    defaultValue: 'role',
    disabled: true
  }
}`,...V.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    options: baseOptions,
    defaultValue: 'user',
    fullWidth: true
  },
  render: args => <div className="w-[480px]">
            <SegmentedControl {...args} />
        </div>
}`,...C.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      label: 'LB',
      value: 'lb',
      width: 60
    }, {
      label: 'LCC',
      value: 'lcc',
      width: 100
    }],
    defaultValue: 'lb'
  }
}`,...j.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-[320px]">
            <SegmentedControl options={[{
      label: 'Role Management',
      value: 'role'
    }, {
      label: 'User Management',
      value: 'user'
    }, {
      label: 'Driver Access',
      value: 'driver'
    }, {
      label: 'Fleet Settings',
      value: 'fleet'
    }, {
      label: 'Billing',
      value: 'billing'
    }]} defaultValue="role" />
        </div>
}`,...R.parameters?.docs?.source}}};const de=["Default","Controlled","Variants","Sizes","WithIcons","WithDisabledOption","WithErrorOption","CustomStyling","StateAwareStyling","Disabled","FullWidth","CustomWidth","ResponsiveOverflow"];export{g as Controlled,N as CustomStyling,j as CustomWidth,v as Default,V as Disabled,C as FullWidth,R as ResponsiveOverflow,x as Sizes,S as StateAwareStyling,b as Variants,y as WithDisabledOption,w as WithErrorOption,h as WithIcons,de as __namedExportsOrder,oe as default};

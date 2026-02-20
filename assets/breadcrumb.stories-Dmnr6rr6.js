import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as c}from"./iframe-qX5Rn-ky.js";import{c as p}from"./utils-d2XQ1MEC.js";import{c as N}from"./index-D7B6UqMd.js";import"./preload-helper-PPVm8Dsz.js";function _(e){const n=k(e),a=c.forwardRef((t,s)=>{const{children:o,...u}=t,d=c.Children.toArray(o),b=d.find(v);if(b){const B=b.props.children,L=d.map(y=>y===b?c.Children.count(B)>1?c.Children.only(null):c.isValidElement(B)?B.props.children:null:y);return r.jsx(n,{...u,ref:s,children:c.isValidElement(B)?c.cloneElement(B,void 0,L):null})}return r.jsx(n,{...u,ref:s,children:o})});return a.displayName=`${e}.Slot`,a}var E=_("Slot");function k(e){const n=c.forwardRef((a,t)=>{const{children:s,...o}=a;if(c.isValidElement(s)){const u=D(s),d=P(o,s.props);return s.type!==c.Fragment&&(d.ref=t?N(t,u):u),c.cloneElement(s,d)}return c.Children.count(s)>1?c.Children.only(null):null});return n.displayName=`${e}.SlotClone`,n}var C=Symbol("radix.slottable");function v(e){return c.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===C}function P(e,n){const a={...n};for(const t in n){const s=e[t],o=n[t];/^on[A-Z]/.test(t)?s&&o?a[t]=(...d)=>{const b=o(...d);return s(...d),b}:s&&(a[t]=s):t==="style"?a[t]={...s,...o}:t==="className"&&(a[t]=[s,o].filter(Boolean).join(" "))}return{...e,...a}}function D(e){let n=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,a=n&&"isReactWarning"in n&&n.isReactWarning;return a?e.ref:(n=Object.getOwnPropertyDescriptor(e,"ref")?.get,a=n&&"isReactWarning"in n&&n.isReactWarning,a?e.props.ref:e.props.ref||e.ref)}function f({...e}){return r.jsx("nav",{"aria-label":"breadcrumb","data-slot":"breadcrumb",...e})}function g({className:e,...n}){return r.jsx("ol",{"data-slot":"breadcrumb-list",className:p("text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",e),...n})}function i({className:e,...n}){return r.jsx("li",{"data-slot":"breadcrumb-item",className:p("inline-flex items-center gap-1.5",e),...n})}function l({asChild:e,className:n,...a}){const t=e?E:"a";return r.jsx(t,{"data-slot":"breadcrumb-link",className:p("hover:text-foreground transition-colors",n),...a})}function I({className:e,...n}){return r.jsx("span",{"data-slot":"breadcrumb-page",role:"link","aria-disabled":"true","aria-current":"page",className:p("text-foreground font-normal",e),...n})}function m({children:e,className:n,...a}){return r.jsx("li",{"data-slot":"breadcrumb-separator",role:"presentation","aria-hidden":"true",className:p("[&>svg]:size-3.5",n),...a,children:e??r.jsx("i",{className:"ti ti-chevron-right"})})}function S({className:e,...n}){return r.jsx("span",{"data-slot":"breadcrumb-ellipsis",role:"presentation","aria-hidden":"true",className:p("flex size-9 flex items-center justify-center",e),...n,children:r.jsx("i",{className:"ti ti-dots size-4",style:{display:"contents"}})})}f.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb"};g.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbList"};i.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem"};l.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbLink",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""}}};I.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbPage"};m.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSeparator"};S.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbEllipsis"};const w={title:"Components/Navigation/Breadcrumb",component:f,parameters:{layout:"centered"},tags:["autodocs"]},h={render:()=>r.jsx(f,{children:r.jsxs(g,{children:[r.jsx(i,{children:r.jsx(l,{href:"/",children:"Home"})}),r.jsx(m,{children:r.jsx("i",{className:"ti ti-chevron-right"})}),r.jsx(i,{children:r.jsx(l,{href:"/docs",children:"Docs"})}),r.jsx(m,{children:r.jsx("i",{className:"ti ti-chevron-right"})}),r.jsx(i,{children:r.jsx(I,{children:"Breadcrumb"})})]})})},x={render:()=>r.jsx(f,{children:r.jsxs(g,{children:[r.jsx(i,{children:r.jsx(l,{href:"/",children:"Home"})}),r.jsx(m,{}),r.jsx(i,{children:r.jsx(S,{})}),r.jsx(m,{}),r.jsx(i,{children:r.jsx(l,{href:"/components",children:"Components"})}),r.jsx(m,{}),r.jsx(i,{children:r.jsx(I,{children:"Breadcrumb"})})]})})},j={render:()=>r.jsx(f,{children:r.jsxs(g,{children:[r.jsx(i,{children:r.jsx(l,{href:"/",children:"Home"})}),r.jsx(m,{}),r.jsx(i,{children:r.jsx(l,{href:"/library",children:"Library"})}),r.jsx(m,{}),r.jsx(i,{children:r.jsx(I,{children:"Data"})})]})})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator>
          <i className="ti ti-chevron-right" />
        </BreadcrumbSeparator>

        <BreadcrumbItem>
          <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator>
          <i className="ti ti-chevron-right" />
        </BreadcrumbSeparator>

        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        <BreadcrumbItem>
          <BreadcrumbEllipsis />
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        <BreadcrumbItem>
          <BreadcrumbLink href="/components">Components</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...x.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        <BreadcrumbItem>
          <BreadcrumbLink href="/library">Library</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        <BreadcrumbItem>
          <BreadcrumbPage>Data</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...j.parameters?.docs?.source}}};const A=["Default","WithEllipsis","DefaultSeparator"];export{h as Default,j as DefaultSeparator,x as WithEllipsis,A as __namedExportsOrder,w as default};

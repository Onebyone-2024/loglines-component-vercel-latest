import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as s}from"./iframe-CZtJQ_4b.js";import{u as ne,c as P}from"./index-B9IVvhAW.js";import{u as W}from"./index-BkLry5iL.js";import{P as ie,c as se}from"./index-DFfF7Xm2.js";import{R as ae,A as le,P as ce,a as de,c as U,D as pe,C as ue}from"./index-BMUGzazt.js";import{u as me}from"./index-C_MRDbiw.js";import{P as Y}from"./index-CUkWElrq.js";import{R as xe}from"./index-Cn1ezb7K.js";import{c as fe}from"./utils-d2XQ1MEC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-u3d1b7p2.js";import"./index-C9L0kFif.js";import"./index-CgdWI0uX.js";var he=Symbol("radix.slottable");function ge(t){const r=({children:o})=>e.jsx(e.Fragment,{children:o});return r.displayName=`${t}.Slottable`,r.__radixId=he,r}var[H]=se("Tooltip",[U]),B=U(),X="TooltipProvider",Te=700,F="tooltip.open",[ye,q]=H(X),K=t=>{const{__scopeTooltip:r,delayDuration:o=Te,skipDelayDuration:n=300,disableHoverableContent:i=!1,children:c}=t,l=s.useRef(!0),x=s.useRef(!1),a=s.useRef(0);return s.useEffect(()=>{const u=a.current;return()=>window.clearTimeout(u)},[]),e.jsx(ye,{scope:r,isOpenDelayedRef:l,delayDuration:o,onOpen:s.useCallback(()=>{window.clearTimeout(a.current),l.current=!1},[]),onClose:s.useCallback(()=>{window.clearTimeout(a.current),a.current=window.setTimeout(()=>l.current=!0,n)},[n]),isPointerInTransitRef:x,onPointerInTransitChange:s.useCallback(u=>{x.current=u},[]),disableHoverableContent:i,children:c})};K.displayName=X;var D="Tooltip",[ve,A]=H(D),J=t=>{const{__scopeTooltip:r,children:o,open:n,defaultOpen:i,onOpenChange:c,disableHoverableContent:l,delayDuration:x}=t,a=q(D,t.__scopeTooltip),u=B(r),[d,m]=s.useState(null),f=me(),p=s.useRef(0),h=l??a.disableHoverableContent,T=x??a.delayDuration,g=s.useRef(!1),[w,b]=ne({prop:n,defaultProp:i??!1,onChange:V=>{V?(a.onOpen(),document.dispatchEvent(new CustomEvent(F))):a.onClose(),c?.(V)},caller:D}),E=s.useMemo(()=>w?g.current?"delayed-open":"instant-open":"closed",[w]),R=s.useCallback(()=>{window.clearTimeout(p.current),p.current=0,g.current=!1,b(!0)},[b]),_=s.useCallback(()=>{window.clearTimeout(p.current),p.current=0,b(!1)},[b]),z=s.useCallback(()=>{window.clearTimeout(p.current),p.current=window.setTimeout(()=>{g.current=!0,b(!0),p.current=0},T)},[T,b]);return s.useEffect(()=>()=>{p.current&&(window.clearTimeout(p.current),p.current=0)},[]),e.jsx(ae,{...u,children:e.jsx(ve,{scope:r,contentId:f,open:w,stateAttribute:E,trigger:d,onTriggerChange:m,onTriggerEnter:s.useCallback(()=>{a.isOpenDelayedRef.current?z():R()},[a.isOpenDelayedRef,z,R]),onTriggerLeave:s.useCallback(()=>{h?_():(window.clearTimeout(p.current),p.current=0)},[_,h]),onOpen:R,onClose:_,disableHoverableContent:h,children:o})})};J.displayName=D;var G="TooltipTrigger",Q=s.forwardRef((t,r)=>{const{__scopeTooltip:o,...n}=t,i=A(G,o),c=q(G,o),l=B(o),x=s.useRef(null),a=W(r,x,i.onTriggerChange),u=s.useRef(!1),d=s.useRef(!1),m=s.useCallback(()=>u.current=!1,[]);return s.useEffect(()=>()=>document.removeEventListener("pointerup",m),[m]),e.jsx(le,{asChild:!0,...l,children:e.jsx(ie.button,{"aria-describedby":i.open?i.contentId:void 0,"data-state":i.stateAttribute,...n,ref:a,onPointerMove:P(t.onPointerMove,f=>{f.pointerType!=="touch"&&!d.current&&!c.isPointerInTransitRef.current&&(i.onTriggerEnter(),d.current=!0)}),onPointerLeave:P(t.onPointerLeave,()=>{i.onTriggerLeave(),d.current=!1}),onPointerDown:P(t.onPointerDown,()=>{i.open&&i.onClose(),u.current=!0,document.addEventListener("pointerup",m,{once:!0})}),onFocus:P(t.onFocus,()=>{u.current||i.onOpen()}),onBlur:P(t.onBlur,i.onClose),onClick:P(t.onClick,i.onClose)})})});Q.displayName=G;var $="TooltipPortal",[be,Ce]=H($,{forceMount:void 0}),Z=t=>{const{__scopeTooltip:r,forceMount:o,children:n,container:i}=t,c=A($,r);return e.jsx(be,{scope:r,forceMount:o,children:e.jsx(Y,{present:o||c.open,children:e.jsx(ce,{asChild:!0,container:i,children:n})})})};Z.displayName=$;var N="TooltipContent",ee=s.forwardRef((t,r)=>{const o=Ce(N,t.__scopeTooltip),{forceMount:n=o.forceMount,side:i="top",...c}=t,l=A(N,t.__scopeTooltip);return e.jsx(Y,{present:n||l.open,children:l.disableHoverableContent?e.jsx(te,{side:i,...c,ref:r}):e.jsx(je,{side:i,...c,ref:r})})}),je=s.forwardRef((t,r)=>{const o=A(N,t.__scopeTooltip),n=q(N,t.__scopeTooltip),i=s.useRef(null),c=W(r,i),[l,x]=s.useState(null),{trigger:a,onClose:u}=o,d=i.current,{onPointerInTransitChange:m}=n,f=s.useCallback(()=>{x(null),m(!1)},[m]),p=s.useCallback((h,T)=>{const g=h.currentTarget,w={x:h.clientX,y:h.clientY},b=Ee(w,g.getBoundingClientRect()),E=Re(w,b),R=_e(T.getBoundingClientRect()),_=Ae([...E,...R]);x(_),m(!0)},[m]);return s.useEffect(()=>()=>f(),[f]),s.useEffect(()=>{if(a&&d){const h=g=>p(g,d),T=g=>p(g,a);return a.addEventListener("pointerleave",h),d.addEventListener("pointerleave",T),()=>{a.removeEventListener("pointerleave",h),d.removeEventListener("pointerleave",T)}}},[a,d,p,f]),s.useEffect(()=>{if(l){const h=T=>{const g=T.target,w={x:T.clientX,y:T.clientY},b=a?.contains(g)||d?.contains(g),E=!De(w,l);b?f():E&&(f(),u())};return document.addEventListener("pointermove",h),()=>document.removeEventListener("pointermove",h)}},[a,d,l,u,f]),e.jsx(te,{...t,ref:c})}),[we,Pe]=H(D,{isInside:!1}),Ne=ge("TooltipContent"),te=s.forwardRef((t,r)=>{const{__scopeTooltip:o,children:n,"aria-label":i,onEscapeKeyDown:c,onPointerDownOutside:l,...x}=t,a=A(N,o),u=B(o),{onClose:d}=a;return s.useEffect(()=>(document.addEventListener(F,d),()=>document.removeEventListener(F,d)),[d]),s.useEffect(()=>{if(a.trigger){const m=f=>{f.target?.contains(a.trigger)&&d()};return window.addEventListener("scroll",m,{capture:!0}),()=>window.removeEventListener("scroll",m,{capture:!0})}},[a.trigger,d]),e.jsx(pe,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:c,onPointerDownOutside:l,onFocusOutside:m=>m.preventDefault(),onDismiss:d,children:e.jsxs(ue,{"data-state":a.stateAttribute,...u,...x,ref:r,style:{...x.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[e.jsx(Ne,{children:n}),e.jsx(we,{scope:o,isInside:!0,children:e.jsx(xe,{id:a.contentId,role:"tooltip",children:i||n})})]})})});ee.displayName=N;var oe="TooltipArrow",re=s.forwardRef((t,r)=>{const{__scopeTooltip:o,...n}=t,i=B(o);return Pe(oe,o).isInside?null:e.jsx(de,{...i,...n,ref:r})});re.displayName=oe;function Ee(t,r){const o=Math.abs(r.top-t.y),n=Math.abs(r.bottom-t.y),i=Math.abs(r.right-t.x),c=Math.abs(r.left-t.x);switch(Math.min(o,n,i,c)){case c:return"left";case i:return"right";case o:return"top";case n:return"bottom";default:throw new Error("unreachable")}}function Re(t,r,o=5){const n=[];switch(r){case"top":n.push({x:t.x-o,y:t.y+o},{x:t.x+o,y:t.y+o});break;case"bottom":n.push({x:t.x-o,y:t.y-o},{x:t.x+o,y:t.y-o});break;case"left":n.push({x:t.x+o,y:t.y-o},{x:t.x+o,y:t.y+o});break;case"right":n.push({x:t.x-o,y:t.y-o},{x:t.x-o,y:t.y+o});break}return n}function _e(t){const{top:r,right:o,bottom:n,left:i}=t;return[{x:i,y:r},{x:o,y:r},{x:o,y:n},{x:i,y:n}]}function De(t,r){const{x:o,y:n}=t;let i=!1;for(let c=0,l=r.length-1;c<r.length;l=c++){const x=r[c],a=r[l],u=x.x,d=x.y,m=a.x,f=a.y;d>n!=f>n&&o<(m-u)*(n-d)/(f-d)+u&&(i=!i)}return i}function Ae(t){const r=t.slice();return r.sort((o,n)=>o.x<n.x?-1:o.x>n.x?1:o.y<n.y?-1:o.y>n.y?1:0),Ie(r)}function Ie(t){if(t.length<=1)return t.slice();const r=[];for(let n=0;n<t.length;n++){const i=t[n];for(;r.length>=2;){const c=r[r.length-1],l=r[r.length-2];if((c.x-l.x)*(i.y-l.y)>=(c.y-l.y)*(i.x-l.x))r.pop();else break}r.push(i)}r.pop();const o=[];for(let n=t.length-1;n>=0;n--){const i=t[n];for(;o.length>=2;){const c=o[o.length-1],l=o[o.length-2];if((c.x-l.x)*(i.y-l.y)>=(c.y-l.y)*(i.x-l.x))o.pop();else break}o.push(i)}return o.pop(),r.length===1&&o.length===1&&r[0].x===o[0].x&&r[0].y===o[0].y?r:r.concat(o)}var Oe=K,Le=J,Se=Q,ke=Z,Me=ee,He=re;function y({delayDuration:t=0,...r}){return e.jsx(Oe,{"data-slot":"tooltip-provider",delayDuration:t,...r})}function v({...t}){return e.jsx(y,{children:e.jsx(Le,{"data-slot":"tooltip",...t})})}function C({...t}){return e.jsx(Se,{"data-slot":"tooltip-trigger",...t})}function j({className:t,sideOffset:r=0,children:o,...n}){return e.jsx(ke,{children:e.jsxs(Me,{"data-slot":"tooltip-content",sideOffset:r,className:fe("bg-neutral-900 text-white animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",t),...n,children:[o,e.jsx(He,{className:"bg-neutral-900 fill-neutral-900 z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]"})]})})}v.__docgenInfo={description:"",methods:[],displayName:"Tooltip"};C.__docgenInfo={description:"",methods:[],displayName:"TooltipTrigger"};j.__docgenInfo={description:"",methods:[],displayName:"TooltipContent",props:{sideOffset:{defaultValue:{value:"0",computed:!1},required:!1}}};y.__docgenInfo={description:"",methods:[],displayName:"TooltipProvider",props:{delayDuration:{defaultValue:{value:"0",computed:!1},required:!1}}};const Ze={title:"Components/Tooltip",component:v,parameters:{layout:"centered"},tags:["autodocs"]},I={render:()=>e.jsx(y,{children:e.jsxs(v,{children:[e.jsx(C,{asChild:!0,children:e.jsx("button",{className:"inline-flex items-center justify-center rounded-md bg-primary-1-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-1-600",children:"Hover me"})}),e.jsx(j,{children:"This is a tooltip message"})]})})},O={render:()=>e.jsx(y,{children:e.jsxs(v,{children:[e.jsx(C,{asChild:!0,children:e.jsxs("button",{className:"inline-flex items-center justify-center gap-2 rounded-md bg-primary-1-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-1-600",children:[e.jsx("i",{className:"ti ti-info-circle"}),"Info"]})}),e.jsx(j,{children:"Click here for more information"})]})})},L={render:()=>e.jsx(y,{children:e.jsxs(v,{children:[e.jsx(C,{asChild:!0,children:e.jsx("button",{className:"inline-flex items-center justify-center rounded-md bg-neutral-200 p-2 hover:bg-neutral-300",children:e.jsx("i",{className:"ti ti-help text-black"})})}),e.jsx(j,{children:"Help & Support"})]})})},S={render:()=>e.jsx(y,{children:e.jsxs(v,{children:[e.jsx(C,{asChild:!0,children:e.jsxs("button",{className:"inline-flex items-center justify-center gap-2 rounded-md bg-warning-600 px-4 py-2 text-sm font-medium text-white hover:bg-warning-500",children:[e.jsx("i",{className:"ti ti-alert-circle"}),"Alert"]})}),e.jsx(j,{children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("i",{className:"ti ti-alert-triangle text-warning-300"}),e.jsx("span",{children:"This action requires attention"})]})})]})})},k={render:()=>e.jsxs("div",{className:"flex gap-8",children:[e.jsx(y,{children:e.jsxs(v,{children:[e.jsx(C,{asChild:!0,children:e.jsx("button",{className:"inline-flex items-center justify-center rounded-md bg-primary-1-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-1-600",children:"Top"})}),e.jsx(j,{side:"top",children:"Top tooltip"})]})}),e.jsx(y,{children:e.jsxs(v,{children:[e.jsx(C,{asChild:!0,children:e.jsx("button",{className:"inline-flex items-center justify-center rounded-md bg-primary-1-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-1-600",children:"Bottom"})}),e.jsx(j,{side:"bottom",children:"Bottom tooltip"})]})}),e.jsx(y,{children:e.jsxs(v,{children:[e.jsx(C,{asChild:!0,children:e.jsx("button",{className:"inline-flex items-center justify-center rounded-md bg-primary-1-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-1-600",children:"Left"})}),e.jsx(j,{side:"left",children:"Left tooltip"})]})}),e.jsx(y,{children:e.jsxs(v,{children:[e.jsx(C,{asChild:!0,children:e.jsx("button",{className:"inline-flex items-center justify-center rounded-md bg-primary-1-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-1-600",children:"Right"})}),e.jsx(j,{side:"right",children:"Right tooltip"})]})})]})},M={render:()=>e.jsx(y,{delayDuration:300,children:e.jsxs(v,{children:[e.jsx(C,{asChild:!0,children:e.jsx("button",{className:"inline-flex items-center justify-center rounded-md bg-primary-1-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-1-600",children:"Delayed Tooltip"})}),e.jsx(j,{children:"Appears after 300ms delay"})]})})};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button className="inline-flex items-center justify-center rounded-md bg-primary-1-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-1-600">
            Hover me
          </button>
        </TooltipTrigger>
        <TooltipContent>This is a tooltip message</TooltipContent>
      </Tooltip>
    </TooltipProvider>
}`,...I.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button className="inline-flex items-center justify-center gap-2 rounded-md bg-primary-1-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-1-600">
            <i className="ti ti-info-circle" />
            Info
          </button>
        </TooltipTrigger>
        <TooltipContent>Click here for more information</TooltipContent>
      </Tooltip>
    </TooltipProvider>
}`,...O.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button className="inline-flex items-center justify-center rounded-md bg-neutral-200 p-2 hover:bg-neutral-300">
            <i className="ti ti-help text-black" />
          </button>
        </TooltipTrigger>
        <TooltipContent>Help & Support</TooltipContent>
      </Tooltip>
    </TooltipProvider>
}`,...L.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button className="inline-flex items-center justify-center gap-2 rounded-md bg-warning-600 px-4 py-2 text-sm font-medium text-white hover:bg-warning-500">
            <i className="ti ti-alert-circle" />
            Alert
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <div className="flex items-center gap-2">
            <i className="ti ti-alert-triangle text-warning-300" />
            <span>This action requires attention</span>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
}`,...S.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-8">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button className="inline-flex items-center justify-center rounded-md bg-primary-1-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-1-600">
              Top
            </button>
          </TooltipTrigger>
          <TooltipContent side="top">Top tooltip</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button className="inline-flex items-center justify-center rounded-md bg-primary-1-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-1-600">
              Bottom
            </button>
          </TooltipTrigger>
          <TooltipContent side="bottom">Bottom tooltip</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button className="inline-flex items-center justify-center rounded-md bg-primary-1-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-1-600">
              Left
            </button>
          </TooltipTrigger>
          <TooltipContent side="left">Left tooltip</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button className="inline-flex items-center justify-center rounded-md bg-primary-1-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-1-600">
              Right
            </button>
          </TooltipTrigger>
          <TooltipContent side="right">Right tooltip</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
}`,...k.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <button className="inline-flex items-center justify-center rounded-md bg-primary-1-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-1-600">
            Delayed Tooltip
          </button>
        </TooltipTrigger>
        <TooltipContent>Appears after 300ms delay</TooltipContent>
      </Tooltip>
    </TooltipProvider>
}`,...M.parameters?.docs?.source}}};const et=["Default","WithIcon","IconOnly","WithIconAndMessage","Sides","DelayedAppearance"];export{I as Default,M as DelayedAppearance,L as IconOnly,k as Sides,O as WithIcon,S as WithIconAndMessage,et as __namedExportsOrder,Ze as default};

import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as c}from"./iframe-qX5Rn-ky.js";import{c as z}from"./index-Drd88ecX.js";import{c as N}from"./utils-d2XQ1MEC.js";import"./badge-DJ-854Zx.js";import{c as h,u as J}from"./index-BnjGCIRf.js";import{P as S,c as Q}from"./index-CUpOIcll.js";import{c as Ce,u as X}from"./index-DQp2z7LM.js";import{u as je}from"./index-D7B6UqMd.js";import{u as Z,a as we}from"./index-CHVRmXxA.js";import{P as ye}from"./index-BZlvbhoL.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DreGMEBz.js";import"./index-CATZPV1q.js";import"./index-CcLZddlM.js";var U="rovingFocusGroup.onEntryFocus",Ie={bubbles:!1,cancelable:!0},R="RovingFocusGroup",[W,ee,Ne]=Ce(R),[Se,ae]=Q(R,[Ne]),[Re,Fe]=Se(R),te=c.forwardRef((a,t)=>e.jsx(W.Provider,{scope:a.__scopeRovingFocusGroup,children:e.jsx(W.Slot,{scope:a.__scopeRovingFocusGroup,children:e.jsx(Ae,{...a,ref:t})})}));te.displayName=R;var Ae=c.forwardRef((a,t)=>{const{__scopeRovingFocusGroup:r,orientation:n,loop:u=!1,dir:g,currentTabStopId:l,defaultCurrentTabStopId:p,onCurrentTabStopIdChange:x,onEntryFocus:f,preventScrollOnEntryFocus:s=!1,...d}=a,m=c.useRef(null),F=je(t,m),A=X(g),[E,b]=J({prop:l,defaultProp:p??null,onChange:x,caller:R}),[j,B]=c.useState(!1),v=we(f),w=ee(r),K=c.useRef(!1),[fe,q]=c.useState(0);return c.useEffect(()=>{const T=m.current;if(T)return T.addEventListener(U,v),()=>T.removeEventListener(U,v)},[v]),e.jsx(Re,{scope:r,orientation:n,dir:A,loop:u,currentTabStopId:E,onItemFocus:c.useCallback(T=>b(T),[b]),onItemShiftTab:c.useCallback(()=>B(!0),[]),onFocusableItemAdd:c.useCallback(()=>q(T=>T+1),[]),onFocusableItemRemove:c.useCallback(()=>q(T=>T-1),[]),children:e.jsx(S.div,{tabIndex:j||fe===0?-1:0,"data-orientation":n,...d,ref:F,style:{outline:"none",...a.style},onMouseDown:h(a.onMouseDown,()=>{K.current=!0}),onFocus:h(a.onFocus,T=>{const me=!K.current;if(T.target===T.currentTarget&&me&&!j){const H=new CustomEvent(U,Ie);if(T.currentTarget.dispatchEvent(H),!H.defaultPrevented){const k=w().filter(I=>I.focusable),ve=k.find(I=>I.active),xe=k.find(I=>I.id===E),he=[ve,xe,...k].filter(Boolean).map(I=>I.ref.current);se(he,s)}}K.current=!1}),onBlur:h(a.onBlur,()=>B(!1))})})}),ne="RovingFocusGroupItem",re=c.forwardRef((a,t)=>{const{__scopeRovingFocusGroup:r,focusable:n=!0,active:u=!1,tabStopId:g,children:l,...p}=a,x=Z(),f=g||x,s=Fe(ne,r),d=s.currentTabStopId===f,m=ee(r),{onFocusableItemAdd:F,onFocusableItemRemove:A,currentTabStopId:E}=s;return c.useEffect(()=>{if(n)return F(),()=>A()},[n,F,A]),e.jsx(W.ItemSlot,{scope:r,id:f,focusable:n,active:u,children:e.jsx(S.span,{tabIndex:d?0:-1,"data-orientation":s.orientation,...p,ref:t,onMouseDown:h(a.onMouseDown,b=>{n?s.onItemFocus(f):b.preventDefault()}),onFocus:h(a.onFocus,()=>s.onItemFocus(f)),onKeyDown:h(a.onKeyDown,b=>{if(b.key==="Tab"&&b.shiftKey){s.onItemShiftTab();return}if(b.target!==b.currentTarget)return;const j=Pe(b,s.orientation,s.dir);if(j!==void 0){if(b.metaKey||b.ctrlKey||b.altKey||b.shiftKey)return;b.preventDefault();let v=m().filter(w=>w.focusable).map(w=>w.ref.current);if(j==="last")v.reverse();else if(j==="prev"||j==="next"){j==="prev"&&v.reverse();const w=v.indexOf(b.currentTarget);v=s.loop?Ve(v,w+1):v.slice(w+1)}setTimeout(()=>se(v))}}),children:typeof l=="function"?l({isCurrentTabStop:d,hasTabStop:E!=null}):l})})});re.displayName=ne;var Ee={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function _e(a,t){return t!=="rtl"?a:a==="ArrowLeft"?"ArrowRight":a==="ArrowRight"?"ArrowLeft":a}function Pe(a,t,r){const n=_e(a.key,r);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(n))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(n)))return Ee[n]}function se(a,t=!1){const r=document.activeElement;for(const n of a)if(n===r||(n.focus({preventScroll:t}),document.activeElement!==r))return}function Ve(a,t){return a.map((r,n)=>a[(t+n)%a.length])}var Le=te,De=re,O="Tabs",[Me]=Q(O,[ae]),oe=ae(),[Ge,$]=Me(O),ie=c.forwardRef((a,t)=>{const{__scopeTabs:r,value:n,onValueChange:u,defaultValue:g,orientation:l="horizontal",dir:p,activationMode:x="automatic",...f}=a,s=X(p),[d,m]=J({prop:n,onChange:u,defaultProp:g??"",caller:O});return e.jsx(Ge,{scope:r,baseId:Z(),value:d,onValueChange:m,orientation:l,dir:s,activationMode:x,children:e.jsx(S.div,{dir:s,"data-orientation":l,...f,ref:t})})});ie.displayName=O;var le="TabsList",ce=c.forwardRef((a,t)=>{const{__scopeTabs:r,loop:n=!0,...u}=a,g=$(le,r),l=oe(r);return e.jsx(Le,{asChild:!0,...l,orientation:g.orientation,dir:g.dir,loop:n,children:e.jsx(S.div,{role:"tablist","aria-orientation":g.orientation,...u,ref:t})})});ce.displayName=le;var ue="TabsTrigger",de=c.forwardRef((a,t)=>{const{__scopeTabs:r,value:n,disabled:u=!1,...g}=a,l=$(ue,r),p=oe(r),x=Te(l.baseId,n),f=pe(l.baseId,n),s=n===l.value;return e.jsx(De,{asChild:!0,...p,focusable:!u,active:s,children:e.jsx(S.button,{type:"button",role:"tab","aria-selected":s,"aria-controls":f,"data-state":s?"active":"inactive","data-disabled":u?"":void 0,disabled:u,id:x,...g,ref:t,onMouseDown:h(a.onMouseDown,d=>{!u&&d.button===0&&d.ctrlKey===!1?l.onValueChange(n):d.preventDefault()}),onKeyDown:h(a.onKeyDown,d=>{[" ","Enter"].includes(d.key)&&l.onValueChange(n)}),onFocus:h(a.onFocus,()=>{const d=l.activationMode!=="manual";!s&&!u&&d&&l.onValueChange(n)})})})});de.displayName=ue;var be="TabsContent",ge=c.forwardRef((a,t)=>{const{__scopeTabs:r,value:n,forceMount:u,children:g,...l}=a,p=$(be,r),x=Te(p.baseId,n),f=pe(p.baseId,n),s=n===p.value,d=c.useRef(s);return c.useEffect(()=>{const m=requestAnimationFrame(()=>d.current=!1);return()=>cancelAnimationFrame(m)},[]),e.jsx(ye,{present:u||s,children:({present:m})=>e.jsx(S.div,{"data-state":s?"active":"inactive","data-orientation":p.orientation,role:"tabpanel","aria-labelledby":x,hidden:!m,id:f,tabIndex:0,...l,ref:t,style:{...a.style,animationDuration:d.current?"0s":void 0},children:m&&g})})});ge.displayName=be;function Te(a,t){return`${a}-trigger-${t}`}function pe(a,t){return`${a}-content-${t}`}var Oe=ie,Be=ce,Ke=de,ke=ge;function C({className:a,orientation:t="horizontal",...r}){return e.jsx(Oe,{"data-slot":"tabs","data-orientation":t,orientation:t,className:N("group/tabs flex gap-2 data-[orientation=horizontal]:flex-col",a),...r})}const Ue=z("rounded-lg p-[3px] group-data-[orientation=horizontal]/tabs:h-9 data-[variant=line]:rounded-none group/tabs-list text-muted-foreground inline-flex w-fit items-center justify-center group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col",{variants:{variant:{default:"bg-muted",line:"gap-1 bg-transparent"}},defaultVariants:{variant:"default"}});function y({className:a,variant:t="default",...r}){return e.jsx(Be,{"data-slot":"tabs-list","data-variant":t,className:N(Ue({variant:t}),a),...r})}const We=z("relative inline-flex items-center gap-2 px-2 py-1 text-sm font-medium transition-all",{variants:{color:{primary:"data-[state=active]:text-primary-1-500 data-[state=active]:after:bg-primary-1-500",secondary:"data-[state=active]:text-primary-2-500 data-[state=active]:after:bg-primary-2-500",success:"data-[state=active]:text-success-500 data-[state=active]:after:bg-success-500",warning:"data-[state=active]:text-warning-500 data-[state=active]:after:bg-warning-500",danger:"data-[state=active]:text-danger-500 data-[state=active]:after:bg-danger-500",auxiliary:"data-[state=active]:text-auxiliary-500 data-[state=active]:after:bg-auxiliary-500"},underline:{true:"after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-0.5 after:opacity-0 data-[state=active]:after:opacity-100",false:""}},defaultVariants:{color:"primary",underline:!0}}),Y=z("rounded-sm px-2 py-0.5 text-xs font-medium transition-colors",{variants:{color:{primary:"bg-neutral-200 text-neutral-600 group-data-[state=active]:bg-primary-1-500 group-data-[state=active]:text-white",secondary:"bg-neutral-200 text-neutral-600 group-data-[state=active]:bg-primary-2-500 group-data-[state=active]:text-white",success:"bg-neutral-200 text-neutral-600 group-data-[state=active]:bg-success-500 group-data-[state=active]:text-white",warning:"bg-neutral-200 text-neutral-600 group-data-[state=active]:bg-warning-500 group-data-[state=active]:text-white",danger:"bg-neutral-200 text-neutral-600 group-data-[state=active]:bg-danger-500 group-data-[state=active]:text-white",auxiliary:"bg-neutral-200 text-neutral-600 group-data-[state=active]:bg-auxiliary-500 group-data-[state=active]:text-white"}},defaultVariants:{color:"primary"}});function o({className:a,badge:t,badgePosition:r="right",color:n,underline:u,children:g,...l}){return e.jsxs(Ke,{"data-slot":"tabs-trigger",className:N(We({color:n,underline:u}),"group text-neutral-500 hover:text-neutral-700",a),...l,children:[t&&r==="left"&&e.jsx("span",{className:N(Y({color:n})),children:t}),e.jsx("span",{children:g}),t&&r==="right"&&e.jsx("span",{className:N(Y({color:n})),children:t})]})}function i({className:a,...t}){return e.jsx(ke,{"data-slot":"tabs-content",className:N("flex-1 outline-none",a),...t})}C.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{orientation:{defaultValue:{value:'"horizontal"',computed:!1},required:!1}}};y.__docgenInfo={description:"",methods:[],displayName:"TabsList",props:{variant:{defaultValue:{value:'"default"',computed:!1},required:!1}}};o.__docgenInfo={description:"",methods:[],displayName:"TabsTrigger",props:{badge:{required:!1,tsType:{name:"union",raw:"number | React.ReactNode",elements:[{name:"number"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},badgePosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"right"',computed:!1}}}};i.__docgenInfo={description:"",methods:[],displayName:"TabsContent"};const ia={title:"Components/Tabs",component:C,parameters:{layout:"centered"}},_={render:()=>e.jsxs(C,{defaultValue:"tab-1",className:"w-[400px]",children:[e.jsxs(y,{children:[e.jsx(o,{value:"tab-1",children:"Tab One"}),e.jsx(o,{value:"tab-2",children:"Tab Two"}),e.jsx(o,{value:"tab-3",children:"Tab Three"})]}),e.jsx(i,{value:"tab-1",children:"Content of Tab One"}),e.jsx(i,{value:"tab-2",children:"Content of Tab Two"}),e.jsx(i,{value:"tab-3",children:"Content of Tab Three"})]})},P={render:()=>e.jsxs(C,{defaultValue:"tab-1",className:"w-[400px]",children:[e.jsxs(y,{children:[e.jsx(o,{value:"tab-1",underline:!1,children:"Tab One"}),e.jsx(o,{value:"tab-2",underline:!1,children:"Tab Two"}),e.jsx(o,{value:"tab-3",underline:!1,children:"Tab Three"})]}),e.jsx(i,{value:"tab-1",children:"Content of Tab One"}),e.jsx(i,{value:"tab-2",children:"Content of Tab Two"}),e.jsx(i,{value:"tab-3",children:"Content of Tab Three"})]})},V={render:()=>e.jsxs(C,{defaultValue:"routes",className:"w-[420px]",children:[e.jsxs(y,{variant:"line",children:[e.jsx(o,{value:"routes",color:"primary",badge:17,children:"All Routes"}),e.jsx(o,{value:"messages",color:"success",badge:e.jsx("i",{className:"ti ti-mail"}),badgePosition:"left",children:"Messages"}),e.jsx(o,{value:"errors",color:"danger",badge:3,children:"Errors"})]}),e.jsx(i,{value:"routes",children:"All routes content"}),e.jsx(i,{value:"messages",children:"Messages content"}),e.jsx(i,{value:"errors",children:"Errors content"})]})},L={render:()=>e.jsxs(C,{defaultValue:"primary",className:"w-[420px]",children:[e.jsxs(y,{variant:"line",children:[e.jsx(o,{value:"primary",color:"primary",badge:12,children:"Primary"}),e.jsx(o,{value:"success",color:"success",badge:8,children:"Success"}),e.jsx(o,{value:"warning",color:"warning",badge:e.jsx("i",{className:"ti ti-bolt"}),children:"Warning"}),e.jsx(o,{value:"danger",color:"danger",badge:2,children:"Danger"})]}),e.jsx(i,{value:"primary",children:"Primary content"}),e.jsx(i,{value:"success",children:"Success content"}),e.jsx(i,{value:"warning",children:"Warning content"}),e.jsx(i,{value:"danger",children:"Danger content"})]})},D={render:()=>e.jsxs(C,{defaultValue:"inbox",orientation:"vertical",className:"flex w-[520px] h-[220px]",children:[e.jsxs(y,{variant:"line",className:"w-[180px]",children:[e.jsx(o,{value:"inbox",color:"primary",badge:24,children:"Inbox"}),e.jsx(o,{value:"alerts",color:"warning",badge:e.jsx("i",{className:"ti ti-alert-square-rounded"}),badgePosition:"left",children:"Alerts"}),e.jsx(o,{value:"spam",color:"danger",badge:5,children:"Spam"})]}),e.jsx(i,{value:"inbox",children:"Inbox content"}),e.jsx(i,{value:"alerts",children:"Alerts content"}),e.jsx(i,{value:"spam",children:"Spam content"})]})},M={render:()=>e.jsxs(C,{defaultValue:"profile",orientation:"vertical",className:"flex w-[500px] h-[200px]",children:[e.jsxs(y,{className:"w-[150px]",children:[e.jsx(o,{value:"profile",children:"Profile"}),e.jsx(o,{value:"account",children:"Account"}),e.jsx(o,{value:"security",children:"Security"})]}),e.jsx(i,{value:"profile",children:"Profile settings"}),e.jsx(i,{value:"account",children:"Account settings"}),e.jsx(i,{value:"security",children:"Security settings"})]})},G={render:()=>e.jsxs(C,{defaultValue:"general",orientation:"vertical",className:"flex w-[500px] h-[200px]",children:[e.jsxs(y,{variant:"line",className:"w-[150px]",children:[e.jsx(o,{value:"general",children:"General"}),e.jsx(o,{value:"team",children:"Team"}),e.jsx(o,{value:"plans",children:"Plans"})]}),e.jsx(i,{value:"general",children:"General settings"}),e.jsx(i,{value:"team",children:"Team settings"}),e.jsx(i,{value:"plans",children:"Plans settings"})]})};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="tab-1" className="w-[400px]">
            <TabsList>
                <TabsTrigger value="tab-1">Tab One</TabsTrigger>
                <TabsTrigger value="tab-2">Tab Two</TabsTrigger>
                <TabsTrigger value="tab-3">Tab Three</TabsTrigger>
            </TabsList>

            <TabsContent value="tab-1">
                Content of Tab One
            </TabsContent>
            <TabsContent value="tab-2">
                Content of Tab Two
            </TabsContent>
            <TabsContent value="tab-3">
                Content of Tab Three
            </TabsContent>
        </Tabs>
}`,..._.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="tab-1" className="w-[400px]">
            <TabsList>
                <TabsTrigger value="tab-1" underline={false}>Tab One</TabsTrigger>
                <TabsTrigger value="tab-2" underline={false}>Tab Two</TabsTrigger>
                <TabsTrigger value="tab-3" underline={false}>Tab Three</TabsTrigger>
            </TabsList>

            <TabsContent value="tab-1">
                Content of Tab One
            </TabsContent>
            <TabsContent value="tab-2">
                Content of Tab Two
            </TabsContent>
            <TabsContent value="tab-3">
                Content of Tab Three
            </TabsContent>
        </Tabs>
}`,...P.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="routes" className="w-[420px]">
            <TabsList variant="line">
                <TabsTrigger value="routes" color="primary" badge={17}>
                    All Routes
                </TabsTrigger>

                <TabsTrigger value="messages" color="success" badge={<i className="ti ti-mail" />} badgePosition="left">
                    Messages
                </TabsTrigger>

                <TabsTrigger value="errors" color="danger" badge={3}>
                    Errors
                </TabsTrigger>
            </TabsList>

            <TabsContent value="routes">
                All routes content
            </TabsContent>
            <TabsContent value="messages">
                Messages content
            </TabsContent>
            <TabsContent value="errors">
                Errors content
            </TabsContent>
        </Tabs>
}`,...V.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="primary" className="w-[420px]">
            <TabsList variant="line">
                <TabsTrigger value="primary" color="primary" badge={12}>
                    Primary
                </TabsTrigger>

                <TabsTrigger value="success" color="success" badge={8}>
                    Success
                </TabsTrigger>

                <TabsTrigger value="warning" color="warning" badge={<i className="ti ti-bolt" />}>
                    Warning
                </TabsTrigger>

                <TabsTrigger value="danger" color="danger" badge={2}>
                    Danger
                </TabsTrigger>
            </TabsList>

            <TabsContent value="primary">Primary content</TabsContent>
            <TabsContent value="success">Success content</TabsContent>
            <TabsContent value="warning">Warning content</TabsContent>
            <TabsContent value="danger">Danger content</TabsContent>
        </Tabs>
}`,...L.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="inbox" orientation="vertical" className="flex w-[520px] h-[220px]">
            <TabsList variant="line" className="w-[180px]">
                <TabsTrigger value="inbox" color="primary" badge={24}>
                    Inbox
                </TabsTrigger>

                <TabsTrigger value="alerts" color="warning" badge={<i className="ti ti-alert-square-rounded" />} badgePosition="left">
                    Alerts
                </TabsTrigger>

                <TabsTrigger value="spam" color="danger" badge={5}>
                    Spam
                </TabsTrigger>
            </TabsList>

            <TabsContent value="inbox">
                Inbox content
            </TabsContent>
            <TabsContent value="alerts">
                Alerts content
            </TabsContent>
            <TabsContent value="spam">
                Spam content
            </TabsContent>
        </Tabs>
}`,...D.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="profile" orientation="vertical" className="flex w-[500px] h-[200px]">
            <TabsList className="w-[150px]">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
                Profile settings
            </TabsContent>
            <TabsContent value="account">
                Account settings
            </TabsContent>
            <TabsContent value="security">
                Security settings
            </TabsContent>
        </Tabs>
}`,...M.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="general" orientation="vertical" className="flex w-[500px] h-[200px]">
            <TabsList variant="line" className="w-[150px]">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="team">Team</TabsTrigger>
                <TabsTrigger value="plans">Plans</TabsTrigger>
            </TabsList>

            <TabsContent value="general">
                General settings
            </TabsContent>
            <TabsContent value="team">
                Team settings
            </TabsContent>
            <TabsContent value="plans">
                Plans settings
            </TabsContent>
        </Tabs>
}`,...G.parameters?.docs?.source}}};const la=["DefaultHorizontal","WithoutUnderline","WithBadge","BadgeColorVariants","VerticalWithBadge","VerticalTabs","VerticalLine"];export{L as BadgeColorVariants,_ as DefaultHorizontal,G as VerticalLine,M as VerticalTabs,D as VerticalWithBadge,V as WithBadge,P as WithoutUnderline,la as __namedExportsOrder,ia as default};

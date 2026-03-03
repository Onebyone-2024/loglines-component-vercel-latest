import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as m}from"./iframe-CJ_i11_v.js";import{c as A}from"./index-Drd88ecX.js";import{c as v}from"./utils-d2XQ1MEC.js";import"./badge-CCi95o5z.js";import{u as z,c as I}from"./index-CavYJMkQ.js";import{P as S,c as k}from"./index-DObLsng8.js";import{R as H,I as K,c as R}from"./index-D6tT7G1i.js";import{P as U}from"./index-9svtF7cd.js";import{u as J}from"./index-CkyFM-lF.js";import{u as Q}from"./index-BcycfjH6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BmbXc-aZ.js";import"./index-C31pPwGT.js";import"./index-KK6rihis.js";import"./index-CQqx-bo7.js";import"./index-CrUOSnBa.js";var P="Tabs",[X]=k(P,[R]),E=R(),[Y,L]=X(P),M=m.forwardRef((t,a)=>{const{__scopeTabs:i,value:s,onValueChange:l,defaultValue:u,orientation:o="horizontal",dir:g,activationMode:x="automatic",...f}=t,d=J(g),[c,p]=z({prop:s,onChange:l,defaultProp:u??"",caller:P});return e.jsx(Y,{scope:i,baseId:Q(),value:c,onValueChange:p,orientation:o,dir:d,activationMode:x,children:e.jsx(S.div,{dir:d,"data-orientation":o,...f,ref:a})})});M.displayName=P;var D="TabsList",G=m.forwardRef((t,a)=>{const{__scopeTabs:i,loop:s=!0,...l}=t,u=L(D,i),o=E(i);return e.jsx(H,{asChild:!0,...o,orientation:u.orientation,dir:u.dir,loop:s,children:e.jsx(S.div,{role:"tablist","aria-orientation":u.orientation,...l,ref:a})})});G.displayName=D;var O="TabsTrigger",W=m.forwardRef((t,a)=>{const{__scopeTabs:i,value:s,disabled:l=!1,...u}=t,o=L(O,i),g=E(i),x=$(o.baseId,s),f=q(o.baseId,s),d=s===o.value;return e.jsx(K,{asChild:!0,...g,focusable:!l,active:d,children:e.jsx(S.button,{type:"button",role:"tab","aria-selected":d,"aria-controls":f,"data-state":d?"active":"inactive","data-disabled":l?"":void 0,disabled:l,id:x,...u,ref:a,onMouseDown:I(t.onMouseDown,c=>{!l&&c.button===0&&c.ctrlKey===!1?o.onValueChange(s):c.preventDefault()}),onKeyDown:I(t.onKeyDown,c=>{[" ","Enter"].includes(c.key)&&o.onValueChange(s)}),onFocus:I(t.onFocus,()=>{const c=o.activationMode!=="manual";!d&&!l&&c&&o.onValueChange(s)})})})});W.displayName=O;var F="TabsContent",B=m.forwardRef((t,a)=>{const{__scopeTabs:i,value:s,forceMount:l,children:u,...o}=t,g=L(F,i),x=$(g.baseId,s),f=q(g.baseId,s),d=s===g.value,c=m.useRef(d);return m.useEffect(()=>{const p=requestAnimationFrame(()=>c.current=!1);return()=>cancelAnimationFrame(p)},[]),e.jsx(U,{present:l||d,children:({present:p})=>e.jsx(S.div,{"data-state":d?"active":"inactive","data-orientation":g.orientation,role:"tabpanel","aria-labelledby":x,hidden:!p,id:f,tabIndex:0,...o,ref:a,style:{...t.style,animationDuration:c.current?"0s":void 0},children:p&&u})})});B.displayName=F;function $(t,a){return`${t}-trigger-${a}`}function q(t,a){return`${t}-content-${a}`}var Z=M,ee=G,ae=W,te=B;function b({className:t,orientation:a="horizontal",...i}){return e.jsx(Z,{"data-slot":"tabs","data-orientation":a,orientation:a,className:v("group/tabs flex gap-2 data-[orientation=horizontal]:flex-col",t),...i})}const ne=A("rounded-lg p-[3px] group-data-[orientation=horizontal]/tabs:h-9 data-[variant=line]:rounded-none group/tabs-list text-muted-foreground inline-flex w-fit items-center justify-center group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col",{variants:{variant:{default:"bg-muted",line:"gap-1 bg-transparent"}},defaultVariants:{variant:"default"}});function T({className:t,variant:a="default",...i}){return e.jsx(ee,{"data-slot":"tabs-list","data-variant":a,className:v(ne({variant:a}),t),...i})}const re=A("relative inline-flex items-center gap-2 px-2 py-1 text-sm font-medium transition-all",{variants:{color:{primary:"data-[state=active]:text-primary-1-500 data-[state=active]:after:bg-primary-1-500",secondary:"data-[state=active]:text-primary-2-500 data-[state=active]:after:bg-primary-2-500",success:"data-[state=active]:text-success-500 data-[state=active]:after:bg-success-500",warning:"data-[state=active]:text-warning-500 data-[state=active]:after:bg-warning-500",danger:"data-[state=active]:text-danger-500 data-[state=active]:after:bg-danger-500",auxiliary:"data-[state=active]:text-auxiliary-500 data-[state=active]:after:bg-auxiliary-500"},underline:{true:"after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-0.5 after:opacity-0 data-[state=active]:after:opacity-100",false:""}},defaultVariants:{color:"primary",underline:!0}}),_=A("rounded-sm px-2 py-0.5 text-xs font-medium transition-colors",{variants:{color:{primary:"bg-neutral-200 text-neutral-600 group-data-[state=active]:bg-primary-1-500 group-data-[state=active]:text-white",secondary:"bg-neutral-200 text-neutral-600 group-data-[state=active]:bg-primary-2-500 group-data-[state=active]:text-white",success:"bg-neutral-200 text-neutral-600 group-data-[state=active]:bg-success-500 group-data-[state=active]:text-white",warning:"bg-neutral-200 text-neutral-600 group-data-[state=active]:bg-warning-500 group-data-[state=active]:text-white",danger:"bg-neutral-200 text-neutral-600 group-data-[state=active]:bg-danger-500 group-data-[state=active]:text-white",auxiliary:"bg-neutral-200 text-neutral-600 group-data-[state=active]:bg-auxiliary-500 group-data-[state=active]:text-white"}},defaultVariants:{color:"primary"}});function n({className:t,badge:a,badgePosition:i="right",color:s,underline:l,children:u,...o}){return e.jsxs(ae,{"data-slot":"tabs-trigger",className:v(re({color:s,underline:l}),"group text-neutral-500 hover:text-neutral-700",t),...o,children:[a&&i==="left"&&e.jsx("span",{className:v(_({color:s})),children:a}),e.jsx("span",{children:u}),a&&i==="right"&&e.jsx("span",{className:v(_({color:s})),children:a})]})}function r({className:t,...a}){return e.jsx(te,{"data-slot":"tabs-content",className:v("flex-1 outline-none",t),...a})}b.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{orientation:{defaultValue:{value:'"horizontal"',computed:!1},required:!1}}};T.__docgenInfo={description:"",methods:[],displayName:"TabsList",props:{variant:{defaultValue:{value:'"default"',computed:!1},required:!1}}};n.__docgenInfo={description:"",methods:[],displayName:"TabsTrigger",props:{badge:{required:!1,tsType:{name:"union",raw:"number | React.ReactNode",elements:[{name:"number"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},badgePosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"right"',computed:!1}}}};r.__docgenInfo={description:"",methods:[],displayName:"TabsContent"};const Ce={title:"Components/Tabs",component:b,parameters:{layout:"centered"}},h={render:()=>e.jsxs(b,{defaultValue:"tab-1",className:"w-[400px]",children:[e.jsxs(T,{children:[e.jsx(n,{value:"tab-1",children:"Tab One"}),e.jsx(n,{value:"tab-2",children:"Tab Two"}),e.jsx(n,{value:"tab-3",children:"Tab Three"})]}),e.jsx(r,{value:"tab-1",children:"Content of Tab One"}),e.jsx(r,{value:"tab-2",children:"Content of Tab Two"}),e.jsx(r,{value:"tab-3",children:"Content of Tab Three"})]})},j={render:()=>e.jsxs(b,{defaultValue:"tab-1",className:"w-[400px]",children:[e.jsxs(T,{children:[e.jsx(n,{value:"tab-1",underline:!1,children:"Tab One"}),e.jsx(n,{value:"tab-2",underline:!1,children:"Tab Two"}),e.jsx(n,{value:"tab-3",underline:!1,children:"Tab Three"})]}),e.jsx(r,{value:"tab-1",children:"Content of Tab One"}),e.jsx(r,{value:"tab-2",children:"Content of Tab Two"}),e.jsx(r,{value:"tab-3",children:"Content of Tab Three"})]})},C={render:()=>e.jsxs(b,{defaultValue:"routes",className:"w-[420px]",children:[e.jsxs(T,{variant:"line",children:[e.jsx(n,{value:"routes",color:"primary",badge:17,children:"All Routes"}),e.jsx(n,{value:"messages",color:"success",badge:e.jsx("i",{className:"ti ti-mail"}),badgePosition:"left",children:"Messages"}),e.jsx(n,{value:"errors",color:"danger",badge:3,children:"Errors"})]}),e.jsx(r,{value:"routes",children:"All routes content"}),e.jsx(r,{value:"messages",children:"Messages content"}),e.jsx(r,{value:"errors",children:"Errors content"})]})},y={render:()=>e.jsxs(b,{defaultValue:"primary",className:"w-[420px]",children:[e.jsxs(T,{variant:"line",children:[e.jsx(n,{value:"primary",color:"primary",badge:12,children:"Primary"}),e.jsx(n,{value:"success",color:"success",badge:8,children:"Success"}),e.jsx(n,{value:"warning",color:"warning",badge:e.jsx("i",{className:"ti ti-bolt"}),children:"Warning"}),e.jsx(n,{value:"danger",color:"danger",badge:2,children:"Danger"})]}),e.jsx(r,{value:"primary",children:"Primary content"}),e.jsx(r,{value:"success",children:"Success content"}),e.jsx(r,{value:"warning",children:"Warning content"}),e.jsx(r,{value:"danger",children:"Danger content"})]})},w={render:()=>e.jsxs(b,{defaultValue:"inbox",orientation:"vertical",className:"flex w-[520px] h-[220px]",children:[e.jsxs(T,{variant:"line",className:"w-[180px]",children:[e.jsx(n,{value:"inbox",color:"primary",badge:24,children:"Inbox"}),e.jsx(n,{value:"alerts",color:"warning",badge:e.jsx("i",{className:"ti ti-alert-square-rounded"}),badgePosition:"left",children:"Alerts"}),e.jsx(n,{value:"spam",color:"danger",badge:5,children:"Spam"})]}),e.jsx(r,{value:"inbox",children:"Inbox content"}),e.jsx(r,{value:"alerts",children:"Alerts content"}),e.jsx(r,{value:"spam",children:"Spam content"})]})},N={render:()=>e.jsxs(b,{defaultValue:"profile",orientation:"vertical",className:"flex w-[500px] h-[200px]",children:[e.jsxs(T,{className:"w-[150px]",children:[e.jsx(n,{value:"profile",children:"Profile"}),e.jsx(n,{value:"account",children:"Account"}),e.jsx(n,{value:"security",children:"Security"})]}),e.jsx(r,{value:"profile",children:"Profile settings"}),e.jsx(r,{value:"account",children:"Account settings"}),e.jsx(r,{value:"security",children:"Security settings"})]})},V={render:()=>e.jsxs(b,{defaultValue:"general",orientation:"vertical",className:"flex w-[500px] h-[200px]",children:[e.jsxs(T,{variant:"line",className:"w-[150px]",children:[e.jsx(n,{value:"general",children:"General"}),e.jsx(n,{value:"team",children:"Team"}),e.jsx(n,{value:"plans",children:"Plans"})]}),e.jsx(r,{value:"general",children:"General settings"}),e.jsx(r,{value:"team",children:"Team settings"}),e.jsx(r,{value:"plans",children:"Plans settings"})]})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}};const ye=["DefaultHorizontal","WithoutUnderline","WithBadge","BadgeColorVariants","VerticalWithBadge","VerticalTabs","VerticalLine"];export{y as BadgeColorVariants,h as DefaultHorizontal,V as VerticalLine,N as VerticalTabs,w as VerticalWithBadge,C as WithBadge,j as WithoutUnderline,ye as __namedExportsOrder,Ce as default};

import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as A}from"./iframe-sOrGF-FJ.js";import"./preload-helper-PPVm8Dsz.js";const g=({items:e,selectedItem:h,onChange:v,tabFilter:u,containerClassName:I="",containerItemClass:f="",showTotalData:c=!0,disabledValues:y=[],...i})=>{const p=e.findIndex(a=>a.value===h?.value),[T,x]=A.useState(p<0?0:p),C=i.dataTestId?`${i.dataTestId}_TAB`:"";return t.jsx("div",{className:`${I} css-tab-container header-status`,children:e.map((a,d)=>{const m=y?.includes(a.value),N=!m&&(u?a.value===u.value:T===d)?"active":"inactive",S="themes-status-"+(a.className??"gray"),k=a.label;let b="";if(i.dataTestId){const D=a.label.toUpperCase().replace(/\s+/g,"_");b=`${C}_${D}`}return t.jsxs("div",{className:`item css-tab-item h-full min-h-[50px] flex flex-col justify-between ${S} ${N} ${f}  ${m?"cursor-not-allowed opacity-50 no-hover":""}`,onClick:()=>{m||(x(d),v(a))},"data-testid":b,children:[t.jsxs("div",{className:"css-tab-item-count flex-grow flex items-center",children:[k,a.totalData!==void 0&&c===!0?t.jsx("span",{children:a.totalData}):t.jsx(t.Fragment,{})]}),c&&t.jsx("span",{className:"!ml-0 w-full block !pt-[0.1px] !rounded-[1px] transition duration-300"}),c===!1&&e.length>1&&t.jsx("span",{className:"!ml-0 w-full block !pt-[0.1px] !rounded-[1px] transition duration-300"})]},d)})})};g.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{containerClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},items:{required:!0,tsType:{name:"Array",elements:[{name:"ITabItem"}],raw:"ITabItem[]"},description:""},selectedItem:{required:!1,tsType:{name:"ITabItem"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(tabItem: ITabItem) => void",signature:{arguments:[{type:{name:"ITabItem"},name:"tabItem"}],return:{name:"void"}}},description:""},tabFilter:{required:!1,tsType:{name:"any"},description:""},containerItemClass:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},showTotalData:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},dataTestId:{required:!1,tsType:{name:"string"},description:""},disabledValues:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}}}};const s=[{key:"open",value:"open",label:"Open",className:"green"},{key:"in-progress",value:"inProgress",label:"In Progress",className:"yellow"},{key:"canceled",value:"canceled",label:"Canceled",className:"red"},{key:"active",value:"active",label:"Active",className:"brand"},{key:"non-active",value:"nonActive",label:"Non Active",className:"gray"}],V={title:"Components/Tab",component:g,tags:["autodocs"]},n={args:{items:s,selectedItem:s[0],onChange:e=>console.log("Selected tab:",e)}},l={args:{items:s,selectedItem:s[1],disabledValues:["canceled","nonActive"],onChange:e=>console.log("Selected tab:",e)}},r={args:{items:s.map(e=>({...e,totalData:Math.floor(Math.random()*100)})),selectedItem:s[2],showTotalData:!0,onChange:e=>console.log("Selected tab:",e)}},o={args:{items:[{key:"parent",value:"parent",label:"Parent Tab",className:"brand-v2",childStatus:[{key:"child1",value:"child1",label:"Child 1",className:"violet"},{key:"child2",value:"child2",label:"Child 2",className:"blue"}]},...s],selectedItem:s[0],onChange:e=>console.log("Selected tab:",e)}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    items: tabs,
    selectedItem: tabs[0],
    onChange: tabItem => console.log('Selected tab:', tabItem)
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: tabs,
    selectedItem: tabs[1],
    disabledValues: ['canceled', 'nonActive'],
    onChange: tabItem => console.log('Selected tab:', tabItem)
  }
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    items: tabs.map(tab => ({
      ...tab,
      totalData: Math.floor(Math.random() * 100)
    })),
    selectedItem: tabs[2],
    showTotalData: true,
    onChange: tabItem => console.log('Selected tab:', tabItem)
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      key: 'parent',
      value: 'parent',
      label: 'Parent Tab',
      className: 'brand-v2',
      childStatus: [{
        key: 'child1',
        value: 'child1',
        label: 'Child 1',
        className: 'violet'
      }, {
        key: 'child2',
        value: 'child2',
        label: 'Child 2',
        className: 'blue'
      }]
    }, ...tabs],
    selectedItem: tabs[0],
    onChange: tabItem => console.log('Selected tab:', tabItem)
  }
}`,...o.parameters?.docs?.source}}};const _=["Default","WithDisabled","WithTotalData","WithChildStatus"];export{n as Default,o as WithChildStatus,l as WithDisabled,r as WithTotalData,_ as __namedExportsOrder,V as default};

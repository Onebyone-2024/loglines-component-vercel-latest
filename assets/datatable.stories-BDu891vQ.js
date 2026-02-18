import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as D}from"./utils-BEHD0UYf.js";import{T as S}from"./table-KxXkARA4.js";import{P as b}from"./pagination-CvhsLxyy.js";import{r as f}from"./iframe-sOrGF-FJ.js";import"./spinner-BuW5qLLj.js";import"./preload-helper-PPVm8Dsz.js";function c({data:a,isLoading:t=!1,pagination:n,onPageChange:s,columnConfig:o,rowConfig:i,checkboxConfig:r,className:x,maxHeight:d="500px",showPaginationInfo:P=!1,showPaginationTop:v=!1,showPaginationBottom:w=!0,customFooterComponent:C}){const T=n&&s;return e.jsxs("div",{"data-slot":"datatable-container",className:D("w-full h-full flex flex-col bg-white rounded-lg",x),children:[v&&T&&e.jsx("div",{className:"flex-shrink-0 border-b border-neutral-200",children:e.jsx(b,{meta:n,onPageChange:s,showPageInfo:P,className:"border-t-0"})}),e.jsx("div",{className:"flex-1 overflow-auto min-w-0",children:e.jsx(S,{data:a,isLoading:t,columnConfig:o,rowConfig:i,checkboxConfig:r,maxHeight:d})}),w&&T||C?e.jsxs("div",{className:"flex-shrink-0",children:[T&&e.jsx("div",{className:"flex-1",children:e.jsx(b,{meta:n,onPageChange:s,showPageInfo:P,className:"border-t-0 px-0"})}),C&&e.jsx("div",{className:"flex-1",children:e.jsx("div",{className:"w-full",children:C})})]}):null]})}c.__docgenInfo={description:"",methods:[],displayName:"DataTable",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},pagination:{required:!1,tsType:{name:"union",raw:"IPaginationMeta | null",elements:[{name:"IPaginationMeta"},{name:"null"}]},description:""},onPageChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},columnConfig:{required:!0,tsType:{name:"Array",elements:[{name:"ITableColumnConfig",elements:[{name:"T"}],raw:"ITableColumnConfig<T>"}],raw:"ITableColumnConfig<T>[]"},description:""},rowConfig:{required:!1,tsType:{name:"ITableRowConfig",elements:[{name:"T"}],raw:"ITableRowConfig<T>"},description:""},checkboxConfig:{required:!1,tsType:{name:"ITableCheckboxConfig",elements:[{name:"T"}],raw:"ITableCheckboxConfig<T>"},description:""},className:{required:!1,tsType:{name:"string"},description:""},maxHeight:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"500px"',computed:!1}},showPaginationInfo:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showItemsInfo:{required:!1,tsType:{name:"boolean"},description:""},showPaginationTop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showPaginationBottom:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},paginationClassName:{required:!1,tsType:{name:"string"},description:""},customFooterComponent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const W={title:"Components/DataTable",component:c,parameters:{layout:"padded"},tags:["autodocs"]},y=a=>{const t=["Admin","User","Manager","Developer","Designer"],n=["active","inactive","pending"],s=["Engineering","Marketing","Sales","HR","Finance","Operations"],o=["John Doe","Jane Smith","Alice Johnson","Bob Williams","Charlie Brown","Diana Prince","Eva Green","Frank Castle","Grace Hopper","Henry Ford"];return Array.from({length:a},(i,r)=>({id:r+1,name:o[r%o.length],email:`user${r+1}@example.com`,role:t[r%t.length],status:n[r%n.length],joinDate:new Date(2020+r%5,r%12,r%28+1).toISOString().split("T")[0],department:s[r%s.length]}))},l=y(150),h=[{accessor:"id",headerText:"ID",columnWidth:80,sort:!0},{accessor:"name",headerText:"Name",columnWidth:200,sort:!0},{accessor:"email",headerText:"Email",columnWidth:250,columnEllipsis:!0,sort:!0},{accessor:"role",headerText:"Role",columnWidth:120,columnEllipsis:!0,sort:!0},{accessor:"status",headerText:"Status",columnWidth:120,columnText:({data:a})=>{const t={active:"bg-green-100 text-green-800",inactive:"bg-red-100 text-red-800",pending:"bg-yellow-100 text-yellow-800"};return e.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${t[a.status]}`,children:a.status.toUpperCase()})}},{accessor:"department",headerText:"Department",columnWidth:150,sort:!0,flexible:!0},{accessor:"joinDate",headerText:"Join Date",columnWidth:120,sort:!0,flexible:!0}],u={args:{data:[],columnConfig:[]},render:()=>{const[a,t]=f.useState(1),n=10,s=l.length,o=Math.ceil(s/n),i=l.slice((a-1)*n,a*n);return e.jsx("div",{className:"h-[600px]",children:e.jsx(c,{data:i,columnConfig:h,pagination:{currentPage:a,pageSize:n,totalItems:s,totalPages:o},onPageChange:t})})}},m={args:{data:[],columnConfig:[]},render:()=>{const a=l.slice(0,20);return e.jsx("div",{className:"h-[600px]",children:e.jsx(c,{data:a,columnConfig:h,pagination:null})})}},g={args:{data:[],columnConfig:[]},render:()=>{const[a]=f.useState(1),t=10,n=l.length,s=Math.ceil(n/t);return e.jsx("div",{className:"h-[600px]",children:e.jsx(c,{data:[],isLoading:!0,columnConfig:h,pagination:{currentPage:a,pageSize:t,totalItems:n,totalPages:s},onPageChange:()=>{}})})}},p={args:{data:[],columnConfig:[]},render:()=>{const[a,t]=f.useState(1),[n,s]=f.useState(null),o=10,i=l.length,r=Math.ceil(i/o),x=l.slice((a-1)*o,a*o);return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"h-[600px]",children:e.jsx(c,{data:x,columnConfig:h,pagination:{currentPage:a,pageSize:o,totalItems:i,totalPages:r},onPageChange:t,rowConfig:{onClick:d=>{s(d),alert(`Clicked: ${d.name}`)}}})}),n&&e.jsx("div",{className:"p-4 bg-green-50 border border-green-200 rounded-md",children:e.jsxs("p",{className:"text-sm font-medium text-green-900",children:["Last clicked: ",n.name," (",n.email,")"]})})]})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    columnConfig: []
  },
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;
    const totalItems = userData.length;
    const totalPages = Math.ceil(totalItems / pageSize);

    // Paginate data
    const paginatedData = userData.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    return <div className="h-[600px]">
        <DataTable data={paginatedData} columnConfig={userColumns} pagination={{
        currentPage,
        pageSize,
        totalItems,
        totalPages
      }} onPageChange={setCurrentPage} />
      </div>;
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    columnConfig: []
  },
  render: () => {
    // Show only first 20 items without pagination
    const displayData = userData.slice(0, 20);
    return <div className="h-[600px]">
        <DataTable data={displayData} columnConfig={userColumns} pagination={null} />
      </div>;
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    columnConfig: []
  },
  render: () => {
    const [currentPage] = useState(1);
    const pageSize = 10;
    const totalItems = userData.length;
    const totalPages = Math.ceil(totalItems / pageSize);
    return <div className="h-[600px]">
        <DataTable data={[]} isLoading={true} columnConfig={userColumns} pagination={{
        currentPage,
        pageSize,
        totalItems,
        totalPages
      }} onPageChange={() => {}} />
      </div>;
  }
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    columnConfig: []
  },
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [clickedRow, setClickedRow] = useState<UserData | null>(null);
    const pageSize = 10;
    const totalItems = userData.length;
    const totalPages = Math.ceil(totalItems / pageSize);
    const paginatedData = userData.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    return <div className="space-y-4">
        <div className="h-[600px]">
          <DataTable data={paginatedData} columnConfig={userColumns} pagination={{
          currentPage,
          pageSize,
          totalItems,
          totalPages
        }} onPageChange={setCurrentPage} rowConfig={{
          onClick: data => {
            setClickedRow(data);
            alert(\`Clicked: \${data.name}\`);
          }
        }} />
        </div>

        {clickedRow && <div className="p-4 bg-green-50 border border-green-200 rounded-md">
            <p className="text-sm font-medium text-green-900">
              Last clicked: {clickedRow.name} ({clickedRow.email})
            </p>
          </div>}
      </div>;
  }
}`,...p.parameters?.docs?.source}}};const M=["Default","WithoutPagination","Loading","WithRowClick"];export{u as Default,g as Loading,p as WithRowClick,m as WithoutPagination,M as __namedExportsOrder,W as default};

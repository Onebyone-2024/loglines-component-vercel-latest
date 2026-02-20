import{j as t}from"./jsx-runtime-u17CrQMm.js";import{T as d}from"./table-BnExuqxi.js";import{r as c}from"./iframe-qX5Rn-ky.js";import"./utils-d2XQ1MEC.js";import"./spinner-BZ584zS1.js";import"./preload-helper-PPVm8Dsz.js";const G={title:"Components/Table",component:d,parameters:{layout:"padded"},tags:["autodocs"]},E=()=>t.jsx("svg",{className:"w-3 h-3",fill:"currentColor",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"})}),M=({className:e})=>t.jsx("svg",{className:e||"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})}),V=({className:e})=>t.jsx("svg",{className:e||"w-4 h-4",fill:"currentColor",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"})}),J=e=>{const s=["ACTIVE","INACTIVE"],n=["Box Truck / CDE","Flatbed / CDE","Reefer / CDE","Tanker / CDE","Dump Truck / CDE","Cargo Van / CDE","Sprinter Van / CDE","Standard Truck / ...","Minibus / CDE"],i=["Darna","Jessica","Michael","Sara","David","Emily","Sarah","James","Linda","John","Maria","Robert","Patricia","William","Jennifer","Richard","Elizabeth","Thomas","Susan","Charles"],a=["Gani","Lee","Smith","Johnson","Brown","Wilson","Thompson","Garcia","Martinez","Davis","Rodriguez","Miller","Anderson","Taylor","Thomas","Moore","Jackson","Martin","White","Harris"];return Array.from({length:e},(F,l)=>{const H=l+1,k=l===10?"INACTIVE":s[Math.floor(Math.random()*s.length)];return{driverNo:`DRV-${String(H).padStart(3,"0")}`,vehicleNo:`VH-${String(H).padStart(3,"0")}`,driverName:`${i[l%i.length]} ${a[l%a.length]}`,statusDriver:k,completedJob:Math.floor(Math.random()*500)+50,vehicleType:n[l%n.length]}})},A=e=>{const s=["Emily Cooper","John Smith","Sarah Johnson","Michael Brown"],n=["EC","JS","SJ","MB"];return Array.from({length:e},(i,a)=>({chip:"Chip",status:"Completed",text:"Text",amount:1e6+Math.floor(Math.random()*5e5),userName:s[a%s.length],userInitials:n[a%n.length],date:"20-01-2026, 08:56 AM"}))},r=J(300),W=A(100),o=[{accessor:"driverNo",headerText:"Driver No",sort:!0,columnWidth:120,columnClassName:"font-medium text-blue-600",headerTooltip:"Driver identification number"},{accessor:"vehicleNo",headerText:"Vehicle No",sort:!0,columnWidth:120,headerTooltip:"Vehicle registration number"},{accessor:"driverName",headerText:"Driver Name",sort:!0,columnWidth:180,headerTooltip:"Full name of the driver"},{accessor:"statusDriver",headerText:"Status Driver",sort:!0,columnWidth:150,headerTooltip:"Current driver status (Active/Inactive)",columnText:({data:e})=>t.jsx("span",{className:`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${e.statusDriver==="ACTIVE"?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,title:`Driver is ${e.statusDriver}`,children:e.statusDriver})},{accessor:"completedJob",headerText:"Completed Job",sort:!0,columnWidth:150,headerTooltip:"Number of completed jobs by this driver",columnText:({data:e})=>`${e.completedJob} Jobs`},{accessor:"vehicleType",headerText:"Vehicle Type",sort:!1,columnWidth:200,columnEllipsis:!0,headerTooltip:"Type of vehicle assigned"}],I=[{accessor:"chip",headerText:"Text",sort:!1,columnWidth:100,headerTooltip:"Badge/Chip indicator",columnText:({data:e})=>t.jsxs("span",{className:"inline-flex items-center gap-1 bg-primary-1-500 text-white px-3 py-1 rounded-full text-xs font-medium",children:[t.jsx("span",{children:"▶"}),t.jsx("span",{children:e.chip}),t.jsx("span",{children:"▶"})]})},{accessor:"status",headerText:"Text",sort:!1,columnWidth:150,headerTooltip:"Completion status",columnText:({data:e})=>t.jsxs("span",{className:"inline-flex items-center gap-1.5 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium",children:[t.jsx(E,{}),t.jsx("span",{children:e.status})]})},{accessor:"text",headerText:"Text",sort:!1,columnWidth:100,columnText:({data:e})=>t.jsx("span",{className:"text-sm",children:e.text})},{accessor:"amount",headerText:"Text",sort:!0,columnWidth:180,headerTooltip:"Transaction amount in IDR",columnText:({data:e})=>t.jsxs("span",{className:"text-sm font-medium",children:["Rp. ",e.amount.toLocaleString("id-ID")]})},{accessor:"userName",headerText:"Text",sort:!1,columnWidth:180,headerTooltip:"User who performed the action",columnText:({data:e})=>t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("div",{className:"w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center text-xs font-medium text-neutral-700",title:e.userName,children:e.userInitials}),t.jsx("span",{className:"text-sm",children:e.userName})]})},{accessor:"date",headerText:"Text",sort:!1,columnWidth:220,headerTooltip:"Date and time of the transaction",columnText:({data:e})=>t.jsxs("div",{className:"flex items-center gap-2",title:e.date,children:[t.jsx(M,{className:"w-4 h-4 text-neutral-500"}),t.jsx("span",{className:"text-sm text-neutral-600",children:e.date})]})},{accessor:"chip",headerText:"",sort:!1,columnWidth:50,headerTooltip:"Actions",columnText:()=>t.jsx("button",{className:"p-1 hover:bg-neutral-100 rounded transition-colors",title:"More actions",children:t.jsx(V,{className:"w-4 h-4 text-neutral-600"})})}],m={args:{data:r.slice(0,5),columnConfig:o,maxHeight:"400px"}},u={args:{data:r.slice(0,100),columnConfig:o,maxHeight:"400px"}},x={args:{data:r.slice(0,50),columnConfig:o.map(e=>({...e,sort:!0})),maxHeight:"450px"}},R=[{accessor:"driverNo",headerText:"Driver No",sort:!0,columnWidth:120,columnClassName:"font-medium text-blue-600",flexible:!1,headerTooltip:"Driver identification number"},{accessor:"driverName",headerText:"Driver Name",sort:!0,flexible:!0,headerTooltip:"Full name of the driver"},{accessor:"statusDriver",headerText:"Status",sort:!0,columnWidth:120,flexible:!1,headerTooltip:"Current driver status",columnText:({data:e})=>t.jsx("span",{className:`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${e.statusDriver==="ACTIVE"?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,title:`Driver is ${e.statusDriver}`,children:e.statusDriver})},{accessor:"completedJob",headerText:"Jobs",sort:!0,columnWidth:100,flexible:!1,headerTooltip:"Number of completed jobs"}],p={args:{data:r.slice(0,50),columnConfig:R,maxHeight:"400px"}},$=[{accessor:"driverNo",headerText:"Driver No",sort:!0,flexible:!0,headerTooltip:"Driver identification number"},{accessor:"driverName",headerText:"Driver Name",sort:!0,flexible:!0,headerTooltip:"Full name of the driver"},{accessor:"vehicleNo",headerText:"Vehicle No",sort:!0,flexible:!0,headerTooltip:"Vehicle registration number"},{accessor:"statusDriver",headerText:"Status",sort:!0,flexible:!0,headerTooltip:"Current driver status",columnText:({data:e})=>t.jsx("span",{className:`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${e.statusDriver==="ACTIVE"?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,title:`Driver is ${e.statusDriver}`,children:e.statusDriver})}],h={args:{data:r.slice(0,50),columnConfig:$,maxHeight:"400px"}},g={args:{data:W.slice(0,20),columnConfig:I,maxHeight:"500px"}},f={args:{data:r.slice(0,50),columnConfig:o,maxHeight:"400px"}},C={args:{data:r,columnConfig:o,maxHeight:"500px"}},b={args:{data:r.slice(0,50),columnConfig:o,maxHeight:"400px",rowConfig:{onClick:(e,s)=>{alert(`Clicked on ${e.driverName} (Row ${s+1})`)}}}},v={args:{data:[],columnConfig:o,isLoading:!0}},D={args:{data:r,columnConfig:o,maxHeight:"300px"}},T={args:{data:r.slice(0,50),columnConfig:o,maxHeight:"400px",className:"shadow-lg",rowConfig:{rowOverlayClassName:"hover:bg-blue-50"}}},z=[{accessor:"driverNo",headerText:()=>t.jsx("span",{className:"flex items-center gap-1",children:"🚗 Driver No"}),sort:!0,columnWidth:140},{accessor:"vehicleNo",headerText:()=>t.jsx("span",{className:"flex items-center gap-1",children:"🚚 Vehicle No"}),sort:!0,columnWidth:140},{accessor:"driverName",headerText:()=>t.jsx("span",{className:"flex items-center gap-1",children:"👤 Driver Name"}),sort:!0,columnWidth:200},{accessor:"statusDriver",headerText:"Status",sort:!0,columnWidth:150,columnText:({data:e})=>t.jsx("span",{className:`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${e.statusDriver==="ACTIVE"?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,children:e.statusDriver})},{accessor:"completedJob",headerText:"Jobs",sort:!0,columnWidth:120,columnText:({data:e})=>t.jsx("span",{className:"font-semibold text-purple-600",children:e.completedJob})},{accessor:"vehicleType",headerText:"Vehicle Type",columnWidth:200}],N={args:{data:r.slice(0,100),columnConfig:z,maxHeight:"450px"}},S={render:()=>{const s=W.slice(0,10);return t.jsx(d,{data:s,columnConfig:I,maxHeight:"600px"})}},j={render:()=>{const[e,s]=c.useState([]),[n,i]=c.useState([]);return t.jsxs("div",{children:[t.jsxs("div",{className:"mb-4 p-4 bg-blue-50 rounded-lg",children:[t.jsxs("p",{className:"text-sm font-medium text-neutral-900",children:["Selected rows:"," ",e.length>0?e.join(", "):"None"]}),n.length>0&&t.jsxs("p",{className:"text-xs text-neutral-600 mt-2",children:["Drivers: ",n.map(a=>a.driverName).join(", ")]})]}),t.jsx(d,{data:r.slice(0,10),columnConfig:o,maxHeight:"400px",checkboxConfig:{enabled:!0,onSelectionChange:a=>{s(a.indices),i(a.data)}}})]})}},y={render:()=>{const[e,s]=c.useState([]),[n,i]=c.useState([]);return t.jsxs("div",{children:[t.jsxs("div",{className:"mb-4 p-4 bg-blue-50 rounded-lg",children:[t.jsxs("p",{className:"text-sm font-medium text-neutral-900",children:["Selected: ",e.length," row",e.length!==1?"s":""]}),e.length>0&&t.jsxs("div",{className:"text-xs text-neutral-600 mt-2",children:[t.jsxs("p",{children:["Indices: ",e.join(", ")]}),t.jsxs("p",{className:"mt-1",children:["Users: ",n.map(a=>a.userName).join(", ")]})]})]}),t.jsx(d,{data:W.slice(0,20),columnConfig:I,maxHeight:"500px",checkboxConfig:{enabled:!0,onSelectionChange:a=>{s(a.indices),i(a.data)}}})]})}},w={render:()=>{const[e,s]=c.useState([]),[n,i]=c.useState([]);return t.jsxs("div",{children:[t.jsxs("div",{className:"mb-4 p-4 bg-blue-50 rounded-lg",children:[t.jsxs("p",{className:"text-sm font-medium text-neutral-900",children:["Selected rows:"," ",e.length>0?e.join(", "):"None"]}),t.jsx("p",{className:"text-xs text-neutral-600 mt-1",children:"Try selecting rows and then sorting columns"}),n.length>0&&t.jsxs("p",{className:"text-xs text-neutral-600 mt-2",children:["Drivers: ",n.map(a=>a.driverName).join(", ")]})]}),t.jsx(d,{data:r.slice(0,50),columnConfig:o.map(a=>({...a,sort:!0})),maxHeight:"400px",checkboxConfig:{enabled:!0,onSelectionChange:a=>{s(a.indices),i(a.data)}}})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    data: dummyData.slice(0, 5),
    columnConfig: columnConfig as any,
    maxHeight: "400px"
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    data: dummyData.slice(0, 100),
    columnConfig: columnConfig as any,
    maxHeight: "400px"
  }
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    data: dummyData.slice(0, 50),
    columnConfig: columnConfig.map(col => ({
      ...col,
      sort: true
    })) as any,
    maxHeight: "450px"
  }
}`,...x.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    data: dummyData.slice(0, 50),
    columnConfig: flexibleColumnConfig as any,
    maxHeight: "400px"
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    data: dummyData.slice(0, 50),
    columnConfig: allFlexibleColumnConfig as any,
    maxHeight: "400px"
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    data: complexData.slice(0, 20),
    columnConfig: complexColumnConfig as any,
    maxHeight: "500px"
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    data: dummyData.slice(0, 50),
    columnConfig: columnConfig as any,
    maxHeight: "400px"
  }
}`,...f.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    data: dummyData,
    columnConfig: columnConfig as any,
    maxHeight: "500px"
  }
}`,...C.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    data: dummyData.slice(0, 50),
    columnConfig: columnConfig as any,
    maxHeight: "400px",
    rowConfig: {
      onClick: (data: any, idx) => {
        alert(\`Clicked on \${data.driverName} (Row \${idx + 1})\`);
      }
    }
  }
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    columnConfig: columnConfig as any,
    isLoading: true
  }
}`,...v.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    data: dummyData,
    columnConfig: columnConfig as any,
    maxHeight: "300px"
  }
}`,...D.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    data: dummyData.slice(0, 50),
    columnConfig: columnConfig as any,
    maxHeight: "400px",
    className: "shadow-lg",
    rowConfig: {
      rowOverlayClassName: "hover:bg-blue-50"
    }
  }
}`,...T.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    data: dummyData.slice(0, 100),
    columnConfig: customColumnConfig as any,
    maxHeight: "450px"
  }
}`,...N.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const pageSize = 10;
    const paginatedData = complexData.slice(0, pageSize);
    return <Table data={paginatedData} columnConfig={complexColumnConfig as any} maxHeight="600px" />;
  }
}`,...S.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
    const [selectedData, setSelectedData] = useState<DriverData[]>([]);
    return <div>
        <div className="mb-4 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm font-medium text-neutral-900">
            Selected rows:{" "}
            {selectedIndices.length > 0 ? selectedIndices.join(", ") : "None"}
          </p>
          {selectedData.length > 0 && <p className="text-xs text-neutral-600 mt-2">
              Drivers: {selectedData.map(d => d.driverName).join(", ")}
            </p>}
        </div>
        <Table data={dummyData.slice(0, 10)} columnConfig={columnConfig as any} maxHeight="400px" checkboxConfig={{
        enabled: true,
        onSelectionChange: selection => {
          setSelectedIndices(selection.indices);
          setSelectedData(selection.data as DriverData[]);
        }
      }} />
      </div>;
  }
}`,...j.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
    const [selectedData, setSelectedData] = useState<ComplexRowData[]>([]);
    return <div>
        <div className="mb-4 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm font-medium text-neutral-900">
            Selected: {selectedIndices.length} row
            {selectedIndices.length !== 1 ? "s" : ""}
          </p>
          {selectedIndices.length > 0 && <div className="text-xs text-neutral-600 mt-2">
              <p>Indices: {selectedIndices.join(", ")}</p>
              <p className="mt-1">
                Users: {selectedData.map(d => d.userName).join(", ")}
              </p>
            </div>}
        </div>
        <Table data={complexData.slice(0, 20)} columnConfig={complexColumnConfig as any} maxHeight="500px" checkboxConfig={{
        enabled: true,
        onSelectionChange: selection => {
          setSelectedIndices(selection.indices);
          setSelectedData(selection.data as ComplexRowData[]);
        }
      }} />
      </div>;
  }
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
    const [selectedData, setSelectedData] = useState<DriverData[]>([]);
    return <div>
        <div className="mb-4 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm font-medium text-neutral-900">
            Selected rows:{" "}
            {selectedIndices.length > 0 ? selectedIndices.join(", ") : "None"}
          </p>
          <p className="text-xs text-neutral-600 mt-1">
            Try selecting rows and then sorting columns
          </p>
          {selectedData.length > 0 && <p className="text-xs text-neutral-600 mt-2">
              Drivers: {selectedData.map(d => d.driverName).join(", ")}
            </p>}
        </div>
        <Table data={dummyData.slice(0, 50)} columnConfig={columnConfig.map(col => ({
        ...col,
        sort: true
      })) as any} maxHeight="400px" checkboxConfig={{
        enabled: true,
        onSelectionChange: selection => {
          setSelectedIndices(selection.indices);
          setSelectedData(selection.data as DriverData[]);
        }
      }} />
      </div>;
  }
}`,...w.parameters?.docs?.source}}};const q=["Simple","ScrollableTable","SortableTable","WithFlexibleColumns","AllFlexibleColumns","ComplexTable","Default","With300Rows","WithRowClick","Loading","CustomHeight","WithCustomStyling","WithCustomHeaders","ComplexTableWithPagination","WithCheckbox","WithCheckboxComplex","WithCheckboxAndSorting"];export{h as AllFlexibleColumns,g as ComplexTable,S as ComplexTableWithPagination,D as CustomHeight,f as Default,v as Loading,u as ScrollableTable,m as Simple,x as SortableTable,C as With300Rows,j as WithCheckbox,w as WithCheckboxAndSorting,y as WithCheckboxComplex,N as WithCustomHeaders,T as WithCustomStyling,p as WithFlexibleColumns,b as WithRowClick,q as __namedExportsOrder,G as default};

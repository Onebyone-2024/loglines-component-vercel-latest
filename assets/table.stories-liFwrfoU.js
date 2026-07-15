import{j as e}from"./jsx-runtime-u17CrQMm.js";import{T as l}from"./table-Law_N1r-.js";import{r as c}from"./iframe-cymgwYXB.js";import"./utils-d2XQ1MEC.js";import"./spinner-bC0TpJ2S.js";import"./preload-helper-PPVm8Dsz.js";const ie={title:"Components/Table",component:l,parameters:{layout:"padded"},tags:["autodocs"]},K=()=>e.jsx("svg",{className:"w-3 h-3",fill:"currentColor",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"})}),Q=({className:t})=>e.jsx("svg",{className:t||"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})}),X=({className:t})=>e.jsx("svg",{className:t||"w-4 h-4",fill:"currentColor",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"})}),P=t=>{const n=["ACTIVE","INACTIVE"],s=["Box Truck / CDE","Flatbed / CDE","Reefer / CDE","Tanker / CDE","Dump Truck / CDE","Cargo Van / CDE","Sprinter Van / CDE","Standard Truck / ...","Minibus / CDE"],o=["Darna","Jessica","Michael","Sara","David","Emily","Sarah","James","Linda","John","Maria","Robert","Patricia","William","Jennifer","Richard","Elizabeth","Thomas","Susan","Charles"],a=["Gani","Lee","Smith","Johnson","Brown","Wilson","Thompson","Garcia","Martinez","Davis","Rodriguez","Miller","Anderson","Taylor","Thomas","Moore","Jackson","Martin","White","Harris"];return Array.from({length:t},(_,d)=>{const O=d+1,q=d===10?"INACTIVE":n[Math.floor(Math.random()*n.length)];return{driverNo:`DRV-${String(O).padStart(3,"0")}`,vehicleNo:`VH-${String(O).padStart(3,"0")}`,driverName:`${o[d%o.length]} ${a[d%a.length]}`,statusDriver:q,completedJob:Math.floor(Math.random()*500)+50,vehicleType:s[d%s.length]}})},U=t=>{const n=["Emily Cooper","John Smith","Sarah Johnson","Michael Brown"],s=["EC","JS","SJ","MB"];return Array.from({length:t},(o,a)=>({chip:"Chip",status:"Completed",text:"Text",amount:1e6+Math.floor(Math.random()*5e5),userName:n[a%n.length],userInitials:s[a%s.length],date:"20-01-2026, 08:56 AM"}))},i=P(300),F=U(100),r=[{accessor:"driverNo",headerText:"Driver No",sort:!0,columnWidth:120,columnClassName:"font-medium text-blue-600",headerTooltip:"Driver identification number"},{accessor:"vehicleNo",headerText:"Vehicle No",sort:!0,columnWidth:120,headerTooltip:"Vehicle registration number"},{accessor:"driverName",headerText:"Driver Name",sort:!0,columnWidth:180,headerTooltip:"Full name of the driver"},{accessor:"statusDriver",headerText:"Status Driver",sort:!0,columnWidth:150,headerTooltip:"Current driver status (Active/Inactive)",columnText:({data:t})=>e.jsx("span",{className:`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${t.statusDriver==="ACTIVE"?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,title:`Driver is ${t.statusDriver}`,children:t.statusDriver})},{accessor:"completedJob",headerText:"Completed Job",sort:!0,columnWidth:150,headerTooltip:"Number of completed jobs by this driver",columnText:({data:t})=>`${t.completedJob} Jobs`},{accessor:"vehicleType",headerText:"Vehicle Type",sort:!1,columnWidth:200,columnEllipsis:!0,headerTooltip:"Type of vehicle assigned"}],m=[{accessor:"chip",headerText:"Text",sort:!1,columnWidth:100,headerTooltip:"Badge/Chip indicator",columnText:({data:t})=>e.jsxs("span",{className:"inline-flex items-center gap-1 bg-primary-1-500 text-white px-3 py-1 rounded-full text-xs font-medium",children:[e.jsx("span",{children:"▶"}),e.jsx("span",{children:t.chip}),e.jsx("span",{children:"▶"})]})},{accessor:"status",headerText:"Text",sort:!1,columnWidth:150,headerTooltip:"Completion status",columnText:({data:t})=>e.jsxs("span",{className:"inline-flex items-center gap-1.5 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium",children:[e.jsx(K,{}),e.jsx("span",{children:t.status})]})},{accessor:"text",headerText:"Text",sort:!1,columnWidth:100,columnText:({data:t})=>e.jsx("span",{className:"text-sm",children:t.text})},{accessor:"amount",headerText:"Text",sort:!0,columnWidth:180,headerTooltip:"Transaction amount in IDR",columnText:({data:t})=>e.jsxs("span",{className:"text-sm font-medium",children:["Rp. ",t.amount.toLocaleString("id-ID")]})},{accessor:"userName",headerText:"Text",sort:!1,columnWidth:180,headerTooltip:"User who performed the action",columnText:({data:t})=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center text-xs font-medium text-neutral-700",title:t.userName,children:t.userInitials}),e.jsx("span",{className:"text-sm",children:t.userName})]})},{accessor:"date",headerText:"Text",sort:!1,columnWidth:220,headerTooltip:"Date and time of the transaction",columnText:({data:t})=>e.jsxs("div",{className:"flex items-center gap-2",title:t.date,children:[e.jsx(Q,{className:"w-4 h-4 text-neutral-500"}),e.jsx("span",{className:"text-sm text-neutral-600",children:t.date})]})},{accessor:"chip",headerText:"",sort:!1,columnWidth:50,headerTooltip:"Actions",columnText:()=>e.jsx("button",{className:"p-1 hover:bg-neutral-100 rounded transition-colors",title:"More actions",children:e.jsx(X,{className:"w-4 h-4 text-neutral-600"})})}],u={args:{data:i.slice(0,5),columnConfig:r,maxHeight:"400px"}},x={args:{data:i.slice(0,100),columnConfig:r,maxHeight:"400px"}},p={args:{data:i.slice(0,50),columnConfig:r.map(t=>({...t,sort:!0})),maxHeight:"450px"}},Y=[{accessor:"driverNo",headerText:"Driver No",sort:!0,columnWidth:120,columnClassName:"font-medium text-blue-600",flexible:!1,headerTooltip:"Driver identification number"},{accessor:"driverName",headerText:"Driver Name",sort:!0,flexible:!0,headerTooltip:"Full name of the driver"},{accessor:"statusDriver",headerText:"Status",sort:!0,columnWidth:120,flexible:!1,headerTooltip:"Current driver status",columnText:({data:t})=>e.jsx("span",{className:`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${t.statusDriver==="ACTIVE"?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,title:`Driver is ${t.statusDriver}`,children:t.statusDriver})},{accessor:"completedJob",headerText:"Jobs",sort:!0,columnWidth:100,flexible:!1,headerTooltip:"Number of completed jobs"}],g={args:{data:i.slice(0,50),columnConfig:Y,maxHeight:"400px"}},G=[{accessor:"driverNo",headerText:"Driver No",sort:!0,flexible:!0,headerTooltip:"Driver identification number"},{accessor:"driverName",headerText:"Driver Name",sort:!0,flexible:!0,headerTooltip:"Full name of the driver"},{accessor:"vehicleNo",headerText:"Vehicle No",sort:!0,flexible:!0,headerTooltip:"Vehicle registration number"},{accessor:"statusDriver",headerText:"Status",sort:!0,flexible:!0,headerTooltip:"Current driver status",columnText:({data:t})=>e.jsx("span",{className:`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${t.statusDriver==="ACTIVE"?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,title:`Driver is ${t.statusDriver}`,children:t.statusDriver})}],h={args:{data:i.slice(0,50),columnConfig:G,maxHeight:"400px"}},b={args:{data:F.slice(0,20),columnConfig:m,maxHeight:"500px"}},f={args:{data:i.slice(0,50),columnConfig:r,maxHeight:"400px"}},C={args:{data:i,columnConfig:r,maxHeight:"500px"}},v={args:{data:i.slice(0,50),columnConfig:r,maxHeight:"400px",rowConfig:{onClick:(t,n)=>{alert(`Clicked on ${t.driverName} (Row ${n+1})`)}}}},N={args:{data:[],columnConfig:r,isLoading:!0,maxHeight:"400px"}},D={args:{data:[],columnConfig:r,isLoading:!0,loadingVariant:"spinner",maxHeight:"400px"}},S={args:{data:[],columnConfig:r,isLoading:!0,loadingRowCount:8,maxHeight:"400px",checkboxConfig:{enabled:!0},action:()=>null}},T={render:()=>{const[t,n]=c.useState(!1);return e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("button",{className:"self-start px-3 py-1.5 text-sm rounded bg-blue-50 text-blue-600 hover:bg-blue-100",onClick:()=>{n(!0),setTimeout(()=>n(!1),2e3)},children:"Refetch (2s)"}),e.jsx(l,{data:i.slice(0,20),columnConfig:r,isLoading:t,maxHeight:"400px"})]})}},j={args:{data:[],columnConfig:r,maxHeight:"400px"}},y={args:{data:[],columnConfig:r.map(t=>({...t,columnWidth:300})),maxHeight:"400px"}},H={args:{data:[],columnConfig:r,maxHeight:"500px",minBodyHeight:400}},w={args:{data:[],columnConfig:r,maxHeight:"400px",emptyState:e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("i",{className:"ti ti-database-off text-4xl text-neutral-300"}),e.jsx("p",{className:"text-sm font-medium text-neutral-500",children:"Tidak ada data driver"}),e.jsx("p",{className:"text-xs text-neutral-400",children:"Tambahkan driver baru untuk mulai menggunakan tabel ini"})]})}},k={args:{data:i,columnConfig:r,maxHeight:"300px"}},W={args:{data:i.slice(0,50),columnConfig:r,maxHeight:"400px",className:"shadow-lg",rowConfig:{rowOverlayClassName:"hover:bg-blue-50"}}},Z=[{accessor:"driverNo",headerText:()=>e.jsx("span",{className:"flex items-center gap-1",children:"🚗 Driver No"}),sort:!0,columnWidth:140},{accessor:"vehicleNo",headerText:()=>e.jsx("span",{className:"flex items-center gap-1",children:"🚚 Vehicle No"}),sort:!0,columnWidth:140},{accessor:"driverName",headerText:()=>e.jsx("span",{className:"flex items-center gap-1",children:"👤 Driver Name"}),sort:!0,columnWidth:200},{accessor:"statusDriver",headerText:"Status",sort:!0,columnWidth:150,columnText:({data:t})=>e.jsx("span",{className:`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${t.statusDriver==="ACTIVE"?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,children:t.statusDriver})},{accessor:"completedJob",headerText:({data:t})=>e.jsxs("span",{className:"flex items-center gap-1",children:["🧰 Jobs (",t.reduce((n,s)=>n+(s.completedJob??0),0),")"]}),sort:!0,columnWidth:120,columnText:({data:t})=>e.jsx("span",{className:"font-semibold text-purple-600",children:t.completedJob})},{accessor:"vehicleType",headerText:"Vehicle Type",columnWidth:200}],I={args:{data:i.slice(0,100),columnConfig:Z,maxHeight:"450px"}},E={render:()=>{const n=F.slice(0,10);return e.jsx(l,{data:n,columnConfig:m,maxHeight:"600px"})}},A={render:()=>{const[t,n]=c.useState([]),[s,o]=c.useState([]);return e.jsxs("div",{children:[e.jsxs("div",{className:"mb-4 p-4 bg-blue-50 rounded-lg",children:[e.jsxs("p",{className:"text-sm font-medium text-neutral-900",children:["Selected rows:"," ",t.length>0?t.join(", "):"None"]}),s.length>0&&e.jsxs("p",{className:"text-xs text-neutral-600 mt-2",children:["Drivers: ",s.map(a=>a.driverName).join(", ")]})]}),e.jsx(l,{data:i.slice(0,10),columnConfig:r,maxHeight:"400px",checkboxConfig:{enabled:!0,onSelectionChange:a=>{n(a.indices),o(a.data)}}})]})}},L={render:()=>{const[t,n]=c.useState([]),[s,o]=c.useState([]);return e.jsxs("div",{children:[e.jsxs("div",{className:"mb-4 p-4 bg-blue-50 rounded-lg",children:[e.jsxs("p",{className:"text-sm font-medium text-neutral-900",children:["Selected: ",t.length," row",t.length!==1?"s":""]}),t.length>0&&e.jsxs("div",{className:"text-xs text-neutral-600 mt-2",children:[e.jsxs("p",{children:["Indices: ",t.join(", ")]}),e.jsxs("p",{className:"mt-1",children:["Users: ",s.map(a=>a.userName).join(", ")]})]})]}),e.jsx(l,{data:F.slice(0,20),columnConfig:m,maxHeight:"500px",checkboxConfig:{enabled:!0,onSelectionChange:a=>{n(a.indices),o(a.data)}}})]})}},V={render:()=>{const[t,n]=c.useState([]),[s,o]=c.useState([]);return e.jsxs("div",{children:[e.jsxs("div",{className:"mb-4 p-4 bg-blue-50 rounded-lg",children:[e.jsxs("p",{className:"text-sm font-medium text-neutral-900",children:["Selected rows:"," ",t.length>0?t.join(", "):"None"]}),e.jsx("p",{className:"text-xs text-neutral-600 mt-1",children:"Try selecting rows and then sorting columns"}),s.length>0&&e.jsxs("p",{className:"text-xs text-neutral-600 mt-2",children:["Drivers: ",s.map(a=>a.driverName).join(", ")]})]}),e.jsx(l,{data:i.slice(0,50),columnConfig:r.map(a=>({...a,sort:!0})),maxHeight:"400px",checkboxConfig:{enabled:!0,onSelectionChange:a=>{n(a.indices),o(a.data)}}})]})}},ee=t=>P(t).map((n,s)=>({...n,details:U(3+s%3)})),B=ee(20),J={render:()=>e.jsx(l,{data:B,columnConfig:r,maxHeight:"500px",rowConfig:{onClick:()=>{console.log("klick row")}},expandable:{render:t=>e.jsx(l,{data:t.details,columnConfig:m,maxHeight:"250px"})}})},M={render:()=>{const[t,n]=c.useState([]);return e.jsxs("div",{children:[e.jsxs("div",{className:"mb-4 p-4 bg-blue-50 rounded-lg text-sm",children:["Selected rows: ",t.length>0?t.join(", "):"None"]}),e.jsx(l,{data:B,columnConfig:r,maxHeight:"500px",checkboxConfig:{enabled:!0,onSelectionChange:s=>n(s.indices)},rowConfig:{onClick:()=>{console.log("klick row")}},expandable:{render:s=>e.jsx(l,{data:s.details,columnConfig:m,maxHeight:"200px"})}})]})}},R={render:()=>e.jsx(l,{data:B,columnConfig:r,maxHeight:"500px",expandable:{render:t=>e.jsx("div",{className:"p-4 bg-neutral-50 rounded-md",children:e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"Driver:"})," ",t.driverName]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"Vehicle:"})," ",t.vehicleNo]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"Jobs:"})," ",t.completedJob]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"Status:"})," ",t.statusDriver]})]})})}})},$={render:()=>{const[t,n]=c.useState(i.slice(0,10)),s=o=>{n(a=>a.filter((_,d)=>d!==o))};return e.jsx(l,{data:t,columnConfig:r,maxHeight:"400px",action:(o,a)=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{className:"px-3 py-1 text-xs rounded bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors",onClick:()=>alert(`Edit: ${o.driverName}`),children:"Edit"}),e.jsx("button",{className:"px-3 py-1 text-xs rounded bg-red-50 text-red-600 hover:bg-red-100 transition-colors",onClick:()=>s(a),children:"Delete"})]})})}},z={render:()=>{const[t,n]=c.useState(i.slice(0,10)),s=o=>{n(a=>a.filter((_,d)=>d!==o))};return e.jsx(l,{data:t,columnConfig:G,maxHeight:"400px",action:(o,a)=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{className:"px-3 py-1 text-xs rounded bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors",onClick:()=>alert(`Edit: ${o.driverName}`),children:"Edit"}),e.jsx("button",{className:"px-3 py-1 text-xs rounded bg-red-50 text-red-600 hover:bg-red-100 transition-colors",onClick:()=>s(a),children:"Delete"})]})})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    data: dummyData.slice(0, 5),
    columnConfig: columnConfig as any,
    maxHeight: "400px"
  }
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    data: dummyData.slice(0, 100),
    columnConfig: columnConfig as any,
    maxHeight: "400px"
  }
}`,...x.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    data: dummyData.slice(0, 50),
    columnConfig: columnConfig.map(col => ({
      ...col,
      sort: true
    })) as any,
    maxHeight: "450px"
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    data: dummyData.slice(0, 50),
    columnConfig: flexibleColumnConfig as any,
    maxHeight: "400px"
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    data: dummyData.slice(0, 50),
    columnConfig: allFlexibleColumnConfig as any,
    maxHeight: "400px"
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    data: complexData.slice(0, 20),
    columnConfig: complexColumnConfig as any,
    maxHeight: "500px"
  }
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    columnConfig: columnConfig as any,
    isLoading: true,
    maxHeight: "400px"
  }
}`,...N.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    columnConfig: columnConfig as any,
    isLoading: true,
    loadingVariant: "spinner",
    maxHeight: "400px"
  }
}`,...D.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    columnConfig: columnConfig as any,
    isLoading: true,
    loadingRowCount: 8,
    maxHeight: "400px",
    checkboxConfig: {
      enabled: true
    },
    action: () => null
  }
}`,...S.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isLoading, setIsLoading] = useState(false);
    return <div className="flex flex-col gap-3">
        <button className="self-start px-3 py-1.5 text-sm rounded bg-blue-50 text-blue-600 hover:bg-blue-100" onClick={() => {
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 2000);
      }}>
          Refetch (2s)
        </button>
        <Table data={dummyData.slice(0, 20)} columnConfig={columnConfig as any} isLoading={isLoading} maxHeight="400px" />
      </div>;
  }
}`,...T.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    columnConfig: columnConfig as any,
    maxHeight: "400px"
  }
}`,...j.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    columnConfig: columnConfig.map(col => ({
      ...col,
      columnWidth: 300
    })) as any,
    maxHeight: "400px"
  }
}`,...y.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    columnConfig: columnConfig as any,
    maxHeight: "500px",
    minBodyHeight: 400
  }
}`,...H.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    columnConfig: columnConfig as any,
    maxHeight: "400px",
    emptyState: <div className="flex flex-col items-center gap-2">
        <i className="ti ti-database-off text-4xl text-neutral-300" />
        <p className="text-sm font-medium text-neutral-500">Tidak ada data driver</p>
        <p className="text-xs text-neutral-400">Tambahkan driver baru untuk mulai menggunakan tabel ini</p>
      </div>
  }
}`,...w.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    data: dummyData,
    columnConfig: columnConfig as any,
    maxHeight: "300px"
  }
}`,...k.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    data: dummyData.slice(0, 50),
    columnConfig: columnConfig as any,
    maxHeight: "400px",
    className: "shadow-lg",
    rowConfig: {
      rowOverlayClassName: "hover:bg-blue-50"
    }
  }
}`,...W.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    data: dummyData.slice(0, 100),
    columnConfig: customColumnConfig as any,
    maxHeight: "450px"
  }
}`,...I.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const pageSize = 10;
    const paginatedData = complexData.slice(0, pageSize);
    return <Table data={paginatedData} columnConfig={complexColumnConfig as any} maxHeight="600px" />;
  }
}`,...E.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Table data={nestedData} columnConfig={columnConfig as any} maxHeight="500px" rowConfig={{
      onClick: () => {
        console.log('klick row');
      }
    }} expandable={{
      render: (row: DriverWithDetail) => <Table data={row.details} columnConfig={complexColumnConfig as any} maxHeight="250px" />
    }} />;
  }
}`,...J.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<number[]>([]);
    return <div>
        <div className="mb-4 p-4 bg-blue-50 rounded-lg text-sm">
          Selected rows: {selected.length > 0 ? selected.join(", ") : "None"}
        </div>

        <Table data={nestedData} columnConfig={columnConfig as any} maxHeight="500px" checkboxConfig={{
        enabled: true,
        onSelectionChange: s => setSelected(s.indices)
      }} rowConfig={{
        onClick: () => {
          console.log('klick row');
        }
      }} expandable={{
        render: (row: DriverWithDetail) => <Table data={row.details} columnConfig={complexColumnConfig as any} maxHeight="200px" />
      }} />
      </div>;
  }
}`,...M.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Table data={nestedData} columnConfig={columnConfig as any} maxHeight="500px" expandable={{
      render: (row: DriverWithDetail) => <div className="p-4 bg-neutral-50 rounded-md">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Driver:</span>{" "}
                  {row.driverName}
                </div>
                <div>
                  <span className="font-medium">Vehicle:</span>{" "}
                  {row.vehicleNo}
                </div>
                <div>
                  <span className="font-medium">Jobs:</span>{" "}
                  {row.completedJob}
                </div>
                <div>
                  <span className="font-medium">Status:</span>{" "}
                  {row.statusDriver}
                </div>
              </div>
            </div>
    }} />;
  }
}`,...R.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [data, setData] = useState(dummyData.slice(0, 10));
    const handleDelete = (idx: number) => {
      setData(prev => prev.filter((_, i) => i !== idx));
    };
    return <Table data={data} columnConfig={columnConfig as any} maxHeight="400px" action={(row: DriverData, idx) => <div className="flex items-center gap-2">
            <button className="px-3 py-1 text-xs rounded bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors" onClick={() => alert(\`Edit: \${row.driverName}\`)}>
              Edit
            </button>
            <button className="px-3 py-1 text-xs rounded bg-red-50 text-red-600 hover:bg-red-100 transition-colors" onClick={() => handleDelete(idx)}>
              Delete
            </button>
          </div>} />;
  }
}`,...$.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [data, setData] = useState(dummyData.slice(0, 10));
    const handleDelete = (idx: number) => {
      setData(prev => prev.filter((_, i) => i !== idx));
    };
    return <Table data={data} columnConfig={allFlexibleColumnConfig as any} maxHeight="400px" action={(row: DriverData, idx) => <div className="flex items-center gap-2">
            <button className="px-3 py-1 text-xs rounded bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors" onClick={() => alert(\`Edit: \${row.driverName}\`)}>
              Edit
            </button>
            <button className="px-3 py-1 text-xs rounded bg-red-50 text-red-600 hover:bg-red-100 transition-colors" onClick={() => handleDelete(idx)}>
              Delete
            </button>
          </div>} />;
  }
}`,...z.parameters?.docs?.source}}};const le=["Simple","ScrollableTable","SortableTable","WithFlexibleColumns","AllFlexibleColumns","ComplexTable","Default","With300Rows","WithRowClick","Loading","LoadingSpinner","LoadingWithCheckboxAndAction","Refetching","EmptyState","EmptyStateHorizontalScroll","EmptyStateTallBody","EmptyStateCustom","CustomHeight","WithCustomStyling","WithCustomHeaders","ComplexTableWithPagination","WithCheckbox","WithCheckboxComplex","WithCheckboxAndSorting","ExpandableTable","ExpandableWithCheckbox","ExpandableCustomContent","WithAction","WithActionAllFlexible"];export{h as AllFlexibleColumns,b as ComplexTable,E as ComplexTableWithPagination,k as CustomHeight,f as Default,j as EmptyState,w as EmptyStateCustom,y as EmptyStateHorizontalScroll,H as EmptyStateTallBody,R as ExpandableCustomContent,J as ExpandableTable,M as ExpandableWithCheckbox,N as Loading,D as LoadingSpinner,S as LoadingWithCheckboxAndAction,T as Refetching,x as ScrollableTable,u as Simple,p as SortableTable,C as With300Rows,$ as WithAction,z as WithActionAllFlexible,A as WithCheckbox,V as WithCheckboxAndSorting,L as WithCheckboxComplex,I as WithCustomHeaders,W as WithCustomStyling,g as WithFlexibleColumns,v as WithRowClick,le as __namedExportsOrder,ie as default};

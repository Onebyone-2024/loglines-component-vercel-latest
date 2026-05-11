import{j as e}from"./jsx-runtime-u17CrQMm.js";import{T as l}from"./table-BO9t4aoG.js";import{r as d}from"./iframe-yeqx6y-b.js";import"./utils-d2XQ1MEC.js";import"./spinner-1JoOqGWG.js";import"./preload-helper-PPVm8Dsz.js";const ee={title:"Components/Table",component:l,parameters:{layout:"padded"},tags:["autodocs"]},B=()=>e.jsx("svg",{className:"w-3 h-3",fill:"currentColor",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"})}),_=({className:t})=>e.jsx("svg",{className:t||"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})}),O=({className:t})=>e.jsx("svg",{className:t||"w-4 h-4",fill:"currentColor",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"})}),R=t=>{const s=["ACTIVE","INACTIVE"],n=["Box Truck / CDE","Flatbed / CDE","Reefer / CDE","Tanker / CDE","Dump Truck / CDE","Cargo Van / CDE","Sprinter Van / CDE","Standard Truck / ...","Minibus / CDE"],r=["Darna","Jessica","Michael","Sara","David","Emily","Sarah","James","Linda","John","Maria","Robert","Patricia","William","Jennifer","Richard","Elizabeth","Thomas","Susan","Charles"],a=["Gani","Lee","Smith","Johnson","Brown","Wilson","Thompson","Garcia","Martinez","Davis","Rodriguez","Miller","Anderson","Taylor","Thomas","Moore","Jackson","Martin","White","Harris"];return Array.from({length:t},(M,c)=>{const $=c+1,L=c===10?"INACTIVE":s[Math.floor(Math.random()*s.length)];return{driverNo:`DRV-${String($).padStart(3,"0")}`,vehicleNo:`VH-${String($).padStart(3,"0")}`,driverName:`${r[c%r.length]} ${a[c%a.length]}`,statusDriver:L,completedJob:Math.floor(Math.random()*500)+50,vehicleType:n[c%n.length]}})},F=t=>{const s=["Emily Cooper","John Smith","Sarah Johnson","Michael Brown"],n=["EC","JS","SJ","MB"];return Array.from({length:t},(r,a)=>({chip:"Chip",status:"Completed",text:"Text",amount:1e6+Math.floor(Math.random()*5e5),userName:s[a%s.length],userInitials:n[a%n.length],date:"20-01-2026, 08:56 AM"}))},o=R(300),V=F(100),i=[{accessor:"driverNo",headerText:"Driver No",sort:!0,columnWidth:120,columnClassName:"font-medium text-blue-600",headerTooltip:"Driver identification number"},{accessor:"vehicleNo",headerText:"Vehicle No",sort:!0,columnWidth:120,headerTooltip:"Vehicle registration number"},{accessor:"driverName",headerText:"Driver Name",sort:!0,columnWidth:180,headerTooltip:"Full name of the driver"},{accessor:"statusDriver",headerText:"Status Driver",sort:!0,columnWidth:150,headerTooltip:"Current driver status (Active/Inactive)",columnText:({data:t})=>e.jsx("span",{className:`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${t.statusDriver==="ACTIVE"?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,title:`Driver is ${t.statusDriver}`,children:t.statusDriver})},{accessor:"completedJob",headerText:"Completed Job",sort:!0,columnWidth:150,headerTooltip:"Number of completed jobs by this driver",columnText:({data:t})=>`${t.completedJob} Jobs`},{accessor:"vehicleType",headerText:"Vehicle Type",sort:!1,columnWidth:200,columnEllipsis:!0,headerTooltip:"Type of vehicle assigned"}],m=[{accessor:"chip",headerText:"Text",sort:!1,columnWidth:100,headerTooltip:"Badge/Chip indicator",columnText:({data:t})=>e.jsxs("span",{className:"inline-flex items-center gap-1 bg-primary-1-500 text-white px-3 py-1 rounded-full text-xs font-medium",children:[e.jsx("span",{children:"▶"}),e.jsx("span",{children:t.chip}),e.jsx("span",{children:"▶"})]})},{accessor:"status",headerText:"Text",sort:!1,columnWidth:150,headerTooltip:"Completion status",columnText:({data:t})=>e.jsxs("span",{className:"inline-flex items-center gap-1.5 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium",children:[e.jsx(B,{}),e.jsx("span",{children:t.status})]})},{accessor:"text",headerText:"Text",sort:!1,columnWidth:100,columnText:({data:t})=>e.jsx("span",{className:"text-sm",children:t.text})},{accessor:"amount",headerText:"Text",sort:!0,columnWidth:180,headerTooltip:"Transaction amount in IDR",columnText:({data:t})=>e.jsxs("span",{className:"text-sm font-medium",children:["Rp. ",t.amount.toLocaleString("id-ID")]})},{accessor:"userName",headerText:"Text",sort:!1,columnWidth:180,headerTooltip:"User who performed the action",columnText:({data:t})=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center text-xs font-medium text-neutral-700",title:t.userName,children:t.userInitials}),e.jsx("span",{className:"text-sm",children:t.userName})]})},{accessor:"date",headerText:"Text",sort:!1,columnWidth:220,headerTooltip:"Date and time of the transaction",columnText:({data:t})=>e.jsxs("div",{className:"flex items-center gap-2",title:t.date,children:[e.jsx(_,{className:"w-4 h-4 text-neutral-500"}),e.jsx("span",{className:"text-sm text-neutral-600",children:t.date})]})},{accessor:"chip",headerText:"",sort:!1,columnWidth:50,headerTooltip:"Actions",columnText:()=>e.jsx("button",{className:"p-1 hover:bg-neutral-100 rounded transition-colors",title:"More actions",children:e.jsx(O,{className:"w-4 h-4 text-neutral-600"})})}],u={args:{data:o.slice(0,5),columnConfig:i,maxHeight:"400px"}},x={args:{data:o.slice(0,100),columnConfig:i,maxHeight:"400px"}},p={args:{data:o.slice(0,50),columnConfig:i.map(t=>({...t,sort:!0})),maxHeight:"450px"}},P=[{accessor:"driverNo",headerText:"Driver No",sort:!0,columnWidth:120,columnClassName:"font-medium text-blue-600",flexible:!1,headerTooltip:"Driver identification number"},{accessor:"driverName",headerText:"Driver Name",sort:!0,flexible:!0,headerTooltip:"Full name of the driver"},{accessor:"statusDriver",headerText:"Status",sort:!0,columnWidth:120,flexible:!1,headerTooltip:"Current driver status",columnText:({data:t})=>e.jsx("span",{className:`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${t.statusDriver==="ACTIVE"?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,title:`Driver is ${t.statusDriver}`,children:t.statusDriver})},{accessor:"completedJob",headerText:"Jobs",sort:!0,columnWidth:100,flexible:!1,headerTooltip:"Number of completed jobs"}],h={args:{data:o.slice(0,50),columnConfig:P,maxHeight:"400px"}},z=[{accessor:"driverNo",headerText:"Driver No",sort:!0,flexible:!0,headerTooltip:"Driver identification number"},{accessor:"driverName",headerText:"Driver Name",sort:!0,flexible:!0,headerTooltip:"Full name of the driver"},{accessor:"vehicleNo",headerText:"Vehicle No",sort:!0,flexible:!0,headerTooltip:"Vehicle registration number"},{accessor:"statusDriver",headerText:"Status",sort:!0,flexible:!0,headerTooltip:"Current driver status",columnText:({data:t})=>e.jsx("span",{className:`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${t.statusDriver==="ACTIVE"?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,title:`Driver is ${t.statusDriver}`,children:t.statusDriver})}],g={args:{data:o.slice(0,50),columnConfig:z,maxHeight:"400px"}},b={args:{data:V.slice(0,20),columnConfig:m,maxHeight:"500px"}},C={args:{data:o.slice(0,50),columnConfig:i,maxHeight:"400px"}},f={args:{data:o,columnConfig:i,maxHeight:"500px"}},v={args:{data:o.slice(0,50),columnConfig:i,maxHeight:"400px",rowConfig:{onClick:(t,s)=>{alert(`Clicked on ${t.driverName} (Row ${s+1})`)}}}},D={args:{data:[],columnConfig:i,isLoading:!0}},N={args:{data:o,columnConfig:i,maxHeight:"300px"}},T={args:{data:o.slice(0,50),columnConfig:i,maxHeight:"400px",className:"shadow-lg",rowConfig:{rowOverlayClassName:"hover:bg-blue-50"}}},U=[{accessor:"driverNo",headerText:()=>e.jsx("span",{className:"flex items-center gap-1",children:"🚗 Driver No"}),sort:!0,columnWidth:140},{accessor:"vehicleNo",headerText:()=>e.jsx("span",{className:"flex items-center gap-1",children:"🚚 Vehicle No"}),sort:!0,columnWidth:140},{accessor:"driverName",headerText:()=>e.jsx("span",{className:"flex items-center gap-1",children:"👤 Driver Name"}),sort:!0,columnWidth:200},{accessor:"statusDriver",headerText:"Status",sort:!0,columnWidth:150,columnText:({data:t})=>e.jsx("span",{className:`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${t.statusDriver==="ACTIVE"?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,children:t.statusDriver})},{accessor:"completedJob",headerText:"Jobs",sort:!0,columnWidth:120,columnText:({data:t})=>e.jsx("span",{className:"font-semibold text-purple-600",children:t.completedJob})},{accessor:"vehicleType",headerText:"Vehicle Type",columnWidth:200}],S={args:{data:o.slice(0,100),columnConfig:U,maxHeight:"450px"}},j={render:()=>{const s=V.slice(0,10);return e.jsx(l,{data:s,columnConfig:m,maxHeight:"600px"})}},y={render:()=>{const[t,s]=d.useState([]),[n,r]=d.useState([]);return e.jsxs("div",{children:[e.jsxs("div",{className:"mb-4 p-4 bg-blue-50 rounded-lg",children:[e.jsxs("p",{className:"text-sm font-medium text-neutral-900",children:["Selected rows:"," ",t.length>0?t.join(", "):"None"]}),n.length>0&&e.jsxs("p",{className:"text-xs text-neutral-600 mt-2",children:["Drivers: ",n.map(a=>a.driverName).join(", ")]})]}),e.jsx(l,{data:o.slice(0,10),columnConfig:i,maxHeight:"400px",checkboxConfig:{enabled:!0,onSelectionChange:a=>{s(a.indices),r(a.data)}}})]})}},w={render:()=>{const[t,s]=d.useState([]),[n,r]=d.useState([]);return e.jsxs("div",{children:[e.jsxs("div",{className:"mb-4 p-4 bg-blue-50 rounded-lg",children:[e.jsxs("p",{className:"text-sm font-medium text-neutral-900",children:["Selected: ",t.length," row",t.length!==1?"s":""]}),t.length>0&&e.jsxs("div",{className:"text-xs text-neutral-600 mt-2",children:[e.jsxs("p",{children:["Indices: ",t.join(", ")]}),e.jsxs("p",{className:"mt-1",children:["Users: ",n.map(a=>a.userName).join(", ")]})]})]}),e.jsx(l,{data:V.slice(0,20),columnConfig:m,maxHeight:"500px",checkboxConfig:{enabled:!0,onSelectionChange:a=>{s(a.indices),r(a.data)}}})]})}},W={render:()=>{const[t,s]=d.useState([]),[n,r]=d.useState([]);return e.jsxs("div",{children:[e.jsxs("div",{className:"mb-4 p-4 bg-blue-50 rounded-lg",children:[e.jsxs("p",{className:"text-sm font-medium text-neutral-900",children:["Selected rows:"," ",t.length>0?t.join(", "):"None"]}),e.jsx("p",{className:"text-xs text-neutral-600 mt-1",children:"Try selecting rows and then sorting columns"}),n.length>0&&e.jsxs("p",{className:"text-xs text-neutral-600 mt-2",children:["Drivers: ",n.map(a=>a.driverName).join(", ")]})]}),e.jsx(l,{data:o.slice(0,50),columnConfig:i.map(a=>({...a,sort:!0})),maxHeight:"400px",checkboxConfig:{enabled:!0,onSelectionChange:a=>{s(a.indices),r(a.data)}}})]})}},G=t=>R(t).map((s,n)=>({...s,details:F(3+n%3)})),A=G(20),H={render:()=>e.jsx(l,{data:A,columnConfig:i,maxHeight:"500px",rowConfig:{onClick:()=>{console.log("klick row")}},expandable:{render:t=>e.jsx(l,{data:t.details,columnConfig:m,maxHeight:"250px"})}})},k={render:()=>{const[t,s]=d.useState([]);return e.jsxs("div",{children:[e.jsxs("div",{className:"mb-4 p-4 bg-blue-50 rounded-lg text-sm",children:["Selected rows: ",t.length>0?t.join(", "):"None"]}),e.jsx(l,{data:A,columnConfig:i,maxHeight:"500px",checkboxConfig:{enabled:!0,onSelectionChange:n=>s(n.indices)},rowConfig:{onClick:()=>{console.log("klick row")}},expandable:{render:n=>e.jsx(l,{data:n.details,columnConfig:m,maxHeight:"200px"})}})]})}},I={render:()=>e.jsx(l,{data:A,columnConfig:i,maxHeight:"500px",expandable:{render:t=>e.jsx("div",{className:"p-4 bg-neutral-50 rounded-md",children:e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"Driver:"})," ",t.driverName]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"Vehicle:"})," ",t.vehicleNo]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"Jobs:"})," ",t.completedJob]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"Status:"})," ",t.statusDriver]})]})})}})},E={render:()=>{const[t,s]=d.useState(o.slice(0,10)),n=r=>{s(a=>a.filter((M,c)=>c!==r))};return e.jsx(l,{data:t,columnConfig:i,maxHeight:"400px",action:(r,a)=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{className:"px-3 py-1 text-xs rounded bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors",onClick:()=>alert(`Edit: ${r.driverName}`),children:"Edit"}),e.jsx("button",{className:"px-3 py-1 text-xs rounded bg-red-50 text-red-600 hover:bg-red-100 transition-colors",onClick:()=>n(a),children:"Delete"})]})})}},J={render:()=>{const[t,s]=d.useState(o.slice(0,10)),n=r=>{s(a=>a.filter((M,c)=>c!==r))};return e.jsx(l,{data:t,columnConfig:z,maxHeight:"400px",action:(r,a)=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{className:"px-3 py-1 text-xs rounded bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors",onClick:()=>alert(`Edit: ${r.driverName}`),children:"Edit"}),e.jsx("button",{className:"px-3 py-1 text-xs rounded bg-red-50 text-red-600 hover:bg-red-100 transition-colors",onClick:()=>n(a),children:"Delete"})]})})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    data: dummyData.slice(0, 50),
    columnConfig: flexibleColumnConfig as any,
    maxHeight: "400px"
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    data: dummyData.slice(0, 50),
    columnConfig: allFlexibleColumnConfig as any,
    maxHeight: "400px"
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    data: complexData.slice(0, 20),
    columnConfig: complexColumnConfig as any,
    maxHeight: "500px"
  }
}`,...b.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    data: dummyData.slice(0, 50),
    columnConfig: columnConfig as any,
    maxHeight: "400px"
  }
}`,...C.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    data: dummyData,
    columnConfig: columnConfig as any,
    maxHeight: "500px"
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    columnConfig: columnConfig as any,
    isLoading: true
  }
}`,...D.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    data: dummyData,
    columnConfig: columnConfig as any,
    maxHeight: "300px"
  }
}`,...N.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    data: dummyData.slice(0, 50),
    columnConfig: columnConfig as any,
    maxHeight: "400px",
    className: "shadow-lg",
    rowConfig: {
      rowOverlayClassName: "hover:bg-blue-50"
    }
  }
}`,...T.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    data: dummyData.slice(0, 100),
    columnConfig: customColumnConfig as any,
    maxHeight: "450px"
  }
}`,...S.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const pageSize = 10;
    const paginatedData = complexData.slice(0, pageSize);
    return <Table data={paginatedData} columnConfig={complexColumnConfig as any} maxHeight="600px" />;
  }
}`,...j.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Table data={nestedData} columnConfig={columnConfig as any} maxHeight="500px" rowConfig={{
      onClick: () => {
        console.log('klick row');
      }
    }} expandable={{
      render: (row: DriverWithDetail) => <Table data={row.details} columnConfig={complexColumnConfig as any} maxHeight="250px" />
    }} />;
  }
}`,...H.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}};const te=["Simple","ScrollableTable","SortableTable","WithFlexibleColumns","AllFlexibleColumns","ComplexTable","Default","With300Rows","WithRowClick","Loading","CustomHeight","WithCustomStyling","WithCustomHeaders","ComplexTableWithPagination","WithCheckbox","WithCheckboxComplex","WithCheckboxAndSorting","ExpandableTable","ExpandableWithCheckbox","ExpandableCustomContent","WithAction","WithActionAllFlexible"];export{g as AllFlexibleColumns,b as ComplexTable,j as ComplexTableWithPagination,N as CustomHeight,C as Default,I as ExpandableCustomContent,H as ExpandableTable,k as ExpandableWithCheckbox,D as Loading,x as ScrollableTable,u as Simple,p as SortableTable,f as With300Rows,E as WithAction,J as WithActionAllFlexible,y as WithCheckbox,W as WithCheckboxAndSorting,w as WithCheckboxComplex,S as WithCustomHeaders,T as WithCustomStyling,h as WithFlexibleColumns,v as WithRowClick,te as __namedExportsOrder,ee as default};

const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./pdf-preview-YWGadj2l.js","./jsx-runtime-u17CrQMm.js","./iframe-DfV2U1i9.js","./preload-helper-PPVm8Dsz.js","./iframe-ljtWNEqi.css"])))=>i.map(i=>d[i]);
import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as c,R as N}from"./iframe-DfV2U1i9.js";import{_ as I}from"./preload-helper-PPVm8Dsz.js";const O=c.lazy(()=>I(()=>import("./pdf-preview-YWGadj2l.js").then(t=>t.z),__vite__mapDeps([0,1,2,3,4]),import.meta.url)),E=t=>{const n=t.split(/[?#]/)[0].split(".").pop()?.toLowerCase();return{pdf:"application/pdf",png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",webp:"image/webp",svg:"image/svg+xml"}[n||""]||""};class V extends N.Component{state={failed:!1};static getDerivedStateFromError(){return{failed:!0}}render(){return this.state.failed?this.props.fallback:this.props.children}}const u=({file:t,fileUrl:n="",fileType:s="",fileName:p="",heightClassName:F="h-[calc(100vh-16rem)]",wasmUrl:d})=>{const e=t??n,m=p||(typeof File<"u"&&e instanceof File?e.name:""),[r,B]=c.useState(),[g,C]=c.useState(0),[k,$]=c.useState(!1);if(c.useEffect(()=>{let i;$(!1);try{let f;const h=typeof e=="string"?e.replace(/\s/g,""):"",S=h.startsWith("JVBERi0")?"application/pdf":h.startsWith("/9j/")?"image/jpeg":h.startsWith("iVBORw0KGgo")?"image/png":h.startsWith("R0lGOD")?"image/gif":"";let o=s||(e instanceof Blob?e.type:"")||E(m);if(e instanceof Blob)f=e;else if(e.startsWith("data:")){const l=/^data:([^;,]*)(;base64)?,([\s\S]*)$/.exec(e);if(!l)throw new Error("Invalid document data URL");o=s||l[1]||o;const R=l[2]?Uint8Array.from(atob(l[3].replace(/\s/g,"")),L=>L.charCodeAt(0)):new TextEncoder().encode(decodeURIComponent(l[3]));f=new Blob([R],{type:o})}else if(e&&(S||!/^(https?:|blob:|\/|\.\.?\/)/i.test(e))&&/^[A-Za-z0-9+/\s]+={0,2}$/.test(e)&&(o||S)){o||=S;const l=atob(e.replace(/\s/g,""));f=new Blob([Uint8Array.from(l,R=>R.charCodeAt(0))],{type:o})}else typeof e=="string"&&(o||=E(e));f&&(i=URL.createObjectURL(f)),B({input:e,url:i||String(e),type:o})}catch{B({input:e,url:"",type:"",error:"Unable to read this document. Check the file or base64 data."})}return()=>{i&&URL.revokeObjectURL(i)}},[e,s,m,g]),!e)return a.jsx("p",{children:"No document to preview"});if(!r||r.input!==e)return a.jsx("p",{role:"status",children:"Loading document..."});if(r.error)return a.jsx("p",{role:"alert",children:r.error});const T=a.jsxs("a",{href:r.url,download:m||!0,target:"_blank",rel:"noopener noreferrer",className:"inline-block mt-2 underline",children:["Download ",m||"document"]});return r.type.startsWith("image/")?k?a.jsxs("div",{role:"alert",children:["Unable to load image. ",T,a.jsx("button",{type:"button",onClick:()=>C(i=>i+1),className:"ml-3 underline",children:"Try again"})]}):a.jsx("img",{src:r.url,alt:m||"Preview",className:"w-full h-full object-contain",onError:()=>$(!0)},`${r.url}-${g}`):r.type==="application/pdf"?a.jsxs("div",{className:"w-full",children:[a.jsx("div",{className:`w-full ${F}`,children:a.jsx(V,{fallback:a.jsx("p",{role:"alert",children:"Unable to load PDF viewer. Try again or download the document."}),children:a.jsx(c.Suspense,{fallback:a.jsx("p",{role:"status",children:"Loading PDF viewer..."}),children:a.jsx(O,{url:r.url,wasmOverride:d},`${r.url}-${g}`)})},`${r.url}-${g}`)}),a.jsxs("div",{className:"p-2",children:[T,a.jsx("button",{type:"button",onClick:()=>C(i=>i+1),className:"ml-3 underline",children:"Reload PDF"})]})]}):a.jsxs("div",{className:"p-4",children:[a.jsx("p",{children:"This file type is not supported for preview. Please download to view it."}),T]})};u.__docgenInfo={description:"",methods:[],displayName:"PreviewDocument",props:{file:{required:!1,tsType:{name:"union",raw:"File | Blob | string",elements:[{name:"File"},{name:"Blob"},{name:"string"}]},description:""},fileUrl:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},fileType:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},fileName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},heightClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"h-[calc(100vh-16rem)]"',computed:!1}},wasmUrl:{required:!1,tsType:{name:"string"},description:""}}};const z="https://media.istockphoto.com/id/1316134499/photo/a-concept-image-of-a-magnifying-glass-on-blue-background-with-a-word-example-zoom-inside-the.jpg?s=612x612&w=0&k=20&c=sZM5HlZvHFYnzjrhaStRpex43URlxg6wwJXff3BE9VA=",A="https://pdfobject.com/pdf/sample.pdf",D="https://file-examples.com/wp-content/storage/2017/02/file-sample_100kB.doc",Z={title:"Components/PreviewDocument",component:u,tags:["autodocs"],parameters:{layout:"fullscreen"}},v={args:{fileUrl:z,fileType:"image/png",fileName:"sample-image.png"}},w={args:{fileUrl:A,fileType:"application/pdf",fileName:"sample.pdf"}},b={args:{fileUrl:D,fileType:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",fileName:"sample.docx"}},y={args:{fileUrl:D,fileType:"application/octet-stream",fileName:"unsupported.xyz"}},x={render:t=>{const[n,s]=N.useState();return a.jsxs("div",{className:"p-4",children:[a.jsx("input",{"aria-label":"Choose a document",type:"file",accept:"application/pdf,image/*",onChange:p=>s(p.target.files?.[0])}),a.jsx(u,{...t,file:n})]})}},P={args:{file:"data:application/pdf;base64,invalid!",fileName:"invalid.pdf"}},_=()=>{const t="BT /F1 24 Tf 40 100 Td (Local PDF preview) Tj ET",n=["<< /Type /Catalog /Pages 2 0 R >>","<< /Type /Pages /Kids [3 0 R] /Count 1 >>","<< /Type /Page /Parent 2 0 R /MediaBox [0 0 300 200] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>","<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",`<< /Length ${t.length} >>
stream
${t}
endstream`];let s=`%PDF-1.4
`;const p=[0];n.forEach((d,e)=>{p.push(s.length),s+=`${e+1} 0 obj
${d}
endobj
`});const F=s.length;return s+=`xref
0 6
0000000000 65535 f 
${p.slice(1).map(d=>`${String(d).padStart(10,"0")} 00000 n 
`).join("")}trailer
<< /Size 6 /Root 1 0 R >>
startxref
${F}
%%EOF`,s},j={render:t=>a.jsx(u,{...t,file:btoa(_()),fileType:"application/pdf"})},U={render:t=>{const[n]=N.useState(()=>new File([_()],"local.pdf",{type:"application/pdf"}));return a.jsx(u,{...t,file:n})}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    fileUrl: sampleImageUrl,
    fileType: 'image/png',
    fileName: 'sample-image.png'
  }
}`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    fileUrl: samplePdfUrl,
    fileType: 'application/pdf',
    fileName: 'sample.pdf'
  }
}`,...w.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    fileUrl: sampleUnsupportedUrl,
    // simulate blob local preview
    fileType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    fileName: 'sample.docx'
  }
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    fileUrl: sampleUnsupportedUrl,
    fileType: 'application/octet-stream',
    fileName: 'unsupported.xyz'
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [file, setFile] = React.useState<File>();
    return <div className="p-4">
            <input aria-label="Choose a document" type="file" accept="application/pdf,image/*" onChange={event => setFile(event.target.files?.[0])} />
            <PreviewDocument {...args} file={file} />
        </div>;
  }
}`,...x.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    file: 'data:application/pdf;base64,invalid!',
    fileName: 'invalid.pdf'
  }
}`,...P.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => <PreviewDocument {...args} file={btoa(createSamplePdf())} fileType="application/pdf" />
}`,...j.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [file] = React.useState(() => new File([createSamplePdf()], 'local.pdf', {
      type: 'application/pdf'
    }));
    return <PreviewDocument {...args} file={file} />;
  }
}`,...U.parameters?.docs?.source}}};const G=["ImagePreview","PdfPreview","OfficeFilePreview","UnsupportedFile","LocalFilePreview","InvalidBase64","Base64PdfPreview","BlobPdfPreview"];export{j as Base64PdfPreview,U as BlobPdfPreview,v as ImagePreview,P as InvalidBase64,x as LocalFilePreview,b as OfficeFilePreview,w as PdfPreview,y as UnsupportedFile,G as __namedExportsOrder,Z as default};

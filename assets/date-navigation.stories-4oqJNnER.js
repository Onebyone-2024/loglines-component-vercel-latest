import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as m}from"./iframe-D9Bqm3_P.js";import{P as ya,a as ga,b as fa}from"./popover-BX4q5ZUq.js";import{t as be,c as ba,m as Ie,a as qe,b as ge,d as C,e as j,f as va,s as ie,i as Ve,g as Re,h as wa,j as xa,k as Da,l as N,n as Ma,o as k,C as Sa}from"./calendar-BsIDWl2d.js";import{a as ka,e as Na}from"./utils-Dw_DXGOY.js";import{I as Oe}from"./input-BTREeV5e.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ChRfFQCH.js";import"./index-S_nGUbuh.js";import"./index-Ce7ms2Sb.js";import"./index-DQDqhUpf.js";import"./index-B-jb5d5n.js";import"./index-B0NvjQEE.js";import"./index-BqsZJa9c.js";import"./index-xL_sUQoK.js";import"./index-D1Jc4a2r.js";import"./index-BIu1P_Sr.js";import"./button-DIlB9UvH.js";import"./index-CQHPi-22.js";import"./index-BheO4ms8.js";function Ca(a,t){const n=be(a,t?.in).getDay();return n===0||n===6}function ja(a,t){const n=()=>ba(t?.in,NaN),s=Ra(a);let i;if(s.date){const l=Oa(s.date,2);i=La(l.restDateString,l.year)}if(!i||isNaN(+i))return n();const p=+i;let d=0,c;if(s.time&&(d=Fa(s.time),isNaN(d)))return n();if(s.timezone){if(c=Ia(s.timezone),isNaN(c))return n()}else{const l=new Date(p+d),h=be(0,t?.in);return h.setFullYear(l.getUTCFullYear(),l.getUTCMonth(),l.getUTCDate()),h.setHours(l.getUTCHours(),l.getUTCMinutes(),l.getUTCSeconds(),l.getUTCMilliseconds()),h}return be(p+d+c,t?.in)}const ae={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},Ta=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,Pa=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,Va=/^([+-])(\d{2})(?::?(\d{2}))?$/;function Ra(a){const t={},n=a.split(ae.dateTimeDelimiter);let r;if(n.length>2)return t;if(/:/.test(n[0])?r=n[0]:(t.date=n[0],r=n[1],ae.timeZoneDelimiter.test(t.date)&&(t.date=a.split(ae.timeZoneDelimiter)[0],r=a.substr(t.date.length,a.length))),r){const s=ae.timezone.exec(r);s?(t.time=r.replace(s[1],""),t.timezone=s[1]):t.time=r}return t}function Oa(a,t){const n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=a.match(n);if(!r)return{year:NaN,restDateString:""};const s=r[1]?parseInt(r[1]):null,i=r[2]?parseInt(r[2]):null;return{year:i===null?s:i*100,restDateString:a.slice((r[1]||r[2]).length)}}function La(a,t){if(t===null)return new Date(NaN);const n=a.match(Ta);if(!n)return new Date(NaN);const r=!!n[4],s=T(n[1]),i=T(n[2])-1,p=T(n[3]),d=T(n[4]),c=T(n[5])-1;if(r)return Ha(t,d,c)?qa(t,d,c):new Date(NaN);{const l=new Date(0);return!Aa(t,i,p)||!Ea(t,s)?new Date(NaN):(l.setUTCFullYear(t,i,Math.max(s,p)),l)}}function T(a){return a?parseInt(a):1}function Fa(a){const t=a.match(Pa);if(!t)return NaN;const n=fe(t[1]),r=fe(t[2]),s=fe(t[3]);return Ba(n,r,s)?n*Ie+r*qe+s*1e3:NaN}function fe(a){return a&&parseFloat(a.replace(",","."))||0}function Ia(a){if(a==="Z")return 0;const t=a.match(Va);if(!t)return 0;const n=t[1]==="+"?-1:1,r=parseInt(t[2]),s=t[3]&&parseInt(t[3])||0;return za(r,s)?n*(r*Ie+s*qe):NaN}function qa(a,t,n){const r=new Date(0);r.setUTCFullYear(a,0,4);const s=r.getUTCDay()||7,i=(t-1)*7+n+1-s;return r.setUTCDate(r.getUTCDate()+i),r}const Wa=[31,null,31,30,31,30,31,31,30,31,30,31];function We(a){return a%400===0||a%4===0&&a%100!==0}function Aa(a,t,n){return t>=0&&t<=11&&n>=1&&n<=(Wa[t]||(We(a)?29:28))}function Ea(a,t){return t>=1&&t<=(We(a)?366:365)}function Ha(a,t,n){return t>=1&&t<=53&&n>=0&&n<=6}function Ba(a,t,n){return a===24?t===0&&n===0:n>=0&&n<60&&t>=0&&t<60&&a>=0&&a<25}function za(a,t){return t>=0&&t<=59}const Ya={lessThanXSeconds:{one:"kurang dari 1 detik",other:"kurang dari {{count}} detik"},xSeconds:{one:"1 detik",other:"{{count}} detik"},halfAMinute:"setengah menit",lessThanXMinutes:{one:"kurang dari 1 menit",other:"kurang dari {{count}} menit"},xMinutes:{one:"1 menit",other:"{{count}} menit"},aboutXHours:{one:"sekitar 1 jam",other:"sekitar {{count}} jam"},xHours:{one:"1 jam",other:"{{count}} jam"},xDays:{one:"1 hari",other:"{{count}} hari"},aboutXWeeks:{one:"sekitar 1 minggu",other:"sekitar {{count}} minggu"},xWeeks:{one:"1 minggu",other:"{{count}} minggu"},aboutXMonths:{one:"sekitar 1 bulan",other:"sekitar {{count}} bulan"},xMonths:{one:"1 bulan",other:"{{count}} bulan"},aboutXYears:{one:"sekitar 1 tahun",other:"sekitar {{count}} tahun"},xYears:{one:"1 tahun",other:"{{count}} tahun"},overXYears:{one:"lebih dari 1 tahun",other:"lebih dari {{count}} tahun"},almostXYears:{one:"hampir 1 tahun",other:"hampir {{count}} tahun"}},Ka=(a,t,n)=>{let r;const s=Ya[a];return typeof s=="string"?r=s:t===1?r=s.one:r=s.other.replace("{{count}}",t.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"dalam waktu "+r:r+" yang lalu":r},Ua={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"d/M/yyyy"},_a={full:"HH.mm.ss",long:"HH.mm.ss",medium:"HH.mm",short:"HH.mm"},Ja={full:"{{date}} 'pukul' {{time}}",long:"{{date}} 'pukul' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Xa={date:ge({formats:Ua,defaultWidth:"full"}),time:ge({formats:_a,defaultWidth:"full"}),dateTime:ge({formats:Ja,defaultWidth:"full"})},$a={lastWeek:"eeee 'lalu pukul' p",yesterday:"'Kemarin pukul' p",today:"'Hari ini pukul' p",tomorrow:"'Besok pukul' p",nextWeek:"eeee 'pukul' p",other:"P"},Za=(a,t,n,r)=>$a[a],Ga={narrow:["SM","M"],abbreviated:["SM","M"],wide:["Sebelum Masehi","Masehi"]},Qa={narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["Kuartal ke-1","Kuartal ke-2","Kuartal ke-3","Kuartal ke-4"]},et={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agt","Sep","Okt","Nov","Des"],wide:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"]},at={narrow:["M","S","S","R","K","J","S"],short:["Min","Sen","Sel","Rab","Kam","Jum","Sab"],abbreviated:["Min","Sen","Sel","Rab","Kam","Jum","Sab"],wide:["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"]},tt={narrow:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"siang",evening:"sore",night:"malam"},abbreviated:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"siang",evening:"sore",night:"malam"},wide:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"siang",evening:"sore",night:"malam"}},nt={narrow:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"siang",evening:"sore",night:"malam"},abbreviated:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"siang",evening:"sore",night:"malam"},wide:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"siang",evening:"sore",night:"malam"}},rt=(a,t)=>"ke-"+Number(a),st={ordinalNumber:rt,era:C({values:Ga,defaultWidth:"wide"}),quarter:C({values:Qa,defaultWidth:"wide",argumentCallback:a=>a-1}),month:C({values:et,defaultWidth:"wide"}),day:C({values:at,defaultWidth:"wide"}),dayPeriod:C({values:tt,defaultWidth:"wide",formattingValues:nt,defaultFormattingWidth:"wide"})},ot=/^ke-(\d+)?/i,it=/\d+/i,lt={narrow:/^(sm|m)/i,abbreviated:/^(s\.?\s?m\.?|s\.?\s?e\.?\s?u\.?|m\.?|e\.?\s?u\.?)/i,wide:/^(sebelum masehi|sebelum era umum|masehi|era umum)/i},dt={any:[/^s/i,/^(m|e)/i]},ct={narrow:/^[1234]/i,abbreviated:/^K-?\s[1234]/i,wide:/^Kuartal ke-?\s?[1234]/i},ut={any:[/1/i,/2/i,/3/i,/4/i]},mt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|mei|jun|jul|agt|sep|okt|nov|des)/i,wide:/^(januari|februari|maret|april|mei|juni|juli|agustus|september|oktober|november|desember)/i},pt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^ma/i,/^ap/i,/^me/i,/^jun/i,/^jul/i,/^ag/i,/^s/i,/^o/i,/^n/i,/^d/i]},ht={narrow:/^[srkjm]/i,short:/^(min|sen|sel|rab|kam|jum|sab)/i,abbreviated:/^(min|sen|sel|rab|kam|jum|sab)/i,wide:/^(minggu|senin|selasa|rabu|kamis|jumat|sabtu)/i},yt={narrow:[/^m/i,/^s/i,/^s/i,/^r/i,/^k/i,/^j/i,/^s/i],any:[/^m/i,/^sen/i,/^sel/i,/^r/i,/^k/i,/^j/i,/^sa/i]},gt={narrow:/^(a|p|tengah m|tengah h|(di(\swaktu)?) (pagi|siang|sore|malam))/i,any:/^([ap]\.?\s?m\.?|tengah malam|tengah hari|(di(\swaktu)?) (pagi|siang|sore|malam))/i},ft={any:{am:/^a/i,pm:/^pm/i,midnight:/^tengah m/i,noon:/^tengah h/i,morning:/pagi/i,afternoon:/siang/i,evening:/sore/i,night:/malam/i}},bt={ordinalNumber:va({matchPattern:ot,parsePattern:it,valueCallback:a=>parseInt(a,10)}),era:j({matchPatterns:lt,defaultMatchWidth:"wide",parsePatterns:dt,defaultParseWidth:"any"}),quarter:j({matchPatterns:ct,defaultMatchWidth:"wide",parsePatterns:ut,defaultParseWidth:"any",valueCallback:a=>a+1}),month:j({matchPatterns:mt,defaultMatchWidth:"wide",parsePatterns:pt,defaultParseWidth:"any"}),day:j({matchPatterns:ht,defaultMatchWidth:"wide",parsePatterns:yt,defaultParseWidth:"any"}),dayPeriod:j({matchPatterns:gt,defaultMatchWidth:"any",parsePatterns:ft,defaultParseWidth:"any"})},vt={code:"id",formatDistance:Ka,formatLong:Xa,formatRelative:Za,localize:st,match:bt,options:{weekStartsOn:1,firstWeekContainsDate:1}},wt=Na({extend:{classGroups:{"font-size":[{text:["hl1","hl2","hl3","hl4","hl5","st1","st2","bd1","bd2","bd3","bd4","ct1","ct2","ct3","ct4","bt1","bt2","bt3","bt4","bt5","lb","md","xxl"]}],"font-weight":[{font:["regular"]}]}}}),x=(...a)=>wt(ka(a)),xt={day:N,week:Da,month:xa,year:wa},Dt=366;function Le({from:a,direction:t,step:n,amount:r,minDate:s,maxDate:i,isDateDisabled:p}){const d=s&&ie(s),c=i&&ie(i),l=ie(a),h=xt[n],f=M=>!!p?.(M);let y=l;for(let M=0;M<Dt;M++){if(y=h(y,t*r),t===1&&c&&Ve(y,c))return Ve(c,l)&&!f(c)?c:void 0;if(t===-1&&d&&Re(y,d))return Re(d,l)&&!f(d)?d:void 0;if(!f(y))return y}}function Mt({value:a,minDate:t,maxDate:n,yearsBefore:r,yearsAfter:s}){const i=(a??new Date).getFullYear(),p=new Date().getFullYear(),d=Math.min(i,p),c=Math.max(i,p),l=t?new Date(t.getFullYear(),t.getMonth(),1):new Date(d-r,0,1),h=n?new Date(n.getFullYear(),n.getMonth(),1):new Date(c+s,11,1);return{startMonth:l,endMonth:h}}function St(a,t){return new Date(a.getFullYear(),a.getMonth(),a.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds())}const kt={sm:{root:"h-8 text-sm",arrow:"px-2"},md:{root:"h-9 text-md",arrow:"px-2.5"},lg:{root:"h-11 text-lg",arrow:"px-3"}},Fe="flex shrink-0 items-center justify-center self-stretch text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-900 active:bg-neutral-200 focus-visible:outline-none focus-visible:bg-neutral-100 disabled:pointer-events-none disabled:opacity-40",Nt="h-5 w-px shrink-0 self-center bg-neutral-300";function o(a){const{value:t,defaultValue:n,onChange:r,step:s="day",stepAmount:i=1,minDate:p,maxDate:d,isDateDisabled:c,disabledDates:l,displayFormat:h="EEE, dd MMMM yyyy",locale:f,renderLabel:y,placeholder:M="Select date",label:Q,required:S,subtitle:ee,state:ve="default",labelPrefix:Ee,labelSuffix:He,size:Be="md",variant:ze="primary-1",disabled:b=!1,showSteppers:we=!0,showCalendar:Ye=!0,prevIcon:Ke,nextIcon:Ue,labels:le,captionLayout:_e="dropdown",showWeekNumber:Je,weekStartsOn:Xe,yearsBefore:$e=100,yearsAfter:Ze=10,closeOnSelect:Ge=!0,open:xe,onOpenChange:Qe,popoverAlign:ea="start",popoverSide:aa,popoverSideOffset:ta=8,calendarProps:de,classNames:v,className:na,...ra}=a,[sa,oa]=m.useState(n),[ia,la]=m.useState(!1),De="value"in a,ce=(De?t:sa)??void 0,w=!!ce&&Ma(ce)?ce:void 0,Me=xe??ia,Se=g=>{xe===void 0&&la(g),Qe?.(g)},ue=(g,ha)=>{const Pe=w?St(g,w):g;De||oa(Pe),r?.(Pe,{source:ha})},ke={from:w??ie(new Date),step:s,amount:i,minDate:p,maxDate:d,isDateDisabled:c},me=Le({...ke,direction:-1}),pe=Le({...ke,direction:1}),{startMonth:da,endMonth:ca}=Mt({value:w,minDate:p,maxDate:d,yearsBefore:$e,yearsAfter:Ze}),ua=[...p?[{before:p}]:[],...d?[{after:d}]:[],...c?[c]:[],...Array.isArray(l)?l:l?[l]:[]],ma=y?y(w):w?k(w,h,{locale:f}):M,Ne=g=>x("flex min-w-0 flex-1 items-center justify-start gap-2 truncate px-4 text-left",!w&&!y&&"text-neutral-400",g&&"transition-colors hover:bg-neutral-50 focus-visible:bg-neutral-50 focus-visible:outline-none disabled:pointer-events-none",v?.label),Ce=e.jsxs(e.Fragment,{children:[Ee,e.jsx("span",{className:"truncate",children:ma}),He]}),he=kt[Be],je=i>1?`${i} ${s}s`:s,Te=x(Nt,v?.divider),ye=ve==="error",pa=b?"border-neutral-200":ye?"border-red-500":Me?"border-blue-500":"border-neutral-200 focus-within:border-blue-500";return e.jsxs("div",{"data-slot":"date-navigation","data-disabled":b||void 0,"data-state":ve,className:x("relative w-64",na,v?.root),...ra,children:[Q&&e.jsxs("span",{"data-slot":"date-navigation-label",className:x("pointer-events-none absolute -top-1.5 left-3 z-10 bg-gradient-to-b from-transparent from-50% px-1 text-xs font-medium leading-none",b?"to-neutral-50 to-50%":"to-white to-50%",b?"text-neutral-400":ye?"text-red-500":"text-neutral-700",v?.fieldLabel),children:[Q,S&&e.jsx("span",{className:"ml-0.5 text-red-500",children:"*"})]}),e.jsxs("div",{"data-slot":"date-navigation-control",className:x("flex w-full items-stretch overflow-hidden rounded-lg border bg-white text-neutral-700 transition-colors",he.root,pa,b&&"cursor-not-allowed bg-neutral-50 text-neutral-400",v?.control),children:[we&&e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button","aria-label":le?.prev??`Previous ${je}`,disabled:b||!me,onClick:()=>me&&ue(me,"prev"),className:x(Fe,he.arrow,v?.prevButton),children:Ke??e.jsx("i",{className:"ti ti-chevron-left","aria-hidden":!0})}),e.jsx("span",{"aria-hidden":!0,className:Te})]}),Ye?e.jsxs(ya,{open:b?!1:Me,onOpenChange:Se,children:[e.jsx(ga,{asChild:!0,children:e.jsx("button",{type:"button",disabled:b,"aria-label":le?.openCalendar??"Open calendar",className:Ne(!0),children:Ce})}),e.jsx(fa,{align:ea,side:aa,sideOffset:ta,className:x("w-auto bg-white p-0",v?.popover),children:e.jsx(Sa,{mode:"single",selected:w,defaultMonth:w,onSelect:g=>{g&&(ue(g,"calendar"),Ge&&Se(!1))},captionLayout:_e,startMonth:da,endMonth:ca,disabled:ua,showWeekNumber:Je,weekStartsOn:Xe,locale:f,variant:ze,...de,className:x(v?.calendar,de?.className),formatters:{...f&&{formatMonthDropdown:g=>k(g,"MMM",{locale:f})},...de?.formatters}})})]}):e.jsx("div",{className:Ne(!1),children:Ce}),we&&e.jsxs(e.Fragment,{children:[e.jsx("span",{"aria-hidden":!0,className:Te}),e.jsx("button",{type:"button","aria-label":le?.next??`Next ${je}`,disabled:b||!pe,onClick:()=>pe&&ue(pe,"next"),className:x(Fe,he.arrow,v?.nextButton),children:Ue??e.jsx("i",{className:"ti ti-chevron-right","aria-hidden":!0})})]})]}),ee&&e.jsx("p",{className:x("mt-1 text-xs",b?"text-neutral-400":ye?"text-red-500":"text-neutral-600",v?.subtitle),children:ee})]})}o.__docgenInfo={description:"",methods:[],displayName:"DateNavigation",props:{value:{required:!1,tsType:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},description:"Controlled date. Passing the prop at all (even `undefined` / `null`) makes it controlled,\nso `useState<Date | undefined>()` works and clearing it shows the placeholder."},defaultValue:{required:!1,tsType:{name:"Date"},description:"Initial date when uncontrolled."},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  date: Date,
  info: { source: IDateNavigationChangeSource },
) => void`,signature:{arguments:[{type:{name:"Date"},name:"date"},{type:{name:"signature",type:"object",raw:"{ source: IDateNavigationChangeSource }",signature:{properties:[{key:"source",value:{name:"union",raw:'"prev" | "next" | "calendar"',elements:[{name:"literal",value:'"prev"'},{name:"literal",value:'"next"'},{name:"literal",value:'"calendar"'}],required:!0}}]}},name:"info"}],return:{name:"void"}}},description:"Called with the new date. In controlled mode the component never changes its own value:\nstore, transform, validate or reject it here, whatever you return via `value` is what shows.\nThe time of day of the current value is preserved."},step:{required:!1,tsType:{name:"union",raw:'"day" | "week" | "month" | "year"',elements:[{name:"literal",value:'"day"'},{name:"literal",value:'"week"'},{name:"literal",value:'"month"'},{name:"literal",value:'"year"'}]},description:"Unit moved by the arrows."},stepAmount:{required:!1,tsType:{name:"number"},description:'How many `step` units per click, e.g. `step="day" stepAmount={7}`.'},minDate:{required:!1,tsType:{name:"Date"},description:"Earliest selectable date. Arrows clamp to it and the calendar disables earlier days."},maxDate:{required:!1,tsType:{name:"Date"},description:"Latest selectable date. Arrows clamp to it and the calendar disables later days."},isDateDisabled:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date) => boolean",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"boolean"}}},description:"Return `true` for dates that can't be chosen (e.g. weekends). Arrows skip over them."},disabledDates:{required:!1,tsType:{name:"union",raw:"Matcher | Matcher[]",elements:[{name:"Matcher"},{name:"Array",elements:[{name:"Matcher"}],raw:"Matcher[]"}]},description:"Extra react-day-picker matchers that only disable days in the calendar (not skipped by arrows)."},displayFormat:{required:!1,tsType:{name:"string"},description:"date-fns format string for the label."},locale:{required:!1,tsType:{name:"Locale"},description:"date-fns locale used by the label and the calendar (month/weekday names)."},renderLabel:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date | undefined) => React.ReactNode",signature:{arguments:[{type:{name:"union",raw:"Date | undefined",elements:[{name:"Date"},{name:"undefined"}]},name:"date"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:"Fully custom label content; replaces `displayFormat`."},placeholder:{required:!1,tsType:{name:"string"},description:"Shown when there is no date yet."},labelPrefix:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content before / after the label text (e.g. a calendar icon)."},labelSuffix:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Text-input style label floating on the top border."},required:{required:!1,tsType:{name:"boolean"},description:"Adds a red asterisk after `label`."},subtitle:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Helper / error text under the control."},state:{required:!1,tsType:{name:"union",raw:'"default" | "error"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"error"'}]},description:'`"error"` turns border, label and subtitle red.'},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:""},variant:{required:!1,tsType:{name:"union",raw:`| "neutral"
| "primary-1"
| "primary-2"
| "auxiliary"
| "success"
| "warning"
| "danger"`,elements:[{name:"literal",value:'"neutral"'},{name:"literal",value:'"primary-1"'},{name:"literal",value:'"primary-2"'},{name:"literal",value:'"auxiliary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"Color of the selected / today cell inside the calendar."},disabled:{required:!1,tsType:{name:"boolean"},description:""},showSteppers:{required:!1,tsType:{name:"boolean"},description:"Hide the arrows and keep only the date label + calendar."},showCalendar:{required:!1,tsType:{name:"boolean"},description:"When `false` the label is plain text and no calendar opens."},prevIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},nextIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},labels:{required:!1,tsType:{name:"IDateNavigationLabels"},description:""},captionLayout:{required:!1,tsType:{name:'ReactComponentProps["captionLayout"]',raw:'CalendarProps["captionLayout"]'},description:'`"dropdown"` (default) gives scrollable month + year selects.'},showWeekNumber:{required:!1,tsType:{name:"boolean"},description:""},weekStartsOn:{required:!1,tsType:{name:'ReactComponentProps["weekStartsOn"]',raw:'CalendarProps["weekStartsOn"]'},description:""},yearsBefore:{required:!1,tsType:{name:"number"},description:"How many years back / forward the year dropdown reaches when no min/max date is set."},yearsAfter:{required:!1,tsType:{name:"number"},description:""},closeOnSelect:{required:!1,tsType:{name:"boolean"},description:"Close the popover after a day is picked."},open:{required:!1,tsType:{name:"boolean"},description:"Controlled popover state."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},popoverAlign:{required:!1,tsType:{name:"union",raw:'"start" | "center" | "end"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"center"'},{name:"literal",value:'"end"'}]},description:""},popoverSide:{required:!1,tsType:{name:"union",raw:'"top" | "right" | "bottom" | "left"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"right"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'}]},description:""},popoverSideOffset:{required:!1,tsType:{name:"number"},description:""},calendarProps:{required:!1,tsType:{name:"Omit",elements:[{name:"ReactComponentProps",raw:"React.ComponentProps<typeof Calendar>",elements:[{name:"Calendar"}]},{name:"union",raw:'"mode" | "selected" | "onSelect"',elements:[{name:"literal",value:'"mode"'},{name:"literal",value:'"selected"'},{name:"literal",value:'"onSelect"'}]}],raw:'Omit<CalendarProps, "mode" | "selected" | "onSelect">'},description:"Escape hatch: forwarded to `Calendar` last, so it can override anything above."},classNames:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:`| "root"
| "control"
| "fieldLabel"
| "divider"
| "subtitle"
| "prevButton"
| "nextButton"
| "label"
| "popover"
| "calendar"`,elements:[{name:"literal",value:'"root"'},{name:"literal",value:'"control"'},{name:"literal",value:'"fieldLabel"'},{name:"literal",value:'"divider"'},{name:"literal",value:'"subtitle"'},{name:"literal",value:'"prevButton"'},{name:"literal",value:'"nextButton"'},{name:"literal",value:'"label"'},{name:"literal",value:'"popover"'},{name:"literal",value:'"calendar"'}]},{name:"string"}],raw:"Record<IDateNavigationSlot, string>"}],raw:"Partial<Record<IDateNavigationSlot, string>>"},description:"Per-slot class overrides. `className` is the same as `classNames.root` (the outer wrapper:\nwidth, margin). `control` is the bordered box, `label` the date text, `fieldLabel` the\nfloating `label`."}},composes:["Omit"]};const Ae=["neutral","primary-1","primary-2","auxiliary","success","warning","danger"],Xt={title:"Components/DateNavigation",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Prev / date / next control with a calendar popover. Arrows move by `step` (day, week, month, year); the calendar header has scrollable month and year dropdowns, so far-away dates are two clicks away. Works controlled (`value` + `onChange`) or uncontrolled (`defaultValue`)."}}},args:{step:"day",stepAmount:1,size:"md",variant:"primary-1",captionLayout:"dropdown",displayFormat:"EEE, dd MMMM yyyy",placeholder:"Select date",disabled:!1,showSteppers:!0,showCalendar:!0,closeOnSelect:!0,showWeekNumber:!1,yearsBefore:100,yearsAfter:10},argTypes:{step:{control:"radio",options:["day","week","month","year"]},stepAmount:{control:{type:"number",min:1}},size:{control:"radio",options:["sm","md","lg"]},state:{control:"radio",options:["default","error"]},label:{control:"text"},subtitle:{control:"text"},required:{control:"boolean"},variant:{control:"select",options:Ae},captionLayout:{control:"radio",options:["label","dropdown","dropdown-months","dropdown-years"]},popoverAlign:{control:"radio",options:["start","center","end"]},popoverSide:{control:"radio",options:["top","right","bottom","left"]},weekStartsOn:{control:"select",options:[0,1,2,3,4,5,6]},value:{control:!1},defaultValue:{control:!1},minDate:{control:!1},maxDate:{control:!1},locale:{control:!1},isDateDisabled:{control:!1},disabledDates:{control:!1},renderLabel:{control:!1},labelPrefix:{control:!1},labelSuffix:{control:!1},prevIcon:{control:!1},nextIcon:{control:!1},calendarProps:{control:!1},onChange:{action:"changed"}}},D=({children:a})=>e.jsx("div",{className:"flex flex-col items-start gap-4",children:a}),u=({children:a})=>e.jsx("p",{className:"mb-1 text-xs text-neutral-500",children:a}),P={args:{defaultValue:new Date}},te={render:a=>{const[t,n]=m.useState(new Date);return e.jsxs(D,{children:[e.jsx(o,{...a,value:t,onChange:n}),e.jsxs("p",{className:"text-sm text-neutral-600",children:["Selected: ",e.jsx("b",{children:k(t,"yyyy-MM-dd")})]})]})}},V={render:a=>{const[t,n]=m.useState(null);return e.jsxs(D,{children:[e.jsx(o,{...a,value:t,onChange:n,placeholder:"Pick a delivery date"}),e.jsxs("p",{className:"text-sm text-neutral-600",children:["Selected: ",e.jsx("b",{children:t?k(t,"yyyy-MM-dd"):"—"})]})]})}},R={render:a=>e.jsxs(D,{children:[e.jsxs("div",{children:[e.jsx(u,{children:'step="day"'}),e.jsx(o,{...a,step:"day",defaultValue:new Date})]}),e.jsxs("div",{children:[e.jsx(u,{children:'step="week"'}),e.jsx(o,{...a,step:"week",defaultValue:new Date})]}),e.jsxs("div",{children:[e.jsx(u,{children:'step="month" · displayFormat="MMMM yyyy"'}),e.jsx(o,{...a,step:"month",displayFormat:"MMMM yyyy",defaultValue:new Date})]}),e.jsxs("div",{children:[e.jsx(u,{children:'step="year" · displayFormat="yyyy"'}),e.jsx(o,{...a,step:"year",displayFormat:"yyyy",defaultValue:new Date})]}),e.jsxs("div",{children:[e.jsx(u,{children:'step="day" stepAmount=7 · displayFormat="dd MMM yyyy"'}),e.jsx(o,{...a,step:"day",stepAmount:7,displayFormat:"dd MMM yyyy",defaultValue:new Date})]})]})},O={render:a=>e.jsxs(D,{children:[e.jsxs("div",{children:[e.jsx(u,{children:"Starts in 1985 — open the calendar and scroll the year dropdown"}),e.jsx(o,{...a,defaultValue:new Date(1985,5,15)})]}),e.jsxs("div",{children:[e.jsx(u,{children:"yearsBefore=5 · yearsAfter=50 (future planning)"}),e.jsx(o,{...a,yearsBefore:5,yearsAfter:50,defaultValue:new Date})]})]})},L={render:a=>{const t=new Date,[n,r]=m.useState(t);return e.jsxs(D,{children:[e.jsx(o,{...a,value:n,onChange:r,minDate:N(t,-14),maxDate:N(t,14)}),e.jsx("p",{className:"text-xs text-neutral-500",children:"Limited to ±14 days from today. Arrows disable at the edge."})]})}},F={render:a=>{const[t,n]=m.useState(N(new Date,0));return e.jsxs(D,{children:[e.jsx(o,{...a,value:t,onChange:n,isDateDisabled:Ca,displayFormat:"EEEE, dd MMM yyyy",className:"w-80"}),e.jsx("p",{className:"text-xs text-neutral-500",children:"Working days only: next from Friday lands on Monday."})]})}},I={args:{defaultValue:new Date,disabledDates:[{dayOfWeek:[0]},{from:N(new Date,3),to:N(new Date,5)}]}},q={render:a=>{const[t,n]=m.useState(void 0),[r,s]=m.useState("2026-01-20"),[i,p]=m.useState(!1),[d,c]=m.useState(new Date),[l,h]=m.useState(new Date),[f,y]=m.useState(new Date(2026,9,6,14,30)),[M,Q]=m.useState("—");return e.jsxs("div",{className:"flex w-[420px] flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx(u,{children:"1. Date | undefined, with a Clear button"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(o,{...a,value:t,onChange:n,className:"w-64"}),e.jsx("button",{type:"button",className:"rounded border px-2 py-1 text-sm",onClick:()=>n(void 0),children:"Clear"})]})]}),e.jsxs("div",{children:[e.jsxs(u,{children:["2. ISO string state: ",r]}),e.jsx(o,{...a,value:ja(r),onChange:S=>s(k(S,"yyyy-MM-dd"))})]}),e.jsxs("div",{children:[e.jsx(u,{children:"3. Veto: changes are ignored while locked"}),e.jsxs("label",{className:"mb-2 flex items-center gap-2 text-sm",children:[e.jsx("input",{type:"checkbox",checked:i,onChange:S=>p(S.target.checked)}),"Locked"]}),e.jsx(o,{...a,value:d,onChange:S=>!i&&c(S),subtitle:i?"Locked: changes are rejected.":void 0})]}),e.jsxs("div",{children:[e.jsx(u,{children:"4. Two controls, one state"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(o,{...a,value:l,onChange:h}),e.jsx(o,{...a,value:l,onChange:h,step:"month",displayFormat:"MMMM yyyy"})]})]}),e.jsxs("div",{children:[e.jsxs(u,{children:["5. Datetime: ",k(f,"yyyy-MM-dd HH:mm")]}),e.jsx(o,{...a,value:f,onChange:y})]}),e.jsxs("div",{children:[e.jsxs(u,{children:["6. Last change source: ",M]}),e.jsx(o,{...a,defaultValue:new Date,onChange:(S,{source:ee})=>Q(ee)})]})]})}},W={render:a=>e.jsxs(D,{children:[e.jsx(o,{...a,label:"Delivery date",defaultValue:new Date}),e.jsx(o,{...a,label:"Delivery date",required:!0,defaultValue:new Date}),e.jsx(o,{...a,label:"Delivery date",placeholder:"Pick a date"})]})},A={args:{label:"Pickup date",subtitle:"Orders placed after 15:00 are picked up the next day.",defaultValue:new Date}},E={render:a=>{const[t,n]=m.useState(null);return e.jsx(o,{...a,label:"Delivery date",required:!0,value:t,onChange:n,state:t?"default":"error",subtitle:t?"Looks good.":"Delivery date is required."})}},ne={args:{label:"Delivery date",subtitle:"Locked after the order is confirmed.",disabled:!0,defaultValue:new Date}},H={render:a=>{const[t,n]=m.useState(null);return e.jsxs("div",{className:"grid w-[560px] grid-cols-2 gap-4",children:[e.jsx(Oe,{label:"Consignee",placeholder:"Company name",required:!0}),e.jsx(o,{...a,label:"Delivery date",required:!0,value:t,onChange:n,className:"w-full",state:t?"default":"error",subtitle:t?void 0:"Required"}),e.jsx(Oe,{label:"Reference",placeholder:"PO number"}),e.jsx(o,{...a,label:"Pickup date",className:"w-full",defaultValue:new Date})]})}},re={render:a=>e.jsx(D,{children:["sm","md","lg"].map(t=>e.jsxs("div",{children:[e.jsxs(u,{children:['size="',t,'"']}),e.jsx(o,{...a,size:t,defaultValue:new Date})]},t))})},B={render:a=>e.jsx("div",{className:"grid grid-cols-2 gap-4",children:Ae.map(t=>e.jsxs("div",{children:[e.jsx(u,{children:t}),e.jsx(o,{...a,variant:t,defaultValue:new Date})]},t))})},z={args:{locale:vt,displayFormat:"EEEE, dd MMMM yyyy",weekStartsOn:1,defaultValue:new Date,className:"w-80",labels:{prev:"Hari sebelumnya",next:"Hari berikutnya",openCalendar:"Buka kalender"}}},Y={render:a=>{const[t,n]=m.useState(new Date),r=Math.round((new Date(t.toDateString()).getTime()-new Date(new Date().toDateString()).getTime())/864e5),s=r===0?"Today":r===1?"Tomorrow":r===-1?"Yesterday":null;return e.jsx(o,{...a,value:t,onChange:n,renderLabel:i=>i&&e.jsxs("span",{className:"flex items-center gap-2",children:[s&&e.jsx("span",{className:"rounded bg-primary-1-100 px-1.5 text-xs font-medium text-primary-1-700",children:s}),k(i,"dd MMM yyyy")]})})}},K={args:{defaultValue:new Date,labelPrefix:e.jsx("i",{className:"ti ti-calendar text-neutral-500","aria-hidden":!0}),prevIcon:e.jsx("i",{className:"ti ti-arrow-left","aria-hidden":!0}),nextIcon:e.jsx("i",{className:"ti ti-arrow-right","aria-hidden":!0})}},U={args:{defaultValue:new Date,showSteppers:!1}},_={args:{defaultValue:new Date,showCalendar:!1,step:"month",displayFormat:"MMMM yyyy"}},se={args:{defaultValue:new Date,disabled:!0}},oe={args:{defaultValue:new Date,closeOnSelect:!1}},J={render:a=>{const[t,n]=m.useState(!1);return e.jsxs(D,{children:[e.jsx(o,{...a,defaultValue:new Date,open:t,onOpenChange:n}),e.jsxs("button",{type:"button",className:"rounded border px-3 py-1 text-sm",onClick:()=>n(r=>!r),children:[t?"Close":"Open"," calendar"]})]})}},X={args:{label:"Delivery date",subtitle:"Every slot restyled via classNames.",defaultValue:new Date,className:"w-80",classNames:{control:"rounded-full border-primary-1-500 bg-primary-1-50",fieldLabel:"text-primary-1-700 font-semibold",prevButton:"bg-primary-1-100 text-primary-1-700 hover:bg-primary-1-200",nextButton:"bg-primary-1-100 text-primary-1-700 hover:bg-primary-1-200",divider:"bg-primary-1-300",label:"font-semibold text-primary-1-700 text-bd4 hover:bg-primary-1-100",subtitle:"text-primary-1-600",popover:"border-primary-1-200 shadow-xl",calendar:"p-4"}}},$={render:a=>e.jsxs("div",{className:"flex w-[480px] flex-col gap-3",children:[e.jsx(o,{...a,defaultValue:new Date,className:"w-full"}),e.jsx(o,{...a,defaultValue:new Date,className:"w-80"}),e.jsx(o,{...a,defaultValue:new Date,className:"w-48 ml-auto",displayFormat:"dd MMM yyyy"})]})},Z={render:a=>e.jsxs(D,{children:[e.jsxs("div",{children:[e.jsx(u,{children:"showWeekNumber · weekStartsOn=1"}),e.jsx(o,{...a,showWeekNumber:!0,weekStartsOn:1,defaultValue:new Date})]}),e.jsxs("div",{children:[e.jsx(u,{children:'captionLayout="label" (no dropdowns, arrows only)'}),e.jsx(o,{...a,captionLayout:"label",defaultValue:new Date})]}),e.jsxs("div",{children:[e.jsx(u,{children:'captionLayout="dropdown-years"'}),e.jsx(o,{...a,captionLayout:"dropdown-years",defaultValue:new Date})]}),e.jsxs("div",{children:[e.jsxs(u,{children:["calendarProps=","{{ numberOfMonths: 2 }}"]}),e.jsx(o,{...a,captionLayout:"label",calendarProps:{numberOfMonths:2},defaultValue:new Date})]})]})},G={render:a=>{const[t,n]=m.useState(new Date);return e.jsxs("div",{className:"w-[560px] rounded-lg border border-neutral-200 p-4",children:[e.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[e.jsx("h3",{className:"text-base font-semibold",children:"Shipments"}),e.jsx(o,{...a,value:t,onChange:n,popoverAlign:"end",displayFormat:"dd MMM yyyy",className:"w-56"})]}),e.jsxs("p",{className:"text-sm text-neutral-600",children:["Showing shipments for ",e.jsx("b",{children:k(t,"EEEE, dd MMMM yyyy")}),"."]})]})}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: new Date()
  }
}`,...P.parameters?.docs?.source},description:{story:"Playground — change anything from the Controls panel.",...P.parameters?.docs?.description}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [date, setDate] = React.useState<Date>(new Date());
    return <Stack>
        <DateNavigation {...args} value={date} onChange={setDate} />
        <p className="text-sm text-neutral-600">
          Selected: <b>{format(date, "yyyy-MM-dd")}</b>
        </p>
      </Stack>;
  }
}`,...te.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [date, setDate] = React.useState<Date | null>(null);
    return <Stack>
        <DateNavigation {...args} value={date} onChange={setDate} placeholder="Pick a delivery date" />
        <p className="text-sm text-neutral-600">
          Selected: <b>{date ? format(date, "yyyy-MM-dd") : "—"}</b>
        </p>
      </Stack>;
  }
}`,...V.parameters?.docs?.source},description:{story:"Without a date the arrows step from today and the placeholder shows.",...V.parameters?.docs?.description}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: args => <Stack>
      <div>
        <Caption>step="day"</Caption>
        <DateNavigation {...args} step="day" defaultValue={new Date()} />
      </div>
      <div>
        <Caption>step="week"</Caption>
        <DateNavigation {...args} step="week" defaultValue={new Date()} />
      </div>
      <div>
        <Caption>step="month" · displayFormat="MMMM yyyy"</Caption>
        <DateNavigation {...args} step="month" displayFormat="MMMM yyyy" defaultValue={new Date()} />
      </div>
      <div>
        <Caption>step="year" · displayFormat="yyyy"</Caption>
        <DateNavigation {...args} step="year" displayFormat="yyyy" defaultValue={new Date()} />
      </div>
      <div>
        <Caption>step="day" stepAmount=7 · displayFormat="dd MMM yyyy"</Caption>
        <DateNavigation {...args} step="day" stepAmount={7} displayFormat="dd MMM yyyy" defaultValue={new Date()} />
      </div>
    </Stack>
}`,...R.parameters?.docs?.source},description:{story:"Arrows move one `step` unit; `stepAmount` multiplies it.",...R.parameters?.docs?.description}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => <Stack>
      <div>
        <Caption>
          Starts in 1985 — open the calendar and scroll the year dropdown
        </Caption>
        <DateNavigation {...args} defaultValue={new Date(1985, 5, 15)} />
      </div>
      <div>
        <Caption>yearsBefore=5 · yearsAfter=50 (future planning)</Caption>
        <DateNavigation {...args} yearsBefore={5} yearsAfter={50} defaultValue={new Date()} />
      </div>
    </Stack>
}`,...O.parameters?.docs?.source},description:{story:"Both dropdowns in the calendar header scroll. The default range is 100 years back and\n10 forward from the selected date / today; widen it with `yearsBefore` / `yearsAfter`.",...O.parameters?.docs?.description}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => {
    const today = new Date();
    const [date, setDate] = React.useState<Date>(today);
    return <Stack>
        <DateNavigation {...args} value={date} onChange={setDate} minDate={addDays(today, -14)} maxDate={addDays(today, 14)} />
        <p className="text-xs text-neutral-500">
          Limited to ±14 days from today. Arrows disable at the edge.
        </p>
      </Stack>;
  }
}`,...L.parameters?.docs?.source},description:{story:"`minDate` / `maxDate` limit the calendar, the dropdown years and the arrows (which clamp).",...L.parameters?.docs?.description}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [date, setDate] = React.useState<Date>(addDays(new Date(), 0));
    return <Stack>
        <DateNavigation {...args} value={date} onChange={setDate} isDateDisabled={isWeekend} displayFormat="EEEE, dd MMM yyyy" className="w-80" />
        <p className="text-xs text-neutral-500">
          Working days only: next from Friday lands on Monday.
        </p>
      </Stack>;
  }
}`,...F.parameters?.docs?.source},description:{story:"`isDateDisabled` blocks days in the calendar *and* makes the arrows skip them.",...F.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: new Date(),
    disabledDates: [{
      dayOfWeek: [0]
    }, {
      from: addDays(new Date(), 3),
      to: addDays(new Date(), 5)
    }]
  }
}`,...I.parameters?.docs?.source},description:{story:"`disabledDates` takes react-day-picker matchers; they only affect the calendar (arrows don't skip them).",...I.parameters?.docs?.description}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: args => {
    // 1. Plain Date state that can be cleared back to \`undefined\`.
    const [date, setDate] = React.useState<Date | undefined>(undefined);
    // 2. Stored as an ISO string, converted at the edges.
    const [iso, setIso] = React.useState("2026-01-20");
    // 3. onChange can veto: the display only moves when you accept the change.
    const [locked, setLocked] = React.useState(false);
    const [guarded, setGuarded] = React.useState<Date>(new Date());
    // 4. Two controls driven by the same state.
    const [shared, setShared] = React.useState<Date>(new Date());
    // 5. Datetime state: the time of day survives stepping and picking.
    const [dateTime, setDateTime] = React.useState(new Date(2026, 9, 6, 14, 30));
    // 6. The source of the last change.
    const [last, setLast] = React.useState("—");
    return <div className="flex w-[420px] flex-col gap-6">
        <div>
          <Caption>1. Date | undefined, with a Clear button</Caption>
          <div className="flex items-center gap-2">
            <DateNavigation {...args} value={date} onChange={setDate} className="w-64" />
            <button type="button" className="rounded border px-2 py-1 text-sm" onClick={() => setDate(undefined)}>
              Clear
            </button>
          </div>
        </div>

        <div>
          <Caption>2. ISO string state: {iso}</Caption>
          <DateNavigation {...args} value={parseISO(iso)} onChange={d => setIso(format(d, "yyyy-MM-dd"))} />
        </div>

        <div>
          <Caption>3. Veto: changes are ignored while locked</Caption>
          <label className="mb-2 flex items-center gap-2 text-sm">
            <input type="checkbox" checked={locked} onChange={e => setLocked(e.target.checked)} />
            Locked
          </label>
          <DateNavigation {...args} value={guarded} onChange={d => !locked && setGuarded(d)} subtitle={locked ? "Locked: changes are rejected." : undefined} />
        </div>

        <div>
          <Caption>4. Two controls, one state</Caption>
          <div className="flex flex-col gap-2">
            <DateNavigation {...args} value={shared} onChange={setShared} />
            <DateNavigation {...args} value={shared} onChange={setShared} step="month" displayFormat="MMMM yyyy" />
          </div>
        </div>

        <div>
          <Caption>5. Datetime: {format(dateTime, "yyyy-MM-dd HH:mm")}</Caption>
          <DateNavigation {...args} value={dateTime} onChange={setDateTime} />
        </div>

        <div>
          <Caption>6. Last change source: {last}</Caption>
          <DateNavigation {...args} defaultValue={new Date()} onChange={(_, {
          source
        }) => setLast(source)} />
        </div>
      </div>;
  }
}`,...q.parameters?.docs?.source},description:{story:"The consumer owns the value. Passing `value` (even `undefined`) makes it controlled; the\ncomponent only reports changes through `onChange(date, { source })`, so you can store, convert,\nvalidate or reject them.",...q.parameters?.docs?.description}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => <Stack>
      <DateNavigation {...args} label="Delivery date" defaultValue={new Date()} />
      <DateNavigation {...args} label="Delivery date" required defaultValue={new Date()} />
      <DateNavigation {...args} label="Delivery date" placeholder="Pick a date" />
    </Stack>
}`,...W.parameters?.docs?.source},description:{story:"`label` floats on the top border like in `Input`. `required` adds the red asterisk.",...W.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Pickup date",
    subtitle: "Orders placed after 15:00 are picked up the next day.",
    defaultValue: new Date()
  }
}`,...A.parameters?.docs?.source},description:{story:"`subtitle` is helper text under the control, same as `Input`.",...A.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [date, setDate] = React.useState<Date | null>(null);
    return <DateNavigation {...args} label="Delivery date" required value={date} onChange={setDate} state={date ? "default" : "error"} subtitle={date ? "Looks good." : "Delivery date is required."} />;
  }
}`,...E.parameters?.docs?.source},description:{story:'`state="error"` turns border, label and subtitle red; use `subtitle` for the message.',...E.parameters?.docs?.description}}};ne.parameters={...ne.parameters,docs:{...ne.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Delivery date",
    subtitle: "Locked after the order is confirmed.",
    disabled: true,
    defaultValue: new Date()
  }
}`,...ne.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [date, setDate] = React.useState<Date | null>(null);
    return <div className="grid w-[560px] grid-cols-2 gap-4">
        <Input label="Consignee" placeholder="Company name" required />
        <DateNavigation {...args} label="Delivery date" required value={date} onChange={setDate} className="w-full" state={date ? "default" : "error"} subtitle={date ? undefined : "Required"} />
        <Input label="Reference" placeholder="PO number" />
        <DateNavigation {...args} label="Pickup date" className="w-full" defaultValue={new Date()} />
      </div>;
  }
}`,...H.parameters?.docs?.source},description:{story:"Same label / subtitle / error treatment as `Input`, side by side in a form.",...H.parameters?.docs?.description}}};re.parameters={...re.parameters,docs:{...re.parameters?.docs,source:{originalSource:`{
  render: args => <Stack>
      {(["sm", "md", "lg"] as const).map(size => <div key={size}>
          <Caption>size="{size}"</Caption>
          <DateNavigation {...args} size={size} defaultValue={new Date()} />
        </div>)}
    </Stack>
}`,...re.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => <div className="grid grid-cols-2 gap-4">
      {VARIANTS.map(variant => <div key={variant}>
          <Caption>{variant}</Caption>
          <DateNavigation {...args} variant={variant} defaultValue={new Date()} />
        </div>)}
    </div>
}`,...B.parameters?.docs?.source},description:{story:"`variant` colors the selected and today cells in the calendar.",...B.parameters?.docs?.description}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    locale: idLocale,
    displayFormat: "EEEE, dd MMMM yyyy",
    weekStartsOn: 1,
    defaultValue: new Date(),
    className: "w-80",
    labels: {
      prev: "Hari sebelumnya",
      next: "Hari berikutnya",
      openCalendar: "Buka kalender"
    }
  }
}`,...z.parameters?.docs?.source},description:{story:"Pass a date-fns `locale` for the label, month names and weekday headers.",...z.parameters?.docs?.description}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [date, setDate] = React.useState<Date>(new Date());
    const dayDiff = Math.round((new Date(date.toDateString()).getTime() - new Date(new Date().toDateString()).getTime()) / 86_400_000);
    const relative = dayDiff === 0 ? "Today" : dayDiff === 1 ? "Tomorrow" : dayDiff === -1 ? "Yesterday" : null;
    return <DateNavigation {...args} value={date} onChange={setDate} renderLabel={d => d && <span className="flex items-center gap-2">
              {relative && <span className="rounded bg-primary-1-100 px-1.5 text-xs font-medium text-primary-1-700">
                  {relative}
                </span>}
              {format(d, "dd MMM yyyy")}
            </span>} />;
  }
}`,...Y.parameters?.docs?.source},description:{story:'`renderLabel` replaces the text entirely — here a "Today / Yesterday / Tomorrow" label.',...Y.parameters?.docs?.description}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: new Date(),
    labelPrefix: <i className="ti ti-calendar text-neutral-500" aria-hidden />,
    prevIcon: <i className="ti ti-arrow-left" aria-hidden />,
    nextIcon: <i className="ti ti-arrow-right" aria-hidden />
  }
}`,...K.parameters?.docs?.source},description:{story:"Icons and label affixes are plain ReactNodes.",...K.parameters?.docs?.description}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: new Date(),
    showSteppers: false
  }
}`,...U.parameters?.docs?.source},description:{story:"Hide the arrows to get a plain date field that opens the calendar.",...U.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: new Date(),
    showCalendar: false,
    step: "month",
    displayFormat: "MMMM yyyy"
  }
}`,..._.parameters?.docs?.source},description:{story:"`showCalendar={false}`: arrows only, the label is static text.",..._.parameters?.docs?.description}}};se.parameters={...se.parameters,docs:{...se.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: new Date(),
    disabled: true
  }
}`,...se.parameters?.docs?.source}}};oe.parameters={...oe.parameters,docs:{...oe.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: new Date(),
    closeOnSelect: false
  }
}`,...oe.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = React.useState(false);
    return <Stack>
        <DateNavigation {...args} defaultValue={new Date()} open={open} onOpenChange={setOpen} />
        <button type="button" className="rounded border px-3 py-1 text-sm" onClick={() => setOpen(o => !o)}>
          {open ? "Close" : "Open"} calendar
        </button>
      </Stack>;
  }
}`,...J.parameters?.docs?.source},description:{story:"Popover state can be driven from outside.",...J.parameters?.docs?.description}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Delivery date",
    subtitle: "Every slot restyled via classNames.",
    defaultValue: new Date(),
    className: "w-80",
    classNames: {
      control: "rounded-full border-primary-1-500 bg-primary-1-50",
      fieldLabel: "text-primary-1-700 font-semibold",
      prevButton: "bg-primary-1-100 text-primary-1-700 hover:bg-primary-1-200",
      nextButton: "bg-primary-1-100 text-primary-1-700 hover:bg-primary-1-200",
      divider: "bg-primary-1-300",
      label: "font-semibold text-primary-1-700 text-bd4 hover:bg-primary-1-100",
      subtitle: "text-primary-1-600",
      popover: "border-primary-1-200 shadow-xl",
      calendar: "p-4"
    }
  }
}`,...X.parameters?.docs?.source},description:{story:"Every slot accepts Tailwind classes and wins over the defaults (later class replaces the\nconflicting default, including this library's custom type scale like `text-bd3`):\n`className` = outer wrapper (width / margin), `control` = bordered box, `label` = date text,\n`fieldLabel` = floating label, `subtitle`, `divider`, `prevButton`, `nextButton`,\n`popover` (portaled, so only reachable through this slot), `calendar`.",...X.parameters?.docs?.description}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex w-[480px] flex-col gap-3">
      <DateNavigation {...args} defaultValue={new Date()} className="w-full" />
      <DateNavigation {...args} defaultValue={new Date()} className="w-80" />
      <DateNavigation {...args} defaultValue={new Date()} className="w-48 ml-auto" displayFormat="dd MMM yyyy" />
    </div>
}`,...$.parameters?.docs?.source},description:{story:"`className` on its own: width, margin, or any wrapper utility.",...$.parameters?.docs?.description}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: args => <Stack>
      <div>
        <Caption>showWeekNumber · weekStartsOn=1</Caption>
        <DateNavigation {...args} showWeekNumber weekStartsOn={1} defaultValue={new Date()} />
      </div>
      <div>
        <Caption>captionLayout="label" (no dropdowns, arrows only)</Caption>
        <DateNavigation {...args} captionLayout="label" defaultValue={new Date()} />
      </div>
      <div>
        <Caption>captionLayout="dropdown-years"</Caption>
        <DateNavigation {...args} captionLayout="dropdown-years" defaultValue={new Date()} />
      </div>
      <div>
        <Caption>calendarProps={"{{ numberOfMonths: 2 }}"}</Caption>
        <DateNavigation {...args} captionLayout="label" calendarProps={{
        numberOfMonths: 2
      }} defaultValue={new Date()} />
      </div>
    </Stack>
}`,...Z.parameters?.docs?.source},description:{story:"Calendar extras: week numbers, label-only header, forwarded `calendarProps`.",...Z.parameters?.docs?.description}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [date, setDate] = React.useState<Date>(new Date());
    return <div className="w-[560px] rounded-lg border border-neutral-200 p-4">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-base font-semibold">Shipments</h3>
          <DateNavigation {...args} value={date} onChange={setDate} popoverAlign="end" displayFormat="dd MMM yyyy" className="w-56" />
        </div>
        <p className="text-sm text-neutral-600">
          Showing shipments for <b>{format(date, "EEEE, dd MMMM yyyy")}</b>.
        </p>
      </div>;
  }
}`,...G.parameters?.docs?.source},description:{story:"Typical page-header use: a toolbar with navigation and a day-based list.",...G.parameters?.docs?.description}}};const $t=["Default","Controlled","Empty","Steps","FarAwayDates","MinMaxRange","SkipWeekends","DisabledMatchers","ConsumerState","WithLabel","WithSubtitle","ErrorState","LabelDisabled","InFormWithInput","Sizes","Variants","IndonesianLocale","CustomLabel","CustomIcons","WithoutSteppers","WithoutCalendar","Disabled","KeepOpenAfterSelect","ControlledPopover","CustomStyling","ClassNameWidths","CalendarOptions","InToolbar"];export{Z as CalendarOptions,$ as ClassNameWidths,q as ConsumerState,te as Controlled,J as ControlledPopover,K as CustomIcons,Y as CustomLabel,X as CustomStyling,P as Default,se as Disabled,I as DisabledMatchers,V as Empty,E as ErrorState,O as FarAwayDates,H as InFormWithInput,G as InToolbar,z as IndonesianLocale,oe as KeepOpenAfterSelect,ne as LabelDisabled,L as MinMaxRange,re as Sizes,F as SkipWeekends,R as Steps,B as Variants,W as WithLabel,A as WithSubtitle,_ as WithoutCalendar,U as WithoutSteppers,$t as __namedExportsOrder,Xt as default};

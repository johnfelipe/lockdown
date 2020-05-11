import{E as t,f as e,c as a,m as s,h as i,o as r,a as o,l,b as n,s as d,d as c,e as u,r as h,g as p,w as v,i as g,j as b,k as m,n as f,p as x,t as y,q as w,u as _}from"./0ec5ee9e.js";const k={url:new URL("./src/services/coronastatusService.js",document.baseURI).href};new class extends t{async getCoronaStatus(t){return!t&&this.__coronastatus||(this.__coronastatus=fetch(new URL("../../data/coronastatus.json",k.url)).then(t=>t.json()),await this.__coronastatus,this.dispatchEvent(new Event("change"))),this.__coronastatus}};const E=new class extends t{constructor(){super(),this.cache={}}async getCountry(t){var e;let{iso2:a,date:s}=t;if(a=encodeURI(a),/^[a-zA-Z]{2}$/.test(a)){if(t.forceRefresh||this._shouldInvalidate()||"failed"===(null===(e=this.cache[a])||void 0===e?void 0:e.status)||!this.cache[a]){try{var i,r,o,l,n,d;this.cache[a]={};const t=await(await fetch("https://api.coronatracker.com/v3/stats/worldometer/country?countryCode="+a)).json();return this.cache[a]={status:"success",totalConfirmed:null!==(i=null===(r=t[0])||void 0===r?void 0:r.totalConfirmed)&&void 0!==i?i:0,totalDeaths:null!==(o=null===(l=t[0])||void 0===l?void 0:l.totalDeaths)&&void 0!==o?o:0,totalRecovered:null!==(n=null===(d=t[0])||void 0===d?void 0:d.totalRecovered)&&void 0!==n?n:0},this.__lastUpdate=Date.now(),this.cache[a]}catch{this.cache[a]={status:"failed"}}return this.dispatchEvent(new Event("change")),this.cache[a]}return this.cache[a]}}},L={url:new URL("./src/services/countryDetailService.js",document.baseURI).href};const D=new class extends t{constructor(){super(),this.cache={}}async getDetails(t){var a,s;let{iso2:i,date:r}=t;if(i=encodeURI(i),!/^[a-zA-Z]{2}$/.test(i))return;let o=""+i;if(t.forceRefresh||this._shouldInvalidate()||"failed"===(null===(a=this.cache[o])||void 0===a?void 0:a.status)||!this.cache[o])try{this.cache[o]={};const t=await(await fetch(new URL(`../../data/territories/${i}.json`,L.url))).json();this.cache[o]=t}catch(t){this.cache[o]={status:"failed"}}var l=this.cache[o];if("failed"===l.status)return this.dispatchEvent(new Event("change")),l;const n={};var d=l[e(r,"yyyy-MM-dd")];for(const t of Object.keys(d.lockdown.travel))for(const{label:e,value:a}of d.lockdown.travel[t])Array.isArray(n[e])?n[e].push(a):n[e]=[a];var c={status:"success",date:d.lockdown.date,measures:d.lockdown.measures,travel:n,max_gathering:null===(s=d.lockdown.measures.find(t=>"max_gathering"==t.label))||void 0===s?void 0:s.value};return this.__lastUpdate=Date.now(),this.dispatchEvent(new Event("change")),c}},C={url:new URL("./src/services/populationService.js",document.baseURI).href};const R=new class extends t{constructor(){super(),this.cache={}}async getPopulation(t){var e;if(t||!this.__population)try{this.__population=await fetch(new URL("../../data/population.json",C.url)).then(t=>t.json())}catch{return{status:"failed"}}return this.dispatchEvent(new Event("change")),{status:"success",data:null!==(e=this.__population)&&void 0!==e?e:0}}};new class extends t{constructor(){super(),this.cache={}}async getAdvice(t){var e;let{iso2:a}=t;if(a=encodeURI(a),/^[a-zA-Z]{2}$/.test(a)){if(t.forceRefresh||"failed"===(null===(e=this.cache[a])||void 0===e?void 0:e.status)||!this.cache[a]){try{this.cache[a]={};const t=await(await fetch("https://www.travel-advisory.info/api?countrycode="+a)).json();return this.cache[a]={status:"success",advice:t.data[a].advisory.message,score:t.data[a].advisory.score+"/5"},this.cache[a]}catch(t){this.cache[a]={status:"failed"}}return this.dispatchEvent(new Event("change")),this.cache[a]}return this.cache[a]}}};let A,S,j,U=t=>t;const I=a(A||(A=U`
  &{
    width: 100%;
    display: flex;
    position: relative;
    & > button{
      & {
        position: absolute !important;
        color: #7C7C7C;
        background-color: transparent;
        padding: 0px !important;
        top: 10px;
        width: 30px !important;
        height: 30px !important;
        right: 5px;
        border: 0px;
        border-radius: 50% !important;
        &:hover {
          cursor: pointer;
        }
        
      }
      .dark & {
        position: absolute !important;
        color: #7c7c7c;
        background-color: transparent;
        padding: 0px;
        top: 10px;
        width: 30px;
        right: 5px;
        border-radius: 50%;
        &:hover {
          cursor: pointer;
        }
      }
    }
    & .tab{
      width: 35%;
      background-color: #E5E5E5;
      font-family: Montserrat;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      padding: 5px;
      color: #7c7c7c;
      border: 1px solid #999999;
      border-top: 0px;
      transition: 0.5s;
      display: flex;
      height: 100%;
      justify-content: center;
      align-items: center;
      min-height: 50px;
      &:hover{
        cursor: pointer;
      }
      &.active{
        border-bottom: 0px;
        background-color: #FFF 
        border: 0px;
        .dark &{
          background-color: var(--ld-bg);
          color: white;
        }
      }
      &:first-child{
        border-top-left-radius: 19px;
      }
      &:last-child{
        border-top-right-radius: 19px;
      }
      &:nth-child(3){
        border-top-right-radius: 19px;
        padding-right: 35px;
      }
      &:nth-child(2){
        width: 30%;
      }
    }
  }
`)),T=a(S||(S=U`
  & {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`)),N=a(j||(j=U`
  .countryInfo.loader {
    background-color: white !important;
    .dark & {
      background-color: var(--ld-bg) !important;
    }
  }
  & {
    background-color: var(--ld-bg);
    color: var(--ld-text);
    padding: 0 16px 16px 16px;
    width: 100%;
    overflow-y: auto;
    &::-webkit-scrollbar {
      padding-left: 1.5%;
      padding-right: 1.5%;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #ccc;
      border-radius: 7px;
      border: 4px solid white;
    }
    & .ld-font-subheader {
      display: flex;
      justify-content: space-between;
      font-weight: 600;
      font-size: 14px;
      line-height: 18px;
      letter-spacing: 0.02em;
      & span:first-child {
        font-weight: 600;
        font-size: 14px;
        line-height: 18px;
        letter-spacing: 0.05em;
        padding-right:7px;
      }
    }
  }

  .countryInfo dl {
    margin-top: -27px;
  }

  dl {
    margin-block-end: 0;
    margin-block-start: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
  }

  h1 {
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    margin-bottom: 8px;
  }

  h2 {
    margin-top: 7px;
    padding-bottom: 5px;
    border-bottom: 7px;
    margin-bottom:2px;
    &.last {
      padding: 0px;
      padding-top: 4px;
      border-top: 1px solid var(--ld-gray-5);
      border-bottom: 0px;
      &.transport {
        margin-bottom: -20px;
      }
    }
  }

  .data {
    display: flex;
    flex-wrap: wrap;
  }

  .data-entry {
    font-variant-numeric: tabular-nums;
    margin-bottom: 7px;
    padding-bottom: 7px;
    border-bottom: 1px solid var(--ld-gray-5);
    width: 100%;
    &.is-half {
      width: 50%;
    }
    &.is-third {
      width: 33.33%;
    }
  }

  .data-entry dt {
    font-size: 12px;
    font-weight: 500;
  }

  .data dd {
    margin-left: 0;
    font-size: 14px;
    text-align: left;
    font-weight: 600;
  }

  .legend dl {
    display: flex;
  }

  .legend-item {
    display: flex;
  }

  .legend-item dt {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-right: 5px;
  }

  .legend-item dd {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.02em;
    margin-inline-start: 0;
    margin-right:5px;
    .dark & {
      color: var(--ld-text);
    }
  }

  .legend-green {
    background-color: var(--ld-green-1);
  }

  .legend-yellow {
    background-color: var(--ld-yellow-1);
  }

  .legend-red {
    background-color: var(--ld-red-1);
  }

  .legend-gray {
    background-color: var(--ld-gray-3);
  }

  .measures {
    display: grid;
    grid-template-columns: 1fr 1fr;
    list-style: none;
    padding: 0;
    margin: 0 0px 0;
  }

  .measures > li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 0px;
    text-align: left;
  }

  .measure-wrapper {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .measure svg {
    width: 22px;
    height: 22px;
  }

  .measure-label {
    padding: 6px;
    border-radius: 20px;
    color: var(--ld-gray-1);
    pointer-events: none;
    transition: opacity 300ms ease-in-out;
    font-size: 12px;
    .dark & {
      color: var(--ld-text);
    }
  }

  .measure:hover ~ .measure-label {
    opacity: 1;
  }

  .measure-YES {
    fill: var(--ld-green-1);
  }

  .measure-PARTIAL {
    fill: var(--ld-yellow-1);
  }

  .measure-NO {
    fill: var(--ld-red-1);
  }

  .measure-UNCLEAR {
    fill: var(--ld-gray-3);
  }

  .ld-travel {
    display: flex;
    margin-bottom: 10px;
  }

  .ld-travel dt {
    flex-basis: 62%;
    flex-shrink: 0;
    font-weight: 300;
    margin-right: 20px;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    .dark & {
      color: var(--ld-text);
    }
  }

  .ld-travel dd {
    margin-left: 0;
  }

  .ld-travel--val-icon {
    fill: var(--ld-text);
  }

  .ld-travel--val-YES {
    background-color: var(--ld-green-1);
  }

  .ld-travel--val-PARTIALLY {
    background-color: var(--ld-yellow-1);
  }

  .ld-travel--val-NO {
    background-color: var(--ld-red-1);
  }

  .ld-travel--val-UNCLEAR {
    background-color: var(--ld-gray-3);
  }

  .ld-travel--val-NA {
    /* TODO: What to color NA? */
    background-color: var(--ld-gray-3);
  }

  .sr-only {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }

  .ld-travel--values {
    flex: 1;
    display: flex;
    justify-content: space-around;
  }

  .ld-travel--symbol {
    position: relative;
    text-align: center;
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  /* .ld-travel--symbol::after {
    position: absolute;
    opacity: 0;
    transition: opacity 300ms ease-in-out;
    content: attr(data-tooltip);
  }

  .ld-travel--symbol:hover::after {
    opacity: 1;
  } */
`));class z extends HTMLElement{constructor(){super(),this._show=this._show.bind(this),this._hide=this._hide.bind(this)}connectedCallback(){this.hasAttribute("role")||this.setAttribute("role","tooltip"),this.hasAttribute("tabindex")||this.setAttribute("tabindex",-1),this._hide(),this._target=document.querySelector("[aria-describedby="+this.id+"]"),this._target&&(this._target.addEventListener("focus",this._show),this._target.addEventListener("blur",this._hide),this._target.addEventListener("mouseenter",this._show),this._target.addEventListener("mouseleave",this._hide))}disconnectedCallback(){this._target&&(this._target.removeEventListener("focus",this._show),this._target.removeEventListener("blur",this._hide),this._target.removeEventListener("mouseenter",this._show),this._target.removeEventListener("mouseleave",this._hide),this._target=null)}_show(){this.hidden=!1}_hide(){this.hidden=!0}}window.customElements.define("tool-tip",z);const M={1:"YES",2:"PARTIALLY",3:"NO",4:"UNCLEAR",5:"NA"},P={1:"YES",2:"PARTIAL",3:"NO",4:"UNCLEAR"},O=["Land","Flight","Sea"],F={commerce:{text:"Commerce"},foreigners_inbound:{text:"Foreigners (in)"},foreigners_outbound:{text:"Foreigners (out)"},local:{text:"In between cities"},nationals_inbound:{text:"Nationals (in)"},nationals_outbound:{text:"Nationals (out)"},stopovers:{text:"Stopovers"},cross_border_workers:{text:"Cross border workers"}},Y=[{id:"lockdown_status",label:"Stay Home",icon:n},{id:"going_to_shops",label:"Shopping",icon:d},{id:"city_movement_restriction",label:"Outdoors",icon:c},{id:"military_not_deployed",label:"Military",icon:u},{id:"attending_religious_sites",label:"Religious Sites",icon:h},{id:"electricity_nominal",label:"Electricity",icon:p},{id:"going_to_work",label:"Go to Work",icon:v},{id:"water_nominal",label:"Water",icon:g},{id:"academia_allowed",label:"Go to Schools",icon:b},{id:"internet_nominal",label:"Telecom",icon:m}],W=[{id:1,name:"Common Details"},{id:2,name:"Travel Details"},{id:3,name:"Reports"}];class $ extends s{render(t){var a,s,r,o,l;let{coronaData:n,populationData:d,countryDetails:c,country:u,date:h}=this.props;return[i("h2",{class:"ld-font-subheader"},i("span",null,u)," ",i("span",null,e(h,"dd/MM/yyyy"))),i("dl",{class:"data"},i("div",{class:"data-entry is-half"},i("dt",null,"Population"),i("dd",{class:"data-value"},null!==(a=Number(null==d?void 0:d.Population).toLocaleString())&&void 0!==a?a:"Error")),i("div",{class:"data-entry is-half"},i("dt",null,"Max assembly"),i("dd",{class:"data-value"},null!==(s=null==c?void 0:c.max_gathering)&&void 0!==s?s:"Unknown")),i("div",{class:"data-entry is-third"},i("dt",null,"Cases"),i("dd",{class:"data-value"},null!==(r=Number(null==n?void 0:n.totalConfirmed).toLocaleString())&&void 0!==r?r:"Error")),i("div",{class:"data-entry is-third"},i("dt",null,"Recoveries"),i("dd",{class:"data-value"},null!==(o=Number(null==n?void 0:n.totalRecovered).toLocaleString())&&void 0!==o?o:"Error")),i("div",{class:"data-entry is-third"},i("dt",null,"Deaths"),i("dd",{class:"data-value"},null!==(l=Number(null==n?void 0:n.totalDeaths).toLocaleString())&&void 0!==l?l:"Error"))),i(q,null),"success"===c.status?[i("h2",{class:"ld-font-subheader last"},"Daily life (restrictions)"),i("ul",{class:"measures"},(p=c.measures,Y.map(t=>{var e;const a=null==p?void 0:p.find(e=>e.label===t.id);return{...t,value:null!==(e=P[a.value])&&void 0!==e?e:P[4]}})).map(t=>i("li",null,i("div",{class:"measure-wrapper"},i("div",{"aria-labelledby":"measure-label-"+t.id,class:"measure measure-"+t.value,"aria-label":t.value.toLowerCase()},t.icon),i("span",{id:"measure-label-"+t.id,class:"measure-label"},t.label)))))]:i("div",{class:"dialog"},i("h2",null,"Measures"),"Failed to get data for this country.")];var p}}class Z extends s{render(t){let{countryDetails:e}=this.props;return"success"===e.status?[i("br",null),i("br",null),i(q,null),i("h2",{class:"ld-font-subheader last transport"},"Transport (restrictions)"),i("dl",null,i("div",{class:"ld-travel"},i("dt",null),i("div",{class:"ld-travel--values"},i("dd",{class:"ld-travel--val-icon"},_),i("dd",{class:"ld-travel--val-icon"},w),i("dd",{class:"ld-travel--val-icon"},y))),Object.keys(e.travel).map((t,a)=>i("div",{class:"ld-travel"},i("dt",null,F[t].text),i("div",{class:"ld-travel--values"},e.travel[t].map((t,e)=>{var a,s,r,o,l;return i("dd",{"aria-label":O[e]+": "+(null!==(a=null===(s=M[t])||void 0===s?void 0:s.toLowerCase())&&void 0!==a?a:M[4].toLowerCase()),"data-tooltip":null!==(r=null===(o=M[t])||void 0===o?void 0:o.toLowerCase())&&void 0!==r?r:M[4].toLowerCase(),class:"ld-travel--symbol ld-travel--val-"+(null!==(l=M[t])&&void 0!==l?l:M[5])})})))))]:[i("div",{class:"dialog"},i("h2",null,"Measures"),"Failed to get data for this country.")," "]}}class q extends s{render(t){return i("div",{class:"legend ld-font-legend"},i("dl",null,i("div",{class:"legend-item"},i("dt",{class:"legend-green","aria-label":"green"}),i("dd",null,"None")),i("div",{class:"legend-item"},i("dt",{class:"legend-yellow","aria-label":"yellow"}),i("dd",null,"Partial")),i("div",{class:"legend-item"},i("dt",{class:"legend-red","aria-label":"red"}),i("dd",null,"Total")),i("div",{class:"legend-item"},i("dt",{class:"legend-gray","aria-label":"gray"}),i("dd",null,"Unclear"))))}}class G extends s{render(t){return i("div",{class:T},i("h3",null,"Coming Soon.."))}}export default class extends s{constructor(t){super(t),this.changeTab=this.changeTab.bind(this),this.state={currentTab:1}}async componentDidUpdate(t){this.props.date!==t.date&&this.setState({countryDetails:await D.getDetails({iso2:this.props.iso2,date:this.props.date})})}async componentWillMount(){this.setState({coronaData:await E.getCountry({iso2:this.props.iso2}),populationData:await R.getPopulation(),countryDetails:await D.getDetails({iso2:this.props.iso2,date:this.props.date})})}changeTab(t){this.setState({currentTab:t})}render(t,{coronaData:e,populationData:a,countryDetails:s}){var n;if(!navigator.onLine&&("success"!==(null==e?void 0:e.status)||"success"!==(null==a||null===(n=a.data)||void 0===n?void 0:n.status)||"success"!==(null==s?void 0:s.status)))return i("div",{class:"countryInfo "+o},r,i("b",null,"You are not connected to the internet"),i("p",null,"Information for this country can't be displayed because you are currently offline. Please check your internet connection."));return e||a||s||!navigator.onLine?[i("div",{class:I},W.map(t=>i("div",{onClick:()=>this.changeTab(t.id),class:"tab "+(this.state.currentTab===t.id?"active":"")},t.name)),i("button",{onClick:this.props.onClose},x)),i("div",{class:"countryInfo "+N},1===this.state.currentTab?i($,{date:this.props.date,country:this.props.country,coronaData:e,populationData:null==a?void 0:a.data[this.props.iso2],countryDetails:s}):2===this.state.currentTab?i(Z,{countryDetails:s}):i(G,null))]:i("div",{class:"countryInfo loader "+l},f)}}

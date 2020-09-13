(this["webpackJsonpcovid19-trofa-graph"]=this["webpackJsonpcovid19-trofa-graph"]||[]).push([[0],{212:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(74),i=a.n(r),c=(a(90),a(35)),s=a(230),u=a(228),l=a(229),d=a(232),m=a(231),h=a(31),f=a(8),g=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];Object(h.a)(this,t),this._confirmedPt=void 0,this._confirmedNorth=void 0,this._newConfirmedPt=void 0,this._activePt=void 0,this._confirmedPt=e,this._confirmedNorth=a,this._newConfirmedPt=n,this._activePt=o}return Object(f.a)(t,[{key:"confirmedPt",get:function(){return this._confirmedPt}},{key:"confirmedNorth",get:function(){return this._confirmedNorth}},{key:"newConfirmedPt",get:function(){return this._newConfirmedPt}},{key:"activePt",get:function(){return this._activePt}}]),t}(),p=a(32),v=a(50),b=a.n(v),E=function(){function t(e,a){Object(h.a)(this,t),this._dateStr=void 0,this._count=void 0,this._dateStr=e,this._count="number"===typeof a?a:parseInt(a),isNaN(this._count)&&(this._count=0)}return Object(f.a)(t,[{key:"dateStr",get:function(){return this._dateStr}},{key:"count",get:function(){return this._count}}]),t}();function C(t){var e="https://raw.githubusercontent.com/dssg-pt/covid19pt-data/master/"+t,a=new Headers({Accept:"application/vnd.github.v3+json"});return console.log("[_getDataFromSource] Fetching "+t),fetch(e,{method:"GET",headers:a})}function w(t,e){C("data_concelhos.csv").then((function(t){if(t&&200===t.status)return t.text()})).then((function(a){var n=[],o=new p.Readable;o.push(a),o.push(null),o.pipe(b()()).on("data",(function(e){return n.push(new E(e.data,e[t]))})).on("end",(function(){return e(n)}))})).catch((function(t){return console.error(t)}))}function P(t){C("data.csv").then((function(t){if(t&&200===t.status)return t.text()})).then((function(e){var a=[],n=[],o=[],r=[],i=new p.Readable;i.push(e),i.push(null),i.pipe(b()()).on("data",(function(t){a.push(new E(t.data,t.confirmados)),n.push(new E(t.data,t.confirmados_arsnorte)),o.push(new E(t.data,t.confirmados_novos)),r.push(new E(t.data,t.ativos))})).on("end",(function(){return t(new g(a,n,o,r))}))})).catch((function(t){return console.error(t)}))}var _=a(77),k=a(226);function y(t,e){var a=t.length;return a<=e?t:t.slice(a-e)}function O(t){for(var e=t[0],a=[new E(e.dateStr,0)],n=1;n<t.length;n++){var o=t[n];a.push(new E(o.dateStr,o.count-e.count)),e=o}return a}function j(t,e,a){return{datasets:[Object(_.a)({label:e,fill:!0,categoryPercentage:1,barPercentage:.95,lineTension:.1,borderWidth:2,pointBackgroundColor:"#fff",pointHoverBorderColor:"rgba(220,220,220,1)",pointBorderWidth:1,pointHoverRadius:5,data:t.map((function(t){return t.count}))},a)],labels:t.map((function(t){return t.dateStr}))}}function B(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:t,suggestedMin:e,suggestedMax:a}}]}}}var N=0;function x(t,e){return o.a.createElement(k.a,{item:!0,xs:12,key:N++},o.a.createElement("div",{className:e.chartContainer},t))}var S=function(t,e){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return o.a.createElement("div",null,o.a.createElement(u.a,{variant:"h3",style:{textAlign:"center"},gutterBottom:!0},t),o.a.createElement(k.a,{container:!0,spacing:3},n.map((function(t){return x(t,e)}))))},M=a(22),R=a(80),A=function(t){var e=t.data,a=t.datapointsCount,n=t.dateRange,r=t.label,i=t.theme,c=t.zeroBased,s=y(e,a),u=Math.min.apply(Math,Object(M.a)(s.map((function(t){return t.count})))),l=Math.max.apply(Math,Object(M.a)(s.map((function(t){return t.count})))),d=Math.max((l-u)/20,c?4:2),m=Math.round(l+d),h=Math.round(u-d);return c&&(h=Math.max(h,0)),o.a.createElement(R.a,{data:j(s,"".concat(r," (").concat(n||a," dias)"),i),options:B(!1,h,m)})};A.defaultProps={zeroBased:!0,dateRange:0};var T=A,H={backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",pointBorderColor:"rgba(75,192,192,1)",pointHoverBackgroundColor:"rgba(75,192,192,1)"},z={backgroundColor:"rgba(192,75,192,0.4)",borderColor:"rgba(192,75,192,1)",pointBorderColor:"rgba(192,75,192,1)",pointHoverBackgroundColor:"rgba(192,75,192,1)"},W={backgroundColor:"rgba(192,192,75,0.4)",borderColor:"rgba(192,192,75,1)",pointBorderColor:"rgba(192,192,75,1)",pointHoverBackgroundColor:"rgba(192,192,75,1)"},q=function(t){var e=t.trofaEntries,a=t.ptEntries,n=t.classes;return S("Casos confirmados",n,o.a.createElement(T,{data:e,datapointsCount:14,dateRange:90,label:"Casos confirmados na Trofa",theme:H}),o.a.createElement(T,{data:a.confirmedNorth,datapointsCount:30,label:"Casos confirmados no Norte",theme:H}),o.a.createElement(T,{data:a.confirmedPt,datapointsCount:30,label:"Casos confirmados em Portugal",theme:H}),o.a.createElement(T,{data:a.confirmedPt,datapointsCount:90,label:"Casos confirmados em Portugal",theme:H}))},D=function(t){var e=t.trofaEntries,a=t.northEntries,n=t.ptEntries,r=t.classes;return S("Casos novos",r,o.a.createElement(T,{data:e,datapointsCount:14,dateRange:90,label:"Casos novos na Trofa",theme:W}),o.a.createElement(T,{data:a,datapointsCount:30,label:"Casos novos no Norte",theme:W}),o.a.createElement(T,{data:n.newConfirmedPt,datapointsCount:30,label:"Casos novos em Portugal",theme:W}),o.a.createElement(T,{data:n.newConfirmedPt,datapointsCount:90,label:"Casos novos em Portugal",theme:W}))},F=function(t){var e=t.ptEntries,a=t.classes;return S("Casos ativos",a,o.a.createElement(T,{data:e.activePt,datapointsCount:90,label:"Casos ativos em Portugal",theme:z,zeroBased:!1}),o.a.createElement(T,{data:O(e.activePt),datapointsCount:90,label:"Varia\xe7\xe3o de casos ativos em Portugal",theme:z,zeroBased:!1}))},G=Object(l.a)((function(){return{root:{backgroundColor:"#f5f5f5",flexGrow:1,display:"flex","align-items":"center","justify-content":"center",padding:15,paddingRight:30},chartContainer:{position:"relative",margin:"auto",height:"50vh",width:"90vw"},progress:{float:"none",margin:"0 auto"}}})),I=function(){var t=G(),e=Object(n.useState)(!0),a=Object(c.a)(e,2),r=a[0],i=a[1],l=Object(n.useState)([]),h=Object(c.a)(l,2),f=h[0],p=h[1],v=Object(n.useState)(new g),b=Object(c.a)(v,2),E=b[0],C=b[1],_="",k="",y=[],j=[];return r||(_=f[f.length-1].dateStr,k=E.confirmedPt[E.confirmedPt.length-1].dateStr,y=O(f),j=O(E.confirmedNorth)),Object(n.useEffect)((function(){w("TROFA",p),P(C)}),[]),r&&f.length>0&&E.confirmedPt.length>0&&i(!1),o.a.createElement("div",{className:t.root},r?o.a.createElement(s.a,{className:t.progress}):o.a.createElement("div",null,o.a.createElement(d.a,null,o.a.createElement(m.a,null,o.a.createElement(u.a,{variant:"body2",component:"p"},"A \xfaltima atualiza\xe7\xe3o destes dados ocorreu nas seguintes datas: ","Portugal/Norte => ".concat(k,", Trofa => ").concat(_),".",o.a.createElement("br",null)))),o.a.createElement("br",null),o.a.createElement(F,{ptEntries:E,classes:t}),o.a.createElement("br",null),o.a.createElement(D,{trofaEntries:y,northEntries:j,ptEntries:E,classes:t}),o.a.createElement("br",null),o.a.createElement(q,{trofaEntries:f,ptEntries:E,classes:t}),o.a.createElement("br",null),o.a.createElement(d.a,null,o.a.createElement(m.a,null,o.a.createElement(u.a,{variant:"body2",component:"p"},"Os dados aqui apresentados s\xe3o extra\xeddos do reposit\xf3rio ",o.a.createElement("a",{href:"https://github.com/dssg-pt/covid19pt-data"},"dssg-pt/covid19pt-data"),".",o.a.createElement("br",null),"O c\xf3digo para este dashboard pode ser consultado ",o.a.createElement("a",{href:"https://github.com/DiogoDuque/covid19TrofaGraph"},"aqui"),".",o.a.createElement("br",null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},85:function(t,e,a){t.exports=a(212)},90:function(t,e,a){},93:function(t,e){},95:function(t,e){}},[[85,1,2]]]);
//# sourceMappingURL=main.ffc358f1.chunk.js.map
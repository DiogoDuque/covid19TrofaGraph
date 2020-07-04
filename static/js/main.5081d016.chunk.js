(this["webpackJsonpcovid19-trofa-graph"]=this["webpackJsonpcovid19-trofa-graph"]||[]).push([[0],{212:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(75),i=a.n(r),c=(a(90),a(36)),s=a(226),l=a(32),u=a(6),d=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];Object(l.a)(this,t),this._confirmedPt=void 0,this._confirmedNorth=void 0,this._newConfirmedPt=void 0,this._confirmedPt=e,this._confirmedNorth=a,this._newConfirmedPt=n}return Object(u.a)(t,[{key:"confirmedPt",get:function(){return this._confirmedPt}},{key:"confirmedNorth",get:function(){return this._confirmedNorth}},{key:"newConfirmedPt",get:function(){return this._newConfirmedPt}}]),t}(),m=a(33),h=a(51),f=a.n(h);var p=function(){function t(e,a){Object(l.a)(this,t),this._dateStr=void 0,this._count=void 0,this._dateStr=e,this._count="number"===typeof a?a:parseInt(a),isNaN(this._count)&&(this._count=0)}return Object(u.a)(t,[{key:"dateStr",get:function(){return this._dateStr}},{key:"count",get:function(){return this._count}}]),t}();function g(t){var e="https://cors-anywhere.herokuapp.com/https://github.com/dssg-pt/covid19pt-data/raw/master/"+t,a=new Headers({"Content-Type":"application/x-www-form-urlencoded",Origin:"https://github.com",Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8"});return console.log("Fetching "+t),fetch(e,{method:"GET",headers:a})}function v(t,e){g("data_concelhos.csv").then((function(t){if(t&&200===t.status)return t.text()})).then((function(a){var n=[],o=new m.Readable;o.push(a),o.push(null),o.pipe(f()()).on("data",(function(e){return n.push(new p(e.data,e[t]))})).on("end",(function(){return e(n)}))})).catch((function(t){return console.error(t)}))}function b(t){g("data.csv").then((function(t){if(t&&200===t.status)return t.text()})).then((function(e){var a=[],n=[],o=[],r=new m.Readable;r.push(e),r.push(null),r.pipe(f()()).on("data",(function(t){a.push(new p(t.data,t.confirmados)),n.push(new p(t.data,t.confirmados_arsnorte)),o.push(new p(t.data,t.confirmados_novos))})).on("end",(function(){return t(new d(a,n,o))}))})).catch((function(t){return console.error(t)}))}var C=a(225),E=a(223),w=a(78);function B(t,e){var a=t.length;return a<=e?t:t.slice(a-e)}function P(t){for(var e=t[0],a=[new p(e.dateStr,0)],n=1;n<t.length;n++){var o=t[n];a.push(new p(o.dateStr,o.count-e.count)),e=o}return a}function _(t,e,a){return{datasets:[Object(w.a)({label:e,fill:!0,lineTension:.1,pointBackgroundColor:"#fff",pointHoverBorderColor:"rgba(220,220,220,1)",pointBorderWidth:1,pointHoverRadius:5,data:t.map((function(t){return t.count}))},a)],labels:t.map((function(t){return t.dateStr}))}}function k(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:t,suggestedMin:e,suggestedMax:a}}]}}}function x(t,e){return o.a.createElement(E.a,{item:!0,xs:12},o.a.createElement("div",{className:e.chartContainer},t))}var O=a(22),y=a(81),j=function(t){var e=t.data,a=t.datapointsCount,n=t.label,r=t.theme,i=t.zeroBased,c=B(e,a),s=Math.min.apply(Math,Object(O.a)(c.map((function(t){return t.count})))),l=Math.max.apply(Math,Object(O.a)(c.map((function(t){return t.count})))),u=Math.max(l-s,20),d=Math.round(s-u/10);i&&(d=Math.max(d,0));var m=Math.round(l+u/10);return o.a.createElement(y.a,{data:_(c,"".concat(n," (").concat(a," dias)"),r),options:k(!1,d,m)})};j.defaultProps={zeroBased:!0};var N=j,M={backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",pointBorderColor:"rgba(75,192,192,1)",pointHoverBackgroundColor:"rgba(75,192,192,1)"},S={backgroundColor:"rgba(192,75,192,0.4)",borderColor:"rgba(192,75,192,1)",pointBorderColor:"rgba(192,75,192,1)",pointHoverBackgroundColor:"rgba(192,75,192,1)"},A={backgroundColor:"rgba(192,192,75,0.4)",borderColor:"rgba(192,192,75,1)",pointBorderColor:"rgba(192,192,75,1)",pointHoverBackgroundColor:"rgba(192,192,75,1)"},T=function(t){var e=t.trofaEntries,a=t.ptEntries,n=t.classes;return o.a.createElement("div",null,o.a.createElement(C.a,{variant:"h3",style:{textAlign:"center"},gutterBottom:!0},"Casos confirmados"),o.a.createElement(E.a,{container:!0,spacing:3},x(o.a.createElement(N,{data:e,datapointsCount:30,label:"Casos confirmados na Trofa",theme:M}),n),x(o.a.createElement(N,{data:a.confirmedNorth,datapointsCount:30,label:"Casos confirmados no Norte",theme:M}),n),x(o.a.createElement(N,{data:a.confirmedPt,datapointsCount:30,label:"Casos confirmados em Portugal",theme:M}),n),x(o.a.createElement(N,{data:a.confirmedPt,datapointsCount:90,label:"Casos confirmados em Portugal",theme:M}),n)))},z=function(t){var e=t.trofaEntries,a=t.ptEntries,n=t.classes;return o.a.createElement("div",null,o.a.createElement(C.a,{variant:"h3",style:{textAlign:"center"},gutterBottom:!0},"Casos novos"),o.a.createElement(E.a,{container:!0,spacing:3},x(o.a.createElement(N,{data:e,datapointsCount:30,label:"Casos novos na Trofa",theme:A}),n),x(o.a.createElement(N,{data:[],datapointsCount:30,label:"Casos novos no Norte",theme:A}),n),x(o.a.createElement(N,{data:a.newConfirmedPt,datapointsCount:30,label:"Casos novos em Portugal",theme:A}),n),x(o.a.createElement(N,{data:a.newConfirmedPt,datapointsCount:90,label:"Casos novos em Portugal",theme:A}),n)))},H=function(t){var e=t.trofaEntries,a=(t.ptEntries,t.classes);return o.a.createElement("div",null,o.a.createElement(C.a,{variant:"h3",style:{textAlign:"center"},gutterBottom:!0},"Varia\xe7\xe3o de casos"),o.a.createElement(E.a,{container:!0,spacing:3},x(o.a.createElement(N,{data:e,datapointsCount:30,label:"Varia\xe7\xe3o de casos na Trofa",theme:S,zeroBased:!1}),a),x(o.a.createElement(N,{data:[],datapointsCount:30,label:"Varia\xe7\xe3o de casos no Norte",theme:S,zeroBased:!1}),a),x(o.a.createElement(N,{data:[],datapointsCount:30,label:"Varia\xe7\xe3o de casos em Portugal",theme:S,zeroBased:!1}),a),x(o.a.createElement(N,{data:[],datapointsCount:90,label:"Varia\xe7\xe3o de casos em Portugal",theme:S,zeroBased:!1}),a)))},R=a(227),V=Object(s.a)((function(t){return{root:{flexGrow:1,marginLeft:10,marginRight:30},chartContainer:{position:"relative",margin:"auto",height:"50vh",width:"90vw"},progress:{float:"none",margin:"0 auto"}}})),W=function(){var t=V(),e=Object(n.useState)(!0),a=Object(c.a)(e,2),r=a[0],i=a[1],s=Object(n.useState)([]),l=Object(c.a)(s,2),u=l[0],m=l[1],h=Object(n.useState)(new d),f=Object(c.a)(h,2),p=f[0],g=f[1];return Object(n.useEffect)((function(){v("TROFA",m),b(g)}),[]),r&&u.length>0&&p.confirmedPt.length>0&&i(!1),r?o.a.createElement(R.a,{className:t.progress}):o.a.createElement("div",{className:t.root},o.a.createElement(T,{trofaEntries:u,ptEntries:p,classes:t}),o.a.createElement(z,{trofaEntries:P(u),ptEntries:p,classes:t}),o.a.createElement(H,{trofaEntries:P(P(u)),ptEntries:p,classes:t}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},85:function(t,e,a){t.exports=a(212)},90:function(t,e,a){},93:function(t,e){},95:function(t,e){}},[[85,1,2]]]);
//# sourceMappingURL=main.5081d016.chunk.js.map
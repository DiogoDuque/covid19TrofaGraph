(this["webpackJsonpcovid19-trofa-graph"]=this["webpackJsonpcovid19-trofa-graph"]||[]).push([[0],{181:function(t,e){},183:function(t,e){},207:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(68),i=n.n(r),c=(n(85),n(77)),s=n(220),u=n(222),d=n(223),l=n(71),h=n(73),p=n(12);var f=function(){function t(e,n){Object(h.a)(this,t),this._dateStr=void 0,this._date=void 0,this._count=void 0,this._dateStr=e,this._date=function(t){var e=t.split("-");return new Date(parseInt(e[2]),parseInt(e[1])-1,parseInt(e[0]))}(e),this._count=parseInt(n),isNaN(this._count)&&(this._count=0)}return Object(p.a)(t,[{key:"dateStr",get:function(){return this._dateStr}},{key:"date",get:function(){return this._date}},{key:"count",get:function(){return this._count}}]),t}();function m(t,e){var n=t.length;return n<=e?t:t.slice(n-e)}function g(t,e){return{datasets:[{label:e,fill:!0,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",data:t.map((function(t){return t.count}))}],labels:t.map((function(t){return t.dateStr}))}}function v(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{maintainAspectRatio:!1,title:{display:!0,fontSize:15,text:t},scales:{yAxes:[{ticks:{beginAtZero:e}}]}}}var b=function(t){var e=m(t.data,30);return o.a.createElement(l.a,{data:g(e,"30 dias"),options:v("Casos confirmados na Trofa",!0)})},w=n(43),k=n(74),x=n.n(k);function _(t,e){var n=new Headers({"Content-Type":"application/x-www-form-urlencoded",Origin:"https://github.com",Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8"});fetch("https://cors-anywhere.herokuapp.com/https://github.com/dssg-pt/covid19pt-data/raw/master/data_concelhos.csv",{method:"GET",headers:n}).then((function(t){if(t&&200===t.status)return t.text()})).then((function(n){var a=[],o=new w.Readable;o.push(n),o.push(null),o.pipe(x()()).on("data",(function(e){return a.push(new f(e.data,e[t]))})).on("end",(function(){return e(a)}))})).catch((function(t){return console.error(t)}))}var C=Object(s.a)((function(t){return{root:{flexGrow:1,marginLeft:10,marginRight:30},chartContainer:{position:"relative",margin:"auto",height:"60vh",width:"90vw"}}})),y=function(){var t=C(),e=Object(a.useState)([]),n=Object(c.a)(e,2),r=n[0];return _("TROFA",n[1]),o.a.createElement("div",{className:t.root},o.a.createElement(d.a,{variant:"h1",style:{textAlign:"center"},gutterBottom:!0},"Covid19 @ Trofa"),o.a.createElement(u.a,{container:!0,spacing:3},o.a.createElement(u.a,{item:!0,xs:12},o.a.createElement("div",{className:t.chartContainer},o.a.createElement(b,{data:r})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},80:function(t,e,n){t.exports=n(207)},85:function(t,e,n){}},[[80,1,2]]]);
//# sourceMappingURL=main.20f6f26e.chunk.js.map
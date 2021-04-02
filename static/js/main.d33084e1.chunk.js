(this["webpackJsonpcovid19-trofa-graph"]=this["webpackJsonpcovid19-trofa-graph"]||[]).push([[0],{141:function(t,e,n){},144:function(t,e){},146:function(t,e){},273:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n(11),o=n.n(r),i=(n(141),n(12)),c=n(323),s=n(324),u=n(13),_=n(37),l=n(41),d=n(16),f=n(18),b=n(14),g=10562178,h=1007734,j=1129845,O=1238141,m=1598250,E=843392,p=1400011,v=1186442,D=1458363;function A(t,e){var n=function(t){var e=new Date;return e.setDate(e.getDate()-t),e}(t);return e.filter((function(t){return t.date>=n}))}function C(t){for(var e=t[0],n=[e.buildNewWith(e.x,0)],a=1;a<t.length;a++){var r=t[a];n.push(e.buildNewWith(r.x,r.y-e.y)),e=r}return n}function x(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:7;return t.map((function(n,a){var r=Math.max(0,a-e),o=Math.min(t.length,a+e),i=t.slice(r,o),c=i.reduce((function(t,e){return t+e.y}),0);return n.buildNewWith(n.x,Math.round(c/i.length))}))}function N(t,e){return t.map((function(t){var n=Math.round(1e5*t.y/e);return t.buildNewWith(t.x,n)}))}function I(t,e){return function(t,e,n){if(t.length!==e.length||t[0].x!==e[0].x)return console.error("The two Entry[] don't seem mergeable!\n".concat(t,"\n").concat(e)),[];for(var a=[],r=0;r<t.length;r++)a.push(n(t[r],e[r]));return a}(t,e,(function(t,e){return t.buildNewWith(t.x,t.y+e.y)}))}var y={CONFIRMED_0_9:"confirmados_0_9",CONFIRMED_10_19:"confirmados_10_19",CONFIRMED_20_29:"confirmados_20_29",CONFIRMED_30_39:"confirmados_30_39",CONFIRMED_40_49:"confirmados_40_49",CONFIRMED_50_59:"confirmados_50_59",CONFIRMED_60_69:"confirmados_60_69",CONFIRMED_70_79:"confirmados_70_79",CONFIRMED_80_PLUS:"confirmados_80_plus"},M={DEAD_0_9:"obitos_0_9",DEAD_10_19:"obitos_10_19",DEAD_20_29:"obitos_20_29",DEAD_30_39:"obitos_30_39",DEAD_40_49:"obitos_40_49",DEAD_50_59:"obitos_50_59",DEAD_60_69:"obitos_60_69",DEAD_70_79:"obitos_70_79",DEAD_80_PLUS:"obitos_80_plus"},R=Object(b.a)(Object(b.a)(Object(b.a)(Object(b.a)(Object(b.a)({CONFIRMED_PT:"confirmados",CONFIRMED_NORTH:"confirmados_arsnorte",CONFIRMED_CENTER:"confirmados_arscentro",CONFIRMED_LISBOA_TEJO:"confirmados_arslvt",CONFIRMED_ALENTEJO:"confirmados_arsalentejo",CONFIRMED_ALGARVE:"confirmados_arsalgarve",NEWCASES_PT:"confirmados_novos",ACTIVE_PT:"ativos",HOSPITALIZED:"internados",HOSPITALIZED_NURSERY:"internados_enfermaria",HOSPITALIZED_ICU:"internados_uci",DEAD_PT:"obitos"},{CONFIRMED_0_9_F:"confirmados_0_9_f",CONFIRMED_0_9_M:"confirmados_0_9_m",CONFIRMED_10_19_F:"confirmados_10_19_f",CONFIRMED_10_19_M:"confirmados_10_19_m",CONFIRMED_20_29_F:"confirmados_20_29_f",CONFIRMED_20_29_M:"confirmados_20_29_m",CONFIRMED_30_39_F:"confirmados_30_39_f",CONFIRMED_30_39_M:"confirmados_30_39_m",CONFIRMED_40_49_F:"confirmados_40_49_f",CONFIRMED_40_49_M:"confirmados_40_49_m",CONFIRMED_50_59_F:"confirmados_50_59_f",CONFIRMED_50_59_M:"confirmados_50_59_m",CONFIRMED_60_69_F:"confirmados_60_69_f",CONFIRMED_60_69_M:"confirmados_60_69_m",CONFIRMED_70_79_F:"confirmados_70_79_f",CONFIRMED_70_79_M:"confirmados_70_79_m",CONFIRMED_80_PLUS_F:"confirmados_80_plus_f",CONFIRMED_80_PLUS_M:"confirmados_80_plus_m"}),{DEAD_0_9_F:"obitos_0_9_f",DEAD_0_9_M:"obitos_0_9_m",DEAD_10_19_F:"obitos_10_19_f",DEAD_10_19_M:"obitos_10_19_m",DEAD_20_29_F:"obitos_20_29_f",DEAD_20_29_M:"obitos_20_29_m",DEAD_30_39_F:"obitos_30_39_f",DEAD_30_39_M:"obitos_30_39_m",DEAD_40_49_F:"obitos_40_49_f",DEAD_40_49_M:"obitos_40_49_m",DEAD_50_59_F:"obitos_50_59_f",DEAD_50_59_M:"obitos_50_59_m",DEAD_60_69_F:"obitos_60_69_f",DEAD_60_69_M:"obitos_60_69_m",DEAD_70_79_F:"obitos_70_79_f",DEAD_70_79_M:"obitos_70_79_m",DEAD_80_PLUS_F:"obitos_80_plus_f",DEAD_80_PLUS_M:"obitos_80_plus_m"}),y),M),{},{INCIDENCE_PT:"incidencia_pt",TOWN_INCIDENCE_14:"incidencia",TOWN_CONFIRMED_14:"confirmados_14",VACCINE_DOSE_1:"doses1",VACCINE_DOSE_2:"doses2"}),F=function(){function t(e){Object(d.a)(this,t),this._name=void 0,this._name=e}return Object(f.a)(t,[{key:"getAll",value:function(t){return console.warn("The EntriesAggregator '".concat(this._name,"' was not properly instantiated and is trying to call getAll!")),[]}},{key:"getLast",value:function(t){return console.warn("The EntriesAggregator '".concat(this._name,"' was not properly instantiated and is trying to call getLastEntry!")),null}}]),t}(),S=function(t){Object(_.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(d.a)(this,n),(a=e.call(this,t.name))._aggregationMap=void 0,a._aggregationMap=t._aggregator,a}return Object(f.a)(n,[{key:"getAll",value:function(t){return this._aggregationMap[t]||[]}},{key:"getLast",value:function(t){var e=this._aggregationMap[t];return e[e.length-1]}}]),n}(F),w=function(){function t(e){Object(d.a)(this,t),this._name=void 0,this._aggregator=void 0,this._name=e,this._aggregator={}}return Object(f.a)(t,[{key:"name",get:function(){return this._name}},{key:"addEntry",value:function(t,e){var n=this._aggregator[t]||[];return this._aggregator[t]=[].concat(Object(u.a)(n),[e]),this}},{key:"addEntries",value:function(t,e){var n=this._aggregator[t]||[];return this._aggregator[t]=[].concat(Object(u.a)(n),Object(u.a)(e)),this}},{key:"build",value:function(){return new S(this)}}]),t}(),T=function(t){Object(_.a)(n,t);var e=Object(l.a)(n);function n(){return Object(d.a)(this,n),e.apply(this,arguments)}return Object(f.a)(n,[{key:"addByAgeGroup",value:function(t){var e=this;Object.entries(t).forEach((function(t){var n=Object(i.a)(t,2)[1],a=e._aggregator["".concat(n,"_m")],r=e._aggregator["".concat(n,"_f")];e.addEntries(n,I(a,r))}))}},{key:"preProcess",value:function(){this.addByAgeGroup(M),this.addByAgeGroup(y),this.addEntries(R.INCIDENCE_PT,N(this._aggregator[R.NEWCASES_PT],g))}},{key:"build",value:function(){return this.preProcess(),new S(this)}}]),n}(w),P=n(96),k=n(122),L=n.n(k);var W=function(t){Object(_.a)(n,t);var e=Object(l.a)(n);function n(t,a){var r;return Object(d.a)(this,n),(r=e.call(this,t,"number"===typeof a?a:parseInt(a)))._date=void 0,isNaN(r._y)&&(r._y=0),r._date=function(t){var e=t.split("-");return new Date(Number(e[2]),Number(e[1])-1,Number(e[0]))}(t),r}return Object(f.a)(n,[{key:"dateStr",get:function(){return this._x}},{key:"date",get:function(){return this._date}},{key:"count",get:function(){return this._y}},{key:"buildNewWith",value:function(t,e){return new n(t,e)}}]),n}(function(){function t(e,n){Object(d.a)(this,t),this._x=void 0,this._y=void 0,this._x=e,this._y=n}return Object(f.a)(t,[{key:"x",get:function(){return this._x}},{key:"y",get:function(){return this._y}},{key:"buildNewWith",value:function(t,e){throw new Error("Method buildNewWith() is not implemented!")}}]),t}());function B(t){var e="https://raw.githubusercontent.com/dssg-pt/covid19pt-data/master/"+t,n=new Headers({Accept:"application/vnd.github.v3+json"});return console.log("[getDataFromSource] Fetching "+t),fetch(e,{method:"GET",headers:n})}function H(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){return!0};B(t.name).then((function(t){if(t&&200===t.status)return t.text()})).then((function(a){var r=new P.Readable;r.push(a),r.push(null),r.pipe(L()()).on("data",(function(e){return n(e)&&Object.values(R).forEach((function(n){return e[n]&&t.addEntry(n,new W(e.data,e[n]))}))})).on("end",(function(){return e(t.build())}))})).catch((function(t){return console.error(t)}))}var U=n(307),V=n(311),G=n(274),z=n(3),J=function(t){var e=t.children;return Object(z.jsx)(U.a,{children:Object(z.jsx)(V.a,{children:Object(z.jsx)(G.a,{variant:"body2",component:"p",children:e})})})},Z=n(312),Y=n(313),q=n(314),$=n(329),K=n(325),Q=n(331),X=n(326),tt=n(317),et=n(328),nt=n(318),at=n(319),rt=n(332),ot=n(320),it=n(321),ct=n(79),st=new ct.a({portugalEntries:new F("DUMMY-PT"),townEntries:{},vaccineEntries:new F("DUMMY-VAC"),dateRange:60}),ut=new ct.a({styles:{},tab:0,currentTown:"TROFA"}),_t=function(){var t=Object(a.useState)(!1),e=Object(i.a)(t,2),n=e[0],r=e[1],o=Object(a.useState)(0),c=Object(i.a)(o,2),s=c[0],u=c[1],_=Object(a.useState)(0),l=Object(i.a)(_,2),d=l[0],f=l[1],b=ut.useState((function(t){return t.styles})),g=function(t){var e=parseInt(t);return!isNaN(t)&&Number.isInteger(e)&e>0},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;g(t)?(u(t),st.update((function(e){e.dateRange=parseInt(t)}))):u(),r(!1)},j=g(d);return Object(z.jsxs)(Z.a,{position:"sticky",className:b.appBar,children:[Object(z.jsxs)(Y.a,{children:[Object(z.jsxs)(q.a,{className:b.formControl,children:[Object(z.jsx)($.a,{id:"time-selector",children:"Tempo"}),Object(z.jsxs)(K.a,{labelId:"time-selector",id:"time-select",value:st.useState((function(t){return t.dateRange})),onChange:function(t){var e=t.target.value;"Outro"===t.nativeEvent.target.innerText?r(!0):(st.update((function(t){t.dateRange=e})),u())},children:[Object(z.jsx)(Q.a,{value:30,children:"30 dias"}),Object(z.jsx)(Q.a,{value:60,children:"60 dias"}),Object(z.jsx)(Q.a,{value:90,children:"90 dias"}),Object(z.jsx)(Q.a,{value:999999,children:"Desde sempre"}),Object(z.jsx)(Q.a,{value:s,children:"Outro"})]})]}),Object(z.jsxs)(X.a,{value:ut.useState((function(t){return t.tab})),onChange:function(t,e){return ut.update((function(t){t.tab=e}))},indicatorColor:"primary",textColor:"primary","aria-label":"my tabs",variant:"scrollable",scrollButtons:"auto",children:[Object(z.jsx)(tt.a,{label:"Gr\xe1ficos Gerais"}),Object(z.jsx)(tt.a,{label:"Gr\xe1ficos Detalhados"}),Object(z.jsx)(tt.a,{label:"Infos"})]})]}),Object(z.jsxs)(et.a,{open:n,onClose:h,"aria-labelledby":"time-dialog-title",children:[Object(z.jsx)(nt.a,{id:"form-dialog-title",children:"Define um valor de tempo"}),Object(z.jsx)(at.a,{children:Object(z.jsx)(rt.a,{error:!j,autoFocus:!0,margin:"dense",id:"time-value",label:"Tempo (n\xfamero inteiro)",type:"numeric",fullWidth:!0,onChange:function(t){return f(t.target.value)}})}),Object(z.jsxs)(ot.a,{children:[Object(z.jsx)(it.a,{onClick:function(){return h(s)},color:"primary",children:"Cancelar"}),Object(z.jsx)(it.a,{onClick:function(){return h(d)},color:"primary",disabled:!j,children:"Definir"})]})]})]})},lt=function(){return Object(z.jsx)(U.a,{children:Object(z.jsx)(V.a,{children:Object(z.jsxs)(G.a,{variant:"body2",component:"p",children:["Os dados aqui apresentados s\xe3o extra\xeddos do reposit\xf3rio ",Object(z.jsx)("a",{href:"https://github.com/dssg-pt/covid19pt-data",children:"dssg-pt/covid19pt-data"}),".",Object(z.jsx)("br",{}),"O c\xf3digo para este dashboard pode ser consultado ",Object(z.jsx)("a",{href:"https://github.com/DiogoDuque/covid19TrofaGraph",children:"aqui"}),".",Object(z.jsx)("br",{})]})})})},dt=n(322);function ft(t){var e=window.screen.availWidth,n=12*(t.length/e);return Math.max(4-n,1)}var bt=function(t,e,n){return{datasets:[Object(b.a)({label:e,categoryPercentage:1,barPercentage:.95,lineTension:.1,borderWidth:2,pointBackgroundColor:"#fff",pointHoverBorderColor:"rgba(220,220,220,1)",pointBorderWidth:1,pointHoverRadius:5,pointRadius:ft(t),data:t.map((function(t){return t.y}))},n)],labels:t.map((function(t){return t.x}))}},gt=function(t,e,n){return{datasets:Array.from(Array(t.length).keys()).map((function(a){return Object(b.a)({label:e[a],categoryPercentage:1,barPercentage:.95,lineTension:.1,borderWidth:2,pointBackgroundColor:"#fff",pointHoverBorderColor:"rgba(220,220,220,1)",pointBorderWidth:1,pointHoverRadius:5,pointRadius:ft(t[a]),data:t[a].map((function(t){return t.y}))},n[a])})),labels:t[0].map((function(t){return t.x}))}},ht=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:t,suggestedMin:e,suggestedMax:n}}]}}},jt=0,Ot=function(t){return Object(z.jsx)(dt.a,{item:!0,xs:6,md:3,children:t},jt++)},mt=function(t,e){return Object(z.jsx)(dt.a,{item:!0,xs:12,children:Object(z.jsx)("div",{className:e.chartContainer,children:t})},jt++)},Et=function(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return Object(z.jsxs)("div",{children:[Object(z.jsx)(G.a,{variant:"h3",style:{textAlign:"center"},gutterBottom:!0,children:t}),Object(z.jsx)(dt.a,{container:!0,spacing:3,children:a.map((function(t){return mt(t,e)}))})]})},pt=function(t){var e=t.title,n=t.entry;return Object(z.jsx)(U.a,{elevation:4,children:Object(z.jsxs)(V.a,{children:[Object(z.jsx)(G.a,{style:{fontSize:15,fontWeight:"bold"},color:"textSecondary",gutterBottom:!0,children:e}),Object(z.jsx)(G.a,{variant:"h5",component:"h2",children:n.count}),Object(z.jsx)(G.a,{style:{fontSize:11},color:"textSecondary",children:"\xdaltima atualiza\xe7\xe3o: ".concat(n.dateStr)})]})})},vt=function(){var t=st.useState((function(t){return t.portugalEntries})),e=ut.useState((function(t){return t.currentTown})),n=st.useState((function(t){return t.townEntries[e]})),a=e[0]+e.slice(1).toLowerCase();return function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return Object(z.jsx)(dt.a,{container:!0,spacing:1,direction:"row",alignItems:"center",justify:"center",children:e.map((function(t){return Ot(t)}))})}(Object(z.jsx)(pt,{title:"Casos ativos em Portugal",entry:t.getLast(R.ACTIVE_PT)}),Object(z.jsx)(pt,{title:"Casos novos em Portugal",entry:t.getLast(R.NEWCASES_PT)}),Object(z.jsx)(pt,{title:"Incid\xeancia na ".concat(a),entry:n.getLast(R.TOWN_INCIDENCE_14)}),Object(z.jsx)(pt,{title:"Casos novos (14d) na ".concat(a),entry:n.getLast(R.TOWN_CONFIRMED_14)}))},Dt=n(63),At=function(t){var e=t.data,n=t.dateRange,a=t.label,r=t.theme,o=t.zeroBased,i=A(n,e),c=Math.min.apply(Math,Object(u.a)(i.map((function(t){return t.count})))),s=Math.max.apply(Math,Object(u.a)(i.map((function(t){return t.count})))),_=Math.max((s-c)/20,o?4:2),l=Math.round(s+_),d=Math.round(c-_);return o&&(d=Math.max(d,0)),Object(z.jsx)(Dt.Line,{data:bt(i,a,r),options:ht(o,d,l)})};At.defaultProps={zeroBased:!0};var Ct=At,xt=function(t){var e=t.dataArray,n=t.dateRange,a=t.labels,r=t.themes,o=t.zeroBased,i=e.map((function(t){return A(n,t)})),c=i.flatMap((function(t){return t.map((function(t){return t.count}))})),s=Math.min.apply(Math,Object(u.a)(c)),_=Math.max.apply(Math,Object(u.a)(c)),l=Math.max((_-s)/20,o?4:2),d=Math.round(_+l),f=Math.round(s-l);return o&&(f=Math.max(f,0)),e.length!==a.length||a.length!==r.length?(console.error("Chart arguments cardinality did not match!"),Object(z.jsx)(Dt.Line,{options:ht(!1,f,d)})):Object(z.jsx)(Dt.Line,{data:gt(i,a,r),options:ht(o,f,d)})};xt.defaultProps={zeroBased:!0,dateRange:0};var Nt=xt;function It(t,e,n){var a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o="".concat(t,",").concat(e,",").concat(n);return Object(b.a)({backgroundColor:a?"rgba(".concat(o,",0.4)"):"rgba(0,0,0,0)",borderColor:"rgba(".concat(o,",1)"),pointBorderColor:"rgba(".concat(o,",1)"),pointHoverBackgroundColor:"rgba(".concat(o,",1)")},r)}It(75,192,192);var yt=It(75,192,192,!1),Mt=It(192,75,192),Rt=It(192,75,192,!1),Ft=It(217,128,217),St=It(217,128,217,!1),wt=It(140,83,140),Tt=It(140,83,140,!1),Pt=It(192,192,75),kt=It(192,192,75,!1),Lt=(It(217,217,128),It(217,217,128,!1),It(140,140,83),It(140,140,83,!1)),Wt=It(0,80,255),Bt=It(0,80,255,!1),Ht=It(0,80,255,!1,{pointRadius:0,pointHitRadius:0,borderDash:[8]}),Ut=(It(0,255,80),It(0,255,80,!1)),Vt=It(255,80,30),Gt=It(255,80,30,!1),zt=It(200,200,200,!1,{pointRadius:0,pointHitRadius:0,borderDash:[8]}),Jt=It(20,20,20),Zt=It(255,189,0,!1),Yt=(It(255,84,0,!1),It(158,0,89,!1),function(t){return t.buildNewWith(t.x,parseFloat(Number(100*t.y/g).toFixed(2)))}),qt=function(){var t=ut.useState((function(t){return t.styles})),e=st.useState((function(t){return t.portugalEntries})),n=st.useState((function(t){return t.vaccineEntries})),a=st.useState((function(t){return t.dateRange})),r=n.getAll(R.VACCINE_DOSE_1).map(Yt),o=n.getAll(R.VACCINE_DOSE_2).map(Yt);return Et("Casos ativos",t,Object(z.jsx)(Ct,{data:e.getAll(R.ACTIVE_PT),dateRange:a,label:"Casos ativos em Portugal",theme:Mt,zeroBased:!0}),Object(z.jsx)(Nt,{dataArray:[e.getAll(R.HOSPITALIZED_NURSERY),e.getAll(R.HOSPITALIZED_ICU)],dateRange:a,labels:["Internados em Enfermaria em Portugal","Internados em UCI em Portugal"],themes:[Ft,wt],zeroBased:!0}),Object(z.jsx)(Nt,{dataArray:[r,o],dateRange:a,labels:["% de vacinados com 1 dose","% de vacinados com 2 doses"],themes:[Ft,wt]}))},$t=function(){var t,e=ut.useState((function(t){return t.styles})),n=st.useState((function(t){return t.portugalEntries})),a=st.useState((function(t){return t.dateRange})),r=C(n.getAll(R.DEAD_PT)),o=(t=n.getAll(R.INCIDENCE_PT),function(e){return t.map((function(t){return t.buildNewWith(t.x,e)}))});return Et("Evolu\xe7\xe3o em Portugal",e,Object(z.jsx)(Nt,{dataArray:[n.getAll(R.NEWCASES_PT),x(n.getAll(R.NEWCASES_PT))],dateRange:a,labels:["Casos novos em Portugal","Tend\xeancia"],themes:[Vt,zt]}),Object(z.jsx)(Nt,{dataArray:[n.getAll(R.INCIDENCE_PT),x(n.getAll(R.INCIDENCE_PT)),o(120)],dateRange:a,labels:["Incid\xeancia em Portugal (p/ 100k hab.)","Tend\xeancia","Risco elevado"],themes:[Wt,zt,Zt]}),Object(z.jsx)(Nt,{dataArray:[r,x(r)],dateRange:a,labels:["Mortes em Portugal","Tend\xeancia"],themes:[Jt,zt]}))},Kt=function(){var t=ut.useState((function(t){return t.styles})),e=st.useState((function(t){return t.portugalEntries})),n=st.useState((function(t){return t.dateRange})),a=C(e.getAll(R.CONFIRMED_NORTH)),r=C(e.getAll(R.CONFIRMED_CENTER)),o=C(e.getAll(R.CONFIRMED_LISBOA_TEJO)),i=C(e.getAll(R.CONFIRMED_ALENTEJO)),c=C(e.getAll(R.CONFIRMED_ALGARVE)),s=N(a,3689682),u=N(r,2327755),_=N(o,2821876),l=N(i,757302),d=N(c,451006);return Et("Evolu\xe7\xe3o regional",t,Object(z.jsx)(Nt,{dataArray:[a,r,o,i,c],dateRange:n,labels:["Casos novos no Norte","Casos novos no Centro","Casos novos em Lisboa/V.Tejo","Casos novos no Alentejo","Casos novos no Algarve"],themes:[kt,Rt,yt,Bt,Ut]}),Object(z.jsx)(Nt,{dataArray:[s,u,_,l,d],dateRange:n,labels:["Incid\xeancia no Norte (a 1 dia p/ 100k hab.)","Incid\xeancia no Centro (a 1 dia p/ 100k hab.)","Incid\xeancia em Lisboa/V.Tejo (a 1 dia p/ 100k hab.)","Incid\xeancia no Alentejo (a 1 dia p/ 100k hab.)","Incid\xeancia no Algarve (a 1 dia p/ 100k hab.)"],themes:[kt,Rt,yt,Bt,Ut]}))},Qt=function(){var t=ut.useState((function(t){return t.styles})),e=ut.useState((function(t){return t.currentTown})),n=st.useState((function(t){return t.townEntries[e]})),a=st.useState((function(t){return t.portugalEntries})),r=st.useState((function(t){return t.dateRange})),o=n.getAll(R.TOWN_INCIDENCE_14),i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t.map((function(e,n){return n<13?e:e.buildNewWith(e.x,t.slice(n-13,n+1).reduce((function(t,e){return t+e.y}),0))})).filter((function(t,e){return e>=13})).filter((function(t){return e.includes(t.x)}))}(a.getAll(R.INCIDENCE_PT),o.map((function(t){return t.x}))),c=e[0]+e.slice(1).toLowerCase();return Et("Evolu\xe7\xe3o - ".concat(c),t,Object(z.jsx)(Nt,{dataArray:[o,i],dateRange:r,labels:["Incid\xeancia - ".concat(c," (a 14 dias p/ 100k hab.)"),"Incid\xeancia em Portugal (a 14 dias p/ 100k hab.)"],themes:[Pt,Ht]}))},Xt=function(){var t=ut.useState((function(t){return t.styles})),e=st.useState((function(t){return t.portugalEntries})),n=st.useState((function(t){return t.dateRange})),a=C(e.getAll(R.CONFIRMED_0_9)),r=C(e.getAll(R.CONFIRMED_10_19)),o=C(e.getAll(R.CONFIRMED_20_29)),i=C(e.getAll(R.CONFIRMED_30_39)),c=C(e.getAll(R.CONFIRMED_40_49)),s=C(e.getAll(R.CONFIRMED_50_59)),u=C(e.getAll(R.CONFIRMED_60_69)),_=I(C(e.getAll(R.CONFIRMED_70_79)),C(e.getAll(R.CONFIRMED_80_PLUS))),l=N(a,h),d=N(r,j),f=N(o,O),b=N(i,m),g=N(c,E),A=N(s,p),x=N(u,v),y=N(_,D),M=C(e.getAll(R.DEAD_0_9)),F=C(e.getAll(R.DEAD_10_19)),S=C(e.getAll(R.DEAD_20_29)),w=C(e.getAll(R.DEAD_30_39)),T=C(e.getAll(R.DEAD_40_49)),P=C(e.getAll(R.DEAD_50_59)),k=C(e.getAll(R.DEAD_60_69)),L=I(C(e.getAll(R.DEAD_70_79)),C(e.getAll(R.DEAD_80_PLUS))),W=N(M,h),B=N(F,j),H=N(S,O),U=N(w,m),V=N(T,E),G=N(P,p),J=N(k,v),Z=N(L,D),Y=[St,Tt,Bt,yt,Ut,kt,Lt,Gt];return Et("Evolu\xe7\xe3o por idade",t,Object(z.jsx)(Nt,{dataArray:[a,r,o,i,c,s,u,_],dateRange:n,labels:["0-9","10-19","20-29","30-39","40-49","50-59","60-69","70+"].map((function(t){return"Casos novos nos ".concat(t," anos")})),themes:Y}),Object(z.jsx)(Nt,{dataArray:[l,d,f,b,g,A,x,y],dateRange:n,labels:["0-9","10-19","20-29","30-39","40-49","50-59","60-69","70+"].map((function(t){return"Incid\xeancia nos ".concat(t," anos (p/ 100k pax na faixa)")})),themes:Y}),Object(z.jsx)(Nt,{dataArray:[M,F,S,w,T,P,k,L],dateRange:n,labels:["0-9","10-19","20-29","30-39","40-49","50-59","60-69","70+"].map((function(t){return"Mortes nos ".concat(t," anos")})),themes:Y}),Object(z.jsx)(Nt,{dataArray:[W,B,H,U,V,G,J,Z],dateRange:n,labels:["0-9","10-19","20-29","30-39","40-49","50-59","60-69","70+"].map((function(t){return"Incid\xeancia de mortes nos ".concat(t," anos (p/ 100k pax na faixa)")})),themes:Y}))},te=Object(c.a)((function(){return{root:{backgroundColor:"#f5f5f5",flexGrow:1,"align-items":"center","justify-content":"center",padding:15,paddingRight:30},chartContainer:{position:"relative",margin:"auto",height:"50vh",width:"90vw"},progress:{float:"none",margin:"0 auto"},appBar:{marginBottom:20,backgroundColor:"#e0e0e0"},formControl:{margin:10,minWidth:80}}}));var ee=function(){var t=te();ut.update((function(e){e.styles=t}));var e=Object(a.useState)(!0),n=Object(i.a)(e,2),r=n[0],o=n[1],c=Object(a.useState)(0),u=Object(i.a)(c,2),_=u[0],l=u[1],d=ut.useState((function(t){return t.currentTown})),f=st.useState((function(t){return t.portugalEntries})),b=st.useState((function(t){return t.townEntries[d]})),g="",h="",j=function(t){switch(t){case 0:return Object(z.jsxs)("div",{children:[Object(z.jsx)(qt,{}),Object(z.jsx)("br",{}),Object(z.jsx)(Qt,{}),Object(z.jsx)("br",{}),Object(z.jsx)($t,{})]});case 1:return Object(z.jsxs)("div",{children:[Object(z.jsx)(Kt,{}),Object(z.jsx)("br",{}),Object(z.jsx)(Xt,{})]});case 2:return Object(z.jsx)(vt,{});default:return Object(z.jsx)("p",{children:"Bug? \xaf\\_(\u30c4)_/\xaf"})}}(ut.useState((function(t){return t.tab}))),O=d[0]+d.slice(1).toLowerCase(),m=f.getAll(R.CONFIRMED_PT).length>0,E=b&&b.getAll(R.TOWN_INCIDENCE_14).length>0;return Object(a.useEffect)((function(){var t;t=function(t){return st.update((function(e){e.portugalEntries=t}))},H(new T("data.csv"),t),function(t){H(new w("vacinas.csv"),t)}((function(t){return st.update((function(e){e.vaccineEntries=t}))}))}),[]),E||function(t,e){H(new w("data_concelhos_new.csv"),e,(function(e){return e.concelho===t}))}(d,(function(t){return st.update((function(e){e.townEntries[d]=t}))})),r||(g=b.getLast(R.TOWN_INCIDENCE_14).x,h=f.getLast(R.CONFIRMED_PT).x,_||l(performance.now())),r&&E&&m&&o(!1),Object(z.jsx)("div",{className:t.root,children:r?Object(z.jsx)(s.a,{className:t.progress}):Object(z.jsxs)("div",{children:[Object(z.jsx)(_t,{}),Object(z.jsxs)(J,{children:["A \xfaltima atualiza\xe7\xe3o destes dados ocorreu nas seguintes datas: ","Portugal/Norte => ".concat(h,", ").concat(O," => ").concat(g),". Esta p\xe1gina carregou em ",_,"ms."]}),Object(z.jsx)("br",{}),j,Object(z.jsx)("br",{}),Object(z.jsx)(lt,{})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(z.jsx)(ee,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[273,1,2]]]);
//# sourceMappingURL=main.d33084e1.chunk.js.map
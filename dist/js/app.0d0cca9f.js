(function(e){function t(t){for(var n,o,a=t[0],u=t[1],c=t[2],p=0,d=[];p<a.length;p++)o=a[p],r[o]&&d.push(r[o][0]),r[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],n=!0,a=1;a<s.length;a++){var u=s[a];0!==r[u]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=s[0]))}return e}var n={},r={app:0},i=[];function o(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=n,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(s,n,function(t){return e[t]}.bind(null,n));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var l=u;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"4a80":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("6b54"),s("28a5"),s("cadf"),s("551c"),s("f751"),s("097d");var n=s("2b0e"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"flex-row align-center cover",attrs:{id:"app"}},[1===e.step?s("Person",{on:{getCurrentResult:function(t){e.step=2}}}):2===e.step?s("CurrentSummary",{attrs:{users:e.users},on:{addMorePerson:function(t){e.step=1},getFinalResult:function(t){e.step=3}}}):3===e.step?s("FinalResult",{on:{restart:function(t){e.step=1}}}):e._e()],1)},i=[],o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[1===e.step?s("div",{staticClass:"inline-block"},[s("h3",[e._v("添加成员")]),s("UserInput",{on:{savePerson:e.savePerson}})],1):2===e.step?s("div",{staticClass:"inline-block"},[s("h3",{staticClass:"text-center"},[e._v("此成员是否出资?")]),s("div",{staticClass:"flex-row align-center"},[s("button",{attrs:{type:"button"},on:{click:function(t){e.step=3}}},[e._v("是")]),s("div",{staticClass:"sp15"}),s("button",{attrs:{type:"button"},on:{click:e.addPerson}},[e._v("否")])])]):3===e.step?s("PersonExpense",{ref:"personExpense",attrs:{person:e.person},on:{confirmExpense:e.addPersonWithExpense}}):e._e()],1)},a=[],u=s("5176"),c=s.n(u),l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"item-input-wrapper"},[s("div",{staticClass:"item-input"},[s("label",{attrs:{for:"name"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",name:"name",id:"name",placeholder:"姓名"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})])]),s("button",{attrs:{type:"button"},on:{click:e.submit}},[e._v("确认")])])},p=[],d=(s("7f7f"),{data:function(){return{name:""}},methods:{cleanInput:function(){this.name=""},submit:function(){this.$emit("savePerson",{uid:"_"+Math.random().toString(36).substr(2,9),name:this.name.trim()}),this.cleanInput()}}}),m=d,f=s("2877"),h=Object(f["a"])(m,l,p,!1,null,null,null),v=h.exports,x=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{},[s("h3",{staticClass:"text-center"},[e._v("当前成员: "+e._s(e.person.name))]),s("Table",{directives:[{name:"show",rawName:"v-show",value:e.expenses.length,expression:"expenses.length"}],attrs:{entries:e.expenses,labels:["项目","花费"]}})],1),s("div",{staticClass:"flex-row align-center"},[s("div",{directives:[{name:"show",rawName:"v-show",value:!e.submitted,expression:"!submitted"}],staticClass:"inline-block"},[s("div",{directives:[{name:"show",rawName:"v-show",value:!e.expenseAdded,expression:"!expenseAdded"}]},[s("h5",[e._v("添加花费")]),s("ItemInput",{on:{saveEntry:e.addExpense}})],1),s("div",{directives:[{name:"show",rawName:"v-show",value:e.expenseAdded,expression:"expenseAdded"}],staticClass:"p15"},[s("h5",{staticClass:"text-center"},[e._v("完成并提交")]),s("div",{staticClass:"flex-row align-center"},[s("button",{attrs:{type:"button"},on:{click:e.attachExpenseToPerson}},[e._v("完成")]),s("div",{staticClass:"sp15"}),s("button",{attrs:{type:"button"},on:{click:function(t){e.expenseAdded=!1}}},[e._v("继续添加")])])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.submitted,expression:"submitted"}],staticClass:"inline-block p15"},[s("h5",{staticClass:"text-center"},[e._v("确认提交")]),s("div",{staticClass:"flex-row align-center"},[s("button",{attrs:{type:"button"},on:{click:e.confirmExpense}},[e._v("确认")]),s("div",{staticClass:"sp15"}),s("button",{attrs:{type:"button"},on:{click:e.dettachPersonExpense}},[e._v("返回")])])])])])},b=[],g=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"item-input-wrapper"},[s("div",{staticClass:"item-input"},[s("label",{attrs:{for:"item"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.item,expression:"item"}],attrs:{type:"text",name:"item",id:"item",placeholder:"项目"},domProps:{value:e.item},on:{input:function(t){t.target.composing||(e.item=t.target.value)}}})])]),s("div",{staticClass:"item-input"},[s("label",{attrs:{for:"cost"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.costString,expression:"costString"}],attrs:{type:"text",name:"cost",id:"cost",placeholder:"花费"},domProps:{value:e.costString},on:{input:function(t){t.target.composing||(e.costString=t.target.value)}}})])]),s("button",{attrs:{type:"button"},on:{click:e.submit}},[e._v("添加")])])},_=[],E=s("e814"),y=s.n(E),C={data:function(){return{item:"",costString:""}},computed:{cost:function(){return this.costString?y()(this.costString):0}},methods:{submit:function(){this.$emit("saveEntry",{item:this.item,cost:this.cost}),this.clearInput()},clearInput:function(){this.item="",this.costString=""}}},w=C,$=(s("a828"),Object(f["a"])(w,g,_,!1,null,null,null)),k=$.exports,P=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"table-wrapper"},[e.entries.length?s("div",{staticClass:"table"},[s("div",{staticClass:"table-entry label"},e._l(e.labels,function(t,n){return s("div",{key:n},[e._v(e._s(t))])}),0),e._l(e.entries,function(t,n){return s("div",{key:n,staticClass:"table-entry entry-item"},[s("div",[e._v(e._s(t.item))]),s("div",[e._v(e._s(e._f("Dollarize")(t.cost)))]),s("div",{on:{click:function(t){e.clickEntry(n)}}},[e._v("x")])])}),s("div",{staticClass:"table-entry summary"},[s("div",[e._v(e._s(e.sum||"小计"))]),s("div",[e._v(e._s(e._f("Dollarize")(e.total)))])])],2):e._e()])},S=[],j=(s("ac6a"),{props:{entries:Array,labels:Array,sum:String},computed:{total:function(){return this.entries.reduce(function(e,t){return e+t.cost},0)}},methods:{clickEntry:function(e){this.$emit("clickEntry",e)}}}),O=j,I=(s("d143"),Object(f["a"])(O,P,S,!1,null,null,null)),T=I.exports,A={components:{Table:T,ItemInput:k},props:{person:Object},data:function(){return{expenses:[],submitted:!1,expenseAdded:!1}},methods:{savePersonExpenseEntries:function(){if(this.person.expenses)return this.person.expenses=null,void this.$set(this.person,"expenses",this.expenses);this.$set(this.person,"expenses",this.expenses)},addExpense:function(e){var t={item:e.item,cost:e.cost};this.expenses.push(t),this.expenseAdded=!0},confirmExpense:function(){this.$emit("confirmExpense",this.expenses),this.reset()},attachExpenseToPerson:function(){this.savePersonExpenseEntries(),this.submitted=!0,this.expenseAdded=!1},dettachPersonExpense:function(){this.person.expenses=null,this.submitted=!1},reset:function(){this.expenses=[],this.submitted=!1}}},R=A,M=Object(f["a"])(R,x,b,!1,null,null,null),U=M.exports,F={components:{UserInput:v,PersonExpense:U},data:function(){return{person:{},step:1}},computed:{savedUsers:function(){return this.$store.state.users}},methods:{savePerson:function(e){this.person=c()({},this.person,e),this.step=2},addPersonWithExpense:function(e){this.$set(this.person,"expenses",e),this.$store.commit("addUser",this.person),this.$emit("getCurrentResult",!0),this.reset()},addPerson:function(){this.$store.commit("addUser",this.person),this.$emit("getCurrentResult",!0),this.reset()},reset:function(){this.person={},this.step=1}}},N=F,W=Object(f["a"])(N,o,a,!1,null,null,null),L=W.exports,z=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"inline-block"},[s("h3",{staticClass:"text-center"},[e._v("总花费明细")]),s("Table",{attrs:{entries:e.expensesList,labels:["成员","花费"],sum:"总计"}}),s("div",{staticClass:"p15"},[s("h5",{staticClass:"text-center"},[e._v("请选择下一步")]),s("div",{staticClass:"flex-row align-center"},[s("button",{attrs:{type:"button"},on:{click:e.addMorePerson}},[e._v("添加其他成员")]),s("div",{staticClass:"sp15"}),s("button",{attrs:{type:"button"},on:{click:e.getFinalResult}},[e._v("开始AA")])])])],1)},D=[],J={components:{Table:T},props:{users:Array},computed:{totalExpenses:function(){return this.$store.getters.totalExpenses},expensesList:function(){var e=this,t=[];return this.users.forEach(function(s){t.push({item:s.name,cost:s.expenses?e.getUserTotalExpense(s):0})}),t}},methods:{getUserTotalExpense:function(e){return e.expenses.reduce(function(e,t){return e+t.cost},0)},addMorePerson:function(){this.$emit("addMorePerson",!0)},getFinalResult:function(){this.$emit("getFinalResult",!0)}}},q=J,B=Object(f["a"])(q,z,D,!1,null,null,null),G=B.exports,H=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"inline-block"},[s("div",{staticClass:"p15 bg-white",attrs:{id:"FinalResult"}},[s("h3",{staticClass:"text-center"},[e._v(e._s(e.boss.name)+"的收账单")]),s("Table",{attrs:{labels:["成员","应付"],entries:e.result,sum:"总计"}})],1),s("div",{staticClass:"flex-row align-center p15"},[s("button",{attrs:{type:"button"},on:{click:e.generateImage}},[e._v("保存结果")]),s("div",{staticClass:"sp15"}),s("button",{attrs:{type:"button"},on:{click:e.restartSession}},[e._v("重新开始")])])])},K=[],Q=(s("a481"),{components:{Table:T},data:function(){return{result:[],boss:{}}},methods:{generateImage:function(){var e=this;this.$htmlToImage.toJpeg(document.getElementById("FinalResult"),{quality:.95}).then(function(t){var s=document.createElement("a");s.download="".concat(e.boss.name.replace(" ","_"),"的收账单.jpeg"),s.href=t,s.target="_blank",s.click()})},restartSession:function(){this.result=[],this.boss={},this.$store.commit("reset"),this.$emit("restart")}},created:function(){var e=this,t=this.$store.getters.usersWithExpenseSorted;if(t){var s=this.$store.getters.averageExpense;s&&(this.boss=c()({},this.boss,t.pop()),t.forEach(function(t){e.result.push({item:t.name,cost:y()(s)-y()(t.totalExpenses)})}),console.log(this.$htmlToImage))}}}),V=Q,X=Object(f["a"])(V,H,K,!1,null,null,null),Y=X.exports,Z={name:"app",components:{Person:L,CurrentSummary:G,FinalResult:Y},data:function(){return{step:1}},computed:{users:function(){return this.$store.state.users}}},ee=Z,te=(s("5c0b"),Object(f["a"])(ee,r,i,!1,null,null,null)),se=te.exports,ne=(s("55dd"),s("2f62"));n["a"].use(ne["a"]);var re=new ne["a"].Store({state:{users:[]},getters:{usersWithExpense:function(e){var t=[];return e.users.forEach(function(e){var s={name:e.name,uid:e.uid};s.totalExpenses=e.expenses?e.expenses.reduce(function(e,t){return e+t.cost},0):0,t.push(s)}),t},usersWithExpenseSorted:function(e,t){return t.usersWithExpense.sort(function(e,t){return e.totalExpenses-t.totalExpenses})},totalExpenses:function(e){var t=0;return e.users.forEach(function(e){t+=e.expenses?e.expenses.reduce(function(e,t){return e+t.cost},0):0}),t},averageExpense:function(e,t){return t.totalExpenses?t.totalExpenses/e.users.length:0}},mutations:{addUser:function(e,t){this.commit("userLookup",t)||e.users.push(t)},deleteUser:function(e,t){var s=t.uid;e.users.forEach(function(t,n){t.uid==-s&&e.users.splice(n,1)})},userLookup:function(e,t){e.users.forEach(function(e){if(e.uid===t.uid)return e})},reset:function(e){e.users=[]}},actions:{}});n["a"].config.productionTip=!1;var ie=s("9988");n["a"].prototype.$htmlToImage=ie,n["a"].filter("Dollarize",function(e){var t=e.toString().split("").reverse(),s=[],n="$ ",r=!1;"-"===t[t.length-1]&&(t.pop(),r=!0);for(var i=0;i<t.length;i++)(i+1)%3==0?(s.push(t[i]),i!==t.length-1&&s.push(",")):s.push(t[i]);return r?"(".concat(n+s.reverse().join(""),")"):n+s.reverse().join("")}),new n["a"]({store:re,render:function(e){return e(se)}}).$mount("#app")},"5c0b":function(e,t,s){"use strict";var n=s("5e27"),r=s.n(n);r.a},"5e27":function(e,t,s){},"858e":function(e,t,s){},a828:function(e,t,s){"use strict";var n=s("4a80"),r=s.n(n);r.a},d143:function(e,t,s){"use strict";var n=s("858e"),r=s.n(n);r.a}});
//# sourceMappingURL=app.0d0cca9f.js.map
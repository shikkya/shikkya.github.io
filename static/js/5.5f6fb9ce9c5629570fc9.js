webpackJsonp([5],{"2WMd":function(n,i){},YEQF:function(n,i,g){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e={data:function(){return{curColor:"rgba(255, 255, 255, 1)",predefineColors:["#fff","#000","#eee","rgba(0, 0, 0, 0.5)"],data:[{name:"加载动图",type:"loading",size:"small",format:"gif",num:19},{name:"加载动画",type:"load",size:"mid",format:"gif",num:13},{name:"NEW标记",type:"new",size:"small",format:"gif",num:8},{name:"HOT标记",type:"hot",size:"small",format:"gif",num:6},{name:"暂无数据",type:"noInfo",size:"mid",format:"png",num:4},{name:"证件照服装",type:"clothes",size:"mid",format:"png",num:3}]}},methods:{handleAnchor:function(n){var i=document.getElementById(n);i&&i.scrollIntoView()},downLoadImg:function(n,i){var e=document.createElement("a");e.href=g("afgI")("./design_"+this.data[n].type+"/"+this.data[n].type+" ("+i+")."+this.data[n].format),e.download="SHIKKYA-"+this.data[n].name+"("+i+")",e.click()}}},d={render:function(){var n=this,i=n.$createElement,e=n._self._c||i;return e("div",[e("my-backtop"),n._v(" "),e("el-container",[e("el-header",{attrs:{height:"105px"}},[e("div",{staticClass:"wid_size"},[e("img",{staticClass:"logo",attrs:{src:g("O4vt")}}),n._v(" "),e("el-button",{staticClass:"back_btn fr",attrs:{type:"primary",size:"small"},on:{click:function(i){return n.$router.go(-1)}}},[n._v("返回首页")]),n._v(" "),e("div",{staticClass:"fr color_box"},[e("span",[n._v("更换预览背景色：")]),n._v(" "),e("el-color-picker",{attrs:{"show-alpha":"",predefine:n.predefineColors,size:"small"},model:{value:n.curColor,callback:function(i){n.curColor=i},expression:"curColor"}})],1)],1),n._v(" "),e("div",{staticClass:"filter_box"},[e("div",{staticClass:"wid_size"},[e("ul",n._l(n.data,function(i,g){return e("li",{key:g,style:"width:"+100/n.data.length+"%",on:{click:function(g){return g.preventDefault(),n.handleAnchor(i.name)}}},[n._v("\n              "+n._s(i.name)),e("font",[n._v(" ("+n._s(i.num)+")")])],1)}),0)])])]),n._v(" "),e("el-main",[e("div",{staticClass:"wid_size content_bg"},n._l(n.data,function(i,d){return e("div",{key:d},[e("a",{staticClass:"anchor",attrs:{id:i.name}}),n._v(" "),e("my-title",{attrs:{title:i.name+" ("+i.num+")"}}),n._v(" "),e("el-row",{attrs:{gutter:20}},n._l(i.num,function(o){return e("el-col",{key:o,attrs:{xs:12,sm:12,md:8,lg:6,xl:6}},[e("div",{staticClass:"list"},[e("div",{class:i.size,style:"background:"+n.curColor},[e("img",{attrs:{src:g("afgI")("./design_"+i.type+"/"+i.type+" ("+o+")."+i.format)}})]),n._v(" "),e("span",[n._v("NO."+n._s(o))]),n._v(" "),e("el-button",{staticClass:"fr",attrs:{type:"primary",size:"mini"},on:{click:function(i){return n.downLoadImg(d,o)}}},[n._v("下载")])],1)])}),1)],1)}),0)]),n._v(" "),e("my-footer")],1)],1)},staticRenderFns:[]};var o=g("VU/8")(e,d,!1,function(n){g("2WMd")},"data-v-4c301e9d",null);i.default=o.exports},afgI:function(n,i,g){var e={"./design_50.png":"QK6j","./design_51.png":"y5jS","./design_52.png":"jiDl","./design_bgimg/0.png":"RW4i","./design_bgimg/1.png":"+N22","./design_bgimg/10.png":"MSep","./design_bgimg/11.png":"nuec","./design_bgimg/12.png":"Z1vM","./design_bgimg/13.png":"L7MB","./design_bgimg/14.png":"2hz6","./design_bgimg/15.png":"xkmF","./design_bgimg/16.png":"ajkH","./design_bgimg/17.png":"+g5w","./design_bgimg/18.png":"KFJ6","./design_bgimg/19.png":"3x59","./design_bgimg/2.png":"2WpC","./design_bgimg/20.png":"7j7o","./design_bgimg/21.png":"8dw0","./design_bgimg/22.png":"7jKA","./design_bgimg/23.png":"x3vI","./design_bgimg/24.png":"P3S4","./design_bgimg/3.png":"IUox","./design_bgimg/4.png":"3PgM","./design_bgimg/5.png":"ITjL","./design_bgimg/6.png":"X/kJ","./design_bgimg/7.png":"oYln","./design_bgimg/8.png":"J3iQ","./design_bgimg/9.png":"S1vQ","./design_clothes/clothes (1).png":"kXZ6","./design_clothes/clothes (2).png":"gjCb","./design_clothes/clothes (3).png":"aHoq","./design_hot/hot (1).gif":"Awp7","./design_hot/hot (2).gif":"HwcO","./design_hot/hot (3).gif":"677T","./design_hot/hot (4).gif":"rpBI","./design_hot/hot (5).gif":"7a2f","./design_hot/hot (6).gif":"CwsF","./design_load/load (1).gif":"M9rM","./design_load/load (10).gif":"Pj/P","./design_load/load (11).gif":"7ZO9","./design_load/load (12).gif":"c67V","./design_load/load (13).gif":"Pd0W","./design_load/load (2).gif":"lo7u","./design_load/load (3).gif":"9MVe","./design_load/load (4).gif":"wCQv","./design_load/load (5).gif":"cH/i","./design_load/load (6).gif":"z479","./design_load/load (7).gif":"ODyr","./design_load/load (8).gif":"tRiT","./design_load/load (9).gif":"fT9S","./design_loading/loading (1).gif":"0t0O","./design_loading/loading (10).gif":"8pU2","./design_loading/loading (11).gif":"Iqun","./design_loading/loading (12).gif":"l2rD","./design_loading/loading (13).gif":"X3vn","./design_loading/loading (14).gif":"/jkB","./design_loading/loading (15).gif":"ou4Y","./design_loading/loading (16).gif":"sXxm","./design_loading/loading (17).gif":"xXZ5","./design_loading/loading (18).gif":"pQmR","./design_loading/loading (19).gif":"Mi0I","./design_loading/loading (2).gif":"UW1+","./design_loading/loading (3).gif":"houk","./design_loading/loading (4).gif":"f3Ij","./design_loading/loading (5).gif":"iaAb","./design_loading/loading (6).gif":"1UIa","./design_loading/loading (7).gif":"/nIl","./design_loading/loading (8).gif":"JhsJ","./design_loading/loading (9).gif":"OgYw","./design_new/new (1).gif":"sJzv","./design_new/new (2).gif":"26IW","./design_new/new (3).gif":"BWlH","./design_new/new (4).gif":"BORu","./design_new/new (5).gif":"ipym","./design_new/new (6).gif":"uwyG","./design_new/new (7).gif":"rDnh","./design_new/new (8).gif":"3yjU","./design_noInfo/noInfo (1).png":"Cmh0","./design_noInfo/noInfo (2).png":"ZmuS","./design_noInfo/noInfo (3).png":"8n7N","./design_noInfo/noInfo (4).png":"BFGp"};function d(n){return g(o(n))}function o(n){var i=e[n];if(!(i+1))throw new Error("Cannot find module '"+n+"'.");return i}d.keys=function(){return Object.keys(e)},d.resolve=o,n.exports=d,d.id="afgI"}});
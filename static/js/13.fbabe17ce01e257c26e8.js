webpackJsonp([13],{"Q+/e":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={data:function(){return{headlineObj:{tit:"日期计算器",text:""},lunar:{tg:"甲乙丙丁戊己庚辛壬癸",dz:"子丑寅卯辰巳午未申酉戌亥",number:"一二三四五六七八九十",year:"鼠牛虎兔龙蛇马羊猴鸡狗猪",month:"正二三四五六七八九十冬腊",monthadd:[0,31,59,90,120,151,181,212,243,273,304,334],calendar:[2635,333387,1701,1748,267701,694,2391,133423,1175,396438,3402,3749,331177,1453,694,201326,2350,465197,3221,3402,400202,2901,1386,267611,605,2349,137515,2709,464533,1738,2901,330421,1242,2651,199255,1323,529706,3733,1706,398762,2741,1206,267438,2647,1318,204070,3477,461653,1386,2413,330077,1197,2637,268877,3365,531109,2900,2922,398042,2395,1179,267415,2635,661067,1701,1748,398772,2742,2391,330031,1175,1611,200010,3749,527717,1452,2742,332397,2350,3222,268949,3402,3493,133973,1386,464219,605,2349,334123,2709,2890,267946,2773,592565,1210,2651,395863,1323,2707,265877]},dayObj:{tit:"天数计算",date_1:"",date_2:"",result_1:"?",result_2:"?",result_3:"?"},dateObj:{tit:"日期推算",date:"",num:"",result_1:"?",result_2:"?",result_3:"?",result_4:"?"}}},watch:{"dayObj.date_1":function(t){this.updateDayObj()},"dayObj.date_2":function(t){this.updateDayObj()},"dateObj.date":function(t){this.updateDateObj()},"dateObj.num":function(t){this.updateDateObj()}},created:function(){this.initToday()},methods:{initToday:function(){var t=new Date,e=this.getLunarDateString(this.getLunarDate(t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()));this.headlineObj.text="今天是 "+t.getFullYear()+"年 "+(t.getMonth()+1)+"月 "+t.getDate()+"日 星期"+this.getWeekStr(t.getDay())+" "+e.tg+e.dz+"("+e.year+")年 "+e.month+"月 "+e.day},updateDayObj:function(){if(""==this.dayObj.date_1||null==this.dayObj.date_1||""==this.dayObj.date_2||null==this.dayObj.date_2)return this.dayObj.result_1="?",this.dayObj.result_2="?",void(this.dayObj.result_3="?");this.dayCalculate()},dayCalculate:function(){var t=new Date(this.dayObj.date_1),e=new Date(this.dayObj.date_2),a=Math.abs(t-e)/1e3/60/60/24;this.dayObj.result_1=a,this.dayObj.result_2=parseInt(a/7),this.dayObj.result_3=a%7},updateDateObj:function(){if(""==this.dateObj.date||null==this.dateObj.date||""==this.dateObj.num||!/^-?\d+$/.test(this.dateObj.num))return this.dateObj.result_1="?",this.dateObj.result_2="?",this.dateObj.result_3="?",void(this.dateObj.result_4="?");this.dateCalculate()},dateCalculate:function(){var t=new Date(this.dateObj.date),e=Math.abs(t)+24*parseInt(this.dateObj.num)*60*60*1e3,a=new Date(e);if(isNaN(a.getFullYear())||isNaN(a.getMonth())||isNaN(a.getDate())||isNaN(a.getDay())||a.getFullYear()<=0)return this.$message({message:"超出推算范围，请重新输入",type:"error",center:!0}),this.dateObj.num="",this.dateObj.result_1="?",this.dateObj.result_2="?",this.dateObj.result_3="?",void(this.dateObj.result_4="?");this.dateObj.result_1=a.getFullYear(),this.dateObj.result_2=a.getMonth()+1,this.dateObj.result_3=a.getDate(),this.dateObj.result_4=this.getWeekStr(a.getDay())},getWeekStr:function(t){switch(parseInt(t)){case 0:return"日";case 1:return"一";case 2:return"二";case 3:return"三";case 4:return"四";case 5:return"五";case 6:return"六"}},getLunarDate:function(t){var e,a,n,r,d,s,i,l,u,h,_;if(t?(t=t.split("-"),e=parseInt(t[0]),a=t[1]-1,n=parseInt(t[2])):(e=(t=new Date).getFullYear(),a=t.getMonth(),n=t.getDate()),e<1921)return{};var b=!1,o=e;for(o<1900&&(o+=1900),r=365*(o-1921)+Math.floor((o-1921)/4)+this.lunar.monthadd[a]+n-38,e%4==0&&a>1&&r++,d=0;;d++){for(s=i=this.lunar.calendar[d]<4095?11:12;s>=0;s--){if(r<=29+(l=this.lunar.calendar[d]>>s&1)){b=!0;break}r=r-29-l}if(b)break}return u=1921+d,h=i-s+1,_=r,12==i&&(h==Math.floor(this.lunar.calendar[d]/65536)+1&&(h=1-h),h>Math.floor(this.lunar.calendar[d]/65536)+1&&h--),{lunarYear:u,lunarMonth:h,lunarDay:_}},getLunarDateString:function(t){if(t.lunarDay){var e={},a=t.lunarYear,n=t.lunarMonth,r=t.lunarDay;return e.tg=this.lunar.tg.charAt((a-4)%10),e.dz=this.lunar.dz.charAt((a-4)%12),e.year=this.lunar.year.charAt((a-4)%12),e.month=n<1?"(闰)"+this.lunar.month.charAt(-n-1):this.lunar.month.charAt(n-1),e.day=r<11?"初":r<20?"十":r<30?"廿":"三十",r%10==0&&10!=r||(e.day+=this.lunar.number.charAt((r-1)%10)),e}}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("my-headline",{attrs:{headlineObj:t.headlineObj}}),t._v(" "),a("div",{staticClass:"wid_size"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[a("div",{staticClass:"grid-content"},[a("h3",[t._v(t._s(t.dayObj.tit))]),t._v(" "),a("div",[t._v("\n            从\n            "),a("el-date-picker",{attrs:{type:"date",placeholder:"请选择起始日期",format:"yyyy 年 MM 月 dd 日","value-format":"MM-dd-yyyy",editable:!1},model:{value:t.dayObj.date_1,callback:function(e){t.$set(t.dayObj,"date_1",e)},expression:"dayObj.date_1"}})],1),t._v(" "),a("div",[t._v("\n            到\n            "),a("el-date-picker",{attrs:{type:"date",placeholder:"请选择结束日期",format:"yyyy 年 MM 月 dd 日","value-format":"MM-dd-yyyy",editable:!1},model:{value:t.dayObj.date_2,callback:function(e){t.$set(t.dayObj,"date_2",e)},expression:"dayObj.date_2"}})],1),t._v(" "),a("div",[t._v("\n            相差\n            "),a("b",[t._v(t._s(t.dayObj.result_1))]),t._v("\n            天 (\n            "),a("b",[t._v(t._s(t.dayObj.result_2))]),t._v("\n            周\n            "),a("b",[t._v(t._s(t.dayObj.result_3))]),t._v("\n            天 )\n          ")])])]),t._v(" "),a("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[a("div",{staticClass:"grid-content"},[a("h3",[t._v(t._s(t.dateObj.tit))]),t._v(" "),a("div",[t._v("\n            与\n            "),a("el-date-picker",{attrs:{type:"date",placeholder:"请选择推算日期",format:"yyyy 年 MM 月 dd 日","value-format":"MM-dd-yyyy",editable:!1},model:{value:t.dateObj.date,callback:function(e){t.$set(t.dateObj,"date",e)},expression:"dateObj.date"}})],1),t._v(" "),a("div",[t._v("\n            相差\n            "),a("el-input",{attrs:{size:"small"},model:{value:t.dateObj.num,callback:function(e){t.$set(t.dateObj,"num",e)},expression:"dateObj.num"}}),t._v("\n            天（输入负数向前推算）\n          ")],1),t._v(" "),a("div",[t._v("\n            是\n            "),a("b",[t._v(t._s(t.dateObj.result_1))]),t._v("\n            年\n            "),a("b",[t._v(t._s(t.dateObj.result_2))]),t._v("\n            月\n            "),a("b",[t._v(t._s(t.dateObj.result_3))]),t._v("\n            日 星期\n            "),a("b",[t._v(t._s(t.dateObj.result_4))])]),t._v(" "),a("div",{staticClass:"intro"},[t._v("注：请输入整数")])])])],1)],1)],1)},staticRenderFns:[]};var d=a("VU/8")(n,r,!1,function(t){a("yFgN")},"data-v-d35be168",null);e.default=d.exports},yFgN:function(t,e){}});
/**
 * index.html
 * @authors shikkya
 * @date 2023-11-20
 */

var noteData = [{
    type: 'Html',
    child: [{
        tit: '资源引入 css js',
        code: `
<a><link rel="stylesheet" href="./index.css" /></a>
<a><script src="./index.js"></script></a>
<script type="text/javascript" src="./index.js"></script>`
    }, {
        tit: 'input关闭自动填充 autocomplete',
        code: `<input type="text"<a> autocomplete="off"</a> />`
    }, {
        tit: '可编辑属性 contenteditable',
        code: `
<!-- 默认 -->
<div<a> contenteditable="inherit"</a>></div>
<!-- 可编辑 仅限纯文本 -->
<div<a> contenteditable="plaintext-only"</a>></div>
<!-- 可编辑 可图片样式等 -->
<p<a> contenteditable="true"</a>></p>
<!-- 不可编辑 -->
<p<a> contenteditable="false"</a>></p>`
    }]
}, {
    type: 'Css',
    child: [{
        tit: '超出显示省略号（单行）',
        code: `
* {
    width: 200px;
    <a>overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;</a>
}`
    }, {
        tit: '超出显示省略号（多行）',
        code: `
* {
    width: 200px;
    <a>display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* 行数 */
    overflow: hidden;</a>
}`
    }, {
        tit: '禁止鼠标选中',
        desc: '防止双击误选',
        code: `
* {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    <a>user-select: none;</a>
}`
    }, {
        tit: '透明色 transparent',
        desc: '全透明黑色，相当于 rgba(0, 0, 0, 0)',
        code: `
* {
    background: <a>transparent</a>;
}`
    }, {
        tit: '模糊滤镜',
        code: `
div {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background: rgba(0, 0, 0, 0.5);
    <a>backdrop-filter: blur(5px);</a> /* 模糊强度 */
}`
    }, {
        tit: '黑白滤镜',
        code: `
body {
    <a>-webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);
    filter: grayscale(100%);
    filter: gray;</a>
}`
    }, {
        tit: '横纵居中定位',
        code: `
* {
    <a>position: absolute;
    left: 50%;
    top: 50%;
    z-index: 1;
    transform: translate(-50%, -50%);</a>
}`
    }, {
        tit: '隐藏IE/Edge浏览器中密码输入框默认出现的小眼睛',
        code: `
input[type="password"]::-ms-reveal,
input[type="password"]::-ms-clear,
input[type="password"]::-o-clear {
    display: none;
}`
    }, {
        tit: 'css3 变量函数 var',
        code: `
<a>:root {
    --color-theme: #00bc9c;
    --wid-content: 1170px;
}</a>

div {
    width: var(--wid-content);
    color: <a>var(--color-theme)</a>;
    background: var(--color-bg, #eee);
}

// 设置变量
<a>document.documentElement.style.setProperty('--color-theme', 'pink');</a>

// 读取变量
<a>document.documentElement.style.getPropertyValue('--color-theme').trim();</a>

// 删除变量
document.documentElement.style.removeProperty('--color-theme');`
    }]
}, {
    type: 'CssIcon',
    child: [{
        tit: '单选 radio',
        code: `
.radio {
    display: inline-block;
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 50%;
    position: relative;
    cursor: pointer;
}

.radio::before {
    content: "";
    width: 8px;
    height: 8px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
}

.radio.active {
    border-color: #00bc9c; /* 选中颜色 */
}

.radio.active::before {
    background: #00bc9c; /* 选中颜色 */
}`,
        example: `
<i class="radio"></i>
<i class="radio active"></i>`
    }, {
        tit: '多选 check',
        code: `
.check {
    display: inline-block;
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 3px; /* 矩形3px 圆形50% */
    position: relative;
    cursor: pointer;
}

.check::before {
    content: "";
    width: 4px;
    height: 8px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -70%) rotate(45deg);
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
}

.check.active {
    background: #00bc9c; /* 选中颜色 */
    border-color: #00bc9c; /* 选中颜色 */
}`,
        example: `
<i class="check"></i>
<i class="check active"></i>`
    }, {
        tit: '箭头（展开收起、前进返回）',
        code: `
.arrow {
    display: inline-block;
    width: 6px; /* 尺寸 */
    height: 6px; /* 尺寸 */
    border-left: 2px solid #aaa; /* 颜色 */
    border-bottom: 2px solid #aaa; /* 颜色 */
    position: relative;
    cursor: pointer;
}

.arrow[data-t="up"] {
    transform: rotate(135deg);
}

.arrow[data-t="down"] {
    transform: rotate(-45deg);
    top: -3px;
}

.arrow[data-t="left"] {
    transform: rotate(45deg);
    top: -1px;
    left: 2px;
}

.arrow[data-t="right"] {
    transform: rotate(-135deg);
    top: -1px;
    right: 1px;
}`,
        example: `
<i class="arrow" data-t="up"></i>
<i class="arrow" data-t="down"></i>
<i class="arrow" data-t="left"></i>
<i class="arrow" data-t="right"></i>`
    }, {
        tit: '排序',
        code: `
.sort {
    display: inline-block;
    width: 12px;
    height: 12px;
    position: relative;
    cursor: pointer;
}

.sort::before,
.sort::after {
    content: '';
    position: absolute;
    left: 50%;
    z-index: 1;
    transform: translate(-50%, 0);
    border: 6px solid transparent; /* 尺寸 */
}

.sort::before {
    top: -50%;
    margin-top: -1px;
    border-bottom-color: #ccc; /* 默认颜色 */
}

.sort::after {
    bottom: -50%;
    margin-bottom: -1px;
    border-top-color: #ccc; /* 默认颜色 */
}

.sort[data-t="asc"]::before {
    border-bottom-color: #00bc9c; /* 选中颜色 */
}

.sort[data-t="desc"]::after {
    border-top-color: #00bc9c; /* 选中颜色 */
}`,
        example: `
<i class="sort"></i>
<i class="sort" data-t="asc"></i> <!-- 升序 -->
<i class="sort" data-t="desc"></i> <!-- 降序 -->`
    }, {
        tit: '心形（实心）',
        code: `
.heart {
    width: 10px; /* 尺寸 */
    height: 10px; /* 尺寸 */
    background: pink; /* 颜色 */
    transform: rotate(45deg);
    position: relative;
}

.heart::before,
.heart::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: inherit;
    border-radius: 50%;
}

.heart::before {
    transform: translate(-50%, 0);
}

.heart::after {
    transform: translate(0, -50%);
}`,
        example: `<div class="heart"></div>`
    }, {
        tit: '心形（空心）',
        code: `
.heart {
    width: 10px; /* 尺寸 */
    height: 10px; /* 尺寸 */
    background: #fff;
    color: #aaa; /* 颜色 */
    border: 1px solid #aaa; /* 颜色 */
    border-top: 0;
    border-left: 0;
    transform: rotate(45deg);
    position: relative;
}

.heart::before,
.heart::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: inherit;
    border-top: 1px solid currentColor;
    border-radius: 50%;
}

.heart::before {
    border-left: 1px solid currentColor;
    transform: translate(-50%, 0) rotate(-45deg);
}

.heart::after {
    border-right: 1px solid currentColor;
    transform: translate(0, -50%) rotate(-45deg);
}`,
        example: `<div class="heart"></div>`
    }]
}, {
    type: 'Js',
    child: [{
        tit: '返回同级元素 siblings',
        code: `$(this).<a>siblings()</a>;`
    }, {
        tit: '获取标签及内部html代码 outerHTML',
        code: `$(this).<a>prop(\'outerHTML\')</a>;`
    }, {
        tit: '阻止冒泡',
        code: `
$('body').on('click', function (e) {
    <a>e.stopPropagation();</a>
})`
    }, {
        tit: '判断是否隐藏',
        code: `
if ($(this).<a>is(':hidden')</a>) {
    alert('当前状态为隐藏');
}`
    }, {
        tit: '返回顶部 至顶',
        code: `
$('body, html').animate({
    scrollTop: 0
}, 200);`
    }, {
        tit: '随机数 random',
        code: `
// 0[包含] 到 1[不含] 之间的 随机小数
<a>Math.random();</a>

// 0[包含] 到 9[包含] 之间的 随机整数
<a>Math.floor(Math.random() * 10);</a>

// 0[包含] 到 99[包含] 之间的 随机整数
<a>Math.floor(Math.random() * 100);</a>

// 1[包含] 到 100[包含] 之间的 随机整数
<a>Math.floor(Math.random() * 100) + 1;</a>

// min[包含] 到 max[不含] 之间的 随机整数
<a>Math.floor(Math.random() * (max - min) + min);</a>

// min[包含] 到 max[包含] 之间的 随机整数
<a>Math.floor(Math.random() * (max - min + 1) + min);</a>`
    }, {
        tit: '数字处理 取整 小数位数 Math',
        code: `
// 取整 去掉小数点及之后的部分
<a>parseInt()</a>;
parseInt('-1.4'); // -1
parseInt(1.5); // 1

// 取整 去掉小数点及之后的部分
<a>Math.trunc()</a>;
Math.trunc('-1.4'); // -1
Math.trunc(1.5); // 1

// 向下取整
<a>Math.floor()</a>;
Math.floor('-1.4'); // -2
Math.floor(1.5); // 1

// 向上取整
<a>Math.ceil()</a>;
Math.ceil('-1.4'); // -1
Math.ceil(1.5); // 2

// 取整 四舍五入
<a>Math.round()</a>;
Math.round('-1.4'); // -1
Math.round(1.5); // 2

// 保留小数 四舍五入 n为Number 不补零
<a>n.toFixed(0)</a>;
-1.45.toFixed(1); // '-1.5'
1.54.toFixed(1); // '1.5'

// 保留小数 非四舍五入 正数 不补零
<a>Math.floor(n * 100) / 100</a>;
Math.floor(1.45 * 10) / 10; // 1.4
Math.floor(1.54 * 10) / 10; // 1.5

// 保留小数 非四舍五入 负数 不补零
<a>Math.ceil(n * 100) / 100</a>;
Math.ceil(-1.45 * 10) / 10; // -1.4
Math.ceil(-1.54 * 10) / 10; // -1.5

// 取绝对值
<a>Math.abs()</a>;
Math.abs('-1.4'); // 1.4
Math.abs(1.5); // 1.5
Math.abs(0); // 0

// x的y次幂
<a>Math.pow(x, y)</a>;
Math.pow('2', '2'); // 4
Math.pow(2, 3); // 8

// 最小值
<a>Math.min()</a>;
Math.min(-1, 3, 0, -1, 4); // -1

// 最大值
<a>Math.max()</a>;
Math.max(-1, 3, 0, -1, 4); // 4`
    }, {
        tit: '数组常用操作',
        code: `
var arr = [2, 1, 3, 4, 1];

// 添加数据 末尾 返回新数组长度 原数组改变
arr.<a>push(10)</a>; // 6

// 添加数据 头部 返回新数组长度 原数组改变
arr.<a>unshift(10)</a>; // 6

// 删除数据 末尾 返回删除项 原数组改变
arr.<a>pop()</a>; // 1

// 删除数据 头部 返回删除项 原数组改变
arr.<a>shift()</a>; // 2

// 删除数据 指定 返回删除项数组 原数组改变 (开始索引,删除个数) 
arr.<a>splice(1, 2)</a>; // [1, 3] arr为[2, 4, 1]

// 删除数据并插入 返回删除项数组 原数组改变 (开始索引,删除个数,插入项) 
arr.splice(1, 2, 10); // [1, 3] arr为[2, 10, 4, 1]

// 倒叙 返回新数组 原数组改变
arr.<a>reverse()</a>; // [1, 4, 3, 1, 2]

// 合并数组 返回新数组 原数组不变
arr.<a>concat([10, 20])</a>; // [2, 1, 3, 4, 1, 10, 20]

// 数组转字符串 原数组不变
arr.<a>join()</a>; // '2,1,3,4,1'
arr.join('-'); // '2-1-3-4-1'

// 截取部分数据 返回截取数组 原数组不变 (开始索引,结束索引+1) 
arr.<a>slice(1, 2)</a>; // [1]

// 查询 返回从左到右第一次出现的索引 若无则-1 (要查询的数据)
arr.<a>indexOf(1)</a>; // 1

// 查询 返回从左到右指定位置起第一次出现的索引 若无则-1 (要查询的数据,开始索引)
arr.indexOf(1, 2); // 4

// 查询 返回从右到左第一次出现的索引 若无则-1 (要查询的数据)
arr.<a>lastIndexOf(1)</a>; // 4

// 查询 返回从右到左指定位置起第一次出现的索引 若无则-1 (要查询的数据,开始索引)
arr.lastIndexOf(1, 2); // 1

// 循环遍历 无返回值 (数组项,索引,原数组)
arr.<a>forEach(function (item, index, arr) { })</a>

// 映射 返回新数组 (数组项,索引,原数组)
arr.<a>map(function (item, index, arr) {
    return { k: index, v: item };
})</a> // [{k:0,v:2},{k:1,v:1},{k:2,v:3},{k:3,v:4},{k:4,v:1}]

// 过滤 返回新数组 (数组项,索引,原数组)
arr.<a>filter(function (item, index, arr) {
    return item < 2;
})</a> // [1, 1]

// 判断 所有项满足返回true 反之false (数组项,索引,原数组)
arr.<a>every(function (item, index, arr) {
    return item < 2;
})</a> // false

// 判断 一项以上满足返回true 反之false (数组项,索引,原数组)
arr.<a>some(function (item, index, arr) {
    return item < 2;
})</a> // true

// 查询 返回第一个满足的项 若无返回undefined (数组项,索引,原数组)
arr.<a>find(function (item, index, arr) {
    return item < 2;
})</a> // 1

// 累加 返回结果 (累加值,数组项,索引,原数组,初始值)
arr.<a>reduce(function (prev, item, index, arr) {
    return prev += 1;
}, 0)</a> // 5`
    }, {
        tit: '一维数组 排序',
        code: `
// 升序
arr.<a>sort()</a>;

// 升序
arr.sort(function (a,b) {return a-b});

// 降序
arr.<a>sort(function (a,b) {return b-a})</a>;`,
        example: `
var arr = [3, 1, 5, 4, 2];
arr.sort(); // [1, 2, 3, 4, 5]
arr.sort(function (a,b) {return a-b}); // 1, 2, 3, 4, 5]
arr.sort(function (a,b) {return b-a}); // [5, 4, 3, 2, 1]`
    }, {
        tit: '一维数组 随机乱序',
        desc: '二维可用，但仅乱序一维',
        code: `
arr.sort(function () {
    return Math.random() > 0.5 ? -1 : 1;
})`,
        example: `
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var arr = [[0, 1], [2, 3], [4, 5], [6, 7], [8, 9]];
var arr = [{ id: 1, num: 1 }, { id: 2, num: 2 }, { id: 3, num: 3 }, { id: 4, num: 4 }, { id: 5, num: 5 }];
arr.sort(function () {
    return Math.random() > 0.5 ? -1 : 1;
})
console.log(arr);`
    }, {
        tit: '一维数组 去重',
        code: `
<a>[...new Set(arr)];</a>

<a>Array.from(new Set(arr));</a>

$.grep(arr, function (element, index) {
    return $.inArray(element, arr) === index;
});`,
        example: `
var arr = [1, 2, 3, 1, 2, 3];

arr = [...new Set(arr)];

arr = $.grep(arr, function (element, index) {
    return $.inArray(element, arr) === index;
});

arr = Array.from(new Set(arr));

console.log(arr); // [1, 2, 3]`
    }, {
        tit: '对象数组 去重',
        code: `
<a>[...new Set(arr.map(JSON.stringify))].map(JSON.parse);</a>

arr.filter((obj, index, self) => {
    return index === self.findIndex(item => JSON.stringify(item) === JSON.stringify(obj));
});`,
        example: `
var arr = [{ id: 1 }, { id: 2 }, { id: 1 }, { id: 2 }];

arr = [...new Set(arr.map(JSON.stringify))].map(JSON.parse);

arr = arr.filter((obj, index, self) => {
    return index === self.findIndex(item => JSON.stringify(item) === JSON.stringify(obj));
});

console.log(arr); // [{ id: 1 }, { id: 2 }]`
    }, {
        tit: '获取元素的宽高',
        code: `
// 宽
$(dom).<a>width()</a>;
// 高
$(dom).<a>height()</a>;

// 宽 包括内边距 width() + padding * 2
$(dom).<a>innerWidth()</a>;
// 高 包括内边距 height() + padding * 2
$(dom).<a>innerHeight()</a>;

// 宽 包括内边距、边框 width() + padding * 2 + border * 2
$(dom).<a>outerWidth()</a>;
// 宽 包括内边距、边框 height() + padding * 2 + border * 2
$(dom).<a>outerHeight()</a>;

// 宽 包括内边距、边框、外边距 width() + padding * 2 + border * 2 + margin * 2
$(dom).<a>outerWidth(true)</a>;
// 高 包括内边距、边框、外边距 height() + padding * 2 + border * 2 + margin * 2
$(dom).<a>outerHeight(true)</a>;`
    }, {
        tit: '获取各种宽高距离',
        code: `
// 浏览器可视区域 宽度/高度
<a>$(window).width()</a>;
<a>$(window).height()</a>;

// 页面文档 宽度/高度
<a>$(document).width()</a>;
<a>$(document).height()</a>;

// 当前显示设备 宽度/高度/比例
<a>window.screen.width</a>;
<a>window.screen.height</a>;
<a>window.devicePixelRatio</a>;

// 滚动条滑块到顶部的高度 即网页被滚上去的高度
<a>$(document).scrollTop()</a>;

// 元素左上角距离文档流左上角的距离
$(dom).<a>offset().left</a>;
$(dom).<a>offset().top</a>;

// 元素左上角距离父级定位元素左上角的距离
$(dom).<a>position().left</a>;
$(dom).<a>position().top</a>;`
    }, {
        tit: '日期对象 Date',
        code: `
// 年
<a>new Date().getFullYear()</a>;
// 月 0-11
<a>new Date().getMonth()</a>;
// 日 1-31
<a>new Date().getDate()</a>;
// 星期 0-6
<a>new Date().getDay()</a>;
// 时 0-23
<a>new Date().getHours()</a>;
// 分 0-59
<a>new Date().getMinutes()</a>;
// 秒 0-59
<a>new Date().getSeconds()</a>;
// 毫秒 0-999
new Date().getMilliseconds();

// 年月日
<a>new Date().toLocaleDateString()</a>; // '2020/1/3'
// 时分秒
<a>new Date().toLocaleTimeString()</a>; // '13:14:0'
// 年月日时分秒
<a>new Date().toLocaleString()</a>; // '2020/1/3 13:14:0'

// 时间戳 1970年1月1日至date的毫秒数
<a>new Date().getTime()</a>;
// 时间戳 1970年1月1日至今的毫秒数
<a>Date.now()</a>;

// 设置指定年月日
new Date('2020-1-3');
<a>new Date('2020-01-03')</a>;
new Date('2020/1/3');
new Date('2020/01/03');
new Date('2020,1,3');
new Date('2020,01,03');
new Date(2020, 0, 3);

// 设置指定年月日时分秒
<a>new Date('2020-01-03 13:14:00')</a>;
new Date('2020/01/03 13:14:0');
new Date('2020,1,3 13:14');
new Date(2020, 0, 3, 13, 14, 0);
new Date(2020, 0, 3, 13, 14);

// 设置一个月的某一天 (0上个月的最后一天 1本月第一天)
data.setDate(0);`,
        example: `
var date = new Date();

date.getFullYear() + '-' + formatNum(date.getMonth() + 1) + '-' + formatNum(date.getDate()); // '2020-01-03'

var week = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
week[date.getDay()]; // '星期五'

formatNum(date.getHours()) + ':' + formatNum(date.getMinutes()) + ':' + formatNum(date.getSeconds()); // '13:14:00'

function formatNum(num) {
    return (parseInt(num) > 9 ? '' : '0') + parseInt(num);
}

// 2020年1月3日往前10天
var date = new Date('2020-01-03');
date.setDate(date.getDate() - 10);
date.toLocaleDateString(); // '2019/12/24'`
    }, {
        tit: '页面缩放 zoom',
        code: `<a>document.body.style.zoom</a> = 1;`,
        example: `
// 获取当前页面的缩放比例
function getZoom() {
    return parseFloat(document.body.style.zoom) || 1;
}

// 设置页面的缩放比例
function setZoom(zoom) {
    document.body.style.zoom = zoom;
}

// 页面放大
function zoomIn() {
    var zoom = getZoom();
    setZoom(zoom + 0.1);
}

// 页面缩小
function zoomOut() {
    var zoom = getZoom();
    if (zoom > 0.2) {
        setZoom(zoom - 0.1);
    }
}`
    }, {
        tit: '字符 Unicode编码 转换',
        code: `
// 字符 转 Unicode
'ABC'.charCodeAt(0); // 65

// Unicode 转 字符
String.fromCharCode(65); // 'A'
String.fromCharCode(65, 66, 67); // 'ABC'`
    }, {
        tit: '页面跳转 刷新',
        code: `
// 当前页刷新
<a>window.location.reload()</a>;

// 当前页跳转
<a>window.location.href = ''</a>;

// 打开新标签页
<a>window.open('')</a>;

// 替换当前页
<a>window.location.replace('')</a>;

// 返回上一页 不刷新
<a>window.history.go(-1)</a>;
window.history.back(-1);
<a>window.history.back()</a>;

// 返回上一页 刷新
<a>location.replace(document.referrer)</a>;

// 前进一页 不刷新
window.history.go(1);
window.history.forward();`
    }, {
        tit: '地址获取',
        desc: '示例 https://www.test.com:80/index?id=1&type=0#name',
        code: `
// 完整地址
window.location.href

// 协议
window.location.protocol // 'https:'

// 域名
window.location.hostname // 'www.test.com'

// 端口号
window.location.port // '80'

// 域名+端口号
window.location.host // 'www.test.com:80'

// 路径
window.location.pathname // '/index'

// 参数
window.location.search // '?id=1&type=0'

// 锚点
window.location.hash // '#name'`
    }, {
        tit: '监听dom变化 MutationObserver',
        code: `
var targetNode = $('body')[0];
var config = { attributes: true, childList: true, subtree: true };
var observer = new MutationObserver(function (mutations, observer) {
    observer.disconnect(); // 停止
    // 操作 ...
    observer.observe(targetNode, config); // 开始
});
observer.observe(targetNode, config); // 开始`
    }]
}, {
    type: 'Event',
    child: [{
        tit: '输入框内回车',
        code: `
$('body').on('keyup', '.input', function (e) {
    e = e ? e : window.event;
    if (e.keyCode == 13) {
        // 搜索 ...
    }
})`
    }, {
        tit: '输入框实时检索兼容中文输入法',
        code: `
$('body').on('compositionstart', '.input', function () {
    $(this).addClass('unable');
}).on('compositionend', '.input', function () {
    $(this).removeClass('unable');
    // 搜索 ...
}).on('input', '.input', function () {
    if (!$(this).hasClass('unable')) {
        // 搜索 ...
    }
})`
    }, {
        tit: '滚动加载 scroll',
        code: `
var scrollFlag = true; // 防抖标记
$(window).scroll(function () {
    if (!scrollFlag) {
        return false;
    }
    var scrollTop = $(document).scrollTop(); // 滚动条距离
    var docHei = $(document).height(); // 页面高
    var winHei = $(window).height(); // 浏览器高
    if (docHei - scrollTop - winHei < 300) {
        $('.load').show(); // 显示loading
        scrollFlag = false;
        handleFun();
    }
})
function handleFun() {
    // 加载 ...
    $('.load').hide(); // 隐藏loading
    scrollFlag = true;
}`
    }, {
        tit: '监听浏览器窗口宽高变化 resize',
        code: `
$(window).resize(function () {
    console.log($(window).width(), $(window).height());
})`
    }, {
        tit: '监听元素宽高变化 resize',
        code: `
// extendResize.js
(function($,h,c){var a=$([]),e=$.resize=$.extend($.resize,{}),i,k="setTimeout",j="resize",d=j+"-special-event",b="delay",f="throttleWindow";e[b]=250;e[f]=true;$.event.special[j]={setup:function(){if(!e[f]&&this[k]){return false}var l=$(this);a=a.add(l);$.data(this,d,{w:l.width(),h:l.height()});if(a.length===1){g()}},teardown:function(){if(!e[f]&&this[k]){return false}var l=$(this);a=a.not(l);l.removeData(d);if(!a.length){clearTimeout(i)}},add:function(l){if(!e[f]&&this[k]){return false}var n;function m(s,o,p){var q=$(this),r=$.data(this,d);r.w=o!==c?o:q.width();r.h=p!==c?p:q.height();n.apply(this,arguments)}if($.isFunction(l)){n=l;return m}else{n=l.handler;l.handler=m}}};function g(){i=h[k](function(){a.each(function(){var n=$(this),m=n.width(),l=n.height(),o=$.data(this,d);if(m!==o.w||l!==o.h){n.trigger(j,[o.w=m,o.h=l])}});g()},e[b])}})(jQuery,this); 

$('#div').resize(function () {
    console.log($(this).width(), $(this).height());
});`
    }, {
        tit: '监听元素宽高变化 ResizeObserver',
        desc: '不支持IE内核的所有版本',
        code: `
var observer = new ResizeObserver(entries => {
    for (var entry of entries) {
        console.log(entry.contentRect.width, entry.contentRect.height);
    }
});
observer.observe($('#div')[0]);`
    }]
}, {
    type: 'Function',
    child: [{
        tit: '获取url参数',
        code: `
/**
* 获取url参数
* @author shikkya
* @param {String} key
* @return {String}
*/
function getUrlString(key) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}`,
        example: `getUrlString('userId'); // 89757`
    }, {
        tit: '对象数组 排序（根据某一属性值）',
        code: `
/**
* 对象数组 排序（根据某一属性值）
* @author shikkya
* @param {String} key 属性名
* @param {String} type 排序方式 [升序asc 降序desc] 默认升序
* @return {Array}
*/
function arraySortBy(key, type) {
    return function (a, b) {
        if (type == 'desc') {
            return b[key] - a[key];
        }
        return a[key] - b[key];
    }
}`,
        example: `
var arr = [{ id: 1, num: 10 }, { id: 3, num: 20 }, { id: 2, num: 30 }];
<a>arr.sort(arraySortBy('id'));</a> // [{ id: 1, num: 10 }, { id: 2, num: 30 }, { id: 3, num: 20 }]
<a>arr.sort(arraySortBy('num', 'desc'));</a> // [{ id: 2, num: 30 }, { id: 3, num: 20 }, { id: 1, num: 10 }]`
    }, {
        tit: '二维数组 去重',
        code: `
/**
 * 二维数组 去重
 * @author shikkya
 * @param {Array} arr
 * @return {Array}
 */
function uniqueArr(arr) {
    var temp = {};
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        var key = arr[i].toString();
        if (!temp[key]) {
            temp[key] = true;
            res.push(arr[i]);
        }
    }
    return res;
}`,
        example: `
var arr = [[0, 0], [1, 1], [0, 0], [1, 1]];
console.log(uniqueArr(arr)); // [[0, 0], [1, 1]]`
    }, {
        tit: '文件下载',
        code: `
/**
* 文件下载
* @author shikkya
* @param {String} data
* @param {String} name
* @return void
*/
function fileDownload(data, name) {
    var a = document.createElement('a');
    a.href = data;
    a.download = name;
    a.click();
}`,
        example: `fileDownload('data:image/png;base64,iVBORw0KGgo...', '测试图片');`
    }, {
        tit: '复制文本',
        code: `
/**
* 复制文本
* @author shikkya
* @param {String} text
* @return void
*/
function copyText(text) {
    var t = document.createElement('textarea');
    t.value = text;
    document.getElementsByTagName("body")[0].appendChild(t);
    t.select();
    document.execCommand('Copy');
    t.remove();
}`,
        example: `
copyText('测试文本');
copyText('测 试\\n文     本');`
    }, {
        tit: '两位整数格式化（个位数补零）',
        code: `
/**
* 两位整数格式化（个位数补零）
* @author shikkya
* @param {String/Number} num 数字
* @return {String}
*/
function formatNum(num) {
    return (parseInt(num) > 9 ? '' : '0') + parseInt(num);
}`,
        example: `
formatNum(1); // '01'
formatNum(10); // '10'
formatNum('01'); // '01'`
    }, {
        tit: '数字格式化（强制两位小数 非四舍五入 补零）',
        code: `
/**
* 数字格式化（强制两位小数 非四舍五入 补零）
* @author shikkya
* @param {String/Number} num 数字
* @return {String}
*/
function formatNum(num) {
    num += '';
    if (num.indexOf('.') == -1) {
        return num + '.00';
    }
    var numArr = num.split('.');
    if (numArr[1].length < 2) {
        numArr[1] += '00';
    }
    return numArr[0] + '.' + numArr[1].substring(0, 2);
}`,
        example: `
formatNum(0); // '0.00'
formatNum(1.3); // '1.30'
formatNum(-1.314); // '-1.31'`
    }, {
        tit: '数字格式化（加千分位, 强制两位小数）',
        code: `
/**
* 数字格式化（加千分位, 强制两位小数）
* @author shikkya
* @param {String/Number} num 数字
* @return {String}
*/
function formatNum(num) {
    num = (num + '').replace(new RegExp(',', 'g'), '');
    var numArr = parseFloat(num).toFixed(2).split('.');
    var temp = numArr[0];
    var result = '';
    while (temp.length > 3) {
        result = ',' + temp.slice(-3) + result;
        temp = temp.slice(0, temp.length - 3);
    }
    if (temp) {
        result = temp + result;
    }
    result += '.' + numArr[1];
    return result;
}`,
        example: `
formatNum(100); // '100.00'
formatNum(10000.1); // '10,000.10'
formatNum('1,000'); // '1,000.00'
formatNum('1,000.005'); // '1,000.00'
formatNum('1,000.016'); // '1,000.02'`
    }]
}, {
    type: 'Smarty',
    child: [{
        tit: '注释',
        code: `{* {include file="./header.html"} *}`
    }, {
        tit: '变量',
        code: `<input type="hidden" id="userRole" value="<a>{$userRole}</a>" />`
    }, {
        tit: '条件判断 if else',
        code: `
{if $userRole eq '财务' || $userRole eq '人力'}

{else if $userRole eq '超级管理员'}

{else}

{/if}`
    }, {
        tit: '循环 foreach',
        code: `
{foreach $list as $item}
    {$item.id}
{/foreach}`
    }]
}, {
    type: 'Template',
    child: [{
        tit: 'Bootstrap Modal Html',
        code: `
<div class="modal fade demo_modal" id="demoModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <b>标题</b>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            </div>
            <div class="modal-body">

            </div>
            <div class="modal-footer">
                <button data-dismiss="modal">取消</button>
                <button>确定</button>
            </div>
        </div>
    </div>
</div>`
    }, {
        tit: 'Bootstrap Modal Css',
        code: `
/* demo_modal */

.demo_modal .modal-dialog {
    width: 600px;
}

.demo_modal .modal-header {
    text-align: center;
    color: #333;
    font-size: 16px;
    padding: 10px 16px;
    border-bottom: 1px solid #f0f0f0;
    position: relative;
}

.demo_modal .modal-header .close {
    position: absolute;
    right: 16px;
    z-index: 1;
    color: #aaa;
    font-size: 24px;
    font-weight: normal;
    opacity: 1;
}

.demo_modal .modal-body {
    padding: 16px 30px;
    max-height: calc(100vh - 200px);
    overflow: auto;
}

.demo_modal .modal-footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px 16px;
    border-top: 1px solid #f0f0f0;
}

.demo_modal .modal-footer button {
    width: 80px;
    line-height: 32px;
    text-align: center;
    background: #00bc9c;
    border: 1px solid #00bc9c;
    color: #fff;
    border-radius: 4px;
    margin-left: 16px;
    cursor: pointer;
}

.demo_modal .modal-footer button:first-child {
    background: #fff;
    border-color: #dcdcdc;
    color: #333;
}`
    }, {
        tit: 'ajax请求 JQuery',
        code: `
$.ajax({
    url: '/home/demo/url',
    type: 'post',
    data: {
        id: ''
    },
    dataType: 'json',
    async: true, // true异步 false同步
    complete: function (xhr, status) {
        // complete ...
    },
    success: function (res) {
        if (res.code == 0) {
            // success ...
        }
        else {
            alert(res.msg);
        }
    },
    error: function (xhr, textStatus, errorThrown) {
        alert('error');
    }
});`
    }, {
        tit: 'Css 初始化',
        code: `
@charset "UTF-8";

/**
 * 
 * @authors shikkya
 * @date 
 */

* {
    padding: 0;
    margin: 0;
    outline: none;
    box-shadow: none;
    box-sizing: border-box;
}

html,
body {
    width: 100%;
    min-height: 100vh;
}

body {
    background: #fff;
    color: #333;
    font-weight: normal;
    font-size: 15px;
    font-family: "微软雅黑", "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
    cursor: default;
}

a,
a:hover {
    text-decoration: none;
}

a,
a:hover,
button {
    cursor: pointer;
}

i {
    font-style: normal;
}

ol,
ul,
li {
    list-style: none;
}

input,
textarea,
select {
    background: #fff;
    color: #666;
    font-size: 15px;
}

input::-ms-clear,
input[type="password"]::-ms-reveal,
input[type="password"]::-o-clear {
    display: none;
}

textarea {
    resize: none;
}

table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
}

/* common */

.fr {
    float: right;
}

.fl {
    float: left;
}

.btn {
    display: inline-block;
    background: #00bc9c;
    color: #fff;
    border: 1px solid #00bc9c;
    line-height: 32px;
    border-radius: 5px;
    padding: 0 12px;
    font-size: 15px;
    text-align: center;
    cursor: pointer;
}

/* scroll */

::-webkit-scrollbar {
    width: 5px;
    height: 5px;
}

::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.2);
}

::-webkit-scrollbar-track {
    border-radius: 10px;
    background: rgba(255, 255, 255, 0);
}`
    }, {
        tit: 'JQuery 初始化',
        code: `
$(function () {

    var self = this;

    this.createEvent = function () {
        // 点击
        $('body').on('click', function () {
            // ...
        });
    };

    // 获取数据
    this.getData = function () {
        $.ajax({
            url: '',
            type: 'post',
            data: {
                // ...
            },
            dataType: 'json',
            success: function (res) {
                if (res.code == 0) {
                    self.createHtml(res);
                }
                else {
                    layer.msg(res.msg);
                }
            }
        });
    };

    // 创建html结构
    this.createHtml = function (data) {
        var html = '';
        for (var i in data) {
            html += '';
        }
        $('body').html(html);
    };

    this.init = function () {
        self.createEvent();
        self.getData();
    };

    this.init();
})`
    }]
}]

/*
, {
    tit: '',
    desc: '',
    code: ``,
    example: ``
}
*/












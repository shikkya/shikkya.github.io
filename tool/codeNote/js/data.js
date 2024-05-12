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
        tit: '一维数组 排序',
        code: `
// 升序
arr.<a>sort()</a>;

// 降序
asc.<a>reverse()</a>;`,
        example: `
var arr = [3, 1, 5, 4, 2];
arr.sort(); // [1, 2, 3, 4, 5]
asc.reverse(); // [5, 4, 3, 2, 1]`
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
        tit: '获取各种距离',
        code: `
// 浏览器可视区域 宽度/高度
<a>$(window).width()</a>;
<a>$(window).height()</a>;

// 页面文档 宽度/高度
<a>$(document).width()</a>;
<a>$(document).height()</a>;

// 滚动条滑块到顶部的高度 即网页被滚上去的高度
<a>$(document).scrollTop()</a>;

// 元素左上角距离文档流左上角的距离
$(dom).<a>offset().left</a>;
$(dom).<a>offset().top</a>;

// 元素左上角距离父级定位元素左上角的距离
$(dom).<a>position().left</a>;
$(dom).<a>position().top</a>;`
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












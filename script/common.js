/**
 * @authors kk
 * @date    2019-03-18
 */

// 各产品首页右上角导航
var productList = [
    { text: '可可导航', url: '../../index.html' },
    { text: '模板壁纸', url: '../wallpaper/index.html' },
    { text: '便易工具', url: '../tool/index.html' }
];

// 页脚
var vmFooter = new Vue({
    el: '#footer',
    template: '<div id="footer" class="footer" v-cloak><ul><li><img :src="logoImg"/></li><li><p>联系 QQ：125048224</p><p>意见反馈：shikkya@qq.com</p></li></ul></div>',
    data: {
        logoImg: '../../images/footer_01.png'
    }
})

// 暂无信息组件
Vue.component("NoInfoItem", {
    template: '<div id="noInfo" class="no_info"><img src="../../images/wallpaper_03.png"/><p>暂时没有哦 ~ 看看其他的吧</p></div>'
})

// 右下悬浮功能按钮
Vue.component("GoTopItem", {
    template: '<div class="shortcut"><div class="go_top" @click="goTop"><i class="fa fa-angle-up" aria-hidden="true"></i></div><div class="go_home" @click="window.location.href=\'./index.html\'"><i class="fa fa-home" aria-hidden="true"></i></div></div>'
})

// 返回顶部
function goTop() {
    clearInterval(timer);
    var timer = setInterval(function() {
        var target = document.documentElement.scrollTop;
        target -= Math.ceil(target / 10);
        window.scrollTo(0, target);
        if (target <= 0) {
            clearInterval(timer);
        }
    }, 10);
};

// 图片加载-判断浏览器  
var Browser = new Object();
Browser.userAgent = window.navigator.userAgent.toLowerCase();
Browser.ie = /msie/.test(Browser.userAgent);
Browser.Moz = /gecko/.test(Browser.userAgent);

// 图片加载
function checkLoad(url, imgId) {
    var img = new Image();
    if (Browser.ie) {
        img.onreadystatechange = function() {
            if (img.readyState == "complete" || img.readyState == "loaded") {
                document.getElementById(imgId).src = img.src;
                document.getElementById(imgId).id = '';
            }
        }
    } else if (Browser.Moz) {
        img.onload = function() {
            if (img.complete == true) {
                document.getElementById(imgId).src = img.src;
                document.getElementById(imgId).id = '';
            }
        }
    }
    //如果因为网络或图片的原因发生异常，则显示该图片  
    img.onerror = function() {
        img.src = "../images/wallpaper_05.png"
    }
    img.src = url;
}

// 图片加载中
function loadImg() {
    var imgList = document.getElementsByTagName('img');
    for (i = 0; i < imgList.length; i++) {
        if (imgList[i].getAttribute('data-src')) {
            imgList[i].id = 'img_' + i;
            checkLoad(imgList[i].getAttribute("data-src"), imgList[i].id);
        }
    }
}

window.onload = function() {
    loadImg();
}
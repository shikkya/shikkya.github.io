/**
 * @authors kk
 * @date    2019-03-18
 */

var ieVersion = IEVersion();
alert(ieVersion);
if (typeof(ieVersion) == 'number' && ieVersion > 0 && ieVersion < 11) {
    // alert('IE浏览器版本过低，可能无法正常浏览，请尽快升级~');
}

// 浏览器判断
function IEVersion() {
    var userAgent = navigator.userAgent; // 取得浏览器的userAgent字符串  
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; // 判断是否IE<11浏览器  
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; // 判断是否IE的Edge浏览器  
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if (isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if (fIEVersion == 7) {
            return 7;
        } else if (fIEVersion == 8) {
            return 8;
        } else if (fIEVersion == 9) {
            return 9;
        } else if (fIEVersion == 10) {
            return 10;
        } else {
            return 6; // IE版本<=7
        }
    } else if (isEdge) {
        return 'edge'; // edge
    } else if (isIE11) {
        return 11; // IE11  
    } else {
        return -1; // 不是ie浏览器
    }
}

// 各产品首页右上角导航
var productList = [
    { text: '可可导航', url: '../index.html' },
    { text: '模板壁纸', url: '../wallpaper/index.html' },
    { text: '便易工具', url: '../tool/index.html' }
];

// 页脚
Vue.component("FooterItem", {
    template: '<div class="footer" v-cloak><ul><li><img :src="logoImg"/></li><li><p>联系 QQ：{{QNum}}</p><p>意见反馈：{{email}}</p></li></ul></div>',
    data: function() {
        return {
            logoImg: '../../images/footer_01.png',
            QNum: '125048224',
            email: 'shikkya@qq.com'
        }
    }
})

// 暂无信息
Vue.component("NoInfoItem", {
    template: '<div id="noInfo" class="no_info"><img :src="imgUrl" :data-src="dataImg"/><p>{{text}}</p></div>',
    data: function() {
        return {
            text: '暂时没有哦 ~ 看看其他的吧',
            imgUrl: '../../images/common_02.png',
            dataImg: '../../images/common_01.png'
        }
    }
})

// 悬浮功能按钮
Vue.component("GoTopItem", {
    template: '<div class="shortcut"><div class="go_top" @click="goTop"><i class="fa fa-angle-up" aria-hidden="true"></i></div><div class="go_home" @click="window.location.href=\'./index.html\'"><i class="fa fa-home" aria-hidden="true"></i></div></div>'
})

// 返回顶部
function goTop() {
    clearInterval(timer);
    var timer = setInterval(function() {
        var target = document.documentElement.scrollTop > document.body.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
        target -= Math.ceil(target / 10);
        window.scrollTo(0, target);
        if (target <= 0) {
            clearInterval(timer);
        }
    }, 15);
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
/**
 * common
 * @authors shikkya
 * @date    2019-08-29
 * @version $Id$
 */

/****************************** 功能 ******************************/

// 判断当前设备为PC或移动
checkDevice();

// 判断当前设备为PC或移动
function checkDevice() {
    var url = window.location.href;
    if (/Android|Mobile|ios|phone|pad|pod|iPhone|iPad|iPod|webOS|BlackBerry|Symbian/i.test(navigator.userAgent)) {
        // 移动设备
        if (url.indexOf('/web/html/') > -1) {
            window.location.replace(url.split('/web/html/')[0] + '/mobile/html/' + url.split('/web/html/')[1].split('/')[0] + '/index.html');
        }
    } else if (url.indexOf('/mobile/html/') > -1) {
        window.location.replace(url.split('/mobile/html/')[0] + '/web/html/' + url.split('/mobile/html/')[1].split('/')[0] + '/index.html');
    }
}

// 图片加载-判断浏览器  
var Browser = new Object();
Browser.userAgent = window.navigator.userAgent.toLowerCase();
Browser.ie = /msie/.test(Browser.userAgent);
Browser.Moz = /gecko/.test(Browser.userAgent);

// 图片加载 - 入口
function loadImg() {
    var imgList = document.getElementsByTagName('img');
    for (i = 0; i < imgList.length; i++) {
        if (imgList[i].getAttribute('data-src')) {
            imgList[i].id = 'img_' + i;
            checkLoad(imgList[i].getAttribute("data-src"), imgList[i].id);
        }
    }
}

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
        img.src = "../../images/wallpaper_05.png"
    }
    img.src = url;
}

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
}

// 点击联系我们
function goContact() {
    var obj = document.getElementById('goContact');
    if (obj.clientWidth == 152) {
        obj.style.width = '14px';
    } else {
        obj.style.width = '152px';
        setTimeout(function() {
            obj.style.width = '14px';
        }, 10000);
    }
}

// 获取url参数
function getUrlStr(name) {
    var url = window.location.href;
    return url.split(name + '=')[1].split('&')[0];
}

/****************************** 组件 ******************************/

// 头部
Vue.component("HeaderItem", {
    props: ['obj'],
    template: '<div class="header"><a class="back" :href="url"><i :class="\'icon iconfont icon-\' + obj.pageType"></i></a><div class="top"><h3>{{obj.tit}}</h3><p>{{obj.text}}</p></div></div>',
    computed: {
        url: function() {
            if (this.obj.pageType == 'home') {
                return '../home/index.html';
            } else if (this.obj.pageType == 'back') {
                return 'javaScript:history.go(-1)';
            }
        }
    }
})

// 悬浮功能按钮
Vue.component("PosBtnItem", {
    template: '<div class="pos_btn"><div class="go_top" @click="goTop"><i class="icon iconfont icon-arrow-top"></i></div><div class="go_contact" id="goContact" @click="goContact"><i class="icon iconfont icon-contact"></i><span>shikkya@qq.com</span></div></div>'
})
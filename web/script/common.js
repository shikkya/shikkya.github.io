/**
 * common
 * @authors shikkya
 * @date    2019-03-18
 * @version $Id$
 */

// ie版本过低判断
// var ieVersion = IEVersion();
// if (typeof(ieVersion) == 'number' && ieVersion > 0 && ieVersion < 10) {
//     window.location.replace("../html/error_version.html");
// }

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

// 获取url参数
function getUrlStr(name) {
    var url = window.location.href;
    return url.split(name + '=')[1].split('&')[0];
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

// 随机整数 包括m不包括n
function getRandomNum(m, n) {
    var random = Math.floor(Math.random() * (m - n) + n);
    return random;
}

/****************************** 组件 ******************************/

// 头部 - 各产品首页
Vue.component("HeaderIndexItem", {
    props: ['logoimg', 'curindex'],
    template: '<div class="header"><div class="wid_size"><a class="logo"><img :src="logoimg"/></a><ul class="product fr"><li v-for="(item,index) in productList" :class="{active:index==curindex}"><a v-if="index==curindex">{{item.text}}</a><a v-else :href="item.url">{{item.text}}</a></li></ul></div></div>',
    data: function() {
        return {
            productList: [
                { text: '可可导航', url: '../home/index.html' },
                { text: '模板壁纸', url: '../wallpaper/index.html' },
                { text: '便易工具', url: '../tool/index.html' },
                { text: '特效码集', url: '../code/index.html' }
            ]
        }
    }
})

// 头部 - 各产品详情页
Vue.component("HeaderDetailItem", {
    template: '<div class="header header_detail"><div class="wid_size"><a href="./index.html" class="logo"><img src="../../images/footer_01.png"/></a><a href="./index.html#toolList" class="btn fr">返回工具列表</a><span class="sentence fr">{{sentenceList[num]}}</span></div></div>',
    data: function() {
        return {
            num: getRandomNum(0, sentenceList.length)
        }
    }
})

// 悬浮功能按钮
Vue.component("PosBtnItem", {
    template: '<div class="pos_btn"><div class="go_top" @click="goTop"><i class="icon iconfont icon-arrow-top"></i></div><div class="go_home" @click="window.location.href=\'./index.html\'"><i class="icon iconfont icon-home"></i></div></div>'
})

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

/****************************** 数据 ******************************/

// 金句列表
var sentenceList = [
    '莫生气，莫生气，怎能事事都如意',
    '存储阳光，必有远芳',
    '你必须非常努力，才能做到毫不在意',
    '生活如人饮水，冷暖自知',
    '勿忘初心，方得始终',
    '发光并非太阳的专利，你也可以',
    '弱者喋喋不休，强者无需多言',
    '没有所谓的命运，只有不同的选择',
    '放弃不难，坚持不易',
    '越努力，越幸运',
    '心的通透，不是没有杂念，而是明白取舍',
    '水的清澈，并非不含杂质，而是懂得沉淀',
    '除了奋斗，别无选择',
    '每一个不曾起舞的日子，都是对生命的辜负',
    '不以物喜，不以己悲',
    '自助者天助之，自弃者天弃之',
    '如果你曾歌颂黎明，那么也请你拥抱黑夜',
    '可以奋起激进，也懂适可而止',
    '取舍间必有得失，无需太过计较',
    '天上下雨地上滑，自己滑倒自己爬'
]
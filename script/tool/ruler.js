/**
 * @authors kk
 * @date    2019-04-02
 */

// 尺子分段数据 wid原图高为35mm时的宽度/英寸
var rulerList = [
    { img: '01.png', wid: 0.41 },
    { img: '02.png', wid: 4.23 },
    { img: '03.png', wid: 2 },
    { img: '04.png', wid: 2 },
    { img: '05.png', wid: 2 },
    { img: '06.png', wid: 2 },
    { img: '07.png', wid: 2 },
    { img: '08.png', wid: 2 },
    { img: '09.png', wid: 2 },
    { img: '10.png', wid: 2 },
    { img: '11.png', wid: 0.06 }
];

var vm = new Vue({
    el: '#app',
    data: {
        headerObj: {
            homeUrl: './index.html',
            logoImg: '../../images/tool_01.png',
            goListUrl: './index.html#toolList',
            goListBtn: '返回工具列表'
        },
        infoObj: {
            tit: '在线尺子',
            text: '根据屏幕尺寸和分辨率生成度量尺 · 无实物精准便捷化测量'
        },
        rulerHtml: '<img src="../../images/tool_06.png"/>',
        rulerNum: 0,
        rulerLoadHtml: '',
        rulerLoadNum: 0,
        sizeHtml: ''
    },
    watch: {
        rulerLoadNum: function(num) {
            if (num == this.rulerNum) {
                this.rulerHtml = this.rulerLoadHtml;
            }
        }
    },
    mounted: function() {
        this.init();
    },
    methods: {
        // 初始化尺子
        createRuler: function(diagonal, screenWidth, screenHeight) {
            var aspectRatio = screenWidth / screenHeight;
            var countWid = 0;
            var tempWid = 0;
            var str = '';
            for (var i = 0; i < rulerList.length; i++) {
                tempWid = rulerList[i].wid * screenWidth / (diagonal * aspectRatio / (Math.sqrt(aspectRatio * aspectRatio + 1)));
                countWid += tempWid;
                if (countWid >= window.innerWidth - 20 && i != rulerList.length - 1) {
                    continue;
                }
                this.rulerNum++;
                str += '<img src="../../images/ruler/' + rulerList[i].img + '" style="width:' + tempWid + 'px"/>';
                this.checkLoad('../../images/ruler/' + rulerList[i].img);
            }
            this.rulerLoadHtml = str;
        },
        // 检查图片加载进度
        checkLoad: function(url) {
            // 判断浏览器  
            var Browser = new Object();
            Browser.userAgent = window.navigator.userAgent.toLowerCase();
            Browser.ie = /msie/.test(Browser.userAgent);
            Browser.Moz = /gecko/.test(Browser.userAgent);

            var img = new Image();
            if (Browser.ie) {
                img.onreadystatechange = function() {
                    if (img.readyState == "complete" || img.readyState == "loaded") {
                        vm.rulerLoadNum++;
                    }
                }
            } else if (Browser.Moz) {
                img.onload = function() {
                    if (img.complete == true) {
                        vm.rulerLoadNum++;
                    }
                }
            }
            img.src = url;
        },
        init: function() {
            var w1cm = document.getElementById("w1cm").offsetWidth;
            var sWidth = screen.width;
            var sHeight = screen.height;
            var sDiagonal = Math.sqrt(sWidth / w1cm * sWidth / w1cm + sHeight / w1cm * sHeight / w1cm) / 2.54;
            // 初始化说明
            this.sizeHtml += '<p>说明 : 尺子上端以厘米为单位，下端以英寸为单位</p>';
            this.sizeHtml += '<p>当前显示器分辨率为 : ' + sWidth + ' * ' + sHeight + ' pixels</p>';
            this.sizeHtml += '<p>当前显示器尺寸为 : ' + (sWidth / w1cm).toFixed(1) + ' * ' + (sHeight / w1cm).toFixed(1) + ' cm ' + sDiagonal.toFixed(1) + ' 寸</p>';
            this.sizeHtml += '<p>若尺子长度有误，请您设置正确的电脑分辨率；若数据显示有误，请至本页末选择联系方式反馈</p>';
            // 初始化尺子
            this.createRuler(sDiagonal, sWidth, sHeight);
            // 初始化content最小高度
            document.getElementById('content').style.minHeight = (document.body.clientHeight - 187) + 'px';
        }
    }
})



// 图片加载-判断浏览器  
var Browser = new Object();
Browser.userAgent = window.navigator.userAgent.toLowerCase();
Browser.ie = /msie/.test(Browser.userAgent);
Browser.Moz = /gecko/.test(Browser.userAgent);

// 图片加载
function checkLoad(url) {
    var img = new Image();
    if (Browser.ie) {
        img.onreadystatechange = function() {
            if (img.readyState == "complete" || img.readyState == "loaded") {
                console.log(333);
            }
        }
    } else if (Browser.Moz) {
        img.onload = function() {
            if (img.complete == true) {
                console.log(444);
            }
        }
    }
    //如果因为网络或图片的原因发生异常，则显示该图片  
    img.onerror = function() {
        img.src = "../images/wallpaper_05.png"
    }
    img.src = url;
}

// checkLoad('../../images/ruler/01.png');
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
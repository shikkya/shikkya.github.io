﻿/**
 * @authors kk
 * @date    2019-03-22
 */

// 头部
var vmHeader = new Vue({
    el: '#header',
    data: {
        homeUrl: './index.html',
        logoImg: '../../images/wallpaper_01.png',
        list: [
            { text: '可可导航', url: '../../index.html' },
            { text: '可可炸飞机', url: '' },
            { text: '可可美记', url: '' },
            { text: '倒计时', url: '' },
            { text: '模板壁纸', url: './index.html' }
        ]
    }
})

// 主体
var vmContent = new Vue({
    el: '#content',
    components: {
    },
    data: {
        picObj: {
            tit: '壁纸图库',
            moreUrl: './list.html',
            list: [
                { img: '037.png', tit: '僵小鱼' },
                { img: '017.png', tit: '你和我的倾城时光' },
                { img: '035.png', tit: '夏至未至' },
                { img: '018.png', tit: '三生三世十里桃花' },
                { img: '029.png', tit: '无心法师' },
                { img: '025.png', tit: '微微一笑很倾城' },
                { img: '012.png', tit: '高能少年团' },
                { img: '001.png', tit: 'By2《成人礼》' },
                { img: '011.png', tit: '浪花一朵朵' }
            ]
        }
    },
    computed: {
        picText: function() {
            return '点击下载获取模板壁纸 · 点击<a href="' + this.picObj.moreUrl + '">更多</a>浏览全部壁纸';
        }
    }
})













drawAndShareImage();
function drawAndShareImage() {
    // var canvas = document.createElement("canvas");
    var canvas = document.getElementById('myCanvas');
    // canvas.width = 700;
    // canvas.height = 700;
    var context = canvas.getContext("2d");

    context.rect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#fff";
    context.fill();

    var myImage = new Image();
    myImage.src = "../../images/02.jpg"; //背景图片  你自己本地的图片或者在线图片
    myImage.crossOrigin = 'Anonymous';

    myImage.onload = function() {
        context.drawImage(myImage, 0, 0, 1920, 1080);
        var myImage2 = new Image();
        myImage2.src = "../../images/01.png"; //你自己本地的图片或者在线图片
        myImage2.crossOrigin = 'Anonymous';

        myImage2.onload = function() {
            context.drawImage(myImage2, 0, 0, 1920, 1080);
            var base64 = canvas.toDataURL("image/png"); //"image/png" 这里注意一下
            var img = document.getElementById('avatar');

            // document.getElementById('avatar').src = base64;
            img.setAttribute('src', base64);
        }
    }
}
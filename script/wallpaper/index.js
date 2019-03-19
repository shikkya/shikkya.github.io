/**
 * @authors kk
 * @date    2019-03-16
 */

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
    },
    methods: {}
})

var vmContent = new Vue({
    el: '#content',
    data: {
        topObj: {
            img: '../../images/wallpaper_02.png',
            tit: '模板壁纸在线制作',
            text: '浏览图库下载心仪壁纸 · 上传素材在线合成专属壁纸 · 让你的桌面更加方便实用'
        },
        picObj: {
            tit: '壁纸图库',
            moreUrl: './list.html',
            list: [
                { tit: '浪花一朵朵', size: '1920 x 1080', url: '../../images/wallpaper/01.png' },
                { tit: '浪花一朵朵', size: '1920 x 1080', url: '../../images/wallpaper/02.png' },
                { tit: '浪花一朵朵', size: '1920 x 1080', url: '../../images/wallpaper/03.png' },
                { tit: '浪花一朵朵', size: '1920 x 1080', url: '../../images/wallpaper/04.png' },
                { tit: '浪花一朵朵', size: '1920 x 1080', url: '../../images/wallpaper/05.png' },
                { tit: '浪花一朵朵', size: '1920 x 1080', url: '../../images/wallpaper/06.png' }
            ]
        }
    },
    computed: {
        picText: function() {
            return '点击下载获取模板壁纸 · 点击<a href="' + this.picObj.moreUrl + '">更多</a>浏览全部壁纸';
        }
    },
    methods: {}
})







// drawAndShareImage();
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
    myImage.src = "../../images/pic_index_02.jpg"; //背景图片  你自己本地的图片或者在线图片
    myImage.crossOrigin = 'Anonymous';

    myImage.onload = function() {
        context.drawImage(myImage, 0, 0, 1920, 1080);
        var myImage2 = new Image();
        myImage2.src = "../../images/pic_index_01.png"; //你自己本地的图片或者在线图片
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
/**
 * @authors kk
 * @date    2019-03-16
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

// 图片展示列表组件
var PicItem = {
    props: ['item'],
    template: '<li><img src="../../images/wallpaper_04.png" :data-src="\'../../images/wallpaper/\' + item.img"/><h3>{{item.tit}}</h3><p>1920 x 1080</p><a class="btn" :href="\'../../images/wallpaper_1920x1080/\' + item.img"  download="">下载</a></li>'
}

// 主体
var vmContent = new Vue({
    el: '#content',
    components: {
        PicItem: PicItem
    },
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
                { img: '017.png', tit: '你和我的倾城时光' },
                { img: '030.png', tit: '夏至未至' },
                { img: '018.png', tit: '三生三世十里桃花' },
                { img: '029.png', tit: '无心法师' },
                { img: '025.png', tit: '微微一笑很倾城' },
                { img: '012.png', tit: '高能少年团' },
                { img: '014.png', tit: '美人为馅' },
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
/**
 * @authors kk
 * @date    2019-03-16
 */

var vmHeader = new Vue({
    el: '#header',
    data: {
        logoImg: 'pic_index_01.png',
        list: [
            { text: '可可炸飞机', url: '' },
            { text: '可可美记', url: '' },
            { text: '倒计时', url: '' },
            { text: '壁纸设计', url: './html/picture/index.html' }
        ]
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
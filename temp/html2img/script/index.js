/**
 * index.html
 * @authors shikkya
 * @date    2019-10-28
 * @version $Id$
 */

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.fillStyle = "#eee";
ctx.fillRect(0, 0, 1920, 1080);


var img1 = new Image();
img1.src = "./images/01.png";
img1.onload = function() {
    ctx.drawImage(img1, 0, 0, 1920, 1080);
}


var img2 = new Image();
img2.src = "./images/02.png";
img2.onload = function() {
    ctx.drawImage(img2, 0, 0, 1920, 1080);
}

function uploadImg(obj) {
    var file = obj.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(e) { //成功读取文件
        var img = document.getElementById("imgup");
        img.src = e.target.result; //或 img.src = this.result / e.target == this


        var img3 = new Image();
        img3.src = e.target.result;
        img3.onload = function() {
            ctx.drawImage(img3, 0, 0, 1920, 1080);
        }

        var img4 = new Image();
        img4.src = "./images/02.png";
        img4.onload = function() {
            ctx.drawImage(img4, 0, 0, 1920, 1080);
        }

        //实现点击下载图片功能
        // var xmTanDownload = document.getElementById("xmTanDownload");
        // xmTanDownload.setAttribute("href", e.target.result); //给a标签设置href
    };
}

function downPng() {
    downloadFile('s1111.png', c.toDataURL("image/png"));

}

// // 保存成png格式的图片
// function saveAsPNG(canvas) {
//     return canvas.toDataURL("image/png");
// }

// // 保存成jpg格式的图片
// function saveAsJPG(canvas) {
//     return canvas.toDataURL("image/jpeg");
// }

// // 保存成bmp格式的图片  目前浏览器支持性不好
// function saveAsBMP(canvas) {
//     return canvas.toDataURL("image/bmp");
// }

function base64Img2Blob(code) {
    var parts = code.split(';base64,');
    var contentType = parts[0].split(':')[1];
    var raw = window.atob(parts[1]);
    var rawLength = raw.length;
    var uInt8Array = new Uint8Array(rawLength);
    for (var i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i);
    }
    return new Blob([uInt8Array], { type: contentType });
}

function downloadFile(fileName, content) {
    var aLink = document.createElement('a');
    var blob = base64Img2Blob(content); //new Blob([content]);

    var evt = document.createEvent("HTMLEvents");
    evt.initEvent("click", false, false); //initEvent 不加后两个参数在FF下会报错
    aLink.download = fileName;
    aLink.href = URL.createObjectURL(blob);

    aLink.dispatchEvent(evt);
}
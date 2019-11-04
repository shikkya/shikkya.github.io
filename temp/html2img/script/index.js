/**
 * index.html
 * @authors shikkya
 * @date    2019-10-28
 * @version $Id$
 */

function toPdf() {
    html2canvas(document.getElementById('wrap'), {
        dpi: 200,
        background: "#fff",
        width: 192,
        height: 108,
        onrendered: function(canvas) {
            // downloadFile('ship.png', canvas.toDataURL("image/png"));





            var extra_canvas = document.createElement(canvas);

            extra_canvas.setAttribute('width',750);
            extra_canvas.setAttribute(' height',1050);

            var ctx = extra_canvas.getContext('2d');
            ctx.drawImage(canvas, 0, 0, 750, 1050);
            var dataURL = extra_canvas.toDataURL();

            window.open(dataURL);



        },
    });
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
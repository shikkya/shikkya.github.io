/**
 * index.html
 * @authors shikkya
 * @date    2019-08-15
 * @version $Id$
 */

window.onload = function() {
    var resize = document.getElementById("resize");
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    var box = document.getElementById("box");
    resize.onmousedown = function(e) {
        var startX = e.clientX;
        resize.left = resize.offsetLeft;
        document.onmousemove = function(e) {
            var endX = e.clientX;
            var moveLen = resize.left + (endX - startX);
            var maxT = box.clientWidth - resize.offsetWidth;
            var minWid = 150; // 最小保留宽度
            if (moveLen < minWid) {
                moveLen = minWid;
            }
            if (moveLen > maxT - minWid) {
                moveLen = maxT - minWid;
            }
            resize.style.left = moveLen;
            left.style.width = moveLen + "px";
            right.style.width = (box.clientWidth - moveLen - 5) + "px";
        }
        document.onmouseup = function(evt) {
            document.onmousemove = null;
            document.onmouseup = null;
            resize.releaseCapture && resize.releaseCapture();
        }
        resize.setCapture && resize.setCapture();
        return false;
    }
}
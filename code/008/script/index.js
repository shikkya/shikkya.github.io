/**
 * index.html
 * @authors shikkya
 * @date    2019-10-17
 * @version $Id$
 */

window.onload = function() {
    // 最新的原生获取元素方法querySelectorAll
    var oImg = document.querySelectorAll('img');
    var oWrap = document.querySelector('.wrap');
    var lastX, lastY, nowX, nowY, minusX, minusY, roY = 0, roX = -10;
    var timer = null;

    // 计算每一个图片的角度 总角度(360) / 数量(11) = 单位角度
    var length = oImg.length; // 获取img的数量 统称为长度
    var Deg = 360 / length; // 单位角度
    for (var i = 0; i < length; i++) {
        oImg[i].style.transform = 'rotateY(' + i * Deg + 'deg) translateZ(350px)';
        oImg[i].style.transition = 'transform 1s ' + (length - 1 - i) * 0.2 + 's'
    }
    mTop();
    window.onresize = mTop;

    function mTop() {
        // 获取浏览器窗口可视高度
        var wH = document.documentElement.clientHeight || document.body.clientHeight;
        oWrap.style.marginTop = (wH / 2) - oWrap.offsetHeight + 'px';
    }

    // 拖拽drag 按下onmousedown 移动onmousemove 抬起onmouseup
    document.onmousedown = function(event) {
        event = event || window.event;
        lastX = event.clientX; // 鼠标拖拽开始时的x坐标
        lastY = event.clientY; // 鼠标拖拽开始时的Y坐标
        clearInterval(timer);
        document.onmousemove = function(event) {
            event = event || window.event;
            nowX = event.clientX; // 鼠标移动时的x坐标
            nowY = event.clientY; // 鼠标移动时的y坐标
            minusX = nowX - lastX; // 获取鼠标移动距离
            minusY = nowY - lastY; // 获取鼠标移动距离
            roY += minusX * 0.2; // 通过移动量计算旋转角度
            roX -= minusY * 0.1; // 通过移动量计算旋转角度
            oWrap.style.transform = 'rotateX(' + roX + 'deg) rotateY(' + roY + 'deg)'
            lastX = nowX; // 更新初始位置保证 lastX 跟得上鼠标
            lastY = nowY; // 更新初始位置保证 lastY
        }
        document.onmouseup = function() {
            document.onmousemove = null;
            timer = setInterval(function() {
                // 给一个摩擦系数,每一次定时器触发都慢一点点
                minusX *= 0.9;
                minusY *= 0.9;
                roY += minusX * 0.2; // 通过移动量计算旋转角度
                roX -= minusY * 0.1; // 通过移动量计算旋转角度
                oWrap.style.transform = 'rotateX(' + roX + 'deg) rotateY(' + roY + 'deg)';
                if (Math.abs(minusX) < 0.1 && Math.abs(minusY) < 0.1) {
                    // 当移动向量过小的时候终止定时器停止惯性
                    clearInterval(timer);
                }
            }, 13);
        }
        return false;
    }
}
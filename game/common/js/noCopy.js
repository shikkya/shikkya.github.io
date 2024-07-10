/**
 * index.html
 * @authors shikkya
 * @date 2024-07-08
 */

// 右键
document.oncontextmenu = function () {
    return false;
}

// 按键
document.onkeydown = function (e) {
    // F12
    if (window.event && window.event.keyCode == 123) {
        e.keyCode = 0;
        e.returnValue = false;
        return false;
    }

    // Ctrl + Shift + I
    if ((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)) {
        return false;
    }

    // Ctrl + U
    if ((e.ctrlKey) && (e.keyCode == 85)) {
        return false;
    }

    // Ctrl + S
    if ((e.ctrlKey) && (e.keyCode == 83)) {
        return false;
    }
}

var isMobile = navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
)
if (!isMobile) {
    // 窗口尺寸
    // document.write(window.outerWidth - window.innerWidth)
    // document.write(window.outerHeight - window.innerHeight)
    if (window.outerWidth - window.innerWidth > 200 || window.outerHeight - window.innerHeight > 300) {
        window.close();
        window.location.replace('about:blank');
    }

    // 窗口尺寸更改
    var winWid = window.innerWidth;
    var winHei = window.innerHeight;
    window.onresize = function () {
        if (window.innerWidth != winWid || window.innerHeight != winHei) {
            window.close();
            window.location.replace('about:blank');
        }
    }
}




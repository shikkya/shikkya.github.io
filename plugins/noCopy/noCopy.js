/**
 * js禁止复制 全面支持 IE 6-11,Chrome,Opera,Firefox,Safari等各种主流浏览器
 * 注意JS文件默认是utf-8编码的，如果你的网页是不是utf-8编码，请注意转码
 * @authors shikkya
 * @date    2019-10-26
 * @version $Id$
 */

// 用于Mozilla和Webkit内核浏览器
if (navigator.userAgent.indexOf('MSIE') < 0) {
    var css = document.createElement('style');
    css.type = 'text/css';
    css.innerHTML = 'body{-moz-user-select:none;-webkit-user-select:none;}';
    document.getElementsByTagName('head')[0].appendChild(css);
}
// 屏蔽事件：松开键盘/开始选择/开始拖动/点击鼠标右键/复制/按下鼠标键
document.onkeyup = document.onselectstart = document.ondragstart = document.oncontextmenu = document.oncopy = document.onmousedown = function() {
    return preventDefault(window.event || arguments[0]);
};
document.onkeydown = function() {
    var e = window.event || arguments[0];
    if (e.keyCode == 123) { // F12
        return false;
    } else if ((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)) { // Ctrl+Shift+I
        return false;
    } else if ((e.ctrlKey) && (e.keyCode == 85)) { // Ctrl+U
        return false;
    } else if ((e.ctrlKey) && (e.keyCode == 83)) { // Ctrl+S
        return false;
    }
    var c = e.keyCode || e.which;
    if (c == 16 || c == 17 || c == 18 || c == 112 || c == 113 || c == 114 || c == 115 || c == 116 || c == 117 || c == 118 || c == 119 || c == 120 || c == 121 || c == 122 || c == 123 || c == 87 || c == 82 || c == 83 || c == 72 || c == 74 || c == 75 || c == 78) {
        return preventDefault(e); //屏蔽shift/ctrl/alt键
    }
};
// 阻止事件冒泡并且阻止默认事件
function preventDefault(e) {
    try {
        e.stopPropagation();
        e.preventDefault();
    } catch (x) {
        e.cancelBubble = true;
        e.returnValue = false;
    }
    return false;
}
/**
 * index.html
 * @authors shikkya
 * @date    2020-08-28
 * @version $Id$
 */
$.fn.extend({
    // 在指定元素光标处添加文字
    insertContent: function(myValue, t) {
        var $t = $(this)[0];
        if (document.selection) { // ie  
            this.focus();
            var sel = document.selection.createRange();
            sel.text = myValue;
            this.focus();
            sel.moveStart('character', -l);
            var wee = sel.text.length;
            if (arguments.length == 2) {
                var l = $t.value.length;
                sel.moveEnd("character", wee + t);
                t <= 0 ? sel.moveStart("character", wee - 2 * t - myValue.length) : sel.moveStart("character", wee - t - myValue.length);
                sel.select();
            }
        } else if ($t.selectionStart || $t.selectionStart == '0') {
            var startPos = $t.selectionStart;
            var endPos = $t.selectionEnd;
            var scrollTop = $t.scrollTop;
            $t.value = $t.value.substring(0, startPos) + myValue + $t.value.substring(endPos, $t.value.length);
            this.focus();
            $t.selectionStart = startPos + myValue.length;
            $t.selectionEnd = startPos + myValue.length;
            $t.scrollTop = scrollTop;
            if (arguments.length == 2) {
                $t.setSelectionRange(startPos - t, $t.selectionEnd + t);
                this.focus();
            }
        } else {
            this.value += myValue;
            this.focus();
        }
    }
})

$(document).keydown(function(e) {
    if (document.activeElement.id == 'txarea') {
        var keyCode = e.keyCode || e.which || e.charCode;
        var ctrlKey = e.ctrlKey;
        // var shiftKey = e.shiftKey;
        if (ctrlKey && keyCode == 86) { // Ctrl + V
            paste();
            e.preventDefault(); // 阻止默认粘贴事件
        }
    }
});

// 复制
function copy() {
    window.clipboardData.setData("Text", $('#txarea').val());
}

// 粘贴
function paste() {
    var clipboard = window.clipboardData.getData('Text');
    clipboard == null ? alert('no data') : $('#txarea').insertContent(clipboard);
}
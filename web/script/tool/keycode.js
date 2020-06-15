/**
 * tool - keycode
 * @authors shikkya
 * @date    2019-10-31
 * @version $Id$
 */

// keycode列表
var keyCodeArr = new Array();
for (var i = 0; i < 195; i++) {
    keyCodeArr[i] = '';
}

keyCodeArr[27] = 'Esc';

// F1:112 - F12:123
for (var i = 112; i < 124; i++) {
    keyCodeArr[i] = 'F' + (i - 111);
}

// A:65 - Z:90
for (var i = 65; i < 91; i++) {
    keyCodeArr[i] = String.fromCharCode(i);
}

// 0:48 - 9:58
for (var i = 48; i < 58; i++) {
    keyCodeArr[i] = (i - 48) + '';
}

keyCodeArr[192] = '~ `';
keyCodeArr[189] = '_ -';
keyCodeArr[187] = '+ =';

keyCodeArr[219] = '[ {';
keyCodeArr[221] = '] }';
keyCodeArr[186] = ': ;';
keyCodeArr[222] = '" \'';
keyCodeArr[220] = '| \\';

keyCodeArr[188] = '< ,';
keyCodeArr[190] = '> .';
keyCodeArr[191] = '? /';

keyCodeArr[13] = 'Enter';
keyCodeArr[32] = 'Space';
keyCodeArr[8] = 'BackSpace';
keyCodeArr[9] = 'Tab';
keyCodeArr[20] = 'Caps Lock';
keyCodeArr[16] = 'Shift';
keyCodeArr[17] = 'Ctrl';
keyCodeArr[18] = 'Alt';

// 小键盘 0:96 - 9:105
for (var i = 96; i < 106; i++) {
    keyCodeArr[i] = (i - 96) + '';
}

keyCodeArr[144] = 'NumLock';
keyCodeArr[111] = '/';
keyCodeArr[106] = '*';
keyCodeArr[109] = '-';
keyCodeArr[107] = '+';
keyCodeArr[110] = '.';

keyCodeArr[145] = 'Scroll Lock';

keyCodeArr[45] = 'Insert';
keyCodeArr[46] = 'Delete';
keyCodeArr[36] = 'Home';
keyCodeArr[35] = 'End';
keyCodeArr[33] = 'Page Up';
keyCodeArr[34] = 'Page Down';

keyCodeArr[37] = '左';
keyCodeArr[38] = '上';
keyCodeArr[39] = '右';
keyCodeArr[40] = '下';

// 小于等于1000的正整数
var reg = /^(?:1|[1-9][0-9]?|[1-9][0-9][0-9]?|1000)$/;

var vm = new Vue({
    el: '#app',
    data: {
        tit: 'KeyCode查询器',
        keyCodeArr: keyCodeArr,
        errorClass: false,
        inputVal: '',
        result: '?',
        resultKeyDown: '?'
    },
    watch: {
        inputVal: function(val) {
            if (val != '' && !reg.test(val)) {
                this.errorClass = true;
            } else {
                this.errorClass = false;
            }

            if (val == '' || !reg.test(val)) {
                this.result = '?';
            } else {
                var n = parseInt(val);
                this.result = keyCodeArr[n] == '' ? '?' : keyCodeArr[n];
            }
        }
    },
    mounted: function() {
        // 显示按键对应的键码值
        document.onkeydown = function() {
            var oEvent = window.event;
            var str = oEvent.keyCode;
            if (keyCodeArr[oEvent.keyCode] != '') {
                str = keyCodeArr[oEvent.keyCode] + '&nbsp;&nbsp;&nbsp;&nbsp;' + str;
            }
            vm.resultKeyDown = str;
        }
    },
    methods: {
        // 判断是否标记错误提示
        isErrorClass: function() {
            if (this.inputVal != '' && !reg.test(this.inputVal) && this.inputVal < 196) {
                this.errorClass = true;
                return;
            }
            this.errorClass = false;
        }
    }
})
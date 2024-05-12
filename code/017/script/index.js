/**
 * index.html
 * @authors shikkya
 * @date    2020-12-16
 * @version $Id$
 */

$(function () {
    var self = this;

    this.recordStr = ''; // 计算等式
    this.curHandle = 0; // 当前操作

    this.createEveter = function () {
        // 点击按钮
        $('.cal_btn').on('click', function () {
            self.handleBtn($(this).attr('data-v'));
            self.curHandle = $(this).attr('data-v');
        })

        // 监听按键
        $('body').bind('keydown', function (e) {
            e = e ? e : window.event;
            // 0-9
            if (e.keyCode >= 48 && e.keyCode <= 57) {
                $('.cal_btn[data-v="' + (e.keyCode - 48) + '"]').click();
            }
            if (e.keyCode >= 96 && e.keyCode <= 105) {
                $('.cal_btn[data-v="' + (e.keyCode - 96) + '"]').click();
            }
            // .
            if (e.keyCode == 110) {
                $('.cal_btn[data-v="."]').click();
            }
            // +
            if (e.keyCode == 107) {
                $('.cal_btn[data-v="+"]').click();
            }
            // -
            if (e.keyCode == 109) {
                $('.cal_btn[data-v="-"]').click();
            }
            // *
            if (e.keyCode == 106) {
                $('.cal_btn[data-v="×"]').click();
            }
            // /
            if (e.keyCode == 111) {
                $('.cal_btn[data-v="÷"]').click();
            }
            // =
            if (e.keyCode == 13) {
                $('.cal_btn[data-v="="]').click();
            }
            // DEL
            // if (e.keyCode == 8) {
            //     $('.cal_btn[data-v="DEL"]').click();
            // }
            e.stopPropagation();
        });
    }

    // 执行按钮功能 共24个
    // % ( ) sup CE C DEL + - × ÷ = 0-9 ± .
    this.handleBtn = function (key) {
        // 数字 0-9
        if (parseInt(key) == 0 || parseInt(key)) {
            var temp = $('#inputVal').html();
            if (temp.length >= 16 || temp.indexOf('%') > -1 || temp.indexOf('<sup>-1</sup>') > -1) {
                return false;
            }
            if (temp == '0' || temp == 'ERROR') {
                $('#inputVal').html(key);
                return false;
            }
            $('#inputVal').html(temp + key);
            return false;
        }

        // 小数点 .
        if (key == '.') {
            var temp = $('#inputVal').html();
            if (temp.length >= 16 || temp.indexOf('.') > -1 || temp.indexOf('%') > -1 || temp.indexOf('<sup>-1</sup>') > -1) {
                return false;
            }
            if (temp == 'ERROR') {
                $('#inputVal').html('0.');
                return false;
            }
            $('#inputVal').html(temp + '.');
            return false;
        }

        // 正负 ±
        if (key == '±') {
            var temp = $('#inputVal').html();
            if (temp == '0') {
                return false;
            }
            if (temp == 'ERROR') {
                $('#inputVal').html('0');
                return false;
            }
            if (temp[0] == '-') {
                temp = temp.substring(1, temp.length);
                $('#inputVal').html(temp);
                return false;
            }
            $('#inputVal').html('-' + temp);
            return false;
        }

        // 负一次方 sup
        if (key == 'sup') {
            var temp = $('#inputVal').html();
            if (temp == '0') {
                return false;
            }
            if (temp == 'ERROR') {
                $('#inputVal').html('0');
                return false;
            }
            if (temp.indexOf('<sup>-1</sup>') > -1) {
                temp = temp.split('<sup>-1</sup>')[0] + temp.split('<sup>-1</sup>')[1];
                $('#inputVal').html(temp);
                return false;
            }
            $('#inputVal').html(temp + '<sup>-1</sup>');
            return false;
        }

        // 百分比 %
        if (key == '%') {
            var temp = $('#inputVal').html();
            if (temp == '0' || temp[temp.length - 1] == '.') {
                return false;
            }
            if (temp == 'ERROR') {
                $('#inputVal').html('0');
                return false;
            }
            if (temp.indexOf('%') > -1) {
                temp = temp.split('%')[0] + temp.split('%')[1];
                $('#inputVal').html(temp);
                return false;
            }
            $('#inputVal').html(temp + '%');
            return false;
        }

        // 复位 C
        if (key == 'C') {
            self.recordStr = '';
            self.curHandle = '';
            $('#recordVal').html('');
            $('#inputVal').html('0');
            return false;
        }

        // 清零 CE
        if (key == 'CE') {
            $('#inputVal').html('0');
            return false;
        }

        // 删除 DEL
        if (key == 'DEL') {
            var temp = $('#inputVal').html();
            if (temp.length == 1 || temp == 'ERROR') {
                $('#inputVal').html('0');
                return false;
            }
            if (temp.indexOf('<sup>-1</sup>') > -1 && temp.split('<sup>-1</sup>')[1] == '') {
                temp = temp.substring(0, temp.length - '<sup>-1</sup>'.length);
                $('#inputVal').html(temp);
                return false;
            }
            temp = temp.substring(0, temp.length - 1);
            if (temp == '-') {
                temp = '0';
            }
            $('#inputVal').html(temp);
            return false;
        }

        // 左括号 (
        if (key == '(') {
            var temp = $('#recordVal').html();
            if (temp[temp.length - 1] == '(' || temp[temp.length - 1] == ')') {
                return false;
            }
            if ($('#inputVal').html() == 'ERROR') {
                $('#inputVal').html('0');
            }
            $('#recordVal').html(temp + '(');
            self.recordStr += '(';
            return false;
        }

        // 右括号 )
        if (key == ')') {
            if ($('#inputVal').html() == 'ERROR') {
                $('#inputVal').html('0');
                return false;
            }
            var temp = $('#recordVal').html();
            if (temp[temp.length - 1] == ')') {
                return false;
            }
            var tempArr = self.formatInputVal();
            $('#recordVal').html(temp + tempArr[0] + ')');
            self.recordStr += tempArr[1] + ')';
            $('#inputVal').html('0');
            return false;
        }

        // 运算符号 + - × ÷
        if (key == '+' || key == '-' || key == '×' || key == '÷') {
            if ($('#inputVal').html() == 'ERROR') {
                $('#inputVal').html('0');
                return false;
            }
            var temp = $('#recordVal').html();
            if (self.curHandle == ')') {
                $('#recordVal').html(temp + key);
                self.recordStr += key;
                return false;
            }
            if (self.curHandle == '+' || self.curHandle == '-' || self.curHandle == '×' || self.curHandle == '÷') {
                self.recordStr = self.recordStr.substring(0, self.recordStr.length - self.curHandle.length) + key;
                $('#recordVal').html(temp.substring(0, temp.length - self.curHandle.length) + key);
                return false;
            }
            // 其他 0-9 . ± sup CE DEL ( %
            var tempArr = self.formatInputVal();
            $('#recordVal').html(temp + tempArr[0] + key);
            self.recordStr += tempArr[1] + key;
            $('#inputVal').html('0');
            return false;
        }

        // 等号 =
        if (key == '=') {
            if ($('#inputVal').html() == 'ERROR') {
                $('#inputVal').html('0');
                return false;
            }
            var temp = $('#recordVal').html();
            if (temp == '') {
                self.recordStr = self.formatInputVal()[1];
            }
            else if (temp[temp.length - 1] == '+' || temp[temp.length - 1] == '-' || temp[temp.length - 1] == '×' || temp[temp.length - 1] == '÷') {
                self.recordStr += self.formatInputVal()[1];
            }
            $('#inputVal').html(self.calculate());
            self.recordStr = '';
            self.curHandle = '';
            $('#recordVal').html('');
        }
    }

    // 格式化输入区 [显示,计算]
    this.formatInputVal = function () {
        var arr = [];
        var str = $('#inputVal').html();

        if (str[str.length - 1] == '.') {
            str = str.substring(0, str.length - 1);
        }

        if (str[0] == '-') {
            arr[0] = '(' + str + ')';
            str = str.substring(1, str.length);
        }
        else {
            arr[0] = str;
        }

        var temp_1 = str.indexOf('<sup>-1</sup>');
        var temp_2 = str.indexOf('%');
        if (temp_1 > -1 && temp_2 == -1) {
            str = '(1/' + str.split('<sup>-1</sup>')[0] + ')' + str.split('<sup>-1</sup>')[1];
        }
        else if (temp_1 == -1 && temp_2 > -1) {
            str = '(' + str.split('%')[0] + '/100)' + str.split('%')[1];
        }
        else if (temp_1 > temp_2 && temp_2 > -1) {
            str = '(' + str.split('%')[0] + '/100)' + str.split('%')[1];
            str = '(1/' + str.split('<sup>-1</sup>')[0] + ')' + str.split('<sup>-1</sup>')[1];
        }
        else if (temp_2 > temp_1 && temp_1 > -1) {
            str = '(1/' + str.split('<sup>-1</sup>')[0] + ')' + str.split('<sup>-1</sup>')[1];
            str = '(' + str.split('%')[0] + '/100)' + str.split('%')[1];
        }

        if (arr[0].indexOf('(') > -1) {
            str = '(-' + str + ')';
        }

        arr[1] = str;

        return arr;
    }

    // 计算
    this.calculate = function () {
        var calcStr = self.recordStr;
        calcStr = calcStr.replace(/×/g, '*');
        calcStr = calcStr.replace(/÷/g, '/');

        // console.log(calcStr);

        try {
            return self.formatResult(eval(calcStr) + '');
        }
        catch (err) {
            return 'ERROR';
        }
    }

    // 格式化结果
    this.formatResult = function (val) {
        val += '';
        var hasComma = val.match(/\./),
            tmp,
            valAbs = Math.abs(+val);
        resBuffer = val;
        if (valAbs >= 1e+16) {
            val = (+val).toExponential(18) + '';
        }
        if (valAbs !== 0) {
            val = (+val).toPrecision(14);
        }
        tmp = (val + '').split('.');
        if (tmp[1]) {
            tmp[2] = tmp[1].split('e');
            if (tmp[2][1]) {
                tmp[1] = tmp[2][0];
            }
            tmp[1] = (((+('1.' + tmp[1])).toPrecision(tmp[2][1] ? 12 : 14)) + '');
            if (tmp[1] >= 2) {
                tmp[0] = (+tmp[0] + 1) + '';
            }
            tmp[1] = tmp[1].substr(2).replace(/0+$/, '');
        }
        tmp = tmp[0] + ((tmp[1] || hasComma) ? '.' + tmp[1] : '').
            replace('.undefined', '').
            replace(/\.$/, '') + (tmp[2] && tmp[2][1] ? 'e' + tmp[2][1] : '');
        return tmp;
    }

    this.init = function () {
        self.createEveter();
    }

    self.init();
})


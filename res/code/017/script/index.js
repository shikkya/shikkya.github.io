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
        $('body').bind('keypress', function (e) {
            e = e ? e : window.event;
            // 0-9
            if (e.keyCode >= 48 && e.keyCode <= 57) {
                $('.cal_btn[data-v="' + (e.keyCode - 48) + '"]').click();
            }
            // .
            if (e.keyCode == 46) {
                $('.cal_btn[data-v="."]').click();
            }
            // +
            if (e.keyCode == 43) {
                $('.cal_btn[data-v="+"]').click();
            }
            // -
            if (e.keyCode == 45) {
                $('.cal_btn[data-v="-"]').click();
            }
            // *
            if (e.keyCode == 42) {
                $('.cal_btn[data-v="*"]').click();
            }
            // /
            if (e.keyCode == 47) {
                $('.cal_btn[data-v="/"]').click();
            }
            // =
            if (e.keyCode == 13) {
                $('.cal_btn[data-v="="]').click();
            }
        });

    }

    // 执行按钮功能 共24个
    // % ( ) /x CE C DEL + - * / = 0-9 ± .
    this.handleBtn = function (key) {
        // 数字 0-9
        if (parseInt(key)) {
            var temp = $('#inputVal').html();
            if (temp.length >= 15) {
                return false;
            }
            if (temp == '0') {
                $('#inputVal').html(key);
                return false;
            }
            $('#inputVal').html(temp + key);
            return false;
        }

        // 小数点 .
        if (key == '.') {
            var temp = $('#inputVal').html();
            if (temp.length >= 15 || temp[temp.length - 1] == '.') {
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
            if (temp[0] == '-') {
                temp = temp.substring(1, temp.length);
                $('#inputVal').html(temp);
                return false;
            }
            $('#inputVal').html('-' + temp);
            return false;
        }

        // 负一次方 /x
        if (key == '/x') {
            var temp = $('#inputVal').html();
            if (temp == '0') {
                return false;
            }
            if (temp.indexOf('<sup>-1</sup>') > -1) {
                temp = temp.substring(0, temp.length - '<sup>-1</sup>'.length);
                $('#inputVal').html(temp);
                return false;
            }
            $('#inputVal').html(temp + '<sup>-1</sup>');
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
            if (temp.length == 1) {
                $('#inputVal').html('0');
                return false;
            }
            if (temp.indexOf('<sup>-1</sup>') > -1) {
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
            $('#recordVal').html(temp + '(');
            self.recordStr += '(';
            return false;
        }

        // 右括号 )
        if (key == ')') {
            var temp = $('#recordVal').html();
            if (temp[temp.length - 1] == ')') {
                return false;
            }
            var tempArr = self.formatInputVal($('#inputVal').html());
            $('#recordVal').html(temp + tempArr[0] + ')');
            self.recordStr += tempArr[1] + ')';
            $('#inputVal').html('0');
            return false;
        }

        // 运算符号 + - * / %
        if (key == '+' || key == '-' || key == '*' || key == '/' || key == '%') {
            if (key == '*') {
                key = '×';
            }
            else if (key == '/') {
                key = '÷';
            }
            var temp = $('#recordVal').html();
            if (self.curHandle == ')') {
                $('#recordVal').html(temp + key);
                self.recordStr += key;
                return false;
            }
            if (self.curHandle == '+' || self.curHandle == '-' || self.curHandle == '*' || self.curHandle == '/' || self.curHandle == '%') {
                self.recordStr = self.recordStr.substring(0, self.recordStr.length - self.curHandle.length) + key;
                temp = temp.substring(0, temp.length - self.curHandle.length) + key;
                $('#recordVal').html(temp);
                return false;
            }
            // 其他 0-9 . ± /x CE DEL (
            var tempArr = self.formatInputVal($('#inputVal').html());
            $('#recordVal').html(temp + tempArr[0] + key);
            self.recordStr += tempArr[1] + key;
            $('#inputVal').html('0');
            return false;
        }

        // 等号 =
        if (key == '=') {
            $('#inputVal').html(self.calculate());
            self.recordStr = '';
            self.curHandle = '';
            $('#recordVal').html('');
            return false;
        }
    }

    // 格式化输入区 [显示,计算]
    this.formatInputVal = function (str) {
        var arr = [];
        if (str[str.length - 1] == '.') {
            str = str.substring(0, str.length - 1);
        }
        if (str[0] == '-') {
            str = '(' + str + ')';
        }
        arr[0] = str;
        if (str.indexOf('<sup>-1</sup>') > -1) {
            if (str.length > 1 && str[1] == '-') {
                str = '(-1/' + str.split('<sup>-1</sup>')[0].split('-')[1] + ')';
            } else {
                str = '(1/' + str.split('<sup>-1</sup>')[0] + ')';
            }
        }
        arr[1] = str;
        return arr;
    }

    // 计算
    this.calculate = function (inputVal) {
        var calcStr = self.recordStr;
        var temp = $('#inputVal').html();
        if (temp != '0') {
            if (temp[temp.length - 1] == '.') {
                temp = temp.substring(0, temp.length - 1);
            }
            if (temp[0] == '-') {
                temp = '(' + temp + ')';
            }
            if (temp.indexOf('<sup>-1</sup>') > -1) {
                if (temp.split('<sup>-1</sup>')[0].indexOf('-') > -1) {
                    temp = '(-1/' + temp.split('<sup>-1</sup>')[0].split('-')[1] + ')';
                }
                else {
                    temp = '1/' + temp.split('<sup>-1</sup>')[0];
                }
            }
            calcStr = self.recordStr + temp;
        }

        calcStr = calcStr.replace('×', '*', 'g');
        calcStr = calcStr.replace('÷', '/', 'g');
        console.log(calcStr);

        try {
            return eval(calcStr);
        }
        catch {
            return 'ERROR';
        }
    }

    this.init = function () {
        self.createEveter();
    }

    self.init();
})
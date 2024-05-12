/**
 * index.html
 * @authors shikkya
 * @date    2021-02-22
 * @version $Id$
 */

$(function () {
    var self = this;

    this.createEveter = function () {
        // 金额实时输入
        $('#moneyVal').on('input propertychange', function () {
            $('#moneyFormat').html(self.arabicToChinese($(this).val()));
        });
    }

    // 金额大写中文转换
    this.arabicToChinese = function (numStr) {

        numStr = numStr.replace(/ /g, '');
        numStr = numStr.replace(/,/g, '');
        numStr = numStr.replace(/￥/g, '');

        if (!/^\d+(\.\d+)?$/.test(numStr)) {
            return '<font>请检查小写金额是否正确</font>';
        }

        var numStrArr = String(numStr).split('.');
        if (numStrArr[0].length > 12) {
            return '<font>位数过大，无法转换中文</font>';
        }

        var numberArr = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
        var intArr_1 = ['', '拾', '佰', '仟'];
        var intArr_2 = ['元', '万', '亿'];
        var floatArr = ['角', '分', '厘', '毫'];
        var resultStr = '';

        // 小数点前转换
        for (var i = 0; i < numStrArr[0].length; i++) {
            resultStr += numberArr[numStrArr[0].charAt(i)];
            if ((numStrArr[0].length - i - 1) % 4 == 0) {
                resultStr += intArr_2[(numStrArr[0].length - i - 1) / 4];
            }
            else {
                resultStr += numStrArr[0].charAt(i) == '0' ? '' : intArr_1[(numStrArr[0].length - i - 1) % 4];
            }
        }
        // 格式化
        while (resultStr.search('零零') != -1) {
            resultStr = resultStr.replace(/零零/g, '零');
        }
        for (var i = 0; i < intArr_2.length; i++) {
            resultStr = resultStr.replace('零' + intArr_2[i], intArr_2[i]);
        }
        resultStr = resultStr.replace('亿万', '亿');

        // 小数点后转换
        if (numStr.indexOf('.') > -1) {
            // 截取小数位
            if (numStrArr[1].length > floatArr.length) {
                numStrArr[1] = numStrArr[1].substr(0, floatArr.length);
            }
            // 转换
            for (var i = 0; i < numStrArr[1].length; i++) {
                resultStr += numberArr[numStrArr[1].charAt(i)] + floatArr[i];
            }
            // 格式化
            for (var i = 0; i < floatArr.length; i++) {
                resultStr = resultStr.replace('零' + floatArr[i], '');
            }
        }

        if (resultStr.charAt(0) == '元') {
            resultStr = '零' + resultStr;
        }
        if (resultStr.charAt(resultStr.length - 1) == '元') {
            resultStr += '整';
        }

        return resultStr;
    }

    this.init = function () {
        self.createEveter();
    }

    self.init();
})


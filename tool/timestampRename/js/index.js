/**
 * index.html
 * @authors shikkya
 * @date 2023-08-08
 */

$(function () {

    var self = this;

    this.createEvent = function () {

        // 生成文件名
        $('#timestampStr').off('keyup').on('keyup', function (e) {
            e = e ? e : window.event;
            if (e.keyCode == 13) {
                self.reNameHandle();
            }
        })

        // 生成文件名
        $('#reNameBtn').off('click').on('click', function () {
            self.reNameHandle();
        })

        // 复制
        $('.copy_btn').off('click').on('click', function () {
            var str = $(this).siblings('input').val().trim();
            if (str == '') {
                // showMsg('请生成文件名');
                return false;
            }

            self.copyText(str);
            showMsg('复制成功');
        })
    }

    // 生成文件名
    this.reNameHandle = function () {
        var timestampStr = $('#timestampStr').val().trim();
        if (timestampStr == '') {
            showMsg('请输入时间戳');
            return false;
        }
        if ((timestampStr + '').length != 13) {
            showMsg('请输入正确的时间戳');
            return false;
        }
        var resultStr = self.timestampToDate(timestampStr);
        var dateStr = '_' +
            resultStr.split(' ')[0].split('/')[0] +
            self.formatNum(resultStr.split(' ')[0].split('/')[1]) +
            self.formatNum(resultStr.split(' ')[0].split('/')[2]) +
            '_' +
            resultStr.split(' ')[1].split(':')[0] +
            resultStr.split(' ')[1].split(':')[1] +
            resultStr.split(' ')[1].split(':')[2];
        $('#imgName').val('IMG' + dateStr);
        $('#vidName').val('VID' + dateStr);
        $('#picName').val('Screenshot' + dateStr);
    }

    // 时间戳转换日期 '2019/8/7 07:22:56'
    this.timestampToDate = function (timestamp) {
        return new Date(Number(timestamp)).toLocaleString();

    }

    // 格式化数字
    this.formatNum = function (num) {
        if (parseInt(num) > 9) {
            return '' + num;
        }
        return '0' + num;
    }

    // 复制文本
    this.copyText = function (text) {
        var t = document.createElement('textarea');
        t.value = text;
        document.getElementsByTagName("body")[0].appendChild(t);
        t.select();
        document.execCommand('Copy');
        t.remove();
    }

    this.init = function () {
        self.createEvent();
    }

    self.init();
})
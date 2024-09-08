/**
 * index.html
 * @authors shikkya
 * @date 2023-08-08
 */

$(function () {

    var self = this;

    // 星期几
    var weekArr = ['日', '一', '二', '三', '四', '五', '六'];

    this.createEvent = function () {

        // 计算预产期
        $('#calcBirthDateBtn').off('click').on('click', function () {
            if ($('#lastDate').val().trim() == '') {
                showMsg('请选择末次月经日期');
                return false;
            }
            self.calcBirthDate();
        })

        // 计算产假结束期
        $('#calcEndDateBtn').off('click').on('click', function () {
            if ($('#startDate').val().trim() == '') {
                showMsg('请选择预产期');
                return false;
            }
            self.calcEndDate();
        })
    }

    // 计算预产期
    this.calcBirthDate = function () {
        var lastDate = $('#lastDate').val().trim();
        var produceDay = parseInt($('#produceDay').text().trim());

        var dateObj = new Date(lastDate);
        dateObj = new Date(dateObj.setDate(dateObj.getDate() + produceDay));

        $('#birthDate').text(
            dateObj.getFullYear() + '年' + self.formatNum(dateObj.getMonth() + 1) + '月' + self.formatNum(dateObj.getDate()) + '日 星期' + weekArr[dateObj.getDay()]
        );

        $('#startDate').val(
            dateObj.getFullYear() + '-' + self.formatNum(dateObj.getMonth() + 1) + '-' + self.formatNum(dateObj.getDate())
        );

        self.calcEndDate();
    }

    // 计算产假结束期
    this.calcEndDate = function () {
        var startDate = $('#startDate').val().trim();
        var restDay = parseInt($('#restDay').text().trim());

        var dateObj = new Date(startDate);
        dateObj = new Date(dateObj.setDate(dateObj.getDate() + restDay));

        $('#endDate').text(
            dateObj.getFullYear() + '年' + self.formatNum(dateObj.getMonth() + 1) + '月' + self.formatNum(dateObj.getDate()) + '日 星期' + weekArr[dateObj.getDay()]
        );
    }

    // 初始化日历插件
    this.initDcalendar = function () {
        $('#lastDate').dcalendarpicker({
            format: 'yyyy-mm-dd',
            language: 'ch'
        });
        $('#startDate').dcalendarpicker({
            format: 'yyyy-mm-dd',
            language: 'ch'
        });
        $('#lastDate').val(new Date().getFullYear() + '-' + self.formatNum(new Date().getMonth() + 1) + '-' + self.formatNum(new Date().getDate()));
    }

    // 格式化数字
    this.formatNum = function (num) {
        if (parseInt(num) > 9) {
            return '' + num;
        }
        return '0' + num;
    }

    this.init = function () {
        self.createEvent();
        self.initDcalendar();
        self.calcBirthDate();
    }

    self.init();
})
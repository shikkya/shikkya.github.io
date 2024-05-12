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
        $('#searchBirthDateBtn').on('click', function () {
            if ($('#startDate').val().trim() == '') {
                showMsg('请选择末次月经日期');
                return false;
            }
            self.searchBirthDate();
        })

        // 计算产假结束期
        $('#searchWorkDateBtn').on('click', function () {
            if ($('#birthDate').val().trim() == '') {
                showMsg('请选择预产期');
                return false;
            }
            self.searchWorkDate();
        })
    }

    // 计算预产期
    this.searchBirthDate = function () {
        var startDate = $('#startDate').val().trim();
        var produceDay = parseInt($('#produceDay').text().trim());

        var dateObj = new Date(startDate);
        dateObj = new Date(dateObj.setDate(dateObj.getDate() + produceDay));

        $('#birthDate').val(
            dateObj.getFullYear() + '-' + self.formatNum(dateObj.getMonth() + 1) + '-' + self.formatNum(dateObj.getDate())
        );

        self.searchWorkDate();
    }

    // 计算产假结束期
    this.searchWorkDate = function () {
        var birthDate = $('#birthDate').val().trim();
        var restDay = parseInt($('#restDay').text().trim());

        var dateObj = new Date(birthDate);
        dateObj = new Date(dateObj.setDate(dateObj.getDate() + restDay));

        $('#workDate').text(
            dateObj.getFullYear() + '年' + self.formatNum(dateObj.getMonth() + 1) + '月' + self.formatNum(dateObj.getDate()) + '日 星期' + weekArr[dateObj.getDay()]
        );
    }

    // 初始化日历插件
    this.initDcalendar = function () {
        $('#startDate').dcalendarpicker({
            format: 'yyyy-mm-dd',
            language: 'ch'
        });
        $('#birthDate').dcalendarpicker({
            format: 'yyyy-mm-dd',
            language: 'ch'
        });
        $('#startDate').val(new Date().getFullYear() + '-' + self.formatNum(new Date().getMonth() + 1) + '-' + self.formatNum(new Date().getDate()));
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
        self.searchBirthDate();
    }

    self.init();
})
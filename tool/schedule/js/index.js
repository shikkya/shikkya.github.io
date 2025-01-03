/**
 * index.html
 * @authors shikkya
 * @date 2023-06-04
 */

$(function () {

    var self = this;

    // 星期几
    var weekArr = ['一', '二', '三', '四', '五', '六', '日'];

    // 月天数
    var monthNumArr = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // 周期规律
    var planArr = [];
    // 起始日期
    var planStart = '';
    // 生成周数
    var weeklySize = 0;

    // 本地缓存 版本号
    var version = '20230708';

    this.createEvent = function () {

        // filter 周末双休
        $('#isRest').off('click').on('click', function () {
            $(this).toggleClass('active');
        })

        // filter 开始排班
        $('#subBtn').off('click').on('click', function () {

            try {
                // 设置有误
                if (!self.checkFilter()) {
                    $('#tabBox').hide();
                    $('.content_box').removeClass('active');
                }
                // 设置正确
                else {

                    // 周历
                    self.createWeeklyHtml();

                    // 月历
                    $('.handle_box[data-t="month"] span').eq(0).html(new Date().getFullYear());
                    $('.handle_box[data-t="month"] span').eq(1).html(self.formatNum(new Date().getMonth() + 1));
                    self.createCalendarHtml(new Date().getFullYear(), new Date().getMonth() + 1);

                    // 本地缓存 保存设置
                    self.saveLocalData();

                    $('#tabBox').show();
                    $('#tabBox li.active').click();
                    showMsg('排班成功');
                }
            } catch (error) {
                alert('生成失败，请检查设置项格式是否正确，如有疑问请联系开发者~');
            }
        })

        // tab 切换
        $('#tabBox').off('click', 'li').on('click', 'li', function () {

            var type = $(this).attr('data-t');

            $(this).siblings().removeClass('active');
            $(this).addClass('active');

            $('.content_box').removeClass('active');
            $('.content_box[data-t="' + type + '"]').addClass('active');
        })

        // month handle 增减年月
        $('.handle_box').off('click', '.btn').on('click', '.btn', function () {

            var yy = parseInt($('.handle_box[data-t="month"] span').eq(0).text());
            var mm = parseInt($('.handle_box[data-t="month"] span').eq(1).text());

            switch ($(this).attr('data-t')) {
                case 'y-':
                    yy--;
                    break;
                case 'y+':
                    yy++;
                    break;
                case 'm-':
                    mm--;
                    if (mm < 1) {
                        yy--;
                        mm = 12;
                    }
                    break;
                case 'm+':
                    mm++;
                    if (mm > 12) {
                        yy++;
                        mm = 1;
                    }
                    break;
            }

            $('.handle_box[data-t="month"] span').eq(0).html(yy);
            $('.handle_box[data-t="month"] span').eq(1).html(self.formatNum(mm));

            self.createCalendarHtml(yy, mm);
        })

        // list 点击日期
        $('.list_box').off('click', '.td').on('click', '.td', function () {
            if ($(this).attr('title') == '') {
                return false;
            }
            $(this).addClass('active');
            $('#planModal p').html($(this).attr('title'));
            $('#planModal').show();
        })

        // modal 关闭
        $('#planModal').off('click', '.modal_close').on('click', '.modal_close', function () {
            $('.list_box .td').removeClass('active');
            $('#planModal').hide();
        })

        // modal 选择
        $('#planModalList').off('click', 'li').on('click', 'li', function () {
            var val = $(this).attr('data-v');
            $('.list_box .td.active i').attr('data-v', val).html(val);
            $('#planModal .modal_close').click();
        })
    }

    // 本地缓存 保存设置
    this.saveLocalData = function () {
        var data = {
            version: version, // 版本号
            planVal: $('#planVal').val().trim(), // 周期规律
            planStart: planStart, // 起始日期
            weeklySize: weeklySize, // 生成周数
            isRest: $('#isRest').hasClass('active') // 周末休息
        }
        localStorage.setItem('shikkya_tool_schedule', JSON.stringify(data));
    }

    // 本地缓存 读取设置
    this.loadLocalData = function () {
        var data = localStorage.getItem('shikkya_tool_schedule');

        if (!data || data == '') {
            return false;
        }

        data = JSON.parse(data);

        if (data.version != version) {
            localStorage.removeItem('shikkya_tool_schedule');
            return false;
        }

        // 周期规律
        $('#planVal').val(data.planVal);

        // 起始日期
        $('#planStart').val(data.planStart);

        // 生成周数
        $('#weeklySize').val(data.weeklySize);

        // 周末休息
        if (data.isRest) {
            $('#isRest').addClass('active');
        }
        else {
            $('#isRest').removeClass('active');
        }
    }

    // 校验设置项
    this.checkFilter = function () {

        // 周期规律
        planArr = $('#planVal').val().trim().split('');
        if (!planArr || planArr.length == 0) {
            showMsg('请输入周期规律');
            return false;
        }

        // 起始日期
        planStart = $('#planStart').val().trim();
        if (!planStart || planStart == '') {
            showMsg('请输入起始日期');
            return false;
        }
        var tempArr = planStart.split('-');
        if (
            planStart.length != 10 || tempArr.length != 3 ||
            !parseInt(tempArr[0]) || parseInt(tempArr[0]) < 1000 ||
            !parseInt(tempArr[1]) || parseInt(tempArr[1]) < 1 || parseInt(tempArr[1]) > 12 ||
            !parseInt(tempArr[2]) || parseInt(tempArr[2]) < 1 || parseInt(tempArr[2]) > 31
        ) {
            showMsg('起始日期格式有误');
            return false;
        }

        // 生成周数
        weeklySize = parseInt($('#weeklySize').val().trim());
        if (!weeklySize || weeklySize == '') {
            showMsg('请输入生成周数');
            return false;
        }
        if (weeklySize < 1 || weeklySize > 24) {
            showMsg('生成周数为1到24的整数');
            return false;
        }
        $('#weeklySize').val(weeklySize);

        return true;
    }

    // week 创建周历结构
    this.createWeeklyHtml = function () {

        var dateObj = new Date();
        dateObj = new Date(dateObj.setDate(dateObj.getDate() - (dateObj.getDay() == 0 ? 7 : dateObj.getDay()) + 1));

        var isRelax = '';
        var curYear = '';
        var curMonth = '';
        var curDay = '';
        var dayNum = 0;

        var html = '<div class="tr">';
        for (var i in weekArr) {
            html += '<div class="th">' + weekArr[i] + '</div>';
        }
        html += '</div>';
        for (var i = 0; i < weeklySize; i++) {
            html += '<div class="tr">';
            for (var j = 0; j < weekArr.length; j++) {

                curYear = dateObj.getFullYear();
                curMonth = self.formatNum(dateObj.getMonth() + 1);
                curDay = self.formatNum(dateObj.getDate());

                isRelax = j < weekArr.length - 2 ? '' : 'relax';
                if (specialDate[curYear] && specialDate[curYear][curMonth]) {
                    if (specialDate[curYear][curMonth].relax.indexOf(parseInt(curDay)) > -1) {
                        isRelax = 'relax';
                    }
                    if (specialDate[curYear][curMonth].work.indexOf(parseInt(curDay)) > -1) {
                        isRelax = '';
                    }
                }

                dayNum = ((new Date(curYear + '-' + curMonth + '-' + curDay).getTime() - new Date(planStart).getTime()) / 1000 / 60 / 60 / 24) % planArr.length;
                dayNum = dayNum < 0 ? dayNum + planArr.length : dayNum;

                html += '<div class="td" data-t="' + isRelax + '" title="' + dateObj.getFullYear() + '-' + self.formatNum(dateObj.getMonth() + 1) + '-' + self.formatNum(dateObj.getDate()) + '">' +
                    '<p>' + self.formatNum(dateObj.getDate()) + '</p>';
                if ($('#isRest').hasClass('active') && j > weekArr.length - 3 && planArr[dayNum] == '副') {
                    html += '<i data-v="休">休</i>';
                }
                else {
                    html += '<i data-v="' + planArr[dayNum] + '">' + planArr[dayNum] + '</i>';
                }
                html += '</div>';
                dateObj = new Date(dateObj.setDate(dateObj.getDate() + 1));
            }
            html += '</div>';
        }
        $('.list_box[data-t="week"]').html(html);
    }

    // month 创建月历结构
    this.createCalendarHtml = function (curYear, curMonth) {

        // 2月天数判断
        if (curMonth == 2) {
            monthNumArr[curMonth] = curYear % 4 == 0 ? 29 : 28;
        }

        var dateObj = new Date(curYear + '-' + self.formatNum(curMonth) + '-01');
        var wSize = Math.ceil(monthNumArr[curMonth] - (dateObj.getDay() == 0 ? 1 : 8 - dateObj.getDay()) / 7) + 1;
        var curDay = 1;
        var isRelax = '';
        var dayNum = 0;

        var html = '<div class="tr">';
        for (var i in weekArr) {
            html += '<div class="th">' + weekArr[i] + '</div>';
        }
        html += '</div>';
        for (var i = 0; i < wSize; i++) {
            html += '<div class="tr">';
            for (var j = 0; j < weekArr.length; j++) {

                if ((i == 0 && j < (dateObj.getDay() == 0 ? 6 : dateObj.getDay() - 1)) || curDay > monthNumArr[curMonth]) {
                    html += '<div class="td" title="">&nbsp;</div>';
                    continue;
                }

                isRelax = j < weekArr.length - 2 ? '' : 'relax';
                if (specialDate[curYear] && specialDate[curYear][self.formatNum(curMonth)]) {
                    if (specialDate[curYear][self.formatNum(curMonth)].relax.indexOf(curDay) > -1) {
                        isRelax = 'relax';
                    }
                    if (specialDate[curYear][self.formatNum(curMonth)].work.indexOf(curDay) > -1) {
                        isRelax = '';
                    }
                }

                dayNum = ((new Date(curYear + '-' + self.formatNum(curMonth) + '-' + self.formatNum(curDay)).getTime() - new Date(planStart).getTime()) / 1000 / 60 / 60 / 24) % planArr.length;
                dayNum = dayNum < 0 ? dayNum + planArr.length : dayNum;

                html += '<div class="td" data-t="' + isRelax + '" title="' + curYear + '-' + self.formatNum(curMonth) + '-' + self.formatNum(curDay) + '">' +
                    '<p>' + self.formatNum(curDay) + '</p>';
                if ($('#isRest').hasClass('active') && j > weekArr.length - 3 && planArr[dayNum] == '副') {
                    html += '<i data-v="休">休</i>';
                }
                else {
                    html += '<i data-v="' + planArr[dayNum] + '">' + planArr[dayNum] + '</i>';
                }
                html += '</div>';

                curDay++;
            }
            html += '</div>';

            if (curDay > monthNumArr[curMonth]) {
                break;
            }
        }
        $('.list_box[data-t="month"]').html(html);
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
        self.loadLocalData();
        $('#subBtn').click();
    }

    self.init();
})
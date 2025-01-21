/**
 * index.html
 * @authors shikkya
 * @date 2024-09-01
 */

$(function () {

    var self = this;

    // 地图列表
    var mapList = [{
        name: '经典地图'
    }, {
        name: '冰雪地图'
    }, {
        name: '苔藓密室'
    }, {
        name: '秘密房间'
    }, {
        name: '御敌千里'
    }, {
        name: '强行变卖'
    }, {
        name: '帮你花钱'
    }];

    // 星期几
    var weekArr = ['一', '二', '三', '四', '五', '六', '日'];

    // 周期规律
    var planArr = [];
    // 起始日期
    var planStart = '';
    // 生成周数
    var weeklySize = 0;

    this.createEvent = function () {

        // filter 显示日期
        $('#isDate').off('click').on('click', function () {
            $(this).toggleClass('active');
        })

        // filter 开始计算
        $('#subBtn').off('click').on('click', function () {
            try {
                if (self.checkFilter()) {
                    self.createWeeklyHtml();
                    showMsg('计算成功');
                }
            } catch (error) {
                alert('生成失败，请检查设置项格式是否正确，如有疑问请联系开发者~');
            }
        })

        // catalog 查看地图
        $('#catalogBox').off('click', 'div').on('click', 'div', function () {
            sessionStorage.setItem('mapPic', $(this).attr('data-n'));
            window.location.href = './mapPic.html';
        })
    }

    // filter 校验设置项
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
                    ($('#isDate').hasClass('active') ? ('<p>' + self.formatNum(dateObj.getDate()) + '</p>') : '') +
                    '<i data-v="' + planArr[dayNum] + '">' + planArr[dayNum] + '</i>' +
                    '</div>';
                dateObj = new Date(dateObj.setDate(dateObj.getDate() + 1));
            }
            html += '</div>';
        }
        $('#weekBox').html(html);
    }

    // 格式化数字
    this.formatNum = function (num) {
        if (parseInt(num) > 9) {
            return '' + num;
        }
        return '0' + num;
    }

    // 初始化地图信息
    this.initMapListInfo = function () {
        for (var i in mapList) {
            $('#catalogBox').append(
                '<div data-n="' + (parseInt(i) + 1) + '">' +
                '<i data-v="' + (parseInt(i) + 1) + '">' + (parseInt(i) + 1) + '</i>' +
                '<span>' + mapList[i].name + '</span>' +
                '</div>'
            );
        }
    }

    this.init = function () {
        self.createEvent();
        self.initMapListInfo();
        $('#subBtn').click();
    }

    self.init();
})
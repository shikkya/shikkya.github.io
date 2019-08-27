/**
 * tool - date
 * @authors shikkya
 * @date    2019-04-11
 * @version $Id$
 */

// 小于等于1000的正整数
var reg = /^(0|[1-9][0-9]*|-[1-9][0-9]*)$/;

// 每月天数(平年)
var monthDaysArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// 日期对象
var dateObj = new Date();

// 阴历数据
var lunar = {
    tg: '甲乙丙丁戊己庚辛壬癸',
    dz: '子丑寅卯辰巳午未申酉戌亥',
    number: '一二三四五六七八九十',
    year: '鼠牛虎兔龙蛇马羊猴鸡狗猪',
    month: '正二三四五六七八九十冬腊',
    monthadd: [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
    calendar: [0xA4B, 0x5164B, 0x6A5, 0x6D4, 0x415B5, 0x2B6, 0x957, 0x2092F, 0x497, 0x60C96, 0xD4A, 0xEA5, 0x50DA9, 0x5AD, 0x2B6, 0x3126E, 0x92E, 0x7192D, 0xC95, 0xD4A, 0x61B4A, 0xB55, 0x56A, 0x4155B, 0x25D, 0x92D, 0x2192B, 0xA95, 0x71695, 0x6CA, 0xB55, 0x50AB5, 0x4DA, 0xA5B, 0x30A57, 0x52B, 0x8152A, 0xE95, 0x6AA, 0x615AA, 0xAB5, 0x4B6, 0x414AE, 0xA57, 0x526, 0x31D26, 0xD95, 0x70B55, 0x56A, 0x96D, 0x5095D, 0x4AD, 0xA4D, 0x41A4D, 0xD25, 0x81AA5, 0xB54, 0xB6A, 0x612DA, 0x95B, 0x49B, 0x41497, 0xA4B, 0xA164B, 0x6A5, 0x6D4, 0x615B4, 0xAB6, 0x957, 0x5092F, 0x497, 0x64B, 0x30D4A, 0xEA5, 0x80D65, 0x5AC, 0xAB6, 0x5126D, 0x92E, 0xC96, 0x41A95, 0xD4A, 0xDA5, 0x20B55, 0x56A, 0x7155B, 0x25D, 0x92D, 0x5192B, 0xA95, 0xB4A, 0x416AA, 0xAD5, 0x90AB5, 0x4BA, 0xA5B, 0x60A57, 0x52B, 0xA93, 0x40E95]
}

var vm = new Vue({
    el: '#app',
    data: {
        headerObj: {
            homeUrl: './index.html',
            logoImg: '../../images/footer_01.png',
            goListUrl: './index.html#toolList',
            goListBtn: '返回工具列表'
        },
        tit: '日期各种算',
        todayObj: {
            year: '',
            month: '',
            day: '',
            week: '',
            lunarY: '',
            lunarM: '',
            lunarD: ''
        },
        dayObj: {
            tit: '天数计算',
            result_1: '0',
            result_2: '0',
            result_3: '0'
        },
        dayStartSelect: {
            year: '',
            month: '',
            day: ''
        },
        dayEndSelect: {
            year: '',
            month: '',
            day: ''
        },
        dateObj: {
            tit: '日期推算',
            num: '',
            result_1: '?',
            result_2: '?',
            result_3: '?',
            result_4: '?'
        },
        dateSelect: {
            year: '',
            month: '',
            day: ''
        },
        lunarTit: '阴阳历转换',
        lunarYinSelect: {
            year: '',
            month: '',
            day: ''
        },
        lunarYangSelect: {
            year: '',
            month: '',
            day: ''
        },
        errorClass: false
    },
    watch: {
        // 天数计算
        dayStartYear: function(val) {
            if (this.dayStartSelect.month == 2) {
                this.updateDay('dayStart');
            }
            this.dayCalculate();
        },
        dayStartMonth: function(val) {
            this.updateDay('dayStart');
            this.dayCalculate();
        },
        dayStartDay: function(val) {
            this.dayCalculate();
        },
        dayEndYear: function(val) {
            if (this.dayEndSelect.month == 2) {
                this.updateDay('dayEnd');
            }
            this.dayCalculate();
        },
        dayEndMonth: function(val) {
            this.updateDay('dayEnd');
            this.dayCalculate();
        },
        dayEndDay: function(val) {
            this.dayCalculate();
        },
        // 日期推算
        dateNum: function(val) {
            if (val == '') {
                this.errorClass = false;
                this.dateObj.result_1 = this.dateObj.result_2 = this.dateObj.result_3 = this.dateObj.result_4 = '?';
                return;
            }
            if (val != '' && !reg.test(val)) {
                this.errorClass = true;
                this.dateObj.result_1 = this.dateObj.result_2 = this.dateObj.result_3 = this.dateObj.result_4 = '?';
                return;
            }
            this.errorClass = false;
            this.dateCalculate();
        },
        dateYear: function(val) {
            if (this.dateSelect.month == 2) {
                this.updateDay('date');
            }
            if (this.dateObj.num != '' && this.errorClass == false) {
                this.dateCalculate();
            }
        },
        dateMonth: function(val) {
            this.updateDay('date');
            if (this.dateObj.num != '' && this.errorClass == false) {
                this.dateCalculate();
            }
        },
        dateDay: function(val) {
            if (this.dateObj.num != '' && this.errorClass == false) {
                this.dateCalculate();
            }
        },
        // 阴阳历转换
        lunarYinYear: function(val) {
            if (this.lunarYinSelect.month == 2) {
                this.updateDay('lunarYin');
            }
        },
        lunarYinMonth: function(val) {
            this.updateDay('lunarYin');
        },
        lunarYinDay: function(val) {

        },
        lunarYangYear: function(val) {
            if (this.lunarYangSelect.month == 2) {
                this.updateDay('lunarYang');
            }
            this.YangToYin();
        },
        lunarYangMonth: function(val) {
            this.updateDay('lunarYang');
            this.YangToYin();
        },
        lunarYangDay: function(val) {
            this.YangToYin();
        }
    },
    computed: {
        // 天数计算
        dayStartYear: function() {
            return this.dayStartSelect.year;
        },
        dayStartMonth: function() {
            return this.dayStartSelect.month;
        },
        dayStartDay: function() {
            return this.dayStartSelect.day;
        },
        dayEndYear: function() {
            return this.dayEndSelect.year;
        },
        dayEndMonth: function() {
            return this.dayEndSelect.month;
        },
        dayEndDay: function() {
            return this.dayEndSelect.day;
        },
        // 日期推算
        dateNum: function() {
            return this.dateObj.num;
        },
        dateYear: function() {
            return this.dateSelect.year;
        },
        dateMonth: function() {
            return this.dateSelect.month;
        },
        dateDay: function() {
            return this.dateSelect.day;
        },
        // 阴阳历转换
        lunarYinYear: function() {
            return this.lunarYinSelect.year;
        },
        lunarYinMonth: function() {
            return this.lunarYinSelect.month;
        },
        lunarYinDay: function() {
            return this.lunarYinSelect.day;
        },
        lunarYangYear: function() {
            return this.lunarYangSelect.year;
        },
        lunarYangMonth: function() {
            return this.lunarYangSelect.month;
        },
        lunarYangDay: function() {
            return this.lunarYangSelect.day;
        }
    },
    mounted: function() {
        // 初始化content最小高度
        document.getElementById('content').style.minHeight = (document.body.clientHeight - 220) + 'px';

        // 初始化今天日期
        this.initDate();

        // 初始化三级联动
        this.initSelect('dayStart');
        this.initSelect('dayEnd');
        this.initSelect('date');
        this.initSelect('lunarYang');
        this.initSelect('lunarYin');

        // 阴历转换
        this.YangToYin();
    },
    methods: {
        // 初始化今天日期
        initDate: function() {
            this.todayObj.year = dateObj.getFullYear();
            this.todayObj.month = dateObj.getMonth() + 1;
            this.todayObj.day = dateObj.getDate();
            this.todayObj.week = this.getWeekStr(dateObj.getDay());

            var lunarDateString = this.getLunarDateString(this.getLunarDate(this.todayObj.year + '-' + this.todayObj.month + '-' + this.todayObj.day));
            this.todayObj.lunarY = lunarDateString.tg + lunarDateString.dz + '(' + lunarDateString.year + ')';
            this.todayObj.lunarM = lunarDateString.month;
            this.todayObj.lunarD = lunarDateString.day;
        },
        // 初始化三级联动
        initSelect: function(objName) {
            // 年
            for (var i = this.todayObj.year - 80; i < this.todayObj.year + 81; i++) {
                document[objName + 'Frm'].year.options.add(new Option(i, i));
            }
            this[objName + 'Select'].year = this.todayObj.year;

            // 月
            for (var i = 1; i < 13; i++) {
                document[objName + 'Frm'].month.options.add(new Option(i, i));
            }
            this[objName + 'Select'].month = this.todayObj.month;

            // 日
            var temp = monthDaysArr[parseInt(this.todayObj.month) - 1];
            if (parseInt(this.todayObj.month) == 2 && this.isLeapYear(this.todayObj.year)) {
                temp++;
            }
            for (var i = 1; i < temp + 1; i++) {
                document[objName + 'Frm'].day.options.add(new Option(i, i));
            }
            this[objName + 'Select'].day = this.todayObj.day;
        },
        // 根据年月的变化更新日
        updateDay: function(objName) {
            var temp = monthDaysArr[parseInt(this[objName + 'Select'].month) - 1];
            if (parseInt(this[objName + 'Select'].month) == 2 && this.isLeapYear(this[objName + 'Select'].year)) {
                temp++;
            }
            document[objName + 'Frm'].day.options.length = 0;
            for (var i = 1; i < temp + 1; i++) {
                document[objName + 'Frm'].day.options.add(new Option(i, i));
            }
            if (temp < this[objName + 'Select'].day) {
                this[objName + 'Select'].day = temp;
            }
        },
        // 判断闰年 true闰年 false平年
        isLeapYear: function(year) {
            return (0 == year % 4 && (year % 100 != 0 || year % 400 == 0));
        },
        // 计算星期几
        getWeekStr: function(num) {
            switch (parseInt(num)) {
                case 0:
                    return '日';
                    break;
                case 1:
                    return '一';
                    break;
                case 2:
                    return '二';
                    break;
                case 3:
                    return '三';
                    break;
                case 4:
                    return '四';
                    break;
                case 5:
                    return '五';
                    break;
                case 6:
                    return '六';
            }
        },
        // 获取指定年月的天数
        getMonthDays: function(year, month) {
            var temp = monthDaysArr[parseInt(month) - 1];
            if (parseInt(month) == 2 && this.isLeapYear(year)) {
                temp++;
            }
            return temp;
        },
        // 天数计算
        dayCalculate: function() {
            var startTime = new Date(this.dayStartSelect.month + '-' + this.dayStartSelect.day + '-' + this.dayStartSelect.year); // MM-DD-YYYY
            var endTime = new Date(this.dayEndSelect.month + '-' + this.dayEndSelect.day + '-' + this.dayEndSelect.year); // MM-DD-YYYY
            var day = Math.abs(startTime - endTime) / 1000 / 60 / 60 / 24;
            this.dayObj.result_1 = day;
            this.dayObj.result_2 = parseInt(day / 7);
            this.dayObj.result_3 = day % 7;
        },
        // 日期推算
        dateCalculate: function() {
            var nDate = new Date(this.dateSelect.month + '-' + this.dateSelect.day + '-' + this.dateSelect.year); // MM-DD-YYYY
            var millSeconds = Math.abs(nDate) + (parseInt(this.dateObj.num) * 24 * 60 * 60 * 1000);
            var rDate = new Date(millSeconds);
            this.dateObj.result_1 = rDate.getFullYear();
            this.dateObj.result_2 = rDate.getMonth() + 1;
            this.dateObj.result_3 = rDate.getDate();
            this.dateObj.result_4 = this.getWeekStr(rDate.getDay());
        },
        // 阳历转阴历
        YangToYin: function() {
            var lunarDate = this.getLunarDate(this.lunarYangSelect.year + '-' + this.lunarYangSelect.month + '-' + this.lunarYangSelect.day);
            this.lunarYinSelect.year = lunarDate.lunarYear;
            this.lunarYinSelect.month = lunarDate.lunarMonth;
            this.lunarYinSelect.day = lunarDate.lunarDay;
        },
        // 阴历
        getLunarDate: function(date) {
            var year, month, day;
            if (!date) {
                date = new Date(), year = date.getFullYear(), month = date.getMonth(), day = date.getDate();
            } else {
                date = date.split('-'), year = parseInt(date[0]), month = date[1] - 1, day = parseInt(date[2]);
            }
            if (year < 1921) {
                return {}
            }
            var total, m, n, k, bit, lunarYear, lunarMonth, lunarDay;
            var isEnd = false;
            var tmp = year;
            if (tmp < 1900) {
                tmp += 1900;
            }
            total = (tmp - 1921) * 365 + Math.floor((tmp - 1921) / 4) + lunar.monthadd[month] + day - 38;
            if (year % 4 == 0 && month > 1) {
                total++;
            }
            for (m = 0;; m++) {
                k = (lunar.calendar[m] < 0xfff) ? 11 : 12;
                for (n = k; n >= 0; n--) {
                    bit = (lunar.calendar[m] >> n) & 1;
                    if (total <= 29 + bit) {
                        isEnd = true;
                        break;
                    }
                    total = total - 29 - bit;
                }
                if (isEnd) {
                    break;
                }
            }
            lunarYear = 1921 + m;
            lunarMonth = k - n + 1;
            lunarDay = total;
            if (k == 12) {
                if (lunarMonth == Math.floor(lunar.calendar[m] / 0x10000) + 1) {
                    lunarMonth = 1 - lunarMonth;
                }
                if (lunarMonth > Math.floor(lunar.calendar[m] / 0x10000) + 1) {
                    lunarMonth--;
                }
            }

            return {
                lunarYear: lunarYear,
                lunarMonth: lunarMonth,
                lunarDay: lunarDay,
            };
        },
        // 阴历
        getLunarDateString: function(lunarDate) {
            if (!lunarDate.lunarDay) {
                return;
            }
            var data = {};
            var lunarYear = lunarDate.lunarYear;
            var lunarMonth = lunarDate.lunarMonth;
            var lunarDay = lunarDate.lunarDay;

            data.tg = lunar.tg.charAt((lunarYear - 4) % 10);
            data.dz = lunar.dz.charAt((lunarYear - 4) % 12);
            data.year = lunar.year.charAt((lunarYear - 4) % 12);
            data.month = lunarMonth < 1 ? '(闰)' + lunar.month.charAt(-lunarMonth - 1) : lunar.month.charAt(lunarMonth - 1);

            data.day = (lunarDay < 11) ? "初" : ((lunarDay < 20) ? "十" : ((lunarDay < 30) ? "廿" : "三十"));
            if (lunarDay % 10 != 0 || lunarDay == 10) {
                data.day += lunar.number.charAt((lunarDay - 1) % 10);
            }
            return data;
        }
    }
})
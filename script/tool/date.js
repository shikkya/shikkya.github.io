/**
 * @authors kk
 * @date    2019-04-11
 */

// 小于等于1000的正整数
var reg = /^(0|[1-9][0-9]*|-[1-9][0-9]*)$/;

// 每月天数(平年)
var monthDaysArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// 日期对象
var dateObj = new Date();

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
            result_3: '0',
            result_4: '0',
            result_5: '0'
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
        },
        lunarYangMonth: function(val) {
            this.updateDay('lunarYang');
        },
        lunarYangDay: function(val) {

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
    },
    methods: {
        // 初始化今天日期
        initDate: function() {
            this.todayObj.year = dateObj.getFullYear();
            this.todayObj.month = dateObj.getMonth() + 1;
            this.todayObj.day = dateObj.getDate();
            this.todayObj.week = this.getWeekStr(dateObj.getDay());
            this.todayObj.lunarY = dateObj.getFullYear();
            this.todayObj.lunarM = dateObj.getFullYear();
            this.todayObj.lunarD = dateObj.getFullYear();
        },
        // 初始化三级联动
        initSelect: function(objName) {
            // 年
            for (var i = this.todayObj.year - 100; i < this.todayObj.year + 101; i++) {
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
            this.dayObj.result_4 = parseInt(day / 7);
            this.dayObj.result_5 = day % 7;

            if (this.dayStartSelect.year > this.dayEndSelect.year) {
                开始大
            } else {

            }



            this.dayObj.result_3 = day;
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
        }
    }
})
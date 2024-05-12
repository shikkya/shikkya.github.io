/* -- DO NOT REMOVE --
 * jQuery DCalendar 1.1 and DCalendar Picker 1.3 plugin
 * 
 * Author: Dionlee Uy
 * Email: dionleeuy@gmail.com
 *
 * Date: Sat Mar 2 2013
 *
 * @requires jQuery
 * -- DO NOT REMOVE --
 */

if (typeof jQuery === 'undefined') {
    throw new Error('DCalendar.Picker: This plugin requires jQuery');
}

var langData = {
    en: {
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        daysOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    },
    ch: {
        months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        shortMonths: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
        daysOfWeek: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    }
}

$(function() {

    Date.prototype.getDays = function() {
        return new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate();
    };

    var self = $(this);

    var DCalendar = function(elem, options) {

        this.calendar = $(elem);
        this.today = new Date(); //system date

        this.options = options; // 该配置要放在前面 否则设置了初始值会取不到配置参数

        //current selected date, default is today if no value given
        if (this.calendar.prev().val() === '') {
            this.date = new Date();
        } else {
            var dateObj = this.reformatDate(this.calendar.prev().val());
            this.date = isNaN(parseInt(dateObj.m)) ? new Date(dateObj.m + " " + dateObj.d + ", " + dateObj.y) : new Date(dateObj.y, dateObj.m - 1, dateObj.d);
        }

        this.viewMode = 'days';
        this.selected = (this.date.getMonth() + 1) + "/" + this.date.getDate() + "/" + this.date.getFullYear();
        this.minDate = this.calendar.prev().data('mindate');
        this.maxDate = this.calendar.prev().data('maxdate');
        this.calendar.prepend(this.tHead);

        var that = this;

        this.calendar.on('click', '#next', function(e) {
                e.stopPropagation();
                initCreate('next');
            })
            .on('click', '#prev', function(e) {
                e.stopPropagation();
                initCreate('prev');
            })
            .on('click', '#today', function(e) {
                e.stopPropagation();
                that.viewMode = 'days';
                var curr = new Date(that.date),
                    sys = new Date(that.today);
                if (curr.toString() != sys.toString()) {
                    that.date = sys;
                }
                that.create('days');
            })
            .on('click', '#clearBtn', function(e) { // 点击清空
                e.stopPropagation();
                e = $.Event('selectdate', {
                    date: ''
                });
                that.calendar.trigger(e);
            })
            .on('click', '.date, .pMDate, .nMDate', function(e) {
                e.stopPropagation();

                var isPrev = $(this).hasClass('pMDate'),
                    isNext = $(this).hasClass('nMDate'),
                    sdate = $(this).text(),
                    cmonth = that.date.getMonth(),
                    cyear = that.date.getFullYear(),
                    min = that.minDate === "today" ? new Date(that.today.getFullYear(), that.today.getMonth(), that.today.getDate()) : new Date(that.minDate),
                    max = that.maxDate === "today" ? new Date(that.today.getFullYear(), that.today.getMonth(), that.today.getDate()) : new Date(that.maxDate);

                /* Calculate year */
                if (isPrev) {
                    cyear = (cmonth === 0 ? cyear - 1 : cyear);
                } else if (isNext) {
                    cyear = (cmonth + 2 === 13 ? cyear + 1 : cyear);
                }
                /* Calculate month */
                if (isPrev) {
                    cmonth = (cmonth === 0 ? '12' : cmonth);
                } else if (isNext) {
                    cmonth = (cmonth + 2 === 13 ? '1' : cmonth + 2);
                } else {
                    cmonth = cmonth + 1;
                }

                // Selected date
                var selected = new Date(cyear, cmonth - 1, sdate);

                if ((that.minDate && selected < min) || (that.maxDate && selected > max)) return;

                that.selected = cmonth + '/' + sdate + '/' + cyear;

                if (that.options.mode === 'datepicker') {
                    that.calendar.find('td').removeClass('selected');
                    $(this).addClass('selected');
                }
                that.selectDate();
                // return true;
            }).on('click', '#currM', function(e) {
                e.stopPropagation();
                that.viewMode = 'years';
                that.create(that.viewMode);
            }).on('click', '#currY', function(e) {
                e.stopPropagation();
                that.viewMode = 'month';
                that.create(that.viewMode);
            }).on('click', '.month', function(e) {
                e.stopPropagation();
                that.viewMode = 'days';
                var curr = new Date(that.date),
                    y = that.calendar.find('#currM').text();
                curr.setMonth($(e.currentTarget).attr('num'));
                that.date = curr;
                that.create(that.viewMode);
            }).on('click', '.year', function(e) {
                e.stopPropagation();
                that.viewMode = 'months';
                var curr = new Date(that.date),
                    y = that.calendar.find('#currY').text();
                curr.setYear($(e.currentTarget).attr('num'));
                that.date = curr;
                that.create(that.viewMode);
            });

        function initCreate(o) {
            var curr = new Date(that.date),
                currMonth = curr.getMonth(),
                currYear = curr.getFullYear();
            curr.setDate(1);
            if (that.viewMode === 'days') {
                curr.setMonth(currMonth + (o === 'next' ? 1 : -1));
                that.date = curr;
                that.create(that.viewMode);
            } else if (that.viewMode === 'years') {
                // 年视图
                var tBody = that.calendar.find('tbody');
                if (o === 'next') {
                    var selectyear = tBody.find('tr:eq(2) td:eq(3) span.year').text();
                    var currI = 1;
                    selectyear = parseInt(selectyear);
                    tBody.empty();
                    for (var i = 0; i < 3; i++) {
                        var row = $('<tr></tr>');
                        for (var x = 0; x < 4; x++) {
                            var col = $('<td align="center"></td>');
                            var y = $('<span class="year" num="' + (selectyear + currI) + '">' + (selectyear + currI) + '</span>');
                            col.append(y).appendTo(row);
                            currI++;
                        }
                        tBody.append(row);
                    }
                } else {
                    var selectyear = tBody.find('tr:eq(0) td:eq(0) span.year').text();
                    var currI = 13;
                    selectyear = parseInt(selectyear) + 1;
                    tBody.empty();
                    for (var i = 0; i < 3; i++) {
                        var row = $('<tr></tr>');
                        for (var x = 0; x < 4; x++) {
                            var col = $('<td align="center"></td>');
                            var y = $('<span class="year" num="' + (selectyear - currI) + '">' + (selectyear - currI) + '</span>');
                            col.append(y).appendTo(row);
                            currI--;
                        }
                        tBody.append(row);
                    }
                }
                if (that.options.language == 'ch') {
                    var sysDate = "今天: " + that.today.getFullYear() + "年" + langData[that.options.language].months[that.today.getMonth()] + that.today.getDate() + "日" + langData[that.options.language].daysOfWeek[that.today.getDay()];
                    var clearBtnName = '清空';
                } else if (that.options.language == 'en') {
                    var sysDate = "Today: " + langData[that.options.language].daysOfWeek[that.today.getDay()] + ", " + langData[that.options.language].months[that.today.getMonth()] + " " + that.today.getDate() + ", " + that.today.getFullYear();
                    var clearBtnName = 'clear';
                }
                tBody.append('<tr><td colspan="3" id="today">' + sysDate + '</td><td><span id="clearBtn">' + clearBtnName + '</span></td></tr>').appendTo(that.calendar);
            } else {
                curr.setFullYear(currYear + (o === 'next' ? 1 : -1));
                that.date = curr;
                that.create(that.viewMode);
            }
        }

        this.create(this.viewMode);
    }

    DCalendar.prototype = {
        constructor: DCalendar,
        setDate: function() {
            var that = this,
                dateObj = that.reformatDate(that.calendar.prev().val()),
                value = isNaN(parseInt(dateObj.m)) ? new Date(dateObj.m + " " + dateObj.d + ", " + dateObj.y) : new Date(dateObj.y, dateObj.m - 1, dateObj.d);

            that.selected = (value.getMonth() + 1) + "/" + value.getDate() + "/" + value.getFullYear();
            that.selectDate();
            that.date = value;
            that.create(that.viewMode);
        },
        selectDate: function() {
            var that = this,
                newDate = that.formatDate(that.options.format),
                e = $.Event('selectdate', {
                    date: newDate
                });

            that.calendar.trigger(e);
        },
        reformatDate: function(date) {
            var that = this,
                format = that.options.format;

            return {
                m: date.substring(format.indexOf('m'), format.lastIndexOf('m') + 1),
                d: date.substring(format.indexOf('d'), format.lastIndexOf('d') + 1),
                y: date.substring(format.indexOf('y'), format.lastIndexOf('y') + 1)
            };
        },
        formatDate: function(format) {
            var that = this;
            var d = new Date(that.selected),
                day = d.getDate(),
                m = d.getMonth(),
                y = d.getFullYear();

            return format.replace(/(yyyy|yy|mmmm|mmm|mm|m|dd|d)/gi, function(e) {
                switch (e.toLowerCase()) {
                    case 'd':
                        return day;
                    case 'dd':
                        return (day < 10 ? "0" + day : day);
                    case 'm':
                        return m + 1;
                    case 'mm':
                        return (m + 1 < 10 ? "0" + (m + 1) : (m + 1));
                    case 'mmm':
                        return langData[this.options.language].shortMonths[m];
                    case 'mmmm':
                        return langData[this.options.language].months[m];
                    case 'yy':
                        return y.toString().substr(2, 2);
                    case 'yyyy':
                        return y;
                }
            });
        },
        create: function(mode) {
            var that = this,
                cal = [],
                tBody = $('<tbody></tbody>'),
                d = new Date(that.date.getFullYear(), that.date.getMonth(), that.date.getDate()),
                days = that.date.getDays(),
                day = 1,
                nStartDate = 1,
                selDate = that.selected.split('/'),
                selected = new Date(selDate[2], selDate[0] - 1, selDate[1]),
                today = new Date(that.today.getFullYear(), that.today.getMonth(), that.today.getDate()),
                min = that.minDate === "today" ? today : new Date(that.minDate),
                max = that.maxDate === "today" ? today : new Date(that.maxDate);

            that.calendar.empty();
            if (mode === "days") {
                if (this.options.language == 'ch') {
                    that.tHead = $('<thead><tr><th id="prev">&lsaquo;</th><th colspan="5" id="currM"></th><th id="next">&rsaquo;</th></tr><tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr></thead>');
                } else if (this.options.language == 'en') {
                    that.tHead = $('<thead><tr><th id="prev">&lsaquo;</th><th colspan="5" id="currM"></th><th id="next">&rsaquo;</th></tr><tr><th>S</th><th>M</th><th>T</th><th>W</th><th>T</th><th>F</th><th>S</th></tr></thead>');
                }
                if (this.options.language == 'ch') {
                    that.tHead.find('#currM').text(that.date.getFullYear() + "年 " + langData[this.options.language].months[that.date.getMonth()]);
                } else if (this.options.language == 'en') {
                    that.tHead.find('#currM').text(langData[this.options.language].months[that.date.getMonth()] + " " + that.date.getFullYear());
                }
                that.calendar.append(that.tHead);

                for (var i = 1; i <= 6; i++) {
                    var temp = [$('<td></td>'), $('<td></td>'), $('<td></td>'), $('<td></td>'), $('<td></td>'), $('<td></td>'), $('<td></td>')];

                    while (day <= days) {
                        d.setDate(day);
                        var dayOfWeek = d.getDay();

                        if (d.getTime() == today.getTime()) temp[dayOfWeek].attr('id', 'currDay');

                        if ((that.minDate && d < min) || (that.maxDate && d > max)) temp[dayOfWeek].addClass('disabled');

                        if (that.options.mode === 'datepicker' && d.getTime() == selected.getTime()) temp[dayOfWeek].addClass('selected');

                        if (i === 1 && dayOfWeek === 0) break;
                        else if (dayOfWeek < 6) temp[dayOfWeek].html('<span>' + (day++) + '</span>').addClass('date');
                        else {
                            temp[dayOfWeek].html('<span>' + (day++) + '</span>').addClass('date');
                            break;
                        }
                    }
                    /* For days of previous and next month */
                    if (i === 1 || i > 4) {
                        // First week
                        if (i === 1) {
                            var p = new Date(that.date.getFullYear(), that.date.getMonth() - 1, 1),
                                pMonth = p.getMonth(),
                                pDays = p.getDays();

                            for (var a = 6; a >= 0; a--) {
                                if (temp[a].text() === '') {

                                    p.setDate(pDays);

                                    temp[a].html('<span>' + (pDays--) + '</span>').addClass('pMDate');

                                    if ((that.minDate && p < min) || (that.maxDate && p > max)) temp[a].addClass('disabled');
                                    if (that.options.mode === 'datepicker' && p.getTime() == selected.getTime()) temp[a].addClass('selected');
                                }
                            }
                        }
                        // Last week
                        else if (i > 4) {
                            var nextMonth = new Date(that.date.getFullYear(), that.date.getMonth() + 1, 1);
                            for (var a = 0; a <= 6; a++) {
                                if (temp[a].text() === '') {

                                    nextMonth.setDate(nStartDate);

                                    temp[a].html('<span>' + (nStartDate++) + '</span>').addClass('nMDate');

                                    if ((that.minDate && nextMonth < min) || (that.maxDate && nextMonth > max)) temp[a].addClass('disabled');
                                    if (that.options.mode === 'datepicker' && nextMonth.getTime() == selected.getTime()) temp[a].addClass('selected');
                                }
                            }
                        }
                    }
                    cal.push(temp);
                }

                $.each(cal, function(i, v) {
                    var row = $('<tr></tr>'),
                        l = v.length;
                    for (var i = 0; i < l; i++) {
                        row.append(v[i]);
                    }
                    tBody.append(row);
                });

                if (this.options.language == 'ch') {
                    var sysDate = "今天: " + that.today.getFullYear() + "年" + langData[this.options.language].months[that.today.getMonth()] + that.today.getDate() + "日" + langData[this.options.language].daysOfWeek[that.today.getDay()];
                    var clearBtnName = '清空';
                } else if (this.options.language == 'en') {
                    var sysDate = "Today: " + langData[this.options.language].daysOfWeek[that.today.getDay()] + ", " + langData[this.options.language].months[that.today.getMonth()] + " " + that.today.getDate() + ", " + that.today.getFullYear();
                    var clearBtnName = 'clear';
                }
                tBody.append('<tr><td colspan="5" id="today">' + sysDate + '</td><td colspan="2"><span id="clearBtn">' + clearBtnName + '</span></td></tr>').appendTo(that.calendar);
            } else if (mode === "years") {
                // 增加年视图
                this.tHead = $('<thead><tr><th id="prev">&lsaquo;</th><th colspan="2" id="currY"></th><th id="next">&rsaquo;</th></tr>');
                if (this.options.language == 'ch') {
                    that.tHead.find('#currY').text(that.date.getFullYear() + "年");
                } else if (this.options.language == 'en') {
                    that.tHead.find('#currY').text(that.date.getFullYear());
                }
                that.tHead.appendTo(that.calendar);
                var currentyear = that.date.getFullYear();
                var currI = 0;
                for (var i = 0; i < 3; i++) {
                    var row = $('<tr></tr>');
                    for (var x = 0; x < 4; x++) {
                        var col = $('<td align="center"></td>');
                        var y = $('<span class="year" num="' + (currI + currentyear) + '">' + (currI + currentyear) + '</span>');
                        col.append(y).appendTo(row);
                        currI++;
                    }
                    tBody.append(row);
                }

                if (this.options.language == 'ch') {
                    var sysDate = "今天: " + that.today.getFullYear() + "年" + langData[this.options.language].months[that.today.getMonth()] + that.today.getDate() + "日" + langData[this.options.language].daysOfWeek[that.today.getDay()];
                    var clearBtnName = '清空';
                } else if (this.options.language == 'en') {
                    var sysDate = "Today: " + langData[this.options.language].daysOfWeek[that.today.getDay()] + ", " + langData[this.options.language].months[that.today.getMonth()] + " " + that.today.getDate() + ", " + that.today.getFullYear();
                    var clearBtnName = 'clear';
                }
                tBody.append('<tr><td colspan="3" id="today">' + sysDate + '</td><td><span id="clearBtn">' + clearBtnName + '</span></td></tr>').appendTo(that.calendar);
            } else {
                this.tHead = $('<thead><tr><th id="prev">&lsaquo;</th><th colspan="2" id="currM"></th><th id="next">&rsaquo;</th></tr>');
                if (this.options.language == 'ch') {
                    that.tHead.find('#currM').text(that.date.getFullYear() + "年");
                } else if (this.options.language == 'en') {
                    that.tHead.find('#currM').text(that.date.getFullYear());
                }
                that.tHead.appendTo(that.calendar);
                var currI = 0;
                for (var i = 0; i < 3; i++) {
                    var row = $('<tr></tr>');
                    for (var x = 0; x < 4; x++) {
                        var col = $('<td align="center"></td>');
                        var m = $('<span class="month" num="' + currI + '">' + langData[this.options.language].shortMonths[currI] + '</span>');
                        col.append(m).appendTo(row);
                        currI++;
                    }
                    tBody.append(row);
                }

                if (this.options.language == 'ch') {
                    var sysDate = "今天: " + that.today.getFullYear() + "年" + langData[this.options.language].months[that.today.getMonth()] + that.today.getDate() + "日" + langData[this.options.language].daysOfWeek[that.today.getDay()];
                    var clearBtnName = '清空';
                } else if (this.options.language == 'en') {
                    var sysDate = "Today: " + langData[this.options.language].daysOfWeek[that.today.getDay()] + ", " + langData[this.options.language].months[that.today.getMonth()] + " " + that.today.getDate() + ", " + that.today.getFullYear();
                    var clearBtnName = 'clear';
                }
                tBody.append('<tr><td colspan="3" id="today">' + sysDate + '</td><td><span id="clearBtn">' + clearBtnName + '</span></td></tr>').appendTo(that.calendar);
            }
        }
    }

    /* DEFINITION FOR DCALENDAR */
    $.fn.dcalendar = function(opts) {
        return $(this).each(function(index, elem) {
            var that = this;
            var $this = $(that),
                data = $(that).data('dcalendar'),
                options = $.extend({}, $.fn.dcalendar.defaults, $this.data(), typeof opts === 'object' && opts);
            if (!data) {
                $this.data('dcalendar', (data = new DCalendar(this, options)));
            }
            if (typeof opts === 'string') data[opts]();
        });
    }

    $.fn.dcalendar.defaults = {
        mode: 'calendar',
        format: 'mm/dd/yyyy',
        language: 'en'
    };

    $.fn.dcalendar.Constructor = DCalendar;

    /* DEFINITION FOR DCALENDAR PICKER */
    $.fn.dcalendarpicker = function(opts) {
        if (opts && opts.language) {
            self.dcalendar.defaults.language = opts.language;
        }

        return $(this).each(function() {
            var that = $(this),
                hovered = false,
                selectedDate = false,
                cal = null;

            if (typeof opts === 'string') {
                var data = that.next('.calendar').data('dcalendar');
                data[opts]();
            } else {
                cal = $('<table class="calendar"></table>');
                that.wrap($('<div class="datepicker" style="display:inline-block;"></div>'));
                cal.css({
                    position: 'absolute',
                    display: 'none',
                    'box-shadow': '0 4px 6px 1px rgba(0, 0, 0, 0.14)',
                    width: '230px',
                }).appendTo(that.parent());
                if (opts) {
                    opts.mode = 'datepicker';
                    cal.dcalendar(opts);
                } else {
                    cal.dcalendar({
                        mode: 'datepicker'
                    });
                }
                cal.hover(function() {
                    hovered = true;
                }, function() {
                    hovered = false;
                }).on('click', function(e) {
                    e.stopPropagation();
                    if (!selectedDate)
                        that.focus();
                    else {
                        selectedDate = false;
                        $(this).hide();
                    }
                }).on('selectdate', function(e) {
                    e.stopPropagation();
                    that.val(e.date).trigger('onchange');
                    // that.trigger($.Event('dateselected', { date: e.date, elem: that })); // 该事件没有被调用所以注释了
                    selectedDate = true;
                    // 因为阻止了选择日期的冒泡，所以需要增加原本的click样式处理
                    if (!selectedDate)
                        that.focus();
                    else {
                        selectedDate = false;
                        $(this).hide();
                    }
                });
                that.on('keydown', function(e) {
                        e.stopPropagation();
                        if (e.which) {
                            return false;
                        }
                    })
                    .on('focus', function(e) {
                        e.stopPropagation()
                        $('.datepicker').find('.calendar').not(cal).hide();
                        cal.show();
                    })
                    .on('blur', function(e) {
                        e.stopPropagation()
                        if (!hovered) {
                            cal.hide();
                        }
                    });
            }
        });
    }
})
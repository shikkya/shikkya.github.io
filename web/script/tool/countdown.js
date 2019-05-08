/**
 * @authors kk
 * @date    2019-04-09
 */

// 事件列表
var ListItem = {
    props: ['item'],
    template: '<li :class="{hide:item.isHide}"><span :title="item.tit" class="fll">{{item.tit}}</span><font :class="item.fontClass">{{item.time}}</font><button class="btn" :class="{close:item.btnText==\'关闭\'}" @click="delList">{{item.btnText}}</button></li>',
    methods: {
        delList: function() {
            if (this.item.btnText == '关闭') {
                vm.timeObj.list.splice(vm.timeObj.list.indexOf(this.item), 1);
            } else {
                this.item.isHide = true;
            }
        }
    }
}

// 预设时间列表
var PreinstallItem = {
    props: ['item', 'index', 'num'],
    template: '<span @click="check" :class="{active:index==num}"><i></i><label>{{item.text}}</label></span>',
    methods: {
        check: function() {
            vm.timeObj.pCheckNum = this.index;
        }
    }
}

var vm = new Vue({
    el: '#app',
    components: {
        ListItem: ListItem,
        PreinstallItem: PreinstallItem
    },
    data: {
        headerObj: {
            homeUrl: './index.html',
            logoImg: '../../images/footer_01.png',
            goListUrl: './index.html#toolList',
            goListBtn: '返回工具列表'
        },
        tit: '倒数计时器',
        errorClass: false,
        isShine: false,
        timeObj: {
            tit: '',
            hour: '',
            minute: '',
            second: '',
            pCheckNum: -1,
            preinstall: [
                { text: '1分', val: 1 },
                { text: '5分', val: 5 },
                { text: '10分', val: 10 },
                { text: '1时', val: 60 },
            ],
            list: [] // { tit:'', time:'', fontClass:'', btnText:'', isHide:false }
        }
    },
    watch: {
        isShine: function(val) {
            if (val) {
                var titleInit = document.title;
                var timerShine = setInterval(function() {
                    var title = document.title;
                    if (/新/.test(title) == false) {
                        document.title = '【你有新消息】';
                    } else {
                        document.title = '【　　　　　】';
                    }

                    if (this.isShine == false) {
                        document.title = titleInit;
                        clearInterval(timerShine);
                    }
                }, 500);
            }
        }
    },
    mounted: function() {
        // 初始化content最小高度
        document.getElementById('list').style.height = (document.body.clientHeight - 565) + 'px';

        // 回车触发开始按钮
        document.onkeypress = function(e) {
            if (e.which == 13) {
                vm.addList();
            }
        };

        // 取消通知栏闪烁
        window.onfocus = function() {
            this.isShine = false;
        };

        // 取消通知栏闪烁
        document.onfocusin = function() {
            this.isShine = false;
        };
    },
    methods: {
        // 数字补全两位
        formatNum: function(num) {
            num = parseInt(num);
            if (num < 10) {
                return '0' + num;
            } else {
                return '' + num;
            }
        },
        // 点击开始新增数据
        addList: function() {
            var h = 0;
            var m = 0;
            var s = 0;
            var tit = this.timeObj.tit;

            if (tit == '') {
                tit = '暂无备注';
            }

            if (this.timeObj.pCheckNum > -1) {
                m = this.timeObj.preinstall[this.timeObj.pCheckNum].val;
            } else {
                h = this.timeObj.hour;
                m = this.timeObj.minute;
                s = this.timeObj.second;

                // 时分秒不能同时为空
                if (h == '' && m == '' && s == '') {
                    this.errorClass = true;
                    return;
                }

                // 空值置0处理
                if (h == '') {
                    h = 0;
                }
                if (m == '') {
                    m = 0;
                }
                if (s == '') {
                    s = 0;
                }

                // 校验非负整数
                if (!(/(^[0-9]\d*$)/.test(h)) || !(/(^[0-9]\d*$)/.test(m)) || !(/(^[0-9]\d*$)/.test(s))) {
                    this.errorClass = true;
                    return;
                }

                // 时分秒转整
                h = parseInt(h);
                m = parseInt(m);
                s = parseInt(s);

                // 时分秒不能同时为0
                if (h == 0 && m == 0 && s == 0) {
                    this.errorClass = true;
                    return;
                }
            }

            // 大于60的数据格式化
            m += parseInt(s / 60);
            s %= 60;
            h += parseInt(m / 60);
            m %= 60;

            // 校验最多72小时
            if (h > 72) {
                this.errorClass = true;
                return;
            }
            if (h == 72 && (m != 0 || s != 0)) {
                this.errorClass = true;
                return;
            }

            // 判断起始时间 10分钟提示 1分钟警告
            var fontClassStr = '';
            if (h == 0 && m == 0) {
                fontClassStr = 'bg_r';
            } else if (h == 0 && m == 1 && s == 0) {
                fontClassStr = 'bg_r';
            } else if (h == 0 && m == 10 && s == 0) {
                fontClassStr = 'bg_o';
            } else if (h == 0 && m < 10) {
                fontClassStr = 'bg_o';
            }

            // 创建列表数据
            this.timeObj.list.push({ tit: tit, time: this.formatNum(h) + ':' + this.formatNum(m) + ':' + this.formatNum(s), fontClass: fontClassStr, btnText: '取消', isHide: false });

            // 取消错误提示
            this.errorClass = false;

            // 开始倒计时
            this.timeCount(h, m, s, this.timeObj.list[this.timeObj.list.length - 1], function(h, m, s, obj) {
                if (h == 0 && m == 10 && s == 0) {
                    obj.fontClass = 'bg_o';
                }
                if (h == 0 && m == 1 && s == 0) {
                    obj.fontClass = 'bg_r';
                }
                obj.time = vm.formatNum(h) + ':' + vm.formatNum(m) + ':' + vm.formatNum(s);
            })

            // 表单填充重置
            this.reset();
        },
        // 倒计时
        timeCount: function(h, m, s, obj, fn) {
            h = parseInt(h);
            m = parseInt(m);
            s = parseInt(s);

            var timer = setInterval(function() {
                if (s > 0) {
                    s--;
                } else if (m > 0) {
                    m--;
                    s = 59;
                } else if (h > 0) {
                    h--;
                    m = 59;
                    s = 59;
                }
                if (obj.isHide) {
                    clearInterval(timer);
                    vm.timeObj.list.splice(vm.timeObj.list.indexOf(obj), 1);
                    return;
                }
                if (h == 0 && m == 0 && s == 0) {
                    obj.time = '时间到';
                    obj.btnText = '关闭';
                    music.play();
                    vm.isShine = true;
                    clearInterval(timer);
                    return;
                }
                fn(h, m, s, obj);
            }, 1000);
        },
        // 重置
        reset: function() {
            this.timeObj.tit = this.timeObj.hour = this.timeObj.minute = this.timeObj.second = '';
            this.timeObj.pCheckNum = -1;
            this.errorClass = false;
        },
        // 提示音试听
        play: function() {
            music.play();
        }
    }
})
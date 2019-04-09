/**
 * @authors kk
 * @date    2019-04-08
 */

// 计次列表
var ListItem = {
    props: ['item'],
    template: '<li>计次{{item.id}}<span>间隔 {{item.interval}}</span><font class="flr">{{item.time}}</font></li>',
    methods: {}
}

var vm = new Vue({
    el: '#app',
    components: {
        ListItem: ListItem
    },
    data: {
        headerObj: {
            homeUrl: './index.html',
            logoImg: '../../images/footer_01.png',
            goListUrl: './index.html#toolList',
            goListBtn: '返回工具列表'
        },
        tit: '秒表',
        intro: '快速分段计次 · 精准计算间隔',
        timeObj: {
            hour_1: '00',
            minute_1: '00',
            second_1: '00',
            msec_1: '00',
            hour_2: '00',
            minute_2: '00',
            second_2: '00',
            msec_2: '00',
            clockState: 2, // 0开始 1暂停 2重置
            recordFlag: false,
            list: []
        },
        styleObj: {
            animation: 'rotate 15s infinite linear',
            animationPlayState: 'paused'
        }
    },
    mounted: function() {
        // 初始化content最小高度
        document.getElementById('list').style.height = (document.body.clientHeight - 635) + 'px';
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
        // 开始
        start: function() {
            if (this.timeObj.clockState == 0) {
                return;
            }

            var h_1 = parseInt(this.timeObj.hour_1);
            var m_1 = parseInt(this.timeObj.minute_1);
            var s_1 = parseInt(this.timeObj.second_1);
            var c_1 = parseInt(this.timeObj.msec_1);

            var h_2 = parseInt(this.timeObj.hour_2);
            var m_2 = parseInt(this.timeObj.minute_2);
            var s_2 = parseInt(this.timeObj.second_2);
            var c_2 = parseInt(this.timeObj.msec_2);

            this.timeObj.clockState = 0;
            this.styleObj.animation = 'rotate 15s infinite linear';
            this.styleObj.animationPlayState = 'running';

            var timer = setInterval(function() {
                if (c_1 < 99) {
                    c_1++;
                } else if (s_1 < 59) {
                    s_1++;
                    c_1 = 0;
                } else if (m_1 < 59) {
                    m_1++;
                    s_1 = c_1 = 0;
                } else if (h_1 < 59) {
                    h_1++;
                    m_1 = s_1 = c_1 = 0;
                }

                if (c_2 < 99) {
                    c_2++;
                } else if (s_2 < 59) {
                    s_2++;
                    c_2 = 0;
                } else if (m_2 < 59) {
                    m_2++;
                    s_2 = c_2 = 0;
                } else if (h_2 < 59) {
                    h_2++;
                    m_2 = s_2 = c_2 = 0;
                }

                vm.timeObj.hour_1 = vm.formatNum(h_1);
                vm.timeObj.minute_1 = vm.formatNum(m_1);
                vm.timeObj.second_1 = vm.formatNum(s_1);
                vm.timeObj.msec_1 = vm.formatNum(c_1);

                vm.timeObj.hour_2 = vm.formatNum(h_2);
                vm.timeObj.minute_2 = vm.formatNum(m_2);
                vm.timeObj.second_2 = vm.formatNum(s_2);
                vm.timeObj.msec_2 = vm.formatNum(c_2);

                if (vm.timeObj.clockState == 1) {
                    clearInterval(timer);
                } else if (vm.timeObj.clockState == 2) {
                    clearInterval(timer);
                    vm.timeObj.hour_1 = vm.timeObj.minute_1 = vm.timeObj.second_1 = vm.timeObj.msec_1 = '00';
                    vm.timeObj.hour_2 = vm.timeObj.minute_2 = vm.timeObj.second_2 = vm.timeObj.msec_2 = '00';
                    vm.timeObj.list.splice(0, vm.timeObj.list.length);
                }
                if (vm.timeObj.recordFlag) {
                    h_2 = m_2 = s_2 = c_2 = 0;
                    vm.timeObj.recordFlag = false;
                }
            }, 10);
        },
        // 暂停
        pause: function() {
            if (this.timeObj.clockState == 0) {
                this.timeObj.clockState = 1;
                this.styleObj.animationPlayState = 'paused';
            }
        },
        // 计次
        record: function() {
            if (this.timeObj.clockState == 0) {
                this.timeObj.list.unshift({ id: this.timeObj.list.length + 1, time: this.timeObj.hour_1 + ':' + this.timeObj.minute_1 + ':' + this.timeObj.second_1 + ':' + this.timeObj.msec_1, interval: this.timeObj.hour_2 + ':' + this.timeObj.minute_2 + ':' + this.timeObj.second_2 + ':' + this.timeObj.msec_2 });
                this.timeObj.recordFlag = true;
            }
        },
        // 重置
        reset: function() {
            if (this.timeObj.clockState == 2) {
                return;
            }
            if (this.timeObj.clockState == 1) {
                this.timeObj.hour_1 = this.timeObj.minute_1 = this.timeObj.second_1 = this.timeObj.msec_1 = '00';
                this.timeObj.hour_2 = this.timeObj.minute_2 = this.timeObj.second_2 = this.timeObj.msec_2 = '00';
                this.timeObj.list.splice(0, this.timeObj.list.length);
            }
            this.timeObj.clockState = 2;
            this.styleObj.animation = '';
        }
    }
})
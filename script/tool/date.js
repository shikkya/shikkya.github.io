/**
 * @authors kk
 * @date    2019-04-11
 */

// 小于等于1000的正整数
var reg = /^(?:1|[1-9][0-9]?|[1-9][0-9][0-9]?|1000)$/;

// 圆周率展示
// var ShowPiItem = {
//     props: ['item'],
//     template: '<div><p>小数点后第 {{(item - 1) * 50}} - {{item * 50}} 位：</p><p v-html="getPi((item - 1) * 50,item * 50)"></p></div>',
//     methods: {
//         getPi: function(start, end) {
//             var str = '';
//             for (var i = start; i < end; i += 5) {
//                 str += '<span>' + piStr.substring(i, i + 5) + '</span>';
//             }
//             return str;
//         }
//     }
// }

var vm = new Vue({
    el: '#app',
    // components: {
    //     ShowPiItem: ShowPiItem
    // },
    data: {
        headerObj: {
            homeUrl: './index.html',
            logoImg: '../../images/footer_01.png',
            goListUrl: './index.html#toolList',
            goListBtn: '返回工具列表'
        },
        tit: '日期计算',
        todayObj: {
            year: '',
            month: '',
            day: '',
            lunarY: '',
            lunarM: '',
            lunarD: ''
        },
        errorClass: false,
        inputVal_1: '',
        inputVal_2: '',
        inputVal_3: '',
        result_1: '?',
        result_2: '?'
    },
    watch: {
        // inputVal_1: function(val) {
        //     this.isErrorClass();
        //     if (val == '' || !reg.test(val)) {
        //         this.result_1 = '?';
        //     } else {
        //         var n = parseInt(val) - 1;
        //         this.result_1 = piStr[n];
        //     }
        // }
    },
    mounted: function() {
        // 初始化content最小高度
        document.getElementById('content').style.minHeight = (document.body.clientHeight - 220) + 'px';

        this.todayObj
    },
    methods: {
        // 判断是否标记错误提示
        isErrorClass: function() {
            if (this.inputVal_1 != '' && !reg.test(this.inputVal_1)) {
                this.errorClass = true;
                return;
            }
            if (this.inputVal_2 != '' && !reg.test(this.inputVal_2)) {
                this.errorClass = true;
                return;
            }
            if (this.inputVal_3 != '' && !reg.test(this.inputVal_3)) {
                this.errorClass = true;
                return;
            }
            this.errorClass = false;
        }
    }
})
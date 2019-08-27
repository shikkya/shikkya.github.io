/**
 * tool - pi
 * @authors shikkya
 * @date    2019-04-04
 * @version $Id$
 */

// 圆周率
var piStr = "1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989";

// 小于等于1000的正整数
var reg = /^(?:1|[1-9][0-9]?|[1-9][0-9][0-9]?|1000)$/;

// 圆周率展示
var ShowPiItem = {
    props: ['item'],
    template: '<div><p>小数点后第 {{(item - 1) * 50}} - {{item * 50}} 位：</p><p v-html="getPi((item - 1) * 50,item * 50)"></p></div>',
    methods: {
        getPi: function(start, end) {
            var str = '';
            for (var i = start; i < end; i += 5) {
                str += '<span>' + piStr.substring(i, i + 5) + '</span>';
            }
            return str;
        }
    }
}

var vm = new Vue({
    el: '#app',
    components: {
        ShowPiItem: ShowPiItem
    },
    data: {
        headerObj: {
            homeUrl: './index.html',
            logoImg: '../../images/footer_01.png',
            goListUrl: './index.html#toolList',
            goListBtn: '返回工具列表'
        },
        tit: '圆周率速算',
        errorClass: false,
        inputVal_1: '',
        inputVal_2: '',
        inputVal_3: '',
        result_1: '?',
        result_2: '?'
    },
    watch: {
        inputVal_1: function(val) {
            this.isErrorClass();
            if (val == '' || !reg.test(val)) {
                this.result_1 = '?';
            } else {
                var n = parseInt(val) - 1;
                this.result_1 = piStr[n];
            }
        },
        inputVal_2: function(val) {
            this.isErrorClass();
            if (val == '' || this.inputVal_3 == '' || !reg.test(val) || !reg.test(this.inputVal_3)) {
                this.result_2 = '?';
            } else {
                var n = parseInt(val) - 1;
                this.result_2 = parseInt(piStr[n]) + parseInt(this.inputVal_3);
            }
        },
        inputVal_3: function(val) {
            this.isErrorClass();
            if (val == '' || this.inputVal_2 == '' || !reg.test(val) || !reg.test(this.inputVal_2)) {
                this.result_2 = '?';
            } else {
                var n = parseInt(val) - 1;
                this.result_2 = parseInt(this.inputVal_2) + parseInt(piStr[n]);
            }
        }
    },
    mounted: function() {
        // 初始化content最小高度
        document.getElementById('content').style.minHeight = (document.body.clientHeight - 220) + 'px';
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
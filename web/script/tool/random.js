/**
 * @authors kk
 * @date    2019-04-23
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
        tit: '专治选择困难症',
        errorClass: false,
        titCheckNum: 0,
        foodObj: {
            tit: '今天吃什么',
            intro: '点击开始',
            breakfastList: ['???', '包子', '馄饨', '豆浆油条', '豆腐脑油条', '手抓饼'],
            lunchList: ['???', '盒饭', '汉堡', '水煮鱼', '麻辣烫']
        },
        numObj: {
            tit: '随机数字',
            intro: '随机'
        },
        diyObj: {
            tit: '自定义',
            intro: '自定义',
        }
    },
    watch: {

    },
    mounted: function() {
        // 初始化content最小高度
        document.getElementById('content').style.minHeight = (document.body.clientHeight - 220) + 'px';
    },
    methods: {
        // 点击标题切换
        titCheckClick: function(num) {
            this.titCheckNum = num;
        },
        // 随机数 包括min和max
        getRandom: function(min, max) {
            min = parseInt(min);
            max = parseInt(max);
            return (min + Math.round(Math.random() * (max - min)));
        }
    }
})
/**
 * tool - index
 * @authors shikkya
 * @date    2019-09-16
 * @version $Id$
 */

// 工具列表
var ToolItem = {
    props: ['item'],
    template: '<li @click="handleItemClick"><img src="../../images/tool_01.png" :data-src="\'../../images/\' + item.img"/><h3>{{item.tit}}</h3></li>',
    methods: {
        handleItemClick: function() {
            if (this.item.url == '') {
                alert('该工具只支持电脑版，请使用电脑浏览器访问~');
            } else {
                window.location.href = this.item.url;
            }
        }
    }
}

var vm = new Vue({
    el: '#app',
    components: {
        ToolItem: ToolItem
    },
    data: {
        tit: '便易工具 - SHIKKYA .',
        text: '更多精彩请使用电脑浏览器打开！',
        toolList: [
            { img: 'tool_02.png', tit: '在线量尺', url: '' }, // ./ruler.html
            { img: 'tool_03.png', tit: '圆周率速算', url: './pi.html' },
            { img: 'tool_04.png', tit: '日期各种算', url: '' }, // ./date.html
            { img: 'tool_05.png', tit: '专治选择困难症', url: '' }, // ./random.html
            { img: 'tool_06.png', tit: '倒数计时器', url: '' }, // ./countdown.html
            { img: 'tool_07.png', tit: '计时秒表', url: '' } // ./stopwatch.html
        ]
    },
    mounted: function() {
        // 加载图片
        loadImg();
    }
})
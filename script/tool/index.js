/**
 * @authors kk
 * @date    2019-04-01
 */

// 图片展示列表组件
var ToolItem = {
    props: ['item'],
    template: '<li @click="window.open(item.url)"><div><img src="../../images/tool_04.png" :data-src="\'../../images/\' + item.img"/><h3>{{item.tit}}</h3></div><p v-html="item.text"></p></li>'
}

var vm = new Vue({
    el: '#app',
    components: {
        ToolItem: ToolItem
    },
    data: {
        homeUrl: './index.html',
        logoImg: '../../images/tool_01.png',
        productList: productList,
        topObj: {
            bgImgInit: '../../images/tool_03.png',
            bgImg: '../../images/tool_02.png',
            tit: '便易工具在线使用',
            text: '网页在线随处可用 · 无需登录即开即用 · 无需下载省时省力 · 无需安装方便快捷',
            btnText: '全部工具',
            btnUrl: '#toolList'
        },
        toolObj: {
            tit: '工具列表',
            text: '点击可进入工具使用页 · 返回首页查看全部工具',
            list: [
                { img: 'tool_07.png', tit: '在线尺子', text: '根据屏幕尺寸和分辨率生成度量尺<br/>无实物精准便捷化测量', url: './ruler.html' },
                { img: 'tool_05.png', tit: '圆周率速算', text: '我是简介我是简介', url: '' },
                { img: 'tool_05.png', tit: '闹钟', text: '我是简介我是简介', url: '' },
                { img: 'tool_05.png', tit: '计时器', text: '我是简介我是简介', url: '' },
                { img: 'tool_05.png', tit: '秒表', text: '我是简介我是简介', url: '' },
                { img: 'tool_05.png', tit: '日期计算', text: '我是简介我是简介', url: '' }

            ]
        }
    },
    mounted: function() {
        // 加载图片
        loadImg();
    }
})
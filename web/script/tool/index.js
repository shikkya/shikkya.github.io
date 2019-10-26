/**
 * tool - index
 * @authors shikkya
 * @date    2019-04-01
 * @version $Id$
 */

// 图片展示列表
var ToolItem = {
    props: ['item'],
    template: '<li @click="vm.checkList(item.url)"><div><img src="../../images/tool_04.png" :data-src="\'../../images/\' + item.img"/><h3>{{item.tit}}</h3></div><p v-html="item.text"></p></li>'
}

var vm = new Vue({
    el: '#app',
    components: {
        ToolItem: ToolItem
    },
    data: {
        logoImg: '../../images/tool_01.png',
        curIndex: '2',
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
            text: '点击进入工具使用页 · 返回首页查看全部工具',
            list: toolList
        }
    },
    mounted: function() {
        // 加载图片
        loadImg();
    },
    methods: {
        // 点击工具列表
        checkList: function(url) {
            if (url == '') {
                alert('努力开发中,敬请期待~');
                return;
            }
            window.open(url);
        }
    }
})
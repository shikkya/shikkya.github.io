/**
 * tool - index
 * @authors shikkya
 * @date    2019-09-16
 * @version $Id$
 */

// 工具列表
var ToolItem = {
    props: ['index', 'toollist'],
    template: '<li v-if="index%2==0"><div @click="handleItemClick(index)"><img src="../../images/tool_01.png" :data-src="\'../../images/\' + toollist[index].img"/><h3>{{toollist[index].tit}}</h3></div><div v-if="index+1<toollist.length" @click="handleItemClick(index+1)"><img src="../../images/tool_01.png" :data-src="\'../../images/\' + toollist[index+1].img"/><h3>{{toollist[index+1].tit}}</h3></div></li>',
    methods: {
        handleItemClick: function(index) {
            if (this.toollist[index].isMobile) {
                window.location.href = this.toollist[index].url;
            } else {
                alert('该工具只支持电脑版，请使用电脑浏览器访问~');
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
        headerObj: {
            tit: '便易工具',
            text: '更多精彩请使用电脑浏览器打开！',
            pageType: 'home'
        },
        toolList: toolList
    },
    mounted: function() {
        // 加载图片
        loadImg();
    }
})
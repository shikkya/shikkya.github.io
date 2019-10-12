/**
 * code - index
 * @authors shikkya
 * @date    2019-10-08
 * @version $Id$
 */

// 工具列表
var CodeItem = {
    props: ['item'],
    template: '<li @click="handleItemClick"><img src="../../images/code_01.png" :data-src="\'../../../res/code/\' + item.id + \'/shikkya.png\'"/><h3>{{item.tit}}</h3><p><i class="icon iconfont icon-tag"></i><span v-for="iteminner in item.keyWord">{{iteminner}}</span></p></li>',
    methods: {
        handleItemClick: function() {
            window.location.href = './detail.html?codeId=' + this.item.id;
        }
    }
}

var vm = new Vue({
    el: '#app',
    components: {
        CodeItem: CodeItem
    },
    data: {
        tit: '特效码集 - SHIKKYA .',
        text: '更多精彩请使用电脑浏览器打开！',
        codeList: codeList
    },
    mounted: function() {
        // 加载图片
        loadImg();
    }
})
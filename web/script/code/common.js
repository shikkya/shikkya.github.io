/**
 * code
 * @authors shikkya
 * @date    2019-07-13
 * @version $Id$
 */

// 列表组件
var codeItem = {
    props: ['item'],
    template: '<li @click="handleItemClick"><img src="../../images/wallpaper_04.png" :data-src="\'../../../res/code/\' + item.id+ \'/shikkya.png\'"/><h3 :title="item.tit">{{item.tit}}</h3><p><i class="icon iconfont icon-tag"></i><span v-for="iteminner in item.keyWord">{{iteminner}}</span></p></li>',
    methods: {
        handleItemClick: function() {
            window.open('./detail.html?codeId=' + this.item.id);
        }
    }
}
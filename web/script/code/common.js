/**
 * @authors kk
 * @date    2019-07-13
 */

// 列表组件
var PicItem = {
    props: ['item', 'loadimg'],
    template: '<li @click="handleItemClick"><img :src="loadimg" :data-src="\'../../../res/code/\' + item.id+ \'/shikkya.png\'"/><h3 :title="item.tit">{{item.tit}}</h3><p><i class="icon iconfont icon-tag"></i><span v-for="iteminner in item.keyWord">{{iteminner}}</span></p></li>',
    methods: {
        handleItemClick: function() {
            window.open('./detail.html?codeId=' + this.item.id);
        }
    }
}

// 所有数据 [ chrome, firefox, safari, opera, tencent, se360, ie8, ie11 ]  [ Android, Ios, WeChat ]
// ,{ id: '002', tit: '', type: '其他', keyWord: [], intro: '', compatible: ['', '', '', '', '', '', '', ''], comMobile: ['', '', ''] }
var picList = [
    { id: '001', tit: '容器内拖拽分割线自由分配左右空间', type: '其他', keyWord: ['拖拽', 'js'], intro: '<p>1、分割线宽度占位</p><p>2、左右两部分的最小宽度一致，可为0</p>', compatible: ['1', '1', '0', '', '1', '1', '', '1'], comMobile: ['', '', ''] },
    { id: '002', tit: '数字滚动增值插件countUp.js', type: '其他', keyWord: ['数字', '滚动', '跳数', 'js'], intro: '', compatible: ['', '', '', '', '', '', '', ''], comMobile: ['', '', ''] }
];
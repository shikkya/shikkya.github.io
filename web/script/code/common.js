/**
 * @authors kk
 * @date    2019-07-13
 */


/*
{ id: '001', tit: '纯CSS实现鼠标经过图片特效炫酷切换动画', type: '影视,明星', intro: '', keyWord: '聂倾城,李一桐', chrome: '', firefox: '', se360: '', tencent: '', sogou: '', opera: '', safari: '', ie: '' }
 */


// 列表组件
var PicItem = {
    props: ['item', 'loadimg'],
    template: '<li @click="handleItemClick"><img :src="loadimg" :data-src="\'../../images/code/\' + item.id+ \'.png\'"/><h3 :title="item.tit">{{item.tit}}</h3><p><i class="icon iconfont icon-tag"></i><span v-for="(iteminner,index) in item.keyWord">{{iteminner}}</span></p></li>',
    methods: {
        handleItemClick: function() {
            window.open('./detail.html?codeId=' + this.item.id);
        }
    }
}

// 所有数据
var picList = [
    { id: '001', tit: '容器内拖拽分割线自由分配左右空间', type: '其他', keyWord: ['拖拽', 'js'], intro: '说明' },
    { id: '002', tit: '这是一条测试数据', type: '其他', keyWord: ['测试'], intro: '说明' },
    { id: '003', tit: '这是一条测试数据这是一条测试数据这是一条测试数据', type: '其他', keyWord: ['测试'], intro: '说明' },
    { id: '004', tit: '这是一条测试数据', type: '其他', keyWord: ['测试'], intro: '说明' },
    { id: '005', tit: '这是一条测试数据', type: '其他', keyWord: ['测试'], intro: '说明' },
    { id: '006', tit: '这是一条测试数据', type: '其他', keyWord: ['测试'], intro: '说明' }
];
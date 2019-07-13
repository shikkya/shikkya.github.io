/**
 * @authors kk
 * @date    2019-07-13
 */

// 图片展示列表组件
// var PicItem = {
//     props: ['item'],
//     template: '<li><img src="../../images/wallpaper_04.png" :data-src="\'../../images/wallpaper/\' + item.img"/><h3>{{item.tit}}</h3><p>1920 x 1080</p><a class="btn" :href="\'../../images/wallpaper_1920x1080/\' + item.img"  download="">下载</a></li>'
// }

var vm = new Vue({
    el: '#app',
    components: {
        PicItem: PicItem
    },
    data: {
        homeUrl: './index.html',
        logoImg: '../../images/code_01.png',
        productList: productList,
        topObj: {
            img: '../../images/code_02.png',
            tit: '特效码集演示下载',
            text: '纯前端代码页面特效 · 多浏览器兼容在线演示 · 全部开源一键下载'
        },
        picObj: {
            tit: '最新特效',
            moreUrl: './list.html',
            loadImg: '../../images/wallpaper_04.png',
            list: [
                { id: '001', tit: '容器内拖拽分割线自由分配左右空间', type: '其他', keyWord: ['拖拽', 'js'], intro: '说明' },
                { id: '002', tit: '这是一条测试数据', type: '其他', keyWord: ['测试'], intro: '说明' },
                { id: '003', tit: '这是一条测试数据这是一条测试数据这是一条测试数据', type: '其他', keyWord: ['测试'], intro: '说明' },
                { id: '004', tit: '这是一条测试数据', type: '其他', keyWord: ['测试'], intro: '说明' },
                { id: '005', tit: '这是一条测试数据', type: '其他', keyWord: ['测试'], intro: '说明' },
                { id: '006', tit: '这是一条测试数据', type: '其他', keyWord: ['测试'], intro: '说明' }
            ]
        }
    },
    computed: {
        picText: function() {
            return '点击进入特效详情页 · 点击<a href="' + this.picObj.moreUrl + '">更多</a>浏览全部特效';
        }
    },
    mounted: function() {
        // 加载图片
        loadImg();
    }
})
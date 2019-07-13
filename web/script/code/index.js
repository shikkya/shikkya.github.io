/**
 * @authors kk
 * @date    2019-07-13
 */

// 图片展示列表组件
var PicItem = {
    props: ['item'],
    template: '<li><img src="../../images/wallpaper_04.png" :data-src="\'../../images/wallpaper/\' + item.img"/><h3>{{item.tit}}</h3><p>1920 x 1080</p><a class="btn" :href="\'../../images/wallpaper_1920x1080/\' + item.img"  download="">下载</a></li>'
}

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
            list: [
                { img: '037.png', tit: '僵小鱼' },
                { img: '017.png', tit: '你和我的倾城时光' },
                { img: '035.png', tit: '夏至未至' },
                { img: '018.png', tit: '三生三世十里桃花' },
                { img: '029.png', tit: '无心法师' },
                { img: '025.png', tit: '微微一笑很倾城' },
                { img: '012.png', tit: '高能少年团' },
                { img: '001.png', tit: 'By2《成人礼》' },
                { img: '011.png', tit: '浪花一朵朵' }
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
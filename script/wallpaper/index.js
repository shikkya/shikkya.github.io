/**
 * @authors kk
 * @date    2019-03-16
 */

// 头部
var vmHeader = new Vue({
    el: '#header',
    data: {
        homeUrl: './index.html',
        logoImg: '../../images/wallpaper_01.png',
        list: productList
    }
})

// 图片展示列表组件
var PicItem = {
    props: ['item'],
    template: '<li><img src="../../images/wallpaper_04.png" :data-src="\'../../images/wallpaper/\' + item.img"/><h3>{{item.tit}}</h3><p>1920 x 1080</p><a class="btn" :href="\'../../images/wallpaper_1920x1080/\' + item.img"  download="">下载</a></li>'
}

// 主体
var vmContent = new Vue({
    el: '#content',
    components: {
        PicItem: PicItem
    },
    data: {
        topObj: {
            img: '../../images/wallpaper_02.png',
            tit: '模板壁纸高清下载',
            // text: '浏览图库下载心仪壁纸 · 上传素材在线合成专属壁纸 · 让你的桌面更加方便实用'
            text: '浏览图库下载模板壁纸 · 搜索关键字寻找心仪壁纸 · 让你的桌面更加方便实用'
        },
        picObj: {
            tit: '壁纸图库',
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
            return '点击下载获取模板壁纸 · 点击<a href="' + this.picObj.moreUrl + '">更多</a>浏览全部壁纸';
        }
    }
})
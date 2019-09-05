/**
 * home - index
 * @authors shikkya
 * @date    2019-09-04
 * @version $Id$
 */

var vm = new Vue({
    el: '#app',
    data: {
        logoImg: '../../images/home_02.png',
        curIndex: -1,
        productList: [
            { tit: '模板壁纸', img: 'home_03.png', url: '../wallpaper/index.html' },
            { tit: '便易工具', img: 'home_04.png', url: '../tool/index.html' },
            { tit: '特效码集', img: 'home_05.png', url: '../code/index.html' }
        ]
    },
    mounted: function() {
        // 加载图片
        loadImg();
    },
    methods: {
        // 点击图片
        checkType: function(index) {
            this.curIndex = this.curIndex == index ? -1 : index;
        }
    }
})
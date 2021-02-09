/**
 * home - index
 * @authors shikkya
 * @date    2019-03-12
 * @version $Id$
 */

var TypeItem = {
    props: ['content', 'index'],
    template: '<div :class="\'type type_\'+index"><img src="../../images/home_02.png" :data-src="\'../../images/\'+content.img"/><a :href="content.url">{{content.tit}}</a></div>',
    methods: {}
}

var vm = new Vue({
    el: '#app',
    components: {
        TypeItem: TypeItem
    },
    data: {
        titVal: 'Welcome To Know About Shikkya',
        list: [
            { tit: '模板壁纸', url: '../wallpaper/index.html', img: 'home_03.png' },
            { tit: '便易工具', url: '../tool/index.html', img: 'home_04.png' },
            { tit: '特效码集', url: '../code/index.html', img: 'home_05.png' },
            { tit: '敬请期待', url: '', img: 'home_06.png' }
        ]
    },
    mounted: function() {
        // 加载图片
        loadImg();
    },
    methods: {}
})
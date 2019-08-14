/**
 * @authors kk
 * @date    2019-03-12
 */

var TypeItem = {
    props: ['content', 'index'],
    template: '<div :class="\'type type_\'+index"><img :src="\'../images/\'+content.imgName"/><a :href="content.url">{{content.text}}</a></div>',
    methods: {}
}

var vm = new Vue({
    el: '#content',
    components: {
        TypeItem: TypeItem
    },
    data: {
        titVal: 'Welcome To Know About Shikkya',
        list: [
            { imgName: 'index_11.png', text: '模板壁纸', url: './wallpaper/index.html' },
            { imgName: 'index_07.png', text: '便易工具', url: './tool/index.html' },
            { imgName: 'index_06.png', text: '特效码集', url: './code/index.html' },
            { imgName: 'index_10.png', text: '敬请期待', url: '' }
        ]
    },
    methods: {}
})
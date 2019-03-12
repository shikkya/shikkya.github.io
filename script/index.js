/**
 * @authors kk
 * @date    2019-03-12
 */

var TypeItem = {
    props: ['content', 'index'],
    template: '<div :class="\'type type_\'+index"><img :src="\'./images/\'+content.imgName"/><a :href="content.url">{{content.text}}</a></div>',
    methods: {}
}

var vm = new Vue({
    el: '#typeOut',
    components: {
        TypeItem: TypeItem
    },
    data: {
        list: [
            { imgName: 'index_11.png', text: '可可炸飞机', url: '' },
            { imgName: 'index_07.png', text: '可可美记', url: '' },
            { imgName: 'index_06.png', text: '倒计时', url: '' },
            { imgName: 'index_10.png', text: '圆周率', url: '' }
        ]
    },
    methods: {}
})
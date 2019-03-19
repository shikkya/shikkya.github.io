/**
 * @authors kk
 * @date    2019-03-18
 */

var vmFooter = new Vue({
    el: '#footer',
    template:'<div id="footer" class="footer" v-cloak><ul><li><img :src="logoImg"/></li><li><p>客服QQ：125048224</p><p>意见反馈：shikkya@qq.com</p></li></ul></div>',
    data: {
         logoImg: '../../images/footer_01.png'
    },
    methods: {}
})
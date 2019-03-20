/**
 * @authors kk
 * @date    2019-03-18
 */

// 页脚
var vmFooter = new Vue({
    el: '#footer',
    template: '<div id="footer" class="footer" v-cloak><ul><li><img :src="logoImg"/></li><li><p>客服QQ：125048224</p><p>意见反馈：shikkya@qq.com</p></li></ul></div>',
    data: {
        logoImg: '../../images/footer_01.png'
    }
})

// 暂无信息组件
Vue.component("NoInfoItem", {
    template: '<div id="noInfo" class="no_info"><img src="../../images/wallpaper_03.png"/><p>暂时没有哦 ~ 看看其他的吧</p></div>'
})

// 返回顶部
Vue.component("GoTopItem", {
    template: '<div id="goTop" class="go_top" @click="goTop"><i class="fa fa-angle-up" aria-hidden="true"></i></div>'
})

// 返回顶部
function goTop() {
    clearInterval(timer);
    var timer = setInterval(function() {
        var target = document.documentElement.scrollTop;
        target -= Math.ceil(target / 10);
        window.scrollTo(0, target);
        if (target <= 0) {
            clearInterval(timer);
        }
    }, 10);
};
/**
 * code - detail
 * @authors shikkya
 * @date    2019-10-09
 * @version $Id$
 */

var vm = new Vue({
    el: '#app',
    data: {
        tit: '特效码集 - SHIKKYA .',
        text: '使用电脑浏览器访问可免费下载源码！'
    },
    computed: {
        dataObj: function() {
            var codeId = getUrlStr('codeId');
            for (var i = 0; i < codeList.length; i++) {
                if (codeList[i].id == codeId) {
                    var dataObj = codeList[i];
                    break;
                }
            }
            return dataObj;
        }
    },
    mounted: function() {
        // 加载图片
        loadImg();
    },
    methods: {
        // 检查是否支持移动端在线演示
        checkOnline: function() {
            console.log(this.dataObj.comMobile);
            for (var i = 0; i < this.dataObj.comMobile.length; i++) {
                if (this.dataObj.comMobile[i] == '1') {
                    window.location.href = '../../../res/code/' + this.dataObj.id + '/index.html';
                    return false;
                }
            }
            alert('此插件不支持移动端，请使用电脑浏览器！');
        }
    }
})
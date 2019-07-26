/**
 * @authors kk
 * @date    2019-07-16
 */

// 根据url中的codeId获取对象数据
var codeId = getUrlStr('codeId');
for (var i = 0; i < picList.length; i++) {
    if (picList[i].id == codeId) {
        var dataObj = picList[i];
        break;
    }
}

var vm = new Vue({
    el: '#app',
    data: {
        headerObj: {
            homeUrl: './index.html',
            logoImg: '../../images/footer_01.png',
            goListUrl: './list.html',
            goListBtn: '返回特效列表'
        },
        dataObj: dataObj
    },
    mounted: function() {
        // 初始化content最小高度
        document.getElementById('content').style.minHeight = (document.body.clientHeight - 155) + 'px';

        // 加载图片
        loadImg();
    },
    methods: {
        // 
        getDataObj: function() {

        }
    }
})
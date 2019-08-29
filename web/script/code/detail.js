/**
 * code - detail
 * @authors shikkya
 * @date    2019-07-16
 * @version $Id$
 */

var vm = new Vue({
    el: '#app',
    data: {},
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
        // 
        getDataObj: function() {

        }
    }
})
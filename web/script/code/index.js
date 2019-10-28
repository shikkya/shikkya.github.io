/**
 * code - index
 * @authors shikkya
 * @date    2019-07-13
 * @version $Id$
 */

var vm = new Vue({
    el: '#app',
    components: {
        codeItem: codeItem
    },
    data: {
        logoImg: '../../images/code_01.png',
        curIndex: '3',
        topObj: {
            img: '../../images/code_02.png',
            tit: '特效码集演示下载',
            text: '纯前端代码页面特效 · 多浏览器兼容在线演示 · 全部开源一键下载'
        },
        codeObj: {
            tit: '最新特效',
            moreUrl: './list.html',
            list: ['010', '005', '008', '007', '002', '001']
        }
    },
    computed: {
        codeText: function() {
            return '点击进入特效详情页 · 点击<a href="' + this.codeObj.moreUrl + '">更多</a>浏览全部特效';
        },
        codeShowList: function() {
            var tempList = new Array();
            for (var i = 0; i < this.codeObj.list.length; i++) {
                var num = parseInt(this.codeObj.list[i]) - 1;
                tempList[i] = codeList[num];
            }
            return tempList;
        }
    },
    mounted: function() {
        // 加载图片
        loadImg();
    }
})
/**
 * code - list
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
        homeUrl: './index.html',
        logoImg: '../../images/code_01.png',
        searchVal: '',
        typeList: ['全部', '插件', '特效', '功能', '其他'],
        curType: '0',
        curkeyWord: '',
        isNoInfo: false,
        codeShowList: codeList
    },
    computed: {
        resultNum: function() {
            return this.codeShowList.length;
        }
    },
    watch: {
        codeShowList: function() {
            this.$nextTick(function() {
                loadImg();
            });
        }
    },
    mounted: function() {
        // 加载图片
        loadImg();
        // 文本框获焦时回车触发检索
        document.onkeypress = function(e) {
            if (e.which == 13 && document.getElementById('searchInput') == document.activeElement) {
                vm.search();
            }
        }
    },
    methods: {
        // 头部搜索
        search: function() {
            var tempType = '';
            if (this.curType != '0') {
                tempType = this.typeList[this.curType];
            }
            this.isNoInfo = false;
            this.codeShowList = [];
            for (var i = 0; i < codeList.length; i++) {
                if (codeList[i].type.indexOf(tempType) > -1 && (codeList[i].type.indexOf(this.searchVal) > -1 || codeList[i].tit.indexOf(this.searchVal) > -1 || codeList[i].keyWord.indexOf(this.searchVal) > -1)) {
                    this.codeShowList.push(codeList[i]);
                }
            }
            if (this.codeShowList.length == 0) {
                this.isNoInfo = true;
            }
            goTop();
            this.curkeyWord = this.searchVal;
            this.searchVal = '';
        },
        // 选择分类
        changeType: function(item, index) {
            var tempType = '';
            if (item != '全部') {
                tempType = item;
            }
            this.isNoInfo = false;
            this.codeShowList = [];
            for (var i = 0; i < codeList.length; i++) {
                if (codeList[i].type.indexOf(tempType) > -1 && (codeList[i].type.indexOf(this.curkeyWord) > -1 || codeList[i].tit.indexOf(this.curkeyWord) > -1 || codeList[i].keyWord.indexOf(this.curkeyWord) > -1)) {
                    this.codeShowList.push(codeList[i]);
                }
            }
            if (this.codeShowList.length == 0) {
                this.isNoInfo = true;
            }
            goTop();
            this.curType = index;
        },
        // 删除检索条件-回到全部
        delSearch: function() {
            this.curkeyWord = '';
            this.changeType(this.typeList[this.curType], this.curType);
        }
    }

})
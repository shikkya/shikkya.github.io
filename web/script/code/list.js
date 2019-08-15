/**
 * @authors kk
 * @date    2019-07-13
 */

var vm = new Vue({
    el: '#app',
    components: {
        PicItem: PicItem
    },
    data: {
        homeUrl: './index.html',
        logoImg: '../../images/wallpaper_01.png',
        searchVal: '',
        typeList: ['全部', '插件', '特效', '功能', '其他'],
        curType: '0',
        curkeyWord: '',
        isNoInfo: false,
        picLoadImg: '../../images/wallpaper_04.png',
        picShowList: picList
    },
    computed: {
        resultNum: function() {
            return this.picShowList.length;
        }
    },
    watch: {
        picShowList: function() {
            this.$nextTick(function() {
                loadImg();
            });
        }
    },
    mounted: function() {
        // 初始化content最小高度
        document.getElementById('content').style.minHeight = (document.body.clientHeight - 240) + 'px';
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
            this.picShowList = [];
            for (var i = 0; i < picList.length; i++) {
                if (picList[i].type.indexOf(tempType) > -1 && (picList[i].type.indexOf(this.searchVal) > -1 || picList[i].tit.indexOf(this.searchVal) > -1 || picList[i].keyWord.indexOf(this.searchVal) > -1)) {
                    this.picShowList.push(picList[i]);
                }
            }
            if (this.picShowList.length == 0) {
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
            this.picShowList = [];
            for (var i = 0; i < picList.length; i++) {
                if (picList[i].type.indexOf(tempType) > -1 && (picList[i].type.indexOf(this.curkeyWord) > -1 || picList[i].tit.indexOf(this.curkeyWord) > -1 || picList[i].keyWord.indexOf(this.curkeyWord) > -1)) {
                    this.picShowList.push(picList[i]);
                }
            }
            if (this.picShowList.length == 0) {
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
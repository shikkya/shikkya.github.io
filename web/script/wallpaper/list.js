/**
 * wallpaper - list
 * @authors shikkya
 * @date    2019-03-18
 * @version $Id$
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
        typeList: ['全部', '萌宠', '动漫', '影视', '明星', '其他'],
        sizeList: ['1920x1080', '1440x900', '1366x768'],
        curType: '0',
        curSize: '1920x1080',
        curkeyWord: '',
        isNoInfo: false,
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
        // 设置最小高度
        setContentMinHei(240);
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
        // 选择分辨率
        changeSize: function(item) {
            this.curSize = item;
        },
        // 删除检索条件-回到全部
        delSearch: function() {
            this.curkeyWord = '';
            this.changeType(this.typeList[this.curType], this.curType);
        }
    }
})
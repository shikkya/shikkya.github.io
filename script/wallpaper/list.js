/**
 * @authors kk
 * @date    2019-03-18
 */

// 初始化content最小高度
document.getElementById('content').style.minHeight = (document.body.clientHeight - 240) + 'px';

// 文本框获焦时回车触发检索
document.onkeypress = function(e) {
    if (e.which == 13 && document.getElementById('searchInput') == document.activeElement) {
        vmHeader.search();
    }
}

// 头部
var vmHeader = new Vue({
    el: '#header',
    data: {
        homeUrl: './index.html',
        logoImg: '../../images/wallpaper_01.png',
        searchVal: ''
    },
    methods: {
        // 搜索
        search: function() {
            var tempType = '';
            if (vmContent.curType != '0') {
                tempType = vmContent.typeList[vmContent.curType];
            }
            vmContent.isNoInfo = false;
            vmContent.picShowList = [];
            for (var i = 0; i < picList.length; i++) {
                if (picList[i].type.indexOf(tempType) > -1 && (picList[i].type.indexOf(this.searchVal) > -1 || picList[i].tit.indexOf(this.searchVal) > -1 || picList[i].keyWord.indexOf(this.searchVal) > -1)) {
                    vmContent.picShowList.push(picList[i]);
                }
            }
            if (vmContent.picShowList.length == 0) {
                vmContent.isNoInfo = true;
            }
            goTop();
            vmContent.curkeyWord = this.searchVal;
            this.searchVal = '';
        }
    }
})

// 图片展示列表组件
var PicItem = {
    props: ['item', 'size', 'loadimg'],
    template: '<li><img :src="loadimg" :data-src="\'../../images/wallpaper/\' + item.img"/><h3>{{item.tit}}</h3><p>{{size}}</p><a class="btn" :href="\'../../images/wallpaper_\' + size + \'/\' + item.img"  download="">下载</a></li>'
}

// 主体
var vmContent = new Vue({
    el: '#content',
    components: {
        PicItem: PicItem
    },
    data: {
        typeList: ['全部', '萌宠', '植物', '风景', '动漫', '影视', '明星', '其他'],
        sizeList: ['1920x1080', '1440x900', '1366x768'],
        curType: '0',
        curSize: '1920x1080',
        curkeyWord: '',
        isNoInfo: false,
        picLoadImg: '../../images/wallpaper_04.png',
        picShowList: picList
    },
    methods: {
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
    }
})
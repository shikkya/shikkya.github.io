/**
 * wallpaper - index
 * @authors shikkya
 * @date    2019-03-16
 * @version $Id$
 */

var vm = new Vue({
    el: '#app',
    components: {
        PicItem: PicItem
    },
    data: {
        logoImg: '../../images/wallpaper_01.png',
        curIndex: '1',
        curSize: '1920x1080',
        topObj: {
            img: '../../images/wallpaper_02.png',
            tit: '模板壁纸高清下载',
            // text: '浏览图库下载心仪壁纸 · 上传素材在线合成专属壁纸 · 让你的桌面更加方便实用'
            text: '浏览图库下载模板壁纸 · 搜索关键字寻找心仪壁纸 · 让你的桌面更加方便实用'
        },
        picObj: {
            tit: '最新壁纸',
            moreUrl: './list.html',
            list: ['017', '035', '025', '018', '037', '029', '012', '001', '011', '014', '033', '022']
        }
    },
    computed: {
        picText: function() {
            return '点击下载获取模板壁纸 · 点击<a href="' + this.picObj.moreUrl + '">更多</a>浏览全部壁纸';
        },
        picShowList: function() {
            var tempList = new Array();
            for (var i = 0; i < this.picObj.list.length; i++) {
                var num = parseInt(this.picObj.list[i]) - 1;
                tempList[i] = {
                    'img': picList[num].img,
                    'tit': picList[num].tit
                }
            }
            return tempList;
        }
    },
    mounted: function() {
        // 加载图片
        loadImg();
    }
})
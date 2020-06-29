/**
 * wallpaper - index
 * @authors shikkya
 * @date    2019-08-29
 * @version $Id$
 */

var vm = new Vue({
    el: '#app',
    data: {
        headerObj: {
            tit: '模板壁纸',
            text: '更多精彩请使用电脑浏览器打开！',
            pageType: 'home'
        },
        picList: [
            { img: '001.jpg', type: '卡通,文字', tit: '萌混过关', keyWord: '鸭子,动物' },
            { img: '002.jpg', type: '卡通', tit: 'Kanahei', keyWord: '鸭子,动物' },
            { img: '003.jpg', type: '卡通', tit: '背影', keyWord: '剪刀手' },
            { img: '004.jpg', type: '卡通', tit: '天灯', keyWord: '孔明灯,许愿灯,鸟,喜鹊,月亮' },
            { img: '005.jpg', type: '其他', tit: '色域', keyWord: '色彩,颜色,砖' },
            { img: '006.jpg', type: '水果', tit: '青涩', keyWord: '柠檬,青柠,橘子,青桔' },
            { img: '007.jpg', type: '卡通,文字', tit: '睡到自然醒', keyWord: '猫咪,愿望,动物' },
            { img: '008.jpg', type: '卡通', tit: '河马不哭', keyWord: '动物' },
            { img: '009.jpg', type: '其他', tit: '乘风看浪', keyWord: '荡秋千,浪花,海,水' },
            { img: '010.jpg', type: '卡通', tit: '雨季的故事', keyWord: '狐狸,动物,仙人掌,植物,下雨,撑伞,打伞' },
            { img: '011.jpg', type: '文字', tit: '我想说', keyWord: '懒惰,粉笔' },
            { img: '012.jpg', type: '卡通,文字', tit: '有点健忘', keyWord: '回忆,女孩' },
            { img: '013.jpg', type: '卡通,文字', tit: '远离小人', keyWord: '动物,猫咪,老鼠' },
            { img: '014.jpg', type: '卡通,文字', tit: '世界那么大', keyWord: '地球仪,世界,地图' },
            { img: '015.jpg', type: '水果,文字', tit: 'SUMMER', keyWord: '夏日,夏天,西瓜,冰淇淋,雪糕' }
        ]
    },
    mounted: function() {
        // 加载图片
        loadImg();
    }
})
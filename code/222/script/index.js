/**
 * index.html
 * @authors shikkya
 * @date    2021-05-18
 * @version $Id$
 */

$(function () {
    var self = this;

    this.createEvent = function () {

        // 监听滚动条滚动指定分类当前分类按钮高亮
        $('#roll').scroll(function () {
            // 获取当前滚动条的位置
            var FaceScrollTop = $('#roll').scrollTop();
            var h = 0;
            // 根据对应的表情分类滚动到分类列表
            if (FaceScrollTop >= '0' && FaceScrollTop < $('.con').eq(0).height()) {
                $(".bottom>span").eq(0).addClass('show').siblings().removeClass('show');
            } else {
                for (v = 0; v < $('.con').length; v++) {
                    // 获取当前目录之前高度的总和
                    h += $(".con").eq(v).height();
                    // 获取当前高度总和 再加上下个目录的高度
                    var HighTotal = h + $(".con").eq(v + 1).height();
                    // 判断滚动位置是否在总和之间
                    if (FaceScrollTop >= h && FaceScrollTop < HighTotal) {
                        $(".bottom>span").eq(v + 1).addClass('show').siblings().removeClass('show');
                    }
                }
            }
        });

        // 表情切换
        $(".bottom>span").click(function () {
            // 获取当前点击的是第几组表情分类
            var DivIndex = $(".bottom>span").index(this);
            var h = 0;
            // 根据对应的表情分类滚动到分类列表
            if (DivIndex == '0') {
                // 如果点击第一个按钮，直接到达顶部
                $('#roll').animate({ scrollTop: 0 }, 800);
            } else {
                // 点击哪个按钮，滚动前面区域的总高度
                for (i = 0; i < DivIndex; i++) {
                    // 获取当前目录之前高度的总和
                    h += $(".con").eq(i).height();
                    if (i == DivIndex - 1) {
                        $('#roll').animate({ scrollTop: h }, 800);
                    }
                }
            }
        });
    }

    this.init = function () {
        self.createEvent();
    }

    self.init();
})

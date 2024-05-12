/**
 * index.html
 * @authors shikkya
 * @date    2021-03-05
 * @version $Id$
 */

$(function () {
    var self = this;

    $('body').on('click', function (e) {
        self.createHeart(e);
    })

    // 创建元素
    this.createHeart = function (event) {
        var divObj = $('<div>', {
            class: 'heart',
            css: {
                left: event.clientX + 10,
                top: event.clientY,
                background: self.randomColor()
            }
        }).appendTo('body');

        setTimeout(function () {
            $(divObj).remove();
        }, 1500);
    }

    // 随机颜色
    this.randomColor = function () {
        return 'rgb(' + (~~(Math.random() * 255)) + ',' + (~~(Math.random() * 255)) + ',' + (~~(Math.random() * 255)) + ')';
    }
});
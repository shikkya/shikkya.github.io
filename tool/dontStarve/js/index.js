/**
 * index.html
 * @authors shikkya
 * @date 2023-11-01
 */

$(function () {

    var self = this;

    this.createEvent = function () {

        // header 切换
        $('#header').on('click', 'li', function () {
            if ($(this).attr('data-u')) {
                window.open($(this).attr('data-u'));
                return false;
            }

            $(this).addClass('active').siblings().removeClass('active');

            if ($(this).attr('data-v')) {
                $('#content iframe').attr('src', './' + $(this).attr('data-v') + '.html');
            }
        })
    }

    this.init = function () {
        self.createEvent();
        $('#header li').eq(0).click();
    }

    self.init();
})
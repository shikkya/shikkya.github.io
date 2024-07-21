/**
 * common
 * @authors shikkya
 * @date 2024-07-08
 */

$(function () {

    // 弹窗 关闭
    $('.modal').off('click').on('click', '.close_modal', function () {
        $(this).closest('.modal').hide();
    })
})

// Pc兼容移动端宽度
function mobileWid() {
    setContentWid();
    $(window).resize(function () {
        setContentWid();
    })
}

// 设置content宽度
function setContentWid() {
    var wid = $(window).width();
    var hei = $(window).height();
    if (wid / hei > 0.6) {
        $('.content').css({
            'width': 1080 / 1920 * hei / 10 + 'rem',
            'margin': '0 auto'
        });
    }
    else {
        $('.content').css({
            'width': '100%'
        });
    }
}

// 信息提示
function showMsg(str) {
    $('.msgBox').hide().remove();
    $('body').append('<div class="msgBox"><span>' + str + '</span></div>').show();
    setTimeout(function () {
        $('.msgBox').hide().remove();
    }, 2000);
}

// 延时
function delayFun(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
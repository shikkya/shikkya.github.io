/**
 * common
 * @authors shikkya
 * @date 2024-07-08
 */

$(function () {

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
    if (wid > hei / 2) {
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
    $('body').append('<div class="msgBox"><span>' + str + '</span></div>').show();
    setTimeout(function () {
        $('.msgBox').hide().remove();
    }, 2000);
}
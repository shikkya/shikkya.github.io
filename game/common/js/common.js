/**
 * common
 * @authors shikkya
 * @date 2024-07-08
 */

$(function () {

    // c-option-radio 选择
    $('.c-option-radio').off('click').on('click', 'li', function () {
        if ($(this).hasClass('unable')) {
            return false;
        }
        $(this).addClass('active').siblings('li').removeClass('active');
    })

    // c-option-switch 开关
    $('.c-option-switch').off('click').on('click', function () {
        $(this).toggleClass('active');
    })

    // c-option-rule 规则说明
    $('.c-option-rule').off('click').on('click', function () {
        $('#ruleModal').show();
    })

    // homeBtn 返回首页
    $('#homeBtn').off('click').on('click', function () {
        window.history.back();
    })

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
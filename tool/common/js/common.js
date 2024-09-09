/**
 * common
 * @authors shikkya
 * @date 2023-07-14
 */

$(function () {

})

// 信息提示
function showMsg(str) {
    $('.msgBox').hide().remove();
    $('body').append('<div class="msgBox"><span>' + str + '</span></div>').show();
    setTimeout(function () {
        $('.msgBox').hide().remove();
    }, 2000);
}
/**
 * common
 * @authors shikkya
 * @date 2023-07-14
 */

$(function () {

})

// 信息提示
function showMsg(str) {
    $('body').append('<div class="msgBox"><span>' + str + '</span></div>').show();
    setTimeout(function () {
        $('.msgBox').hide().remove();
    }, 2000);
}
/**
 * mapPic.html
 * @authors shikkya
 * @date 2024-09-01
 */

$(function () {
    $('#picBox').html(
        '<img src="./img/' + sessionStorage.getItem('mapPic') + '.jpg" />'
    );
})
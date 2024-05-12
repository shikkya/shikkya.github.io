/**
 * index.html
 * @authors shikkya
 * @date    2024-02-28
 * @version $Id$
 */

$(function () {

    var self = this;

    this.initImgVer = function () {
        imgVer({
            el: '$("#imgVer")',
            width: '260', // 图片宽
            height: '130', // 图片高
            img: [
                './images/index_01.jpg',
                './images/index_02.jpg',
                './images/index_03.jpg',
                './images/index_04.jpg'
            ],
            success: function () {
                console.log('success');
            },
            error: function () {
                console.log('error');
            }
        });
    }

    this.init = function () {
        self.initImgVer();
    }

    this.init();
})
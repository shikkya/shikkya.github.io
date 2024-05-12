/**
 * index.html
 * @authors shikkya
 * @date    2024-02-27
 * @version $Id$
 */

$(function () {

    var self = this;

    var slideVerify_1 = null;
    var slideVerify_2 = null;

    this.createEvent = function () {

        // 示例一 重置
        $('#resetBtn_1').on('click', function () {
            slideVerify_1.resetVerify();
        })

        // 示例一 获取验证状态
        $('#getStateBtn_1').on('click', function () {
            alert(slideVerify_1.slideFinishState);
        })

        // 示例二 重置
        $('#resetBtn_2').on('click', function () {
            slideVerify_2.resetVerify();
        })

        // 示例二 获取验证状态
        $('#getStateBtn_2').on('click', function () {
            alert(slideVerify_2.slideFinishState);
        })
    }

    // 初始化
    this.initSlideVerify = function () {
        var SlideVerifyPlug = window.slideVerifyPlug;

        slideVerify_1 = new SlideVerifyPlug('#verify-wrap');

        slideVerify_2 = new SlideVerifyPlug('#verify-wrap-2', {
            wrapWidth: '450', // 容器宽度 默认350 选填
            initText: '请按住滑块，拖到最右', // 自定义初始文字 选填
            sucessText: '验证通过', // 自定义验证通过文字 选填
            getSucessState: function (res) {
                console.log(res); // 验证完成后返回true
            }
        });
    }

    this.init = function () {
        self.createEvent();
        self.initSlideVerify();
    }

    this.init();
})
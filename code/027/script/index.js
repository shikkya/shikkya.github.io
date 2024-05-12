/**
 * index.html
 * @authors shikkya
 * @date    2024-02-26
 * @version $Id$
 */

$(function () {

    var self = this;

    var fileObj = null;

    this.createEvent = function () {

        // 打开文件
        $('#openBtn').on('click', function () {
            $('#openFile').click();
        })

        // 读取文件
        $('#openFile').on('change', function () {
            fileObj = document.getElementById('openFile').files[0];
            self.getFileText();
        });

        // 选择编码
        $('#encodeList').on('click', 'li', function () {
            $(this).addClass('active').siblings().removeClass('active');
            if (fileObj) {
                self.getFileText();
            }
        })
    }

    // 读取文件内容
    this.getFileText = function () {

        // 文件信息
        // lastModified 数值 最近一次修改时间的毫秒数
        // lastModifiedDate 对象 最近一次修改时间的Date对象
        // name 字符串 本地文件系统中的文件名
        // size 数字 文件的字节大小
        // type 字符串 文件的MIME类型
        // webkitRelativePath 字符串 文件夹中文件的相对路径 当在input上加上webkitdirectory属性时 用户可选择文件夹
        // console.log(fileObj);

        // 使用FileReader读取文件
        var reader = new FileReader();

        // 读取纯文本文件 编码格式默认utf-8
        reader.readAsText(fileObj, $('#encodeList li.active').attr('data-v'));

        // 读取文件 触发onload异步事件 可使用回调函数来获取最终的值
        reader.onload = function (e) {

            // 文本内容
            // console.log(e.target.result);
            // console.log(this.result);

            $('#showText').val(this.result);
            $('#openFile').val('');
        }
    }

    this.init = function () {
        self.createEvent();
    }

    this.init();
})
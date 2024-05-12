/**
 * index.html
 * @authors shikkya
 * @date    2024-02-26
 * @version $Id$
 */

$(function () {

    var self = this;

    this.createEvent = function () {

        // 示例
        $('#exampleBtn').on('click', function () {

            $('#fileName').val('示例');
            $('#fileText').val('我只是一个\n\n\n微不足道的   示例');
        })

        // 保存文本
        $('#saveBtn').on('click', function () {
            // 创建一个Blob对象 包装要保存的文本数据
            var blob = new Blob([$('#fileText').val()], { type: 'text/plain;charset=utf-8' });

            // 调用saveAs函数将Blob对象保存为本地文件
            saveAs(blob, $('#fileName').val().trim() + '.txt'); // example.txt为保存的文件名
        })
    }

    this.init = function () {
        self.createEvent();
    }

    this.init();
})
/**
 * index.html
 * @authors shikkya
 * @date    2021-03-05
 * @version $Id$
 */

$(function () {
    var self = this;

    this.ctrlFlag = false;

    this.createEvent = function () {

        // 监听组合按键
        $(document).keydown(function (e) {
            // Ctrl Cmd
            if (e.keyCode == 17 || e.keyCode == 91) {
                self.ctrlFlag = true;
            }

            if (self.ctrlFlag && $("#txarea").is(":focus")) {
                if (e.keyCode == 97 || e.keyCode == 49) { // 全选 Ctrl+1
                    self.checkAll();
                }
                else if (e.keyCode == 98 || e.keyCode == 50) { // 复制 Ctrl+2
                    self.copy();
                }
                else if (e.keyCode == 99 || e.keyCode == 51) { // 粘贴 Ctrl+3
                    self.paste();
                }
                else if (e.keyCode == 100 || e.keyCode == 52) { // 剪切 Ctrl+4
                    self.cut();
                }
            }
        }).keyup(function (e) {
            if (e.keyCode == 17 || e.keyCode == 91) { // Ctrl Cmd
                self.ctrlFlag = false;
            }
        });

        // 全选
        $('#checkAllBtn').on('click', function () {
            self.checkAll();
        })

        // 复制
        $('#copyBtn').on('click', function () {
            self.copy();
        })

        // 粘贴
        $('#pasteBtn').on('click', function () {
            $('#txarea').focus();
            self.paste();
        })

        // 剪切
        $('#cutBtn').on('click', function () {
            self.cut();
        })
    }

    // 全选
    this.checkAll = function () {
        $('#txarea').select();
    }

    // 复制
    this.copy = function () {
        if (document.execCommand) {
            document.execCommand('Copy');
        }
        else {
            alert('复制失败');
        }
    }

    // 粘贴
    this.paste = function () {
        if (document.execCommand) {
            document.execCommand('Paste');
        }
        else {
            alert('粘贴失败');
        }
    }

    // 剪切
    this.cut = function () {
        if (document.execCommand) {
            document.execCommand('Cut');
        } else {
            alert('剪切失败');
        }
    }

    this.init = function () {
        self.createEvent();
    }

    self.init();
})
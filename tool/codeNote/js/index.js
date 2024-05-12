/**
 * index.html
 * @authors shikkya
 * @date 2023-11-20
 */

$(function () {

    var self = this;

    this.createEvent = function () {

        // 至顶
        $('body, html').animate({
            scrollTop: 0
        }, 200);

        // header 点击分类
        $('#typeList').on('click', 'span', function () {
            if ($(this).hasClass('all')) {
                $('body').addClass('unscroll');
                $('#catalogModal').show();
                return false;
            }
            var n = $(this).parent().index() - 1;
            var top = $('.list_box').eq(n).offset().top - 80;
            $('body,html').animate({
                scrollTop: top
            }, 200);
        })

        // header 实时检索
        $('body').on('compositionstart', '#searchVal', function () {
            $(this).addClass('unable');
        }).on('compositionend', '#searchVal', function () {
            $(this).removeClass('unable');
            self.searchList();
        }).on('input', '#searchVal', function () {
            if (!$(this).hasClass('unable')) {
                self.searchList();
            }
        })

        // content 复制 全部(包括注释)
        $('#content').on('click', 'button', function () {
            var text = $(this).siblings('pre').html();
            text = text.replace(/<a>/g, '');
            text = text.replace(/<\/a>/g, '');
            text = text.replace(/<font>/g, '');
            text = text.replace(/<\/font>/g, '');
            text = text.replace(/&amp;/g, '&');
            self.copyText(text);
        })

        // content 复制 当前(删除注释)
        $('#content').on('click', 'a', function () {
            var text = $(this).html();
            var domDiv = $('<div>' + text + '</div>');
            $(domDiv).find('font').remove();
            text = $(domDiv).html();
            text = text.replace(/&amp;/g, '&');
            self.copyText(text);
        })

        // modal 关闭
        $('#catalogModalCloseBtn').on('click', function () {
            $('body').removeClass('unscroll');
            $('#catalogModal').hide();
        })

        // modal 点击项
        $('#catalogModalList').on('click', 'a', function () {
            var x = $(this).closest('ul').index();
            var y = $(this).closest('li').index() - 1;
            var top = $('.list_box').eq(x).find('.item').eq(y).offset().top - 80;
            $('body,html').animate({
                scrollTop: top
            }, 200);
            $('#catalogModalCloseBtn').click();
        })
    }

    // 搜索
    this.searchList = function () {
        var val = $('#searchVal').val().trim();
        $('.item').show();
        if (val != '') {
            $('.item').each(function () {
                if (
                    $(this).find('h3').text().indexOf(val) == -1 &&
                    $(this).find('p').text().indexOf(val) == -1 &&
                    $(this).find('pre').text().indexOf(val) == -1
                ) {
                    $(this).hide();
                }
            })
        }
    }

    // 创建分类Html结构
    this.createTypeHtml = function () {
        $('#typeList').html(
            '<li><span class="all">目录</span></li>'
        );
        for (var i in noteData) {
            $('#typeList').append(
                '<li><span>' + noteData[i].type + '</span></li>'
            );
        }
    }

    // 创建目录Html结构
    this.createCatalogHtml = function () {
        var html = '';
        for (var i in noteData) {
            html += '<ul>' +
                '<li>' +
                '<b>' + noteData[i].type + ' (' + noteData[i].child.length + ')</b>' +
                '</li>';
            for (var j in noteData[i].child) {
                html += '<li>' +
                    '<i></i>' +
                    '<a title="' + noteData[i].child[j].tit + '">' + noteData[i].child[j].tit + '</a>' +
                    '</li>';
            }
            html += '</ul>';
        }
        $('#catalogModalList').html(html);
    }

    // 创建列表Html结构
    this.createListHtml = function () {
        var html = '';
        for (var i in noteData) {
            html += '<div class="list_box">';
            for (var j in noteData[i].child) {
                html += '<div class="item">' +
                    '<h3>' + '<i>' + noteData[i].type + '</i>' + noteData[i].child[j].tit + '</h3>' +
                    ((noteData[i].child[j].desc && noteData[i].child[j].desc != '') ? '<p>' + noteData[i].child[j].desc + '</p>' : '') +
                    '<div>' +
                    '<button>复制</button>' +
                    '<pre>' + self.codeStrFormat(noteData[i].child[j].code) + '</pre>' +
                    '</div>' +
                    ((noteData[i].child[j].example && noteData[i].child[j].example != '') ?
                        '<pre>' + self.codeStrFormat(noteData[i].child[j].example) + '</pre>' : '') +
                    '</div>';
            }
            html += '</div>';
        }
        $('#content').html(html);
    }

    // 代码字符串处理
    this.codeStrFormat = function (codeStr) {
        // html标签处理 < >
        codeStr = codeStr.replace(/</g, '&lt;');
        codeStr = codeStr.replace(/>/g, '&gt;');
        codeStr = codeStr.replace(/&lt;a&gt;/g, '<a>');
        codeStr = codeStr.replace(/&lt;\/a&gt;/g, '</a>');

        // html注释处理 <!-- -->
        codeStr = codeStr.replace(/&lt;!--/g, '<font>&lt;!--');
        codeStr = codeStr.replace(/--&gt;/g, '--&gt;</font>');

        // 多行注释处理 /* */
        codeStr = codeStr.replace(/\/\*/g, '<font>/*');
        codeStr = codeStr.replace(/\*\//g, '*/</font>');

        // 单行注释处理 //
        var arr = codeStr.split('//');
        for (var k in arr) {
            if (k == 0) {
                codeStr = arr[0];
                continue;
            }
            var n = arr[k].indexOf('\n');
            if (n > -1) {
                codeStr += '<font>//' + arr[k].slice(0, n) + '</font>\n' + arr[k].slice(n + 1, arr[k].length);
            }
            else {
                codeStr += '<font>//' + arr[k] + '</font>';
            }
        }

        return codeStr;
    }

    // 复制文本
    this.copyText = function (text) {
        text = text.replace(/&lt;/g, '<');
        text = text.replace(/&gt;/g, '>');

        var dom = document.createElement('textarea');
        dom.value = text;
        document.body.appendChild(dom);
        dom.select();
        document.execCommand('Copy');
        if (!!window.ActiveXobject || 'ActiveXObject' in window) {
            dom.removeNode(true);
        } else {
            dom.remove();
        }
        showMsg('复制成功');
    }

    this.init = function () {
        self.createEvent();
        self.createTypeHtml();
        self.createCatalogHtml();
        self.createListHtml();
    }

    self.init();
})


/**
 * index.html
 * @authors shikkya
 * @date 2023-07-11
 */

$(function () {

    var self = this;

    this.createEvent = function () {

        // filter 分类 切换
        $('#typeList').off('click').on('click', 'li', function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            self.createListHtml();
        })

        // filter 搜索
        $('#filterBox').off('compositionstart').on('compositionstart', '#keyWord', function () {
            $(this).addClass('unable');
        })
        $('#filterBox').off('compositionend').on('compositionend', '#keyWord', function () {
            $(this).removeClass('unable');
            self.createListHtml();
        })
        $('#filterBox').off('input').on('input', '#keyWord', function () {
            if (!$(this).hasClass('unable')) {
                self.createListHtml();
            }
        })

        // list 展开收起
        $('#listBox').off('click').on('click', 'div', function () {
            $(this).toggleClass('active');
            $(this).next().slideToggle();
        })
    }

    // 创建分类结构
    this.createTypeHtml = function () {
        $('#typeList').append('<li data-i="" class="active">全部</li>');
        for (var i in catalogData) {
            $('#typeList').append('<li data-i="' + i + '">' + catalogData[i].name + '</li>');
        }
    }

    // 创建列表结构
    this.createListHtml = function () {
        var keyWord = $('#keyWord').val().trim();
        var typeIndex = $('#typeList li.active').attr('data-i');
        var data = [];
        // 全部
        if (typeIndex == '') {
            data = catalogData;
        }
        // 其他
        else {
            data.push(catalogData[typeIndex]);
        }

        var html = '';
        for (var i in data) {
            html += '<div class="active">' +
                data[i].name + '（<font></font>）' + '<i class="fr"></i>' +
                '</div>' +
                '<ul>';
            for (var j in data[i].child) {
                if (data[i].child[j].indexOf(keyWord) > -1) {
                    html += '<li>' + data[i].child[j] + '</li>';
                }
            }
            html += '</ul>';
        }
        $('#listBox').html(html);

        // 个数统计 + 无数据处理
        $('#listBox ul').each(function () {
            if ($(this).find('li').length == 0) {
                $(this).prev().remove();
                $(this).remove();
            }
            else {
                $(this).prev().find('font').html($(this).find('li').length);
            }
        })
        if ($('#listBox').text().trim() == '') {
            $('#listBox').html('<p class="no_data">没有符合条件的结果</p>');
        }
    }

    // 目录数据二级排序
    this.orderCatalogData = function () {
        for (var i in catalogData) {
            catalogData[i].child.sort((a, b) =>
                a.localeCompare(b, 'zh-Hans-CN', { sensitivity: 'accent', })
            );
        }
    }

    this.init = function () {
        self.createEvent();
        self.orderCatalogData();
        self.createTypeHtml();
        self.createListHtml();
    }

    self.init();
})
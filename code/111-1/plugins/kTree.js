/**
 * kTree
 * @authors shikkya
 * @date    2021-04-26
 * @version $Id$
 */

$(function () {
    var kTree = function (containerId, data, options) {
        var self = this;
        this.containerId = '';
        this.data = [];
        this.setting = {
            rootId: 0, // 根节点id
            search: false, // 实时搜索功能
            check: false // 多选功能
        };
        // 初始化入口
        this.init = function () {
            this.containerId = containerId;
            this.data = data;
            this.setting = $.extend({}, this.setting, options);
            this.createEvent();
            this.createHtml();
        }
        // 事件绑定
        this.createEvent = function () {
            // 树 展开
            $(this.containerId).on('click', '.kTree_add', function () {
                $(this).siblings('ul').slideDown();
                $(this).removeClass('kTree_add').addClass('kTree_sub');
            })
            // 树 收起
            $(this.containerId).on('click', '.kTree_sub', function () {
                $(this).siblings('ul').slideUp();
                $(this).removeClass('kTree_sub').addClass('kTree_add');
            })
            // 树 选择
            $(this.containerId).on('click', 'ul .kTree_check', function () {
                var tempObj = $(this).parent();
                if ($(this).hasClass('kTree_active')) { // 取消
                    if ($(tempObj).find('ul').length > 0) { // 子节点全部取消
                        $(tempObj).find('ul').find('.kTree_check').removeClass('kTree_active');
                    }
                    if ($(tempObj).attr('data-p') != 0) { // 父节点取消
                        $(tempObj).parent().siblings('.kTree_check').removeClass('kTree_active');
                    }
                }
                else { // 选中
                    if ($(tempObj).find('ul').length > 0) { // 子节点全部选中
                        $(tempObj).find('ul').find('.kTree_check').addClass('kTree_active');
                    }
                    if ($(tempObj).attr('data-p') != 0 && $(tempObj).siblings('li').length == $(tempObj).siblings('li').children('.kTree_check.kTree_active').length) { // 判断父节点是否选中
                        $(tempObj).parent().siblings('.kTree_check').addClass('kTree_active');
                    }
                }
                $(this).toggleClass('kTree_active');
            })
            // 实时搜索
            $(this.containerId).on('input oninput propertychange ', '.kTree_search input', function () {
                var val = $.trim($(this).val());
                var obj = $(this).parent().siblings('.kTree_list');
                if (val == '') {
                    $(obj).find('li').removeClass('kTree_hide');
                    return false;
                }
                $(obj).find('li').addClass('kTree_hide');
                $(obj).find('li').each(function () {
                    if ($(this).children('span').text().indexOf(val) > -1) {
                        $(this).removeClass('kTree_hide');
                        $(this).parents('li').removeClass('kTree_hide');
                        $(this).parent().siblings('.kTree_add').click();
                    }
                })
                if ($(obj).find('li').length == $(obj).find('li.kTree_hide').length) {
                    $(this).siblings('.kTree_nodata').removeClass('kTree_hide');
                } else {
                    $(this).siblings('.kTree_nodata').addClass('kTree_hide');
                }
            })
        }
        // 创建基础结构
        this.createHtml = function () {
            $(this.containerId).html(
                '<div class="kTree_box">' +
                '<div class="kTree_load"><i></i></div>' +
                '<div class="kTree_content kTree_hide">' +
                (this.setting.search ? '<div class="kTree_search">' +
                    '<input type="text" placeholder="请输入搜索关键词"/>' +
                    '<div class="kTree_nodata kTree_hide">没有符合条件的结果</div>' +
                    '</div>' : '') +
                '<div class="kTree_list">' +
                '<ul data-i="' + this.setting.rootId + '"></ul>' +
                '</div>' +
                '</div>' +
                '</div>');
            var arr = this.data.concat();
            arr = arr.sort(this.compare('pId'));
            this.createKTree(arr);
        }
        // 创建kTree结构
        this.createKTree = function (arr) {
            var tempArr = [];
            for (var i = 0; i < arr.length; i++) {
                if ($(this.containerId + ' ul[data-i="' + arr[i].pId + '"]').length == 0) {
                    if ($(this.containerId + ' li[data-i="' + arr[i].pId + '"]').length == 0) {
                        tempArr.push(arr[i]);
                        continue;
                    }
                    var openVal = $(this.containerId + ' li[data-i="' + arr[i].pId + '"]').attr('data-o') == 1 ? true : false;
                    $(this.containerId + ' li[data-i="' + arr[i].pId + '"]')
                        .append('<ul data-i="' + arr[i].pId + '"' + (openVal ? '' : ' class="kTree_hide"') + '></ul>')
                        .prepend('<i class="' + (openVal ? 'kTree_sub' : 'kTree_add') + '"></i>');
                }
                $(this.containerId + ' ul[data-i="' + arr[i].pId + '"]').append(
                    '<li data-i="' + arr[i].id + '" data-p="' + arr[i].pId + '" data-o="' + (arr[i].open ? '1' : '0') + '">' +
                    (this.setting.check ? '<i class="kTree_check' + (arr[i].check ? ' kTree_active' : '') + '"></i>' : '') +
                    '<span>' + arr[i].name + '</span>' +
                    '</li>'
                );
            }
            if (tempArr.length == 0) {
                $('.kTree_load').addClass('kTree_hide');
                $('.kTree_content').removeClass('kTree_hide');
            }
            else if (arr.length == tempArr.length) {
                var html = '<font style="color:#e50000">数据有误，请核查：</font>' +
                    '<ul>';
                for (var i = 0; i < tempArr.length; i++) {
                    html += '<li>' + JSON.stringify(tempArr[i]) + '</li>';
                }
                html += '</ul>';
                $(this.containerId + ' .kTree_box').html(html);
            }
            else {
                this.createKTree(tempArr);
            }
        }
        // 数组升序排序
        this.compare = function (property) {
            return (firstobj, secondobj) => {
                const firstValue = firstobj[property];
                const secondValue = secondobj[property];
                return firstValue - secondValue;
            };
        }
        // 获取选中数据
        this.getCheckData = function () {
            var arr = [];
            $(this.containerId + ' .kTree_check').each(function () {
                if ($(this).hasClass('kTree_active')) {
                    arr.push({
                        name: $(this).siblings('span').text(),
                        id: $(this).parent().attr('data-i')
                    })
                }
            })
            return arr;
        }
    }
    window.kTree = kTree;
})


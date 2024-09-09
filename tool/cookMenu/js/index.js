/**
 * index.html
 * @authors shikkya
 * @date 2024-09-07
 */

$(function () {

    var self = this;

    this.createEvent = function () {

        // header 切换
        $('#header').off('click', 'div').on('click', 'div', function () {
            $(this).addClass('active').siblings().removeClass('active');
            if ($(this).attr('data-i') == '') {
                $('#listBox .item').removeClass('typeHide');
                return false;
            }
            $('#listBox .item').addClass('typeHide');
            $('#listBox .item[data-i="' + $(this).attr('data-i') + '"]').removeClass('typeHide');
        })

        // footer 筛选
        $('#filterBtn').off('click').on('click', function () {
            $('#filterModal').show();
        })

        // footer 清空筛选
        $('#clearFilterBtn').off('click').on('click', function () {
            $('#filterModalList i.active').click();
        })

        // list 点击统称
        $('#listBox').off('click', 'span[data-id=""]').on('click', 'span[data-id=""]', function () {
            showMsg($(this).attr('title'));
        })

        // modal 遮罩 关闭
        $('.modal').off('click').on('click', function () {
            $('#filterModal').hide();
        })
        $('.modal_dialog').off('click').on('click', function (e) {
            e.stopPropagation();
        })

        // modal 勾选
        $('#filterModalList').off('click', 'li').on('click', 'li', function () {
            $(this).find('i').toggleClass('active');
            var num = $('#filterModalList i.active').length;
            $('#filterBtn font').html(num);
            if (num == 0) {
                $('#listBox .item').removeClass('filterHide');
            }
            else {
                $('#listBox .item').addClass('filterHide');
                $('#filterModalList i.active').each(function () {
                    $('#listBox span[data-id="' + $(this).attr('data-id') + '"]').each(function () {
                        $(this).closest('.item').removeClass('filterHide');
                    })
                })
            }
            self.checkNum();
        })
    }

    // header 创建切换结构
    this.createHeaderHtml = function () {
        var cssStr = ' style="width:calc(100% / ' + (menuData.length + 1) + ');"';
        var total = 0;
        for (var i in menuData) {
            $('#header').append('<div data-i="' + i + '"' + cssStr + '>' + menuData[i].name + '&nbsp;(<font>' + menuData[i].child.length + '</font>)</div>');
            total += menuData[i].child.length;
        }
        $('#header').prepend('<div class="active" data-i=""' + cssStr + '>全部&nbsp;(<font>' + total + '</font>)</div>');
    }

    // list 创建列表结构
    this.createListHtml = function (data) {
        var html = '';
        for (var i in data) {
            for (var j in data[i].child) {
                html += '<div class="item" data-i="' + i + '">' +
                    '<h3>' + data[i].child[j].name + '</h3>' +
                    '<div>';

                // 必需
                html += '<p data-t="must">' +
                    '<i>必需</i>' + self.getRecipeHtml(data[i].child[j].recipeMust) +
                    '</p>';

                // 非必需
                if (data[i].child[j].recipeExtra && data[i].child[j].recipeExtra.length > 0) {
                    html += '<p data-t="extra">' +
                        '<i>额外</i>' + self.getRecipeHtml(data[i].child[j].recipeExtra) +
                        '</p>';
                }

                // 备注
                if (data[i].child[j].info && data[i].child[j].info != '') {
                    html += '<p data-t="info">' + '<i>备注</i>' + data[i].child[j].info + '</p>';
                }

                html += '</div>' + '</div>';
            }
        }
        $('#listBox').html(html);
    }

    // list 获取配方结构
    this.getRecipeHtml = function (arr) {
        var html = '';
        var name = '';
        for (var i in arr) {
            if (i != 0) {
                html += '、';
            }

            // 统称
            if (arr[i].indexOf('|') > -1) {
                var tempArr = arr[i].split('|')[1].split(',');
                var tempStr = '';
                for (var j in tempArr) {
                    name = self.getFoodName(tempArr[j]);
                    html += '<span class="hide" data-id="' + tempArr[j] + '">' + (name == '' ? tempArr[j] : name) + '</span>';
                    tempStr += (tempStr == '' ? '' : '、') + (name == '' ? tempArr[j] : name);
                }
                html += '<span data-id="" title="' + tempStr + '">' + arr[i].split('|')[0] + '*</span>';
                continue;
            }

            // 多项
            if (arr[i].indexOf(',') > -1) {
                var tempArr = arr[i].split(',');
                for (var j in tempArr) {
                    name = self.getFoodName(tempArr[j]);
                    html += (j == 0 ? '' : '/') + '<span data-id="' + tempArr[j] + '">' + (name == '' ? tempArr[j] : name) + '</span>';
                }
                continue;
            }

            // 普通
            name = self.getFoodName(arr[i]);
            html += '<span data-id="' + arr[i] + '">' + (name == '' ? arr[i] : name) + '</span>';
        }
        return html;
    }

    // list 获取食材名称
    this.getFoodName = function (id) {
        var name = '';
        for (j in foodData) {
            if (foodData[j].id == id) {
                if (name != '') {
                    showMsg('id重复 ' + id);
                }
                name = foodData[j].name;
            }
        }
        return name;
    }

    // list 个数统计
    this.checkNum = function () {
        $('#header div').each(function () {
            $(this).find('font').html(
                $('#listBox .item[data-i="' + $(this).attr('data-i') + '"]').length - $('#listBox .item[data-i="' + $(this).attr('data-i') + '"].filterHide').length
            );
        })
        $('#header div').eq(0).find('font').html(
            $('#listBox .item').length - $('#listBox .item.filterHide').length
        );
    }

    // modal 创建列表结构
    this.createModalHtml = function (data) {
        for (var i in data) {
            if ($('#filterModalList ul[data-type="' + data[i].type + '"]').length == 0) {
                $('#filterModalList').append(
                    '<div data-type="' + data[i].type + '">' + data[i].type + '</div>' +
                    '<ul data-type="' + data[i].type + '"></ul>'
                );
            }
            $('#filterModalList ul[data-type="' + data[i].type + '"]').append(
                '<li>' +
                '<i class="check" data-id="' + data[i].id + '"></i>' +
                data[i].name +
                '</li>'
            );
        }
    }

    this.init = function () {
        self.createEvent();
        self.createHeaderHtml();
        self.createListHtml(menuData);
        self.createModalHtml(foodData);
    }

    self.init();
})
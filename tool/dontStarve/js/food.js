/**
 * food.html
 * @authors shikkya
 * @date 2023-11-01
 */

$(function () {

    var self = this;

    this.createEvent = function () {

        // filter 切换
        $('#filterBox').on('click', 'li', function () {
            $(this).addClass('active').siblings().removeClass('active');
            self.createFoodHtml();
        })

        // filter 搜索
        $('#filterBox').on('compositionstart', 'input', function () {
            $(this).addClass('unable');
        }).on('compositionend', 'input', function () {
            $(this).removeClass('unable');
            self.createFoodHtml();
        }).on('input', 'input', function () {
            if (!$(this).hasClass('unable')) {
                self.createFoodHtml();
            }
        })

        // food 点击
        $('#foodBox').on('click', '.item', function () {
            handleItem(this);
        })
    }

    // filter 创建html结构
    this.createFilterHtml = function () {

        // type
        $('#filterBox .filter_type').html(
            '<li data-v="" class="active">全部</li>'
        );
        for (var i in foodData) {
            $('#filterBox .filter_type').append(
                '<li data-v="' + i + '">' + foodData[i].type + '</li>'
            );
        }

        // order
        $('#filterBox .filter_order').html(
            '<li data-v="" class="active">默认</li>' +
            '<li data-v="stomach"><i class="iconfont icon-stomach"></i>饥饿</li>' +
            '<li data-v="mind"><i class="iconfont icon-mind"></i>精神</li>' +
            '<li data-v="health"><i class="iconfont icon-heart"></i>生命</li>'
        );
    }

    // food 完善信息
    this.updateFoodData = function () {
        for (var i in foodData) {
            for (var j in foodData[i].child) {
                foodData[i].child[j].type = foodData[i].type;
                foodData[i].child[j].desc = self.searchFoodDesc(foodData[i].child[j].code);
            }
        }
    }

    // food 搜索描述信息
    this.searchFoodDesc = function (code) {
        for (var i in codeData) {
            for (var j in codeData[i].child) {
                if (codeData[i].child[j].code == code) {
                    return codeData[i].child[j].desc;
                }
            }
        }
        return code;
    }

    // food 创建html结构
    this.createFoodHtml = function () {
        var type = $('#filterBox .filter_type li.active').attr('data-v');
        var order = $('#filterBox .filter_order li.active').attr('data-v');
        var val = $('#filterBox input').val().trim();

        var data = [];
        for (var i in foodData) {
            if (type == '' || type == i) {
                for (var j in foodData[i].child) {
                    if (foodData[i].child[j].code.indexOf(val) > -1 || foodData[i].child[j].desc.indexOf(val) > -1) {
                        data.push(JSON.parse(JSON.stringify(foodData[i].child[j])));
                    }
                }
            }
        }

        if (order != '') {
            data.sort(arrSort(order, 'desc'));
        }

        var html = '';
        for (var i in data) {
            html += '<div class="item">' +
                '<font>' + data[i].type + '</font>' +
                '<img src="./img/' + data[i].code + '.png"/>' +
                '<p title="' + data[i].desc + '">' + data[i].desc + '</p>' +
                '<p title="' + data[i].code + '">' + data[i].code + '</p>';

            for (var j in data[i].made) {
                html += '<div class="made">';
                var tempArr = data[i].made[j].split(',');
                for (var k in tempArr) {
                    html += '<img src="./img/' + tempArr[k] + '.png" title="' + self.searchFoodDesc(tempArr[k]) + '" />';
                }
                html += '</div>';
            }

            html += '<table>';
            if (data[i].cook) {
                html += '<tr>' +
                    '<td colspan="3">烹饪</td>' +
                    '<td colspan="3">' + data[i].cook + '秒</td>' +
                    '</tr>';
            }
            if (data[i].rot) {
                html += '<tr>' +
                    '<td colspan="3">腐烂</td>' +
                    '<td colspan="3">' + data[i].rot + '天</td>' +
                    '</tr>';
            }
            if (data[i].recipe) {
                html += '<tr>' +
                    '<td colspan="6">' + data[i].recipe + '</td>' +
                    '</tr>';
            }
            html += '<tr>' +
                '<td colspan="2"' + (data[i].recommend.indexOf('stomach') > -1 ? ' class="active_stomach"' : '') + '>' +
                '<i class="iconfont icon-stomach"></i>' + data[i].stomach +
                '</td>' +
                '<td colspan="2"' + (data[i].recommend.indexOf('mind') > -1 ? ' class="active_mind"' : '') + '>' +
                '<i class="iconfont icon-mind"></i>' + data[i].mind +
                '</td>' +
                '<td colspan="2"' + (data[i].recommend.indexOf('health') > -1 ? ' class="active_health"' : '') + '>' +
                '<i class="iconfont icon-heart"></i>' + data[i].health +
                '</td>' +
                '</tr>';
            html += '</table>' +
                '</div>';
        }
        if (html == '') {
            html = '<div class="no_data">暂无数据</div>';
        }
        $('#foodBox').html(html);
    }

    this.init = function () {
        self.createEvent();
        self.createFilterHtml();
        self.updateFoodData();
        self.createFoodHtml();
    }

    self.init();
})
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
            // if ($(this).attr('data-v') == '') {
            //     $(this).addClass('active').siblings().removeClass('active');
            // }
            // else {
            //     $(this).toggleClass('active');
            //     $('#filterBox li[data-v=""]').removeClass('active');
            //     if ($('#filterBox li.active').length == 0) {
            //         $('#filterBox li[data-v=""]').addClass('active');
            //     }
            // }
            $(this).addClass('active').siblings().removeClass('active');
            self.createAttrHtml();
        })

        // filter 搜索
        $('#filterBox').on('compositionstart', 'input', function () {
            $(this).addClass('unable');
        }).on('compositionend', 'input', function () {
            $(this).removeClass('unable');
            self.createAttrHtml();
        }).on('input', 'input', function () {
            if (!$(this).hasClass('unable')) {
                self.createAttrHtml();
            }
        })

        // food 点击
        $('#attrBox').on('click', '.item', function () {
            handleItem(this);
        })
    }

    // filter 创建html结构
    this.createFilterHtml = function () {

        // type
        $('#filterBox .filter_type').html(
            '<li data-v="" class="active">全部</li>'
        );
        for (var key in attrData.type) {
            if (attrData.type[key].name != '耐久') {
                $('#filterBox .filter_type').append(
                    '<li data-v="' + key + '">' + attrData.type[key].name + '</li>'
                );
            }
        }
    }

    // attr 完善信息
    this.updateAttrData = function () {
        for (var i in attrData.list) {
            attrData.list[i].desc = self.searchAttrDesc(attrData.list[i].code);
            attrData.list[i].version = self.searchAttrTag(attrData.list[i].code);
            for (var j in attrData.list[i].made) {
                attrData.list[i].made[j].desc = self.searchAttrDesc(attrData.list[i].made[j].code);
            }
        }
    }

    // attr 搜索描述信息
    this.searchAttrDesc = function (code) {
        for (var i in codeData) {
            for (var j in codeData[i].child) {
                if (codeData[i].child[j].code == code) {
                    return codeData[i].child[j].desc;
                }
            }
        }
        return code;
    }

    // attr 搜索版本信息
    this.searchAttrTag = function (code) {
        for (var i in codeData) {
            for (var j in codeData[i].child) {
                if (codeData[i].child[j].code == code) {
                    return codeData[i].child[j].version;
                }
            }
        }
        return '';
    }

    // attr 创建html结构
    this.createAttrHtml = function () {
        var type = '';
        $('#filterBox .filter_type li.active').each(function () {
            type += (type == '' ? '' : ',') + $(this).attr('data-v');
        })

        var val = $('#filterBox input').val().trim();

        var data = JSON.parse(JSON.stringify(attrData.list));
        var html = '';
        for (var i in data) {
            var flag = false;
            for (key in data[i].attr) {
                if (type == '' || type.indexOf(key) > -1) {
                    flag = true;
                    break;
                }
            }
            if (flag && (data[i].code.indexOf(val) > -1 || data[i].desc.indexOf(val) > -1)) {
                html += '<div class="item' + (data[i].isRecommend ? ' active' : '') + '">' +
                    '<img src="./img/' + data[i].code + '.png"/>' +
                    '<p title="' + data[i].desc + '">' + data[i].desc + '</p>' +
                    '<p title="' + data[i].code + '">' + data[i].code + '</p>';

                if (data[i].version != '') {
                    var tagArr = data[i].version.split(',');
                    html += '<div class="tag">';
                    for (var j in tagArr) {
                        html += '<b class="version_tag" data-t="' + tagArr[j] + '">' + versionData[parseInt(tagArr[j])].tag + '</b>';
                    }
                    html += '</div>';
                }

                html += '<div class="made">';
                for (var j in data[i].made) {
                    html += '<span title="' + data[i].made[j].desc + '">' +
                        '<img src="./img/' + data[i].made[j].code + '.png"/>' +
                        (data[i].made[j].num == 0 ? '' : '<font>' + data[i].made[j].num + '</font>') +
                        '</span>';
                }
                html += '</div>';

                html += '<table>';
                for (var key in data[i].attr) {
                    html += '<tr>' +
                        '<td>' + attrData.type[key].name + '</td>' +
                        '<td>' + self.getAttrTypeVal(key, data[i].attr[key]) + '</td>' +
                        '</tr>';
                }
                html += '</table>';

                html += '</div>';
            }
        }
        if (html == '') {
            html = '<div class="no_data">暂无数据</div>';
        }
        $('#attrBox').html(html);
    }

    // attr 获取属性值
    this.getAttrTypeVal = function (key, value) {
        var type = attrData.type[key].type;
        var result = '';
        switch (type) {
            case 'percent':
                result = value + '%';
                break;
            case 'num':
                result = value;
                break;
            case 'boolean':
                result = value ? '是' : '否';
                break;
            case 'day':
                result = value + '天';
                break;
            case 'minute':
                result = value + '/分钟';
                break;
            default:
                result = value;
        }
        return result;
    }

    this.init = function () {
        self.createEvent();
        self.createFilterHtml();
        self.updateAttrData();
        self.createAttrHtml();
    }

    self.init();
})
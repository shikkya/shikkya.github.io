/**
 * code.html
 * @authors shikkya
 * @date 2023-11-01
 */

$(function () {

    var self = this;

    this.createEvent = function () {

        // filter 切换
        $('#filterBox').on('click', 'li', function () {
            $(this).addClass('active').siblings().removeClass('active');
            self.createCodeHtml();
        })

        // filter 搜索
        $('#filterBox').on('compositionstart', 'input', function () {
            $(this).addClass('unable');
        }).on('compositionend', 'input', function () {
            $(this).removeClass('unable');
            self.createCodeHtml();
        }).on('input', 'input', function () {
            if (!$(this).hasClass('unable')) {
                self.createCodeHtml();
            }
        })

        // code 点击
        $('#codeBox').on('click', 'div', function () {
            handleItem(this);
        })
    }

    // filter 创建html结构
    this.createFilterHtml = function () {

        // tag
        $('#filterBox .filter_tag').html(
            '<li data-v="" class="active">全部</li>'
        );
        for (var i in versionData) {
            $('#filterBox .filter_tag').append(
                '<li data-v="' + i + '">' + versionData[i].name + versionData[i].tag + '</li>'
            );
        }

        // type
        $('#filterBox .filter_type').html(
            '<li data-v="" class="active">全部</li>'
        );
        for (var i in codeData) {
            $('#filterBox .filter_type').append(
                '<li data-v="' + i + '">' + codeData[i].type + '</li>'
            );
        }
    }

    // code 创建html结构
    this.createCodeHtml = function () {
        var tag = $('#filterBox .filter_tag li.active').attr('data-v');
        var type = $('#filterBox .filter_type li.active').attr('data-v');
        var val = $('#filterBox input').val().trim();

        var html = '';
        for (var i in codeData) {
            if (type == '' || type == i) {
                for (var j in codeData[i].child) {
                    var tagArr = codeData[i].child[j].version.split(',');
                    if (
                        (tag == '' || tagArr.indexOf(tag) > -1) &&
                        (codeData[i].child[j].code.indexOf(val) > -1 || codeData[i].child[j].desc.indexOf(val) > -1)
                    ) {
                        html += '<div>' +
                            '<img src="./img/' + codeData[i].child[j].code + '.png"/>' +
                            '<p title="' + codeData[i].child[j].desc + '">' + codeData[i].child[j].desc + '</p>' +
                            '<p title="' + codeData[i].child[j].code + '">' + codeData[i].child[j].code + '</p>';
                        for (var k in tagArr) {
                            if (tagArr[k] != '') {
                                html += '<b class="version_tag" data-t="' + tagArr[k] + '">' + versionData[parseInt(tagArr[k])].tag + '</b>';
                            }
                        }
                        html += '</div>';
                    }
                }
            }
        }
        if (html == '') {
            html = '<div class="no_data">暂无数据</div>';
        }
        $('#codeBox').html(html);
    }

    this.init = function () {
        self.createEvent();
        self.createFilterHtml();
        self.createCodeHtml();
    }

    self.init();
})
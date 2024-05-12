/**
 * fun.html
 * @authors shikkya
 * @date 2023-11-01
 */

$(function () {

    var self = this;

    this.createEvent = function () {
        // fun 点击
        $('#funBox').on('click', 'a', function () {
            copyText($(this).text().trim());
        })
    }

    // fun 创建html结构
    this.createFunHtml = function () {
        var html = '';
        for (var i in funData) {
            html += '<div>' +
                '<p>';
            if (funData[i].version != '') {
                var tagArr = funData[i].version.split(',');
                for (var j in tagArr) {
                    html += '<b class="version_tag" data-t="' + tagArr[j] + '">' + versionData[parseInt(tagArr[j])].tag + '</b>';
                }
            }
            html += funData[i].tit + '</p>';
            for (j in funData[i].child) {
                if (funData[i].child[j].type == 'desc') {
                    html += '<p>' + funData[i].child[j].text + '</p>';
                }
                else if (funData[i].child[j].type == 'code') {
                    html += '<a>' + funData[i].child[j].text + '</a>';
                }
            }
            html += '</div>';
        }
        $('#funBox').html(html);
    }

    this.init = function () {
        self.createEvent();
        self.createFunHtml();
    }

    self.init();
})
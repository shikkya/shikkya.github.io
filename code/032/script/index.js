/**
 * index.html
 * @authors shikkya
 * @date    2024-05-09
 * @version $Id$
 */

$(function () {

    var self = this;

    // 创建列表html结构
    this.createListHtml = function () {
        var colNum = (Math.floor(Math.random() * 10) + 1) * 10;
        var rowNum = (Math.floor(Math.random() * 10) + 1) * 10;

        var html = '<table>' +
            '<thead>' +
            '<tr>';
        for (var i = 0; i < colNum; i++) {
            html += '<th>标题' + i + '</th>';
        }
        html += '</tr>' +
            '</thead>' +
            '<tbody>';
        for (var i = 0; i < rowNum; i++) {
            html += '<tr>';
            for (var j = 0; j < colNum; j++) {
                html += '<td>' + i + '-' + j + '</td>';
            }
            html += '</tr>';
        }
        html += '</tbody>' + '</table>';
        $('#content').html(html);
    }

    this.init = function () {
        self.createListHtml();
    }

    this.init();
})
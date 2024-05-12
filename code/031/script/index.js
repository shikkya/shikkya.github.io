/**
 * index.html
 * @authors shikkya
 * @date    2024-05-08
 * @version $Id$
 */

$(function () {

    var self = this;

    // 创建列表html结构
    this.createListHtml = function () {
        var colNum = (Math.floor(Math.random() * 10) + 1) * 10;
        var rowNum = (Math.floor(Math.random() * 10) + 1) * 10;

        var html = '<table id="tab">' +
            '<tr>';
        for (var i = 0; i < colNum; i++) {
            html += '<th>标题' + i + '</th>';
        }
        html += '</tr>';
        for (var i = 0; i < rowNum; i++) {
            html += '<tr>';
            for (var j = 0; j < colNum; j++) {
                html += '<td>' + j + '</td>';
            }
            html += '</tr>';
        }
        html += '</table>';
        $('#listBox').html(html);
    }

    // 初始化滚动条
    this.initScroll = function () {
        // init
        if ($('#tab').outerWidth() <= $('#listBox').outerWidth()) {
            $('#scrollBar').hide();
        }
        else {
            $('#scrollBar').show();
            $('#scrollHandle').css({
                width: $('#listBox').outerWidth() / $('#tab').outerWidth() * $('#scrollBar').outerWidth() + 'px'
            });
        }

        // draggable
        $('#scrollHandle').draggable({
            axis: 'x',
            containment: 'parent',
            drag: function (event, ui) {
                $('#listBox').scrollLeft(
                    ($('#scrollHandle').position().left / ($('#scrollBar').outerWidth() - $('#scrollHandle').outerWidth())) * ($('#tab').outerWidth() - $('#listBox').outerWidth())
                );
            }
        });

        // resize
        $(window).resize(function () {
            if ($('#tab').outerWidth() <= $('#listBox').outerWidth()) {
                $('#scrollBar').hide();
            }
            else {
                $('#scrollBar').show();
                $('#scrollHandle').css({
                    width: $('#listBox').outerWidth() / $('#tab').outerWidth() * $('#scrollBar').outerWidth() + 'px',
                    left: $('#listBox').scrollLeft() * ($('#scrollBar').outerWidth() - $('#scrollHandle').outerWidth()) / ($('#tab').outerWidth() - $('#listBox').outerWidth()) + 'px'
                });
            }
        })
    }

    this.init = function () {
        self.createListHtml();
        self.initScroll();
    }

    this.init();
})
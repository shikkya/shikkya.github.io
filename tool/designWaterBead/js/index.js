/**
 * index.html
 * @authors shikkya
 * @date 2023-08-18
 */

$(function () {

    var self = this;

    // 图纸
    // var mapData = [{
    //     name: '正方形',
    //     type: 'rect',
    //     size: 16,
    //     rotate: [0, 45]
    // }, {
    //     name: '六边形',
    //     type: 'hexa',
    //     size: 9,
    //     rotate: [0, 30]
    // }];

    // 颜色
    var colorData = [
        // 灰
        '#000000', '#999999', '#dddddd', '#ffffff',
        // 红
        '#be0006', '#ff0000', '#f41b7f', '#ff787d', '#ffc0cb', '#601986', '#c490bf',
        // 黄
        '#914d06', '#ff8200', '#fff100',
        // 蓝
        '#0000ff', '#0068b7', '#0099ff', '#aae4ff', '#00fff3',
        // 绿
        '#00561f', '#8a8000', '#22ac38', '#b3d465', '#d8ff00'];

    // 当前选中颜色
    var curColor = '';

    this.createEvent = function () {

        // color 图形 切换
        $('#colorBox').off('click', 'i').on('click', 'i', function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            curColor = $(this).attr('data-c');
        })

        // map 点击
        $('#mapBox').off('click', 'span').on('click', 'span', function () {
            $(this).attr('data-c', curColor).css({
                'background': curColor == '' ? '' : curColor
            })
            self.createCountHtml();
        })

        // footer 新图纸 正方形
        $('#rectMapBtn').off('click').on('click', function () {

            if ($('#mapBox span').not('[data-c=""]').length > 0 && !confirm('清空当前图纸?')) {
                return false;
            }

            var mapSize = 16;
            var html = '<div class="rect">';
            for (var i = 0; i < mapSize; i++) {
                html += '<div>';
                for (var j = 0; j < mapSize; j++) {
                    html += '<span data-c=""></span>';
                }
                html += '</div>';
            }
            html += '</div>';
            $('#mapBox').html(html);

            self.createCountHtml();
        })

        // footer 新图纸 六边形
        $('#hexaMapBtn').off('click').on('click', function () {

            if ($('#mapBox span').not('[data-c=""]').length > 0 && !confirm('清空当前图纸?')) {
                return false;
            }

            var mapSize = 9;
            var html = '<div class="hexa">';
            for (var i = 0; i < mapSize; i++) {
                html += '<div>';
                for (var j = 0; j < mapSize + i; j++) {
                    html += '<span data-c=""></span>';
                }
                html += '</div>';
            }
            for (var i = mapSize - 1; i > 0; i--) {
                html += '<div>';
                for (var j = 0; j < mapSize + i - 1; j++) {
                    html += '<span data-c=""></span>';
                }
                html += '</div>';
            }
            html += '</div>';
            $('#mapBox').html(html);

            self.createCountHtml();
        })

        // footer 保存
        $('#saveBtn').off('click').on('click', function () {
            var html = $('#mapBox').html();
            var oInputObj = document.createElement('input');
            oInputObj.value = html;
            document.body.appendChild(oInputObj);
            oInputObj.select();
            document.execCommand('Copy');
            if (!!window.ActiveXobject || 'ActiveXObject' in window) {
                oInputObj.removeNode(true);
            } else {
                oInputObj.remove();
            }
            showMsg('复制成功');
        })

        // footer 读取
        $('#loadBtn').off('click').on('click', function () {
            $('#loadModal').show();
        })

        // modal 关闭
        $('.modal').off('click', '.close_modal_btn').on('click', '.close_modal_btn', function () {
            $(this).closest('.modal').hide();
        })

        // modal 读取
        $('#modalSubBtn').off('click').on('click', function () {
            var html = $('#modalText').val().trim();
            if (html == '') {
                showMsg('请输入源码');
                return false;
            }
            $('#mapBox').html(html);
            $('#loadModal').hide();
            self.createCountHtml();
        })
    }

    // 创建颜色结构
    this.createColorHtml = function () {
        for (var i in colorData) {
            $('#colorBox').append(
                '<i data-c="' + colorData[i] + '" style="background:' + colorData[i] + '"></i>'
            );
        }
        $('#colorBox i').eq(1).click();
    }

    // 创建统计结构
    this.createCountHtml = function () {

        var countArr = [];
        var colorStr = '';
        var tempColor = '';
        $('#mapBox span').each(function () {
            tempColor = $(this).attr('data-c');
            if (tempColor != '' && colorStr.indexOf(tempColor) == -1) {
                countArr.push({
                    color: tempColor,
                    num: $('#mapBox span[data-c="' + tempColor + '"]').length
                });
                colorStr += (colorStr == '' ? '' : ',') + tempColor;
            }
        })

        var html = '';
        html += '<div>' +
            '<i>共</i> × <font>' + $('#mapBox span').length + '</font>' +
            '</div>' +
            '<div>' +
            '<i>空</i> × <font>' + $('#mapBox span[data-c=""]').length + '</font>' +
            '</div>';
        for (var i in countArr) {
            html += '<div>' +
                '<i style="background:' + countArr[i].color + '"></i> × <font>' + countArr[i].num + '</font>' +
                '</div>'
        }

        $('#countBox').html(html);
    }

    this.init = function () {
        self.createEvent();
        self.createColorHtml();
        $('#rectMapBtn').click();
    }

    self.init();
})
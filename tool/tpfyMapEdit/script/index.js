/**
 * index.html
 * @authors shikkya
 * @date 2022-03-19
 */

// 皮肤编号
var skinIndex = '';

// 皮肤项
var skinArr = [{
    name: '室外',
    val: 'outdoor',
    isBg: true,
    isSpecial: true
}, {
    name: '室内',
    val: 'indoor',
    isBg: true,
    isSpecial: true
}, {
    name: '墙',
    val: 'wall',
    isBg: true,
    isSpecial: true
}, {
    name: '床',
    val: 'bed',
    isBg: false,
    isSpecial: false
}, {
    name: '横门',
    val: 'door_a',
    isBg: false,
    isSpecial: false
}, {
    name: '竖门',
    val: 'door_b',
    isBg: false,
    isSpecial: false
}, {
    name: '起点',
    val: 'start',
    isBg: false,
    isSpecial: false
}]

$(function () {
    var self = this;

    this.createEventer = function () {

        // 创建地图
        $('#createMapBtn').on('click', function () {
            skinIndex = $('#skinIndex').val();
            self.createSkinHtml();
            self.createMapHtml();
        })

        // 复制地图
        $('#copyMapBtn').on('click', function () {
            var html = $('#mapBox').html();
            if (html == '') {
                return false;
            }
            $('#copyText').show();
            $('#copyText').val(html);
            $('#copyText').select();
            document.execCommand('Copy');
            self.showAlertInfo('复制成功');
            $('#copyText').hide();
            $('#copyText').val('');
        })

        // 点击地图块
        $('#mapBox').on('click', 'td', function () {
            var n = parseInt($("input[name='skin']:checked").val());
            if (n == -1) {
                $(this).attr('class', 'no_border');
                $(this).find('div').attr('class', '');
                return false;
            }
            var name = skinArr[n].val + (skinArr[n].isSpecial ? '_' + skinIndex : '');
            if (skinArr[n].isBg) {
                $(this).attr('class', name);
            } else {
                $(this).find('div').attr('class', name);
            }
        })
    }

    // 创建皮肤结构
    this.createSkinHtml = function () {
        var html = '';
        for (var i = 0; i < skinArr.length; i++) {
            html += '<label>' +
                '<input name="skin" type="radio" value="' + i + '" />' +
                '<span>' + skinArr[i].name + '</span>' +
                '<img src="./images/' + skinArr[i].val + (skinArr[i].isSpecial ? '_' + skinIndex : '') + '.png" />' +
                '</label>';
        }
        html += '<label>' +
            '<input name="skin" type="radio" value="-1" checked="true" />' +
            '<span>空</span>' +
            '<img src="./images/none.png" />' +
            '</label>';
        $('#skinBox').html(html);
    }

    // 创建地图结构
    this.createMapHtml = function () {
        var wid = parseInt($('#widNum').val());
        var hei = parseInt($('#heiNum').val());

        var html = '<table>';
        for (var i = 0; i < hei; i++) {
            html += '<tr>';
            for (var j = 0; j < wid; j++) {
                html += '<td class="' + skinArr[0].val + '_' + skinIndex + '">' +
                    '<div class=""></div>' +
                    '</td>';
            }
            html += '</tr>';
        }
        html += '</table>';
        $('#mapBox').html(html);
    }

    // 提示信息
    this.showAlertInfo = function (str) {
        if ($('#alertInfo')) {
            $('#alertInfo').html('<span>' + str + '</span>').fadeIn();
            setTimeout(function () {
                $("#alertInfo").fadeOut();
            }, 3000);
        }
    }

    this.init = function () {
        self.createEventer();
    }

    self.init();
})


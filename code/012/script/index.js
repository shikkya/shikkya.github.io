/**
 * index.html
 * @authors shikkya
 * @date    2019-12-11
 * @version $Id$
 */

$(function() {
    var self = this;

    this.createEvent = function() {
        // 隐藏所有select列表
        $('body').on('click', function() {
            self.hideAll();
        });

        // 显示select列表
        $('body').delegate('.select_out input[type="text"]', 'click', function(e) {
            var curId = $(this).attr('id');

            if (curId == 'sCity' && $('#sPro').val() == '') {
                alert('请选择省份');
                return false;
            }

            if (curId == 'sArea' && $('#sCity').val() == '') {
                alert('请选择城市');
                return false;
            }

            if ($('#' + curId + 'List').is(':hidden')) {
                self.hideAll();
                $(this).addClass('active');
                $('#' + curId + 'List').slideDown();
                if ($(this).val() == '') {
                    $('#' + curId + 'List').animate({ scrollTop: 0 }, 0);
                }
            } else {
                self.hideAll();
            }

            e.stopPropagation();
        });

        // 点击select列表项
        $('body').delegate('.select_out li', 'click', function(e) {
            var inputObj = $(this).parent().siblings('input[type="text"]');

            $(inputObj).val($(this).text()).attr('data-n', $(this).attr('data-n'));

            $(this).parent().find('li').removeClass('active');
            $(this).addClass('active');

            self.hideAll();

            if ($(inputObj).attr('id') == 'sPro') {
                $('#sCity').val('');
                $('#sArea').val('');
                self.updateCityList();
            }
            if ($(inputObj).attr('id') == 'sCity') {
                $('#sArea').val('');
                self.updateAreaList();
            }

            e.stopPropagation();
        });
    };

    // 隐藏所有select列表
    this.hideAll = function() {
        $('.select_out input[type="text"]').removeClass('active');
        $('.select_out ul').slideUp();
    };

    // 更新城市列表
    this.updateCityList = function() {
        var data = proData[parseInt($('#sPro').attr('data-n'))].city;
        var str = '';
        for (var i = 0; i < data.length; i++) {
            str += '<li data-n="' + i + '"><i></i>' + data[i].name + '</li>';
        }
        $('#sCityList').html(str);

        if (data.length == 1) {
            $('#sCityList li').eq(0).click();
        }
    };

    // 更新区域列表
    this.updateAreaList = function() {
        var data = proData[parseInt($('#sPro').attr('data-n'))].city[parseInt($('#sCity').attr('data-n'))].district;
        var str = '';
        for (var i = 0; i < data.length; i++) {
            str += '<li data-n="' + i + '"><i></i>' + data[i] + '</li>';
        }
        $('#sAreaList').html(str);
    };

    // 初始化省份列表
    this.initProList = function() {
        $('#sProList').html('');
        $('#sCityList').html('');
        $('#sAreaList').html('');

        var str = '';
        for (var i = 0; i < proData.length; i++) {
            str += '<li data-n="' + i + '"><i></i>' + proData[i].name + '</li>';
        }
        $('#sProList').html(str);
    };

    this.init = function() {
        self.createEvent();
        self.initProList();
    };

    this.init();
})
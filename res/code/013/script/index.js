/**
 * index.html
 * @authors shikkya
 * @date    2020-03-07
 * @version $Id$
 */

$(function() {
    var self = this;
    this.detailInfoHtml = ''; // 存储正文 便于关键词搜索还原

    this.createEvent = function() {

        // 监听滚动条 搜索框悬浮
        window.onscroll = function() {
            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            if (scrollTop > 64) {
                var left = $('#detailSearch').offset().left;
                var wid = $('#detailSearch').width();
                $('#detailSearch').css({
                    width: wid + 'px',
                    position: 'fixed',
                    left: left + 'px'
                })
            } else {
                $('#detailSearch').css({
                    width: 'auto',
                    position: 'relative',
                    left: '0px'
                })
            };
        }

        // 搜索监听回车
        $('#searchWord').bind('keypress', function(e) {
            e = e ? e : window.event;
            if (e.keyCode == 13 && ($('#curNum').html() == '0' || $('#searchWord').val() != $('.s_keyword').html())) {
                $('#searchBtn').click();
            } else if (e.keyCode == 13) {
                $('#nextWord').click();
            }
        });

        // 正文搜索 监听输入
        // $('#searchWord').bind('input propertychange', function() {
        // });

        // 点击搜索按钮
        $('#detailSearch').delegate('#searchBtn', 'click', function() {
            var val = $('#searchWord').val();
            if ($.trim(val) != '') {
                self.searchWordFromInfo(val);
            } else {
                $('#detailInfo').html(self.detailInfoHtml);
                $('#searchWord').val('');
                $('#curNum').html('0');
                $('#totalNum').html('0');
                $('#goTop').click();
            }
        })

        // 点击上一条
        $('#detailSearch').delegate('#preWord', 'click', function() {
            var curNum = parseInt($('#curNum').text());
            var totalNum = parseInt($('#totalNum').text());
            if (totalNum == 0) {
                return false;
            }
            if (curNum > 1) {
                self.goSearchWordNum(curNum - 1);
            } else {
                self.goSearchWordNum(totalNum);
            }
        })

        // 点击下一条
        $('#detailSearch').delegate('#nextWord', 'click', function() {
            var curNum = parseInt($('#curNum').text());
            var totalNum = parseInt($('#totalNum').text());
            if (totalNum == 0) {
                return false;
            }
            if (curNum == totalNum) {
                self.goSearchWordNum(1);
            } else {
                self.goSearchWordNum(curNum + 1);
            }
        })

        // 点击返回顶部
        $('#goTop').click(function() {
            $('body,html').animate({ scrollTop: 0 }, 200);
        });
    }

    // 搜索关键词
    this.searchWordFromInfo = function(keyword) {
        // 还原
        $('#detailInfo').html(self.detailInfoHtml);
        $('#curNum').html('0');
        $('#totalNum').html('0');

        var totalNum = 0;
        self.curSearchWordNum = 0;
        $('#detailInfo').find('p').each(function() {
            var tempArr = new Array();
            var tempHtml = '';

            if ($(this).text().indexOf(keyword) > -1) {
                tempArr = $(this).html().split(keyword);
                if (tempArr.length > 1) {
                    for (var i = 0; i < tempArr.length; i++) {
                        if (i != 0) {
                            tempHtml += '<font class="s_keyword">' + keyword + '</font>';
                            totalNum++;
                        }
                        tempHtml += tempArr[i];
                    }
                    $(this).html(tempHtml);
                }
            }
        })
        $('#totalNum').html(totalNum);
        if (totalNum > 0) {
            self.goSearchWordNum(1);
        } else {
            $('#goTop').click();
        }
    }

    // 跳至第几条
    this.goSearchWordNum = function(num) {
        $('#curNum').html(num);
        $('#detailInfo').find('.s_keyword').removeClass('active');
        num--;
        $('#detailInfo').find('.s_keyword').eq(num).addClass('active');

        var top = $('#detailInfo').find('.s_keyword').eq(num).offset().top;
        top -= 120;
        $('body,html').animate({ scrollTop: top }, 200);
    }

    this.init = function() {
        this.createEvent();

        self.detailInfoHtml = $('#detailInfo').html();
        $('#goTop').click();
    }

    self.init();
})
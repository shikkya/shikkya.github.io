/**
 * index.html
 * @authors shikkya
 * @date    2020-03-07
 * @version $Id$
 */

$(function() {

    var self = this;

    this.detailInfoHtml = ''; // 存储正文 便于关键词搜索还原
    this.totalNum = ''; // 搜索结果总数
    this.keywordStr = ''; // 搜索词

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
                self.keywordStr = val;
                self.searchStart();
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
            if (self.totalNum == 0) {
                return false;
            }
            if (curNum > 1) {
                self.goSearchWordNum(curNum - 1);
            } else {
                self.goSearchWordNum(self.totalNum);
            }
        })

        // 点击下一条
        $('#detailSearch').delegate('#nextWord', 'click', function() {
            var curNum = parseInt($('#curNum').text());
            if (self.totalNum == 0) {
                return false;
            }
            if (curNum == self.totalNum) {
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

    // 开始搜索
    this.searchStart = function() {
        // 还原
        $('#detailInfo').html(self.detailInfoHtml);
        $('#curNum').html('0');
        $('#totalNum').html('0');

        self.totalNum = 0;
        self.ergodicNode($('#detailInfo'));

        $('#totalNum').html(self.totalNum);
        if (self.totalNum > 0) {
            self.goSearchWordNum(1);
        } else {
            $('#goTop').click();
        }
    }

    // 遍历节点
    this.ergodicNode = function(obj) {

        if (obj.hasClass('s_keyword')) { // 跳过新增的高亮节点
            return false;
        }

        var childNodeNum = obj.children().length; // 子节点数量

        if (childNodeNum == 0) { // 无子节点 搜索
            obj.html(self.searchFromStr(obj.text()));
        } else {
            var tempChildHtmlArr = []; // 所有子节点的html
            obj.children().each(function() {
                tempChildHtmlArr.push($(this).prop('outerHTML'));
            });

            obj.html(self.searchFromNode(obj.html(), tempChildHtmlArr, 0));

            obj.children().each(function() { // 遍历所有子节点
                self.ergodicNode($(this));
            });
        }
    }

    // 切割子节点并搜索非节点部分
    this.searchFromNode = function(str, childHtmlArr, curIndex) {
        var tempArr = str.split(childHtmlArr[curIndex]);
        if (tempArr.length == 1) { // 只含一个节点不做处理
            return str;
        }

        tempArr[0] = tempArr[0] == '' ? '' : self.searchFromStr(tempArr[0]);

        if (curIndex == childHtmlArr.length - 1) { // 最后一个子节点
            tempArr[1] = tempArr[1] == '' ? '' : self.searchFromStr(tempArr[1]);
            return (tempArr[0] + childHtmlArr[curIndex] + tempArr[1]);
        }

        var tempStr = tempArr[0] + childHtmlArr[curIndex];
        curIndex++;
        return (tempStr + self.searchFromNode(tempArr[1], childHtmlArr, curIndex));
    }

    // 搜索str中的keyword并插入高亮标签
    this.searchFromStr = function(str) {
        if (str == '') {
            return '';
        }
        var tempArr = str.split(self.keywordStr);
        var tempHtml = '';
        for (var i = 0; i < tempArr.length; i++) {
            if (i != 0) {
                tempHtml += '<font class="s_keyword">' + self.keywordStr + '</font>';
                self.totalNum++;
            }
            tempHtml += tempArr[i];
        }
        return tempHtml;
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
/**
 * index.html
 * @authors shikkya
 * @date    2020-05-11
 * @version $Id$
 */

dataDemo = ['我的项目列表',
    '是否为基础数据',
    '前端开发',
    '搜索历史关键词',
    '这是一个示例',
    '浏览器实时搜索框',
    '监控文本的输入',
    '不利于定时器的添加',
    '代码规范',
    '隐藏结果列表',
    '输入的语言'
];

$(function() {
    var self = this;

    this.searchFlag = true;

    this.createEvent = function() {

        // 隐藏搜索结果列表
        $('body').on('click', function() {
            $('#searchList').hide();
        });

        // 阻止冒泡
        $('#keyWord,#searchList').on('click', function(e) {
            e.stopPropagation();
        });

        // 监控文本框输入
        $('#keyWord').on('input', function() { // 或用keyup代替input
            setTimeout(function() { // oninput在oncompositionend之前执行 需加定时器
                if (self.searchFlag) {
                    self.associateSearch();
                }
            }, 0);
        })

        // 中文输入开始
        $('#keyWord').on('compositionstart', function() {
            self.searchFlag = false;
        })

        // 中文输入结束
        $('#keyWord').on('compositionend', function() {
            self.searchFlag = true;
        })

        // 判断按键
        $('#keyWord').on('keyup', function(e) {
            e = e ? e : window.event;

            if (e.keyCode == 13) { // 回车
                $('#searchBtn').click();
            } else if (e.keyCode == 38) { // 上
                self.checkSearchList('up');
            } else if (e.keyCode == 40) { // 下
                self.checkSearchList('down');
            }
        })

        // 点击搜索
        $('#searchBtn').on('click', function(e) {
            $('#searchList').hide();

            var keyWord = $('#keyWord').val().trim();
            if (keyWord == '') {
                alert('请输入搜索关键词');
            } else {
                alert('搜索 "' + keyWord + '"');
            }
        });
    };

    // 实时搜索
    this.associateSearch = function() {
        var keyWord = $('#keyWord').val().trim();

        if (keyWord == '') {
            $('#searchList').html('').hide();
            return false;
        }

        var html = '';
        for (var i = 0; i < dataDemo.length; i++) {
            if (dataDemo[i].indexOf(keyWord) > -1) {
                html += '<li>' + dataDemo[i] + '</li>';
            }
        }

        if (html == '') {
            $('#searchList').html('').hide();
        } else {
            $('#searchList').html('<li class="active">' + keyWord + '</li>' + html).show();
        }
    };

    // 按键选择搜索结果列表
    this.checkSearchList = function(type) {
        if ($('#searchList').is(':hidden')) {
            return false;
        }

        var indexNum = $('#searchList li.active').index();
        var listLen = $('#searchList').find('li').length;

        if (type == 'up') {
            indexNum--;
            if (indexNum < 0) {
                indexNum = listLen - 1;
            }
        } else if (type == 'down') {
            indexNum++;
            if (indexNum == listLen) {
                indexNum = 0;
            }
        }

        console.log(indexNum);

        $('#searchList li').removeClass('active');
        $('#searchList').find('li').eq(indexNum).addClass('active');
        $('#keyWord').val($('#searchList').find('li').eq(indexNum).html());
    };

    this.init = function() {
        self.createEvent();
    };

    this.init();
})
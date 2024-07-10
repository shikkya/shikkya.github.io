/**
 * 
 * @authors shikkya
 * @date    2021-01-27
 * @version $Id$
 */

$(function () {
    var self = this;

    // 是否结束
    isEnd = false;

    this.createEvent = function () {

        // option_box 选项
        // $('#optionBox').off('click').on('click', 'li', function () {
        //     if ($(this).hasClass('unable')) {
        //         return false;
        //     }
        //     $(this).addClass('active').siblings('li').removeClass('active');
        // })

        // option_box 开关
        $('#optionBox').off('click').on('click', 'span', function () {
            $(this).toggleClass('active')
        })

        // handle_box 开始游戏
        $('#startBtn').off('click').on('click', function () {

            // 保存设置 落子提示
            $('#mapTab').attr('data-isClue', $('#optionBox span').hasClass('active') ? 1 : 0);

            // 初始化
            self.initGame();

            // 标记所有玩家可操作
            self.searchHandle();

            $('.step').removeClass('active');
            $('.step[data-n="2"]').addClass('active');
        })

        // handle_box 重新开始
        $('#restartBtn').off('click').on('click', function () {
            if (isEnd) {
                // 初始化
                self.initGame();
                // 标记所有玩家可操作
                self.searchHandle();
            }
            else {
                $('#modalSubBtn').attr('data-t', 'restart');
                $('#confirmModal .modal_content').html('游戏进度不会被保存<br/>确定重新开始？');
                $('#confirmModal').show();
            }
        })

        // handle_box 离开游戏
        $('#backBtn').off('click').on('click', function () {
            if (isEnd) {
                $('.step').removeClass('active');
                $('.step[data-n="1"]').addClass('active');
            }
            else {
                $('#modalSubBtn').attr('data-t', 'back');
                $('#confirmModal .modal_content').html('游戏进度不会被保存<br/>确定离开？');
                $('#confirmModal').show();
            }
        })

        // map_box 玩家落子
        $('#mapTab').off('click').on('click', '.td', function () {
            var type = $(this).attr('data-t');
            if (isEnd || type != 'handle') {
                // showMsg('请选择正确的位置');
                return false;
            }

            // 玩家落子
            $('#mapTab .td[data-t="handle"]').attr('data-t', 'null');
            var x = parseInt($(this).attr('data-i').split('_')[0]);
            var y = parseInt($(this).attr('data-i').split('_')[1]);
            self.tryHandle(x, y, 'black', 2);

            // 检查当前状态
            if (!self.checkState()) {
                return false;
            }

            setTimeout(function () {
                // 电脑落子
                var maxObj = {
                    total: 0,
                    x: 0,
                    y: 0
                };
                $('#mapTab .td[data-t="null"]').each(function () {
                    var x = parseInt($(this).attr('data-i').split('_')[0]);
                    var y = parseInt($(this).attr('data-i').split('_')[1]);
                    var n = self.tryHandle(x, y, 'white', 1);
                    if (n > maxObj.total) {
                        maxObj.total = n;
                        maxObj.x = x;
                        maxObj.y = y;
                    }
                })
                if (maxObj.total > 0) {
                    self.tryHandle(maxObj.x, maxObj.y, 'white', 2);
                }
                else {
                    isEnd = true;
                }

                // 检查当前状态
                if (!self.checkState()) {
                    return false;
                }

                // 标记所有玩家可操作
                self.searchHandle();
            }, 500)
        })

        // modal 确认
        $('#modalSubBtn').off('click').on('click', function () {
            isEnd = true;
            $('#confirmModal').hide();
            $('#' + $(this).attr('data-t') + 'Btn').click();
        })

        // modal 关闭
        $('#modalCloseBtn').off('click').on('click', function () {
            $('#confirmModal').hide();
        })
    }

    // 初始化
    this.initGame = function () {
        isEnd = false;
        $('#stateBox').attr('data-t', 1);
        $('#statisticBox b').html('02');
        var html = '';
        for (var i = 0; i < 8; i++) {
            html += '<div class="tr">';
            for (var j = 0; j < 8; j++) {
                // black
                if ((i == 3 && j == 4) || (i == 4 && j == 3)) {
                    html += '<div class="td" data-t="black" data-i="' + i + '_' + j + '"></div>';
                }
                // white
                else if ((i == 3 && j == 3) || (i == 4 && j == 4)) {
                    html += '<div class="td" data-t="white" data-i="' + i + '_' + j + '"></div>';
                }
                // 空
                else {
                    html += '<div class="td" data-t="null" data-i="' + i + '_' + j + '"></div>';
                }
            }
            html += '</div>';
        }
        $('#mapTab').html(html);
        console.log($('#mapTab .td').eq(0).width())
        $('#mapTab .td').css({
            'height': $('#mapTab .td').eq(0).width() / 10 + 'rem'
        });
    }

    // 标记所有玩家可操作
    this.searchHandle = function () {
        $('#mapTab .td[data-t="handle"]').attr('data-t', 'null');
        $('#mapTab .td[data-t="null"]').each(function () {
            var x = parseInt($(this).attr('data-i').split('_')[0]);
            var y = parseInt($(this).attr('data-i').split('_')[1]);
            if (self.tryHandle(x, y, 'black', 1) > 0) {
                $(this).attr('data-t', 'handle');
            }
        })
        if ($('#mapTab .td[data-t="handle"]').length == 0) {
            self.endGame();
        }
    }

    // 模拟操作 1计算 2执行
    this.tryHandle = function (x, y, cur, type) {

        var total = 0;

        // 执行
        if (type == 2) {
            $('#mapTab .td[data-i="' + x + '_' + y + '"]').attr('data-t', cur);
        }

        // 上
        if (x > 1) {
            var n = x - 1;
            for (var i = x - 1; i >= 0; i--) {
                var t = $('#mapTab .td[data-i="' + i + '_' + y + '"]').attr('data-t');
                if (t == 'null' || t == 'handle') {
                    break;
                }
                if (t == cur) {
                    n = i;
                    break;
                }
            }
            if (n != x - 1) {
                total += x - n - 1;
                // 执行
                if (type == 2) {
                    for (var i = x - 1; i > n; i--) {
                        $('#mapTab .td[data-i="' + i + '_' + y + '"]').attr('data-t', cur);
                    }
                }
            }
        }

        // 下
        if (x < 6) {
            var n = x + 1;
            for (var i = x + 1; i < 8; i++) {
                var t = $('#mapTab .td[data-i="' + i + '_' + y + '"]').attr('data-t');
                if (t == 'null' || t == 'handle') {
                    break;
                }
                if (t == cur) {
                    n = i;
                    break;
                }
            }
            if (n != x + 1) {
                total += n - x - 1;
                // 执行
                if (type == 2) {
                    for (var i = x + 1; i < n; i++) {
                        $('#mapTab .td[data-i="' + i + '_' + y + '"]').attr('data-t', cur);
                    }
                }
            }
        }

        // 左
        if (y > 1) {
            var n = y - 1;
            for (var i = y - 1; i >= 0; i--) {
                var t = $('#mapTab .td[data-i="' + x + '_' + i + '"]').attr('data-t');
                if (t == 'null' || t == 'handle') {
                    break;
                }
                if (t == cur) {
                    n = i;
                    break;
                }
            }
            if (n != y - 1) {
                total += y - n - 1;
                // 执行
                if (type == 2) {
                    for (var i = y - 1; i > n; i--) {
                        $('#mapTab .td[data-i="' + x + '_' + i + '"]').attr('data-t', cur);
                    }
                }
            }
        }

        // 右
        if (y < 6) {
            var n = y + 1;
            for (var i = y + 1; i < 8; i++) {
                var t = $('#mapTab .td[data-i="' + x + '_' + i + '"]').attr('data-t');
                if (t == 'null' || t == 'handle') {
                    break;
                }
                if (t == cur) {
                    n = i;
                    break;
                }
            }
            if (n != y + 1) {
                total += n - y - 1;
                // 执行
                if (type == 2) {
                    for (var i = y + 1; i < n; i++) {
                        $('#mapTab .td[data-i="' + x + '_' + i + '"]').attr('data-t', cur);
                    }
                }
            }
        }

        // 左上
        if (x > 1 && y > 1) {
            var n = x - 1;
            for (var i = x - 1, j = y - 1; i >= 0 && j >= 0; i--, j--) {
                var t = $('#mapTab .td[data-i="' + i + '_' + j + '"]').attr('data-t');
                if (t == 'null' || t == 'handle') {
                    break;
                }
                if (t == cur) {
                    n = i;
                    break;
                }
            }
            if (n != x - 1) {
                total += x - n - 1;
                // 执行
                if (type == 2) {
                    for (var i = x - 1, j = y - 1; i > n; i--, j--) {
                        $('#mapTab .td[data-i="' + i + '_' + j + '"]').attr('data-t', cur);
                    }
                }
            }
        }

        // 右上
        if (x > 1 && y < 6) {
            var n = x - 1;
            for (var i = x - 1, j = y + 1; i >= 0 && j < 8; i--, j++) {
                var t = $('#mapTab .td[data-i="' + i + '_' + j + '"]').attr('data-t');
                if (t == 'null' || t == 'handle') {
                    break;
                }
                if (t == cur) {
                    n = i;
                    break;
                }
            }
            if (n != x - 1) {
                total += x - n - 1;
                // 执行
                if (type == 2) {
                    for (var i = x - 1, j = y + 1; i > n; i--, j++) {
                        $('#mapTab .td[data-i="' + i + '_' + j + '"]').attr('data-t', cur);
                    }
                }
            }
        }

        // 左下
        if (x < 6 && y > 1) {
            var n = x + 1;
            for (var i = x + 1, j = y - 1; i < 8 && j >= 0; i++, j--) {
                var t = $('#mapTab .td[data-i="' + i + '_' + j + '"]').attr('data-t');
                if (t == 'null' || t == 'handle') {
                    break;
                }
                if (t == cur) {
                    n = i;
                    break;
                }
            }
            if (n != x + 1) {
                total += n - x - 1;
                // 执行
                if (type == 2) {
                    for (var i = x + 1, j = y - 1; i < n; i++, j--) {
                        $('#mapTab .td[data-i="' + i + '_' + j + '"]').attr('data-t', cur);
                    }
                }
            }
        }

        // 右下
        if (x < 6 && y < 6) {
            var n = x + 1;
            for (var i = x + 1, j = y + 1; i < 8 && j < 8; i++, j++) {
                var t = $('#mapTab .td[data-i="' + i + '_' + j + '"]').attr('data-t');
                if (t == 'null' || t == 'handle') {
                    break;
                }
                if (t == cur) {
                    n = i;
                    break;
                }
            }
            if (n != x + 1) {
                total += n - x - 1;
                // 执行
                if (type == 2) {
                    for (var i = x + 1, j = y + 1; i < n; i++, j--) {
                        $('#mapTab .td[data-i="' + i + '_' + j + '"]').attr('data-t', cur);
                    }
                }
            }
        }

        return total;
    }

    // 检查当前状态
    this.checkState = function () {
        // 比分
        $('#statisticBox b[data-t="black"]').html(
            self.formatNum($('#mapTab .td[data-t="black"]').length)
        );
        $('#statisticBox b[data-t="white"]').html(
            self.formatNum($('#mapTab .td[data-t="white"]').length)
        );

        // 结束
        if (isEnd || $('#mapTab .td[data-t="null"]').length == 0) {
            self.endGame();
            return false;
        }

        return true;
    }

    // 结束
    this.endGame = function () {
        var black = parseInt($('#statisticBox b[data-t="black"]').text().trim());
        var white = parseInt($('#statisticBox b[data-t="white"]').text().trim());
        // win
        if (black > white) {
            $('#mapResult p').html('你赢啦');
            $('#stateBox').attr('data-t', 2);
        }
        // lost
        else if (black < white) {
            $('#mapResult p').html('你输了');
            $('#stateBox').attr('data-t', 3);
        }
        // balance
        else {
            $('#mapResult p').html('平局');
            $('#stateBox').attr('data-t', 1);
        }
        $('#mapResult').show();
    }

    // 格式化数字
    this.formatNum = function (num) {
        return (parseInt(num) > 9 ? '' : '0') + parseInt(num);
    }

    this.init = function () {
        self.createEvent();
        mobileWid();
    }

    self.init();
})
/**
 * index.html
 * @authors shikkya
 * @date 2024-07-08
 */

$(function () {
    var self = this;

    // 是否结束
    isEnd = false;

    // 动画新增时间 css同步
    timeAdd = 300;

    // 动画更新时间 css同步
    timeChange = 600;

    // 步骤间隔时间
    timeResult = 300;

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
            $('#mapBox').attr('data-isClue', $('#optionBox span').hasClass('active') ? 1 : 0);

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
                $('#confirmModalSubBtn').attr('data-t', 'restart');
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
                $('#confirmModalSubBtn').attr('data-t', 'back');
                $('#confirmModal .modal_content').html('游戏进度不会被保存<br/>确定离开？');
                $('#confirmModal').show();
            }
        })

        // map_box 玩家落子
        $('#mapBox').off('click').on('click', '.td', async function () {

            var type = $(this).attr('data-t');

            if (isEnd || type != 'handle') {
                return false;
            }

            // 玩家落子
            $('#mapBox .td[data-t="handle"]').attr('data-t', 'null');
            var x = parseInt($(this).attr('data-i').split('_')[0]);
            var y = parseInt($(this).attr('data-i').split('_')[1]);
            self.addAnimation(x, y, 'black'); // 落子
            await delayFun(timeResult); // 延时
            self.searchPlan(x, y, 'black', 2);  // 翻棋

            // 判断是否继续
            if (isEnd) {
                return false;
            }

            // 延时
            await delayFun(timeResult + timeChange);

            // 电脑落子
            var maxObj = {
                total: 0,
                x: 0,
                y: 0
            };
            $('#mapBox .td[data-t="null"]').each(function () {
                var x = parseInt($(this).attr('data-i').split('_')[0]);
                var y = parseInt($(this).attr('data-i').split('_')[1]);
                var n = self.searchPlan(x, y, 'white', 1);
                if (n > maxObj.total) {
                    maxObj.total = n;
                    maxObj.x = x;
                    maxObj.y = y;
                }
            })
            if (maxObj.total > 0) {
                self.addAnimation(maxObj.x, maxObj.y, 'white'); // 落子
                await delayFun(timeResult); // 延时
                self.searchPlan(maxObj.x, maxObj.y, 'white', 2); // 翻棋
            }
            else {
                isEnd = true;
            }

            // 判断是否继续
            if (isEnd) {
                self.endGame();
                return false;
            }

            // 延时
            await delayFun(timeResult + timeChange);

            // 标记所有玩家可操作
            self.searchHandle();
        })

        // confirm_modal 确定
        $('#confirmModalSubBtn').off('click').on('click', function () {
            isEnd = true;
            $('#confirmModal').hide();
            $('#' + $(this).attr('data-t') + 'Btn').click();
        })

        // result_modal 再来一局
        $('#resultModalSubBtn').off('click').on('click', function () {
            $(this).siblings('.btn').click();
            $('#restartBtn').click();
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
        $('#mapBox').html(html);
        $('#mapBox .td').css({
            'height': $('#mapBox .td').eq(0).width() / 10 + 'rem'
        });
    }

    // 标记所有玩家可操作
    this.searchHandle = function () {
        $('#mapBox .td[data-t="handle"]').attr('data-t', 'null');
        $('#mapBox .td[data-t="null"]').each(function () {
            var x = parseInt($(this).attr('data-i').split('_')[0]);
            var y = parseInt($(this).attr('data-i').split('_')[1]);
            if (self.searchPlan(x, y, 'black', 1) > 0) {
                $(this).attr('data-t', 'handle');
            }
        })
        if ($('#mapBox .td[data-t="handle"]').length == 0) {
            self.endGame();
        }
    }

    // 寻找方案 1计算 2执行
    this.searchPlan = function (x, y, cur, type) {

        var total = 0;

        // 上
        if (x > 1) {
            var n = x - 1;
            for (var i = x - 1; i >= 0; i--) {
                var t = $('#mapBox .td[data-i="' + i + '_' + y + '"]').attr('data-t');
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
                        if ($('#mapBox .td[data-i="' + i + '_' + y + '"]').attr('data-t') != cur) {
                            self.changeAnimation(i, y);
                        }
                    }
                }
            }
        }

        // 下
        if (x < 6) {
            var n = x + 1;
            for (var i = x + 1; i < 8; i++) {
                var t = $('#mapBox .td[data-i="' + i + '_' + y + '"]').attr('data-t');
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
                        if ($('#mapBox .td[data-i="' + i + '_' + y + '"]').attr('data-t') != cur) {
                            self.changeAnimation(i, y);
                        }
                    }
                }
            }
        }

        // 左
        if (y > 1) {
            var n = y - 1;
            for (var i = y - 1; i >= 0; i--) {
                var t = $('#mapBox .td[data-i="' + x + '_' + i + '"]').attr('data-t');
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
                        if ($('#mapBox .td[data-i="' + x + '_' + i + '"]').attr('data-t') != cur) {
                            self.changeAnimation(x, i);
                        }
                    }
                }
            }
        }

        // 右
        if (y < 6) {
            var n = y + 1;
            for (var i = y + 1; i < 8; i++) {
                var t = $('#mapBox .td[data-i="' + x + '_' + i + '"]').attr('data-t');
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
                        if ($('#mapBox .td[data-i="' + x + '_' + i + '"]').attr('data-t') != cur) {
                            self.changeAnimation(x, i);
                        }
                    }
                }
            }
        }

        // 左上
        if (x > 1 && y > 1) {
            var n = x - 1;
            for (var i = x - 1, j = y - 1; i >= 0 && j >= 0; i--, j--) {
                var t = $('#mapBox .td[data-i="' + i + '_' + j + '"]').attr('data-t');
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
                        if ($('#mapBox .td[data-i="' + i + '_' + j + '"]').attr('data-t') != cur) {
                            self.changeAnimation(i, j);
                        }
                    }
                }
            }
        }

        // 右上
        if (x > 1 && y < 6) {
            var n = x - 1;
            for (var i = x - 1, j = y + 1; i >= 0 && j < 8; i--, j++) {
                var t = $('#mapBox .td[data-i="' + i + '_' + j + '"]').attr('data-t');
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
                        if ($('#mapBox .td[data-i="' + i + '_' + j + '"]').attr('data-t') != cur) {
                            self.changeAnimation(i, j);
                        }
                    }
                }
            }
        }

        // 左下
        if (x < 6 && y > 1) {
            var n = x + 1;
            for (var i = x + 1, j = y - 1; i < 8 && j >= 0; i++, j--) {
                var t = $('#mapBox .td[data-i="' + i + '_' + j + '"]').attr('data-t');
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
                        if ($('#mapBox .td[data-i="' + i + '_' + j + '"]').attr('data-t') != cur) {
                            self.changeAnimation(i, j);
                        }
                    }
                }
            }
        }

        // 右下
        if (x < 6 && y < 6) {
            var n = x + 1;
            for (var i = x + 1, j = y + 1; i < 8 && j < 8; i++, j++) {
                var t = $('#mapBox .td[data-i="' + i + '_' + j + '"]').attr('data-t');
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
                        if ($('#mapBox .td[data-i="' + i + '_' + j + '"]').attr('data-t') != cur) {
                            self.changeAnimation(i, j);
                        }
                    }
                }
            }
        }

        return total;
    }

    // 动画效果 新增
    this.addAnimation = function (x, y, type) {
        var dom = $('#mapBox .td[data-i="' + x + '_' + y + '"]');
        if (type != 'black' && type != 'white') {
            return false;
        }
        $(dom).attr('data-t', type);
        $(dom).addClass('add');
        setTimeout(() => {
            $(dom).removeClass('add');
            self.checkState();
        }, timeAdd);
    }

    // 动画效果 更改
    this.changeAnimation = function (x, y) {
        var dom = $('#mapBox .td[data-i="' + x + '_' + y + '"]');
        var type = $(dom).attr('data-t');
        if (type != 'black' && type != 'white') {
            return false;
        }
        $(dom).addClass('change');
        setTimeout(() => {
            $(dom).attr('data-t', type == 'black' ? 'white' : 'black');
            self.checkState();
        }, timeChange / 2);
        setTimeout(() => {
            $(dom).removeClass('change');
        }, timeChange);
    }

    // 检查当前状态
    this.checkState = function () {
        // 比分
        $('#statisticBox b[data-t="black"]').html(
            self.formatNum($('#mapBox .td[data-t="black"]').length)
        );
        $('#statisticBox b[data-t="white"]').html(
            self.formatNum($('#mapBox .td[data-t="white"]').length)
        );

        // 结束
        if (isEnd || $('#mapBox .td[data-t="null"]').length == 0) {
            self.endGame();
            return false;
        }

        return true;
    }

    // 结束
    this.endGame = function () {
        var black = parseInt($('#statisticBox b[data-t="black"]').text().trim());
        var white = parseInt($('#statisticBox b[data-t="white"]').text().trim());
        isEnd = true;
        // win
        if (black > white) {
            $('#resultModal .modal_content').html('恭喜恭喜，你赢啦！');
            $('#resultModal').show();
            $('#stateBox').attr('data-t', 2);
        }
        // lost
        else if (black < white) {
            $('#resultModal .modal_content').html('好可惜，你输喽！');
            $('#resultModal').show();
            $('#stateBox').attr('data-t', 3);
        }
        // balance
        else {
            $('#resultModal .modal_content').html('平局啦！');
            $('#resultModal').show();
            $('#stateBox').attr('data-t', 1);
        }
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
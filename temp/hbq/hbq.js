/**
 * 
 * @authors shikkya
 * @date    2021-01-27
 * @version $Id$
 */

$(function () {
    var self = this;

    // 人数 1 2
    this.playerNum = -1;

    // 单人顺序 1先黑 2后白
    this.playOrder = -1;

    // 地图 -1空 1黑 2白
    this.arrMap = new Array();

    // 当前 true黑 false白
    this.curPlayer = true;

    // 事件绑定
    this.createEventer = function () {

        $('input[name="playerNum"]').on('change', function () {
            if ($('input[name="playerNum"]:checked').val() == 1) {
                $('.play_order_box').show();
            }
            else {
                $('.play_order_box').hide();
            }
        })

        // 开始
        $('#start').on('click', function () {
            self.startGame();
        });

        // 屏蔽页面右键
        // document.oncontextmenu = function () {
        //     return false;
        // }

        // 点击可操作网格
        $('#tab').on('click', 'td.handle', function () {
            // var tempArr = $(this).attr('data-i').split('_');
            // self.clickHandle(parseInt(tempArr[0]), parseInt(tempArr[1]));

            // if (self.playerNum == 1) {

            // }
        });

        // 重新开始
        $('#restart').on('click', function () {
            if ($('td.handle').length == 60) {
                return false;
            }
            if (confirm("rs?")) {
                self.curPlayer = true;
                // 初始化
                self.initMap();
            }
        });

        // 返回
        $('#back').on('click', function () {
            if ($('td.handle').length == 60 || confirm("back?")) {
                $('.top').show();
                $('.bottom').hide();
            }
        });
    }

    // 点击
    // this.clickHandle = function (x, y) {

    //     var color = self.curPlayer ? 1 : 2;
    //     self.changeHandle(x, y, color);

    //     // 上
    //     if (x != 0) {
    //         for (var i = x - 1; i >= 0; i--) {
    //             if (self.arrMap[i][y] == color) {
    //                 for (var j = x - 1; j > i; j--) {
    //                     self.changeHandle(j, y, color);
    //                 }
    //                 break;
    //             }
    //         }
    //     }

    //     // 下
    //     if (x != self.mapSize - 1) {
    //         for (var i = x + 1; i < self.mapSize; i++) {
    //             if (self.arrMap[i][y] == color) {
    //                 for (var j = x + 1; j < i; j++) {
    //                     self.changeHandle(j, y, color);
    //                 }
    //                 break;
    //             }
    //         }
    //     }

    //     // 左
    //     if (y != 0) {
    //         for (var i = y - 1; i >= 0; i--) {
    //             if (self.arrMap[x][i] == color) {
    //                 for (var j = y - 1; j > i; j--) {
    //                     self.changeHandle(x, j, color);
    //                 }
    //                 break;
    //             }
    //         }
    //     }

    //     // 右
    //     if (y != self.mapSize - 1) {
    //         for (var i = y + 1; i < self.mapSize; i++) {
    //             if (self.arrMap[x][i] == color) {
    //                 for (var j = y + 1; j < i; j++) {
    //                     self.changeHandle(x, j, color);
    //                 }
    //                 break;
    //             }
    //         }
    //     }

    //     if ($('td.handle').length == 0) {
    //         self.gameEnd();
    //     }
    //     else {
    //         self.curPlayer = !self.curPlayer;
    //     }
    // }



    // 标记所有可操作
    this.searchHandle = function () {
        $('td.handle').removeClass('handle');

    }

    // 1查数 2执行
    this.handleFun = function (x, y, type) {
        var curColor = self.curPlayer ? 1 : 2;
        var otherColor = self.curPlayer ? 2 : 1;

        if (type == 1) {
            var killNum = 0;
        }

        // 上
        if (x != 0 && self.arrMap[x - 1][y] == otherColor) {
            for (var i = x - 1; i >= 0; i--) {
                if (self.arrMap[i][y] == -1) {
                    break;
                }
                if (self.arrMap[i][y] == curColor) {
                    if (type == 1) {
                        killNum += x - i - 1;
                    }
                    else if (type == 2) {
                        for (var j = x - 1; j > i; j--) {
                            self.changeHandle(j, y, curColor);
                        }
                    }
                    break;
                }
            }
        }

        // 下
        if (x != 7 && self.arrMap[x + 1][y] == otherColor) {
            for (var i = x + 1; i < 8; i++) {
                if (self.arrMap[i][y] == -1) {
                    break;
                }
                if (self.arrMap[i][y] == curColor) {
                    if (type == 1) {
                        killNum += i - x - 1;
                    }
                    else if (type == 2) {
                        for (var j = x + 1; j < i; j++) {
                            self.changeHandle(j, y, curColor);
                        }
                    }
                    break;
                }
            }
        }

        // 左
        if (y != 0 && self.arrMap[x][y - 1] == otherColor) {
            for (var i = y - 1; i >= 0; i--) {
                if (self.arrMap[x][i] == -1) {
                    break;
                }
                if (self.arrMap[x][i] == curColor) {
                    if (type == 1) {
                        killNum += y - i - 1;
                    }
                    else if (type == 2) {
                        for (var j = y - 1; j > i; j--) {
                            self.changeHandle(x, j, curColor);
                        }
                    }
                    break;
                }
            }
        }

        // 右
        if (y != 7 && self.arrMap[x][y + 1] == otherColor) {
            for (var i = y + 1; i < 8; i++) {
                if (self.arrMap[x][i] == -1) {
                    break;
                }
                if (self.arrMap[x][i] == curColor) {
                    if (type == 1) {
                        killNum += i - y - 1;
                    }
                    else if (type == 2) {
                        for (var j = y + 1; j < i; j++) {
                            self.changeHandle(x, j, curColor);
                        }
                    }
                    break;
                }
            }
        }
        /*
                0 0 0
                1 0 0
                0 1 0
                0 0 1

                
        */
        // 左上
        if (x != 0 && y != 0) {
            for (var i = 1; i <= (x > y ? y : x); i++) {
                if (self.arrMap[x - i][y - i] == -1) {
                    break;
                }
                if (self.arrMap[x - i][y - i] == color) {
                    totalNum += i - y - 1;
                    break;
                }
            }
        }

        if (type == 1) {
            if (killNum > 0) {
                $('td[data-i="' + x + '_' + y + '"]').addClass('handle');
            }
            return killNum;
        }
    }

    // 改变 
    this.changeHandle = function (x, y, color) {
        self.arrMap[x][y] = color;
        $('td[data-i="' + x + '_' + y + '"]').removeClass('blank handle co_1 co_2').addClass('co_' + color);
    }

    // 开始
    this.startGame = function () {
        // 获取设置参数
        self.playerNum = parseInt($('input[name="playerNum"]:checked').val());
        self.playOrder = self.playerNum == 1 ? parseInt($('input[name="playOrder"]:checked').val()) : -1;
        self.curPlayer = true;

        // 初始化
        self.initMap();

        // 标记所有可操作
        self.searchHandle();

        // 后台打印arrMap
        self.debugShowArrMap();

        $('.top').hide();
        $('.bottom').show();
    }

    // 初始化
    this.initMap = function () {
        var html_tab = '';
        self.arrMap = [];
        for (var i = 0; i < 8; i++) {
            html_tab += '<tr>';
            self.arrMap[i] = new Array();
            for (var j = 0; j < 8; j++) {
                if ((i == 3 && j == 3) || (i == 4 && j == 4)) { // w
                    html_tab += '<td class="co_2" data-i="' + i + '_' + j + '"></td>';
                    self.arrMap[i][j] = 2;
                }
                else if ((i == 3 && j == 4) || (i == 4 && j == 3)) { // b
                    html_tab += '<td class="co_1" data-i="' + i + '_' + j + '"></td>';
                    self.arrMap[i][j] = 1;
                }
                else { // null
                    html_tab += '<td class="blank" data-i="' + i + '_' + j + '"></td>';
                    self.arrMap[i][j] = -1;
                }
            }
            html_tab += '</tr>';
        }
        $('#tab').html(html_tab);
    }

    // 后台打印arrMap
    this.debugShowArrMap = function () {
        console.log('++++++++++ map ++++++++++');
        for (var i = 0; i < self.mapSize; i++) {
            var str = "";
            for (var j = 0; j < self.mapSize; j++) {
                str += self.arrMap[i][j] + ' ';
            }
            console.log(str);
        }
        console.log('++++++++++ map ++++++++++');
    }

    // 结束
    this.gameEnd = function () {
        // $('td.handle').removeClass('handle');
        // var blackNum = $('td.co_1').length;
        // var whiteNum = $('td.co_2').length;
        // var str = 'b:' + blackNum + ' w:' + whiteNum;
        // if (blackNum > whiteNum) {
        //     str += ' bwin';
        // }
        // else if (blackNum < whiteNum) {
        //     str += ' wwin';
        // }
        // else {
        //     str += ' soso';
        // }
        // alert(str);

        // 后台打印arrMap
        self.debugShowArrMap();
    }

    // 初始化
    this.init = function () {
        // 事件绑定
        self.createEventer();
    }

    self.init();
})
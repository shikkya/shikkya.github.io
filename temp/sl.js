/**
 * 
 * @authors shikkya
 * @date    2019-10-14
 * @version $Id$
 */

$(function() {
    var self = this;

    // 地图尺寸
    this.mapSize = 0;

    // 雷数
    this.bombNum = 0;

    // 已完成数
    this.stepCount = 0;

    // 已设旗数
    this.flagCount = 0;

    // 地图-正确 -1空 0雷 数
    this.arrMap = new Array();

    // 地图-游戏 -4亡 -3旗 -2未 -1空 数
    this.arrGame = new Array();

    // 事件绑定
    this.createEventer = function() {

        // 屏蔽页面右键
        document.oncontextmenu = function() {
            return false;
        }

        // 点击可操作网格
        $(this).delegate('td.handle', 'mousedown', function(e) {
            var x = parseInt($("#tab td").index(this) / self.mapSize);
            var y = parseInt($("#tab td").index(this) % self.mapSize);

            if (e.which == 1) { // 左键
                if (self.arrMap[x][y] > 0) { // 数
                    $(this).html(self.arrMap[x][y]);
                    self.arrGame[x][y] = self.arrMap[x][y];
                    $(this).removeClass('handle');
                    if ($(this).hasClass('flag')) {
                        $(this).removeClass('flag');
                        self.flagCount--;
                        self.stepCount--;
                    }
                    self.addStepCount();
                } else if (self.arrMap[x][y] == 0) { // 雷
                    self.arrGame[x][y] = -4;
                    alert('BOOM~');
                    self.gameEnd();
                } else { // 空
                    if ($(this).hasClass('flag')) {
                        $(this).removeClass('flag');
                        self.flagCount--;
                        self.stepCount--;
                    }
                    self.clickNone(x, y);
                }
            } else if (e.which == 3) { // 右键
                if ($(this).html() == '') {
                    $(this).html('<img src="./images/01.png"/>');
                    $(this).addClass('flag');
                    self.arrGame[x][y] = -3;
                    self.flagCount++;
                    self.addStepCount();
                } else if ($(this).find('img').length > 0) {
                    $(this).find('img').remove();
                    $(this).html('?');
                    self.arrGame[x][y] = -2;
                    self.flagCount--;
                    self.stepCount--;
                } else {
                    $(this).html('');
                    self.arrGame[x][y] = -2;
                }
            }
        });

        // 放弃游戏
        $(this).delegate('#giveUp', 'click', function() {
            if (confirm("gu?")) {
                self.gameEnd();
            }
        });

        // 重新开始
        $(this).delegate('.restart', 'click', function() {
            if (self.stepCount == 0) {
                self.reStartGame();
            } else if (confirm("rs?")) {
                self.reStartGame();
            }
        });
    }

    // 获取设置参数
    this.getSet = function() {
        self.mapSize = parseInt($('#mapSize').val());
        self.bombNum = parseInt($('#bombNum').val());
    }

    // 初始化网格
    this.initTab = function() {
        var html_tab = '';
        for (var i = 0; i < self.mapSize; i++) {
            html_tab += '<tr>';
            for (var j = 0; j < self.mapSize; j++) {
                html_tab += '<td class="handle" data-i="w' + i + j + '"></td>';
            }
            html_tab += '</tr>';
        }
        $('#tab').html(html_tab);
    }

    // 初始化数组
    this.initArr = function() {
        for (var i = 0; i < self.mapSize; i++) {
            self.arrMap[i] = new Array();
            self.arrGame[i] = new Array();
            for (var j = 0; j < self.mapSize; j++) {
                self.arrMap[i][j] = -1;
                self.arrGame[i][j] = -2;
            }
        }
    }

    // 初始化雷的位置
    this.initBomb = function() {
        var tempNum = 0;
        var x = 0;
        var y = 0;
        while (tempNum < self.bombNum) {
            x = self.randomNum(0, self.mapSize);
            y = self.randomNum(0, self.mapSize);
            if (self.arrMap[x][y] == -1) {
                self.arrMap[x][y] = 0;
                tempNum++;
            }
        }
    }

    // 初始化数字位置
    this.initNum = function() {
        for (var i = 0; i < self.mapSize; i++) {
            for (var j = 0; j < self.mapSize; j++) {
                if (self.arrMap[i][j] == -1) {
                    self.arrMap[i][j] = self.calcNum(i, j);
                }
            }
        }
    }

    // 根据坐标计算周边雷数
    this.calcNum = function(x, y) {
        var tempNum = 0;

        if (x >= 1 && y >= 1 && self.arrMap[x - 1][y - 1] == 0) {
            tempNum++;
        }

        if (x >= 1 && self.arrMap[x - 1][y] == 0) {
            tempNum++;
        }

        if (x >= 1 && y + 1 < self.mapSize && self.arrMap[x - 1][y + 1] == 0) {
            tempNum++;
        }

        if (y >= 1 && self.arrMap[x][y - 1] == 0) {
            tempNum++;
        }

        if (y + 1 < self.mapSize && self.arrMap[x][y + 1] == 0) {
            tempNum++;
        }

        if (x + 1 < self.mapSize && y >= 1 && self.arrMap[x + 1][y - 1] == 0) {
            tempNum++;
        }

        if (x + 1 < self.mapSize && self.arrMap[x + 1][y] == 0) {
            tempNum++;
        }

        if (x + 1 < self.mapSize && y + 1 < self.mapSize && self.arrMap[x + 1][y + 1] == 0) {
            tempNum++;
        }

        return tempNum == 0 ? -1 : tempNum;
    }

    // 随机整数 包括m不包括n
    this.randomNum = function(m, n) {
        var random = Math.floor(Math.random() * (m - n) + n);
        return random;
    }

    // 点击结果为空
    this.clickNone = function(x, y) {

        $('td[data-i="w' + x + y + '"]').removeClass('handle');
        self.arrGame[x][y] = -1;
        self.addStepCount();

        if (x >= 1 && y >= 1) {
            self.setNone(x - 1, y - 1);
        }

        if (x >= 1) {
            self.setNone(x - 1, y);
        }

        if (x >= 1 && y + 1 < self.mapSize) {
            self.setNone(x - 1, y + 1);
        }

        if (y >= 1) {
            self.setNone(x, y - 1);
        }

        if (y + 1 < self.mapSize) {
            self.setNone(x, y + 1);
        }

        if (x + 1 < self.mapSize && y >= 1) {
            self.setNone(x + 1, y - 1);
        }

        if (x + 1 < self.mapSize) {
            self.setNone(x + 1, y);
        }

        if (x + 1 < self.mapSize && y + 1 < self.mapSize) {
            self.setNone(x + 1, y + 1);
        }
    }

    // 处理结果为空
    this.setNone = function(x, y) {
        if ($('td[data-i="w' + x + y + '"]').hasClass('handle')) {
            if (self.arrMap[x][y] > 0) {
                $('td[data-i="w' + x + y + '"]').removeClass('handle');
                self.arrGame[x][y] = self.arrMap[x][y];
                $('td[data-i="w' + x + y + '"]').html(self.arrMap[x][y]);
                self.addStepCount();
            } else if (self.arrMap[x][y] == -1) {
                $('td[data-i="w' + x + y + '"]').removeClass('handle');
                self.arrGame[x][y] = self.arrMap[x][y];
                self.clickNone(x, y);
            }
        }
    }

    // 增加已完成数
    this.addStepCount = function() {
        self.stepCount++;
        if (self.stepCount == self.mapSize * self.mapSize && self.flagCount == self.bombNum) {
            alert('done');
            self.gameEnd();
        }
    }

    // 游戏结束
    this.gameEnd = function() {
        for (var i = 0; i < self.mapSize; i++) {
            for (var j = 0; j < self.mapSize; j++) {
                if (self.arrMap[i][j] != self.arrGame[i][j]) {
                    if (self.arrGame[i][j] == -4) { // 亡
                        $('td[data-i="w' + i + j + '"]').html('<img src="./images/06.png"/>');
                    } else if (self.arrGame[i][j] == -3 && self.arrMap[i][j] == 0) { // 旗 对
                        $('td[data-i="w' + i + j + '"]').html('<img src="./images/05.png"/>');
                    } else if (self.arrGame[i][j] == -3 && self.arrMap[i][j] != 0) { // 旗 错
                        $('td[data-i="w' + i + j + '"]').html('<img src="./images/07.png"/>');
                    } else if (self.arrGame[i][j] == -2) { // 未
                        if (self.arrMap[i][j] == 0) { // 雷
                            $('td[data-i="w' + i + j + '"]').html('<img src="./images/02.png"/>');
                        } else if (self.arrMap[i][j] == -1) { // 空
                            $('td[data-i="w' + i + j + '"]').html('');
                        } else { // 数
                            $('td[data-i="w' + i + j + '"]').html(self.arrMap[i][j]);
                        }
                    }
                }
            }
        }

        $('.handle').removeClass('handle');
        self.stepCount = 0;
        self.flagCount = 0;

        // 后台打印arrGame
        self.debugShowArrGame();
    }

    // 后台打印arrMap
    this.debugShowArrMap = function() {
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

    // 后台打印arrGame
    this.debugShowArrGame = function() {
        console.log('++++++++++ game ++++++++++');
        for (var i = 0; i < self.mapSize; i++) {
            var str = "";
            for (var j = 0; j < self.mapSize; j++) {
                str += self.arrGame[i][j] + ' ';
            }
            console.log(str);
        }
        console.log('++++++++++ game ++++++++++');
    }

    // 重新开始
    this.reStartGame = function() {
        self.stepCount = 0;
        self.flagCount = 0;

        // 初始化页面网格
        self.initTab();

        // 初始化数组
        self.initArr();

        // 初始化雷的位置
        self.initBomb();

        // 初始化数字位置
        self.initNum();

        // 后台打印arrMap
        self.debugShowArrMap();
    }

    // 初始化
    this.init = function() {
        // 事件绑定
        self.createEventer();

        // 获取设置参数
        self.getSet();

        // 初始化页面网格
        self.initTab();

        // 初始化数组
        self.initArr();

        // 初始化雷的位置
        self.initBomb();

        // 初始化数字位置
        self.initNum();

        // 后台打印arrMap
        self.debugShowArrMap();
    }

    self.init();
})
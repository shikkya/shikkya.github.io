/**
 * index.html
 * @authors shikkya
 * @date    2021-06-23
 * @version $Id$
 */

var jm = null;
var data = [
    { id: 'root', isroot: true, topic: 'JsMind' },
    { id: 'base', parentid: 'root', topic: '基本用法', direction: 'left', className: 'c_1', htmlBehind: '<i></i>' },
    { id: 'frame', parentid: 'base', topic: '基本框架', className: 'c_1' },
    { id: 'data', parentid: 'base', topic: '数据格式', className: 'c_1' },
    { id: 'data_1', parentid: 'data', topic: '树对象格式', className: 'c_1' },
    { id: 'data_2', parentid: 'data', topic: '表对象格式', className: 'c_1' },
    { id: 'data_3', parentid: 'data', topic: 'freemind格式', className: 'c_1' },
    { id: 'theme', parentid: 'base', topic: '主题', expanded: false, className: 'c_1' },
    { id: 'theme_primary', parentid: 'theme', topic: 'primary', className: 'c_1' },
    { id: 'theme_warning', parentid: 'theme', topic: 'warning', className: 'c_1' },
    { id: 'theme_danger', parentid: 'theme', topic: 'danger', className: 'c_1' },
    { id: 'theme_success', parentid: 'theme', topic: 'success', className: 'c_1' },
    { id: 'theme_info', parentid: 'theme', topic: 'info', className: 'c_1' },
    { id: 'theme_greensea', parentid: 'theme', topic: 'greensea', className: 'c_1' },
    { id: 'theme_nephrite', parentid: 'theme', topic: 'nephrite', className: 'c_1' },
    { id: 'theme_belizehole', parentid: 'theme', topic: 'belizehole', className: 'c_1' },
    { id: 'theme_wisteria', parentid: 'theme', topic: 'wisteria', className: 'c_1' },
    { id: 'theme_asphalt', parentid: 'theme', topic: 'asphalt', className: 'c_1' },
    { id: 'theme_orange', parentid: 'theme', topic: 'orange', className: 'c_1' },
    { id: 'theme_pumpkin', parentid: 'theme', topic: 'pumpkin', className: 'c_1' },
    { id: 'theme_pomegranate', parentid: 'theme', topic: 'pomegranate', className: 'c_1' },
    { id: 'theme_clouds', parentid: 'theme', topic: 'clouds', className: 'c_1' },
    { id: 'theme_asbestos', parentid: 'theme', topic: 'asbestos', className: 'c_1' },
    { id: 'select', parentid: 'root', topic: '选项', direction: 'left', className: 'c_2', htmlBehind: '<i></i>' },
    { id: 'select_1', parentid: 'select', topic: '综述', className: 'c_2' },
    { id: 'select_2', parentid: 'select', topic: '常规选项', className: 'c_2' },
    { id: 'select_3', parentid: 'select', topic: '布局选项', className: 'c_2' },
    { id: 'select_4', parentid: 'select', topic: '快捷键', className: 'c_2' },
    { id: 'handle', parentid: 'root', topic: '界面操控', direction: 'right', className: 'c_3', htmlBefore: '<i></i>' },
    { id: 'handle_1', parentid: 'handle', topic: '显示思维导图', className: 'c_3' },
    { id: 'handle_2', parentid: 'handle', topic: '查找节点', expanded: false, className: 'c_3' },
    { id: 'h_2_1', parentid: 'handle_2', topic: '获取根节点', className: 'c_3' },
    { id: 'h_2_2', parentid: 'handle_2', topic: '根据 id 查找节点', className: 'c_3' },
    { id: 'h_2_3', parentid: 'handle_2', topic: '获取选中的节点', className: 'c_3' },
    { id: 'h_2_4', parentid: 'handle_2', topic: '查找相邻的节点', className: 'c_3' },
    { id: 'h_2_5', parentid: 'handle_2', topic: '获取父节点', className: 'c_3' },
    { id: 'h_2_6', parentid: 'handle_2', topic: '获取子节点集合', className: 'c_3' },
    { id: 'handle_3', parentid: 'handle', topic: '操作节点', expanded: false, className: 'c_3' },
    { id: 'h_3_1', parentid: 'handle_3', topic: '选中节点', className: 'c_3' },
    { id: 'h_3_2', parentid: 'handle_3', topic: '收起子节点', className: 'c_3' },
    { id: 'h_3_3', parentid: 'handle_3', topic: '展开子节点', className: 'c_3' },
    { id: 'h_3_4', parentid: 'handle_3', topic: '收起或展开子节点', className: 'c_3' },
    { id: 'h_3_5', parentid: 'handle_3', topic: '展开全部子节点', className: 'c_3' },
    { id: 'h_3_6', parentid: 'handle_3', topic: '展开至层级', className: 'c_3' },
    { id: 'h_3_7', parentid: 'handle_3', topic: '移动节点', className: 'c_3' },
    { id: 'h_3_8', parentid: 'handle_3', topic: '启用编辑', className: 'c_3' },
    { id: 'h_3_9', parentid: 'handle_3', topic: '禁止编辑', className: 'c_3' },
    { id: 'h_3_10', parentid: 'handle_3', topic: '编辑节点', className: 'c_3' },
    { id: 'h_3_11', parentid: 'handle_3', topic: '停止编辑', className: 'c_3' },
    { id: 'handle_4', parentid: 'handle', topic: '编辑节点', expanded: false, className: 'c_3' },
    { id: 'h_4_1', parentid: 'handle_4', topic: '添加节点', className: 'c_3' },
    { id: 'h_4_2', parentid: 'handle_4', topic: '在指定位置前插入节点', className: 'c_3' },
    { id: 'h_4_3', parentid: 'handle_4', topic: '在指定位置后插入节点', className: 'c_3' },
    { id: 'h_4_4', parentid: 'handle_4', topic: '删除节点', className: 'c_3' },
    { id: 'h_4_5', parentid: 'handle_4', topic: '更新节点', className: 'c_3' },
    { id: 'handle_5', parentid: 'handle', topic: '设置样式', expanded: false, className: 'c_3' },
    { id: 'h_5_1', parentid: 'handle_5', topic: '设置主题', className: 'c_3' },
    { id: 'h_5_2', parentid: 'handle_5', topic: '设置背景色/前景色', className: 'c_3' },
    { id: 'h_5_3', parentid: 'handle_5', topic: '设置字体', className: 'c_3' },
    { id: 'h_5_4', parentid: 'handle_5', topic: '设置背景图片', className: 'c_3' },
    { id: 'handle_6', parentid: 'handle', topic: '获取数据', className: 'c_3', htmlBehind: '<span>[<font>100%</font>]</span>' },
    { id: 'h_6_1', parentid: 'handle_6', topic: '获取元数据', className: 'c_3', htmlBehind: '<span>[<font>30%</font>]</span>' },
    { id: 'h_6_2', parentid: 'handle_6', topic: '获取数据', className: 'c_3', htmlBehind: '<span>[<font>70%</font>]</span>' },
    { id: 'handle_7', parentid: 'handle', topic: '其它操作', className: 'c_3' },
    { id: 'h_7_1', parentid: 'handle_7', topic: '清除节点的选中', className: 'c_3' },
    { id: 'h_7_2', parentid: 'handle_7', topic: '判断节点是否可见', className: 'c_3' },
    { id: 'devote', parentid: 'root', topic: '参与贡献', className: 'c_4', htmlBefore: '<i></i>' }
];

$(function () {
    var self = this;

    this.modalTimer = null;

    this.curKeyWord = ''; // 搜索 当前搜索词
    this.resultArr = []; // 搜索 结果id
    this.curNum = 0; // 搜索 当前条数

    this.createEventer = function () {

        // 滚动缩放
        document.getElementById('jsMindBox').onwheel = function (e) {
            var delta = e.wheelDelta || -e.deltaY + 40;
            if (delta > 0) {
                self.zoomIn();
            } else {
                self.zoomOut();
            }
        }
        document.getElementById('jsMindBox').addEventListener('mousewheel', function (e) {
            var delta = e.wheelDelta || -e.deltaY + 40;
            if (delta > 0) {
                self.zoomIn();
            } else {
                self.zoomOut();
            }
        }, false);

        // 悬浮弹窗
        $('#jsMindBox').on('mouseenter', 'jmnode', function () {
            var _self = this;
            self.modalTimer = setTimeout(function () {
                $('.modal').remove();
                $(_self).append(
                    '<div class="modal">' +
                    '<div>' +
                    '<div><span>JM</span></div>' +
                    '<div>' +
                    '<a href="https://github.com/hizzgdev/jsmind/blob/master/docs/zh/index.md" target="_blank">点击进入JSMind中文文档</a>&nbsp;[' + $(_self).attr('nodeid') + ']' +
                    '</div>' +
                    '</div>' +
                    '</div>');

                // 弹窗
                var modalWid = $('.modal').outerWidth();
                var modalHei = $('.modal').outerHeight();

                // 节点
                var nodeWid = $(_self).outerWidth();

                // 横纵边界
                var xb = $('#jsMindBox').offset().left + $('#jsMindBox').width();
                var ya = $('#jsMindBox').offset().top;
                var yb = $('#jsMindBox').offset().top + $('#jsMindBox').height();

                // 放大倍数
                var scaleVal = parseFloat($('jmnodes').css("transform").split(',')[3]);

                // 最终定位xy值
                var x = parseFloat(($(_self).position().left / scaleVal).toFixed(2)) + nodeWid;
                var y = parseFloat(($(_self).position().top / scaleVal).toFixed(2));

                // 防止横向右侧溢出
                if ($(_self).offset().left + nodeWid + modalWid >= xb) {
                    x -= nodeWid + modalWid;
                }

                // 防止纵向上方溢出
                if ($(_self).offset().top <= ya) {
                    y += ya - $(_self).offset().top;
                }
                // 防止纵向下方溢出
                else if ($(_self).offset().top + modalHei >= yb) {
                    y -= $(_self).offset().top + modalHei - yb;
                }

                $('.modal').css({
                    left: x + 'px',
                    top: y + 'px'
                })

                $('.modal').fadeIn(350);
            }, 1000)
        }).on('mouseleave', 'jmnode', function () {
            clearTimeout(self.modalTimer);
            $('.modal').fadeOut(350);
            setTimeout(function () {
                $('.modal').remove();
            }, 350)
        })

        // 点击节点
        $('#jsMindBox').on('click', 'jmnode', function (e) {
            if ($(this).find('jmexpander').length > 0) {
                $(this).find('jmexpander')[0].click();
            }
            e.stopPropagation();
        })
        $('#jsMindBox').on('click', 'jmexpander', function (e) {
            e.stopPropagation();
        })

        // 搜索监听回车
        $('#searchVal').on('keypress', function (e) {
            e = e ? e : window.event;
            if (e.keyCode == 13 && $('#searchVal').val() != '' && $('#searchVal').val() == self.curKeyWord) {
                self.next();
            } else if (e.keyCode == 13) {
                self.search();
            }
        })

        // 搜索 上一个
        $('#prevBtn').click(function () {
            self.prev();
        })

        // 搜索 下一个
        $('#nextBtn').click(function () {
            self.next();
        })

        // 搜索 点击列表
        $('#resultList').on('click', '.result_li', function () {
            $('.result_li').removeClass('active');
            $(this).addClass('active');
            self.curNum = parseInt($(this).attr('data-i')) + 1;
            $('#curNum').text(self.curNum);
            self.toNode();
        })

        // 下载图片
        // $('#downLoadBtn').click(function () {
        //     jm.screenshot.shootDownload();
        // })

        // 放大
        $('#zoomInBtn').click(function () {
            self.zoomIn();
        })

        // 缩小
        $('#zoomOutBtn').click(function () {
            self.zoomOut();
        })

        // 展开全部
        $('#expandAllBtn').click(function () {
            jm.expand_all();
            self.centerNode($('jmnode.root').attr('nodeid'));
        })
    }

    // 初始化 JsMind
    this.jsMindInit = function () {
        var mind = {
            // 元数据 定义思维导图的名称、作者、版本等信息
            meta: {
                name: 'jsMindDemo',
                author: 'shikkya',
                version: '0.2'
            },
            // 数据格式声明
            format: 'node_array',
            // 数据内容
            data: data
        };

        var options = {
            container: 'jsMindContainer', // 容器ID 必填
            editable: false, // 是否启用编辑
            theme: 'shikkya', // 主题
            mode: 'full', // 显示模式 full、side
            view: {
                line_width: 1, // 线条粗细
                line_color: '#cdcdcd' // 线条颜色
            }
        };

        jm = new jsMind(options);
        jm.show(mind);
        self.centerNode($('jmnode.root').attr('nodeid'));
    }

    // 初始化 拖拽
    this.dragInit = function () {
        var box = $('#jsMindBox');
        var isDown = false;
        var x = 0;
        var y = 0;

        $('#jsMindBox').on('mousedown', function (e) {
            isDown = true;
            x = e.clientX;
            y = e.clientY;
        })

        $('#jsMindBox').on('mouseup', function (e) {
            isDown = false;
        })

        $(window).on('mousemove', function (e) {
            if (!isDown || e.clientX < box.offset().left || e.clientX > box.offset().left + box.width() || e.clientY < box.offset().top || e.clientY > box.offset().top + box.height()) {
                isDown = false;
                return false;
            }

            var xx = e.clientX - x + parseFloat($('#jsMindContainer').css("transform").split(',')[4]);
            var yy = e.clientY - y + parseFloat($('#jsMindContainer').css("transform").split(',')[5]);

            $('#jsMindContainer').css('transform', 'translate(' + xx + 'px, ' + yy + 'px)');

            x = e.clientX;
            y = e.clientY;
        })
    }

    // 放大
    this.zoomIn = function () {
        if (jm.view.zoomIn()) {
            $('#zoomOutBtn').attr('disabled', false);
        } else {
            $('#zoomInBtn').attr('disabled', true);
        }
    }

    // 缩小
    this.zoomOut = function () {
        if (jm.view.zoomOut()) {
            $('#zoomInBtn').attr('disabled', false);
        } else {
            $('#zoomOutBtn').attr('disabled', true);
        }
    }

    // 搜索
    this.search = function () {

        $('#curNum').text(0);
        $('#totalNum').text(0);
        self.curKeyWord = '';
        self.resultArr = [];
        self.curNum = 0;

        var val = $('#searchVal').val().trim();
        if (val == '') {
            return false;
        }

        self.curKeyWord = val;

        var html = '';
        for (var i = 0; i < data.length; i++) {
            if (data[i].topic.indexOf(val) > -1 && !data[i].isroot) {
                var nodeParentsStr = self.getNodeParents(data[i].id);
                var nodeStr = data[i].topic.split(val).join('<b>' + val + '</b>');
                html += '<li>' +
                    '<div class="result_li' + (self.resultArr.length == 0 ? ' active' : '') + '" data-i="' + self.resultArr.length + '" title="' + nodeParentsStr + '">' + nodeStr +
                    '<p>' + nodeParentsStr + '</p>' +
                    '</div>' +
                    '</li>';
                self.resultArr.push(i);
            }
        }

        if (self.resultArr.length == 0) {
            $('#resultList').html('<li class="no_data">暂无搜索结果</li>');
        } else {
            $('#resultList').html(html);

            $('#curNum').text(1);
            $('#totalNum').text(self.resultArr.length);
            self.curNum = 1;
            self.toNode();
        }
    }

    // 搜索 获取面包父节点
    this.getNodeParents = function (nodeId) {
        for (var i = 0; i < data.length; i++) {
            if (data[i].id == nodeId) {
                if (data[i].parentid == 'root') {
                    return data[i].topic;
                } else {
                    return self.getNodeParents(data[i].parentid) + ' - ' + data[i].topic;
                }
            }
        }
    }

    // 搜索 跳转节点
    this.toNode = function () {
        var index = self.resultArr[self.curNum - 1];
        var nodeId = data[index].id;

        // 展开
        self.expandNode(nodeId);

        // 选中
        $('jmnode').removeClass('active');
        $('jmnode[nodeid="' + nodeId + '"]').addClass('active');

        // 位置居中
        self.centerNode(nodeId);
    }

    // 定位节点居中
    this.centerNode = function (nodeId) {
        var x = $('#jsMindBox').width() / 2 - $('jmnode[nodeid="' + nodeId + '"]').offset().left - $('jmnode[nodeid="' + nodeId + '"]').outerWidth() / 2;
        var y = $('#jsMindBox').height() / 2 - $('jmnode[nodeid="' + nodeId + '"]').offset().top - $('jmnode[nodeid="' + nodeId + '"]').outerHeight() / 2;
        var num = 0;
        var obj = $('#jsMindContainer');
        var timer = setInterval(function () {
            var xx = parseFloat(obj.css("transform").split(',')[4]) + x / 10;
            var yy = parseFloat(obj.css("transform").split(',')[5]) + y / 10;
            obj.css('transform', 'translate(' + xx + 'px, ' + yy + 'px)');
            num++;
            if (num >= 10) {
                clearInterval(timer);
            }
        }, 10)
    }

    // 展开当前节点
    this.expandNode = function (nodeId) {
        var pNodeId = $('jmnode[nodeid="' + nodeId + '"]').attr('pnodeid')
        if (pNodeId != 'root') {
            jm.expand_node(pNodeId);
            self.expandNode(pNodeId);
        }
    }

    // 搜索 上一个
    this.prev = function () {
        if (self.curNum == 0) {
            return false;
        }
        self.curNum = self.curNum == 1 ? parseInt($('#totalNum').text()) : self.curNum - 1
        $('#curNum').text(self.curNum);
        self.toNode();
    }

    // 搜索 下一个
    this.next = function () {
        if (self.curNum == 0) {
            return false;
        }
        self.curNum = self.curNum == parseInt($('#totalNum').text()) ? 1 : self.curNum + 1
        $('#curNum').text(self.curNum);
        self.toNode();
    }

    this.init = function () {
        self.createEventer();
        self.jsMindInit();
        self.dragInit();
    }

    self.init();
})


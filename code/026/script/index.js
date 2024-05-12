/**
 * index.html
 * @authors shikkya
 * @date    2021-10-29
 * @version $Id$
 */

var data = [
    { id: 1, pId: 0, name: '全国' },
    { id: 2, pId: 1, name: '北京市' },
    { id: 3, pId: 1, name: '吉林省' },
    { id: 4, pId: 3, name: '长春市', checked: true },
    { id: 5, pId: 3, name: '四平市' },
    { id: 6, pId: 3, name: '通化市' },
    { id: 7, pId: 3, name: '白城市' },
    { id: 14, pId: 1, name: '辽宁省' },
    { id: 15, pId: 14, name: '沈阳市' },
    { id: 16, pId: 14, name: '大连市' },
    { id: 8, pId: 1, name: '湖南省', checked: true },
    { id: 9, pId: 8, name: '长沙市' },
    { id: 10, pId: 1, name: '云南省' },
    { id: 11, pId: 10, name: '昆明市' },
    { id: 12, pId: 10, name: '曲靖市' },
    { id: 13, pId: 10, name: '保山市' }
]

$(function () {
    var self = this;

    this.zTreeId = 'zTree'; // zTree容器Id
    this.treeObj = null;

    this.createEvent = function () {

        // 搜索
        $('#searchVal').on('input propertychange', function () {
            var searchVal = $.trim($(this).val());
            // 显示全部
            if (searchVal == '') {
                self.treeObj.expandAll(false); // 收起所有节点
                self.expendCheckNode(); // 展开所有选中节点
                $('#' + self.zTreeId + ' li').removeClass('hide_node');
            }
            // 搜索
            else {
                var nodeArr = self.treeObj.transformToArray(self.treeObj.getNodes());
                self.treeObj.expandAll(true); // 展开所有节点
                $('#' + self.zTreeId + ' li').addClass('hide_node');
                for (var i = 0; i < nodeArr.length; i++) {
                    if (nodeArr[i].name.indexOf(searchVal) > -1) {
                        self.showParentNode(nodeArr[i])
                    }
                }
            }
        })

        // 信息 点击清空
        $('#clearBtn').on('click', function () {
            self.treeObj.checkAllNodes(false); // true勾选全部、false取消全部
            $('#listBox').html('');
            $('#totalNum').text('0');
        })

        // 列表 点击删除
        $('#listBox').on('click', 'li i', function () {
            var curId = parseInt($(this).attr('data-i'));
            var node = self.treeObj.getNodeByParam('id', curId);
            self.treeObj.checkNode(node, false, true); // 节点 true勾选、false取消 true父子联动、false父子不联动
            $(this).parent().remove();
            $('#totalNum').text($('#listBox li').length);
        })
    }

    // 初始化zTree
    this.initZTree = function () {
        var setting = {
            data: {
                simpleData: {
                    enable: true
                }
            },
            view: {
                showLine: false, // 不显示连接线
                showIcon: self.showIconForTree // 父节点不显示图标
            },
            check: { // 多选
                enable: true
            },
            callback: {
                onCheck: self.createListHtml // 勾选节点
            }
        };
        $.fn.zTree.init($('#' + self.zTreeId), setting, data);

        self.treeObj = $.fn.zTree.getZTreeObj(self.zTreeId);

        // 展开所有选中节点
        var nodeArr = self.treeObj.getCheckedNodes();
        for (var i = 0; i < nodeArr.length; i++) {
            self.treeObj.checkNode(nodeArr[i], true, true);
        }
        self.expendCheckNode();

        // 创建右侧列表
        self.createListHtml();

        // 开启模糊检索 是否高亮(默认true) 是否展开(默认false)
        // fuzzySearch(self.zTreeId, '#searchVal', false, true);
    }

    // 父节点不显示图标
    this.showIconForTree = function (treeId, treeNode) {
        return !treeNode.isParent;
    }

    // 展开所有选中节点
    this.expendCheckNode = function () {
        var nodeArr = self.treeObj.getCheckedNodes();
        if (nodeArr.length == 0) {
            self.treeObj.expandNode(self.treeObj.getNodeByParam('id', 1), true, false);
            return false;
        }
        for (var i = 0; i < nodeArr.length; i++) {
            var parent = nodeArr[i].getParentNode();
            if (parent && !parent.open) {
                self.treeObj.expandNode(parent, true, false);
            }
        }
    }

    // 创建右侧列表
    this.createListHtml = function () {
        var data = self.getCheckNode();
        var html = '';
        for (var i = 0; i < data.length; i++) {
            html += '<li>' + data[i].name + '<i data-i="' + data[i].id + '"></i></li>';
        }
        $('#listBox').html(html);
        $('#totalNum').text($('#listBox li').length);
    }

    // 获取所有选中节点
    // nodeArr[i].getCheckStatus().half 半选节点true 其他false
    // nodeArr[i].check_Child_State 无子-1 子无选中0 子部分选中1 子全部选中2
    this.getCheckNode = function () {
        var nodeArr = self.treeObj.getCheckedNodes();
        var tempArr = [];
        if (nodeArr && nodeArr.length > 0) {
            for (var i = 0; i < nodeArr.length; i++) {
                // 无父 && 子全选
                // 有父 && 父半选 && 无子
                // 有父 && 父半选 && 子全选
                if (
                    (nodeArr[i].getParentNode() == null && nodeArr[i].check_Child_State == 2) ||
                    (nodeArr[i].getParentNode() && nodeArr[i].getParentNode().check_Child_State == 1 && nodeArr[i].check_Child_State == -1) ||
                    (nodeArr[i].getParentNode() && nodeArr[i].getParentNode().check_Child_State == 1 && nodeArr[i].check_Child_State == 2)
                ) {
                    tempArr.push(nodeArr[i]);
                }
            }
        }
        return tempArr;
    }

    // 显示指定节点及其所有父节点
    this.showParentNode = function (node) {
        $('#' + self.zTreeId + ' a[title="' + node.name + '"]').parent().removeClass('hide_node');
        if (node.getParentNode()) {
            self.showParentNode(node.getParentNode())
        }
    }

    this.init = function () {
        self.createEvent();
        self.initZTree();
    }

    self.init();
})

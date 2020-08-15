/**
 * 06.html
 * @authors shikkya
 * @date    2020-05-12
 * @version $Id$
 */

var setting = {
    data: {
        simpleData: {
            enable: true
        }
    }
};

// url 设置页面跳转的路径
// target 设置页面跳转的窗口目标
// click 设置简单的onClick事件
var zNodes = [
    { id: 1, pId: 0, name: "zTree Baidu", url: "http://www.baidu.com/", target: "_blank" },
    { id: 2, pId: 0, name: "zTree Home", url: "http://www.treejs.cn/v3/main.php", target: "_blank" },
    { id: 3, pId: 0, name: "Nothing...", click: "alert('我是不会跳转的...');" }
];

$(document).ready(function() {
    $.fn.zTree.init($("#treeDemo"), setting, zNodes);
});
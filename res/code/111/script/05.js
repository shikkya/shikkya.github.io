/**
 * 05.html
 * @authors shikkya
 * @date    2020-05-12
 * @version $Id$
 */

var setting = {
    view: {
        // fontCss: { 'font-weight': 'bold', 'color': 'orange' }, // 自定义所有文字样式
        fontCss: getFont, // 通过函数设置文字样式
        nameIsHTML: true // true允许节点名称支持HTML内容
    }
};

var zNodes = [
    { name: "粗体字", font: { 'font-weight': 'bold' } },
    { name: "斜体字", font: { 'font-style': 'italic' } },
    { name: "有背景的字", font: { 'background-color': 'black', 'color': 'white' } },
    { name: "红色字", font: { 'color': 'red' } },
    { name: "蓝色字", font: { 'color': 'blue' } },
    { name: "<span style='color:blue;margin-right:5px;'>view</span>.<span style='color:red;'>nameIsHTML</span>" },
    { name: "zTree 默认样式" }
];

function getFont(treeId, node) {
    return node.font ? node.font : {}; // 如果存在font值按font设定文字样式 否则返回空即默认样式
}

$(document).ready(function() {
    $.fn.zTree.init($("#treeDemo"), setting, zNodes);
});
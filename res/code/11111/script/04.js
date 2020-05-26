/**
 * 04.html
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

// iconOpen和iconClose必须同时添加且有效 否则不生效
var zNodes = [{
        id: 1,
        pId: 0,
        name: "父节点1 展开 自定义图标",
        open: true,
        iconOpen: "../images/03.png", // 父节点展开图标
        iconClose: "../images/02.png" // 父节点折叠图标
    },
    { id: 11, pId: 1, name: "叶子节点1", icon: "../images/01.png" }, // 子节点图标
    { id: 12, pId: 1, name: "叶子节点2" },
    { id: 13, pId: 1, name: "叶子节点3" },
    {
        id: 2,
        pId: 0,
        name: "父节点2 折叠 自定义图标",
        iconOpen: "../images/03.png", // 父节点展开图标
        iconClose: "../images/02.png" // 父节点折叠图标
    },
    { id: 21, pId: 2, name: "叶子节点1", },
    { id: 22, pId: 2, name: "叶子节点2", },
    { id: 23, pId: 2, name: "叶子节点3", },
    {
        id: 3,
        pId: 0,
        name: "父节点3 展开 自定义图标",
        open: true,
        iconSkin: "pIcon01" // 使用css类名自定义图标
    },
    { id: 31, pId: 3, name: "叶子节点1", iconSkin: "icon01" }, // .icon01_ico_docu
    { id: 32, pId: 3, name: "叶子节点2" },
    { id: 33, pId: 3, name: "叶子节点3" },
    {
        id: 4,
        pId: 0,
        name: "父节点4 折叠 自定义图标",
        iconSkin: "pIcon01" // .pIcon01_ico_open .pIcon01_ico_close
    },
    { id: 31, pId: 4, name: "叶子节点1" },
    { id: 32, pId: 4, name: "叶子节点2" },
    { id: 33, pId: 4, name: "叶子节点3" }
];

$(document).ready(function() {
    $.fn.zTree.init($("#treeDemo"), setting, zNodes);
});
/**
 * index.html
 * @authors shikkya
 * @date    2021-06-23
 * @version $Id$
 */

var jm = null;

window.onload = function () {
    jsMindInit();
}

// 初始化 JsMind
function jsMindInit() {
    var mind = {
        // 元数据 定义思维导图的名称、作者、版本等信息
        meta: {
            name: 'jsMindDemo',
            author: 'shikkya',
            version: '0.2'
        },
        // 数据格式声明
        format: 'node_tree',
        // 数据内容
        data: {
            id: 'root',
            topic: 'jsMind',
            children: [{
                id: 'easy',
                topic: 'Easy',
                direction: 'left',
                expanded: false,
                children: [
                    { id: 'easy1', topic: 'Easy to show' },
                    { id: 'easy2', topic: 'Easy to edit' },
                    { id: 'easy3', topic: 'Easy to store' },
                    { id: 'easy4', topic: 'Easy to embed' }
                ]
            }, {
                id: 'open',
                topic: 'Open Source',
                direction: 'right',
                expanded: false,
                children: [
                    { id: 'open1', topic: 'on GitHub' },
                    {
                        id: 'open2',
                        topic: 'BSD License',
                        expanded: false,
                        children: [
                            { id: 'other1', topic: 'other1' },
                            { id: 'other2', topic: 'other2' },
                            { id: 'other3', topic: 'other3' }
                        ]
                    }
                ]
            }, {
                id: 'powerful',
                topic: 'Powerful',
                direction: 'right',
                children: [
                    { id: 'powerful1', topic: 'Base on Javascript' },
                    { id: 'powerful2', topic: 'Base on HTML5' },
                    { id: 'powerful3', topic: 'Depends on you' }
                ]
            }, {
                id: 'node',
                topic: 'test node',
                direction: 'left',
                children: [
                    { id: 'node1', topic: 'I am from local variable' },
                    { id: 'node2', topic: 'I can do everything' }
                ]
            }]
        }
    };

    var options = {
        container: 'jsMindContainer', // 容器ID 必填
        editable: false, // 是否启用编辑
        theme: 'shikkya', // 主题
        mode: 'side', // 显示模式 full、side
        view: {
            line_width: 1, // 线条粗细
            line_color: '#cdcdcd' // 线条颜色
        }
    };

    jm = new jsMind(options);
    jm.show(mind);
}

// 下载图片
function screenShot() {
    jm.screenshot.shootDownload();
}

// 放大
function zoomIn() {
    if (jm.view.zoomIn()) {
        document.getElementById('zoomOutBtn').disabled = false;
    } else {
        document.getElementById('zoomInBtn').disabled = true;
    }
}

// 缩小
function zoomOut() {
    if (jm.view.zoomOut()) {
        document.getElementById('zoomInBtn').disabled = false;
    } else {
        document.getElementById('zoomOutBtn').disabled = true;
    }
}

// 展开全部
function expandAll() {
    jm.expand_all();
}

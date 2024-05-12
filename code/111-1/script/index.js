/**
 * index.html
 * @authors shikkya
 * @date    2021-04-26
 * @version $Id$
 */

$(function () {

    // 测试数据 正确
    var data_1 = [
        { id: 1, pId: 0, name: '测试数据 1', open: true },
        { id: 2, pId: 1, name: '测试数据 1-1' },
        { id: 3, pId: 1, name: '测试数据 1-2', check: true },
        { id: 4, pId: 1, name: '测试数据 1-3' },
        { id: 30, pId: 0, name: '测试数据 2', open: true },
        { id: 6, pId: 30, name: '测试数据 2-1' },
        { id: 7, pId: 30, name: '测试数据 2-2', check: true },
        { id: 8, pId: 7, name: '测试数据 2-2-1' },
        { id: 9, pId: 7, name: '测试数据 2-2-2' },
        { id: 10, pId: 30, name: '测试数据 2-3' },
        { id: 25, pId: 0, name: '测试数据 3' },
        { id: 12, pId: 25, name: '测试数据 3-1', check: true },
        { id: 13, pId: 25, name: '测试数据 3-2', check: true },
        { id: 14, pId: 0, name: '测试数据 4' },
        { id: 15, pId: 0, name: '测试数据 5' },
        { id: 16, pId: 15, name: '测试数据 5-1' },
        { id: 17, pId: 15, name: '测试数据 5-2' },
        { id: 18, pId: 15, name: '测试数据 5-3' },
        { id: 19, pId: 15, name: '测试数据 5-4' },
        { id: 20, pId: 0, name: '测试数据 6' }
    ]

    // 测试数据 错误
    var data_2 = [
        { id: 10, pId: 0, name: '测试 1' },
        { id: 2, pId: 10, name: '测试 1-1' },
        { id: 3, pId: 2, name: '测试 1-1-1' },
        { id: 5, pId: 5, name: '测试 2' },
        { id: 6, pId: 0, name: '测试 3' },
        { id: 7, pId: 8, name: '测试 3-1' }
    ]

    // 测试 1
    var kTree_1 = new kTree('#kTree_1', data_1, {
        rootId: 0, // 根节点id 默认0
        search: true, // 实时搜索功能 默认false
        check: true // 多选功能 默认false
    });
    kTree_1.init();

    // 测试 2
    new kTree('#kTree_2', data_2).init();

    // $('#getcheckDataBtn').on('click', function () {
    //     var arr = kTree_1.getCheckData(); // 获取选中数据
    //     console.log(arr);
    // })
});



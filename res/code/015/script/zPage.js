/**
 * zPage
 * @authors shikkya
 * @date    2020-04-24
 * @version $Id$
 */

// 存储每个控件属性
var zPageArr = [];

(function() {
    var zPage = function(obj) {

        var options = $.extend({
            containerId: '', //控件容器id 必填
            cssStyle: 1, // 控件样式
            curPage: 1, // 当前页码
            isSkip: false, // 是否需要跳转功能
            isSize: false, // 是否需要选择条数功能
            sizeList: [10, 20], // 每页显示条数
            callback: function() {} // 回调函数
        }, obj);

        $('#' + options.containerId).html('');

        // 控件样式
        if (!options.cssStyle || parseInt(options.cssStyle) < 1 || parseInt(options.cssStyle) > 4) {
            options.cssStyle = 1;
        }
        $('#' + options.containerId).addClass('zPage zPage_' + options.cssStyle);

        // 初始化html
        var pageHtml = '<div id="' + options.containerId + '_page" class="zPage_page_box"></div>';
        if (options.isSkip) {
            pageHtml += '<div id="' + options.containerId + '_skip" class="zPage_skip_box">' +
                '第<input type="text" id="' + options.containerId + '_skipInput">页' +
                '<button onClick="skipPage(\'' + zPageArr.length + '\')">确定</button>' +
                '</div>';
        }
        if (options.isSize) {
            pageHtml += '<div id="' + options.containerId + '_size" class="zPage_size_box">' +
                '<select id="' + options.containerId + '_sizeSelect" onchange="changeSize(\'' + zPageArr.length + '\')">';
            for (var i = 0; i < options.sizeList.length; i++) {
                pageHtml += '<option value="' + options.sizeList[i] + '">' + options.sizeList[i] + '</option>';
            }
            pageHtml += '</select>' +
                '</div>';
        }
        $('#' + options.containerId).append(pageHtml);

        var zPageObj = {
            containerId: options.containerId, //控件容器id
            curPage: options.curPage, // 当前页码
            curSize: options.sizeList[0], // 每页显示条数
            totalNum: 1, // 总条数
            pArrIndex: zPageArr.length, // 存储数组索引
            callback: options.callback // 回调函数
        };
        zPageArr.push(zPageObj);

        executeCallBack(zPageObj);
    };
    window.zPage = zPage;
})();

// 改变条数下拉框
function changeSize(indexNum) {
    var tempObj = zPageArr[indexNum];
    tempObj.curPage = 1;
    tempObj.curSize = $('#' + tempObj.containerId + '_sizeSelect').val();
    executeCallBack(tempObj);
}

// 点击确定跳转页面
function skipPage(indexNum) {
    var tempObj = zPageArr[indexNum];
    var skipNum = $('#' + tempObj.containerId + '_skipInput').val().trim();

    if (skipNum == '') {
        alert("请输入跳转页数");
        return false;
    }

    var reg = /^[0-9]*$/;
    if (!reg.test(skipNum)) {
        alert("请输入正整数");
        return false;
    }

    var totalPage = Math.ceil(tempObj.totalNum / tempObj.curSize); // 总页数
    if (skipNum < 1 || skipNum > totalPage) {
        alert("请输入正确的页数");
        return;
    }

    $('#' + tempObj.containerId + '_skipInput').val('');
    tempObj.curPage = Number(skipNum);
    executeCallBack(tempObj);
}

// 执行回调函数
function executeCallBack(obj) {
    zPageArr[obj.pArrIndex].callback(obj);
}

// 创建页码html
function createPageHtml(obj) {
    $('#' + obj.containerId + '_page').html('');

    var totalPage = Math.ceil(obj.totalNum / obj.curSize); // 总页数
    var pageHtml = '';

    // 首页
    if (obj.curPage == 1) {
        pageHtml += '<button class="no_allowed">首页</button>';
    } else {
        pageHtml += '<button onClick="clickPageBtn(\'' + obj.pArrIndex + '\',-1)">首页</button>';
    }

    // 上一页
    if (obj.curPage == 1) {
        pageHtml += '<button class="no_allowed">上一页</button>';
    } else {
        pageHtml += '<button onClick="clickPageBtn(\'' + obj.pArrIndex + '\',-2)">上一页</button>';
    }

    // 数字页
    if (totalPage < 8) {
        for (var i = 1; i <= totalPage; i++) {
            if (i == obj.curPage) {
                pageHtml += '<button class="cur_page">' + i + '</button>';
                continue;
            }
            pageHtml += '<button onClick="clickPageBtn(\'' + obj.pArrIndex + '\',' + i + ')">' + i + '</button>';
        }
    } else if (obj.curPage < 5) {
        for (var i = 1; i <= 5; i++) {
            if (i == obj.curPage) {
                pageHtml += '<button class="cur_page">' + i + '</button>';
                continue;
            }
            pageHtml += '<button onClick="clickPageBtn(\'' + obj.pArrIndex + '\',' + i + ')">' + i + '</button>';
        }
        pageHtml += '<button class="no_allowed">...</button>';
        pageHtml += '<button onClick="clickPageBtn(\'' + obj.pArrIndex + '\',' + totalPage + ')">' + totalPage + '</button>';
    } else if (obj.curPage > totalPage - 4) {
        pageHtml += '<button onClick="clickPageBtn(\'' + obj.pArrIndex + '\',1)">1</button>';
        pageHtml += '<button class="no_allowed">...</button>';
        for (var i = totalPage - 4; i <= totalPage; i++) {
            if (i == obj.curPage) {
                pageHtml += '<button class="cur_page">' + i + '</button>';
                continue;
            }
            pageHtml += '<button onClick="clickPageBtn(\'' + obj.pArrIndex + '\',' + i + ')">' + i + '</button>';
        }
    } else {
        pageHtml += '<button onClick="clickPageBtn(\'' + obj.pArrIndex + '\',1)">1</button>';
        pageHtml += '<button class="no_allowed">...</button>';
        pageHtml += '<button onClick="clickPageBtn(\'' + obj.pArrIndex + '\',' + (obj.curPage - 1) + ')">' + (obj.curPage - 1) + '</button>';
        pageHtml += '<button class="cur_page">' + obj.curPage + '</button>';
        pageHtml += '<button onClick="clickPageBtn(\'' + obj.pArrIndex + '\',' + (obj.curPage + 1) + ')">' + (obj.curPage + 1) + '</button>';
        pageHtml += '<button class="no_allowed">...</button>';
        pageHtml += '<button onClick="clickPageBtn(\'' + obj.pArrIndex + '\',' + totalPage + ')">' + totalPage + '</button>';
    }

    // 下一页
    if (obj.curPage == totalPage) {
        pageHtml += '<button class="no_allowed">下一页</button>';
    } else {
        pageHtml += '<button onClick="clickPageBtn(\'' + obj.pArrIndex + '\',-3)">下一页</button>';
    }

    // 尾页
    if (obj.curPage == totalPage) {
        pageHtml += '<button class="no_allowed">尾页</button>';
    } else {
        pageHtml += '<button onClick="clickPageBtn(\'' + obj.pArrIndex + '\',-4)">尾页</button>';
    }

    // 总条数
    pageHtml += '<span>共' + obj.totalNum + '条</span>';

    $('#' + obj.containerId + '_page').append(pageHtml);
}

// 点击分页按钮
function clickPageBtn(indexNum, pageNum) {
    var tempObj = zPageArr[indexNum];
    var totalPage = Math.ceil(tempObj.totalNum / tempObj.curSize); // 总页数

    if (pageNum == -1) { // 首页
        tempObj.curPage = 1;
    } else if (pageNum == -2) { // 上一页
        tempObj.curPage = tempObj.curPage - 1;
    } else if (pageNum == -3) { // 下一页
        tempObj.curPage = tempObj.curPage + 1;
    } else if (pageNum == -4) { // 尾页
        tempObj.curPage = totalPage;
    } else {
        tempObj.curPage = pageNum;
    }

    executeCallBack(tempObj);
}
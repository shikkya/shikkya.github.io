/**
 * zPage
 * @authors shikkya
 * @date    2020-04-24
 * @version $Id$
 */

// 存储每个控件属性
var zPageArr = [];

(function () {
    var zPage = function (obj) {

        var options = $.extend({
            containerId: '', //控件容器id 必填
            totalNum: 0, // 总数 必填
            cssStyle: 1, // 控件样式 选填
            curPage: 1, // 当前页码 选填
            isTotal: false, // 是否需要显示总数 选填
            isSkip: false, // 是否需要跳转功能 选填
            isSize: false, // 是否需要选择条数功能 选填
            sizeList: [10, 20], // 每页显示条数 选填
            callbackFun: function () { } // 回调函数 选填
        }, obj);

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
                '<button onClick="zPageSkipPage(\'' + zPageArr.length + '\')">确定</button>' +
                '</div>';
        }
        if (options.isSize) {
            pageHtml += '<div id="' + options.containerId + '_size" class="zPage_size_box">' +
                '<select id="' + options.containerId + '_sizeSelect" onchange="zPageChangeSize(\'' + zPageArr.length + '\')">';
            for (var i = 0; i < options.sizeList.length; i++) {
                pageHtml += '<option value="' + options.sizeList[i] + '">' + options.sizeList[i] + '</option>';
            }
            pageHtml += '</select>' +
                '</div>';
        }
        $('#' + options.containerId).html(pageHtml);

        var zPageObj = {
            containerId: options.containerId, // 控件容器id
            totalNum: options.totalNum, // 总数
            curPage: options.curPage, // 当前页码
            curSize: options.sizeList[0], // 每页显示条数
            isTotal: options.isTotal, // 是否显示总数
            pArrIndex: zPageArr.length, // 存储数组索引
            callbackFun: options.callbackFun // 回调函数
        };
        zPageArr.push(zPageObj);

        zPageExecuteCallBack(zPageObj);
    };
    window.zPage = zPage;
})();

// 改变条数下拉框
function zPageChangeSize(indexNum) {
    var tempObj = zPageArr[indexNum];
    tempObj.curPage = 1;
    tempObj.curSize = $('#' + tempObj.containerId + '_sizeSelect').val();
    zPageExecuteCallBack(tempObj);
}

// 点击确定跳转页面
function zPageSkipPage(indexNum) {
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
    zPageExecuteCallBack(tempObj);
}

// 执行回调函数
function zPageExecuteCallBack(obj) {
    var html = $('#' + obj.containerId + '_page').html();
    zPageCreatePageHtml(obj);
    if (html != '') {
        zPageArr[obj.pArrIndex].callbackFun(obj);
    }
}

// 创建页码html
function zPageCreatePageHtml(obj) {

    $('#' + obj.containerId + '_page').html('');

    var totalPage = Math.ceil(obj.totalNum / obj.curSize); // 总页数
    var pageHtml = '';

    // 首页
    if (obj.curPage == 1) {
        pageHtml += '<button class="no_allowed">首页</button>';
    } else {
        pageHtml += '<button onClick="zPageClickPageBtn(\'' + obj.pArrIndex + '\',-1)">首页</button>';
    }

    // 上一页
    if (obj.curPage == 1) {
        pageHtml += '<button class="no_allowed">上一页</button>';
    } else {
        pageHtml += '<button onClick="zPageClickPageBtn(\'' + obj.pArrIndex + '\',-2)">上一页</button>';
    }

    // 数字页
    if (totalPage < 8) {
        for (var i = 1; i <= totalPage; i++) {
            if (i == obj.curPage) {
                pageHtml += '<button class="cur_page">' + i + '</button>';
                continue;
            }
            pageHtml += '<button onClick="zPageClickPageBtn(\'' + obj.pArrIndex + '\',' + i + ')">' + i + '</button>';
        }
    } else if (obj.curPage < 5) {
        for (var i = 1; i <= 5; i++) {
            if (i == obj.curPage) {
                pageHtml += '<button class="cur_page">' + i + '</button>';
                continue;
            }
            pageHtml += '<button onClick="zPageClickPageBtn(\'' + obj.pArrIndex + '\',' + i + ')">' + i + '</button>';
        }
        pageHtml += '<button class="no_allowed">...</button>';
        pageHtml += '<button onClick="zPageClickPageBtn(\'' + obj.pArrIndex + '\',' + totalPage + ')">' + totalPage + '</button>';
    } else if (obj.curPage > totalPage - 4) {
        pageHtml += '<button onClick="zPageClickPageBtn(\'' + obj.pArrIndex + '\',1)">1</button>';
        pageHtml += '<button class="no_allowed">...</button>';
        for (var i = totalPage - 4; i <= totalPage; i++) {
            if (i == obj.curPage) {
                pageHtml += '<button class="cur_page">' + i + '</button>';
                continue;
            }
            pageHtml += '<button onClick="zPageClickPageBtn(\'' + obj.pArrIndex + '\',' + i + ')">' + i + '</button>';
        }
    } else {
        pageHtml += '<button onClick="zPageClickPageBtn(\'' + obj.pArrIndex + '\',1)">1</button>';
        pageHtml += '<button class="no_allowed">...</button>';
        pageHtml += '<button onClick="zPageClickPageBtn(\'' + obj.pArrIndex + '\',' + (obj.curPage - 1) + ')">' + (obj.curPage - 1) + '</button>';
        pageHtml += '<button class="cur_page">' + obj.curPage + '</button>';
        pageHtml += '<button onClick="zPageClickPageBtn(\'' + obj.pArrIndex + '\',' + (obj.curPage + 1) + ')">' + (obj.curPage + 1) + '</button>';
        pageHtml += '<button class="no_allowed">...</button>';
        pageHtml += '<button onClick="zPageClickPageBtn(\'' + obj.pArrIndex + '\',' + totalPage + ')">' + totalPage + '</button>';
    }

    // 下一页
    if (obj.curPage == totalPage) {
        pageHtml += '<button class="no_allowed">下一页</button>';
    } else {
        pageHtml += '<button onClick="zPageClickPageBtn(\'' + obj.pArrIndex + '\',-3)">下一页</button>';
    }

    // 尾页
    if (obj.curPage == totalPage) {
        pageHtml += '<button class="no_allowed">尾页</button>';
    } else {
        pageHtml += '<button onClick="zPageClickPageBtn(\'' + obj.pArrIndex + '\',-4)">尾页</button>';
    }

    // 总数
    if (obj.isTotal) {
        pageHtml += '<span>共' + obj.totalNum + '条</span>';
    }

    $('#' + obj.containerId + '_page').append(pageHtml);
}

// 点击分页按钮
function zPageClickPageBtn(indexNum, pageNum) {
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

    zPageExecuteCallBack(tempObj);
}
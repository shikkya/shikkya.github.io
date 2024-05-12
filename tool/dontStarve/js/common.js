/**
 * common
 * @authors shikkya
 * @date 2023-11-01
 */

$(function () {
    // plan 切换
    $('#planBox').on('click', 'li', function () {
        $(this).addClass('active').siblings().removeClass('active');
        var val = $(this).attr('data-v');
        if (val == 'spawn' || val == 'give') {
            $(this).parent().siblings('div').show();
        }
        else {
            $(this).parent().siblings('div').hide();
        }
    })
})

// 点击列表项
function handleItem(obj) {
    var text = '';
    var plan = $('#planBox li.active').attr('data-v');
    var num = $('#planBox input').val().trim();
    num = num == '' ? 1 : num;
    var desc = $(obj).find('p').eq(0).text().trim();
    var code = $(obj).find('p').eq(1).text().trim();
    switch (plan) {
        case 'spawn':
            text = 'c_spawn("' + code + '",' + num + ')';
            break;
        case 'give':
            text = 'c_give("' + code + '",' + num + ')';
            break;
        case 'code':
            text = code;
            break;
        case 'desc':
            text = desc;
            break;
    }
    copyText(text);
}

// 复制文本
function copyText(text) {
    var dom = document.createElement('input');
    dom.value = text;
    document.body.appendChild(dom);
    dom.select();
    document.execCommand('Copy');
    if (!!window.ActiveXobject || 'ActiveXObject' in window) {
        dom.removeNode(true);
    } else {
        dom.remove();
    }
    showMsg('复制成功');
}

// 对象数组排序 asc升序 desc降序 
function arrSort(key, type) {
    return function (a, b) {
        if (type == 'desc') {
            return b[key] - a[key];
        }
        return a[key] - b[key];
    }
}
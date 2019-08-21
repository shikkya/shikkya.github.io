/**
 * index.html
 * @authors shikkya
 * @date    2019-08-20
 * @version $Id$
 */

// 要导出的json数据
const jsonData = [{
        name: '姓名1',
        phone: '13012341234',
        email: '123@qq.com'
    },
    {
        name: '姓名2',
        phone: '13012341234',
        email: '123@qq.com'
    },
    {
        name: '姓名3',
        phone: '13012341234',
        email: '123@qq.com'
    }
];

function tableToExcel() {
    // 列标题，逗号隔开，每一个逗号就是隔开一个单元格
    var str = '姓名,电话,邮箱\n';

    // 增加\t为了不让表格显示科学计数法或者其他格式
    for (var i = 0; i < jsonData.length; i++) {
        for (var item in jsonData[i]) {
            str += `${jsonData[i][item] + '\t'},`;
        }
        str += '\n';
    }

    // encodeURIComponent解决中文乱码
    var uri = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(str);

    // 通过创建a标签实现
    var link = document.createElement("a");
    link.href = uri;

    // 对下载的文件命名
    link.download = "data.csv";

    // 下载
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function HtmlExportToExcelForEntire() {
    var uri = 'data:application/vnd.ms-excel;base64,';

    // 表格模板
    var template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table style="text-align:center;">{table}</table></body></html>';

    var ctx = {
        worksheet: 'dataSheet',
        table: document.getElementById('tab').innerHTML
    }

    var alink = document.createElement('a');
    alink.href = uri + base64(format(template, ctx));
    alink.download = "data.xls";

    document.body.appendChild(alink);
    alink.click();
    alink.parentNode.removeChild(alink);
}

// 输出base64编码
function base64(s) {
    return window.btoa(unescape(encodeURIComponent(s)));
}

function format(s, c) {
    return s.replace(/{(\w+)}/g, function(m, p) {
        return c[p];
    })
}
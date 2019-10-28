/**
 * index.html
 * @authors shikkya
 * @date    2019-10-28
 * @version $Id$
 */
 
function toPdf() {
    html2canvas(document.getElementById('wrap'), {
        dpi: 200, //导出pdf清晰度
        background: "#fff", //背景色 默认透明
        // width: 300,
        // height: 300,
        onrendered: function(canvas) {
            // canvas转pdf
            var contentWidth = canvas.width;
            var contentHeight = canvas.height;
            var pageHeight = contentWidth / 592.28 * 841.89; // 一页pdf显示html页面生成的canvas高度;
            var leftHeight = contentHeight; // 未生成pdf的html页面高度
            var position = 0; // pdf页面偏移
            var imgWidth = 595.28; // html页面生成的canvas在pdf中图片的宽高 a4纸的尺寸[595.28,841.89]
            var imgHeight = 592.28 / contentWidth * contentHeight;

            var pageData = canvas.toDataURL('image/jpeg', 1.0);
            var pdf = new jsPDF('', 'pt', 'a4');
            //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
            //当内容未超过pdf一页显示的范围，无需分页
            if (leftHeight < pageHeight) {
                pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
            } else {
                while (leftHeight > 0) {
                    pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
                    leftHeight -= pageHeight;
                    position -= 841.89;
                    if (leftHeight > 0) {
                        pdf.addPage(); //避免添加空白页
                    }
                }
            }
            // 格式化日期
            function CurentTime() {
                var now = new Date();
                var year = now.getFullYear(); //年
                var month = now.getMonth() + 1; //月
                var day = now.getDate(); //日
                var hh = now.getHours(); //时
                var mm = now.getMinutes(); //分
                var clock = year + "年";
                if (month < 10)
                    clock += "0";
                clock += month + "月";
                if (day < 10)
                    clock += "0";
                clock += day + "日 ";
                if (hh < 10)
                    clock += "0";
                clock += hh + "时";
                if (mm < 10) clock += '0';
                clock += mm + "分";
                return (clock);
            }
            var myDate = new Date();
            var reportName = "SHIKKYA-" + CurentTime() + ".pdf";
            pdf.save(reportName);
        },
    });
}
/**
 * index.html
 * @authors shikkya
 * @date    2019-08-15
 * @version $Id$
 */

window.onload = function() {
    var textaObj = document.getElementById('texta');
    var curNumObj = document.getElementById('curNum');
    var totalNum = parseInt(document.getElementById('totalNum').innerHTML);

    textaObj.addEventListener('input', function() {
        textaCacl(this);
    });

    //兼容IE
    textaObj.addEventListener('propertychange', function() {
        textaCacl(this);
    });

    function textaCacl(obj) {
        var val = obj.value;

        val = val.replace(/\ +/g, ""); // 去掉空格
        val = val.replace(/[\r\n]/g, ""); //去掉换行

        curNumObj.innerHTML = val.length;

        if (parseInt(val.length) > totalNum) {
            curNumObj.style.color = 'red';
        } else {
            curNumObj.style.color = '#888';
        }
    }
}
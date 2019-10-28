/**
 * index.html
 * @authors shikkya
 * @date    2019-08-15
 * @version $Id$
 */

var options = {
    useEasing: true, // toggle easing
    useGrouping: true, // 1,000,000 vs 1000000
    separator: ',', // character to use as a separator
    decimal: '.', // character to use as a decimal
    // easingFn: easeOutExpo, // optional custom easing function, default is Robert Penner's easeOutExpo
    // formattingFn: formatNumber, // optional custom formatting function, default is formatNumber above
    prefix: '', // optional text before the result
    suffix: '', // optional text after the result
    numerals: [] // optionally pass an array of custom numerals for 0-9
};

var endNum = document.getElementById('jumpNum').innerText.replace(/,/g, ''); //去掉数字中的逗号

var demo = new CountUp("jumpNum", 0, endNum, 2, 3.5, options);

demo.start();

//暂停/恢复
document.getElementById('pauseResume').addEventListener('click', function() {
    demo.pauseResume();
}, false);

//重置动画
document.getElementById('reset').addEventListener('click', function() {
    demo.reset();
}, false);

//开始
document.getElementById('start').addEventListener('click', function() {
    demo.start();
}, false);

//更新一个值
document.getElementById('update').addEventListener('click', function() {
    demo.update(5566.88);
}, false);
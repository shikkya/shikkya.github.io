/**
 * code
 * @authors shikkya
 * @date    2019-07-13
 * @version $Id$
 */

// 所有数据 
var codeList = [{
        id: '001',
        tit: '容器内拖拽分割线自由分配左右空间',
        type: '功能',
        keyWord: ['拖拽', 'Js'],
        compatible: ['1', '1', '0', '', '1', '1', '', '1'],
        comMobile: ['0', '', '0'],
        intro: '<p>1、分割线宽度占位</p><p>2、左右两部分的最小宽度一致，可为0</p>',
        bugIntro: ''
    },
    {
        id: '002',
        tit: '数字滚动增值插件countUp.js',
        type: '插件,功能',
        keyWord: ['数字', '滚动', '跳数', 'js'],
        compatible: ['1', '1', '1', '', '1', '1', '', '1'],
        comMobile: ['1', '', '1'],
        intro: '<p>CountUp.js 无依赖的、轻量级的 JavaScript 类，可以用来快速创建以一种更有趣的动画方式显示数值数据。</p><p>换值只用于临时变化，重置开始后依然是初始值。</p><p>可配置的参数：</p><p>target = 目标元素的 ID</p><p>startVal = 开始值</p><p>endVal = 结束值</p><p>decimals = 小数位数，默认值是0</p><p>duration = 动画延迟秒数，默认值是2</p>',
        bugIntro: ''
    },
    {
        id: '003',
        tit: '纯CSS3卡通蜡烛动画特效',
        type: '特效',
        keyWord: ['动画', 'CSS3'],
        compatible: ['1', '1', '0', '', '1', '1', '', '1'],
        comMobile: ['1', '', '1'],
        intro: '',
        bugIntro: ''
    },
    {
        id: '004',
        tit: 'textarea实时文字计数器',
        type: '功能',
        keyWord: ['文字', '计数', 'Js'],
        compatible: ['1', '1', '1', '', '1', '1', '', '1'],
        comMobile: ['1', '', '1'],
        intro: '<p>过滤空格和换行，超出时数字标红。</p>',
        bugIntro: ''
    },
    {
        id: '005',
        tit: '多边形彩色折纸动态圆球js特效动画',
        type: '特效',
        keyWord: ['Canvas', 'Js'],
        compatible: ['1', '1', '0', '', '1', '1', '', '1'],
        comMobile: ['1', '', '1'],
        intro: '',
        bugIntro: ''
    },
    {
        id: '006',
        tit: '可被鼠标划破的网',
        type: '特效',
        keyWord: ['Canvas', 'Js'],
        compatible: ['1', '1', '1', '', '1', '1', '', '1'],
        comMobile: ['0', '', '0'],
        intro: '',
        bugIntro: '<p>safari浏览器下速度略迟缓，不影响使用。</p>'
    },
    {
        id: '007',
        tit: '纯前端导出数据为Excel表格',
        type: '功能',
        keyWord: ['Excel', 'Js'],
        compatible: ['1', '1', '0', '', '1', '1', '', '0'],
        comMobile: ['0', '', '0'],
        intro: '',
        bugIntro: '<p>第一种方法无法合并单元格，长字符串无法自动调整单元格宽度，导出格式只能为csv。</p><p>第二种方法导出后会有错误提示，但不影响使用。</p>'
    },
    {
        id: '008',
        tit: '3D立体拖拽图片环',
        type: '特效',
        keyWord: ['照片', '3D', '拖拽', 'Js'],
        compatible: ['1', '1', '', '', '1', '1', '0', ''],
        comMobile: ['0', '', '0'],
        intro: '<p>图片数量不限，太多会重叠，建议最多17张。</p>',
        bugIntro: '<p>360浏览器略卡顿，不影响使用。</p>'
    }
];

// compatible: [ chrome, firefox, safari, opera, tencent, se360, ie8, ie11 ]  
// comMobile: [ Android, Ios, WeChat ]
// typeList: ['全部', '插件', '特效', '功能', '其他']

/*
{
    id: '',
    tit: '',
    type: '',
    keyWord: [''],
    compatible: ['', '', '', '', '', '', '', ''],
    comMobile: ['', '', ''],
    intro: '',
    bugIntro: ''
}
*/
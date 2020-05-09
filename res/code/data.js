/**
 * code
 * @authors shikkya
 * @date    2019-07-13
 * @version $Id$
 */

// 所有数据 
var codeList = [{
        id: '001',
        tit: '数字滚动增值插件countUp.js',
        type: '插件,功能',
        keyWord: ['跳数', '滚动', 'JS'],
        compatible: ['1', '1', '1', '', '1', '1', '1', '1'],
        comMobile: ['1', '', '1'],
        intro: '<p>CountUp.js 无依赖的、轻量级的 JavaScript 类，可以用来快速创建以一种更有趣的动画方式显示数值数据。</p><p>换值只用于临时变化，重置开始后依然是初始值。</p><p>可配置的参数：</p><p>target = 目标元素的 ID</p><p>startVal = 开始值</p><p>endVal = 结束值</p><p>decimals = 小数位数，默认值是0</p><p>duration = 动画延迟秒数，默认值是2</p>',
        bugIntro: '<p>IE8支持初始化数字滚动，所有按钮功能均无效。</p>'
    },
    {
        id: '002',
        tit: '纯CSS3卡通蜡烛动画特效',
        type: '特效',
        keyWord: ['CSS3'],
        compatible: ['1', '1', '0', '', '1', '1', '0', '1'],
        comMobile: ['1', '', '1'],
        intro: '',
        bugIntro: ''
    },
    {
        id: '003',
        tit: '容器内拖拽分割线自由分配左右空间',
        type: '功能',
        keyWord: ['拖拽', 'JS'],
        compatible: ['1', '1', '0', '', '1', '1', '0', '1'],
        comMobile: ['0', '', '0'],
        intro: '<p>1、分割线宽度占位</p><p>2、左右两部分的最小宽度一致，可为0</p>',
        bugIntro: ''
    },
    {
        id: '004',
        tit: 'textarea实时文字计数器',
        type: '功能',
        keyWord: ['文字输入', '计数', 'JS'],
        compatible: ['1', '1', '1', '', '1', '1', '0', '1'],
        comMobile: ['1', '', '1'],
        intro: '<p>过滤空格和换行，超出时数字标红。</p>',
        bugIntro: ''
    },
    {
        id: '005',
        tit: '多边形彩色折纸动态圆球js特效动画',
        type: '特效',
        keyWord: ['Canvas', '拖拽', 'JS'],
        compatible: ['1', '1', '0', '', '1', '1', '0', '1'],
        comMobile: ['1', '', '1'],
        intro: '',
        bugIntro: ''
    },
    {
        id: '006',
        tit: '可被鼠标划破的网',
        type: '特效',
        keyWord: ['Canvas', 'JS'],
        compatible: ['1', '1', '1', '', '1', '1', '0', '1'],
        comMobile: ['0', '', '0'],
        intro: '',
        bugIntro: '<p>safari浏览器下速度略迟缓，不影响使用。</p>'
    },
    {
        id: '007',
        tit: '纯前端导出数据为Excel表格',
        type: '功能',
        keyWord: ['Excel', 'JS'],
        compatible: ['1', '1', '0', '', '1', '1', '0', '0'],
        comMobile: ['0', '', '0'],
        intro: '',
        bugIntro: '<p>第一种方法无法合并单元格，长字符串无法自动调整单元格宽度，导出格式只能为csv。</p><p>第二种方法导出后会有错误提示，但不影响使用。</p>'
    },
    {
        id: '008',
        tit: '3D立体拖拽图片环',
        type: '特效',
        keyWord: ['照片', '3D', '拖拽', 'JS'],
        compatible: ['1', '1', '0', '', '1', '1', '0', ''],
        comMobile: ['0', '', '0'],
        intro: '<p>图片数量不限，太多会重叠，建议最多17张。</p>',
        bugIntro: '<p>360浏览器略微卡顿，不影响使用。</p>'
    },
    {
        id: '009',
        tit: '纯CSS3模拟动态水效果',
        type: '特效',
        keyWord: ['CSS3'],
        compatible: ['1', '1', '0', '', '1', '1', '0', ''],
        comMobile: ['1', '', '1'],
        intro: '',
        bugIntro: ''
    },
    {
        id: '010',
        tit: '兼容IE8的简易jQuery日期选择器插件',
        type: '插件',
        keyWord: ['日历', 'DCalendar', 'jQuery'],
        compatible: ['1', '1', '1', '', '1', '1', '1', ''],
        comMobile: ['1', '', '1'],
        intro: '<p>以插件DCalendar为基础，新增语言配置选项，支持中文和英文，新增清空按钮。</p><p>注：页面使用table布局时请避免样式冲突。</p>',
        bugIntro: ''
    },
    {
        id: '011',
        tit: 'Html转Pdf',
        type: '插件',
        keyWord: ['Canvas', 'html2canvas', 'Js'],
        compatible: ['1', '1', '0', '', '1', '1', '0', ''],
        comMobile: ['0', '', '0'],
        intro: '<p>实现原理：将html转换成canvas，再将canvas图片转换成pdf。</p><p>html2canvas脚本将整个或部分页面渲染成一个Canvas图片，通过读取DOM并将不同的样式应用到这些元素上实现，它不需要来自服务器任何渲染，整张图片都是在客户端浏览器创建。当浏览器不支持Canvas时，将采用Flashcanvas或ExplorerCanvas技术代替实现。</p>',
        bugIntro: ''
    },
    {
        id: '012',
        tit: '省市区下拉三级联动',
        type: '功能',
        keyWord: ['省市区', '三级联动', 'jQuery'],
        compatible: ['1', '1', '0', '', '1', '1', '0', ''],
        comMobile: ['1', '', '0'],
        intro: '<p>省市区数据更新于2019年12月11日</p>',
        bugIntro: ''
    },
    {
        id: '013',
        tit: '兼容IE8的仿浏览器关键词搜索',
        type: '功能',
        keyWord: ['搜索', '定位', 'jQuery'],
        compatible: ['1', '1', '1', '', '1', '1', '1', ''],
        comMobile: ['', '', ''],
        intro: '<p>1、支持回车按键与按钮点击双操作</p><p>2、支持关键词定位</p><p>3、支持搜索框悬浮</p><p>4、不支持实时输入搜索（防止反复定位）</p>',
        bugIntro: ''
    },
    {
        id: '014',
        tit: 'jQuery分页插件',
        type: '插件',
        keyWord: ['分页', 'jQuery'],
        compatible: ['1', '1', '0', '', '1', '1', '0', ''],
        comMobile: ['', '', ''],
        intro: '<p>配置参数如下：</p><table><tr><td>containerId</td><td>控件容器id</td><td>必填</td><td></td><td></td></tr><tr><td>cssStyle</td><td>控件样式</td><td>选填</td><td>1&nbsp;&nbsp;|&nbsp;&nbsp;2&nbsp;&nbsp;|&nbsp;&nbsp;3&nbsp;&nbsp;|&nbsp;&nbsp;4</td><td>默认1</td></tr><tr><td>curPage</td><td>当前页码</td><td>选填</td><td></td><td>默认1</td></tr><tr><td>isSkip</td><td>是否需要跳转功能</td><td>选填</td><td>true&nbsp;&nbsp;|&nbsp;&nbsp;false</td><td>默认false</td></tr><tr><td>isSize</td><td>是否需要选择条数功能</td><td>选填</td><td>true&nbsp;&nbsp;|&nbsp;&nbsp;false</td><td>默认false</td></tr><tr><td>sizeList</td><td>每页显示条数</td><td>选填</td><td></td><td>默认[10,20]</td></tr><tr><td>callback</td><td>回调函数</td><td>必填</td><td></td><td></td></tr></table><p>注：回调函数中必填数据总数与执行回调语句，详见代码注释</p>',
        bugIntro: ''
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
/**
 * @authors kk
 * @date    2019-07-13
 */

// 列表组件
var PicItem = {
    props: ['item', 'loadimg'],
    template: '<li @click="handleItemClick"><img :src="loadimg" :data-src="\'../../../res/code/\' + item.id+ \'/shikkya.png\'"/><h3 :title="item.tit">{{item.tit}}</h3><p><i class="icon iconfont icon-tag"></i><span v-for="iteminner in item.keyWord">{{iteminner}}</span></p></li>',
    methods: {
        handleItemClick: function() {
            window.open('./detail.html?codeId=' + this.item.id);
        }
    }
}

// 所有数据 [ chrome, firefox, safari, opera, tencent, se360, ie8, ie11 ]  [ Android, Ios, WeChat ]
// { id: '', tit: '', type: '', keyWord: [], compatible: ['', '', '', '', '', '', '', ''], comMobile: ['', '', ''], intro: '', bugIntro: '' }
var picList = [{
        id: '001',
        tit: '容器内拖拽分割线自由分配左右空间',
        type: '其他',
        keyWord: ['拖拽', 'js'],
        compatible: ['1', '1', '0', '', '1', '1', '', '1'],
        comMobile: ['', '', ''],
        intro: '<p>1、分割线宽度占位</p><p>2、左右两部分的最小宽度一致，可为0</p>',
        bugIntro: ''
    },
    {
        id: '002',
        tit: '数字滚动增值插件countUp.js',
        type: '其他',
        keyWord: ['数字', '滚动', '跳数', 'js'],
        compatible: ['1', '1', '1', '', '1', '1', '', '1'],
        comMobile: ['', '', ''],
        intro: '<p>CountUp.js 无依赖的、轻量级的 JavaScript 类，可以用来快速创建以一种更有趣的动画方式显示数值数据。</p><p>换值只用于临时变化，重置开始后依然是初始值。</p><p>可配置的参数：</p><p>target = 目标元素的 ID</p><p>startVal = 开始值</p><p>endVal = 结束值</p><p>decimals = 小数位数，默认值是0</p><p>duration = 动画延迟秒数，默认值是2</p>',
        bugIntro: ''
    },
    {
        id: '003',
        tit: '可被鼠标划破的网',
        type: '其他',
        keyWord: ['canvas', 'js'],
        compatible: ['1', '1', '1', '', '1', '1', '', '1'],
        comMobile: ['', '', ''],
        intro: '',
        bugIntro: '<p>safari浏览器下速度略迟缓，不影响使用。</p>'
    }
];
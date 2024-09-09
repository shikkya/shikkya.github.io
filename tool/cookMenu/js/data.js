/**
 * index.html
 * @authors shikkya
 * @date 2024-09-07
 */

// 食材数据 
var foodData = [
    // 蔬菜
    { type: "蔬菜", id: 'vege_sc', name: '生菜' },
    { type: "蔬菜", id: 'vege_ymc', name: '油麦菜' },
    { type: "蔬菜", id: 'vege_yc', name: '油菜' },
    { type: "蔬菜", id: 'vege_xbc', name: '小白菜' },
    { type: "蔬菜", id: 'vege_wwc', name: '娃娃菜' },
    { type: "蔬菜", id: 'vege_xc', name: '香菜' },
    { type: "蔬菜", id: 'vege_mg', name: '蘑菇' },
    { type: "蔬菜", id: 'vege_xg', name: '香菇' },
    { type: "蔬菜", id: 'vege_jzg', name: '金针菇' },
    { type: "蔬菜", id: 'vege_km', name: '口蘑' },
    { type: "蔬菜", id: 'vege_xwg', name: '蟹味菇' },
    { type: "蔬菜", id: 'vege_xhs', name: '西红柿' },
    { type: "蔬菜", id: 'vege_hlb', name: '胡萝卜' },
    { type: "蔬菜", id: 'vege_td', name: '土豆' },
    { type: "蔬菜", id: 'vege_dg', name: '地瓜' },
    { type: "蔬菜", id: 'vege_ng', name: '南瓜' },
    { type: "蔬菜", id: 'vege_hg', name: '黄瓜' },
    { type: "蔬菜", id: 'vege_sy', name: '山药' },
    { type: "蔬菜", id: 'vege_yangc', name: '洋葱' },
    { type: "蔬菜", id: 'vege_ym', name: '玉米' },
    { type: "蔬菜", id: 'vege_c', name: '葱' },
    // 豆制品
    { type: "豆制品", id: 'tofu_g', name: '干豆腐' },
    { type: "豆制品", id: 'tofu_d', name: '大豆腐' },
    { type: "豆制品", id: 'tofu_f', name: '冻豆腐' },
    { type: "豆制品", id: 'tofu_y', name: '油豆腐' },
    { type: "豆制品", id: 'tofu_dp', name: '豆腐泡' },
    // 蛋类
    { type: "蛋类", id: 'egg_j', name: '鸡蛋' },
    { type: "蛋类", id: 'egg_y', name: '咸鸭蛋' },
    // 肉类
    { type: "肉类", id: 'meat_j', name: '鸡肉' },
    { type: "肉类", id: 'meat_z', name: '猪肉' },
    { type: "肉类", id: 'meat_n', name: '牛肉' },
    { type: "肉类", id: 'meat_y', name: '羊肉' },
    { type: "肉类", id: 'meat_rj', name: '肉卷' },
    { type: "肉类", id: 'meat_x', name: '虾' },
    { type: "肉类", id: 'meat_jx', name: '鸡胸肉' },
    { type: "肉类", id: 'meat_jt', name: '鸡腿' },
    { type: "肉类", id: 'meat_xb', name: '蟹棒' },
    { type: "肉类", id: 'meat_hgw', name: '火锅丸' },
    // 调料
    { type: "调料", id: 'sauce_zr', name: '孜然' },
    { type: "调料", id: 'sauce_my', name: '麻油' },
    { type: "调料", id: 'sauce_ael', name: '奥尔良烤肉酱' },
    { type: "调料", id: 'sauce_ksj', name: '口水鸡拌料' },
    { type: "调料", id: 'sauce_slj', name: '沙拉酱' },
    { type: "调料", id: 'sauce_fqj', name: '番茄酱' },
    { type: "调料", id: 'sauce_dbj', name: '豆瓣酱' },
    { type: "调料", id: 'sauce_tmj', name: '甜面酱' },
    // 其他
    { type: "其他", id: 'other_nn', name: '牛奶' },
    { type: "其他", id: 'other_fm', name: '蜂蜜' },
    { type: "其他", id: 'other_lm', name: '蓝莓酱' },
    { type: "其他", id: 'other_ts', name: '吐司' },
    { type: "其他", id: 'other_mf', name: '面粉' },
    { type: "其他", id: 'other_xp', name: '虾皮' },
    { type: "其他", id: 'other_zsp', name: '芝士片' },
    { type: "其他", id: 'other_zss', name: '芝士碎' },
    { type: "其他", id: 'other_xc', name: '香肠' },
]

// 菜单数据
var menuData = [{
    name: '主食',
    child: [{
        name: '三明治',
        recipeMust: ['other_ts', 'egg_j', 'meat_jx', 'vege_sc'],
        recipeExtra: ['meat_x', 'vege_xhs', 'vege_ym', 'other_zsp', 'sauce_slj']
    }, {
        name: '汤面',
        recipeMust: ['切面,挂面', 'sauce_my'],
        recipeExtra: ['meat_rj', 'meat_hgw', 'meat_x', '青菜|vege_ymc,vege_yc,vege_xbc,vege_sc,vege_wwc', '蘑菇|vege_jzg,vege_mg,vege_xwg,vege_km', '豆腐|tofu_g,tofu_f,tofu_y,tofu_dp', 'egg_j']
    }, {
        name: '拌面',
        recipeMust: ['切面', 'sauce_ksj'],
        recipeExtra: ['meat_rj', 'meat_hgw', 'meat_x', 'vege_hg', 'vege_xc', '青菜|vege_ymc,vege_yc,vege_xbc,vege_sc,vege_wwc', '蘑菇|vege_jzg,vege_mg,vege_xwg,vege_km', '豆腐|tofu_g,tofu_y,tofu_dp']
    }, {
        name: '鸡蛋饼',
        recipeMust: ['egg_j', 'other_mf'],
        recipeExtra: ['other_xp', 'vege_hlb', 'other_xc', '青菜|vege_sc,vege_xbc,vege_wwc,vege_xc']
    }, {
        name: '饭包',
        recipeMust: ['vege_sc', '米饭', 'sauce_dbj,sauce_tmj', 'other_xc', 'vege_xc'],
        recipeExtra: ['vege_td', 'egg_j'],
    }, {
        name: '紫菜包饭',
        recipeMust: ['寿司紫菜', '米饭', '寿司萝卜', 'vege_hg', 'other_xc'],
        recipeExtra: ['egg_j', 'meat_xb', 'sauce_slj', 'sauce_fqj']
    }, {
        name: '烤地瓜',
        recipeMust: ['vege_dg']
    }]
}, {
    name: '菜品',
    child: [{
        name: '孜然肉片',
        recipeMust: ['vege_yangc', 'meat_rj,meat_n,meat_y,meat_z', 'sauce_zr']
    }, {
        name: '奥尔良烤鸡腿',
        recipeMust: ['meat_jt', 'sauce_ael']
    }, {
        name: '青菜炒蘑菇',
        recipeMust: ['vege_ymc,vege_yc,vege_xbc,vege_wwc', 'vege_mg,vege_km,vege_xwg', '肉|meat_j,meat_z,meat_n,meat_y,meat_rj,meat_jx'],
        recipeExtra: ['vege_hlb', 'meat_x', 'meat_hgw'],
    }, {
        name: '青菜炒豆腐',
        recipeMust: ['vege_ymc,vege_yc,vege_xbc,vege_wwc', 'tofu_f,tofu_y,tofu_dp', '肉|meat_j,meat_z,meat_n,meat_y,meat_rj,meat_jx'],
        recipeExtra: ['vege_hlb', 'meat_x', 'meat_hgw'],
    }]
}, {
    name: '甜品',
    child: [{
        name: '蓝莓山药',
        recipeMust: ['other_lm', 'vege_sy'],
        recipeExtra: ['other_fm', 'other_nn']
    }]
}];

/*
, {
    name: '',
    recipeMust: ['', ''],
    recipeExtra: ['', ''],
    info: ''
}
*/

/**
 * index.html
 * @authors shikkya
 * @date 2023-11-01
 */

// 版本
var versionData = [{
    name: '原版',
    tag: 'DS'
}, {
    name: '巨人囯',
    tag: 'ROG'
}, {
    name: '海难',
    tag: 'SW'
}, {
    name: '哈姆雷特',
    tag: 'HAM'
}];

// 代码
var codeData = [{
    type: '角色',
    child: [
        { code: 'wilson', desc: '威尔逊(绅士科学家)', version: '1,2' },
        { code: 'willow', desc: '薇洛(纵火者)', version: '1,2' },
        { code: 'wolfgang', desc: '沃尔夫冈(大力士)', version: '1,2' },
        { code: 'wendy', desc: '温蒂(失去亲人的女孩)', version: '1,2' },
        { code: 'wx78', desc: 'WX-78(没有灵魂的机器人)', version: '1,2' },
        { code: 'wickerbottom', desc: '薇克巴顿(图书管理员)', version: '1,2' },
        { code: 'woodie', desc: '伍迪(伐木工)', version: '1,2' },
        { code: 'wes', desc: '韦斯(哑剧演员)', version: '1,2' },
        { code: 'waxwell', desc: '麦斯威尔(傀儡师)', version: '1,2' },
        { code: 'wagstaff', desc: '瓦格斯塔夫(神秘的创始人)', version: '1,2' },
        { code: 'wathgrithr', desc: '薇格弗德(表演艺术家)', version: '1,2' },
        { code: 'webber', desc: '韦伯(蜘蛛男孩)', version: '1,2' },

        { code: 'walani', desc: '瓦尼拉(沉着的冲浪者)', version: '2' },
        { code: 'warly', desc: '沃利(厨师)', version: '2' },
        { code: 'wilbur', desc: '威尔伯(猴子国王)', version: '2' },
        { code: 'woodlegs', desc: '伍德莱格(海盗船长)', version: '2' },
    ]
}, {
    type: '角色道具',
    child: [
        { code: 'lighter', desc: '打火机(薇洛)', version: '1,2' },
        { code: 'waxwelljournal', desc: '暗影秘典(麦斯威尔)', version: '1,2' },
        { code: 'wathgrithrhat', desc: '战斗头盔(薇格弗德)', version: '1,2' },
    ]
}, {
    type: 'Boss',
    child: [
        { code: 'moose', desc: '麋鹿鹅(大)', version: '1' },
        { code: 'mossling', desc: '麋鹿鹅(小)', version: '1' },
        { code: 'mooseegg', desc: '麋鹿鹅(蛋)', version: '1' },
        { code: 'goose_feather', desc: '麋鹿鹅羽毛', version: '1' },
        { code: 'dragonfly', desc: '龙蝇', version: '1' },
        { code: 'dragon_scales', desc: '鳞片', version: '1' },
        { code: 'bearger', desc: '熊', version: '1' },
        { code: 'bearger_fur', desc: '熊皮', version: '1' },
        { code: 'deerclops', desc: '独眼巨鹿', version: '1' },
        { code: 'deerclops_eyeball', desc: '独眼巨鹿眼球', version: '1' },

        { code: 'twister', desc: '豹卷风', version: '2' },
        { code: 'twister_seal', desc: '海豹(豹卷风本体)', version: '2' },
        { code: 'tigershark', desc: '虎鲨(大)', version: '2' },
        { code: 'sharkitten', desc: '虎鲨(小)', version: '2' },
        { code: 'shark_gills', desc: '鲨鱼腮', version: '2' },
        { code: 'kraken', desc: '海妖', version: '2' },
    ]
}, {
    type: '动物海',
    child: [
        { code: 'jellyfish', desc: '水母', version: '2' },
        { code: 'ballphin', desc: '海豚', version: '2' },
        { code: 'sharx', desc: '海猎犬', version: '2' },
        { code: 'swordfish', desc: '剑鱼', version: '2' },
        { code: 'knightboat', desc: '浮船骑士', version: '2' },
        { code: 'octopusking', desc: '海盗章鱼', version: '2' },
    ]
}, {
    type: '动物陆',
    child: [
        { code: 'chester', desc: '切斯特', version: '1' },
        { code: 'chester_eyebone', desc: '眼骨', version: '1' },
        { code: 'packim', desc: '帕克白克斯', version: '2' },
        { code: 'packim_fishbone', desc: '鱼骨', version: '2' },
        { code: 'frog', desc: '青蛙', version: '1' },
        { code: 'crab', desc: '螃蟹', version: '2' },
        { code: 'crabhole', desc: '螃蟹窝', version: '2' },
        { code: 'flup', desc: '沼泽跳跳鱼', version: '2' },
        { code: 'rabbit', desc: '兔子', version: '1' },
        { code: 'rabbithole', desc: '兔洞', version: '1' },
        { code: 'mole', desc: '鼹鼠', version: '1' },
        { code: 'molehill', desc: '鼹鼠丘', version: '1' },
        { code: 'catcoon', desc: '猫', version: '1' },
        { code: 'coontail', desc: '猫尾', version: '1' },
        { code: 'snake', desc: '蛇(红)', version: '2' },
        { code: 'snake_poison', desc: '蛇(黄)', version: '2' },
        { code: 'snakeskin', desc: '蛇皮', version: '2' },
        { code: 'spider', desc: '蜘蛛(普通)', version: '1,2' },
        { code: 'spider_warrior', desc: '蜘蛛(黄)', version: '1,2' },
        { code: 'spiderqueen', desc: '蜘蛛(女王)', version: '1,2' },
        { code: 'spiderden', desc: '蜘蛛穴(一级)', version: '1,2' },
        { code: 'spiderden_2', desc: '蜘蛛穴(二级)', version: '1,2' },
        { code: 'spiderden_3', desc: '蜘蛛穴(三级)', version: '1,2' },
        { code: 'silk', desc: '蜘蛛丝', version: '1,2' },
        { code: 'spidergland', desc: '蜘蛛腺', version: '1,2' },
        { code: 'spidereggsack', desc: '蜘蛛卵', version: '1,2' },
        { code: 'primeape', desc: '猿猴', version: '2' },
        { code: 'primeapebarrel', desc: '猿猴小屋', version: '2' },
        { code: 'ghost', desc: '幽灵', version: '1' },
        { code: 'smallbird', desc: '高脚鸟(幼年)', version: '1,2' },
        { code: 'teenbird', desc: '高脚鸟(青年)', version: '1,2' },
        { code: 'tallbird', desc: '高脚鸟(成年)', version: '1,2' },
        { code: 'tallbirdegg', desc: '高脚鸟蛋', version: '1,2' },
        { code: 'doydoybaby', desc: '渡渡鸟(幼年)', version: '2' },
        { code: 'doydoyteen', desc: '渡渡鸟(青年)', version: '2' },
        { code: 'doydoy', desc: '渡渡鸟(成年)', version: '2' },
        { code: 'doydoynest', desc: '渡渡鸟巢', version: '2' },
        { code: 'perd', desc: '火鸡', version: '1' },
        { code: 'buzzard', desc: '秃鹫', version: '1' },
        { code: 'hound', desc: '猎犬(普通)', version: '1' },
        { code: 'firehound', desc: '猎犬(火)', version: '1' },
        { code: 'icehound', desc: '猎犬(冰)', version: '1' },
        { code: 'houndmound', desc: '猎犬丘', version: '1' },
        { code: 'crocodog', desc: '鳄狗', version: '2' },
        { code: 'houndstooth', desc: '犬牙', version: '1,2' },
        { code: 'dragoon', desc: '呆龙', version: '2' },
        { code: 'dragoonden', desc: '呆龙巢穴', version: '2' },
        { code: 'bunnyman', desc: '兔人', version: '1' },
        { code: 'rabbithouse', desc: '兔屋(兔人房)', version: '1' },
        { code: 'pigman', desc: '猪人', version: '1' },
        { code: 'pighouse', desc: '猪屋(猪人房)', version: '1' },
        { code: 'wildbore', desc: '野猪人', version: '2' },
        { code: 'wildborehouse', desc: '野猪舍(猪人房)', version: '2' },
        { code: 'pigguard', desc: '猪人守卫', version: '1' },
        { code: 'pigskin', desc: '猪皮', version: '1,2' },
        { code: 'pigking', desc: '猪王', version: '1' },
        { code: 'merm', desc: '鱼人(绿)', version: '1,2' },
        { code: 'mermfisher', desc: '鱼人(红)', version: '2' },
        { code: 'mermhouse', desc: '鱼人房', version: '1,2' },
        { code: 'mermhouse_fisher', desc: '鱼人房', version: '2' },
        { code: 'lightninggoat', desc: '伏特羊', version: '1' },
        { code: 'babybeefalo', desc: '牛(小)', version: '1' },
        { code: 'beefalo', desc: '牛(大)', version: '1' },
        { code: 'beefalowool', desc: '牛毛', version: '1' },
        { code: 'horn', desc: '牛角', version: '1' },
        { code: 'ox', desc: '水牛', version: '2' },
        { code: 'ox_horn', desc: '牛角', version: '2' },
        { code: 'little_walrus', desc: '海象(小)', version: '1' },
        { code: 'walrus', desc: '海象(大)', version: '1' },
        { code: 'walrus_camp', desc: '海象营地', version: '1' },
        { code: 'koalefant_winter', desc: '大象(蓝冬)', version: '1' },
        { code: 'trunk_winter', desc: '象鼻(蓝冬)', version: '1' },
        { code: 'koalefant_summer', desc: '大象(红夏)', version: '1' },
        { code: 'trunk_summer', desc: '象鼻(红夏)', version: '1' },
        { code: 'warg', desc: '座狼(疯象)', version: '1' },
        { code: 'krampus', desc: '坎普斯', version: '1,2' },
    ]
}, {
    type: '动物空',
    child: [
        { code: 'mosquito', desc: '蚊子(红)', version: '1' },
        { code: 'mosquito_poison', desc: '蚊子(黄)', version: '2' },
        { code: 'fireflies', desc: '萤火虫', version: '1,2' },
        { code: 'butterfly', desc: '蝴蝶', version: '1,2' },
        { code: 'bee', desc: '蜜蜂(黄)', version: '1,2' },
        { code: 'killerbee', desc: '杀人蜂(红)', version: '1,2' },
        { code: 'crow', desc: '乌鸦', version: '1' },
        { code: 'robin', desc: '红雀', version: '1' },
        { code: 'robin_winter', desc: '雪雀', version: '1' },
        { code: 'toucan', desc: '大嘴鸟', version: '2' },
        { code: 'parrot', desc: '鹦鹉', version: '2' },
        { code: 'parrot_pirate', desc: '海盗鹦鹉', version: '2' },
        { code: 'seagull', desc: '海鸥', version: '2' },
        { code: 'feather_crow', desc: '黑色羽毛', version: '1,2' },
        { code: 'feather_robin', desc: '红色羽毛', version: '1,2' },
        { code: 'feather_robin_winter', desc: '蓝色羽毛', version: '1,2' },
        { code: 'glommer', desc: '格罗姆', version: '1' },
    ]
}, {
    type: '动物洞穴',
    child: [
        { code: 'spider_hider', desc: '蜘蛛(普通)', version: '1' },
        { code: 'spider_spitter', desc: '蜘蛛(喷射)', version: '1' },
        { code: 'spiderhole', desc: '蛛网岩', version: '1' },
        { code: 'spider_dropper', desc: '蜘蛛(白)', version: '1' },
        { code: 'slurper', desc: '啜食者', version: '1' },
        { code: 'slurtle', desc: '蛞蝓龟', version: '1' },
        { code: 'snurtle', desc: '蜗牛龟', version: '1' },
        { code: 'monkey', desc: '猴子', version: '1' },
        { code: 'monkeybarrel', desc: '猴子桶', version: '1' },
        { code: 'rocky', desc: '石虾', version: '1' },
        { code: 'tentacle', desc: '触手', version: '1' },
        { code: 'tentaclespots', desc: '触手皮', version: '1' },
        { code: 'minotaur', desc: '远古守护者', version: '1' },
        { code: 'bat', desc: '蝙蝠', version: '1' },
    ]
}, {
    type: '植物',
    child: [
        { code: 'flower', desc: '花', version: '1,2' },
        { code: 'flower_evil', desc: '恶魔花', version: '1,2' },
        { code: 'mandrake', desc: '曼德拉草', version: '1,2' },
        { code: 'lureplant', desc: '食人花', version: '1,2' },
        { code: 'eyeplant', desc: '眼球草', version: '1,2' },
        { code: 'lureplantbulb', desc: '食人花种子', version: '1,2' },

        { code: 'grass', desc: '草丛', version: '1,2' },
        { code: 'dug_grass', desc: '草丛(挖出)', version: '1,2' },
        { code: 'sapling', desc: '树苗', version: '1,2' },
        { code: 'dug_sapling', desc: '树苗(挖出)', version: '1,2' },
        { code: 'twigs', desc: '树枝', version: '1,2' },
        { code: 'berrybush', desc: '浆果丛', version: '1' },
        { code: 'dug_berrybush', desc: '浆果丛(挖出)', version: '1' },
        { code: 'berrybush2', desc: '浆果丛', version: '1,2' },
        { code: 'dug_berrybush2', desc: '浆果丛(挖出)', version: '1,2' },
        { code: 'marsh_bush', desc: '尖刺灌木', version: '1' },
        { code: 'dug_marsh_bush', desc: '尖刺灌木(挖出)', version: '1' },
        { code: 'reeds', desc: '芦苇', version: '1,2' },
        { code: 'bush_vine', desc: '藤蔓(普通)', version: '2' },
        { code: 'snakeden', desc: '藤蔓(有蛇)', version: '2' },
        { code: 'dug_bush_vine', desc: '藤蔓根(挖出)', version: '2' },
        { code: 'vine', desc: '藤', version: '2' },
        { code: 'bambootree', desc: '竹林', version: '2' },
        { code: 'dug_bambootree', desc: '竹根(挖出)', version: '2' },

        { code: 'tumbleweed', desc: '风滚草', version: '1' },
        { code: 'cactus', desc: '仙人掌', version: '1' },
        { code: 'cactus_flower', desc: '仙人掌花', version: '1' },
        { code: 'cactus_meat', desc: '仙人掌肉', version: '1' },
        { code: 'coralreef', desc: '珊瑚礁', version: '2' },

        { code: 'evergreen', desc: '常青树', version: '1' },
        { code: 'leif', desc: '树精守卫(常青树)', version: '1' },
        { code: 'evergreen_sparse', desc: '粗壮常青树', version: '1' },
        { code: 'leif_sparse', desc: '树精守卫(粗壮常青树)', version: '1' },
        { code: 'marsh_tree', desc: '针刺树', version: '1' },
        { code: 'jungletree', desc: '丛林树', version: '2' },
        { code: 'palmtree', desc: '椰树', version: '2' },
        { code: 'palmleaf', desc: '椰树叶', version: '2' },
        { code: 'treeguard', desc: '椰树守卫', version: '2' },
        { code: 'mangrovetree', desc: '红树', version: '2' },
        { code: 'coral_brain_rock', desc: '智慧树', version: '2' },
        { code: 'coral_brain', desc: '智慧果', version: '2' },
        { code: 'livingtree', desc: '完全正常的树', version: '1' },
        { code: 'livingjungletree', desc: '中规中矩的丛林树', version: '2' },
        { code: 'livinglog', desc: '活木头', version: '1,2' },
    ]
}, {
    type: '植物洞穴',
    child: [
        { code: 'flower_cave', desc: '荧光花(单朵)', version: '1' },
        { code: 'flower_cave_double', desc: '荧光花(两朵)', version: '1' },
        { code: 'flower_cave_triple', desc: '荧光花(三朵)', version: '1' },
        { code: 'lightbulb', desc: '荧光果', version: '' },

        { code: 'lichen', desc: '洞穴苔藓', version: '1' },
        { code: 'cave_fern', desc: '蕨类植物', version: '1' },

        { code: 'cave_banana_tree', desc: '洞穴香蕉树', version: '1' },
    ]
}, {
    type: '蘑菇',
    child: [
        { code: 'red_mushroom', desc: '红蘑菇', version: '1,2' },
        { code: 'green_mushroom', desc: '绿蘑菇', version: '1,2' },
        { code: 'blue_mushroom', desc: '蓝蘑菇', version: '1,2' },
        { code: 'red_cap', desc: '红蘑菇(采下)', version: '1,2' },
        { code: 'green_cap', desc: '绿蘑菇(采下)', version: '1,2' },
        { code: 'blue_cap', desc: '蓝蘑菇(采下)', version: '1,2' },
        { code: 'red_cap_cooked', desc: '烤红蘑菇', version: '1,2' },
        { code: 'green_cap_cooked', desc: '烤绿蘑菇', version: '1,2' },
        { code: 'blue_cap_cooked', desc: '烤蓝蘑菇', version: '1,2' },
        { code: 'mushtree_medium', desc: '红蘑菇树', version: '1,2' },
        { code: 'mushtree_small', desc: '绿蘑菇树', version: '1,2' },
        { code: 'mushtree_tall', desc: '蓝蘑菇树', version: '1,2' },
    ]
}, {
    type: '工具',
    child: [
        { code: 'axe', desc: '斧头', version: '1,2' },
        { code: 'goldenaxe', desc: '黄金斧头', version: '1,2' },
        { code: 'obsidianaxe', desc: '黑曜石斧子', version: '2' },
        { code: 'pickaxe', desc: '鹤嘴锄', version: '1,2' },
        { code: 'goldenpickaxe', desc: '黄金鹤嘴锄', version: '1,2' },
        { code: 'multitool_axe_pickaxe', desc: '多用斧镐', version: '1' },
        { code: 'shovel', desc: '铲子', version: '1,2' },
        { code: 'goldenshovel', desc: '黄金铲子', version: '1,2' },
        { code: 'machete', desc: '砍刀', version: '2' },
        { code: 'goldenmachete', desc: '黄金砍刀', version: '2' },
        { code: 'obsidianmachete', desc: '黑曜石砍刀', version: '2' },
        { code: 'hammer', desc: '锤子', version: '1,2' },
        { code: 'pitchfork', desc: '干草叉', version: '1,2' },

        { code: 'torch', desc: '火炬', version: '1,2' },
        { code: 'lantern', desc: '提灯', version: '1' },
        { code: 'bottlelantern', desc: '水瓶提灯', version: '2' },
        { code: 'pumpkin_lantern', desc: '南瓜灯', version: '1' },
        { code: 'nightlight', desc: '魂灯(暗夜灯)', version: '1,2' },
        { code: 'buoy', desc: '灯塔', version: '2' },

        { code: 'diviningrod', desc: '探测杖', version: '1,2' },
        { code: 'firestaff', desc: '火魔杖(红)', version: '1,2' },
        { code: 'icestaff', desc: '冰魔杖(蓝)', version: '1,2' },
        { code: 'telestaff', desc: '传送魔杖(紫)', version: '1,2' },
        { code: 'telebase', desc: '传送焦点', version: '1,2' },
        { code: 'orangestaff', desc: '懒人魔杖(橙)', version: '1' },
        { code: 'yellowstaff', desc: '唤星者魔杖(黄)', version: '1' },
        { code: 'greenstaff', desc: '拆解魔杖(绿)', version: '1' },
        { code: 'cane', desc: '步行手杖', version: '1' },
        { code: 'volcanostaff', desc: '火山魔杖', version: '2' },

        { code: 'mussel_stick', desc: '贝棒', version: '2' },
        { code: 'fertilizer', desc: '便便桶', version: '1,2' },
        { code: 'razor', desc: '剃刀', version: '1,2' },
        { code: 'trap', desc: '陷阱', version: '1,2' },
        { code: 'birdtrap', desc: '捕鸟陷阱', version: '1,2' },
        { code: 'bugnet', desc: '捕虫网', version: '1,2' },
        { code: 'fishingrod', desc: '钓竿(钓鱼竿)', version: '1,2' },
        { code: 'grass_umbrella', desc: '花伞', version: '1' },
        { code: 'palmleaf_umbrella', desc: '热带阳伞', version: '2' },
        { code: 'umbrella', desc: '雨伞', version: '1,2' },
        { code: 'bandage', desc: '蜂蜜药膏', version: '1,2' },
        { code: 'healingsalve', desc: '治疗药膏', version: '1,2' },
        { code: 'antivenom', desc: '抗毒血清', version: '2' },
        { code: 'compass', desc: '指南针', version: '1,2' },
        { code: 'heatrock', desc: '暖石', version: '1,2' },
        { code: 'monkeyball', desc: '逗猴球', version: '2' },
        { code: 'bedroll_straw', desc: '草席卷', version: '1,2' },
        { code: 'bedroll_furry', desc: '毛皮铺盖', version: '1' },
        { code: 'featherfan', desc: '羽毛扇', version: '1' },
        { code: 'tropicalfan', desc: '热带风扇', version: '2' },
        { code: 'ox_flute', desc: '降雨排箫', version: '2' },
        { code: 'onemanband', desc: '独奏乐器', version: '1,2' },
        { code: 'nightmare_timepiece', desc: '铥矿徽章', version: '1' },
        { code: 'sewing_kit', desc: '针线包', version: '1,2' },
        { code: 'wind_conch', desc: '咆哮海螺', version: '2' },
        { code: 'sail_stick', desc: '帆杆', version: '2' },
    ]
}, {
    type: '武器',
    child: [
        { code: 'spear', desc: '长矛', version: '1,2' },
        { code: 'spear_poison', desc: '毒矛', version: '2' },
        { code: 'spear_obsidian', desc: '黑曜石长矛', version: '2' },
        { code: 'hambat', desc: '火腿棒', version: '1,2' },
        { code: 'batbat', desc: '蝙蝠棒', version: '1' },
        { code: 'ruins_bat', desc: '铥矿棒', version: '1' },
        { code: 'cutlass', desc: '剑鱼短剑', version: '2' },
        { code: 'nightsword', desc: '暗夜剑', version: '1,2' },
        { code: 'nightstick', desc: '晨星锤', version: '1' },
        { code: 'staff_tornado', desc: '天气风向标(龙卷风魔杖)', version: '1' },
        { code: 'spear_launcher', desc: '矛枪', version: '2' },
        { code: 'boomerang', desc: '回旋镖', version: '1,2' },

        { code: 'blowdart_pipe', desc: '吹箭', version: '1,2' },
        { code: 'blowdart_sleep', desc: '吹箭(催眠)', version: '1,2' },
        { code: 'blowdart_fire', desc: '吹箭(火焰)', version: '1,2' },
        { code: 'blowdart_poison', desc: '吹箭(毒)', version: '2' },

        { code: 'panflute', desc: '排箫', version: '1,2' },
        { code: 'gunpowder', desc: '火药', version: '1,2' },
        { code: 'beemine', desc: '蜜蜂地雷', version: '1,2' },
        { code: 'coconade', desc: '椰弹', version: '2' },
        { code: 'obsidiancoconade', desc: '黑曜石椰弹', version: '2' },
        { code: 'trap_teeth', desc: '犬牙陷阱', version: '1,2' },
        { code: 'eyeturret_item', desc: '眼睛炮塔(可带走)', version: '1' },
        { code: 'eyeturret', desc: '眼睛炮塔(固定地上)', version: '1' },
    ]
}, {
    type: '航海',
    child: [
        { code: 'lograft', desc: '木筏', version: '2' },
        { code: 'raft', desc: '竹筏', version: '2' },
        { code: 'rowboat', desc: '划艇', version: '2' },
        { code: 'cargoboat', desc: '货船', version: '2' },
        { code: 'armouredboat', desc: '装甲船', version: '2' },
        { code: 'encrustedboat', desc: '硬壳船', version: '2' },

        { code: 'sail', desc: '草帆', version: '2' },
        { code: 'clothsail', desc: '布帆', version: '2' },
        { code: 'snakeskinsail', desc: '蛇皮帆', version: '2' },
        { code: 'feathersail', desc: '羽毛简帆', version: '2' },

        { code: 'boat_torch', desc: '船载火炬', version: '2' },
        { code: 'boat_lantern', desc: '船载灯笼', version: '2' },
        { code: 'telescope', desc: '望远镜', version: '2' },
        { code: 'supertelescope', desc: '超级望远镜', version: '2' },
        { code: 'boatrepairkit', desc: '修船套件', version: '2' },
        { code: 'boatcannon', desc: '船炮', version: '2' },
        { code: 'ironwind', desc: '螺旋桨', version: '2' },
        { code: 'trawlnet', desc: '拖网', version: '2' },
    ]
}, {
    type: '头戴',
    child: [
        { code: 'footballhat', desc: '橄榄球头盔', version: '1,2' },
        { code: 'oxhat', desc: '牛角盔', version: '2' },
        { code: 'slurtlehat', desc: '贝壳头盔', version: '1' },
        { code: 'ruinshat', desc: '铥矿皇冠', version: '1' },
        { code: 'aerodynamichat', desc: '流线型帽子(鲨鱼帽)', version: '2' },
        { code: 'minerhat', desc: '矿工帽', version: '1,2' },
        { code: 'molehat', desc: '鼹鼠帽', version: '1' },
        { code: 'flowerhat', desc: '花环', version: '1,2' },
        { code: 'strawhat', desc: '草帽', version: '1,2' },
        { code: 'tophat', desc: '高礼帽', version: '1,2' },
        { code: 'rainhat', desc: '雨帽', version: '1' },
        { code: 'earmuffshat', desc: '兔耳罩', version: '1' },
        { code: 'beefalohat', desc: '牛角帽', version: '1' },
        { code: 'winterhat', desc: '冬帽', version: '1' },
        { code: 'catcoonhat', desc: '猫帽', version: '1' },
        { code: 'brainjellyhat', desc: '思维帽', version: '2' },
        { code: 'watermelonhat', desc: '西瓜帽', version: '1,2' },
        { code: 'shark_teethhat', desc: '鲨齿王冠', version: '2' },
        { code: 'icehat', desc: '冰帽', version: '1,2' },
        { code: 'beehat', desc: '养蜂帽', version: '1,2' },
        { code: 'featherhat', desc: '羽毛帽', version: '1,2' },
        { code: 'bushhat', desc: '灌木丛帽', version: '1,2' },
        { code: 'spiderhat', desc: '蜘蛛帽', version: '1,2' },
        { code: 'walrushat', desc: '贝雷', version: '1' },
        { code: 'snakeskinhat', desc: '蛇皮帽', version: '2' },
        { code: 'eyebrellahat', desc: '眼球伞', version: '1' },
        { code: 'double_umbrellahat', desc: '双层伞帽', version: '2' },
        { code: 'captainhat', desc: '船长帽', version: '2' },
        { code: 'piratehat', desc: '海盗帽', version: '2' },
        { code: 'gashat', desc: '颗粒净化器', version: '2' },
    ]
}, {
    type: '身穿',
    child: [
        { code: 'armorgrass', desc: '草甲', version: '1' },
        { code: 'armorwood', desc: '木甲', version: '1,2' },
        { code: 'armormarble', desc: '大理石甲', version: '1' },
        { code: 'armorseashell', desc: '海贝甲', version: '2' },
        { code: 'armorlimestone', desc: '石灰石套装', version: '2' },
        { code: 'armorcactus', desc: '仙人掌护甲', version: '2' },
        { code: 'armordragonfly', desc: '鳞甲', version: '1' },
        { code: 'armor_sanity', desc: '魂甲(暗夜甲)', version: '1,2' },
        { code: 'armorruins', desc: '铥矿甲', version: '1' },
        { code: 'armorsnurtleshell', desc: '蜗壳护甲', version: '1' },
        { code: 'armorobsidian', desc: '黑曜石护甲', version: '2' },

        { code: 'amulet', desc: '重生护符(红)', version: '1,2' },
        { code: 'blueamulet', desc: '寒冰护符(蓝)', version: '1,2' },
        { code: 'purpleamulet', desc: '梦魇护符(紫)', version: '1,2' },
        { code: 'orangeamulet', desc: '懒人护符(橙)', version: '1' },
        { code: 'yellowamulet', desc: '魔光护符(黄)', version: '1' },
        { code: 'greenamulet', desc: '建造护符(绿)', version: '1' },

        { code: 'armorslurper', desc: '饥饿腰带', version: '1' },
        { code: 'raincoat', desc: '雨衣', version: '1' },
        { code: 'sweatervest', desc: '犬牙背心', version: '1' },
        { code: 'trunkvest_summer', desc: '透气背心(夏红)', version: '1' },
        { code: 'trunkvest_winter', desc: '松软背心(冬蓝)', version: '1' },
        { code: 'reflectivevest', desc: '清凉夏装', version: '1,2' },
        { code: 'hawaiianshirt', desc: '花衬衫', version: '1,2' },
        { code: 'beargervest', desc: '熊皮背心', version: '1' },
        { code: 'armor_snakeskin', desc: '蛇皮夹克', version: '2' },
        { code: 'blubbersuit', desc: '鲸脂套装', version: '2' },
        { code: 'armor_windbreaker', desc: '防风衣', version: '2' },
        { code: 'armor_lifejacket', desc: '救生衣', version: '2' },
    ]
}, {
    type: '背包',
    child: [
        { code: 'thatchpack', desc: '茅草袋(1*4)', version: '2' },
        { code: 'icepack', desc: '保鲜背包(2*3)', version: '1' },
        { code: 'seasack', desc: '海上保鲜袋(2*3)', version: '2' },
        { code: 'backpack', desc: '背包(2*4)', version: '1,2' },
        { code: 'piggyback', desc: '猪皮包(2*6)', version: '1,2' },
        { code: 'krampus_sack', desc: '坎普斯背包(2*7)', version: '1,2' },
    ]
}, {
    type: '建筑',
    child: [
        { code: 'campfire', desc: '营火', version: '1,2' },
        { code: 'firepit', desc: '火坑', version: '1,2' },
        { code: 'obsidianfirepit', desc: '黑曜石火坑', version: '2' },
        { code: 'chiminea', desc: '防风火炉', version: '2' },
        { code: 'coldfire', desc: '吸热篝火', version: '1,2' },
        { code: 'coldfirepit', desc: '吸热火坑', version: '1,2' },

        { code: 'researchlab', desc: '科学机器', version: '1,2' },
        { code: 'researchlab2', desc: '炼金引擎', version: '1,2' },
        { code: 'researchlab3', desc: '暗影操控器', version: '1,2' },
        { code: 'researchlab4', desc: '灵子分解器', version: '1' },
        { code: 'piratihatitator', desc: '灵子海盗帽', version: '2' },

        { code: 'winterometer', desc: '温度测量仪', version: '1,2' },
        { code: 'rainometer', desc: '雨量计', version: '1,2' },
        { code: 'lightning_rod', desc: '避雷针', version: '1,2' },
        { code: 'firesuppressor', desc: '雪球发射器(灭火器)', version: '1,2' },
        { code: 'icemaker', desc: '制冰机', version: '2' },

        { code: 'slow_farmplot', desc: '基础农场', version: '1,2' },
        { code: 'fast_farmplot', desc: '强化农场', version: '1,2' },
        { code: 'beebox', desc: '蜂箱', version: '1,2' },
        { code: 'meatrack', desc: '晾肉架', version: '1,2' },
        { code: 'cookpot', desc: '烹饪锅', version: '1,2' },
        { code: 'icebox', desc: '冰箱', version: '1,2' },

        { code: 'tent', desc: '帐篷', version: '1,2' },
        { code: 'siestahut', desc: '遮阳篷', version: '1,2' },
        { code: 'palmleaf_hut', desc: '椰树叶棚', version: '2' },
        { code: 'birdcage', desc: '鸟笼', version: '1,2' },

        { code: 'homesign', desc: '路牌', version: '1,2' },
        { code: 'sandbagsmall_item', desc: '沙袋', version: '2' },
        { code: 'sand_castle', desc: '沙堡', version: '2' },
        { code: 'pottedfern', desc: '蕨类盆栽', version: '1' },
        { code: 'resurrectionstatue', desc: '肉块雕像', version: '1,2' },
        { code: 'seatrap', desc: '海上陷阱', version: '2' },
        { code: 'volcano_altar', desc: '火山祭坛', version: '2' },
    ]
}, {
    type: '箱子',
    child: [
        { code: 'treasurechest', desc: '箱子(3*3)', version: '1,2' },
        { code: 'skullchest', desc: '骷髅箱(3*3)', version: '1' },
        { code: 'pandoraschest', desc: '华丽箱子(3*3)', version: '1' },
        { code: 'minotaurchest', desc: '大号华丽箱子(3*3)', version: '1' },
        { code: 'dragonflychest', desc: '龙鳞宝箱(3*4)', version: '1' },
    ]
}, {
    type: '墙',
    child: [
        { code: 'wall_hay_item', desc: '草墙', version: '1,2' },
        { code: 'wall_wood_item', desc: '木墙', version: '1,2' },
        { code: 'wall_stone_item', desc: '石墙', version: '1,2' },
        { code: 'wall_ruins_item', desc: '铥墙', version: '1' },
        { code: 'wall_limestone_item', desc: '石灰墙', version: '2' },
    ]
}, {
    type: '地皮',
    child: [
        { code: 'turf_road', desc: '卵石路', version: '1,2' },
        { code: 'turf_woodfloor', desc: '木地板', version: '1,2' },
        { code: 'turf_checkerfloor', desc: '棋盘地板', version: '1' },
        { code: 'turf_carpetfloor', desc: '地毯地板', version: '1' },
        { code: 'turf_snakeskinfloor', desc: '蛇皮地毯', version: '2' },

        { code: 'turf_forest', desc: '森林地皮', version: '1' },
        { code: 'turf_grass', desc: '长草地皮', version: '1' },
        { code: 'turf_savanna', desc: '热带草原地皮', version: '1' },
        { code: 'turf_rocky', desc: '岩石地皮', version: '1' },
        { code: 'turf_marsh', desc: '沼泽地皮', version: '1' },
        { code: 'turf_desertdirt', desc: '沙漠地皮', version: '1' },

        { code: 'turf_mud', desc: '泥泞地皮(洞穴)', version: '1' },
        { code: 'turf_cave', desc: '鸟粪地皮(洞穴)', version: '1' },
        { code: 'turf_sinkhole', desc: '黏滑地皮(洞穴)', version: '1' },
        { code: 'turf_underrock', desc: '洞穴岩石地皮(洞穴)', version: '1' },
        { code: 'turf_fungus_red', desc: '菌类地皮红(洞穴)', version: '1' },
        { code: 'turf_fungus_green', desc: '菌类地皮绿(洞穴)', version: '1' },
        { code: 'turf_fungus', desc: '菌类地皮蓝(洞穴)', version: '1' },

        { code: 'turf_jungle', desc: '丛林地皮', version: '2' },
        { code: 'turf_meadow', desc: '草地地皮', version: '2' },
        { code: 'turf_magmafield', desc: '岩浆地皮', version: '2' },
        { code: 'turf_tidalmarsh', desc: '潮泽地皮', version: '2' },

        { code: 'turf_ash', desc: '灰烬地皮(火山)', version: '2' },
        { code: 'turf_volcano', desc: '火山地皮(火山)', version: '2' },
    ]
}, {
    type: '宝石',
    child: [
        { code: 'redgem', desc: '红宝石', version: '1,2' },
        { code: 'bluegem', desc: '蓝宝石', version: '1,2' },
        { code: 'purplegem', desc: '紫宝石', version: '1,2' },
        { code: 'greengem', desc: '绿宝石', version: '1' },
        { code: 'yellowgem', desc: '黄宝石', version: '1' },
        { code: 'orangegem', desc: '橙宝石', version: '1' },
    ]
}, {
    type: '精炼',
    child: [
        { code: 'cutgrass', desc: '草', version: '1,2' },
        { code: 'rope', desc: '绳子', version: '1,2' },
        { code: 'log', desc: '木头', version: '1,2' },
        { code: 'boards', desc: '木板', version: '1,2' },
        { code: 'rocks', desc: '石头', version: '1,2' },
        { code: 'cutstone', desc: '石砖', version: '1,2' },
        { code: 'cutreeds', desc: '采下的芦苇', version: '1,2' },
        { code: 'papyrus', desc: '莎草纸', version: '1,2' },
        { code: 'bamboo', desc: '竹子', version: '2' },
        { code: 'fabric', desc: '布', version: '2' },
        { code: 'coral', desc: '珊瑚', version: '2' },
        { code: 'limestone', desc: '石灰岩', version: '2' },
        { code: 'dubloon', desc: '金币', version: '2' },
        { code: 'goldnugget', desc: '金块', version: '1,2' },
        { code: 'hail_ice', desc: '冰雹', version: '2' },
        { code: 'ice', desc: '冰', version: '1,2' },
        { code: 'sand', desc: '沙子', version: '2' },
        { code: 'messagebottleempty', desc: '空瓶子', version: '2' },
        { code: 'petals_evil', desc: '恶魔花瓣', version: '1,2' },
        { code: 'nightmarefuel', desc: '梦魇燃料', version: '1,2' },
    ]
}, {
    type: '食物',
    child: [
        { code: 'froglegs', desc: '蛙腿', version: '1' },
        { code: 'froglegs_cooked', desc: '烤蛙腿', version: '1' },
        { code: 'drumstick', desc: '鸟腿', version: '1,2' },
        { code: 'drumstick_cooked', desc: '炸鸟腿', version: '1,2' },
        { code: 'smallmeat', desc: '小肉', version: '1,2' },
        { code: 'cookedsmallmeat', desc: '烤小肉', version: '1,2' },
        { code: 'smallmeat_dried', desc: '小风干肉', version: '1,2' },
        { code: 'meat', desc: '肉', version: '1,2' },
        { code: 'cookedmeat', desc: '烤大肉', version: '1,2' },
        { code: 'meat_dried', desc: '风干肉', version: '1,2' },
        { code: 'monstermeat', desc: '怪物肉', version: '1,2' },
        { code: 'cookedmonstermeat', desc: '烤怪物肉', version: '1,2' },
        { code: 'monstermeat_dried', desc: '怪物肉干', version: '1,2' },

        { code: 'fish_raw_small', desc: '小鱼块', version: '2' },
        { code: 'fish_raw_small_cooked', desc: '烤小鱼块', version: '2' },
        { code: 'fish', desc: '鱼', version: '1' },
        { code: 'fish_cooked', desc: '烤鱼', version: '1' },
        { code: 'tropical_fish', desc: '热带鱼', version: '2' },

        { code: 'berries', desc: '浆果', version: '1,2' },
        { code: 'berries_cooked', desc: '烤浆果', version: '1,2' },
        { code: 'cave_banana', desc: '香蕉', version: '1,2' },
        { code: 'cave_banana_cooked', desc: '烤香蕉', version: '1,2' },
        { code: 'dragonfruit', desc: '火龙果', version: '1,2' },
        { code: 'dragonfruit_cooked', desc: '烤火龙果', version: '1,2' },

        { code: 'seaweed', desc: '海带', version: '2' },
        { code: 'seaweed_cooked', desc: '烤海带', version: '2' },
        { code: 'roe', desc: '鱼卵', version: '2' },
        { code: 'bird_egg', desc: '鸟蛋', version: '1,2' },
        { code: 'honey', desc: '蜂蜜', version: '1,2' },
    ]
}, {
    type: '菜品',
    child: [
        { code: 'meatballs', desc: '肉丸', version: '1,2' },
        { code: 'bonestew', desc: '炖肉汤', version: '1,2' },
        { code: 'fishsticks', desc: '炸鱼排', version: '1,2' },
        { code: 'surfnturf', desc: '海鲜牛排', version: '2' },
        { code: 'perogies', desc: '波兰水饺', version: '1,2' },
        { code: 'kabobs', desc: '肉串', version: '1,2' },
        { code: 'jammypreserves', desc: '果酱', version: '1,2' },
        { code: 'ceviche', desc: '酸橘汁腌鱼', version: '2' },
        { code: 'dragonpie', desc: '火龙果派', version: '1,2' },
    ]
}, {
    type: '其他',
    child: [
        { code: 'teleportato_ring', desc: '环状零件', version: '1' },
        { code: 'teleportato_box', desc: '盒状零件', version: '1' },
        { code: 'teleportato_crank', desc: '曲柄零件', version: '1' },
        { code: 'teleportato_potato', desc: '金属土豆状零件', version: '1' },
        { code: 'nitre', desc: '硝石', version: '1,2' },
        { code: 'obsidian', desc: '黑曜石', version: '2' },
        { code: 'messagebottle', desc: '带信的瓶子', version: '2' },
        { code: 'transistor', desc: '电子元件', version: '1,2' },
        { code: 'boneshard', desc: '骨头碎片', version: '1,2' },
        { code: 'thulecite_pieces', desc: '铥矿碎片', version: '1' },
        { code: 'thulecite', desc: '铥矿', version: '1' },
        { code: 'wormlight', desc: '发光浆果', version: '1' },
        { code: 'seashell', desc: '贝壳', version: '2' },
        { code: 'blubber', desc: '鲸脂', version: '2' },
    ]
}];

// 食谱
var foodData = [{
    type: '生吃',
    child: [
        { code: 'red_cap', stomach: 12.5, mind: 0, health: -20, recommend: '', made: ['red_cap'] },
        { code: 'green_cap', stomach: 12.5, mind: -50, health: 0, recommend: '', made: ['green_cap'] },
        { code: 'blue_cap', stomach: 12.5, mind: -15, health: 20, recommend: 'health', made: ['blue_cap'] },
        { code: 'meat', stomach: 25, mind: -10, health: 1, recommend: '', made: ['meat'] },
    ]
}, {
    type: '火烤',
    child: [
        { code: 'red_cap_cooked', stomach: 0, mind: -10, health: 1, recommend: '', made: ['red_cap'] },
        { code: 'green_cap_cooked', stomach: 0, mind: 15, health: -1, recommend: 'mind', made: ['green_cap'] },
        { code: 'blue_cap_cooked', stomach: 0, mind: 10, health: -3, recommend: '', made: ['blue_cap'] },
        { code: 'cookedmeat', stomach: 25, mind: 0, health: 3, rot: 10, recommend: '', made: ['meat'] },
    ]
}, {
    type: '晾肉架',
    child: [
        { code: 'meat_dried', stomach: 25, mind: 15, health: 20, rot: 20, recommend: 'mind,health', made: ['meat'] },
    ]
}, {
    type: '烹煮锅',
    child: [
        {
            code: 'meatballs', stomach: 62.5, mind: 5, health: 3, rot: 10, cook: 15, recommend: 'stomach',
            recipe: '肉>0 & 非=0',
            made: ['monstermeat,berries,berries,berries', 'monstermeat,ice,ice,ice']
        }, {
            code: 'bonestew', stomach: 150, mind: 5, health: 12, rot: 10, cook: 15, recommend: 'stomach',
            recipe: '肉>=3 & 怪物肉<2 & 非=0',
            made: ['meat,meat,meat,monstermeat', 'meat,meat,smallmeat,smallmeat', 'meat,drumstick,drumstick,monstermeat']
        }, {
            code: 'fishsticks', stomach: 37.5, mind: 5, health: 40, rot: 10, cook: 40, recommend: 'health',
            recipe: '鱼>0 & 树枝=1',
            made: ['fish,twigs,monstermeat,monstermeat', 'tropical_fish,twigs,berries,berries']
        }, {
            code: 'surfnturf', stomach: 37.5, mind: 33, health: 60, rot: 10, cook: 20, recommend: 'mind,health',
            recipe: '肉>=2.5 & 鱼>=1.5',
            made: ['tropical_fish,tropical_fish,monstermeat,monstermeat', 'tropical_fish,tropical_fish,tropical_fish,monstermeat']
        }, {
            code: 'perogies', stomach: 37.5, mind: 5, health: 40, rot: 20, cook: 20, recommend: 'health',
            recipe: '肉>0 & 蛋>0 & 菜>=0.5 & 非=0',
            made: ['monstermeat,bird_egg,red_cap,red_cap', 'monstermeat,tallbirdegg,red_cap,red_cap']
        }, {
            code: 'kabobs', stomach: 37.5, mind: 5, health: 3, rot: 15, cook: 40, recommend: '',
            recipe: '肉>0 & 树枝=1 & 怪物肉<=1',
            made: ['monstermeat,twigs,berries,berries']
        }, {
            code: 'jammypreserves', stomach: 37.5, mind: 5, health: 3, rot: 15, cook: 10, recommend: '',
            recipe: '果>0 & 肉=0 & 菜=0 & 非=0',
            made: ['berries,berries,berries,berries']
        }, {
            code: 'ceviche', stomach: 25, mind: 5, health: 20, rot: 10, cook: 10, recommend: '',
            recipe: '鱼>=2 & 冰>0',
            made: ['tropical_fish,tropical_fish,ice,ice', 'tropical_fish,tropical_fish,ice,twigs', 'tropical_fish,tropical_fish,ice,monstermeat']
        }, {
            code: 'dragonpie', stomach: 75, mind: 5, health: 40, rot: 15, cook: 40, recommend: 'stomach,health',
            recipe: '火龙果>=1 & 肉=0',
            made: ['dragonfruit,twigs,twigs,twigs', 'dragonfruit,ice,ice,ice']
        }
    ]
}];

// 属性
var attrData = {
    type: {
        water: { name: '防水', type: 'percent' },
        warm: { name: '保暖', type: 'num' },
        cool: { name: '隔热', type: 'num' },
        thunder: { name: '绝缘', type: 'boolean' },
        poison: { name: '防毒', type: 'boolean' },
        hurt: { name: '总防', type: 'percent' },
        attack: { name: '物防', type: 'percent' },
        mind: { name: '回脑', type: 'minute' },
        hungry: { name: '饿速', type: 'percent' },
        day: { name: '耐久', type: 'day' },
        use: { name: '耐久', type: 'num' },
    },
    list: [{
        code: 'footballhat',
        isRecommend: true,
        attr: { water: 20, attack: 80, use: 315 },
        made: [
            { code: 'pigskin', num: 1 },
            { code: 'rope', num: 4 }
        ]
    }, {
        code: 'ruinshat',
        isRecommend: true,
        attr: { hurt: 90, use: 840 },
        made: [
            { code: 'thulecite', num: 4 },
            { code: 'nightmarefuel', num: 4 }
        ]
    }, {
        code: 'oxhat',
        isRecommend: true,
        attr: { attack: 85, poison: true, use: 600 },
        made: [
            { code: 'ox_horn', num: 1 },
            { code: 'seashell', num: 4 },
            { code: 'rope', num: 1 }
        ]
    }, {
        code: 'slurtlehat',
        isRecommend: true,
        attr: { water: 20, hurt: 90, use: 750 },
        made: [
            { code: 'slurtle', num: 0 }
        ]
    }, {
        code: 'tophat',
        isRecommend: false,
        attr: { water: 20, mind: 3.34, day: 8 },
        made: [
            { code: 'silk', num: 6 }
        ]
    }, {
        code: 'walrushat',
        isRecommend: true,
        attr: { warm: 120, mind: 6.67, day: 25 },
        made: [
            { code: 'walrus', num: 0 }
        ]
    }, {
        code: 'strawhat',
        isRecommend: false,
        attr: { water: 20, cool: 60, day: 5 },
        made: [
            { code: 'cutgrass', num: 12 }
        ]
    }, {
        code: 'winterhat',
        isRecommend: false,
        attr: { warm: 120, mind: 1.33, day: 10 },
        made: [
            { code: 'beefalowool', num: 4 },
            { code: 'silk', num: 4 }
        ]
    }, {
        code: 'beefalohat',
        isRecommend: true,
        attr: { warm: 240, water: 20, day: 10 },
        made: [
            { code: 'beefalowool', num: 8 },
            { code: 'horn', num: 1 }
        ]
    }, {
        code: 'rainhat',
        isRecommend: false,
        attr: { water: 70, thunder: true, day: 10 },
        made: [
            { code: 'mole', num: 2 },
            { code: 'strawhat', num: 1 },
            { code: 'boneshard', num: 1 }
        ]
    }, {
        code: 'snakeskinhat',
        isRecommend: false,
        attr: { warm: '-', thunder: true, day: 8 },
        made: [
            { code: 'snakeskin', num: 1 },
            { code: 'strawhat', num: 1 },
            { code: 'boneshard', num: 1 }
        ]
    }, {
        code: 'eyebrellahat',
        isRecommend: true,
        attr: { water: 100, cool: 240, thunder: true, day: 9 },
        made: [
            { code: 'deerclops_eyeball', num: 1 },
            { code: 'twigs', num: 15 },
            { code: 'boneshard', num: 4 }
        ]
    }, {
        code: 'double_umbrellahat',
        isRecommend: true,
        attr: { water: 100, cool: '-', thunder: true, day: 12 },
        made: [
            { code: 'shark_gills', num: 2 },
            { code: 'umbrella', num: 1 },
            { code: 'strawhat', num: 1 }
        ]
    }, {
        code: 'gashat',
        isRecommend: false,
        attr: { poison: true, day: 10 },
        made: [
            { code: 'messagebottleempty', num: 2 },
            { code: 'coral', num: 3 },
            { code: 'jellyfish', num: 1 }
        ]
    }, {
        code: 'armorwood',
        isRecommend: true,
        attr: { attack: 80, use: 450 },
        made: [
            { code: 'log', num: 8 },
            { code: 'rope', num: 2 }
        ]
    }, {
        code: 'armorseashell',
        isRecommend: true,
        attr: { attack: 75, poison: true, use: 750 },
        made: [
            { code: 'seashell', num: 10 },
            { code: 'seaweed', num: 2 },
            { code: 'rope', num: 1 }
        ]
    }, {
        code: 'armorruins',
        isRecommend: true,
        attr: { hurt: 90, mind: 3.3, use: 1260 },
        made: [
            { code: 'thulecite', num: 6 },
            { code: 'nightmarefuel', num: 4 }
        ]
    }, {
        code: 'raincoat',
        isRecommend: true,
        attr: { water: 100, warm: 60, day: 10 },
        made: [
            { code: 'tentaclespots', num: 2 },
            { code: 'rope', num: 2 },
            { code: 'boneshard', num: 2 }
        ]
    }, {
        code: 'reflectivevest',
        isRecommend: false,
        attr: { water: 20, cool: 120, mind: 2, day: 8 },
        made: [
            { code: 'rope', num: 1 },
            { code: 'feather_robin', num: 3 },
            { code: 'pigskin', num: 2 }
        ]
    }, {
        code: 'hawaiianshirt',
        isRecommend: true,
        attr: { cool: 240, mind: 3.3, day: 15 },
        made: [
            { code: 'papyrus', num: 3 },
            { code: 'silk', num: 3 },
            { code: 'cactus_flower', num: 5 }
        ]
    }, {
        code: 'sweatervest',
        isRecommend: false,
        attr: { warm: 60, mind: 3.3, day: 10 },
        made: [
            { code: 'houndstooth', num: 8 },
            { code: 'silk', num: 6 }
        ]
    }, {
        code: 'trunkvest_winter',
        isRecommend: true,
        attr: { warm: 240, mind: 2, day: 15 },
        made: [
            { code: 'trunk_winter', num: 1 },
            { code: 'silk', num: 8 },
            { code: 'beefalowool', num: 2 }
        ]
    }, {
        code: 'trunkvest_summer',
        isRecommend: false,
        attr: { warm: 60, water: 20, mind: 2, day: 15 },
        made: [
            { code: 'trunk_summer', num: 1 },
            { code: 'silk', num: 8 }
        ]
    }, {
        code: 'beargervest',
        isRecommend: true,
        attr: { warm: 240, mind: 4.4, hungry: 75, day: 7 },
        made: [
            { code: 'bearger_fur', num: 1 },
            { code: 'sweatervest', num: 1 },
            { code: 'rope', num: 2 }
        ]
    }, {
        code: 'armor_snakeskin',
        isRecommend: false,
        attr: { warm: '-', thunder: true, day: 8 },
        made: [
            { code: 'snakeskin', num: 2 },
            { code: 'vine', num: 2 },
            { code: 'boneshard', num: 2 }
        ]
    }, {
        code: 'blubbersuit',
        isRecommend: true,
        attr: { warm: '-', water: 100, day: 8 },
        made: [
            { code: 'blubber', num: 4 },
            { code: 'fabric', num: 2 },
            { code: 'palmleaf', num: 2 }
        ]
    }]
};

// 功能
var funData = [{
    tit: '删除你鼠标所在位置的物体',
    version: '1,2',
    child: [
        { type: 'code', text: 'TheInput:GetWorldEntityUnderMouse():Remove()' }
    ]
}, {
    tit: '全物品直接制造，无需考虑材料，包括最后一项（重启后恢复）',
    version: '1,2',
    child: [
        { type: 'code', text: 'GetPlayer().components.builder:GiveAllRecipes()' }
    ]
}, {
    tit: '地图开全（重启后恢复）',
    version: '1,2',
    child: [
        { type: 'code', text: 'minimap = TheSim:FindFirstEntityWithTag("minimap")' },
        { type: 'code', text: 'minimap.MiniMap:ShowArea(0,0,0, 10000)' }
    ]
}, {
    tit: '上帝模式，无敌，三维不掉（重启后恢复）',
    version: '',
    child: [
        { type: 'code', text: 'GetPlayer().components.health:SetInvincible(true)' },
    ]
}, {
    tit: '10秒后来狗',
    version: '1,2',
    child: [
        { type: 'code', text: 'GetWorld().components.hounded.timetoattack=10' },
    ]
}, {
    tit: '双向虫洞',
    version: '1',
    child: [
        { type: 'desc', text: '鼠标放在第一个虫洞的位置' },
        { type: 'code', text: 'hole1 = DebugSpawn("wormhole")' },
        { type: 'desc', text: '控制人物走到想传送到的地点，鼠标放在第二个虫洞的位置' },
        { type: 'code', text: 'hole2 = DebugSpawn("wormhole")' },
        { type: 'code', text: 'hole1.components.teleporter.targetTeleporter = hole2' },
        { type: 'code', text: 'hole2.components.teleporter.targetTeleporter = hole1' }
    ]
}];


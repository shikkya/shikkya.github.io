﻿/**
 * @authors kk
 * @date    2019-03-18
 */

// 所有图片数据
var picList = [
    { img: '001.png', type: '明星', tit: 'By2《成人礼》', keyWord: '' },
    { img: '002.png', type: '明星', tit: '安悦溪', keyWord: '' },
    { img: '003.png', type: '影视,明星', tit: '半妖倾城', keyWord: '聂倾城,李一桐' },
    { img: '004.png', type: '影视,明星', tit: '颤抖吧！阿部', keyWord: '颤抖吧阿部,阿部察察,安悦溪' },
    { img: '005.png', type: '影视,明星', tit: '独孤天下', keyWord: '独孤伽罗,胡冰卿' },
    { img: '006.png', type: '影视,明星', tit: '独孤天下', keyWord: '独孤伽罗,胡冰卿,杨坚,张丹峰' },
    { img: '007.png', type: '影视,明星', tit: '浪花一朵朵', keyWord: '唐一白,熊梓淇,云朵,谭松韵' },
    { img: '008.png', type: '影视,明星', tit: '浪花一朵朵', keyWord: '唐一白,熊梓淇,云朵,谭松韵' },
    { img: '009.png', type: '影视,明星', tit: '浪花一朵朵', keyWord: '唐一白,熊梓淇,云朵,谭松韵' },
    { img: '010.png', type: '影视,明星', tit: '浪花一朵朵', keyWord: '唐一白,熊梓淇,云朵,谭松韵' },
    { img: '011.png', type: '影视,明星', tit: '浪花一朵朵', keyWord: '唐一白,熊梓淇,云朵,谭松韵' },
    { img: '012.png', type: '影视,明星', tit: '高能少年团', keyWord: '刘昊然' },
    { img: '013.png', type: '影视,明星', tit: '美人为馅', keyWord: '韩沉,白宇,白锦曦,苏眠,杨蓉' },
    { img: '014.png', type: '影视,明星', tit: '美人为馅', keyWord: '韩沉,白宇,白锦曦,苏眠,杨蓉' },
    { img: '015.png', type: '影视,明星', tit: '美人为馅', keyWord: '韩沉,白宇,白锦曦,苏眠,杨蓉' },
    { img: '016.png', type: '明星', tit: '郑业成', keyWord: '' },
    { img: '017.png', type: '影视,明星', tit: '你和我的倾城时光', keyWord: '林浅,赵丽颖' },
    { img: '018.png', type: '影视,明星', tit: '三生三世十里桃花', keyWord: '白凤九,小九,迪丽热巴' },
    { img: '019.png', type: '影视,明星', tit: '十五年等待候鸟', keyWord: '裴尚轩,张若昀,黎璃,孙怡' },
    { img: '020.png', type: '影视,明星', tit: '十五年等待候鸟', keyWord: '裴尚轩,张若昀' },
    { img: '021.png', type: '影视,明星', tit: '蜀山战纪之剑侠传奇', keyWord: '玉无心,赵丽颖' },
    { img: '022.png', type: '影视,明星', tit: '蜀山战纪之剑侠传奇', keyWord: '丁隐,丁大力,陈伟霆,玉无心,赵丽颖' },
    { img: '023.png', type: '影视,明星', tit: '双世宠妃', keyWord: '墨连城,邢昭林,曲檀儿,曲小檀,梁洁' },
    { img: '024.png', type: '影视,明星', tit: '双世宠妃', keyWord: '墨连城,邢昭林,曲檀儿,曲小檀,梁洁' },
    { img: '025.png', type: '影视,明星', tit: '微微一笑很倾城', keyWord: '肖奈,杨洋,贝微微,郑爽' },
    { img: '026.png', type: '影视,明星', tit: '微微一笑很倾城', keyWord: '肖奈,杨洋' },
    { img: '027.png', type: '影视,明星', tit: '微微一笑很倾城', keyWord: '美人师兄,郝眉,郑业成' },
    { img: '028.png', type: '影视,明星', tit: '无心法师', keyWord: '岳绮罗,陈瑶' },
    { img: '029.png', type: '影视,明星', tit: '无心法师', keyWord: '张显宗,张若昀,岳绮罗,陈瑶' },
    { img: '030.png', type: '影视,明星', tit: '夏至未至', keyWord: '陆之昂,白敬亭' },
    { img: '031.png', type: '明星', tit: '邢昭林', keyWord: '' },
    { img: '032.png', type: '影视,明星', tit: '幸福 近在咫尺', keyWord: '幸福近在咫尺,蒋一依,陈意涵,方牧野,王子奇' },
    { img: '033.png', type: '影视,明星', tit: '旋风少女', keyWord: '若白,杨洋,戚百草,胡冰卿' },
    { img: '034.png', type: '植物,风景', tit: '枫心', keyWord: '树,枫叶' },
    { img: '035.png', type: '萌宠', tit: '不要看我', keyWord: '猫咪' },
    { img: '036.png', type: '萌宠', tit: '爪爪', keyWord: '猫咪,猫爪,爪子' },
    { img: '037.png', type: '动漫', tit: '僵小鱼', keyWord: '小僵尸' },
    { img: '038.png', type: '动漫', tit: '僵小鱼', keyWord: '小僵尸' }
];
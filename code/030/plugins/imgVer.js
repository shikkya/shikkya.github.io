function imgVer(config) {

    // 参数配置
    var el = eval(config.el);
    var w = config.width;
    var h = config.height;
    var imgArr = config.img;

    // 设置拼图缺失坐标取值范围
    var PL_Size = 48; // 缺失拼图的大小
    var PL_Padding = 20; // 缺失拼图与边框的距离
    var MinN_X = PL_Padding + PL_Size;
    var MaxN_X = w - PL_Padding - PL_Size - PL_Size / 6;
    var MaxN_Y = PL_Padding;
    var MinN_Y = h - PL_Padding - PL_Size - PL_Size / 6;

    // 生成随机数
    function RandomNum(Min, Max) {
        var Range = Max - Min;
        var Rand = Math.random();
        if (Math.round(Rand * Range) == 0) {
            return Min + 1;
        } else if (Math.round(Rand * Max) == Max) {
            return Max - 1;
        } else {
            var num = Min + Math.round(Rand * Range) - 1;
            return num;
        }
    }

    // 随机选择图片
    var imgSrc = imgArr[RandomNum(0, imgArr.length)];

    // 生成缺失拼图的随机坐标 X,Y
    var X = RandomNum(MinN_X, MaxN_X);
    var Y = RandomNum(MinN_Y, MaxN_Y);

    // 拼图初始化存在的left位置
    var left_Num = -X + 10;

    // 创建html结构
    el.html(
        // imgVer-show
        '<div class="imgVer-show">' +
        '<div class="imgVer-view" style="width:' + w + 'px;">' +
        '<div class="imgVer-img" style="width:' + w + 'px;height:' + h + 'px;">' +
        '<img src="' + imgSrc + '"/>' +
        '<canvas id="imgVerPuzzleBox" width="' + w + '" height="' + h + '"></canvas>' +
        '</div>' +
        '<div class="imgVer-puzzle" style="width:' + w + 'px;height:' + h + 'px;left:' + left_Num + 'px;">' +
        '<canvas id="imgVerPuzzleShadow" width="' + w + '" height="' + h + '"></canvas>' +
        '<canvas id="imgVerPuzzleLost" width="' + w + '" height="' + h + '"></canvas>' +
        '</div>' +
        '<div class="imgVer-tip"></div>' +
        '</div>' +
        '<a class="imgVer-reset-btn"></a>' +
        '</div>' +
        // imgVer-handle
        '<div class="imgVer-handle" style="width:' + w + 'px;">' +
        '<div class="imgVer-slider-bg">' +
        '<p>按住左边滑块，拖动完成上方拼图</p>' +
        '</div>' +
        '<div class="imgVer-slider-btn"></div>' +
        '</div>'
    );

    // 使用canvas画出缺失拼图
    var d = PL_Size / 3;
    var c = document.getElementById('imgVerPuzzleBox');
    var ctx = c.getContext('2d');

    ctx.globalCompositeOperation = 'xor';
    ctx.shadowBlur = 10;
    ctx.shadowColor = '#fff';
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;
    ctx.fillStyle = 'rgba(0,0,0,0.7)';

    ctx.beginPath();
    ctx.lineWidth = '1';
    ctx.strokeStyle = 'rgba(0,0,0,0)';
    ctx.moveTo(X, Y);
    ctx.lineTo(X + d, Y);
    ctx.bezierCurveTo(X + d, Y - d, X + 2 * d, Y - d, X + 2 * d, Y);
    ctx.lineTo(X + 3 * d, Y);
    ctx.lineTo(X + 3 * d, Y + d);
    ctx.bezierCurveTo(X + 2 * d, Y + d, X + 2 * d, Y + 2 * d, X + 3 * d, Y + 2 * d);
    ctx.lineTo(X + 3 * d, Y + 3 * d);
    ctx.lineTo(X, Y + 3 * d);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    // 生成缺失的拼图并且凸显
    var c_l = document.getElementById('imgVerPuzzleLost');
    var c_s = document.getElementById('imgVerPuzzleShadow');
    var ctx_l = c_l.getContext('2d');
    var ctx_s = c_s.getContext('2d');
    var img = new Image();
    img.src = imgSrc;
    img.onload = function () {
        ctx_l.drawImage(img, 0, 0, w, h);
    }

    ctx_l.beginPath();
    ctx_l.strokeStyle = 'rgba(0,0,0,0)';
    ctx_l.moveTo(X, Y);
    ctx_l.lineTo(X + d, Y);
    ctx_l.bezierCurveTo(X + d, Y - d, X + 2 * d, Y - d, X + 2 * d, Y);
    ctx_l.lineTo(X + 3 * d, Y);
    ctx_l.lineTo(X + 3 * d, Y + d);
    ctx_l.bezierCurveTo(X + 2 * d, Y + d, X + 2 * d, Y + 2 * d, X + 3 * d, Y + 2 * d);
    ctx_l.lineTo(X + 3 * d, Y + 3 * d);
    ctx_l.lineTo(X, Y + 3 * d);
    ctx_l.closePath();
    ctx_l.stroke();
    ctx_s.fill();
    ctx_l.clip();

    ctx_s.beginPath();
    ctx_s.lineWidth = '1';
    ctx_s.strokeStyle = 'rgba(0,0,0,0)';
    ctx_s.moveTo(X, Y);
    ctx_s.lineTo(X + d, Y);
    ctx_s.bezierCurveTo(X + d, Y - d, X + 2 * d, Y - d, X + 2 * d, Y);
    ctx_s.lineTo(X + 3 * d, Y);
    ctx_s.lineTo(X + 3 * d, Y + d);
    ctx_s.bezierCurveTo(X + 2 * d, Y + d, X + 2 * d, Y + 2 * d, X + 3 * d, Y + 2 * d);
    ctx_s.lineTo(X + 3 * d, Y + 3 * d);
    ctx_s.lineTo(X, Y + 3 * d);
    ctx_s.closePath();
    ctx_s.stroke();
    ctx_s.shadowBlur = 20;
    ctx_s.shadowColor = 'black';
    ctx_s.fill();

    // 滑块拖动
    var moveStart = ''; // 定义一个鼠标按下的X轴值

    // 鼠标按下 / 手指按下
    $('.imgVer-slider-btn').on('mousedown touchstart', function (e) {
        e = e || window.event;
        // 鼠标在滑块按下切换滑块背景
        $(this).css({
            'background-position': '0 -216px'
        });
        moveStart = e.pageX || e.originalEvent.targetTouches[0].pageX; // 记录鼠标按下时的坐标 X轴值
    });

    // 鼠标拖动 / 手指滑动
    $(window).on('mousemove touchmove', function (e) {
        e = e || window.event;
        var moveX = e.pageX || e.originalEvent.targetTouches[0].pageX; // 监听鼠标的位置
        var d = moveX - moveStart; // 鼠标按住后在X轴上移动的距离
        if (moveStart == '') {
            // console.log('未拖动滑块');
        } else {
            if (d < 0 || d > (w - PL_Padding - PL_Size)) {
                // console.log('超过范围');
            } else {
                $('.imgVer-slider-btn').css({
                    'left': d + 'px',
                    'transition': 'inherit'
                });
                $('#imgVerPuzzleLost').css({
                    'left': d + 'px',
                    'transition': 'inherit'
                });
                $('#imgVerPuzzleShadow').css({
                    'left': d + 'px',
                    'transition': 'inherit'
                });
            }
        }
    })

    // 鼠标松开 / 手指离开
    $(window).on('mouseup touchend', function (e) {
        e = e || window.event;
        var e_pageX = e.originalEvent.changedTouches == undefined ? moveStart : e.originalEvent.changedTouches[0];
        var moveEnd_X = e.pageX - moveStart || e_pageX.pageX - moveStart; // 松开鼠标后滑块移动的距离
        var ver_Num = X - 10;
        var deviation = 4; // 偏差值
        var Min_left = ver_Num - deviation; // 验证值最小值
        var Max_left = ver_Num + deviation; // 验证值最大值
        if (moveStart != '') {
            // 成功
            if (Max_left > moveEnd_X && moveEnd_X > Min_left) {
                $('.imgVer-tip').html(
                    '<i></i><font>验证通过</font>'
                ).addClass('imgVer-tip-success').addClass('imgVer-active');
                $('.imgVer-puzzle').addClass('imgVer-hidden');
                $('#imgVerPuzzleBox').addClass('imgVer-hidden');
                setTimeout(function () {
                    $('.imgVer-tip').removeClass('imgVer-active');
                    imgVer(config);
                }, 2000);
                config.success();
            }
            // 失败
            else {
                $('.imgVer-tip').html(
                    '<i></i><font>验证失败:</font><span>拖动滑块将悬浮图像正确拼合</span>'
                ).removeClass('imgVer-tip-success').addClass('imgVer-active');
                setTimeout(function () {
                    $('.imgVer-tip').removeClass('imgVer-active');
                }, 2000);
                config.error();
            }
        }
        setTimeout(function () {
            $('.imgVer-slider-btn').css({
                'left': '0',
                'transition': 'left 0.5s'
            });
            $('#imgVerPuzzleLost').css({
                'left': '0',
                'transition': 'left 0.5s'
            });
            $('#imgVerPuzzleShadow').css({
                'left': '0',
                'transition': 'left 0.5s'
            });
        }, 1000);
        $('.imgVer-slider-btn').css({
            'background-position': '0 -84px'
        });
        moveStart = ''; // 清空上一次鼠标按下时的坐标X轴值;
    })

    // 重置
    $('.imgVer-reset-btn').on('click', function () {
        imgVer(config);
    })
}
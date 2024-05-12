/**
 * index.html
 * @authors shikkya
 * @date    2021-05-18
 * @version $Id$
 */

$(function () {
    var self = this;

    this.exampleData = [{
        text_1: '我是字符串比较测试文本',
        text_2: '字符串比较将高亮不同的字符'
    }, {
        text_1: '——我们要坚持开放、绿色、廉洁理念，不搞封闭排他的小圈子，把绿色作为底色，推动绿色基础设施建设、绿色投资、绿色金融，保护好我们赖以生存的共同家园，坚持一切合作都在阳光下运作，共同以零容忍态度打击腐败。我们发起了《廉洁丝绸之路北京倡议》，愿同各方共建风清气正的丝绸之路。',
        text_2: '——我们要秉持共商共建共享原则，倡导多边主义，大家的事大家商量着办，推动各方各施所长、各尽所能，通过双边合作、三方合作、多边合作等各种形式，把大家的优势和潜能充分发挥出来，聚沙成塔、积水成渊。'
    }, {
        text_1: '100001',
        text_2: '1200120'
    }];

    this.createEvent = function () {

        // 示例
        $('#exampleBox').on('click', '.example_btn', function () {
            var index = parseInt($(this).attr('data-i'));
            $('#text_1').val(self.exampleData[index].text_1);
            $('#text_2').val(self.exampleData[index].text_2);
        })

        // 清空全部
        $('#clearBtn').on('click', function () {
            $('#text_1').val('');
            $('#text_2').val('');
            $('#result_1').html('对比结果');
            $('#result_2').html('对比结果');
        })

        // 开始对比
        $('#compareBtn').on('click', function () {
            var str_1 = $.trim($('#text_1').val());
            var str_2 = $.trim($('#text_2').val());
            var result = getHighLightDifferent(str_1, str_2);
            $('#result_1').html(result[0]);
            $('#result_2').html(result[1]);
        })
    }

    // 创建示例
    this.createExample = function () {
        var html = '';
        for (var i = 0; i < self.exampleData.length; i++) {
            html += '<button class="example_btn" data-i="' + i + '">示例' + (i + 1) + '</button>'
        }
        $('#exampleBox').html(html);
    }

    this.init = function () {
        self.createEvent();
        self.createExample();
    }

    self.init();
})

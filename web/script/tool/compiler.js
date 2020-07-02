/**
 * tool - compiler
 * @authors shikkya
 * @date    2020-06-30
 * @version $Id$
 */

var vm = new Vue({
    el: '#app',
    data: {
        tit: 'HTML代码运行器',
        remind: '',
        text: '<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8">\n<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">\n<title>SHIKKYA</title>\n</head>\n<body>\n</body>\n</html>'
    },
    watch: {
        text: function() {
            if (this.text.indexOf('<html>') == -1 || this.text.indexOf('</html>') == -1 || this.text.split('<html>').length != 2 || this.text.split('</html>').length != 2) {
                this.remind = 'html标签格式错误';
                return false;
            }

            if (this.text.indexOf('<head>') == -1 || this.text.indexOf('</head>') == -1 || this.text.split('<head>').length != 2 || this.text.split('</head>').length != 2) {
                this.remind = 'head标签格式错误';
                return false;
            }

            if (this.text.indexOf('<body>') == -1 || this.text.indexOf('</body>') == -1 || this.text.split('<body>').length != 2 || this.text.split('</body>').length != 2) {
                this.remind = 'body标签格式错误';
                return false;
            }

            this.remind = '';
        }
    },
    methods: {
        // 添加内部css
        addInsideCss: function() {
            if (this.text.indexOf('</head>') > -1 && this.text.split('</head>').length == 2) {
                this.text = this.text.split('</head>')[0] +
                    '<style type="text\/css">\n<\/style>\n' +
                    '<\/head>' +
                    this.text.split('</head>')[1];
                this.remind = '';
            } else {
                this.remind = 'head标签格式错误，请检查后重新添加';
            }
        },
        // 添加内部script
        addInsideScript: function() {
            if (this.text.indexOf('</body>') > -1 && this.text.split('</body>').length == 2) {
                this.text = this.text.split('</body>')[0] +
                    '<script type="text\/javascript">\n<\/script>\n' +
                    '<\/body>' +
                    this.text.split('</body>')[1];
                this.remind = '';
            } else {
                this.remind = 'body标签格式错误，请检查后重新添加';
            }
        },
        // 引入CDN 1jQuery 2Vue
        addCdn: function(num) {
            var cdnUrl = '';
            switch (num) {
                case 1:
                    cdnUrl = '<script type="text\/javascript" src="https:\/\/cdn.bootcss.com\/jquery\/3.4.1\/jquery.min.js"><\/script>\n';
                    break;
                case 2:
                    cdnUrl = '<script type="text\/javascript" src="https:\/\/cdn.bootcss.com\/vue\/2.5.2\/vue.min.js"><\/script>\n';
                    break;
            }

            if (this.text.indexOf('</body>') > -1) {
                this.text = this.text.split('</body>')[0] +
                    cdnUrl +
                    '<\/body>' +
                    this.text.split('</body>')[1];
            } else {
                this.remind('body标签格式错误，请检查后重新引入');
            }
        },
        // 运行
        runCode: function() {
            var ifr = document.getElementById('ifr');
            var ifrw = (ifr.contentWindow) ? ifr.contentWindow : (ifr.contentDocument.document) ? ifr.contentDocument.document : ifr.contentDocument;
            ifrw.document.open();
            ifrw.document.write(this.text);
            ifrw.document.close();
            this.remind = '';
        }
    }
})
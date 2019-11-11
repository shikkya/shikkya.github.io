/**
 * wallpaper - make
 * @authors shikkya
 * @date    2019-11-08
 * @version $Id$
 */

var vm = new Vue({
    el: '#app',
    data: {
        tit: '模板壁纸在线制作',
        sizeId: 1,
        sizeText: '1920_1080',
        sizeList: [{
                id: 1,
                wid: '1920',
                hei: '1080',
                img: '../../images/wallpaper_06.png'
            },
            {
                id: 2,
                wid: '1440',
                hei: '900',
                img: '../../images/wallpaper_07.png'
            }, {
                id: 3,
                wid: '1366',
                hei: '768',
                img: '../../images/wallpaper_06.png'
            }
        ],
        templateId: 1,
        imgSrc: '../../images/wallpaper_06.png'
    },
    watch: {
        sizeId: function(val) {
            if (this.imgSrc.indexOf('../../images/wallpaper_') > -1) {
                this.imgSrc = this.sizeList[val - 1].img;
            }
            this.updateCanvasImg();
        },
        templateId: function() {
            this.updateCanvasImg();
        }
    },
    mounted: function() {
        // 加载图片
        loadImg();

        // 初始化canvas
        this.updateCanvasImg();
    },
    methods: {
        // 更换尺寸
        changeSize: function(val) {
            this.sizeId = val;
            this.sizeText = this.sizeList[val - 1].wid + '_' + this.sizeList[val - 1].hei;
        },
        // 更换模板
        changeTemplate: function(val) {
            this.templateId = val;
        },
        // 更新canvas中的图片
        updateCanvasImg: function() {
            var cs = document.getElementById("imgCanvas");
            var ctx = cs.getContext("2d");

            var wid = this.sizeList[this.sizeId - 1].wid;
            var hei = this.sizeList[this.sizeId - 1].hei;

            var temp = this;

            var img1 = new Image();
            img1.src = this.imgSrc;
            img1.onload = function() {
                ctx.drawImage(img1, 0, 0, wid, hei);

                var img2 = new Image();
                img2.src = '../../images/wallpaper_make/' + temp.templateId + '_' + temp.sizeText + '.png';
                img2.onload = function() {
                    ctx.drawImage(img2, 0, 0, wid, hei);
                }
            }
        },
        // 下载合成壁纸
        downloadImg: function() {
            var cs = document.getElementById("imgCanvas");
            var ctx = cs.getContext("2d");

            var date = new Date();
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var day = date.getDate();
            var hh = date.getHours();
            var mm = date.getMinutes();
            var dateStr = year + "";
            if (month < 10) {
                dateStr += "0";
            }
            dateStr += month + "";
            if (day < 10) {
                dateStr += "0";
            }
            dateStr += day + "";
            if (hh < 10) {
                dateStr += "0";
            }
            dateStr += hh + "";
            if (mm < 10) {
                dateStr += '0';
            }
            dateStr += mm + "";
            
            this.downloadFile('SHIKKYA-模板壁纸-' + dateStr + '.png', cs.toDataURL("image/png"));
        },
        // 下载
        downloadFile: function(fileName, content) {
            var aLink = document.createElement('a');
            var blob = this.base64Img2Blob(content); //new Blob([content]);

            var evt = document.createEvent("HTMLEvents");
            evt.initEvent("click", false, false); //initEvent 不加后两个参数在FF下会报错
            aLink.download = fileName;
            aLink.href = URL.createObjectURL(blob);

            aLink.dispatchEvent(evt);
        },
        // 转码
        base64Img2Blob: function(code) {
            var parts = code.split(';base64,');
            var contentType = parts[0].split(':')[1];
            var raw = window.atob(parts[1]);
            var rawLength = raw.length;
            var uInt8Array = new Uint8Array(rawLength);
            for (var i = 0; i < rawLength; ++i) {
                uInt8Array[i] = raw.charCodeAt(i);
            }
            return new Blob([uInt8Array], { type: contentType });
        }
    }
})

function uploadImg(obj) {
    var file = obj.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(e) { //成功读取文件
        vm.imgSrc = e.target.result;
        vm.updateCanvasImg();
    };
}
/**
 * 工具类函数，对外提供常用功能方法，包括页面适配、音效处理、首页进度加载效果处理等
 * @param  {Object} window
 * @param  {Object} document
 */
;
(function(window, document) {
    var tool = {
        /**
         * 判断是否是移动设备
         */
        isMobile: function() {
            var userAgent = window.navigator.userAgent.toLowerCase(),
                result = userAgent.indexOf("mobile") != -1;

            return result;
        },
        /** 
         * 设备适配，设置文档根元素字体大小
         */
        setFontsize: function(element) {
            var isMobile = this.isMobile(),
                // element = document.documentElement,
                resizeevent = 'orientationchange' in window ? 'orientationchange' : 'resize';

            element = element || document.documentElement;
            var recalc = function() {
                var clientWidth = element.clientWidth;
                if (!clientWidth) return;
                clientWidth = clientWidth > 750 ? 750 : clientWidth;
                element.style.fontSize = clientWidth / 750 * 100 + 'px';
            };

            if (!document.addEventListener) return;
            window.addEventListener(resizeevent, recalc, false);
            document.addEventListener('DOMContentLoaded', recalc, false);
        },
    };


    window.EG = tool;
})(window, document);
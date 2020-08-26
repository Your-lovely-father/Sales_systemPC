/*
@name: rem换算
@description: 主要用于移动端对rem换算使用
@author: ZhiYuanWang
@time: 2020-08-26 11:28:46
*/
!function (n) {
    var e = n.document,
        t = e.documentElement,
        i = 750,
        d = i / 100,
        o = "orientationchange" in n ? "orientationchange" : "resize",
        a = function () {
            var n = t.clientWidth || 320; n > 750 && (n = 750);
            t.style.fontSize = n / d + "px"
        };
    e.addEventListener && (n.addEventListener(o, a, !1), e.addEventListener("DOMContentLoaded", a, !1))
}(window)

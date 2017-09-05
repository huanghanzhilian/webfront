(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            console.log(clientWidth)
            if (!clientWidth) return;
            console.log(20 * (clientWidth / 320) + 'px')
            docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
        };

    //console.log(docEl);
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
// 视口
(function (doc, win) {
  const docEl = doc.documentElement
  // eslint-disable-next-line no-undef,no-unused-expressions,no-sequences
  resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    // eslint-disable-next-line no-undef
    recalc = function () {
      const { clientWidth } = docEl
      if (!clientWidth) return
      if (clientWidth >= 1280) {
        docEl.style.fontSize = '100px'
      } else {
        docEl.style.fontSize = `${100 * (clientWidth / 750)}px`;
      }
    }
  // eslint-disable-next-line no-undef
  recalc()
  if (!doc.addEventListener) return
  // eslint-disable-next-line no-undef
  win.addEventListener(resizeEvt, recalc, false)
  // eslint-disable-next-line no-undef
  doc.addEventListener('DOMContentLoaded', recalc, false)
}(document, window))

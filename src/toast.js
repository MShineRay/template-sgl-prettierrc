/**
 * toast 提示框
 */
const toast = (() => {
  let once = null
  let clearTime
  return (text, time) => {
    if(!time || time<1000 ) time = 1500
    const updata = () => {
      once.innerHTML = text || ''
      // once.setAttribute('style', 'position: fixed;left: 50%;z-index: 9000;max-width: 300px;padding: 5px 12px;-webkit-transform: translateX(-50%);text-align: center;border-radius: 4px;font-size: 14px;color: #fff;background-color: rgba(0,0,0,0.6);')
      once.setAttribute('style', 'position: fixed;' +
                'top: 50%;' +
                'left: 50%;' +
                'display: -webkit-box;' +
                'display: -webkit-flex;' +
                'display: flex;' +
                '-webkit-box-orient: vertical;' +
                '-webkit-box-direction: normal;' +
                '-webkit-flex-direction: column;' +
                'flex-direction: column;' +
                '-webkit-box-align: center;' +
                '-webkit-align-items: center;' +
                'align-items: center;' +
                '-webkit-box-pack: center;' +
                '-webkit-justify-content: center;' +
                'justify-content: center;' +
                'box-sizing: content-box;' +
                // 'width: 88px;' +
                'max-width: 70%;' +
                '/*min-height: 88px;*/' +
                'padding: 16px;' +
                'color: #fff;' +
                'font-size: 14px;' +
                'line-height: 20px;' +
                'white-space: pre-wrap;' +
                'text-align: center;' +
                'word-break: break-all;' +
                'background-color: rgba(0, 0, 0, 0.7);' +
                'border-radius: 8px;' +
                '-webkit-transform: translate3d(-50%, -50%, 0);' +
                'transform: translate3d(-50%, -50%, 0);')
      clearTime = setTimeout(() => {
        once.setAttribute('style', 'display:none')
        clearTimeout(clearTime)
      }, time)
    }
    if(!once) {
      const bodyEle = document.querySelector('body')
      const div = document.createElement('div')
      bodyEle.appendChild(div)
      once = div
      updata()
    } else {
      updata()
    }
  }
})()
export default toast

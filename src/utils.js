/**
 * 工具类
 * @param func
 */

export function addLoadEvent (func) {
  const oldOnload = window.onload
  if (typeof window.onload !== 'function') {
    window.onload = func
  } else {
    window.onload = function () {
      oldOnload()
      func()
    }
  }
}

export function postSend(url, data={}){
  let oAjax = null
  try {
    oAjax = new XMLHttpRequest()
  } catch (e) {
    oAjax = new window.ActiveXObject('Microsoft.XMLHTTP')
  }
  const __t = new Date().getTime()
  // post方式打开文件 /cashier
  oAjax.open('post', url + '?t=' + __t, true)
  // post相比get方式提交多了个这个
  oAjax.setRequestHeader('Content-type', 'application/json')
  // post发送数据
  oAjax.send(JSON.stringify(data))
  oAjax.onreadystatechange = function() {
  }
}

/**
 * FE google gtag
 * @param data 注意：避免对象嵌套出现
 */
export function feGoogleGtag(data={}){
  window.fe_gtag_event && window.fe_gtag_event(data.eventName || 'FE_LOG', data)
}

export function getMetaContent(metaName) {
  let _meta = document.getElementsByTagName('meta')[metaName]
  return _meta ? _meta.content : ''
}

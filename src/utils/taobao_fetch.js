function at (arr, index, defaultValue = '') {
  if (index >= arr.length || index < 0) {
    return defaultValue
  }
  return arr[index]
}

function loadTaobaoOrder () {
  let orderItemElements = Array.from(
    document.querySelectorAll('.js-order-container')
  ).map(e => {
    let imgs = Array.from(e.querySelectorAll('[class^=production] img'))
      .filter(e1 => e1 != null)
      .map(e1 => e1.src)
    let spans = Array.from(e.querySelectorAll('[class^=bought-table-mod] span'))
      .filter(e1 => e1 != null)
      .map(e1 => e1.innerText)
    let el = { imgs, spans }

    let price = e.querySelector('strong').innerText
    let status = e.querySelector('p[style="margin-bottom:3px;"]').innerText
    let pic = at(imgs, 0)
    let title = at(spans, 12)
    let time = at(spans, 1)
    let type = at(spans, 15)
    let orderId = at(spans, 5)
    let info = { title, pic, orderId, price, type, status, time }

    return { el, info }
  })
  return orderItemElements
}

export default loadTaobaoOrder

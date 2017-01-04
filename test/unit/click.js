// copied from http://stackoverflow.com/a/5658925
export default function (el) {
  let evt

  if (document.createEvent) {
    evt = document.createEvent('MouseEvents')

    evt.initMouseEvent(
      'click',
      true,
      true,
      window,
      0, 0, 0, 0, 0,
      false,
      false,
      false,
      false,
      0,
      null
    )
  }

  (evt)
  ? el.dispatchEvent(evt)
  : (el.click && el.click())
}

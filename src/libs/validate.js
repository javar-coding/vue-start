
export function isvalidUsername (str) {
  const validMap = ['admin', 'editor']
  return validMap.indexOf(str.trim()) >= 0
}

export function isExternal (path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

export function phoneReg (tel) {
  var myreg = /^(1[3-9]\d{9})$/
  if (!myreg.test(tel)) {
    return false
  } else {
    return true
  }
}

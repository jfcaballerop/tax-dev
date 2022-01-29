
const concatUpper = (obj) => {
  let ret = ''
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      // console.log(key + " -> " + p[key]);
      ret = ret + obj[key].toUpperCase() + ' '
    }
  }

  return ret.trimEnd()
}

module.exports = {
  concatUpper
}

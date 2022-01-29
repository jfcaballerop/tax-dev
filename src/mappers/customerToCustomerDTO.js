
const { concatUpper } = require('../utils/string.utils')
const { customerDTO } = require('../interface/dto/ICustomer.dto')

const customerToCustomerDTO = (orig) => {
  const origVal = JSON.parse(JSON.stringify(orig))
  // Add transform for same key
  for (const key in customerDTO) {
    if (origVal.hasOwnProperty(key)) {
      // Review custom mapper
      if (key === 'name') {
        customerDTO[key] = concatUpper(origVal[key])
      } else {
        customerDTO[key] = origVal[key]
      }
    } else {
      console.log('*** key not fount', key)
    }
  }

  return customerDTO
}

module.exports = {
  customerToCustomerDTO
}

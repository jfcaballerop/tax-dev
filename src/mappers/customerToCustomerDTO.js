
const { concat_upper } = require('../utils/string.utils')
let { customerDTO } = require('../interface/dto/ICustomer.dto')

const customerToCustomerDTO = (orig) => {
	let origVal = JSON.parse(JSON.stringify(orig))
	// Add transform for same key
	for (var key in customerDTO) {
		if (origVal.hasOwnProperty(key)) {
			// Review custom mapper
			if (key === 'name') {
				customerDTO[key] = concat_upper(origVal[key])
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
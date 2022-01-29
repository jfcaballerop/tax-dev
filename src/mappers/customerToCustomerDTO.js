
const dest = require('../interface/dto/ICustomer.dto')
const { concat_upper } = require('../utils/string.utils')

module.exports = (orig) => {
	// Add transform for same key
	for (var key in dest) {
		if (orig.hasOwnProperty(key)) {
			// Review custom mapper
			if (key === 'name') {
				dest[key] = concat_upper(orig.name)
			} else {
				dest[key] = orig[key]
			}
		}
	}

}
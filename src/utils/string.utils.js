
const concat_upper = (obj) => {
	let ret = '';
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			// console.log(key + " -> " + p[key]);
			ret = ret + obj[key].toUpperCase() + ' '
		}
	}

	return ret.trimEnd();

}

module.exports = {
	concat_upper
}

const concat_upper = (obj) => {
	let ret = '';
	for (var key in obj) {
		if (p.hasOwnProperty(key)) {
			// console.log(key + " -> " + p[key]);
			ret = ret + p[key].toUpperCase() + ' '
		}
	}

	return ret.trimEnd();

}

module.exports = {
	concat_upper
}
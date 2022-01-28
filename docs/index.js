
const basicInfo = require('./basicInfo');
const components = require('./components');
const customers = require('./customers');
const servers = require('./servers');
const tags = require('./tags');


module.exports = {
	...basicInfo,
	...servers,
	...tags,
	...components,
	...customers
}
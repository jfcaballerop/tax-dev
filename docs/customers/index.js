const getCustomers = require("./get-customers");
const getCustomersActivated = require("./get-customers-activated");
const getCustomersCredit = require("./get-customers-credit");
const getCustomersUsername = require("./get-customers-username");
const postPutDeleteCustomers = require("./post-put-delete-customers");


module.exports = {
	paths: {
		'/api/customers': {
			...getCustomers
		},
		'/api/customers/activated': {
			...getCustomersActivated
		},
		'/api/customers/credit': {
			...getCustomersCredit
		},
		'/api/customers/{id}': {
			...postPutDeleteCustomers

		},
		'/api/customers/user/{userName}': {
			...getCustomersUsername

		},

	}
}
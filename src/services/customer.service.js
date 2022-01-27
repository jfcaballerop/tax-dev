const db = require("../models");
const Customer = db.customers;
customerResponse = require('../interface/ICustomerResponse')

// Create and Save a new Customer
exports.save = async (req) => {
	// Validate request
	if (!req.body.title) {
		customerResponse = {
			...customerResponse,
			msg: "Content can not be empty!",
			status: 400
		}
	} else {
		// Create a Customer
		const customer = new Customer({
			title: req.body.title,
			description: req.body.description,
			published: req.body.published ? req.body.published : false
		});

		// Save Customer in the database
		await customer
			.save(customer)
			.then(data => {
				customerResponse = {
					...customerResponse,
					msg: "Customer save right!",
					status: 200,
					data: data
				}
			})
			.catch(err => {
				customerResponse = {
					...customerResponse,
					msg: err.message || "Some error occurred while creating the Customer.",
					status: 500
				}
			});
	}
	return customerResponse;

};
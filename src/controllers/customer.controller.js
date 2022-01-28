const db = require("../models");
const Customer = db.customers;
const CustomerService = require("../services/customer.service")

// Create and Save a new Customer
exports.create = async (req, res) => {

	let response = await CustomerService.save(req);
	res.status(response.status).send(response);

};

// Retrieve all Customers from the database.
exports.getAll = async (req, res) => {
	let response = await CustomerService.findAll(req);
	res.status(response.status).send(response);
};

// Delete all Customers from the database.
exports.removeAll = async (req, res) => {
	let response = await CustomerService.deleteAll(req);
	res.status(response.status).send(response);
};

// Find a single Customer with an id
exports.getOne = async (req, res) => {
	let response = await CustomerService.findOne(req);
	res.status(response.status).send(response);
};

// Find a single Customer with an userName
exports.getOneByUserName = async (req, res) => {
	let response = await CustomerService.findOneByUserName(req);
	res.status(response.status).send(response);
};

// Update a Customer by the id in the request
exports.update = async (req, res) => {
	let response = await CustomerService.update(req);
	res.status(response.status).send(response);
};

// Delete a Customer with the specified id in the request
exports.remove = async (req, res) => {
	let response = await CustomerService.delete(req);
	res.status(response.status).send(response);
};


// Find all activate Customers
exports.getAllActivated = async (req, res) => {
	let response = await CustomerService.findAllActivated();
	res.status(response.status).send(response);
};

// Retrieve all ACTIVE customers order by Credit
exports.getAllAvailableCredit = async (req, res) => {
	console.log('Controller');
	let response = await CustomerService.findAllAvailableCreditOrderByCredit();
	res.status(response.status).send(response);
};
module.exports = {
	get: {
		tags: ['Customer CRUD operations'],
		description: "Get a customer",
		operationId: "getCustomer",
		parameters: [
			{
				name: "id",
				in: "path",
				schema: {
					$ref: "#/components/schemas/id"
				},
				required: true,
				description: "A single customer id"
			}
		],
		responses: {
			'200': {
				description: "Customer is obtained",
				content: {
					'application/json': {
						schema: {
							$ref: "#/components/schemas/Customer"
						}
					}
				}
			},
			'404': {
				description: "Customer is not found",
				content: {
					'application/json': {
						schema: {
							$ref: '#/components/schemas/Error',
							example: {
								message: "We can't find the customer",
								internal_code: "Invalid id"
							}
						}
					}
				}
			}
		}
	},
	post: {
		tags: ['Customer CRUD operations'],
		description: "Create customer",
		operationId: "createCustomer",
		parameters: [

		],
		requestBody: {
			content: {
				'application/json': {
					schema: {
						$ref: '#/components/schemas/Customer'
					}
				}
			}
		},
		responses: {
			'201': {
				description: "Customer created successfully"
			},
			'500': {
				description: 'Server error'
			}
		}

	},
	put: {
		tags: ['Customer CRUD operations'],
		description: "Update customer",
		operationId: "updateCustomer",
		parameters: [
			{
				name: "id",
				in: "path",
				schema: {
					$ref: "#/components/schemas/id"
				},
				required: true,
				description: "Id of customer to be updated"
			}
		],
		requestBody: {
			content: {
				'application/json': {
					schema: {
						$ref: '#/components/schemas/Customer'
					}
				}
			}
		},
		responses: {
			'201': {
				description: "Customer created successfully"
			},
			'500': {
				description: 'Server error'
			}
		}
	},
	delete: {
		tags: ['Customer CRUD operations'],
		description: "Deleting a customer",
		operationId: "deleteCustomer",
		parameters: [
			{
				name: "id",
				in: "path",
				schema: {
					$ref: "#/components/schemas/id"
				},
				required: true,
				description: "Deleting a customer"
			}
		],
		responses: {
			'200': {
				description: "Customer deleted successfully"
			},
			'404': {
				description: "Customer not found"
			},
			'500': {
				description: "Server error"
			}
		}
	}

}
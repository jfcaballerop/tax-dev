module.exports = {
	get: {
		tags: ['Customer CRUD operations'],
		description: "Get all customers",
		operationId: 'getCustomers',
		parameters: [],
		responses: {
			'200': {
				description: "All Customers were obtained",
				content: {
					'application/json': {
						schema: {
							$ref: '#/components/schemas/Customer'
						}
					}
				}
			}
		}
	}
}
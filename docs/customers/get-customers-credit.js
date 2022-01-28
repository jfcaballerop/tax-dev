module.exports = {
	get: {
		tags: ['Customer CRUD operations'],
		description: "Get all activated customers order by Credit Available",
		operationId: 'getCustomersActivatedCredit',
		parameters: [],
		responses: {
			'200': {
				description: "All Customers activated were obtained order by Credit",
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
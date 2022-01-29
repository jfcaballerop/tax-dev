module.exports = {
  get: {
    tags: ['Customer CRUD operations'],
    description: 'Get all activated customers',
    operationId: 'getCustomersActivated',
    parameters: [],
    responses: {
      200: {
        description: 'All Customers activated were obtained',
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

module.exports = {
  get: {
    tags: ['Customer CRUD operations'],
    description: 'Get customers by name',
    operationId: 'getCustomersByName',
    parameters: [
      {
        name: 'userName',
        in: 'path',
        schema: {
          $ref: '#/components/schemas/userName'
        },
        required: true,
        description: 'A single customer userName'
      }
    ],
    responses: {
      200: {
        description: 'Customer was obtained',
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

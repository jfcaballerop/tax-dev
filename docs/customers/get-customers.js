module.exports = {
  get: {
    tags: ['Customer CRUD operations'],
    description: 'Get all customers',
    operationId: 'getCustomers',
    parameters: [],
    responses: {
      200: {
        description: 'All Customers were obtained',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Customer'
            }
          }
        }
      }
    }
  },
  post: {
    tags: ['Customer CRUD operations'],
    description: 'Create customer',
    operationId: 'createCustomer',
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
      201: {
        description: 'Customer created successfully'
      },
      500: {
        description: 'Server error'
      }
    }

  },
  delete: {
    tags: ['Customer CRUD operations'],
    description: 'Delete all customer',
    operationId: 'deleteCustomer',
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
      201: {
        description: 'Customers deleted successfully'
      },
      500: {
        description: 'Server error'
      }
    }

  }
}

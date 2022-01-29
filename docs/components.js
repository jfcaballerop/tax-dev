
module.exports = {
  components: {
    schemas: {
      id: {
        type: 'string',
        description: 'An id of a customer',
        example: '123k2143kjl1232344'
      },
      userName: {
        type: 'string',
        description: 'An userName of a customer',
        example: 'asdfpoiu'
      },
      Customer: {
        type: 'object',
        properties: {
          userName: {
            type: 'string',
            description: 'userName',
            example: 'userName example'
          },
          name: {
            properties: {
              firstName: {
                type: 'string',
                description: 'firstName',
                example: 'firstName example'
              },
              lastName: {
                type: 'string',
                description: 'lastName',
                example: 'lastName example'
              }
            }

          },
          description: {
            type: 'string',
            description: 'description',
            example: 'description example'
          },
          active: {
            type: 'boolean',
            description: 'active',
            example: true
          },
          city: {
            type: 'string',
            description: 'city',
            example: 'city example'
          },
          country: {
            type: 'string',
            description: 'country',
            example: 'country example'
          },
          phone: {
            type: 'string',
            description: 'phone',
            example: 'phone example'
          },
          entryDate: {
            type: 'string',
            description: 'entryDate',
            example: 'entryDate example'
          },
          availableCredit: {
            type: 'string',
            description: 'availableCredit',
            example: 'availableCredit example'

          }
        }
      }
    }
  }

}

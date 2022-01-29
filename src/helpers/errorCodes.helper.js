const mongoDBErrorCodes = {
  11000: { error: 'DuplicateKey', httpStatus: 400 }
}

const isMongoError = (errCode) => {
  console.log('*** isMongoError err:: ', JSON.stringify(errCode))
  return mongoDBErrorCodes.hasOwnProperty(errCode.code) ? mongoDBErrorCodes[errCode.code] : undefined
}

module.exports = { mongoDBErrorCodes, isMongoError }

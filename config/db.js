const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_NAME_TEST,
  NODE_ENV
} = process.env

// Controlo el acceso a la BD de Test y Otros
const url = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${(NODE_ENV === 'test') ? DB_NAME_TEST : DB_NAME}?authSource=admin`
console.info('*** DB ENV=', NODE_ENV, ' URL=', url)

module.exports = {
  url
}

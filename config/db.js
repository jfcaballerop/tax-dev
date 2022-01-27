// const mongoose = require('mongoose');

const {
	DB_USER,
	DB_PASSWORD,
	DB_HOST,
	DB_PORT,
	DB_NAME,
} = process.env;

module.exports = {
	url: `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`
};
// module.exports = {
// 	url: "mongodb://localhost:27017/bezkoder_db"
// };
// const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
// const options = {
// 	useNewUrlParser: true,
// 	reconnectTries: Number.MAX_VALUE,
// 	reconnectInterval: 500,
// 	connectTimeoutMS: 10000,
// };
// mongoose.connect(url, options).then(function () {
// 	console.log('MongoDB is connected');
// })
// 	.catch(function (err) {
// 		console.log(err);
// 	});
const express = require("express");
require("dotenv").config();
// const bodyParser = require("body-parser"); /* deprecated */
// const cors = require("cors");

const app = express();

// var corsOptions = {
//   origin: "http://localhost:8081"
// };

// app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());  /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));   /* bodyParser.urlencoded() is deprecated */

// const db = require("./app/models");
// db.mongoose
// 	.connect(db.url, {
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true
// 	})
// 	.then(() => {
// 		console.log("Connected to the database!");
// 	})
// 	.catch(err => {
// 		console.log("Cannot connect to the database!", err);
// 		process.exit();
// 	});

// simple route
// app.get("/", (req, res) => {
// 	res.json({ message: "Welcome to bezkoder application." });
// });

require("./src/routes/tutorial.routes")(app);

// set port, listen for requests
const PORT = process.env.NODE_DOCKER_PORT;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});

process.on('uncaughtException', err => {
	console.warn('OOOPS! Unhandled ERROR', err.message);
	console.warn('Maybe you should try/catch the operation?');
	console.log(err);
});

process.on('unhandledRejection', err => {
	console.warn('OOOPS! Unhandled Promise rejection', err.message);
	console.log(err);
})

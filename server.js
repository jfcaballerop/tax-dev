const express = require("express");
require("dotenv").config();
const swaggerUI = require("swagger-ui-express");
const docs = require('./docs');


const app = express();

// var corsOptions = {
//   origin: "http://localhost:8081"
// };

// app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());  /* bodyParser.json() is deprecated */

// OpenApi
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));   /* bodyParser.urlencoded() is deprecated */

const db = require("./src/models");
db.mongoose
	.connect(db.url, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => {
		console.log("Connected to the database!");
	})
	.catch(err => {
		console.log("Cannot connect to the database!", err);
		process.exit();
	});

// simple testing route
app.get("/", (req, res) => {
	res.json({ message: "Welcome to MrKnight application." });
});

// Add Customer Routes
require("./src/routes/customer.routes")(app);

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


//Define the include function for absolute file name
global.base_dir = __dirname;
global.abs_path = function(path) {
	return base_dir + path;
}
global.include = function(file) {
	return require(abs_path('/' + file));
}

const express = require('express');
const database = include('databaseConnection');
const router = include('routes/router');

const port = process.env.PORT || 3000;

async function printMySQLVersion() {
	let sqlQuery = `
		SHOW VARIABLES LIKE 'version';
	`;
	
	console.log("🔍 DB connection details:");
	console.log("DB_HOST:", process.env.DB_HOST);
	console.log("DB_USER:", process.env.DB_USER);
	console.log("DB_PASSWORD:", process.env.DB_PASSWORD ? "✔ Exists" : "❌ MISSING");
	console.log("DB_NAME:", process.env.DB_NAME);
	console.log("DB_PORT:", process.env.DB_PORT);
	
	try {
		const conn = await database.getConnection();
		console.log("✅ DB Pool connection successful");
		await conn.release();
	} catch (err) {
		console.log("❌ DB Pool connection failed");
		console.error(err);
	}
	
	try {
		const results = await database.query(`SHOW VARIABLES LIKE 'version';`);
		console.log("✅ MySQL version query successful");
		console.log(results[0]);
		return true;
	} catch (err) {
		console.log("❌ Error executing query");
		console.error(err);
		return false;
	}
	
	  
	// try {
	// 	const results = await database.query(sqlQuery);
	// 	console.log("Successfully connected to MySQL");
	// 	console.log(results[0]);
	// 	return true;
	// }
	// catch(err) {
	// 	console.log("Error getting version from MySQL");
	// 	console.log(err);
	// 	return false;
	// }
}

const success = printMySQLVersion();


const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));
 
app.use('/',router);
app.use(express.static(__dirname + "/public"));

app.listen(port, () => {
	console.log("Node application listening on port "+port);
}); 




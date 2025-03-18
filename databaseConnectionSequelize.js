require('dotenv').config();

const dbConfigLocal = process.env.DB_URL;

var databaseConnectionString = dbConfigLocal;
module.exports = databaseConnectionString;
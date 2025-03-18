require('dotenv').config();

const dbConfigLocal =
`mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}}/${process.env.DB_NAME}?ssl-mode=REQUIRED`;

var databaseConnectionString = dbConfigLocal;
module.exports = databaseConnectionString;
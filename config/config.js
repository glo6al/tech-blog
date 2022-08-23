const Sequelize = require("sequelize");

require("dotenv").config();

// create connection to our db
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USERNAME,
      process.env.DB_PASSWORD,
      {
        host: process.env.DB_LOCAL_HOST || "localhost",
        dialect: "mysql",
        port: 3306,
      }
    );

module.exports = sequelize;

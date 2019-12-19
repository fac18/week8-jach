const { Pool } = require("pg");
const url = require("url");
require("env2")(".env");

if (!process.env.DATABASE_URL)
  throw new Error("Environment variable DB_URL must be set");

const params = url.parse(process.env.DATABASE_URL);

const options = {
  host: params.hostname,
  port: params.port,
  database: params.pathname.split("/")[1],
  max: process.env.DB_MAX_CONNECTIONS || 2,
  user,
  password,
  ssl: params.hostname !== "localhost"
};

const dbConnection = new Pool(options);
module.exports = dbConnection;

import dotenv from "dotenv";

dotenv.config();

const {
  APP_PORT = 3000,
  APP_URL = `http://localhost:${APP_PORT}`,
  DB_DIALECT = "mysql",
  DB_HOST = "localhost",
  DB_PORT = 3306,
  DB_NAME = "url_shortener",
  DB_USERNAME = "root",
  DB_PASSWORD = "",
} = process.env;

export {
  APP_PORT,
  APP_URL,
  DB_DIALECT,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD,
};

import { Sequelize } from "sequelize";
import {
  DB_DIALECT,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD,
} from "./env.js";

export const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  dialect: DB_DIALECT,
  host: DB_HOST,
  port: parseInt(DB_PORT, 10),
  logging: false,
});

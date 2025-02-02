import { Model, DataTypes } from "sequelize";
import { sequelize } from "./database.js";

export class Url extends Model {}

Url.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    shortCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Url",
    tableName: "urls",
    timestamps: true,
  }
);

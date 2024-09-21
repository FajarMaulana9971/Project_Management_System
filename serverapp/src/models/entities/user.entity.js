import { Sequelize } from "sequelize";
import db from "../../configurations/database/database.configuration.js";

const { DataTypes } = Sequelize;

const User = db.define(
  "tb_m_user",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        length: [5, 126],
      },
    },
    status: {
      type: DataTypes.ENUM,
      values: ["INTERNSHIP", "EMPLOYEE"],
      allowNull: false,
    },
    level: {
      type: DataTypes.ENUM,
      values: ["BEGINNER", "INTERMEDIATE", "ADVANCED"],
    },
  },
  {
    freezeTableName: true,
  },
);
export default User;

import { Sequelize } from "sequelize";
import db from "../../../configurations/database/database.configuration.js";

const { DataTypes } = Sequelize;

const UserTask = db.define(
  "tb_tr_user_task",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    task_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  },
);

export default UserTask;

import { Sequelize } from "sequelize";
import db from "../../../configurations/database/database.configuration.js";

const { DataTypes } = Sequelize;

const ReportTask = db.define(
    "tb_tr_report_task",{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        report_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        task_id:{
            type: DataTypes.INTEGER,
            allowNull: false,

        }
    },{
        freezeTableName: true,
    }
);
export default ReportTask;
import {Sequelize} from 'sequelize';
import db from "../../configurations/database/database.configuration.js";

const {DataTypes} = Sequelize;

const DailyReport = db.define(
    "tb_m_daily-report",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
        },
        created_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        report_today:{
            type: DataTypes.STRING,
            validate:{
                length: [5, 255]
            }
        },
        tomorrow_planning:{
            type: DataTypes.STRING,
            validate:{
                length: [5, 255]
            }
        },
        task_progress:{
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                min: 0,
                max: 100
            }
        },
        issue:{
            type: DataTypes.STRING,
        }


    }, {
        freezeTableName: true,
        timestamps: false,
    }
);

export default DailyReport;
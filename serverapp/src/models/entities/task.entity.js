import {Sequelize} from "sequelize";
import db from "../../configurations/database/database.configuration.js";

const {DataTypes} = Sequelize;

const Task = db.define(
    "tb_m_task",{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                min: 5,
                max: 100
            }
        },
        description:{
            type: DataTypes.STRING,
        },
        photo: {
            type: DataTypes.BLOB("long"),
            allowNull: true,
        },
        task_progress:{
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                min: 0,
                max: 100
            }
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
)
export default Task;
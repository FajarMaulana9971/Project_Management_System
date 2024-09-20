import {Sequelize} from "sequelize";
import db from "../../configurations/database/database.configuration.js";
import {v4 as uuid} from "uuid";

const {DataTypes} = Sequelize;

const Project = db.define(
    "tb_m_projects",{
        id: {
            type: DataTypes.STRING,
            defaultValue:() => uuid(),
            primaryKey: true,
            allowNull: false,
        },
        company:{
            type: DataTypes.STRING,
            validate: {
                length: [5, 126]
            }
        },
        project_name:{
            type: DataTypes.STRING,
            validate: {
                length: [5, 126]
            }
        },
        project_progress:{
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0,
            validate: {
                min: 0,
                max: 100
            }
        },
        start_project: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },end_project: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
    },{
        freezeTableName: true,
        timestamps: false,
    }
);
export default Project;
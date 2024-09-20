import {Sequelize} from "sequelize";
import db from "../../configurations/database/database.configuration.js";

const {DataTypes} = Sequelize;

const Sprint = db.define("tb_m_sprint", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    sprint_number:{
        type: DataTypes.INTEGER,
    },
    sprint_name:{
        type: DataTypes.STRING,
    }
},{
    freezeTableName: true,
    timestamps: false,
})

export default Sprint;
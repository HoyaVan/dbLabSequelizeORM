const {Sequelize, DataTypes} = require('sequelize');
const databaseConnectionString = include('/databaseConnectionSequelize');
const sequelize = new Sequelize(databaseConnectionString);

const PetTypeModel = sequelize.define('pet_type', {
    pet_type_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
    },
    type: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true
    }
}, {
    tableName: 'pet',
    timestamps: false,
    singular: 'pet',
    plural: 'pet'
});
    
module.exports = PetTypeModel;
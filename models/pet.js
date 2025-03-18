const {Sequelize, DataTypes} = require('sequelize');
const databaseConnectionString = include('/databaseConnectionSequelize');
const sequelize = new Sequelize(databaseConnectionString);

const petModel = sequelize.define('pet', {
    pet_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
    },
    web_user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
    },
    name: {
    type: DataTypes.STRING(50),
    allowNull: false
    },
    pet_type_id: {
    type: DataTypes.INTEGER,
    allowNull: false
    }
}, {
    tableName: 'pet',
    timestamps: false,
    singular: 'pet',
    plural: 'pet'
});

// Define associations (optional but recommended)
Pet.associate = (models) => {
    Pet.belongsTo(models.web_user, { foreignKey: 'web_user_id' });
    Pet.belongsTo(models.pet_type, { foreignKey: 'pet_type_id' });
};

module.exports = petModel;
const { Sequelize, DataTypes } = require('sequelize');
const databaseConnectionString = include('/databaseConnectionSequelize');
const sequelize = new Sequelize(databaseConnectionString);

const petTypeModel = sequelize.define('pet_type', {
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
  tableName: 'pet_type',
  timestamps: false,
  singular: 'pet_type',
  plural: 'pet_type'
});

petTypeModel.associate = (models) => {
    petTypeModel.hasMany(models.pet, { foreignKey: 'pet_type_id' });
};

module.exports = petTypeModel;

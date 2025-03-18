const { Sequelize, DataTypes } = require('sequelize');
const databaseConnectionString = include('/databaseConnectionSequelize');
const sequelize = new Sequelize(databaseConnectionString);

const PetType = sequelize.define('pet_type', {
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
  timestamps: false
});

PetType.associate = (models) => {
  PetType.hasMany(models.pet, { foreignKey: 'pet_type_id' });
};

module.exports = PetType;

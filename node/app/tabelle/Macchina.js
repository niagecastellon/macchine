const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');

class Macchina extends Model {}

Macchina.init({
    numeroTelaio: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    targa: {
        type: DataTypes.STRING,
        allowNull: false
    },
    marca: {
        type: DataTypes.STRING,
        allowNull: false
    },
    modello: {
        type: DataTypes.STRING,
        allowNull
    },
    anno: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    potenzaCV: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'macchina',
    tableName: 'macchine',
    timestamps: false
})

module.exports = Macchina;
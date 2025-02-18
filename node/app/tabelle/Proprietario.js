const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config');

class Proprietario extends Model {}

Proprietario.init({

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cognome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cap: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    citta: {
        type: DataTypes.STRING,
        allowNull: false
    },
    via: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    sequelize,
    modelName: 'proprietario',
    tableName: 'proprietari',
    timestamps: false
})

module.exports = Proprietario;
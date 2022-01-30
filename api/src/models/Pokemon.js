const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    //vida
    hp: {
      type: DataTypes.INTEGER,
    },
    //attaque
    attack: {
      type: DataTypes.INTEGER,
    },
    //defensa
    defense: {
      type: DataTypes.INTEGER,
    },
    //velocidad
    speed: {
      type: DataTypes.INTEGER,
    },
    //altura
    height: {
      type: DataTypes.INTEGER,
    },
    //peso
    weight: {
      type: DataTypes.INTEGER,
    },
    //qu es esto??
    sprite: {
      type: DataTypes.STRING,
    },
    //puede no ser necesario, hay que fijarse :)
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  });
};

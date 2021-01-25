const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Item.belongsToMany(models.User, { through: models.UserItem })
    }
  };
  Item.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    color: DataTypes.STRING,
    type: DataTypes.STRING,
    brand: DataTypes.STRING,
    gender: DataTypes.STRING,
    price: DataTypes.INTEGER,
    image: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};
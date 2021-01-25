'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UserItem.init({
    isLike: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'UserItem',
    timestamps:false
  });
  return UserItem;
};

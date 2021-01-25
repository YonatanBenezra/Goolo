const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsToMany(models.Item, { through: models.UserItem })
    }
  };
  User.init({
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    email: {type: DataTypes.STRING,
            unique: true
          },
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};


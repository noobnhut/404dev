'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reset_password extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      reset_password.belongsTo(models.user, { foreignKey: 'id_user' });

    }
  }
  reset_password.init({
    id_user: DataTypes.INTEGER,
    keyword_token: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'reset_password',
  });
  return reset_password;
};
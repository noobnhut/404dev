'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class noti_post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      noti_post.belongsTo(models.post, { foreignKey: 'id_post' });
      noti_post.belongsTo(models.user, { foreignKey: 'id_user' });

    }
  }
  noti_post.init({
    id_user: DataTypes.INTEGER,
    id_post: DataTypes.INTEGER,
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'noti_post',
  });
  return noti_post;
};
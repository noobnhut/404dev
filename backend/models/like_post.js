'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class like_post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      like_post.belongsTo(models.user, { foreignKey: 'id_user' });
      like_post.belongsTo(models.post, { foreignKey: 'id_post' });
    }
  }
  like_post.init({
    id_post: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    id_user: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'like_post',
  });
  return like_post;
};
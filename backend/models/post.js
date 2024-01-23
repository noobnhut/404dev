'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      post.belongsTo(models.user, { foreignKey: 'id_user' });
      post.hasMany(models.like_post, { foreignKey: 'id_post' });
      post.hasMany(models.comment_post, { foreignKey: 'id_post' });
      post.hasMany(models.img_post, { foreignKey: 'id_post' });
      post.hasMany(models.noti_post, { foreignKey: 'id_post' });
      post.hasMany(models.post_tag, { foreignKey: 'id_post' });
    }
  }
  post.init({
    id_user: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'post',
  });
  return post;
};
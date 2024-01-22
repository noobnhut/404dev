'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comment_post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  comment_post.init({
    id_post: DataTypes.INTEGER,
    content: DataTypes.STRING,
    id_iuser: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'comment_post',
  });
  return comment_post;
};
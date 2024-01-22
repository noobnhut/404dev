'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class img_post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  img_post.init({
    id_post: DataTypes.INTEGER,
    public_id: DataTypes.STRING,
    url_img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'img_post',
  });
  return img_post;
};
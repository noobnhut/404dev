'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class about_link extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  about_link.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    status: DataTypes.ENUM('about','link','guild')
  }, {
    sequelize,
    modelName: 'about_link',
  });
  return about_link;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tag.hasMany(models.post_tag, { foreignKey: 'id_tag' });
    }
  }
  tag.init({
    name_tag: DataTypes.STRING,
    active_status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'tag',
  });
  return tag;
};
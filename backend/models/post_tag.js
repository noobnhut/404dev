'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post_tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      post_tag.belongsTo(models.post, { foreignKey: 'id_post' });
      post_tag.belongsTo(models.tag, { foreignKey: 'id_tag' });

    }
  }
  post_tag.init({
    id_post: DataTypes.INTEGER,
    id_tag: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'post_tag',
  });
  return post_tag;
};
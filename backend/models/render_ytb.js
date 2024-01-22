'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class render_ytb extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  render_ytb.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    link_video: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'render_ytb',
  });
  return render_ytb;
};
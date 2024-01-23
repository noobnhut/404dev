'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasMany(models.reset_password, { foreignKey: 'id_user' });

      user.hasMany(models.post, { foreignKey: 'id_user' });
      user.hasMany(models.like_post, { foreignKey: 'id_user' });
      user.hasMany(models.comment_post, { foreignKey: 'id_user' });
      user.hasMany(models.comment_post, { foreignKey: 'id_user' });

      user.hasMany(models.follow_user, { foreignKey: 'to_user' });
      user.hasMany(models.follow_user, { foreignKey: 'from_user' });

      user.hasMany(models.noti_post, { foreignKey: 'id_user' });
      user.hasMany(models.noti_system, { foreignKey: 'id_user' });
    }
  }
  user.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
    img_link: DataTypes.STRING,
    public_id: DataTypes.STRING,
    disable_status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};
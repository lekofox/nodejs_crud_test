'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
  
  };
  User.init({
    firstName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
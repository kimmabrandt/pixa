'use strict';
module.exports = function(sequelize, DataTypes) {
  var users_photos = sequelize.define('users_photos', {
    userId: DataTypes.INTEGER,
    photoId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return users_photos;
};
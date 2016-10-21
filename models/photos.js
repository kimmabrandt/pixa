'use strict';
module.exports = function(sequelize, DataTypes) {
  var photos = sequelize.define('photos', {
    url: DataTypes.TEXT,
    category: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
      models.photos.belongsToMany(models.user, {through: "users_photos"});   
         }
    }
  });
  return photos;
};
'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    //up - do something to db
    //Add facebookId and facebookToken as columns
    //queryInterface - helper function in sequelize
                                              //column     //data type
    return queryInterface.addColumn('users', 'facebookId', Sequelize.STRING).then(function(){
      return queryInterface.addColumn('users', 'facebookToken', Sequelize.STRING);
    });
  },

  down: function (queryInterface, Sequelize) {
    //down - undo something/revert changes - reverse of up
    return queryInterface.removeColumn('users', 'facebookToken').then(function(){
      return queryInterface.removeColumn('users', 'facebookId');
    });
  }
};

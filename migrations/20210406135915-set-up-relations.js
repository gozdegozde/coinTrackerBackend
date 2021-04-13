'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.addColumn('users', "userCoinId",
      {
        type: Sequelize.INTEGER,
        references: {
        model: "userCoins",
        key: "id", 
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
     } );
     
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.removeColumn('users',"userCoinId");
     
  }
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
      await queryInterface.bulkInsert('userCoins', [
     {
       userId :1,
       coinId:1,
       amount:1,
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
       userId :1,
       coinId:2,
       amount:2,
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
       userId :2,
       coinId:1,
       amount:1,
       createdAt: new Date(),
       updatedAt: new Date(),
     },

      ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkDelete('userCoins', null, {});
     
  }
};

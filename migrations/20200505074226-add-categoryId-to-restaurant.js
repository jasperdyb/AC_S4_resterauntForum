'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Restaurants', 'CategoryId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
      reference: {
        model: 'Categories',
        key: 'id'
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Restaurants', 'CategoryId')
  }
};

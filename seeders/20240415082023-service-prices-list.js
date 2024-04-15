"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const seedData = [
      {
        duration: "1hour",
        price: "500",
        type: "hourly",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        duration: "7days",
        price: "5000",
        type: "weekly",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        duration: "1month",
        price: "1000",
        type: "monthly",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert("Prices", seedData, {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Prices", seedData, {
      price: {
        [Sequelize.Op.in]: ["500", "5000", "10000"],
      },
    });
  },
};

"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const seedData = [
      {
        email: "admin@codesfortomorrow.com",
        password: "Admin123!@#",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert("Users", seedData, {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", seedData, {
      email: {
        [Sequelize.Op.in]: ["admin@codesfortomorrow.com"],
      },
    });
  },
};

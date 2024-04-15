"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Services", {
      id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
          model: "Categories",
          key: "id",
          as: "categoryId",
        },
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      type: {
        type: Sequelize.ENUM("normal", "vip"),
        allowNull: false,
      },
      priceId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
          model: "Prices",
          key: "id",
          as: "priceId",
        },
      },
     
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable("Services");
  },
};

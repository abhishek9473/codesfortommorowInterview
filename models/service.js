const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Service extends Model {}

  Service.init(
    {
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        reference: {
          model: "Categories",
          key: "id",
          as: "categoryId",
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM("normal", "vip"),
        allowNull: false,
      },
      priceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        reference: {
          model: "Prices",
          key: "id",
          as: "priceId",
        },
      },
    },
    {
      sequelize,
      modelName: "Service",
    }
  );
  return Service;
};

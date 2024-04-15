const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Price extends Model {}

  Price.init(
    {
      duration: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      price: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      type: {
        type: DataTypes.ENUM("hourly", "weekly", "monthly"),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Price",
    }
  );
  return Price;
};

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {}

  Category.init(
    {
      createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
        reference: {
          model: "Users",
          key: "id",
          as: "createdBy",
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};

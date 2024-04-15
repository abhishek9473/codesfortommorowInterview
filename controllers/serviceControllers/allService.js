const db = require("../../models/index.js");
const { Category, Service, Price } = db;

module.exports = async (req, res) => {
  try {
    const userId = req.decodeId;
    const categoryId = req.params.categoryId;

    const allCategoryServices = await Service.findAll({
      where: { categoryId: categoryId },
    });

    res.send({
      status: true,
      message: "get all categories",
      entity: allCategoryServices,
    });
  } catch (err) {
    console.log("error in finding all category services", err.message);
    res.send({
      status: false,
      message: "error in finding all category services",
    });
  }
};

const db = require("../../models/index.js");
const { Category, Service, Price } = db;

module.exports = async (req, res) => {
  try {
    const { serviceName, type, priceId } = req.body;
    const categoryId = req.params.categoryId;
    console.log(categoryId);

    const newCategoryService = await Service.create({
      categoryId: categoryId,
      name: serviceName,
      type: type,
      priceId: priceId,
    });
    console.log(newCategoryService);
    res.send({
      status: true,
      message: "new category serice created",
      entity: newCategoryService.name,
    });
  } catch (err) {
    console.log("error in adding new category service", err.message);
    res.send({
      status: false,
      message: "error in adding new category service",
    });
  }
};

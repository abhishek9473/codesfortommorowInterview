const db = require("../../models/index.js");
const { Service } = db;

module.exports = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const serviceId = req.params.serviceId;

    const updatedCategoryService = await Service.update(
      { ...req.body },
      {
        where: {
          id: serviceId,
          categoryId: categoryId,
        },
      }
    );

    res.send({
      status: true,
      message: "category service updated",
    });
  } catch (err) {
    console.log("error in update a category service", err.message);
    res.send({
      status: false,
      message: "error in update a category service",
    });
  }
};

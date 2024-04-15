const db = require("../../models/index.js");
const { Service } = db;

module.exports = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const serviceId = req.params.serviceId;

    const deleteCategory = await Service.destroy({
      where: {
        id: serviceId,
        categoryId: categoryId,
      },
    });

    res.send({
      status: true,
      message: "category service deleted",
    });
  } catch (err) {
    console.log("error in delete a category service", err.message);
    res.send({
      status: false,
      message: "error in delete a category service",
    });
  }
};

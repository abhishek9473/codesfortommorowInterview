const db = require("../../models/index.js");
const { Category } = db;

module.exports = async (req, res) => {
  try {
    const { categoryName } = req.body;
    const userId = req.decodeId;

    const newCategory = await Category.create({
      createdBy: userId,
      name: categoryName,
    });

    res.send({
      status: true,
      message: "new category created",
      entity: newCategory.name,
    });
  } catch (err) {
    console.log("error in adding new category", err.message);
    res.send({
      status: false,
      message: "error in adding new category",
    });
  }
};

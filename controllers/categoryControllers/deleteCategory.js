const db = require("../../models/index.js");
const { Category } = db;

module.exports = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const userId = req.decodeId;

    const deleteCategory = await Category.destroy({
      where: {
        id: categoryId,
        createdBy: userId,
      },
    });

    res.send({
      status: true,
      message: "category deleted",
    });
  } catch (err) {
    console.log("error in delete a category", err.message);
    res.send({
      status: false,
      message: "error in delete a category",
    });
  }
};

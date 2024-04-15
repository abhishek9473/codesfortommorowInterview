const db = require("../../models/index.js");
const { Category } = db;

module.exports = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const { categoryName } = req.body;
    const userId = req.decodeId;

    const updatedCategory = await Category.update(
      { name: categoryName },
      {
        where: {
          id: categoryId,
          createdBy: userId,
        },
      }
    );

    res.send({
      status: true,
      message: "category updated",
    });
  } catch (err) {
    console.log("error in update a category", err.message);
    res.send({
      status: false,
      message: "error in update a category",
    });
  }
};

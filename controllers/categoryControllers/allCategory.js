const db = require("../../models/index.js");
const { Category } = db;

module.exports = async (req, res) => {
  try {
    const userId = req.decodeId;

    const allCategory = await Category.findAll({
      where: { createdBy: userId },
    });

    res.send({
      status: true,
      message: "get all categories",
      entity: allCategory,
    });
  } catch (err) {
    console.log("error in finding all category", err.message);
    res.send({
      status: false,
      message: "error in finding all category",
    });
  }
};

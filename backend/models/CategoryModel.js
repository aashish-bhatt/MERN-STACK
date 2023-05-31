const mongoose = require("mongoose");
const categorySchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, defualt: "default category description" },
  image: { type: String, default: "/images/DailyNeeds-category.png" },
  attrs: [{ key: { type: String }, value: [{ type: String }] }],
});
categorySchema.index({description:1})
const Category = mongoose.model("Category", categorySchema);
module.exports = Category;

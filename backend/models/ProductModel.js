const mongoose = require("mongoose");
const Review=require("./ReviewModel")
const imageSchema=mongoose.Schema({
  path:{type:String,required:true}
})
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
    },
    reviewsNumber: {
      type: Number,
    },
    sales: {
      type: Number,
      default: 0,
    },
    attrs: [
      { key: { type: String }, value: { type: String } },
      //[{key:"color",value:"red"},{key:"size",value:"1TB"}]
    ],
    images: [imageSchema],
    reviews: [
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:Review,
      }
    ],
  },
  {
    timestamps: true,
  }
);
// indexing is used for searching 
productSchema.index({name:"text",description:"text"},{name:"Textindex"});
productSchema.index({"attrs.key":1,"attrs.value":1}) // if it is -1 mongodb sort the data in descendent order
const Product = mongoose.model("Product", productSchema);
module.exports = Product;

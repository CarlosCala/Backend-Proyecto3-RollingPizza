import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  productName: {
    require: true,
    type: String,
    minlenght: 2,
    maxlenght: 100,
    unique: true,
  },
  price: {
    type: Number,
    require: true,
    min: 0, 
    max: 10000, 
  },
  description:{
    require: true,
    type: String,
  },
  urlImg: {
    require: true,
    type: String,
  },
  category: {
    type: String,
    require: true,
  },
});

const Product = mongoose.model("product", productSchema);

export default Product;

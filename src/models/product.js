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
    min: 0, // no permiote valores negativos,
    max: 10000, // checkear con el front
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
// para poder usar le indicamos a mongoose que cree
// un modelo basado en este esquema
const Product = mongoose.model("product", productSchema);

export default Product;

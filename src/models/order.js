//modelamos nuestro productos igual que en el front con schema(ESQUEMA)
import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema({
  order: [{
    productName : String,
    price: Number,
  }],
  price: {
    type: Number,
    require: true,
    min: 0,
    max: 10000,
  },
  quantity: {
    type: Number,
    require: true,
    default: 1,
  },
  email: {
    type: String,
    require: true,
  },
  delivery: {
    type: String,
    default: "pending",
  },

});

const Order = mongoose.model("order", orderSchema);

export default Order;

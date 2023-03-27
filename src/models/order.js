//modelamos nuestro productos igual que en el front con schema(ESQUEMA)
import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema({
  productName: {
    require: true,
    type: String,
    minlenght: 2,
    maxlenght: 100,
  },
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
  delivery: {
    type: String,
    default: "pending",
  },
});

const Order = mongoose.model("order", orderSchema);

export default Order;

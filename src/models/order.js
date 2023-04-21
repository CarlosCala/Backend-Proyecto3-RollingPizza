//modelamos nuestro productos igual que en el front con schema(ESQUEMA)
import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema({
  productName: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number
  },
  email: {
    type: String,
    required: true
  },
  delivery: {
    type: String,
    default: "pending",
  }
});

const Order = mongoose.model("order", orderSchema);

export default Order;

//modelamos nuestro productos igual que en el front con schema(ESQUEMA)
import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema({
  order : [{
    productName: String,
    email: String,
    price: Number,
  }],
  delivery: {
    type: String,
    default: "pending",
  }
});

const Order = mongoose.model("order", orderSchema);

export default Order;

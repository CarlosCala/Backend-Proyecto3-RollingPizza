//modelamos nuestro productos igual que en el front con schema(ESQUEMA)
import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema({
  order : [{
    productName: String,
    price: Number,
  }],
  email: {
    type: String,
    require: true,
  },
  delivery: {
    type: String,
    default: "pending",
  },
  total : {
    type: Number,
  }
});

const Order = mongoose.model("order", orderSchema);

export default Order;

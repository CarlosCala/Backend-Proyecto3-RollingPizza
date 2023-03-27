import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    maxlength: 100,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    default: "inactive",
  },
  admin: {
    type: String,
    default: "usuario",
  },
});

const User = mongoose.model("user", userSchema);

export default User;

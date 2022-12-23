import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  photos: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("product", ProductSchema);

export default User;

const mongoose = require("mongoose");

const Product_Schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product Name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please enter Product description Name"],
  },
  price: {
    type: Number,
    required: [true, "Please enter Price Name"],
    maxLength: [8, "price cannot exceed 8 cgaracters"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please enter Product category Name"],
  },
  stock: {
    type: Number,
    required: [true, "Please enter product stock Name"],
    maxLength: [4, "stock cannot exceed 4 characters"],
    default: 1,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  User: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", Product_Schema);

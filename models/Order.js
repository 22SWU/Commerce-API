const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    amount: { type: Number, required: true },
    address: { type: Object, required: true }, // 지번, 자세한 주소 등
    status: { type: String, default: "pending" }, // shipping, receive
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);

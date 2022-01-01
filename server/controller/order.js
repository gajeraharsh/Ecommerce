const Order = require("../model/orderModel");
const ErrorResponse = require("../utils/ErrorResponse");

//Create new order

exports.newOrder = async (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  const order = new Order.create({
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paidAt: Date.now(),
    user: req.user._id,
  });

  res.status(201).json({ success: true, order });
};

// get one order

exports.getoneOrder = async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate(
    "User",
    "name email"
  );

  if (!order) {
    return next(ErrorResponse("order not fount this id ", 404));
  }

  res.status(200).json({
    success: true,
    order,
  });
};

// get all orders

exports.getallorders = async (req, res, next) => {
  const orders = Order.find({ user: req.user._id });

  res.status(200).json({
    success: true,
    orders,
  });
};

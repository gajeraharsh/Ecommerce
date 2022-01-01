const express = require("express");
const router = express.Router();
const { newOrder } = require("../controller/order");
const { isAuthenticatedUser, isAdmin } = require("../middlewares/Auth");

router.route("/order/new").post(isAuthenticatedUser, newOrder);

module.exports = router;

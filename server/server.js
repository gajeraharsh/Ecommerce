// require main dependancy
const express = require("express");
const dotenv = require("dotenv").config();
const cookieparser = require("cookie-parser");
const dbconnection = require("./Functions/Databaseconnection");
const ErrorHandler = require("./middlewares/ErrorHandler");
const ProductRoute = require("./router/product");
const AuthrRoute = require("./router/Auth");
const order = require("./router/orderRoute");
// Create express app
const app = express();

// Db connection
dbconnection.dbconnection();

// Global Middleware
app.use(express.json());
app.use(cookieparser());
// Routing paths
app.use("/api/", ProductRoute);
app.use("/api/", AuthrRoute);
app.use("api/", order);

// Error Handler
app.use(ErrorHandler);
//Create a server
app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});

const route = require("express").Router();
const {isAuthenticatedUser,isAdmin} = require("../middlewares/Auth")
const {getAllProducts, CreateProduct, getOneproduct, deleteproduct} = require("../controller/Product")
route.get("/",isAuthenticatedUser,getAllProducts);
route.get("/product:id",getOneproduct);



// Admin Routs
route.delete("/deleteproduct:id",isAuthenticatedUser,isAdmin("admin"),deleteproduct);
route.post("/newproduct",isAuthenticatedUser,isAdmin("admin"),CreateProduct);
module.exports = route;
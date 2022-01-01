const route = require("express").Router();
const {signUp,SignIn,logoutuser,Forgotpassword,resetpasswrod} = require("../controller/Auth")
route.post("/signUp",signUp);
route.post("/signIn",SignIn)
route.get("/logout",logoutuser)
route.route("/password/forgot").post(Forgotpassword)
route.route("/password/reset/:resetpasswordtoken").put(resetpasswrod)




module.exports = route;

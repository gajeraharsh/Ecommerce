const UserModel = require("../model/UserModel");
const ErrorResponse = require("../utils/ErrorResponse");
const jwt = require("jsonwebtoken");
exports.isAuthenticatedUser = async (req,res,next) => {
    const {token} = req.cookies;
    if(!token){
        return next(new ErrorResponse("please Login to access this resourse",401))
    }
   try {
    const decodeddata = jwt.verify(token,process.env.JWTSECRET);
  
    const user = await UserModel.findById(decodeddata.id);
    
    req.user = user;

    next();
   } catch (error) {
       return next(error)
   }

}

// is admin

exports.isAdmin = (...roles) => {
    return (req,res,next) => {
        if(!roles.includes(req.user.roles)){
            next(new ErrorResponse(`Role ${req.user.roles} is not allowd to access this resourse`));
        }
        next();
    }

}



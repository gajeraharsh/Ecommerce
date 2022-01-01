const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const User_Schema = new mongoose.Schema({
     name:{
         type:String,
         required:[true,"Please Enter your name"],
         maxLength:[30,"Name cannot exceed 30 characters"],
         minLength:[4,"Name should have more then 5 characters"]
     },
     email:{
         type:String,
         required:[true,"Please Enter your email"],
         unique:true,
         validate:[validator.isEmail,"Please Enter a valid Email"]
     },
     password:{
         type:String,
         required:[true,"Please Enter your Password"],
         minLength:[8,"Name should have more then 8 characters"],
         select:false
     },
     avatar:{
        
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        
     },
     role:{
         type:String,
         default:"User",
     },
     resetpasswordToken:String,
     resetpasswordexpire:Date,

});

// password hashing
User_Schema.pre("save",async function(next){
    if(!this.isModified("password")){
      next();
    }
    this.password = await bcrypt.hash(this.password,10);
})

// Get jwt token
User_Schema.methods.getjwtToken = function(){
    return jwt.sign({id:this._id},process.env.JWTSECRET,{
        expiresIn:process.env.JWTEXPIRE
    })
}

// Compaer pasword
User_Schema.methods.ComparePassword = async function(password){
    return await bcrypt.compare(password,this.password)
}

// Generating password reset token
User_Schema.methods.getresetpasswordtoken = function(){
    const resettoken = crypto.randomBytes(20).toString("hex");

    this.resetpasswordToken = crypto.createHash("sha256").update(resettoken).digest("hex");
    this.resetpasswordexpire = Date.now() + 15 * 60 * 1000

    return resettoken;
}
module.exports = mongoose.model("User",User_Schema);

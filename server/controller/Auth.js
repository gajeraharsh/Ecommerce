const UserModel = require("../model/UserModel");
const ErrorResponse = require("../utils/ErrorResponse");
const { sendjwttoken } = require("../utils/jwtToken");
const sendEmail = require("../utils/sendemail");
const crypto = require("crypto");
// Sign in
exports.signUp = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const user = await UserModel.create({
      name,
      email,
      password,
      avatar: {
        public_id: "this is a simple id",
        url: "ProfilepicUrl",
      },
    });
    sendjwttoken(user, 201, res);
  } catch (error) {
    next(error);
  }
};

// Signin
exports.SignIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return next(new ErrorResponse("Please Enter correct details", 400));
    }
    const user = await UserModel.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorResponse("invalid email or password", 400));
    }

    const ispasswordmatch = await user.ComparePassword(password);

    if (!ispasswordmatch) {
      return next(new ErrorResponse("Invalid email or password", 400));
    }

    sendjwttoken(user, 200, res);
  } catch (error) {
    next(error);
  }
};

// Logout

exports.logoutuser = async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    message: "Logedout successfully",
  });
};

// Reset Paswrod Token :-

exports.Forgotpassword = async (req, res, next) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });
    if (!user) {
      return next(new ErrorResponse("User not found", 404));
    }
    // Get resetpassword tokne
    const resettoken = user.getresetpasswordtoken();
    await user.save({ validateBeforeSave: false });

    const resetpasswrodurl = `${req.protocol}://${req.get(
      "host"
    )}/api/password/reset/${resettoken}`;
    const message = `
        your password reset token  is \n\n
        ${resetpasswrodurl} \n\n you have not requeste this email then <ignored></ignored>
       `;

    try {
      const mail = await sendEmail({
        email: user.email,
        subject: "Ecommerce password recovery",
        message,
      });
      if (mail) {
        res.status(200).json({ message: "Email is sent" });
      }
    } catch (error) {
      user.resetpasswordToken = undefined;
      user.resetpasswordexpire = undefined;
      await user.save({ validateBeforeSave: false });
      return next(error);
    }
  } catch (error) {
    next(error);
  }
};

// trdry psssword;

exports.resetpasswrod = async (req, res, next) => {
  try {
    const resetpasswordToken = crypto
      .createHash("sha256")
      .update(req.params.resetpasswordtoken)
      .digest("hex");
    const user = await UserModel.findOne({
      resetpasswordToken,
      resetpasswordexpire: { $gt: Date.now() },
    });
    if (!user) {
      next(
        new ErrorResponse("Reset password token is invalid and expired", 400)
      );
    }
    if (req.body.password != req.body.conformpassword) {
      next(new ErrorResponse("password does not match", 400));
    }

    user.password = req.body.password;
    user.resetpasswordToken = undefined;
    user.resetpasswordexpire = undefined;
    await user.save();
    sendjwttoken(user, 200, res);
  } catch (error) {
    next(error);
  }
};

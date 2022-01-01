
// Send jwt token
exports.sendjwttoken = async (user,statuscode,res) => {
    const token = user.getjwtToken();
    // option of cookie
    const option = {
        expires:new Date(
            Date.now() + process.env.COOKI_EXPIRE * 24 * 60 *60*1000
        ),
        httpOnly:true
    }
    res.status(statuscode).cookie("token",token,option).json({
        success:true,
        token,
        user
    })
}



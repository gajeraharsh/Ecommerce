const ErrorResponse = require("../utils/ErrorResponse")

const ErrorHandler = (err,req,res,next) => {
    let error = {...err}
    
    error.message = err.message;
    console.log(error)
    if(err.code === 11000){
        const message = "Duplicate Field value Enter";
        error = new ErrorResponse(message,400)
    }   

    if(err.name === "ValidationError"){
        const message = Object.values(err.errors).map((val) => val.message);
        const error = new ErrorResponse(message,400)
    }

    res.status(error.statuscode || 500).json({
        success:false,
        error:error.message || "Server Error" 
    });
}


module.exports = ErrorHandler  
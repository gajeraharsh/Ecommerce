const monoose = require("mongoose");


exports.dbconnection = () => {
    monoose.connect(process.env.CONNECTIONSTRING,{
        useNewUrlParser:true,
    }).catch((error) => console.log(error)).then(() => console.log("Connection successfully"))
}
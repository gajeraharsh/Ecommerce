const nodemailer = require("nodemailer");

const sendEmail = async (option) => {
    const transporter = nodemailer.createTransport({
       service:"gmail",
        auth:{
            user:"harshgajera689@gmail.com",
            pass:"harshgajera098",
        }
    });

    const mailoption = {
        from:"harshgajera689@gmail.com",
        to:option.email,
        subject:option.subject,
        text:option.message
    }
  
   const mail = await  transporter.sendMail(mailoption);
   return mail;
}

module.exports = sendEmail;
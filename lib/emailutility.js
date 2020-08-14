
require('dotenv').config()
const logger=require('../logger')
let text="Node js Server has Started";
const EventEmitter=require('events').EventEmitter
const emitter=new EventEmitter();

const nodemailer=require('nodemailer');
// const { getMaxListeners } = require('../server');
 
const transporter=nodemailer.createTransport({
    host:'smtp.mailtrap.io',
    port:2525,
    service:process.env.emailservice,
    auth:{
        user:process.env.sampleemail,
        pass:process.env.samplepass
    }
})

let mailOptions={
    from:process.env.sampleemail,
    to:'jpmilangowda@gmail.com',
    subject:"Sending mail from node js",
    text:text
}



emitter.on('sendEmail',(message)=>{
    mailOptions.text=message;
    transporter.sendMail(mailOptions,(error,info)=>{
        console.log(info)
        if(error){
            logger.error(error.toString());
            console.log("email could not be sent", error)
        }else{
            console.log(info.response)
        }
    })
})


// console.log("HEY")

console.log(process.env.emailservice)
console.log(process.env.sampleemail)
console.log(process.env.samplepass)

// exports.triggerEmail=(message)=>{
// text=message;
// sendmail();
// }

exports.emitter=emitter;
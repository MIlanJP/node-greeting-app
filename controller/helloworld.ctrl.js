const Helloworld= require('../services/helloworld.srvs')

// creating HelloWorld Object
const hw=new Helloworld();

/**
 * @description This function has responsibility to return hello World message when called 
 * @param {Http Request Object} req 
 * @param {Http Response Object} res 
 */
exports.getHelloWorld=(req,res)=>{
    const helloworldmessage=hw.returnHelloWorld();
    res.setHeader('Content-Type','application/json');
    res.send({helloworldmessage});
}

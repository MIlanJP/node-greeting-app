const Helloworld= require('../services/helloworld.srvs')

// creating HelloWorld Object
const helloworld=new Helloworld();

/**
 * @description This function has responsibility to return hello World message when called 
 * @param {Http Request Object} req 
 * @param {Http Response Object} res 
 */
exports.getHelloWorld=(req,res)=>{
    const helloworldmessage=helloworld.returnHelloWorld();
    res.setHeader('Content-Type','application/json');
    res.send({helloworldmessage});
}

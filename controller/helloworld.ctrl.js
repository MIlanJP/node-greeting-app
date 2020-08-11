const Helloworld= require('../services/helloworld.srvs')
const hw=new Helloworld();

exports.getHelloWorld=(req,res)=>{
    const helloworldmessage=hw.returnHelloWorld();
    res.setHeader('Content-Type','application/json');
    res.send({helloworldmessage});
}

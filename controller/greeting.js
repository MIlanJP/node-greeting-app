


/**
 * 
 * @param {request Object from http } req  incoming readable request object
 * @param {response Object to http} res  Outgoing writable response object
 *  
 */
exports.create=(req,res)=>{
    res.setHeader('Content-Type','application/json')
    const welcomeMessage=`Welcome to Node JS ${req.params.name}`
    res.send({welcomeMessage})
}
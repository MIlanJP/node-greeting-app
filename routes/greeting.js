const express=require("express");
const router=express.Router();
// importing greeting controller to handle control to controller based on routes
const greetingcontroller=require('../controller/greeting')




router.post('/:name',greetingcontroller.create);

router.get('/names',greetingcontroller.getnames)
module.exports=router;
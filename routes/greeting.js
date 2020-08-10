const express=require("express");
const router=express.Router();
// importing greeting controller to handle control to controller based on routes
const greetingcontroller=require('../controller/greeting')


router.get('/:name',greetingcontroller.create);

module.exports=router;
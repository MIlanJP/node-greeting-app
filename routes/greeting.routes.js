const express=require("express");
const router=express.Router();
// importing greeting controller to handle control to controller based on routes
const greetingcontroller=require('../controller/greeting.controller')


router.post('/firstname/:name',greetingcontroller.create);

router.post('/secondname/:sname',greetingcontroller.create)

router.post('/:name/:sname',greetingcontroller.create)

router.get('/greetingmessageid:id',greetingcontroller.getById)

router.get('/messages',greetingcontroller.getnames)
module.exports=router;
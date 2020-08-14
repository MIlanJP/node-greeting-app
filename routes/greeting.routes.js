const express=require("express");
const router=express.Router();
// importing greeting controller to handle control to controller based on routes
const greetingcontroller=require('../controller/greeting.controller')

// Route for only firstname
router.post('/firstname/:name',greetingcontroller.create);

// Route for only secondname
router.post('/secondname/:sname',greetingcontroller.create)

// Route for both firstname and secondname
router.post('/:name/:sname',greetingcontroller.create)

// Route to get message by id
router.get('/greetingmessageid/:id',greetingcontroller.getMessageById)

router.get('/messages',greetingcontroller.getnames)

router.put('/greetingmessageid/:id/:message',greetingcontroller.updatemessage);
router.delete('/greetingmessageid/:id',greetingcontroller.deleteID);


module.exports=router;
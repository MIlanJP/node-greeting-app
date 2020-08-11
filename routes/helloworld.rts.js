const express=require("express");
const router=express.Router();

// Importing helloworld controller
const helloworldcontroler=require('../controller/helloworld.ctrl')

// Assigning /helloworld routes to /helloworld controller
router.get('/helloworld',helloworldcontroler.getHelloWorld)
module.exports =router;
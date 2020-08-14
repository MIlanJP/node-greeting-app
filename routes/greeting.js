const express = require("express");
const router = express.Router();
// importing greeting controller to handle control to controller based on routes
const greetingcontroller = require("../controller/greeting");

// Route for only firstname
router.post("/firstname/:name", greetingcontroller.create);

// Route for only secondname
router.post("/secondname/:sname", greetingcontroller.create);

// Route for both firstname and secondname
router.post("/:name/:sname", greetingcontroller.create);

// Route to get message by id
router.get("/greetingmessageid/:id", greetingcontroller.getMessageById);

// Route to return all the saved messages
router.get("/messages", greetingcontroller.getnames);

// Route to update  messages
router.put("/greetingmessageid/:id/:message", greetingcontroller.updatemessage);

// Route to delete record
router.delete("/greetingmessageid/:id", greetingcontroller.deleteID);

module.exports = router;

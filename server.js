// Importing express library to start server and handle api calls
const express=require('express');
const app=express();

// Importing mongoose to establish connection between node and mongodb
const mongoose=require('mongoose')
const dbConfigURL=require('./config/database.config')

// Configuring database connection
mongoose.connect(dbConfigURL.url).then(
    ()=>{console.log('Database connected successfully........')}
).catch(err=>{console.error("Connection failed.......")})

// Importing routes for matching URI
const greetingrouter=require('./routes/greeting')

// (MiddleWare) Used for parsing request type of -app/www-form-urlencoded
/**
 * transfer control to the matching router 
 */
app.use('/api/greeting',greetingrouter);


const port=process.env.PORT||3000
app.listen(port,()=>{
    console.log("Server is listening on port "+port)
})
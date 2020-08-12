// CRUD operations for greeting messages;
const mongodb = require("mongodb");
const {ObjectID}=require("mongodb");

// Creating MongoCLient
const MongoClient = mongodb.MongoClient;

// Loading mongo credentials like url database name
const dbConfigURL = require("../config/database.config");
const connectionURL = dbConfigURL.url1;
const databaseName = dbConfigURL.database;
const collectionname=dbConfigURL.collectionname;
let db;
MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      console.log("Unable to connect to the database");
    } else {
      console.log("Connection established");
    }
     db=client.db(databaseName)
    // db.collection(collectionname).insertOne({
    //    firstname:"From repo",
    //    lastname:"from repo",
    //    message:"From repo"
    // },(error,result)=>{
    //     if(error){
    //         return console.error("Unable to insert user");
    //     }
    //     // Printing ops the array of documents
    //     console.log(result.ops)
    // })
    db.collection(collectionname).findOne({_id:new ObjectID("5f32cf5e4907963540701ea4")},
(error,result)=>{
    console.lo(result)
})
  }
);

function findAll(){

}

findAll();


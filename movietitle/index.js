/// object has capital letter first
///if it is value = lower case
//but React would be very strict about it and would not like that
const Express = require('express');
const App = Express();
const port = 80;

const CORS = require("cors");
App.use(CORS());
const MonogDB = require('mongodb');
const MongoClient = MongoDB.MongoClient;
const URL = "mongodb+srv://ingamoiseienko:GcnTt69d2pk9h2O6@cluster0-tc9sb.mongodb.net/"
//if everything going to be right, collection will be set to movies, if not to null
let collection =null;
//callback function
MongoClient.connect(URL,(error, connection) =>{
   if(error){
       throw error;
   }

   let database = connection.db("DIG4503-77");
   let collection =database.collection("Movies");
});

App.get("/movies/title/:title", (req, res)=>{
let result ={"error": "Could not find title!"};
   if(collection!= null){
       //find returns cursor and findOne returns an object
     collection.find({"title": new RegExp(req.params.title)}).limit(100).toArray()
     .then((processedArray) => {
         
        result =processedArray;
        res.json(result);

     });
   } else{
       res.json(result);
   }
res.json(result);
 });

App.listen(port,()=>{
});
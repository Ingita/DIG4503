const MongoClient = require("mongodb").MongoClient;

const URL ="mongodb+srv://ingamoiseienko:GcnTt69d2pk9h2O6@cluster0-tc9sb.mongodb.net/";

class Database {
    constructor(){
          this.connection = null;
          this.collection = null;
        MongoClient.connect(URL, (error, connection) =>{
            if(error){
                throw error;
            }
            this.connection =connection;
            let database = connection.db("DIG4503-77");
            let collection = database.collection("Movies");
            this.collection= collection;
        } );
    }
    findTitle(title){
      if(this.collection != null){
        this.collection.findOne(
            {"title": title},
            {},
             function(error,result){
            return result;
        });
      } else{
          return null;
      }      
        // connection.close();
    }
}
module.exports = Database;
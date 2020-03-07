

MongoClient.connect(URL, function(error, connection){
    if(error){
        throw error;
    }
    let database = connection.db("DIG4503-77");
    let collection = database.collection("Movies");

    connection.findOne({"title":"813"},{}, function(error,result){
        console.log(result);
    });
    
    
    connection.close();
} );
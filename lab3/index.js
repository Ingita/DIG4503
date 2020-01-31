const Express = require("express");
const App = Express();
const port = 121;
                    // const Person = require("./Person.js");

                    // let p = new Person("Dan", "green");


// App.use(Express.static("client/build"));
App.get("/", function(reg, res){
    res.send("Hello World!");
});
App.use("/public", Express.static("public"));
// App.get("/public", function(reg, res){
//     res.send("public");
// });

                    // App.get("/", function(Request, Response){
                    //     Response.send("Hi!");
                    //     console.log("Got a request!");
                    // });

                    // App.get("/name", function(Request, Response){
                    //     Response.send(p.getName());
                    // });
// App.get("/book", function(Request, Response){
//     Response.send("Book!");
// });

// App.get("/public", function(Request, Response){
//     Response.send("<html><p>Hi!</p></html>");
// });


/// Post request ---using form and insomnia
// App.post("/person", function(Request, Response){
//     Response.send(p.getName());
// });


App.listen(port, function(){
    console.log("Server is running!");
});


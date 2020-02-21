const Express = require("express");
const App = Express();
const port = 80;

const People = require("./People.js");
let people = new People();




///previous code
// App.get(":/book/:id", (req, res) => {
//    res.send(req.params);
// });

//another 
App.get("/people/name/:name", (req, res) => {
    ///to look for an array
    for (let i = 0; i < people.length; i++){
        if(req.params.name == people[i].name){
            
            res.send(people[i]);
        }
    }
 });

 App.get("/people/person/color/:color", (req, res) => {

   
    res.send(people.readColor(req));
   });

   App.post("/people/person", (req,res)=>{
   
   });
 App.listen(port, () => {
    console.log("Server is running!");
});

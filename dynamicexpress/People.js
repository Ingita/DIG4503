///global function
const Person = require ("./Person.js");
const faker = require("faker");

class People {
 constructor(){

    this.people =[];
    for(let i = 0; i < 99; i++ ){
        let randomName = faker.name.findName();
        let randomColor = faker.commerce.color();
        //add to an array function
        this.people.push(new Person(randomName, randomColor));
    }

 }

 readColor(req){
      let result = {"error": "Cannot find!"};

      this.people.forEach((value)=>{
        if(value.color == req.params.color){
            result = value;
        }
      });

      if(result.error){
        //invalid
      } else{
        //valid
      }
      return result;
 }
}

module.exports = People;

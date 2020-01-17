const chalk = reqiure("chalk");
// const beep = require("beepbeep");
 class Person {
     constructor(name, favoriteColors, backgroundColors){
         this.name = name;
         this.favoriteColors = favoriteColors;
         this.backgroundColors = backgroundColors;


         if( typeof this.name != "string"){
         console.log("is not string!");
        //      this.name = "red";
         }  
            if( typeof this.favoriteColors != "string"){
          console.log("is not string!");
           //      this.favoriteColors = "red";
         }  
         if( typeof this.backgroundColors != "string"){
            console.log("is not string!");
             //      this.backgroundColors = "red";
           } 
          
     }
     speak (){
         for(let i = 0; i< this.favoriteColors.length; i++){
             console.log(chalk.bgColors);
         }
         console.log(chalk.bgColor(this.backgroundColors).keyword(this.favoriteColors).bold(this.name));
        //  beep();
     }
 }
 module.exports = Person;
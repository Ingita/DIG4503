import Pokemon from 'json-pokemon';

export default (req, res) => {

    let result = {"error": "Could not find Type."};

    Pokemon.forEach((value) =>{
        if(value.typeList == req.query.typeList){
            result = value; 
            }
        
    })

   res.json(result);
    }
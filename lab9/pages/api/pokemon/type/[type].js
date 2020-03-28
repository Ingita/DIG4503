import getPokemon from 'json-pokemon/getPokemon';

function response(req, res){
    let type =req.query.type;
    let array1 = [];
    let result = [];

    for(let i=0; i< pokemon.length; i++){
        for(let k=0; k< pokemon[i].typeList.length; k++){
     
        array1.push(i);
        result.push(array1);
        }
    }
    res.json(result);
}



export default response;
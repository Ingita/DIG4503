import React from 'react';


class App extends React.Component{

  movieSearch(){
    let inputElement =document.querySelector("#movieSearch");
    let inputValue = inputElement.value;
    if(inputValue.length === 0){
      inputValue = "@";
    }
    fetch("http://localhost:80/movies/title/" + inputValue)
    .then((res) => {return res.json()})
    .then((processed)=>{
      console.log(processed);
    });
  
}
  render(){
    return(
      <div>
        <input type="text" id="movieSearch" onKeyUp={this.movieSearch} />
      </div>
    );
  }
}
export default App;

class IdSearch extends React.Component {

    idSearch = () => {
  
      let inputElement = document.querySelector("#idInput");
  
      let inputValue = inputElement.value;
  
      if(inputValue.length === 0) {
        inputValue = "@";
      }
  
      fetch("/api/pokemon/id/" + inputValue)
      .then((response) => {return response.json(); })
      .then((processed) => {
        this.props.callback(processed);
      });
  
    }
    render() {
  
      return (
        <div>
          <input type="text" id="idInput" onKeyUp={this.idSearch} />
        </div>
      );
  
    }
  
  }
  
  export default IdSearch;






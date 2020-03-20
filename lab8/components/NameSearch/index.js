class NameSearch extends React.Component {

    nameSearch = () => {
  
      let inputElement = document.querySelector("#nameInput");
  
      let inputValue = inputElement.value;
  
      if(inputValue.length === 0) {
        inputValue = "@";
      }
  
      fetch("/api/pokemon/name/" + inputValue)
      .then((response) => {return response.json(); })
      .then((processed) => {
        this.props.callback(processed);
      });
  
    }
  
    render() {
  
      return (
        <div>
          <input type="text" id="nameInput" onKeyUp={this.nameSearch} />
        </div>
      );
  
    }
  
  }
  
  export default NameSearch;

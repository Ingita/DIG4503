import styles from './NameSearch.module.css';
class NameSearch extends React.Component {

 
    readName(event) {

        event.preventDefault();

        let element = document.querySelector("#name");

        fetch("api/pokemon/name/" + element.value).then((res) => {
            return res.json();
        }).then((processed) => {
            
        let reporting = document.querySelector("#reportingArea");

        if(processed.error) {
            reporting.innerHTML = processed.error;
        } else {
            reporting.innerHTML = processed.id;
        }

        });
        element.value = "";
        }

    render() {
        return(
            <div className={styles.body}>
                 <h2 className={styles.colorGreen}>Name</h2>
                 <p className={styles.colorGreen}></p>
                 <form onSubmit={this.readName}>
                    <input className={styles.input} id="name" type="text" />
                    <button  className={styles.colorB}>Submit</button>
                </form>
            </div>
        );
    }
}
// export default ExampleComponent;
export default NameSearch;







// class NameSearch extends React.Component {

//     nameSearch = () => {
  
//       let inputElement = document.querySelector("#nameInput");
  
//       let inputValue = inputElement.value;
  
//       if(inputValue.length === 0) {
//         inputValue = "@";
//       }
  
//       fetch("api/pokemon/name/" + inputValue)
//       .then((response) => {return response.json(); })
//       .then((processed) => {
//         this.props.callback(processed);
//       });
  
//     }
  
//     render() {
  
//       return (
//         <div>
//           <input type="text" id="nameInput" onKeyUp={this.nameSearch} />
//         </div>
//       );
  
//     }
  
//   }
  
//   export default NameSearch;

// import styles from './IdSearch.module.css';
// class IdSearch extends React.Component {

//     readScore = (event) => {

//         event.preventDefault();

//        let element = document.querySelector("#id");

//           fetch("api/pokemon/id/" + element.value)
//           .then((res) => {
//               return res.json();
//           }).then((processed) => {
              
//           let reporting = document.querySelector("#reportingArea");

//           if(processed.error) {
//               reporting.innerHTML = processed.error;
//           } else {
//               reporting.innerHTML = processed.name;
//           }

//           });
//           element.value = "";
//           }

//     render() {
//         return(
//             <div className={styles.body}>
//                  <h2 className={styles.colorGreen}>Id</h2>
//                  <form onSubmit={this.readScore}>
//                     <input className={styles.input} id="id" type="text" />
//                     <button  className={styles.colorB}>Submit</button>
//                 </form>
//             </div>
//         );
//     }
// }

// export default IdSearch;


import styles from './IdSearch.module.css';
class IdSearch extends React.Component {

    readScore = (event) => {
         event.preventDefault();
         let element = document.querySelector("#id");
  
         fetch("api/pokemon/id/" + element.value)
         .then((res) => {
             return res.json();
         })
         .then((processed) => {
             
             let reporting = document.querySelector("#reportingArea");
             if(processed.error) {
                 reporting.innerHTML = processed.error;
             } else {
                 reporting.innerHTML = processed.name;
             }
  
         });
  
         element.value = "";
     }
  
     render() {
         return(
            //  <div>
            //      <h2>Pokemon Id</h2>
            //      <form onSubmit={this.readScore}>
            //          <input id="id" type="text" />
            //          <button>Submit</button>
            //      </form>
            //  </div>
             <div className={styles.body}>
                  <h2 className={styles.colorGreen}>Id</h2>
                           <form onSubmit={this.readScore}>
                             <input className={styles.input} id="id" type="text" />
                             <button  className={styles.colorB}>Submit</button>
                            </form>
                         </div>
             );
         }
     }
  
  export default IdSearch;





// class IdSearch extends React.Component {

//     idSearch = () => {
  
//       let inputElement = document.querySelector("#idInput");
  
//       let inputValue = inputElement.value;
  
//       if(inputValue.length === 0) {
//         inputValue = "@";
//       }
  
//       fetch("/api/pokemon/id/" + inputValue)
//       .then((response) => {return response.json(); })
//       .then((processed) => {
//         this.props.callback(processed);
//       });
  
//     }
//     render() {
  
//       return (
//         <div>
//           <input type="text" id="idInput" onKeyUp={this.idSearch} />
//         </div>
//       );
  
//     }
  
//   }
  
//   export default IdSearch;






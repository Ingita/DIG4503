// import styles from './IdSearch.module.css'

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
             <div className={styles.bod}>
                 <h2 className={styles.fancy}>Enter Pokemon Id</h2>
                 <form onSubmit={this.readScore}>
                     <input className={styles.in} id="id" type="text" />
                     <button className={styles.but}>Submit</button>
                 </form>
                 <br/>
                 <div className={styles.resul} id ="reportingArea">Who's that Pokemon?!<br/> It's..</div>
             </div>
             );
         }
     }
  
  export default IdSearch;
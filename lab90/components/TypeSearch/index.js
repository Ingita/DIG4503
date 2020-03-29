// import styles from './TypeSearch.module.css'

class TypeSearch extends React.Component {

     readType = (event) => {
         event.preventDefault();
         let element = document.querySelector("#type");
  
         fetch("api/pokemon/typeList/" + element.value)
         .then((res) => {
             return res.json();
         })
         .then((processed) => {
             let reporting = document.querySelector("#reportingArea");        
            

             if(processed.error) {
                 reporting.innerHTML = processed.error;
             } else {
                 reporting.innerHTML = [processed.name];
             } 
         });
  
         element.value = "";
     }
    
  
     render() {
         return(
             <div className={styles.bod}>
                 <h2 className={styles.fancy}>Enter Pokemon Type</h2>
                 <form onSubmit={this.readType}>
                     <input className={styles.in} id="type" type="text" />
                     <button  className={styles.but}>Submit</button>
                 </form>
                 <br/>
                 <div className={styles.resul} id ="reportingArea">Who's that Pokemon?!<br/> It's..</div>
             </div>
             );
         }
     }
  
  export default TypeSearch;
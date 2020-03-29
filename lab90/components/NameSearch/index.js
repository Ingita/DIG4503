// import styles from './NameSearch.module.css'

class NameSearch extends React.Component {

    readName =(event) => {
       event.preventDefault();
       let element = document.querySelector("#name");

       fetch("api/pokemon/name/" + element.value)
       .then((res) => {
           return res.json();
       })
       .then((processed) => {
           
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
           <div className={styles.bod}>
               <h2 className={styles.fancy}>Enter Pokemon Name</h2>
               <form onSubmit={this.readName}>
                   <input className={styles.in}  id="name" type="text" />
                   <button className={styles.but}>Submit</button>
               </form>
               <br/>
                 <div className={styles.resul} id ="reportingArea">What's that Pokemon's id?!<br/> It's..</div>
           </div>
           );
       }
   }

   export default NameSearch;
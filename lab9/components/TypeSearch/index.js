import styles from './TypeSearch.module.css';
class TypeSearch extends React.Component {

 
    readType =(event)=> {

        event.preventDefault();

        let element = document.querySelector("#typelist");

        fetch("api/pokemon/typelist/" + element.value).then((res) => {
            return res.json();
        }).then((processed) => {
            
        let reporting = document.querySelector("#reportingArea");

        if(processed.error) {
            reporting.innerHTML = processed.error;
        } else {
            reporting.innerHTML = processed.typeList;
        }

        });
        element.value = "";
        }

    render() {
        return(
            <div className={styles.body}>
                 <h2 className={styles.colorGreen}>Type</h2>
                 <form onSubmit={this.readType}>
                    <input className={styles.input} id="typelist" type="text" />
                    <button  className={styles.colorB}>Submit</button>
                </form>
            </div>
        );
    }
}

export default TypeSearch;
import styles from './TypeSearch.module.css';
class TypeSearch extends React.Component {

 
    readType(event) {

        event.preventDefault();

        let element = document.querySelector("#type");

        fetch("api/pokemon/type/" + element.value).then((res) => {
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
            <div>
                 <h2 className={styles.colorGreen}>Type</h2>
                 <form onSubmit={this.readType}>
                    <input id="type" type="text" />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default TypeSearch;
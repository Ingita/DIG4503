import Head from 'next/head'
import Link from 'next/link';
import TypeSearch from '../components/TypeSearch'
// import styles from '../components/TypeSearch/TypeSearch.module.css';

class Type extends React.Component {
    render(){
    return(
        <div>
            <Head>
              <title>
                Type Page
                </title>
             </Head>

                <TypeSearch/>

                    <div className={styles.pd}>
                   <Link  href="/">
                     <a className={styles.lk}>Home</a>
                   </Link>
                   </div>
        </div>
    
    );
  }
}
export default Type
  
import Head from 'next/head'
import Link from 'next/link';
import IdSearch from '../components/IdSearch';
// import styles from '../components/IdSearch/IdSearch.module.css';

class Id extends React.Component {
    render(){
    return(
        <div>
            <Head>
               <title>
                Id Page
               </title>
             </Head>
            
                <IdSearch/>
                    <div className={styles.pd}>
                   <Link  href="/">
                     <a className={styles.lk}>Home</a>
                   </Link>
                   </div>
      </div>
    );
  }
}
export default Id
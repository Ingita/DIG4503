import Head from 'next/head'
import Link from 'next/link';
import NameSearch from '../components/NameSearch'
// import styles from '../components/NameSearch/NameSearch.module.css';


class Name extends React.Component {
    render(){
    return(
        <div>
            <Head>
              <title>
               Name Page
              </title>
            </Head>

                <NameSearch/>
                <div className={styles.pd}>
                   <Link  href="/">
                     <a className={styles.lk}>Home</a>
                   </Link>
                   </div>
    </div>
    );
  }
}
export default Name
import Head from 'next/head'
import Link from 'next/link';
// import styles from '../components/index.module.css'

class Home extends React.Component {
  render(){
  return(
      <div>
        <Head>
          <title>
            Home Page
          </title>
          </Head>

        <p className={styles.intro}>
          Hello welcome to the Pokemon API.
        </p>
      <div className={styles.nam}>
        <Link href="/name">
           <a className={styles.lk}>Name Page</a>
        </Link><br/>
        </div>

        <div className={styles.id}>
       <Link href="/id">
           <a className={styles.lk}>Id Page</a>
        </Link><br/>
        </div>

        <div className={styles.typ}>
        <Link href="/type">
           <a className={styles.lk}>Type Page</a>
        </Link><br/>
        </div>

        </div>
  
  );
 }
}
export default Home
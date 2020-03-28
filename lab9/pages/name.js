import Head from 'next/head';
import Link from 'next/link';
import NameSearch from '../components/NameSearch';

// function Home(){
//     return(
//       <div>
//         <Head>
//           <title>Lab9</title>
//         </Head>
//         <Link href="/type">
//         <a>Type Search</a>
//         </Link>
//         <Link href="/id">
//         <a>Id Search</a>
//         </Link>
//       </div>
//     );
//   }
//   export default Home;

  class Name extends React.Component {
    render() {
    
      return (
        <div>
          <Head>
          <title>Lab9</title>
          </Head>
          <h2>Name Search</h2>
          <NameSearch  />
         <div id = "reportingArea"></div>
         <div>


          <p>Another Pages</p>
        <Link href="/type">
        <a>Type Search</a>
        </Link>
        </div>
        <Link href="/id">
        <a>Id Search</a>
        </Link>
      </div>
      );
    
    }
    }
    export default Name;
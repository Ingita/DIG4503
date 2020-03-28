import Head from 'next/head';
import Link from 'next/link';
import TypeSearch from '../components/TypeSearch';

// function Home(){
//     return(
//       <div>
//         <Head>
//           <title>Lab9</title>
//         </Head>
//         <Link href="/id">
//         <a>Id Search</a>
//         </Link>
//         <Link href="/name">
//         <a>Name Search</a>
//         </Link>
//       </div>
//     );
//   }
//   export default Home;


  class Type extends React.Component {
    render() {
    
      return (
        <div>
          <Head>
          <title>Lab9</title>
          </Head>
          <h2>Type Search</h2>
          <TypeSearch  />
         <div id = "reportingArea"></div>
         <div>


          <p>Another Pages</p>
          <Link href="/name">
        <a>Name Search</a>
        </Link>
      </div>
        <Link href="/id">
        <a>Id Search</a>
        </Link>
      </div>
      );
    
    }
    }
    export default Type;
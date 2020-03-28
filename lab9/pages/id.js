import Head from 'next/head';
import Link from 'next/link';
import IdSearch from '../components/IdSearch';

// function Home(){
//     return(
//       <div>
//         <Head>
//           <title>Lab9</title>
//         </Head>
//         <div>
//           <p></p>
//         <Link href="/type">
//         <a>Type Search</a>
//         </Link>
//         </div>
//         <Link href="/name">
//         <a>Name Search</a>
//         </Link>
//       </div>
      
//     );
//   }
//   export default Home;


  class Id extends React.Component {
    render() {
    
      return (
        <div>
          <Head>
          <title>Lab9</title>
          </Head>
          <div>
          <h2>Id Search</h2>
          <IdSearch  />
          <br/>
         <div id = "reportingArea"></div>
          </div>


         <div>
          <p>Another Pages</p>
        <Link href="/type">
        <a>Type Search</a>
        </Link>
        </div>
        <Link href="/name">
        <a>Name Search</a>
        </Link>
      </div> 
      );
    
    }
    }
    export default Id;
 
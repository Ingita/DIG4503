import Head from 'next/head';
import IdSearch from '../components/IdSearch';
import NameSearch from '../components/NameSearch';


class Home extends React.Component {
render() {

  return (
    <div>
      <h2>Search</h2>
      <NameSearch />
      <IdSearch  />
      
     <div id = "reportingArea"></div>
    </div>
  );

}
}
export default Home;

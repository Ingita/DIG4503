import React from 'react';
import HomePageTitle from "../HomePageTitle";
import"./index.css";

class HomePage extends React.Component {
    render(){
        return (
             <div>
            <p className="homePage">{this.props.firstName}</p>
               <HomePageTitle></HomePageTitle>
            </div>
            
        );
    }
}

export default HomePage;

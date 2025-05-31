import React from "react";

//include images into your bundle
//  import rigoImage from "../../img/rigo-baby.jpg";
import  NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";
 

//create your first component
  const Home = () => {


	return (
		<div className="container">
		<NavBar/>
		<Jumbotron/>
		<Card/>
		<Footer/>


		</div>
		 
		
		
	);
};

export default Home;
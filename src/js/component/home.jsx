import React from "react";

//include images into your bundle
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-6 col-sm-12">
							<Card />
						</div>
						<div className="col-lg-3 col-md-6 col-sm-12">
							<Card />
						</div>
						<div className="col-lg-3 col-md-6 col-sm-12">
							<Card />
						</div>
						<div className="col-lg-3 col-md-6 col-sm-12">
							<Card />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;

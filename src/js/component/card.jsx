import React from "react";

const Card = () => {
	return (
		<div className="card text-center" style={{ marginBottom: "1rem" }}>
			<img
				src="https://cdn.pixabay.com/photo/2016/08/17/22/23/zap-1601678__340.png"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">Zap! Card</h5>
				<p className="card-text ">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua.
				</p>
				<a href="#" className="btn btn-primary">
					Go to Zap place
				</a>
			</div>
		</div>
	);
};
export default Card;

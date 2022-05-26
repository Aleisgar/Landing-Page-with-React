import React from "react";

const Jumbotron = () => {
	return (
		<div
			className="jumbotron"
			style={{ margin: "2em 0em", padding: "2em" }}>
			<h1 className="display-4">A Warm Welcome!</h1>

			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua.
			</p>
			<a className="btn btn-primary btn-lg" href="#" role="button">
				Call to action!
			</a>
		</div>
	);
};

export default Jumbotron;

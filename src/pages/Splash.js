import React from "react";
import { Link } from "react-router-dom";

export default _ => (
	<>
		<h1>
			we design, create, and operate aquaponics systems for suburban backyards
			so that middle-class families can get more passive income and fresh,
			local, low-carbon-footprint food year-round
		</h1>

		<p>
			If you are interested in an installation or investing in our company,
			please <Link to="/contact">contact us!</Link>
		</p>
	</>
);

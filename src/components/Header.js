import React from "react";
import { Link } from "react-router-dom";

import Logo from "./Logo";

export default _ => (
	<>
		<Link to="/">
			<Logo />
		</Link>
		<nav>
			<Link to="/about">About</Link>
			<Link to="/technology">Technology</Link>
			<Link to="/contact">Contact</Link>
		</nav>
	</>
);

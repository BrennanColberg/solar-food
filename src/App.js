import "./App.scss";

import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Splash from "./pages/Splash";
import Error404 from "./pages/404";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default _ => (
	<Router>
		<>
			<header>
				<Header />
			</header>
			<main>
				<Switch>
					<Route exact path="/" component={Splash} />
					<Route path="/" component={Error404} />
				</Switch>
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	</Router>
);

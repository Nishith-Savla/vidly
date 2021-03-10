import React, { Component } from "react";
import Movies from "./components/Movies";
import "./App.css";
import Navbar from "./components/Navbar";
import { Redirect, Route, Switch } from "react-router";
import Customers from "./components/Customers";
import Rentals from "./components/Rentals";
import NotFound from "./components/NotFound";
import MovieForm from "./components/MovieForm";

export default class App extends Component {
	render() {
		return (
			<>
				<Navbar />
				<main class="container">
					<Switch>
						<Route path="/movies/:id" component={MovieForm} />
						<Route path="/movies" component={Movies} />
						<Route path="/customers" component={Customers} />
						<Route path="/rentals" component={Rentals} />
						<Route path="/not-found" component={NotFound} />
						<Redirect exact from="/" to="/movies" />
						<Redirect to="/not-found" />
					</Switch>
				</main>
			</>
		);
	}
}

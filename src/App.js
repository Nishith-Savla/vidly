import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import Customers from "./components/Customers";
import Rentals from "./components/Rentals";
import NotFound from "./components/NotFound";
import MovieForm from "./components/MovieForm";
import LoginForm from "./components/LoginForm";
import "./App.css";
import RegistrationForm from "./components/RegistrationForm";

export default class App extends Component {
	render() {
		return (
			<>
				<Navbar />
				<main className="container">
					<Switch>
						<Route path="/register" component={RegistrationForm} />
						<Route path="/login" component={LoginForm} />
						<Route path="/movies/new" component={MovieForm} />
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

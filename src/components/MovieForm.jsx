import React from "react";
import Joi from "joi";
import Form from "./common/Form";

export default class MovieForm extends Form {
	state = {
		data: { title: "", genre: "", numberInStock: 0, dailyRentalRate: 0 },
		errors: {},
	};

	schema = {
		title: Joi.string().label("Title").required(),
		genre: Joi.string().label("Genre").required(),
		numberInStock: Joi.number().min(0).label("Number In Stock").required(),
		dailyRentalRate: Joi.number().min(0).max(10).label("Daily Rental Rate").required(),
	};

	doSubmit = () => {
		this.props.history.push("/movies");
		console.log("Saved");
	};

	render() {
		return (
			<div>
				<h1>Movie Form</h1>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput("title", "Title")}
					{this.renderDropdown("genre", "Genre", ["Action", "Comedy", "Thriller"])}
					{this.renderInput("numberInStock", "Number In Stock", "number")}
					{this.renderInput("dailyRentalRate", "Rate", "number")}
					{this.renderSubmitButton("Save")}
				</form>
			</div>
		);
	}
}

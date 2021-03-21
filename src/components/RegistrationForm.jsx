import React from "react";
import Joi from "joi";
import Form from "./common/Form";

export default class RegistrationForm extends Form {
	state = {
		data: { username: "", password: "", name: "" },
		errors: {},
	};

	schema = {
		username: Joi.string()
			.email({ tlds: { allow: false } })
			.label("Username")
			.required(),
		password: Joi.string().label("Password").min(5).required(),
		name: Joi.string().label("Name").required(),
	};

	doSubmit = () => {
		// Call the server
		// const username = React.createRef(); const username = this.username.current.value;
		console.log("Registered");
	};

	render() {
		return (
			<div>
				<h1>Register</h1>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput("username", "Username", "email", "email")}
					{this.renderInput("password", "Password", "password", "new-password")}
					{this.renderInput("name", "Name", "text", "name")}
					{this.renderSubmitButton("Register")}
				</form>
			</div>
		);
	}
}

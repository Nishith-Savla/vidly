import React from "react";
import Joi from "joi";
import Form from "./common/Form";

export default class LoginForm extends Form {
	state = {
		data: { username: "", password: "" },
		errors: {},
	};

	schema = {
		username: Joi.string().required().label("Username"),
		password: Joi.string().required().label("Password"),
	};

	doSubmit = () => {
		// Call the server
		// const username = React.createRef(); const username = this.username.current.value;
		console.log("Submitted");
	};

	render() {
		return (
			<div>
				<h1>Login</h1>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput("username", "Username", "text", "username")}
					{this.renderInput("password", "Password", "password", "current-password")}
					{this.renderSubmitButton("Login")}
				</form>
			</div>
		);
	}
}

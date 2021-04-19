import { Component } from "react";
import Joi from "joi";
import Input from "./Input";
import Dropdown from "./Dropdown";

export default class Form extends Component {
	state = {
		data: {},
		errors: {},
	};

	validate = () => {
		const options = { abortEarly: false };
		const { error } = Joi.object(this.schema).validate(this.state.data, options);

		if (!error) return null;

		const errors = {};
		error.details.map((item) => (errors[item.path[0]] = item.message));
		return errors;
	};

	validateProperty = ({ name, value }) => {
		const obj = { [name]: value };
		const schema = { [name]: this.schema[name] };
		const { error } = Joi.object(schema).validate(obj);

		return error ? error.details[0].message : null;
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const errors = this.validate();
		this.setState({ errors: errors || {} });
		if (errors) return;

		this.doSubmit();
	};

	handleChange = ({ target: input }) => {
		const errors = { ...this.state.errors };
		const errorMessage = this.validateProperty(input);
		if (errorMessage) errors[input.name] = errorMessage;
		else delete errors[input.name];

		const data = { ...this.state.data };
		data[input.name] = input.value;
		this.setState({ data, errors });
	};

	renderInput = (name, label, type = "text", autoComplete = undefined) => (
		<Input
			type={type}
			name={name}
			label={label}
			value={this.state.data[name]}
			onChange={this.handleChange}
			error={this.state.errors[name]}
			autoComplete={autoComplete}
		/>
	);

	renderDropdown = (name, label, values) => {
		return (
			<Dropdown
				name={name}
				label={label}
				values={values}
				onChange={this.handleChange}
				error={this.state.errors[name]}
			/>
		);
	};

	renderSubmitButton(label) {
		return (
			<button disabled={this.validate()} className="btn btn-primary">
				{label}
			</button>
		);
	}
}

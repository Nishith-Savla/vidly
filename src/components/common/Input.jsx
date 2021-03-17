import React from "react";

export default function Input({
	name,
	label,
	value,
	onChange,
	type = "text",
	autoComplete = undefined,
	error,
}) {
	return (
		<div className="form-group">
			<label htmlFor={name}>{label}</label>
			<input
				// ref={this.password}
				type={type}
				id={name}
				name={name}
				className="form-control"
				value={value}
				onChange={onChange}
				autoComplete={autoComplete}
			/>
			{error && <div className="alert alert-danger">{error}</div>}
		</div>
	);
}

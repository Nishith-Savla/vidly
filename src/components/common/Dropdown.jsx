import React from "react";

export default function Dropdown({ name, label, values, onChange, error }) {
	return (
		<div className="form-group">
			<label htmlFor={name}>{label}</label>
			<select id={name} className="custom-select" onSelect={onChange}>
				<option value=""></option>
				{values.map((value) => (
					<option key={value} value={value}>
						{value}
					</option>
				))}
			</select>
			{error && <div className="alert alert-danger">{error}</div>}
		</div>
	);
}

import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
export default class TableBody extends Component {
	// Generate the key attribute for the tr by appending item's value property with either the path or the key of the column
	createKey = (item, column, valueProperty = this.props.valueProperty) => {
		return item[valueProperty] + (column.path || column.key);
	};

	// Render the tag inside the content if present alse the value in item at column.path e.g. item[column.path]
	renderCell = (item, column) => {
		return column.content ? column.content(item) : _.get(item, column.path); // using _.get for nested get for genre.name
	};

	render() {
		const { data, columns, valueProperty } = this.props;
		return (
			<tbody>
				{data.map((item) => (
					<tr key={item[valueProperty]}>
						{columns.map((column) => (
							<td key={this.createKey(item, column)}>
								{this.renderCell(item, column)}
							</td>
						))}
					</tr>
				))}
			</tbody>
		);
	}
}

TableBody.defaultProps = {
	valueProperty: "_id",
};

TableBody.propTypes = {
	data: PropTypes.array.isRequired,
	columns: PropTypes.array.isRequired,
	valueProperty: PropTypes.string.isRequired,
};

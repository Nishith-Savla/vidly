import React, { Component } from "react";
import _ from "lodash";

export default class TableBody extends Component {
	createKey = (item, column, valueProperty = this.props.valueProperty) => {
		return item[valueProperty] + (column.path || column.key);
	};

	renderCell = (item, column) => {
		return column.content ? column.content(item) : _.get(item, column.path);
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
	textProperty: "name",
};

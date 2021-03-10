import React from "react";
import PropTypes from "prop-types";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

export default function Table({ columns, sortColumn, onSort, data }) {
	return (
		<table className="table">
			<TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
			<TableBody columns={columns} data={data} />
		</table>
	);
}

Table.propTypes = {
	columns: PropTypes.arrayOf(PropTypes.object).isRequired,
	sortColumn: PropTypes.object.isRequired,
	onSort: PropTypes.func.isRequired,
	data: PropTypes.array.isRequired,
};

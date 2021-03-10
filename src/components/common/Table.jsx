import React from "react";
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

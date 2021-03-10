import React, { Component } from "react";
import PropTypes from "prop-types";
import Like from "./common/Like";
import Table from "./common/Table";
import { Link } from "react-router-dom";

export default class MoviesTable extends Component {
	columns = [
		{
			path: "title",
			label: "Title",
			content: (movie) => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>,
		},
		{ path: "genre.name", label: "Genre" },
		{ path: "numberInStock", label: "Stock" },
		{ path: "dailyRentalRate", label: "Rate" },
		{
			key: "like",
			content: (movie) => (
				<Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
			),
		},
		{
			key: "delete",
			content: (movie) => (
				<button
					onClick={() => this.props.onDelete(movie._id)}
					className="btn btn-danger btn-sm">
					Delete
				</button>
			),
		},
	];

	render() {
		return (
			<Table
				columns={this.columns}
				sortColumn={this.props.sortColumn}
				onSort={this.props.onSort}
				data={this.props.movies}
			/>
		);
	}
}

MoviesTable.propTypes = {
	movies: PropTypes.array.isRequired,
	onSort: PropTypes.func.isRequired,
	onLike: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired,
	sortColumn: PropTypes.object.isRequired,
};

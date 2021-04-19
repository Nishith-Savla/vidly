import React, { Component } from "react";
import { paginate } from "../utils/paginate";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
// import Like from "./common/Like";
import Pagination from "./common/Pagination";
import ListGroup from "./common/ListGroup";
import MoviesTable from "./MoviesTable";
import _ from "lodash";

export default class Movies extends Component {
	state = {
		movies: [],
		genres: [],
		currentPage: 1,
		pageSize: 4,
		selectedGenre: {},
		sortColumn: { path: "title", order: "asc" },
	};

	constructor() {
		super();
		this.allGenre = { _id: "", name: "All Genres" };
		this.state.selectedGenre = this.allGenre;
	}

	componentDidMount() {
		const genres = [this.allGenre, ...getGenres()];
		this.setState({ movies: getMovies(), genres });
	}

	handleSort = (sortColumn) => {
		this.setState({ sortColumn });
	};

	handleLike = (movie) => {
		const movies = [...this.state.movies];
		const index = movies.indexOf(movie);
		movies[index] = { ...movies[index] };
		movies[index].liked = !movies[index].liked;
		this.setState({ movies });
	};

	handleDelete = (_id) => {
		deleteMovie(_id);
		this.setState({ movies: getMovies() });
	};

	handlePageChange = (page) => {
		this.setState({ currentPage: page });
	};

	handleGenreSelect = (genre) => {
		this.setState({ selectedGenre: genre, currentPage: 1 });
	};

	handleNewMovieBtn = () => {
		this.props.history.push("/movies/new");
	};

	getPagedData() {
		const { currentPage, pageSize, sortColumn, selectedGenre, movies: allMovies } = this.state;

		const filtered = selectedGenre._id
			? allMovies.filter((movie) => movie.genre._id === selectedGenre._id)
			: allMovies;

		const totalCount = filtered.length;
		!totalCount && <p>There are no movies in this database</p>;

		const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
		const movies = paginate(sorted, currentPage, pageSize);

		return { totalCount, movies };
	}

	render() {
		const { totalCount, movies } = this.getPagedData();

		return (
			<div className="row">
				<div className="col-3">
					<ListGroup
						items={this.state.genres}
						selectedItem={this.state.selectedGenre}
						onItemSelect={this.handleGenreSelect}
						// valueProperty="_id"
						// textProperty="name"
					/>
				</div>

				<div className="col">
					<button className="btn btn-primary mb-2" onClick={this.handleNewMovieBtn}>
						New Movie
					</button>
					<p>Showing {totalCount} movies from this database</p>
					<MoviesTable
						movies={movies}
						onSort={this.handleSort}
						onLike={this.handleLike}
						onDelete={this.handleDelete}
						sortColumn={this.state.sortColumn}
					/>
					<Pagination
						itemsCount={totalCount}
						pageSize={this.state.pageSize}
						currentPage={this.state.currentPage}
						onPageChange={this.handlePageChange}
					/>
				</div>
			</div>
		);
	}
}

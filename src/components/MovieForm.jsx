import React from "react";

export default function MovieForm({ match, history }) {
	return (
		<div className="container">
			<h1>Movie Form {match.params.id}</h1>
			<button className="btn btn-primary" onClick={() => history.push("/movies")}>
				Save
			</button>
		</div>
	);
}

import "font-awesome/css/font-awesome.min.css";

/*
import React, { Component } from "react";
export default class Like extends Component {
	state = {
		liked: false,
	};

	

	handleClick = () => {
		this.setState({ liked: !this.state.liked });
	};

	render() {
		const iconClass = this.state.liked ? "fa fa-heart" : "fa fa-heart-o";
		return <i onClick={this.handleClick} className={iconClass}></i>;
	}
}
*/

import React from "react";

export default function Like({ liked, onClick }) {
	let iconClass = "fa fa-heart";
	if (!liked) iconClass += "-o";
	return (
		<button onClick={onClick} style={{ border: "none", backgroundColor: "transparent" }}>
			<i className={iconClass} style={{ cursor: "pointer" }}></i>
		</button>
	);
}

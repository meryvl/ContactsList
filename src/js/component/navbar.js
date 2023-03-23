import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar mb-3">
			<Link to="/">
				<span className="navbar-brand mb-8 h1">List Contacts</span>
			</Link>
			<div className="ml-auto">
				<Link to="/addContact">
					<button className="btn btn-primary">Add contact</button>
				</Link>
			</div>
		</nav>
	);
};

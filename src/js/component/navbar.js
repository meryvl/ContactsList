import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar mb-4 ">
			
			<Link to="/">
			<h1 className="mx-3" >Agenda Presonal</h1>
			</Link>
			
		</nav>
	);
};

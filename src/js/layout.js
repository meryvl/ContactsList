import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";

import { Single } from "./views/single";
import injectContext from "./store/appContext";
import AppContextProvider from "./store/context";
import { Navbar } from "./component/navbar.js";
import AddContact from "./views/AddContact.js";
//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<AppContextProvider>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
				
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/addContact" element={<AddContact />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					
				</ScrollToTop>
			</BrowserRouter>
			</AppContextProvider>
		</div>
	);
};

export default injectContext(Layout);

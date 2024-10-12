import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { AddContact } from "./views/addContact";
import { EditContact } from "./views/editContact";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

// Create a 404 Not Found component
const NotFound = () => <h1>Page Not Found</h1>;

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<BrowserRouter basename={basename}>
			<ScrollToTop>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/add-contact" element={<AddContact />} />
					<Route path="/edit/:id" element={<EditContact />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				<Footer />
			</ScrollToTop>
		</BrowserRouter>
	);
};

export default injectContext(Layout);

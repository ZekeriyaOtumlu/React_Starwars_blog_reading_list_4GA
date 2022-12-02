import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";



import { Home } from "./pages/home";
import  Planet  from "./pages/planet";
import  Character  from "./pages/character";
import {getPlanet, getAllPlanets, getAllCharacters, getCharacter} from "./swapi";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	// const basename = process.env.BASENAME || "";
	// <BrowserRouter basename={basename}>

getAllCharacters()
	return (
		<div>
			<BrowserRouter >
			
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/character/:charid" element={<Character />} />
						<Route path="/planet/:planetid" element={<Planet />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
				
			</BrowserRouter>
		</div>
	);
};

export default Layout;

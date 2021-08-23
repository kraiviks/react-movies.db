import React, { useState, useEffect } from "react";
import Title from "../title/title";
import "./app.css";
import {
	Container,
	Card,
	CardTitle,
	CardText,
	CardImg,
	CardImgOverlay,
	Input,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
} from "reactstrap";
import axios from "axios";

const App = () => {
	const [data, setData] = useState([]);
	useEffect((v) => getApi("The fast and"), []);
	const getApi = async (film) => {
		return await axios(
			`https://www.omdbapi.com/?s=${film}&apikey=d869b50f`
		).then((resp) => setData(resp.data.Search));
	};

	const validData = data ? data : [];

	const filmsArr = validData.map((item, i) => {
		return (
			<Card inverse key={i}>
				<CardImg
					width="100%"
					src={
						item.Poster !== "N/A"
							? item.Poster
							: process.env.PUBLIC_URL + "/Noimage.svg"
					}
					alt="Card image cap"
				/>
				<CardImgOverlay>
					<CardTitle tag="h5">{item.Title}</CardTitle>
				</CardImgOverlay>
				<CardText>{item.Type}</CardText>
				<CardText>{item.Year}</CardText>
			</Card>
		);
	});

	return (
		<div className="app">
			<Container>
				<Title />
				
				<InputGroup>
					<InputGroupAddon addonType="prepend">
						<InputGroupText>Enter film name</InputGroupText>
					</InputGroupAddon>
					<Input
						placeholder="film"
						onChange={(e) => getApi(e.target.value)}
					/>
				</InputGroup>
				<div className="card-box">{filmsArr}</div>
			</Container>
		</div>
	);
};

export default App;

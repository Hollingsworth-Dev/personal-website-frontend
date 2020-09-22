import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../../components/Home/Home';

const Main = () => {
	const [renderHome, setRenderHome] = useState(false);
	const renderHomeHandler = () => {
		setRenderHome(!renderHome);
	};
	return (
		<div>
			<button onClick={renderHomeHandler}>
				<h1>Caleb Hollingsworth</h1>
				<h2>Software Developer</h2>
			</button>
			<div>{renderHome === true && <Home />}</div>
		</div>
	);
};

export default Main;

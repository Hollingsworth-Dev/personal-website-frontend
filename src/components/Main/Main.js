import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../../components/Home/Home';
import './Main.css';

const Main = () => {
	const [renderHome, setRenderHome] = useState(false);
	const renderHomeHandler = () => {
		setRenderHome(!renderHome);
	};
	return (
		<div className='main-page'>
			<div className='main-content'>
				<button className='main-button' onClick={renderHomeHandler}>
					<h1>Caleb Hollingsworth</h1>
					<h2>Software Developer</h2>
				</button>

				<div>{renderHome === true && <Home />}</div>
			</div>
		</div>
	);
};

export default Main;

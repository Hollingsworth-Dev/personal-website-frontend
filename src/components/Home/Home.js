import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import About from '../About/About';
import Projects from '../Projects/Projects';

const Home = () => {
	const [renderAbout, setRenderAbout] = useState(false);
	const [renderProjects, setRenderProjects] = useState(false);
	const renderAboutHandler = () => {
		setRenderAbout(!renderAbout);
		setRenderProjects(false);
	};
	const renderProjectsHandler = () => {
		setRenderProjects(!renderProjects);
		setRenderAbout(false);
	};

	return (
		<div>
			<button onClick={renderAboutHandler}>About</button>

			<button onClick={renderProjectsHandler}>Projects</button>
			{renderAbout === true && (
				<div>
					{' '}
					<About />
				</div>
			)}
			{renderProjects === true && (
				<div>
					{' '}
					<Projects />
				</div>
			)}
		</div>
	);
};

export default Home;

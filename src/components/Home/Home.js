import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import About from '../About/About';
import Projects from '../Projects/Projects';
import './Home.css';

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
		<div className='home-page'>
			<div className='home-buttons'>
				<button className='home-about' onClick={renderAboutHandler}>
					About
				</button>

				<button className='home-projects' onClick={renderProjectsHandler}>
					Projects
				</button>
			</div>
			<div className='about-page'>
				{renderAbout === true && (
					<div>
						{' '}
						<About />
					</div>
				)}
			</div>
			<div className='projects-page'>
				{renderProjects === true && (
					<div>
						{' '}
						<Projects />
					</div>
				)}
			</div>
		</div>
	);
};

export default Home;

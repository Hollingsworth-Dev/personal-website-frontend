import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import About from '../About/About';
import Projects from '../Projects/Projects';
import './Home.css';

const Home = (props) => {
	return (
		<div className='home-page'>
			<div className='home-buttons'>
				<button className='home-about' onClick={props.renderAboutHandler}>
					About
				</button>

				<button className='home-projects' onClick={props.renderProjectsHandler}>
					Projects
				</button>
			</div>
			<div className='about-page'>
				{props.renderAbout === true && (
					<div>
						{' '}
						<About
							handleShowModal={props.handleShowModal}
							renderContactHandler={props.renderContactHandler}
							renderResumeHandler={props.renderResumeHandler}
							renderTechsHandler={props.renderTechsHandler}
						/>
					</div>
				)}
			</div>
			<div className='projects-page'>
				{props.renderProjects === true && (
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

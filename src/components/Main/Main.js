import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../../components/Home/Home';
import Contact from '../About/Contact/Contact';
import Resume from '../About/Resume/Resume';
import Technologies from '../About/Technologies/Technologies';
import './Main.css';

const Main = () => {
	const [renderHome, setRenderHome] = useState(false);
	const renderHomeHandler = () => {
		setRenderHome(!renderHome);
	};
	//About section hooks
	const [renderContact, setRenderContact] = useState(false);
	const [renderResume, setRenderResume] = useState(false);
	const [renderTechs, setRenderTechs] = useState(false);
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

	const renderContactHandler = () => {
		setRenderContact(!renderContact);
		setRenderResume(false);
		setRenderTechs(false);
	};
	const renderResumeHandler = () => {
		setRenderResume(!renderResume);
		setRenderContact(false);
		setRenderTechs(false);
	};
	const renderTechsHandler = () => {
		setRenderTechs(!renderTechs);
		setRenderContact(false);
		setRenderResume(false);
	};

	//Projects section hooks

	return (
		<div className='main-page'>
			<div className='main-content'>
				<button className='main-button' onClick={renderHomeHandler}>
					<h1>Caleb Hollingsworth</h1>
					<h2>Software Developer</h2>
				</button>

				<div>
					{renderHome === true && (
						<Home
							renderAbout={renderAbout}
							renderProject={renderProjects}
							renderAboutHandler={renderAboutHandler}
							renderProjectsHandler={renderProjectsHandler}
							renderContactHandler={renderContactHandler}
							renderResumeHandler={renderResumeHandler}
							renderTechsHandler={renderTechsHandler}
						/>
					)}
				</div>
			</div>
			{renderAbout === true && renderContact === true && (
				<div className='contact-component'>
					{' '}
					<Contact />
				</div>
			)}
			{renderAbout === true && renderResume === true && (
				<div>
					{' '}
					<Resume />
				</div>
			)}
			{renderAbout === true && renderTechs === true && (
				<div>
					{' '}
					<Technologies />
				</div>
			)}
		</div>
	);
};

export default Main;

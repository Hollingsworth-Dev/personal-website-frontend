import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Contact from './Contact/Contact';
import Resume from './Resume/Resume';
import Technologies from './Technologies/Technologies';
import './About.css';

const About = () => {
	const [renderContact, setRenderContact] = useState(false);
	const [renderResume, setRenderResume] = useState(false);
	const [renderTechs, setRenderTechs] = useState(false);
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
	return (
		<div className='about-list'>
			<div className='about-list-buttons'>
				<button className='about-contact' onClick={renderContactHandler}>
					contact
				</button>
				<button className='about-resume' onClick={renderResumeHandler}>
					resumé
				</button>
				<button className='about-tech' onClick={renderTechsHandler}>
					technologies
				</button>
			</div>
			<div>
				{renderContact === true && (
					<div>
						{' '}
						<Contact />
					</div>
				)}
				{renderResume === true && (
					<div>
						{' '}
						<Resume />
					</div>
				)}
				{renderTechs === true && (
					<div>
						{' '}
						<Technologies />
					</div>
				)}
			</div>
		</div>
	);
};

export default About;

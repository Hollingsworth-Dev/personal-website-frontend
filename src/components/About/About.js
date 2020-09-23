import React, { useState, useRef } from 'react';
import './About.css';

const About = (props) => {
	return (
		<div className='about-group'>
			<div className='about-list'>
				<div className='about-list-buttons'>
					<button
						className='about-contact'
						onClick={props.renderContactHandler}>
						contact
					</button>
					<button className='about-resume' onClick={props.renderResumeHandler}>
						resumé
					</button>
					<button className='about-tech' onClick={props.renderTechsHandler}>
						technologies
					</button>
				</div>
			</div>
		</div>
	);
};

export default About;

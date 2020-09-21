import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
	return (
		<div className='about-list'>
			<Link to='/about/contact'>
				<button>contact</button>
			</Link>
			<Link to='/about/resume'>
				<button>resumé</button>
			</Link>
			<Link to='/about/technologies'>
				<button>technologies</button>
			</Link>
		</div>
	);
};

export default About;

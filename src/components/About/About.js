import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
	return (
		<div>
			<Link to='home/about/contact'>
				<button>contact</button>
			</Link>
			<Link to='home/about/resume'>
				<button>resumé</button>
			</Link>
			<Link to='home/about/github'>
				<button>GitHub</button>
			</Link>
			<Link to='home/about/technologies'>
				<button>technologies</button>
			</Link>
		</div>
	);
};

export default About;

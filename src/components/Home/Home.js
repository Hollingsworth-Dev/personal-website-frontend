import React from 'react';
import { Link } from 'react-router-dom';
import About from '../About/About';
import Projects from '../Projects/Projects';

const Home = () => {
	return (
		<div>
			<Link to='/about'>
				<button>About</button>
			</Link>
			<Link to='/projects'>
				<button>Projects</button>
			</Link>
		</div>
	);
};

export default Home;

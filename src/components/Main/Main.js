import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../../components/Home/Home';
import About from '../../components/About/About';
import Projects from '../../components/Projects/Projects';

const Main = () => {
	return (
		<div>
			<Link to='/home'>
				<div>
					<h1>Caleb Hollingsworth</h1>
					<h2>Software Developer</h2>
				</div>
			</Link>
			<div>
				<Route path='/home' component={Home} />
				<Route path='/home/about' component={About} />
				<Route path='/home/projects' component={Projects} />
			</div>
		</div>
	);
};

export default Main;

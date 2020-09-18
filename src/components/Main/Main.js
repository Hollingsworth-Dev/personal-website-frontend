import React from 'react';
import Home from '../../components/Projects/Projects';
import About from '../../components/About/About';
import Projects from '../../components/Projects/Projects';

const Main = () => {
	return (
		<div>
			<div>Main Component</div>
			<div>
				<Home />
				<About />
				<Projects />
			</div>
		</div>
	);
};

export default Main;

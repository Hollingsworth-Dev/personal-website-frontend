import React from 'react';
import { Link } from 'react-scroll';
import './Projects.css';

const Projects = (props) => {
	return (
		<div className='projects-list' id='projects'>
			<div className='projects-buttons'>
				<Link
					activeClass='active'
					to='simon'
					spy={true}
					smooth={true}
					offset={-300}
					duration={500}>
					<button className='projects-simon'>SIMON</button>
				</Link>
				<Link
					activeClass='active'
					to='muse'
					spy={true}
					smooth={true}
					offset={-300}
					duration={500}>
					<button className='projects-simon'>MUSE</button>
				</Link>
				<Link
					activeClass='active'
					to='playlist'
					spy={true}
					smooth={true}
					offset={-300}
					duration={500}>
					<button className='projects-simon'>PlayList</button>
				</Link>
				<Link
					activeClass='active'
					to='goodegg'
					spy={true}
					smooth={true}
					offset={-300}
					duration={500}>
					<button className='projects-simon'>GoodEgg</button>
				</Link>
			</div>
		</div>
	);
};

export default Projects;

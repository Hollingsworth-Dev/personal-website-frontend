import React from 'react';
import './NavBar.css';
import About from '../About/About';
import Projects from '../Projects/Projects';

const NavBar = (props) => {
	return (
		<div className='navbar'>
			<main className='navbar-items'>
				<button onClick={props.handleShowHome} className='nav-home'>
					Home
				</button>
				<button onClick={props.renderAboutHandler} className='nav-about'>
					About
				</button>
				<button onClick={props.renderProjectsHandler} className='nav-projects'>
					Projects
				</button>
			</main>
		</div>
	);
};

export default NavBar;

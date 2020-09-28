import React from 'react';
import './NavBar.css';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Home from '../Home/Home';
import { Link } from 'react-scroll';

const NavBar = (props) => {
	return (
		<div className='navbar'>
			<main className='navbar-items'>
				<Link
					activeClass='active'
					to='home'
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}>
					<button class='nav-home'>Home</button>
				</Link>
				<Link
					activeClass='active'
					to='welcome'
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}>
					<button className='nav-welcome'>Welcome</button>
				</Link>

				<Link
					activeClass='active'
					to='about'
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}>
					<button className='nav-about'>About</button>
				</Link>

				<Link
					activeClass='active'
					to='projects'
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}>
					<button className='nav-projects'>Projects</button>
				</Link>
			</main>
		</div>
	);
};

export default NavBar;

import React, { Component } from 'react';
import './NavBar.css';
import { Link } from 'react-scroll';

const timeoutFunction = () => {
	setTimeout(scrollToWelcome, 900);
};
const scrollToWelcome = () => {
	window.scroll({
		top: 800,
		behavior: 'smooth',
	});
};
class NavBar extends Component {
	constructor() {
		super();
		this.state = {};
	}
	componentDidMount() {
		timeoutFunction();
	}
	render() {
		return (
			<div className='navbar'>
				<main className='navbar-items'>
					<Link
						activeClass='active'
						to='home'
						spy={true}
						smooth={true}
						offset={-500}
						duration={500}>
						<button
							className='nav-home'
							onClick={this.props.renderPopOutHandler}>
							Home
						</button>
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
	}
}

export default NavBar;

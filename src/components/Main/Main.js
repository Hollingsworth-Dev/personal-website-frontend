import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../../components/Home/Home';
import About from '../../components/About/About';
import Projects from '../../components/Projects/Projects';
import Contact from '../About/Contact/Contact';
import Resume from '../About/Resume/Resume';
import Technologies from '../About/Technologies/Technologies';
import Goodegg from '../Projects/Goodegg/Goodegg';
import Muse from '../Projects/Muse/Muse';
import Playlist from '../Projects/Playlist/Playlist';
import Simon from '../Projects/Simon/Simon';

const Main = () => {
	return (
		<div>
			<Link to='/home' exact>
				<div>
					<h1>Caleb Hollingsworth</h1>
					<h2>Software Developer</h2>
				</div>
			</Link>
			<div>
				<Route path='/home' component={Home} />
				<Route path='/about' component={About} />
				<Route path='/projects' component={Projects} />
				<Route path='/about/contact' component={Contact} />
				<Route path='/about/resume' component={Resume} />
				<Route path='/about/technologies' component={Technologies} />
				<Route path='/projects/goodegg' component={Goodegg} />
				<Route path='/projects/muse' component={Muse} />
				<Route path='/projects/playlist' component={Playlist} />
				<Route path='/projects/simon' component={Simon} />
			</div>
		</div>
	);
};

export default Main;

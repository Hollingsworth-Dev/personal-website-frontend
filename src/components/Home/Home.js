import React from 'react';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Headshot from '../../Images/Headshot/Headshot.jpg';
import './Home.css';

const Home = (props) => {
	return (
		<div className='home-page'>
			<main>
				<h2>meet caleb</h2>
				<img src={Headshot} alt='headshot' />
				<p>Small bio goes here...</p>
				<div>skills go here...</div>
			</main>
		</div>
	);
};

export default Home;

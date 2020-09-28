import React from 'react';
import Headshot from '../../Images/Headshot/Headshot.jpg';
import './Home.css';

const Home = () => {
	return (
		<div className='home-page' id='welcome'>
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

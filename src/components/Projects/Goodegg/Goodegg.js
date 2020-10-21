import React from 'react';
import Home from '../../../Images/GoodEgg/GoodEgg-home.png';
import Incident from '../../../Images/GoodEgg/GoodEgg-incidents view.png';
import Officer from '../../../Images/GoodEgg/GoodEgg-officer view.png';
import Profile from '../../../Images/GoodEgg/GoodEgg-profile.png';
import {
	AiOutlineLink,
	AiOutlineGithub,
	AiOutlineMedium,
} from 'react-icons/ai';
import './Goodegg.css';

const Goodegg = () => {
	return (
		<div className='goodegg-page' id='goodegg'>
			<h1>GoodEgg</h1>
			<main className='goodegg-content'>
				<div className='goodegg-message'>
					<h4>A full-stack application using React.js and Django</h4>
					<p>
						This is a police accountability application used to track and report
						'GoodEggs' and 'BadApples' within your community. I built this app
						with a team of engineers hoping to bring a new, relevant, and useful
						application to the world. It includes user authentication, an API
						with police forces, officers, and the GoodEggs and BadApples on
						those forces.
					</p>

					<div className='goodegg-icons'>
						<div>
							<a
								href='https://salty-cliffs-88075.herokuapp.com/'
								target='_blank'
								rel='noopener noreferrer'>
								<AiOutlineLink size='1.5em' />
							</a>
							<p>Link to live application</p>
						</div>
						<div>
							<a
								href='https://github.com/teamscrum2000'
								target='_blank'
								rel='noopener noreferrer'>
								<AiOutlineGithub size='1.5em' />
							</a>
							<p>Link to Github repository</p>
						</div>
						<div>
							<a
								href='https://medium.com/@caleb.hollingsworth.dev/goodegg-dev-b9425d1b9378'
								target='_blank'
								rel='noopener noreferrer'>
								<AiOutlineMedium size='1.5em' />
							</a>
							<p>Link to Medium article</p>
						</div>
					</div>
				</div>
				<img className='goodegg-home' src={Home} alt='goodegg'></img>
				<img className='goodegg-incident' src={Incident} alt='goodegg'></img>
				<img className='goodegg-officer' src={Officer} alt='goodegg'></img>
				<img className='goodegg-profile' src={Profile} alt='goodegg'></img>
			</main>
		</div>
	);
};

export default Goodegg;

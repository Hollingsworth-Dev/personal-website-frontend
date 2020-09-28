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
					<p>A full-stack application using React.js and Django</p>
					<p>
						A police accountability app to track and report 'GoodEggs' and
						'BadApples' within your community.
					</p>

					<div className='goodegg-icons'>
						<a
							href='https://salty-cliffs-88075.herokuapp.com/'
							target='_blank'
							rel='noopener noreferrer'>
							<AiOutlineLink size='lg' />
						</a>
						<a
							href='https://github.com/teamscrum2000'
							target='_blank'
							rel='noopener noreferrer'>
							<AiOutlineGithub size='lg' />
						</a>
						<a
							href='https://medium.com/@caleb.hollingsworth.dev/goodegg-dev-b9425d1b9378'
							target='_blank'
							rel='noopener noreferrer'>
							<AiOutlineMedium size='lg' />
						</a>
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

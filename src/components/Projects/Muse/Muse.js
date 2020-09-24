import React from 'react';
import Home from '../../../Images/MUSE/MUSE-home.png';
import Main from '../../../Images/MUSE/MUSE-main.png';
import Mobile from '../../../Images/MUSE/MUSE-mobile.png';
import {
	AiOutlineLink,
	AiOutlineGithub,
	AiOutlineYoutube,
} from 'react-icons/ai';
import './Muse.css';

const Muse = () => {
	return (
		<div className='muse-page'>
			<h1>MUSE</h1>
			<main className='muse-content'>
				<div className='muse-message'>
					<p>An application using React.js</p>
					<p>
						A digital environment for inspiration. Includes an inspirational
						quote and beautiful image.
					</p>
					<div className='muse-icons'>
						<a
							href='https://muse-application-hollingsworth.herokuapp.com/'
							target='_blank'
							rel='noopener noreferrer'>
							<AiOutlineLink size='lg' />
						</a>
						<a
							href='https://github.com/Caleb-Hollingsworth/Muse'
							target='_blank'
							rel='noopener noreferrer'>
							<AiOutlineGithub size='lg' />
						</a>
						<a
							href='https://www.youtube.com/watch?v=aCx2IJxdyGo'
							target='_blank'
							rel='noopener noreferrer'>
							<AiOutlineYoutube size='lg' />
						</a>
					</div>
				</div>

				<img className='muse-mobile' src={Mobile} alt='muse'></img>
				<img className='muse-home' src={Home} alt='muse'></img>
				<img className='muse-main' src={Main} alt='muse'></img>
			</main>
		</div>
	);
};

export default Muse;

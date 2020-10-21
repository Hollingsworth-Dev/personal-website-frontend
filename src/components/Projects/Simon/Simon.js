import React from 'react';
import Desktop from '../../../Images/SIMON/SimonDesktop.png';
import Mobile from '../../../Images/SIMON/SIMON-mobile.png';
import Title from '../../../Images/SIMON/SIMON-title.png';
import { AiOutlineLink, AiOutlineGithub } from 'react-icons/ai';
import './Simon.css';

const Simon = () => {
	return (
		<div className='simon-page' id='simon'>
			<h1>SIMON</h1>

			<main className='simon-content'>
				<div className='simon-message'>
					<h4>An application using HTML, CSS, & JavaScript</h4>
					<p>
						This application is a digital version of the 1970s electronic game,
						SIMON. This is a memory game of 20 levels using buttons and sounds.
						It includes a counter for the current level, a replay button to
						replay the last sequence of the current level, a 'Restart Game'
						button, and a built in function that flashes 'Wrong' and replays the
						last sequence if the player inputs the sequence incorrectly.
					</p>
					<div className='simon-icons'>
						<div>
							<a
								href='https://caleb-hollingsworth.github.io/SIMON-GAME/'
								rel='noopener noreferrer'
								target='_blank'>
								<AiOutlineLink size='2em' />
							</a>
							<p>Link to live application</p>
						</div>
						<div>
							<a
								href='https://github.com/Caleb-Hollingsworth/SIMON-GAME'
								target='_blank'
								rel='noopener noreferrer'>
								<AiOutlineGithub size='2em' />
							</a>
							<p>Link to Github repository</p>
						</div>
						{/* <div>
							<AiOutlineMedium />
							Blog post coming soon!
						</div> */}
					</div>
				</div>
				<img className='simon-title' src={Title} alt='simon'></img>
				<img className='simon-mobile' src={Mobile} alt='simon'></img>
				<img className='simon-desktop' src={Desktop} alt='simon'></img>
			</main>
		</div>
	);
};

export default Simon;

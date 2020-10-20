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
					<p>An application using HTML, CSS, & JavaScript</p>
					<p>A digital version of the 1970s electronic game, SIMON.</p>
					<div className='simon-icons'>
						<div>
							<a
								href='https://caleb-hollingsworth.github.io/SIMON-GAME/'
								rel='noopener noreferrer'
								target='_blank'>
								<AiOutlineLink size='lg' />
							</a>
							<a
								href='https://github.com/Caleb-Hollingsworth/SIMON-GAME'
								target='_blank'
								rel='noopener noreferrer'>
								<AiOutlineGithub size='lg' />
							</a>
							{/* <div>
							<AiOutlineMedium />
							Blog post coming soon!
						</div> */}
						</div>
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

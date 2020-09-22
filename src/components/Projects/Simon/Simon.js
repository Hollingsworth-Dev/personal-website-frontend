import React from 'react';
import Desktop from '../../../Images/SIMON/SimonDesktop.png';
import Mobile from '../../../Images/SIMON/SIMON-mobile.png';
import Title from '../../../Images/SIMON/SIMON-title.png';
import {
	AiOutlineLink,
	AiOutlineGithub,
	AiOutlineMedium,
} from 'react-icons/ai';

const Simon = () => {
	return (
		<div>
			<h1>SIMON</h1>
			<main>
				<div>
					<p>An application using HTML, CSS, & JavaScript</p>
					<p>A digital version of the 1970s electronic game, SIMON.</p>
				</div>
				<div className='simon-images'>
					<img classname='simon-title' src={Title} alt='simon'></img>
					<img classname='simon-mobile' src={Mobile} alt='simon'></img>
					<img classname='simon-desktop' src={Desktop} alt='simon'></img>
				</div>
				<div>
					<div>
						<a href='https://caleb-hollingsworth.github.io/SIMON-GAME/'>
							<AiOutlineLink />
							deployed application
						</a>
						<a href='https://github.com/Caleb-Hollingsworth/SIMON-GAME'>
							<AiOutlineGithub />
							GitHub repository
						</a>
						<a href=''>
							<AiOutlineMedium />
							Blog post coming soon!
						</a>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Simon;

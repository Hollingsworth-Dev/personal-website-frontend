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
	const onclickHandler = (url) => {
		window.open(url);
	};
	return (
		<div>
			<h1>SIMON</h1>
			<main>
				<div>
					<p>An application using HTML, CSS, & JavaScript</p>
					<p>A digital version of the 1970s electronic game, SIMON.</p>
				</div>
				<div className='simon-images'>
					<img className='simon-title' src={Title} alt='simon'></img>
					<img className='simon-mobile' src={Mobile} alt='simon'></img>
					<img className='simon-desktop' src={Desktop} alt='simon'></img>
				</div>
				<div>
					<div>
						<a
							href='https://caleb-hollingsworth.github.io/SIMON-GAME/'
							target='_blank'>
							<AiOutlineLink />
						</a>
						<a
							href='https://github.com/Caleb-Hollingsworth/SIMON-GAME'
							target='_blank'>
							<AiOutlineGithub />
						</a>
						{/* <div>
							<AiOutlineMedium />
							Blog post coming soon!
						</div> */}
					</div>
				</div>
			</main>
		</div>
	);
};

export default Simon;

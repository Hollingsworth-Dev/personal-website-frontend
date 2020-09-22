import React from 'react';
import Home from '../../../Images/MUSE/MUSE-home.png';
import Main from '../../../Images/MUSE/MUSE-main.png';
import Mobile from '../../../Images/MUSE/MUSE-mobile.png';
import {
	AiOutlineLink,
	AiOutlineGithub,
	AiOutlineYoutube,
} from 'react-icons/ai';

const Muse = () => {
	return (
		<div>
			<h1>MUSE</h1>
			<main>
				<div>
					<p>An application using React.js</p>
					<p>
						A digital environment for inspiration. Includes an inspirational
						quote and beautiful image.
					</p>
				</div>
				<div className='muse-images'>
					<img classname='muse-mobile' src={Mobile} alt='muse'></img>
					<img classname='muse-home' src={Home} alt='muse'></img>
					<img classname='muse-main' src={Main} alt='muse'></img>
				</div>
				<div>
					<a href='https://muse-application-hollingsworth.herokuapp.com/'>
						<AiOutlineLink />
						deployed application
					</a>
					<a href='https://github.com/Caleb-Hollingsworth/Muse'>
						<AiOutlineGithub />
						GitHub repository
					</a>
					<a href='https://www.youtube.com/watch?v=aCx2IJxdyGo'>
						<AiOutlineYoutube />
						just a fun infomercial
					</a>
				</div>
			</main>
		</div>
	);
};

export default Muse;

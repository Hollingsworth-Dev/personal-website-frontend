import React from 'react';
import Home from '../../../Images/MUSE/MUSE-home.png';
import MuseLogo from '../../../Images/MUSE/Muse-Logo.png';
import Mobile from '../../../Images/MUSE/MUSE-mobile.png';
import {
	AiOutlineLink,
	AiOutlineGithub,
	AiOutlineYoutube,
} from 'react-icons/ai';
import './Muse.css';

const Muse = () => {
	return (
		<div className='muse-page' id='muse'>
			<h1>MUSE</h1>
			<main className='muse-content'>
				<div className='muse-message'>
					<h4>An application using React.js</h4>
					<p>
						This application is a digital environment for inspiration and
						reflection. When app is loaded, the user is prompted to enter their
						name, then they are brought to the Muse environment where displayed
						on the page is a beautiful image, an inspirational quote, and a
						search bar where they can search by keyword for a different image.
						Features that are coming include: user authentication and profiles,
						a search bar for quotes by author, keyword, and user, as well as
						social features to link social accounts, an option to share your
						Muse, and a 'delete quote' option.
					</p>
					<div className='muse-icons'>
						<div>
							<a
								href='https://muse-application-hollingsworth.herokuapp.com/'
								target='_blank'
								rel='noopener noreferrer'>
								<AiOutlineLink size='2em' />
							</a>
							<p>Link to live application</p>
						</div>
						<div>
							<a
								href='https://github.com/Caleb-Hollingsworth/Muse'
								target='_blank'
								rel='noopener noreferrer'>
								<AiOutlineGithub size='2em' />
							</a>
							<p>Link to Github repository</p>
						</div>
						<div>
							<a
								href='https://www.youtube.com/watch?v=aCx2IJxdyGo'
								target='_blank'
								rel='noopener noreferrer'>
								<AiOutlineYoutube size='2em' />
							</a>
							<p>Link to YouTube demonstration</p>
						</div>
					</div>
				</div>

				<img className='muse-mobile' src={Mobile} alt='muse'></img>
				<img className='muse-logo' src={MuseLogo} alt='muse'></img>
				<img className='muse-home' src={Home} alt='muse'></img>
			</main>
		</div>
	);
};

export default Muse;

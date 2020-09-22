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

const Goodegg = () => {
	return (
		<div>
			<h1>GoodEgg</h1>
			<main>
				<div>
					<p>A full-stack application using React.js and Django</p>
					<p>
						A police accountability app to track and report 'GoodEggs' and
						'BadApples' within your community.
					</p>
				</div>
				<div className='goodegg-images'>
					<img className='goodegg-home' src={Home} alt='goodegg'></img>
					<img className='goodegg-incident' src={Incident} alt='goodegg'></img>
					<img className='goodegg-officer' src={Officer} alt='goodegg'></img>
					<img className='goodegg-profile' src={Profile} alt='goodegg'></img>
				</div>
				<div>
					<div>
						<a href='https://salty-cliffs-88075.herokuapp.com/' target='_blank'>
							<AiOutlineLink />
						</a>
						<a href='https://github.com/teamscrum2000' target='_blank'>
							<AiOutlineGithub />
						</a>
						<a
							href='https://medium.com/@caleb.hollingsworth.dev/goodegg-dev-b9425d1b9378'
							target='_blank'>
							<AiOutlineMedium />
						</a>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Goodegg;

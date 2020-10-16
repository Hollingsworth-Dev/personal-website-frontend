import React from 'react';
import Headshot from '../../Images/Headshot/Headshot.jpg';
import {
	DiBootstrap,
	DiHtml5,
	DiDjango,
	DiMongodb,
	DiPython,
	DiCss3Full,
	DiIllustrator,
	DiJsBadge,
	DiReact,
	DiNodejsSmall,
	DiPhotoshop,
} from 'react-icons/di';
import './Home.css';

const Home = () => {
	return (
		<div className='home-page' id='welcome'>
			<div className='home-content'>
				<h2>meet caleb</h2>
				<main>
					<div className='home-headshot'>
						<img src={Headshot} alt='headshot' />
					</div>
					<div className='home-info'>
						<h4>Caleb Hollingsworth, Software Developer</h4>
						<p className='brand-state'>
							A driven and focused front end developer with an analytical mind
							and strong attention to detail
						</p>
						<div className='home-bio-container'>
							<p className='home-bio'>
								I am a full-stack software developer with a major background in
								music performance and teaching. Due to my previous career in
								classical music, I’m a thick-skinned and patient team player who
								is motivated by progress and successful collaboration.
							</p>
							<div className='home-bio'>
								<h4>skills overview</h4>
								<main>
									<DiHtml5 />
									<DiCss3Full />
									<DiJsBadge />
									<DiReact />
									<DiDjango />
									<DiMongodb />
									<DiPython />
									<DiNodejsSmall />
									<DiBootstrap />
									<DiPhotoshop />
									<DiIllustrator />
								</main>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};

export default Home;

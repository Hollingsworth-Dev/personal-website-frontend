import React from 'react';
import Headshot from '../../Images/Headshot/Headshot.jpg';
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
							<p className='home-bio'>
								I initially pursued vocal performance at Delta State University
								in 2010, and later went on to complete my masters degree in
								vocal-performance with a focus in operatic direction at
								University of North Texas. While working on my masters, I was
								introduced to software development by colleague who stated that
								he thought I held the right mind, work ethic, and necessary
								computer skills to take on learning to become a coder.
								Fast-forward to spring of 2020, I had completed a large amount
								of free online resources such as freecodecamp and codeacademy.
								After losing quite a few performance gigs and teaching jobs due
								to COVID-19, I decided it was time to sharpen my software
								development skills and take on software engineering immersive
								bootcamp. This was a big decision for me...to fully commit to a
								complete career change.
							</p>
							<p className='home-bio'>
								In mid-September of 2020, I finally completed my SEI coursework
								and left with a wealth of knowledge, a complete portfolio of
								beautiful projects, and a massive amount experience with front
								end and back end technologies, as well as a solid foundation of
								collaboration skills to work in a professional dev environment.
							</p>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};

export default Home;

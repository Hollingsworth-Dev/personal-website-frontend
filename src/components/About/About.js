import React, { useState } from 'react';
import Modal from '../Modal';
import './About.css';
import { Link } from 'react-scroll';

const About = (props) => {
	//Modal hooks
	const [showModal, setShowModal] = useState(false);
	const handleShowModal = () => {
		setShowModal(!showModal);
	};
	return (
		<div className='about-group' id='about'>
			<div className='about-list'>
				<div className='about-list-buttons'>
					<Link
						activeClass='active'
						to='contact'
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}>
						<button className='about-contact'>contact</button>
					</Link>

					<Link
						activeClass='active'
						to='techs'
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}>
						<button className='about-tech'>technologies</button>
					</Link>

					<button className='about-resume' onClick={handleShowModal}>
						resumé
					</button>
					{showModal === true && <Modal handleShowModal={handleShowModal} />}
				</div>
			</div>
		</div>
	);
};

export default About;

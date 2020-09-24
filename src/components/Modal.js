import React from 'react';
import './Modal.css';
import Resume from '../Images/Resume/MyResume.png';

const Modal = (props) => {
	return (
		<div className='modal w3-animate-zoom'>
			<main className='resume-container'>
				<button onClick={props.handleShowModal}>X</button>
				<img className='resume-doc' src={Resume} alt='resume' />
			</main>
		</div>
	);
};

export default Modal;

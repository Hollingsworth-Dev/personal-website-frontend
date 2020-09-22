import React, { useState } from 'react';
import Modal from '../../Modal';
import './Resume.css';

const Resume = () => {
	const [showModal, setShowModal] = useState(false);
	const handleShowModal = () => {
		setShowModal(!showModal);
	};
	return (
		<div>
			<header>
				<h1>Resumé</h1>
			</header>
			<main>
				<button className='modal-button' onClick={handleShowModal}>
					Modal
				</button>
				{showModal === true && <Modal />}
			</main>
		</div>
	);
};

export default Resume;

import React, { useState } from 'react';
import Modal from '../../Modal';
import Document from '../../../Images/Resume/Caleb Hollingsworth Resume.pdf';

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
				<button onClick={handleShowModal}>Modal</button>
				{showModal === true && (
					<Modal>
						<Document />
					</Modal>
				)}
			</main>
		</div>
	);
};

export default Resume;

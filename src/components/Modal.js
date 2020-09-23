import React from 'react';
// import { Page, Image, View, Document, StyleSheet } from '@react-pdf/renderer';
import './Modal.css';
import Resume from '../Images/Resume/MyResume.png';
// const styles = StyleSheet.create({
// 	page: {
// 		flexDirection: 'row',
// 		backgroundColor: '#E4E4E4',
// 	},
// 	section: {
// 		margin: 10,
// 		padding: 10,
// 		flexGrow: 1,
// 	},
// });
const Modal = (props) => {
	return (
		// <Document className='modal'>
		// 	<Page size='A4' style={styles.page}>
		// 		<View style={styles.section}>
		// 			<Image src={Resume} fixed alt='resume' />
		// 		</View>
		// 	</Page>
		// </Document>
		<div className='modal w3-animate-zoom'>
			<main className='resume-container'>
				<button onClick={props.handleShowModal}>X</button>
				<img className='resume-doc' src={Resume} alt='resume' />
			</main>
		</div>
	);
};

export default Modal;

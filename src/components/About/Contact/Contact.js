import React, { useEffect, useRef } from 'react';
import {
	AiOutlineGithub,
	AiOutlineLinkedin,
	AiOutlineInstagram,
	AiOutlineTwitter,
} from 'react-icons/ai';
import Form from 'react-bootstrap/Form';
import './Contact.css';

const Contact = () => {
	return (
		<div className='contact-page'>
			<div className='contact-content'>
				<header>
					{/* <img src='' alt=''>
					MyFaceGoesHere
				</img> */}
					<h1>Contact</h1>
				</header>
				<main>
					<div className='contact-info'>
						<h2>contact info</h2>
						<ul>
							<li>caleb.hollingsworth.dev@gmail.com</li>
							<li>(601)618-4562</li>
						</ul>
					</div>
					<div className='contact-form-container'>
						<h2>got a question or want to work together?</h2>
						<form className='contact-form'>
							<input placeholder='name' type='text' name='name' required />
							<input placeholder='email' type='text' name='email' required />
							<textarea placeholder='your message' type='text' name='message' />
							<button className='contact-button' type='submit' id='submit'>
								Submit
							</button>
						</form>
					</div>
					<div className='social-icons'>
						{/* icons go here */}
						<a href='https://www.linkedin.com/in/caleb-hollingsworth-dev/'>
							<AiOutlineLinkedin size='lg' />
						</a>
						<a href='https://github.com/Caleb-Hollingsworth'>
							<AiOutlineGithub size='lg' />
						</a>
						<a href='https://www.instagram.com/caleb_developer/?hl=en'>
							<AiOutlineInstagram size='lg' />
						</a>
						<a href='https://twitter.com/caleb_developer'>
							<AiOutlineTwitter size='lg' />
						</a>
					</div>
				</main>
			</div>
		</div>
	);
};

export default Contact;

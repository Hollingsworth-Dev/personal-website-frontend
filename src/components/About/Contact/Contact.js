import React from 'react';
import {
	AiOutlineGithub,
	AiOutlineLinkedin,
	AiOutlineInstagram,
	AiOutlineTwitter,
} from 'react-icons/ai';
import { Form } from 'react-bootstrap/Form';

const Contact = () => {
	return (
		<div>
			<header>
				{/* <img src='' alt=''>
					MyFaceGoesHere
				</img> */}
				<h1>Contact</h1>
			</header>
			<main>
				<div>
					<h2>contact info</h2>
					<ul>
						<li>caleb.hollingsworth.dev@gmail.com</li>
						<li>(601)618-4562</li>
					</ul>
					<div className='social-icons'>
						{/* icons go here */}
						<a href='https://www.linkedin.com/in/caleb-hollingsworth-dev/'>
							<AiOutlineLinkedin />
						</a>
						<a href='https://github.com/Caleb-Hollingsworth'>
							<AiOutlineGithub />
						</a>
						<a href='https://www.instagram.com/caleb_developer/?hl=en'>
							<AiOutlineInstagram />
						</a>
						<a href='https://twitter.com/caleb_developer'>
							<AiOutlineTwitter />
						</a>
					</div>
				</div>
				<div>
					<h2>got a question or want to work together?</h2>
					<Form></Form>
				</div>
			</main>
		</div>
	);
};

export default Contact;

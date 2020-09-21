import React from 'react';

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
					<div>
						{/* icons go here */}
						<div>LinkedIn</div>
						<div>GitHub</div>
						<div>InstaGram</div>
						<div>Twitter</div>
					</div>
				</div>
				<div>
					<h2>got a question or want to work together?</h2>
					<form>form goes here</form>
				</div>
			</main>
		</div>
	);
};

export default Contact;

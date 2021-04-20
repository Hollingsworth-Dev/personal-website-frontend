import React from 'react';
import './Technologies.css';

const Technologies = () => {
	return (
		<div className='tech-page' id='techs'>
			<header>
				<h1>Technologies</h1>
			</header>

			<main className='tech-content'>
				{/* ideally icons for these techs */}
				<div>
					<h2>frontend</h2>
					<main>
						<p>HTML5</p>
						<p>CSS3</p>
						<p>JavaScript</p>
						<p>React.js</p>
						<p>TypeScript</p>
						<p>ReactNative</p>
						<p>Bootstrap</p>
						<p>Axios</p>
						<p>flexbox</p>
						<p>Handlebars</p>
					</main>
				</div>
				<div>
					<h2>backend</h2>
					<main>
						<p>Express</p>
						<p>Python</p>
						<p>Django</p>
						<p>SQL</p>
						<p>PostgreSQL</p>
						<p>Mongoose</p>
						<p>MongoDB</p>
						<p>Node.js</p>
						<p>RESTful APIs</p>
					</main>
				</div>
				<div>
					<h2>other</h2>
					<main>
						<p>CRUD</p>
						<p>Heroku</p>
						<p>Jest</p>
						<p>Git</p>
						<p>AWS</p>
						<p>VSCode</p>
						<p>Photoshop</p>
						<p>InDesign</p>
						<p>Illustrator</p>
						<p>XD</p>
						<p>Atomic Dev Kit</p>
						<p>GitHub</p>
					</main>
				</div>
			</main>
		</div>
	);
};

export default Technologies;

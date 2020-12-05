import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';

import {
	AiOutlineGithub,
	AiOutlineLinkedin,
	AiOutlineInstagram,
	AiOutlineTwitter,
} from 'react-icons/ai';
import './Contact.css';

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			subject: '',
			message: '',
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.resetForm = this.resetForm.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const templateId = 'template_azhw5gd';
		console.log('something');
		this.sendFeedback(templateId, {
			message_html: this.state.message,
			from_name: this.state.name,
			reply_to: 'caleb.hollingsworth.dev@gmail.com',
		});
	};
	sendFeedback = (templateId, variables) => {
		console.log('hello');
		emailjs
			.send(
				'service_10n2k98',
				templateId,
				variables,
				'user_dqONawvCLhijWb0LwUuoV'
			)
			.then((res) => {
				console.log('email successfully sent!');
			})
			.catch((err) => console.error('oops', err));
	};

	resetForm() {
		this.setState({
			name: '',
			email: '',
			subject: '',
			message: '',
		});
	}
	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	render() {
		const { name, email, subject, message } = this.state;
		return (
			<div className='contact-page' id='contact'>
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
							<form className='contact-form' onSubmit={this.handleSubmit}>
								<input
									placeholder='name'
									type='text'
									name='name'
									value={name}
									onChange={this.handleChange}
									required
								/>
								<input
									placeholder='email'
									type='text'
									name='email'
									value={email}
									onChange={this.handleChange}
									required
								/>
								<input
									placeholder='subject'
									type='text'
									name='subject'
									value={subject}
									onChange={this.handleChange}
									required
								/>
								<textarea
									placeholder='your message'
									type='text'
									name='message'
									value={message}
									onChange={this.handleChange}
									required
								/>
								<button
									className='contact-button'
									type='submit'
									id='submit'
									onSubmit={this.handleSubmit}>
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
	}
}

export default Contact;

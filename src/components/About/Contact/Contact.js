import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
import Recaptcha from 'recaptcha';
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
			recaptchaLoad: false,
			isVerified: false,
		};
		this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
		this.verifiedRecaptcha = this.verifiedRecaptcha.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.resetForm = this.resetForm.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(event) {
		const { recaptchaLoad, isVerified } = this.state;
		event.preventDefault();
		if (recaptchaLoad && isVerified) {
			const { name, email, subject, message } = this.state;
			const templateParams = {
				from_name: name,
				from_email: email,
				to_name: 'Caleb Hollingsworth',
				subject,
				message_html: message,
			};
			email.js.send(
				'gmail',
				'template_azhw5gd',
				templateParams,
				'user_dqONawvCLhijWb0LwUuoV'
			);
		}
	}
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
	recaptchaLoaded() {
		this.setState({ recaptchaLoad: true });
	}
	verifiedRecaptcha(response) {
		if (response) {
			this.setState({ isVerified: true });
		}
	}
	render() {
		const { name, email, subject, message, sentMessage } = this.state;
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
								<button className='contact-button' type='submit' id='submit'>
									Submit
								</button>
							</form>
							<Recaptcha
								sitekey='6LeRdOQZAAAAAOSyfWmSLuRMhMEK12ggcOofFAOE'
								render='explicit'
								onloadCallback={this.recaptchaLoaded}
								verifyCallback={this.verifiedRecaptcha}
							/>
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

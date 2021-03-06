import { useState } from 'react';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import { FiMail, FiPhoneCall } from 'react-icons/fi';

import './Contact.scss';

const INITIAL_STATE = {
	name: '',
	email: '',
	subject: '',
	message: '',
};

const Contact = () => {
	const [inputs, setInputs] = useState(INITIAL_STATE);

	const encode = (data) => {
		return Object.keys(data)
			.map(
				(key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
			)
			.join('&');
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		setInputs({ ...inputs, [name]: value });
	};

	const handleSubmit = (e) => {
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({ 'form-name': 'contact', ...inputs }),
		})
			.then(() => {
				alert('Message sent! I will contact you as soon as I can.');
				setInputs(INITIAL_STATE);
			})
			.catch((error) => alert(error));

		e.preventDefault();
	};

	return (
		<section id='contact'>
			<div className='container'>
				<h2>Contact Me</h2>

				<p className='tagline'>
					Please feel free to reach out to me to learn, or discuss more about
					me. I look forward to hearing from you.{' '}
				</p>

				<div className='contact-info'>
					<div className='info-container'>
						<FiPhoneCall className='info-icon' />
						<h3 className='info-name'>Phone</h3>
						<p className='info-tagline'>
							I can be reached by phone from 8am-8pm EST Monday thru Friday
						</p>
						<a href='tel:513-237-7953' className='info'>
							(513)-237-7953
						</a>
					</div>
					<div className='info-container'>
						<FiMail className='info-icon' />
						<h3 className='info-name'>Email</h3>
						<p className='info-tagline'>I can be reached by email anytime</p>
						<a href='mailto:russellrice15@gmail.com' className='info'>
							russellrice15@gmail.com
						</a>
					</div>
				</div>

				<form
					action=''
					name='contact'
					method='POST'
					id='contact-form'
					data-netlify='true'
					onSubmit={handleSubmit}
				>
					<div className='form-group'>
						<FormInput
							type='text'
							name='name'
							value={inputs.name}
							placeholder='Name :'
							onChange={handleChange}
							required
						/>
						<FormInput
							type='email'
							name='email'
							value={inputs.email}
							placeholder='Your email :'
							onChange={handleChange}
							required
						/>
						<FormInput
							type='text'
							name='subject'
							value={inputs.subject}
							placeholder='Your subject :'
							onChange={handleChange}
							required
						/>
					</div>

					<div className='form-group'>
						<textarea
							name='message'
							value={inputs.message}
							placeholder='Your Message :'
							onChange={handleChange}
							required
						></textarea>
					</div>

					<CustomButton primary type='submit'>
						Send Message
					</CustomButton>
				</form>
			</div>
		</section>
	);
};

export default Contact;

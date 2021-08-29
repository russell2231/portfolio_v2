import { useState } from 'react';
import { Link } from 'react-router-dom';

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

	const handleChange = (e) => {
		const { name, value } = e.target;

		setInputs({ ...inputs, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setInputs(INITIAL_STATE);
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
						<Link to='tel:513-237-7953' className='info'>
							(513)-237-7953
						</Link>
					</div>
					<div className='info-container'>
						<FiMail className='info-icon' />
						<h3 className='info-name'>Email</h3>
						<p className='info-tagline'>I can be reached by email anytime</p>
						<Link to='mailto:russellrice15@gmail.com' className='info'>
							russellrice15@gmail.com
						</Link>
					</div>
				</div>

				<form
					name='contact'
					method='POST'
					data-netlify='true'
					id='contact-form'
					onSubmit={handleSubmit}
				>
					<div className='form-group'>
						<FormInput
							type='text'
							name='name'
							value={inputs.name}
							placeholder='Name :'
							onChange={handleChange}
						/>
						<FormInput
							type='email'
							name='email'
							value={inputs.email}
							placeholder='Your email :'
							onChange={handleChange}
						/>
						<FormInput
							type='text'
							name='subject'
							value={inputs.subject}
							placeholder='Your subject :'
							onChange={handleChange}
						/>
					</div>

					<div className='form-group'>
						<textarea
							name='message'
							value={inputs.message}
							placeholder='Your Message :'
							onChange={handleChange}
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

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../logo.svg';
import { FiMenu } from 'react-icons/fi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

import './Navbar.scss';

const Navbar = () => {
	const [isSticky, setIsSticky] = useState(false);
	const [scrollTop, setScrollTop] = useState(0);
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		// Add Box Shadow to bottom of nav when page is below 0 pageYOffset
		const onScroll = () => {
			let currentPosition = window.pageYOffset;

			if (currentPosition > 0) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}

			setScrollTop(currentPosition < 0 ? 0 : currentPosition);
		};

		window.addEventListener('scroll', onScroll);
	}, [scrollTop]);

	return (
		<nav className={`nav ${isSticky ? 'sticky' : ''}`}>
			<div className='container'>
				<Link to='#'>
					<Logo />
				</Link>

				<FiMenu className='menu-toggle' onClick={() => handleToggle()} />

				<ul className={`nav-list ${isOpen ? 'open' : ''}`}>
					<li className='nav-item'>
						<Link to='#'>Home</Link>
					</li>
					<li className='nav-item'>
						<Link to='#skills'>Skills</Link>
					</li>
					<li className='nav-item'>
						<Link to='#projects'>Projects</Link>
					</li>
					<li className='nav-item'>
						<Link to='#contact'>Contact</Link>
					</li>
				</ul>

				<div className={`socials ${isOpen ? 'open' : ''}`}>
					<Link to='https://github.com/russell2231' target='_blank'>
						<FaGithub className='social-icon' />
					</Link>
					<Link to='https://www.linkedin.com/in/russell2231/' target='_blank'>
						<FaLinkedin className='social-icon' />
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

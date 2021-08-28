import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

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
				<AnchorLink href='#home'>
					<Logo />
				</AnchorLink>

				<FiMenu className='menu-toggle' onClick={() => handleToggle()} />

				<ul className={`nav-list ${isOpen ? 'open' : ''}`}>
					<li className='nav-item'>
						<AnchorLink href='#home'>Home</AnchorLink>
					</li>
					<li className='nav-item'>
						<AnchorLink
							offset='80'
							href='#skills'
							onClick={() => (window.innerWidth < 1024 ? handleToggle() : '')}
						>
							Skills
						</AnchorLink>
					</li>
					<li className='nav-item'>
						<AnchorLink href='#projects'>Projects</AnchorLink>
					</li>
					<li className='nav-item'>
						<AnchorLink href='#contact'>Contact</AnchorLink>
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

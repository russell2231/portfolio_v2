import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import CustomButton from '../custom-button/CustomButton';

import { FiDownload } from 'react-icons/fi';

import './Home.scss';

const Home = () => {
	return (
		<div id='home'>
			<div className='container'>
				<section className='hero'>
					<span className='introduction'>Hi, I am</span>
					<h1>Russell Rice</h1>
					<h2 className='title'>Front-End Developer</h2>
					<p className='tagline'>
						I'm a self-taught Front-End Developer with 2 years of experience
						writing responsive, clean, and accessible websites.
					</p>
					<div className='hero-links'>
						<CustomButton primary>
							<Link to={'/Resume.pdf'} target='_blank'>
								Download CV <FiDownload className='download-icon' />
							</Link>
						</CustomButton>
						<CustomButton invert>
							<AnchorLink href='#contact'>Contact Me</AnchorLink>
						</CustomButton>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Home;

import { Link } from 'react-router-dom';

import CustomButton from '../custom-button/CustomButton';

import audiophile from '../../assets/portfolio-audiophile@2x.jpg';
import dine from '../../assets/portfolio-dine@2x.jpg';
import photosnap from '../../assets/portfolio-photosnap@2x.jpg';
import todo from '../../assets/portfolio-todo@2x.jpg';
import clipboard from '../../assets/portfolio-clipboard@2x.jpg';
import designo from '../../assets/portfolio-designo@2x.jpg';

import './Portfolio.scss';

const Portfolio = () => {
	const projects = [
		{
			name: 'Audiophile',
			image: audiophile,
			tagline: 'A full e-commerce website',
			live: 'https://audiophile-rr3.netlify.app',
			github: 'https://github.com/russell2231/audiophile',
		},
		{
			name: 'Photosnap',
			image: photosnap,
			tagline: 'A multi-page mockup of a photo sharing website',
			live: 'https://photosnap-rr3.netlify.app',
			github: 'https://github.com/russell2231/photosnap',
		},
		{
			name: 'Dine',
			image: dine,
			tagline: 'A restaurant website with the ability to book a reservation',
			live: 'https://dine-rr3.netlify.app',
			github: 'https://github.com/russell2231/dine-restaurant',
		},
		{
			name: 'Designo',
			image: designo,
			tagline: 'A multi-page website for a digital brand',
			live: 'https://designo-rr3.netlify.app',
			github: 'https://github.com/russell2231/designo',
		},
		{
			name: 'Todo',
			image: todo,
			tagline: 'A todo website',
			live: 'https://todo-rr3.netlify.app',
			github: 'https://github.com/russell2231/todo-app',
		},
		{
			name: 'Clipboard',
			image: clipboard,
			tagline: 'A landing page for a snippet tracking app',
			live: 'https://clipboard-rr3.netlify.app',
			github: 'https://github.com/russell2231/clipboard-landing',
		},
	];

	return (
		<section id='projects'>
			<div className='container'>
				<h2>Projects</h2>

				<div className='projects-grid'>
					{projects.map((project, index) => (
						<div className='project-container' key={index}>
							<img src={project.image} alt='' className='project-image' />
							<h3 className='project-title'>{project.name}</h3>
							<p className='project-tagline'>{project.tagline}</p>
							<div className='project-links'>
								<CustomButton primary>
									<Link to={{ pathname: project.live }} target='_blank'>
										See Demo
									</Link>
								</CustomButton>
								<CustomButton invert>
									<Link to={{ pathname: project.github }} target='_blank'>
										See Code
									</Link>
								</CustomButton>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Portfolio;

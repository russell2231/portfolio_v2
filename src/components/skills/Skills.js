import htmlIcon from '../../assets/html5.svg';
import cssIcon from '../../assets/css3.svg';
import javascriptIcon from '../../assets/javascript.svg';
import jqueryIcon from '../../assets/jquery.svg';
import reactIcon from '../../assets/react.svg';
import sassIcon from '../../assets/sass.svg';
import bootstrapIcon from '../../assets/bootstrap.svg';
import gitIcon from '../../assets/git.svg';

import './Skills.scss';

const Skills = () => {
	const skills = [
		{ name: 'HTML', icon: htmlIcon },
		{ name: 'CSS', icon: cssIcon },
		{ name: 'JavaScript', icon: javascriptIcon },
		{ name: 'jQuery', icon: jqueryIcon },
		{ name: 'React', icon: reactIcon },
		{ name: 'SASS', icon: sassIcon },
		{ name: 'Bootstrap', icon: bootstrapIcon },
		{ name: 'Git', icon: gitIcon },
	];

	return (
		<section id='skills'>
			<div className='container'>
				<h2>Skills</h2>

				<div className='skills-grid'>
					{skills.map((skill, index) => (
						<div className='skill-container' key={index}>
							<img src={skill.icon} alt='' className='skill-icon' />
							<h3 className='skill-title'>{skill.name}</h3>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;

import Navbar from './navbar/Navbar';
import Home from './home/Home';
import Skills from './skills/Skills';
import Portfolio from './portfolio/Portfolio';

function App() {
	return (
		<div>
			<Navbar />
			<Home />
			<Skills />
			<Portfolio />
			<div className='div'></div>
		</div>
	);
}

export default App;

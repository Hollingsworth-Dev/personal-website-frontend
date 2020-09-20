import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
	return (
		<div>
			<Link to='home/projects/simon'>
				<button>SIMON</button>
			</Link>
			<Link to='home/projects/muse'>
				<button>MUSE</button>
			</Link>
			<Link to='home/projects/playlist'>
				<button>PlayList</button>
			</Link>
			<Link to='home/projects/goodegg'>
				<button>GoodEgg</button>
			</Link>
		</div>
	);
};

export default Projects;

import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
	return (
		<div>
			<Link to='/projects/simon'>
				<button>SIMON</button>
			</Link>
			<Link to='/projects/muse'>
				<button>MUSE</button>
			</Link>
			<Link to='/projects/playlist'>
				<button>PlayList</button>
			</Link>
			<Link to='/projects/goodegg'>
				<button>GoodEgg</button>
			</Link>
		</div>
	);
};

export default Projects;

import React from 'react';

import './Projects.css';

const Projects = (props) => {
	return (
		<div className='projects-list' id='projects'>
			<div className='projects-buttons'>
				<button className='projects-simon' onClick={props.renderSimonHandler}>
					SIMON
				</button>

				<button className='projects-simon' onClick={props.renderMuseHandler}>
					MUSE
				</button>

				<button
					className='projects-simon'
					onClick={props.renderPlaylistHandler}>
					PlayList
				</button>

				<button className='projects-simon' onClick={props.renderGoodeggHandler}>
					GoodEgg
				</button>
			</div>
		</div>
	);
};

export default Projects;

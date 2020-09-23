import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Simon from './Simon/Simon';
import Muse from './Muse/Muse';
import Goodegg from './Goodegg/Goodegg';
import Playlist from './Playlist/Playlist';
import './Projects.css';

const Projects = (props) => {
	return (
		<div className='projects-list'>
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

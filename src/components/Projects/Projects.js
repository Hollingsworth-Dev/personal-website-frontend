import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Simon from './Simon/Simon';
import Muse from './Muse/Muse';
import Goodegg from './Goodegg/Goodegg';
import Playlist from './Playlist/Playlist';
import './Projects.css';

const Projects = () => {
	const [renderSimon, setRenderSimon] = useState(false);
	const [renderMuse, setRenderMuse] = useState(false);
	const [renderGoodegg, setRenderGoodegg] = useState(false);
	const [renderPlaylist, setRenderPlaylist] = useState(false);
	const renderSimonHandler = () => {
		setRenderSimon(!renderSimon);
		setRenderMuse(false);
		setRenderGoodegg(false);
		setRenderPlaylist(false);
	};
	const renderMuseHandler = () => {
		setRenderMuse(!renderMuse);
		setRenderSimon(false);
		setRenderGoodegg(false);
		setRenderPlaylist(false);
	};
	const renderGoodeggHandler = () => {
		setRenderGoodegg(!renderGoodegg);
		setRenderSimon(false);
		setRenderMuse(false);
		setRenderPlaylist(false);
	};
	const renderPlaylistHandler = () => {
		setRenderPlaylist(!renderPlaylist);
		setRenderMuse(false);
		setRenderGoodegg(false);
		setRenderSimon(false);
	};

	return (
		<div className='projects-list'>
			<div className='projects-buttons'>
				<button className='projects-simon' onClick={renderSimonHandler}>
					SIMON
				</button>

				<button className='projects-simon' onClick={renderMuseHandler}>
					MUSE
				</button>

				<button className='projects-simon' onClick={renderPlaylistHandler}>
					PlayList
				</button>

				<button className='projects-simon' onClick={renderGoodeggHandler}>
					GoodEgg
				</button>
			</div>
			<div>
				{renderSimon === true && (
					<div>
						{' '}
						<Simon />
					</div>
				)}
				{renderMuse === true && (
					<div>
						{' '}
						<Muse />
					</div>
				)}
				{renderGoodegg === true && (
					<div>
						{' '}
						<Goodegg />
					</div>
				)}
				{renderPlaylist === true && (
					<div>
						{' '}
						<Playlist />
					</div>
				)}
			</div>
		</div>
	);
};

export default Projects;

import React from 'react';
import Mobile from '../../../Images/PlayList/PlayList-mobile.png';
import Home from '../../../Images/PlayList/PlayList-home.png';
import View from '../../../Images/PlayList/PlayList-view.png';
import { AiOutlineLink, AiOutlineGithub } from 'react-icons/ai';
import './Playlist.css';
const Playlist = () => {
	return (
		<div className='playlist-page' id='playlist'>
			<h1>PlayList</h1>
			<main className='playlist-content'>
				<div className='playlist-message'>
					<h4>A full-stack MERN application</h4>
					<p>
						This application is a place to create playlists of the soundtracks
						from your favorite video-games. I built this app with a group of
						engineers who were looking to build an application that could house
						our favorite video game soundtracks. We accomplished this with a
						beautiful application where users can create, edit, and delete
						playlists.
					</p>

					<div className='playlist-icons'>
						<div>
							<a
								href='https://salty-cliffs-88075.herokuapp.com/'
								target='_blank'
								rel='noopener noreferrer'>
								<AiOutlineLink size='1.5em' />
							</a>
							<p>Link to live application</p>
						</div>
						<div>
							<a
								href='https://github.com/teamscrum2000'
								target='_blank'
								rel='noopener noreferrer'>
								<AiOutlineGithub size='1.5em' />
							</a>
							<p>Link to Github repository</p>
						</div>
						{/* <a href=''>
							<AiOutlineMedium />
							Blog post coming soon!
						</a> */}
					</div>
				</div>
				<img className='playlist-mobile' src={Mobile} alt='playlist'></img>
				<img className='playlist-home' src={Home} alt='playlist'></img>
				<img className='playlist-view' src={View} alt='playlist'></img>
			</main>
		</div>
	);
};

export default Playlist;

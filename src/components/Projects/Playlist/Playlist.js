import React from 'react';
import Mobile from '../../../Images/PlayList/PlayList-mobile.png';
import Home from '../../../Images/PlayList/PlayList-home.png';
import View from '../../../Images/PlayList/PlayList-view.png';
import {
	AiOutlineLink,
	AiOutlineGithub,
	AiOutlineMedium,
} from 'react-icons/ai';
const Playlist = () => {
	return (
		<div>
			<h1>PlayList</h1>
			<main>
				<div>
					<p>A full-stack MERN application</p>
					<p>
						A place to create playlists of the soundtracks from your favorite
						video-games.
					</p>
				</div>
				<div className='playlist-images'>
					<img className='playlist-mobile' src={Mobile} alt='playlist'></img>
					<img className='playlist-home' src={Home} alt='playlist'></img>
					<img className='playlist-view' src={View} alt='playlist'></img>
				</div>
				<div>
					<div>
						<a href='https://salty-cliffs-88075.herokuapp.com/' target='_blank'>
							<AiOutlineLink />
						</a>
						<a href='https://github.com/teamscrum2000' target='_blank'>
							<AiOutlineGithub />
						</a>
						{/* <a href=''>
							<AiOutlineMedium />
							Blog post coming soon!
						</a> */}
					</div>
				</div>
			</main>
		</div>
	);
};

export default Playlist;

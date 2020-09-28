import React, { useState } from 'react';
import Home from '../../components/Home/Home';
import Contact from '../About/Contact/Contact';
import Technologies from '../About/Technologies/Technologies';
import Modal from '../Modal';
import Simon from '../Projects/Simon/Simon';
import Playlist from '../Projects/Playlist/Playlist';
import Muse from '../Projects/Muse/Muse';
import Goodegg from '../Projects/Goodegg/Goodegg';
import Projects from '../Projects/Projects';
import About from '../About/About';
import NavBar from '../NavBar/NavBar';
import './Main.css';

const Main = () => {
	const [renderHome, setRenderHome] = useState(false);
	const renderHomeHandler = () => {
		setRenderHome(!renderHome);
	};
	//About section hooks
	const [renderContact, setRenderContact] = useState(false);
	const [renderTechs, setRenderTechs] = useState(false);
	const [renderAbout, setRenderAbout] = useState(false);

	const renderAboutHandler = () => {
		setRenderAbout(!renderAbout);
		setRenderProjects(false);
	};

	const renderContactHandler = () => {
		setRenderContact(!renderContact);
		setRenderTechs(false);
	};
	const renderTechsHandler = () => {
		setRenderTechs(!renderTechs);
		setRenderContact(false);
	};

	//Projects section hooks

	const [renderSimon, setRenderSimon] = useState(false);
	const [renderMuse, setRenderMuse] = useState(false);
	const [renderGoodegg, setRenderGoodegg] = useState(false);
	const [renderPlaylist, setRenderPlaylist] = useState(false);
	const [renderProjects, setRenderProjects] = useState(false);
	const renderProjectsHandler = () => {
		setRenderProjects(!renderProjects);
		setRenderAbout(false);
	};
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

	//Modal hooks
	const [showModal, setShowModal] = useState(false);
	const handleShowModal = () => {
		setShowModal(!showModal);
	};

	//Home hook
	const [showHome, setShowHome] = useState(false);
	const handleShowHome = () => {
		setShowHome(!showHome);
	};
	return (
		<div className='main-page'>
			<div className='main-content'>
				<button className='main-button' onClick={renderHomeHandler}>
					<h1>Caleb Hollingsworth</h1>
					<h2>Software Developer</h2>
				</button>
			</div>
			{renderHome === true && (
				<div>
					<NavBar
						handleShowHome={handleShowHome}
						renderProjectsHandler={renderProjectsHandler}
						renderProjects={renderProjects}
						renderAbout={renderAbout}
						renderProject={renderProjects}
						renderAboutHandler={renderAboutHandler}
					/>
				</div>
			)}
			{renderHome === true && showHome === true && (
				<div>
					<Home />
				</div>
			)}
			{renderHome === true && renderAbout === true && (
				<div>
					<About
						renderContactHandler={renderContactHandler}
						handleShowModal={handleShowModal}
						renderTechsHandler={renderTechsHandler}
					/>
				</div>
			)}
			{/* individual About sections */}
			{renderHome === true && renderContact === true && (
				<div>
					<Contact />
				</div>
			)}
			{renderHome === true && renderTechs === true && (
				<div>
					<Technologies />
				</div>
			)}
			{renderHome === true && showModal === true && (
				<div>
					<Modal handleShowModal={handleShowModal} />
				</div>
			)}

			{renderHome === true && renderProjects === true && (
				<div>
					<Projects
						renderSimonHandler={renderSimonHandler}
						renderMuseHandler={renderMuseHandler}
						renderGoodeggHandler={renderGoodeggHandler}
						renderPlaylistHandler={renderPlaylistHandler}
					/>
				</div>
			)}
			{/* individual projects */}
			{renderHome === true && renderSimon === true && (
				<div>
					<Simon />
				</div>
			)}
			{renderHome === true && renderPlaylist === true && (
				<div>
					<Playlist />
				</div>
			)}
			{renderHome === true && renderMuse === true && (
				<div>
					<Muse />
				</div>
			)}
			{renderHome === true && renderGoodegg === true && (
				<div>
					<Goodegg />
				</div>
			)}
		</div>
	);
};

export default Main;

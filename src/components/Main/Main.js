import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../../components/Home/Home';
import Contact from '../About/Contact/Contact';
import Technologies from '../About/Technologies/Technologies';
import Modal from '../Modal';
import Simon from '../Projects/Simon/Simon';
import Playlist from '../Projects/Playlist/Playlist';
import Muse from '../Projects/Muse/Muse';
import Goodegg from '../Projects/Goodegg/Goodegg';
import './Main.css';

const Main = () => {
	const [renderHome, setRenderHome] = useState(false);
	const renderHomeHandler = () => {
		setRenderHome(!renderHome);
	};
	//About section hooks
	const [renderContact, setRenderContact] = useState(false);
	const [renderResume, setRenderResume] = useState(false);
	const [renderTechs, setRenderTechs] = useState(false);
	const [renderAbout, setRenderAbout] = useState(false);

	const renderAboutHandler = () => {
		setRenderAbout(!renderAbout);
		setRenderProjects(false);
	};

	const renderContactHandler = () => {
		setRenderContact(!renderContact);
		setRenderResume(false);
		setRenderTechs(false);
	};
	const renderResumeHandler = () => {
		setRenderResume(!renderResume);
		setRenderContact(false);
		setRenderTechs(false);
	};
	const renderTechsHandler = () => {
		setRenderTechs(!renderTechs);
		setRenderContact(false);
		setRenderResume(false);
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
	return (
		<div className='main-page'>
			<div className='main-content'>
				<button className='main-button' onClick={renderHomeHandler}>
					<h1>Caleb Hollingsworth</h1>
					<h2>Software Developer</h2>
				</button>

				<div>
					{renderHome === true && (
						<Home
							renderProjectsHandler={renderProjectsHandler}
							renderProjects={renderProjects}
							renderSimonHandler={renderSimonHandler}
							renderMuseHandler={renderMuseHandler}
							renderGoodeggHandler={renderGoodeggHandler}
							renderPlaylistHandler={renderPlaylistHandler}
							handleShowModal={handleShowModal}
							renderAbout={renderAbout}
							renderProject={renderProjects}
							renderAboutHandler={renderAboutHandler}
							renderContactHandler={renderContactHandler}
							renderResumeHandler={renderResumeHandler}
							renderTechsHandler={renderTechsHandler}
						/>
					)}
				</div>
			</div>
			{renderAbout === true && renderContact === true && (
				<div>
					{' '}
					<Contact />
				</div>
			)}
			{renderAbout === true && showModal === true && (
				<div>
					{' '}
					<Modal handleShowModal={handleShowModal} />
				</div>
			)}
			{renderAbout === true && renderTechs === true && (
				<div>
					{' '}
					<Technologies />
				</div>
			)}
			<div>
				{renderProjects === true && renderSimon === true && (
					<div>
						{' '}
						<Simon />
					</div>
				)}
				{renderProjects === true && renderMuse === true && (
					<div>
						{' '}
						<Muse />
					</div>
				)}
				{renderProjects === true && renderGoodegg === true && (
					<div>
						{' '}
						<Goodegg />
					</div>
				)}
				{renderProjects === true && renderPlaylist === true && (
					<div>
						{' '}
						<Playlist />
					</div>
				)}
			</div>
		</div>
	);
};

export default Main;

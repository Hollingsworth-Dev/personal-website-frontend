import React from 'react';
import './App.css';
import Squares from './Images/Squares.svg';

import Main from './components/Main/Main';
function App() {
	return (
		<div className='App'>
			<img className='Squares' src={Squares} alt='squares' />
			<Main />
		</div>
	);
}

export default App;

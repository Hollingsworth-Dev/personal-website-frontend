import React from 'react';
import './App.css';
import Squares from './Images/Squares.svg';

import Main from './components/Main/Main';
function App() {
	return (
		<div className='App'>
			<Main />
			<div className='Squares'>{Squares}</div>
		</div>
	);
}

export default App;

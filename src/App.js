import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';

import Main from './components/Main/Main';
function App() {
	return (
		<div className='App'>
			<Route to='/' component={Main} />
		</div>
	);
}

export default App;

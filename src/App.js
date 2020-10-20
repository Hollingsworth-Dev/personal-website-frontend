import React from 'react';
import './App.css';
import { ImportedSvg } from './Images/Squares.svg';
import styled from 'styled-components';
import Main from './components/Main/Main';

const StyledSVG = styled(ImportedSvg)`
	display: block;
	margin: auto;
`;

function App() {
	return (
		<div className='App'>
			<StyledSVG />
			<Main />
		</div>
	);
}

export default App;

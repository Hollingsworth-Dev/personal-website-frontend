import React from 'react';
import './App.css';
import { ReactComponent as ImportedSvg } from './Images/Squares.svg';
import styled, { keyframes } from 'styled-components';
import Main from './components/Main/Main';

const rotate = keyframes`
0% {
	transform-origin: center;
	transform: rotate(0deg)
	
}

100%{
	transform-origin: center;
	transform: rotate(360deg)
}
`;

const StyledSVG = styled(ImportedSvg)`
	display: flex;
	justify-content: center;
	height: 100vh;
	width: 100vw;

	.green-rect1 {
		position: relative;
		animation: ${rotate} infinite 20s linear;
	}
	.green-rect2 {
		position: relative;
		animation: ${rotate} infinite 20s linear;
	}
	.green-rect3 {
		position: relative;
		animation: ${rotate} infinite 20s linear;
	}
	.purple-rect1 {
		position: relative;
		animation: ${rotate} infinite 20s linear;
	}
	.purple-rect2 {
		position: relative;
		animation: ${rotate} infinite 20s linear;
	}
	.purple-rect3 {
		position: relative;
		animation: ${rotate} infinite 20s linear;
	}
	.blue-rect1 {
		position: relative;
		animation: ${rotate} infinite 20s linear;
	}
	.blue-rect2 {
		position: relative;
		animation: ${rotate} infinite 20s linear;
	}
	.blue-rect3 {
		position: relative;
		animation: ${rotate} infinite 20s linear;
	}
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

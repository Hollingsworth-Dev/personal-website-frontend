import React from 'react';
import { ReactComponent as ImportedSvg } from '../Images/Squares2.svg';
import styled, { keyframes } from 'styled-components';

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
const scale = keyframes`
0% {
	transform-origin: center;
	transform: scale(1)
}
50% {
	transform-origin: center;
	transform: scale(1.5)
}
100% {
	transform-origin: center;
	transform: scale(1)
}
`;

const StyledSVG = styled(ImportedSvg)`
	display: flex;
	justify-content: center;
	height: 100vh;
	width: 100vw;
	#layer1 {
		animation: ${scale} infinite 80s ease;
	}

	.purple-rect1 {
		animation: ${rotate} infinite 30s linear;
	}
	.purple-rect2 {
		animation: ${rotate} infinite 40s linear;
		animation-delay: 0.5s;
	}
	.purple-rect3 {
		animation: ${rotate} infinite 30s linear;
		animation-delay: 1s;
	}
	.blue-rect1 {
		animation: ${rotate} infinite 40s linear;
		animation-delay: 1.5s;
	}
	.blue-rect2 {
		animation: ${rotate} infinite 30s linear;
		animation-delay: 2s;
	}
	.blue-rect3 {
		animation: ${rotate} infinite 40s linear;
		animation-delay: 2.5s;
	}
	.green-rect1 {
		animation: ${rotate} infinite 30s linear;
		animation-delay: 3s;
	}
	.green-rect2 {
		animation: ${rotate} infinite 40s linear;
		animation-delay: 3.5s;
	}
	.green-rect3 {
		animation: ${rotate} infinite 30s linear;
		animation-delay: 4s;
	}
`;
function Svg() {
	return (
		<div>
			<StyledSVG />
		</div>
	);
}

export default Svg;

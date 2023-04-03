import React from "react";

function PlayAgainButton(props) {
	const { setBoxesClicked, setXMarkedBoxes, setOMarkedBoxes, setGameOver } =
		props;

	const resetGame = () => {
		setBoxesClicked([]);
		setXMarkedBoxes({});
		setOMarkedBoxes({});
		setGameOver({ gameOver: false, stateOfGame: "" });
	};

	return (
		<button className="play-again" onClick={resetGame}>
			<i className="fa-solid fa-rotate-right"></i>
			Play Again
		</button>
	);
}

export default PlayAgainButton;

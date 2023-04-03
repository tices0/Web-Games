import React from "react";

function PlayAgainButton(props) {
	const {
		setBoxesClicked,
		setXMarkedBoxes,
		setOMarkedBoxes,
		setGameOver,
		boxesRef,
	} = props;

	const resetGame = () => {
		setBoxesClicked([]);
		setXMarkedBoxes({});
		setOMarkedBoxes({});
		setGameOver({ gameOver: false, stateOfGame: "" });
		for (let box in boxesRef.current) {
			// boxesRef.current[box].className = "box";
			boxesRef.current[box].classList.remove("x-marked");
			boxesRef.current[box].classList.remove("o-marked");
			boxesRef.current[box].style.pointerEvents = "auto";
		}
	};

	return (
		<button className="play-again" onClick={resetGame}>
			<i className="fa-solid fa-rotate-right"></i>
			Play Again
		</button>
	);
}

export default PlayAgainButton;

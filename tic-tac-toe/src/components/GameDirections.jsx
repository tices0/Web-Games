import React from "react";

function GameDirections(props) {
	const { playerTurn } = props;
	if (playerTurn) return <h1 className="game-directions">Your Turn</h1>;
	else return <h1 className="game-directions">Please Wait</h1>;
}

export default GameDirections;

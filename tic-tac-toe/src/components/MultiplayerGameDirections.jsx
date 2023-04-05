import React from "react";

function MultiplayerGameDirections({ gameOver, stateOfGame, player1Turn }) {
	if (gameOver) {
		if (stateOfGame === "player1")
			return (
				<div className="win-message message">
					<h1>Player 1 won!</h1>
					<p>Congratulations</p>
				</div>
			);
		else if (stateOfGame === "player2") {
			return (
				<div className="lose-message message">
					<h1>Player 2 won!</h1>
					<p>Congratulations</p>
				</div>
			);
		} else
			return (
				<div className="draw-message message">
					<h1>Draw!</h1>
					<p>It's a draw</p>
				</div>
			);
	} else {
		if (player1Turn) return <h1 className="turn">Player 1 Turn</h1>;
		else return <h1 className="turn">Player 2 Turn</h1>;
	}
}

export default MultiplayerGameDirections;

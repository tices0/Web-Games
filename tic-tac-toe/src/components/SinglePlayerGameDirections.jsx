import React from "react";

function SinglePlayerGameDirections({ gameOver, stateOfGame, playerTurn }) {
	if (gameOver) {
		if (stateOfGame === "player1")
			return (
				<div className="win-message message">
					<h1>You won!</h1>
					<p>Congratulations</p>
				</div>
			);
		else if (stateOfGame === "player2") {
			return (
				<div className="lose-message message">
					<h1>You lost!</h1>
					<p>Good luck next time</p>
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
		if (playerTurn) return <h1 className="turn">Your Turn</h1>;
		else return <h1 className="turn">Please Wait</h1>;
	}
}

export default SinglePlayerGameDirections;

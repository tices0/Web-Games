import React, { useState, useRef, useEffect } from "react";
import Board from "../components/Board";
import PlayAgainButton from "../components/PlayAgain";
import BackToMenuButton from "../components/BackToMenuButton";
import { checkForVictory } from "..";

function Multiplayer({ setOnMenuPage }) {
	const [boxesClicked, setBoxesClicked] = useState([]);
	const [xMarkedBoxes, setXMarkedBoxes] = useState({});
	const [oMarkedBoxes, setOMarkedBoxes] = useState({});
	const boxesRef = useRef({});
	const [player1Turn, setPlayer1Turn] = useState(true);
	const [gameOver, setGameOver] = useState({
		gameOver: false,
		stateOfGame: "",
	});

	const handleClick = index => {
		if (player1Turn) {
			boxesRef.current[index].classList.add("x-marked");
			boxesRef.current[index].style.pointerEvents = "none";
			setXMarkedBoxes(old => ({ ...old, [index]: true }));
			setBoxesClicked(old => [...old, index]);
			setPlayer1Turn(false);
		} else {
			boxesRef.current[index].classList.add("o-marked");
			boxesRef.current[index].style.pointerEvents = "none";
			setOMarkedBoxes(old => ({ ...old, [index]: true }));
			setBoxesClicked(old => [...old, index]);
			setPlayer1Turn(true);
		}
	};

	useEffect(() => {
		if (
			checkForVictory(xMarkedBoxes) ||
			checkForVictory(oMarkedBoxes) ||
			boxesClicked.length > 8
		) {
			let stateOfGame;
			if (checkForVictory(xMarkedBoxes)) stateOfGame = "player1";
			else if (checkForVictory(oMarkedBoxes)) stateOfGame = "player2";
			else stateOfGame = "draw";
			setGameOver({ gameOver: true, stateOfGame: stateOfGame });
			for (const box in boxesRef.current) {
				boxesRef.current[box].style.pointerEvents = "none";
			}
		}

		// eslint-disable-next-line
	}, [player1Turn]);

	useEffect(() => {
		if (gameOver.gameOver) {
			setPlayer1Turn(true);
			for (const box in boxesRef.current) {
				if (!boxesClicked.includes(parseInt(box))) {
					boxesRef.current[box].classList.remove("player-turn");
					boxesRef.current[box].classList.add("computer-turn");
				}
			}
		}
		// eslint-disable-next-line
	}, [gameOver]);

	return (
		<>
			{gameOver.gameOver ? (
				<BackToMenuButton setOnMenuPage={setOnMenuPage} />
			) : (
				""
			)}
			<section className="game-directions">
				{gameOver.gameOver ? (
					gameOver.stateOfGame === "player1" ? (
						<div className="win-message message">
							<h1>Player 1 won!</h1>
							<p>Congratulations</p>
						</div>
					) : gameOver.stateOfGame === "player2" ? (
						<div className="lose-message message">
							<h1>Player 2 won!</h1>
							<p>Congratulations</p>
						</div>
					) : (
						<div className="draw-message message">
							<h1>Draw!</h1>
							<p>It's a draw</p>
						</div>
					)
				) : player1Turn ? (
					<h1 className="turn">Player 1</h1>
				) : (
					<h1 className="turn">Player 2</h1>
				)}
			</section>
			<Board
				handleClick={handleClick}
				xMarkedBoxes={xMarkedBoxes}
				boxesRef={boxesRef}
				oMarkedBoxes={oMarkedBoxes}
			/>
			{gameOver.gameOver ? (
				<PlayAgainButton
					setBoxesClicked={setBoxesClicked}
					setXMarkedBoxes={setXMarkedBoxes}
					setOMarkedBoxes={setOMarkedBoxes}
					setGameOver={setGameOver}
					boxesRef={boxesRef}
					isSinglePlayer={true}
				/>
			) : (
				""
			)}
		</>
	);
}

export default Multiplayer;

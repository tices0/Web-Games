import React, { useState, useRef, useEffect } from "react";
import Board from "../components/Board";
import { checkForVictory } from "..";
import PlayAgainButton from "../components/PlayAgain";
// import GameDirections from "../components/GameDirections";

function SinglePlayer() {
	const [boxesClicked, setBoxesClicked] = useState([]);
	const [xMarkedBoxes, setXMarkedBoxes] = useState({});
	const [oMarkedBoxes, setOMarkedBoxes] = useState({});
	const boxesRef = useRef({});
	const [playerTurn, setPlayerTurn] = useState(true);
	const [gameOver, setGameOver] = useState({
		gameOver: false,
		stateOfGame: "",
	});

	const handleClick = index => {
		if (playerTurn) {
			boxesRef.current[index].classList.add("x-marked");
			boxesRef.current[index].style.pointerEvents = "none";
			setXMarkedBoxes(old => ({ ...old, [index]: true }));
			setBoxesClicked(old => [...old, index]);
			setPlayerTurn(false);
		}
	};

	useEffect(() => {
		if (
			!checkForVictory(xMarkedBoxes) &&
			!checkForVictory(oMarkedBoxes) &&
			boxesClicked.length < 9
		) {
			// computer turn
			if (!playerTurn)
				setTimeout(() => {
					console.log(boxesClicked);
					let box = Math.floor(Math.random() * 9);
					while (boxesClicked.includes(box)) {
						box = Math.floor(Math.random() * 9);
					}
					boxesRef.current[box].classList.add("o-marked");
					boxesRef.current[box].style.pointerEvents = "none";
					setOMarkedBoxes(old => ({ ...old, [box]: true }));
					setBoxesClicked(old => [...old, box]);
					setPlayerTurn(true);
				}, 2000);

			if (playerTurn) {
				for (const box in boxesRef.current) {
					if (!boxesClicked.includes(box)) {
						boxesRef.current[box].classList.add("player-turn");
						boxesRef.current[box].classList.remove("computer-turn");
					}
				}
			} else {
				for (const box in boxesRef.current) {
					if (!boxesClicked.includes(box)) {
						boxesRef.current[box].classList.remove("player-turn");
						boxesRef.current[box].classList.add("computer-turn");
					}
				}
			}
		} else {
			console.log("game over");
			let stateOfGame;
			if (checkForVictory(xMarkedBoxes)) stateOfGame = "win";
			else if (checkForVictory(oMarkedBoxes)) stateOfGame = "lose";
			else stateOfGame = "draw";
			setGameOver({ gameOver: true, stateOfGame: stateOfGame });
			for (const box in boxesRef.current) {
				boxesRef.current[box].style.pointerEvents = "none";
			}
		}
		// eslint-disable-next-line
	}, [playerTurn]);

	useEffect(() => {
		if (gameOver.gameOver) {
			setPlayerTurn(true);
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
				<button className="back-to-menu">
					<i className="fa-solid fa-chevron-left"></i>
				</button>
			) : (
				""
			)}
			<section className="game-directions">
				{gameOver.gameOver ? (
					gameOver.stateOfGame === "win" ? (
						<div className="win-message message">
							<h1>You won!</h1>
							<p>Congratulations</p>
						</div>
					) : gameOver.stateOfGame === "lose" ? (
						<div className="lose-message message">
							<h1>You lost!</h1>
							<p>Good luck next time</p>
						</div>
					) : (
						<div className="draw-message message">
							<h1>Draw!</h1>
							<p>It's a draw</p>
						</div>
					)
				) : playerTurn ? (
					<h1 className="turn">Your Turn</h1>
				) : (
					<h1 className="turn">Please Wait</h1>
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

export default SinglePlayer;

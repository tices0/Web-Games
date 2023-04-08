import React, { useState, useRef, useEffect } from "react";
import Board from "../components/Board";
import PlayAgainButton from "../components/PlayAgain";
import BackToMenuButton from "../components/BackToMenuButton";
import { checkForVictory } from "..";
import SinglePlayerGameDirections from "../components/SinglePlayerGameDirections";
import MultiplayerGameDirections from "../components/MultiplayerGameDirections";

function GamePlay({ setOnMenuPage, isSinglePlayerMode }) {
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
			if (!isSinglePlayerMode) {
				boxesRef.current[index].classList.add("o-marked");
				boxesRef.current[index].style.pointerEvents = "none";
				setOMarkedBoxes(old => ({ ...old, [index]: true }));
				setBoxesClicked(old => [...old, index]);
				setPlayer1Turn(true);
			}
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
		} else {
			if (isSinglePlayerMode) {
				if (!player1Turn)
					setTimeout(() => {
						let box = Math.floor(Math.random() * 9);
						while (boxesClicked.includes(box)) {
							box = Math.floor(Math.random() * 9);
						}
						boxesRef.current[box].classList.add("o-marked");
						boxesRef.current[box].style.pointerEvents = "none";
						setOMarkedBoxes(old => ({ ...old, [box]: true }));
						setBoxesClicked(old => [...old, box]);
						setPlayer1Turn(true);
					}, 2000);

				if (player1Turn) {
					for (const box in boxesRef.current) {
						if (!boxesClicked.includes(box)) {
							boxesRef.current[box].classList.add("player-turn");
							boxesRef.current[box].classList.remove(
								"computer-turn",
							);
						}
					}
				} else {
					for (const box in boxesRef.current) {
						if (!boxesClicked.includes(box)) {
							boxesRef.current[box].classList.remove(
								"player-turn",
							);
							boxesRef.current[box].classList.add(
								"computer-turn",
							);
						}
					}
				}
			}
		}

		// eslint-disable-next-line
	}, [player1Turn]);

	useEffect(() => {
		if (gameOver.gameOver) {
			setPlayer1Turn(true);
			for (const box in boxesRef.current) {
				if (!boxesClicked.includes(parseInt(box))) {
					boxesRef.current[box].classList.remove("player-1");
					boxesRef.current[box].classList.add("player-2");
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
				{isSinglePlayerMode ? (
					<SinglePlayerGameDirections
						gameOver={gameOver.gameOver}
						stateOfGame={gameOver.stateOfGame}
						playerTurn={player1Turn}
					/>
				) : (
					<MultiplayerGameDirections
						gameOver={gameOver.gameOver}
						stateOfGame={gameOver.stateOfGame}
						player1Turn={player1Turn}
					/>
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

export default GamePlay;

import React, { useState, useRef, useEffect } from "react";
import Board from "../components/Board";
import { checkForVictory } from "..";
// import GameDirections from "../components/GameDirections";

function SinglePlayer() {
	const [boxesClicked, setBoxesClicked] = useState([]);
	const [xMarkedBoxes, setXMarkedBoxes] = useState({});
	const [oMarkedBoxes, setOMarkedBoxes] = useState({});
	const boxesRef = useRef({});
	const [playerTurn, setPlayerTurn] = useState(true);
	const [gameOver, setGameOver] = useState(false);

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
		if (!checkForVictory(xMarkedBoxes) && !checkForVictory(oMarkedBoxes)) {
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
			setGameOver(true);
			for (const box in boxesRef.current) {
				boxesRef.current[box].style.pointerEvents = "none";
			}
		}
		// eslint-disable-next-line
	}, [playerTurn]);

	useEffect(() => {
		if (gameOver) {
			for (const box in boxesRef.current) {
				if (!boxesClicked.includes(box)) {
					boxesRef.current[box].classList.remove("player-turn");
					boxesRef.current[box].classList.add("computer-turn");
				}
			}
		}
		// eslint-disable-next-line
	}, [gameOver]);

	return (
		<>
			{gameOver ? (
				"wassup"
			) : playerTurn ? (
				<h1 className="turn">Your Turn</h1>
			) : (
				<h1 className="turn">Please Wait</h1>
			)}
			<Board
				handleClick={handleClick}
				xMarkedBoxes={xMarkedBoxes}
				boxesRef={boxesRef}
				oMarkedBoxes={oMarkedBoxes}
			/>
		</>
	);
}

export default SinglePlayer;

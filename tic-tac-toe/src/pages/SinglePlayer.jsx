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

	const handleClick = index => {
		if (playerTurn) {
			boxesRef.current[index].classList.add("x-marked");
			boxesRef.current[index].style.pointerEvents = "none";
			setXMarkedBoxes(old => ({ ...old, [index]: true }));
			setBoxesClicked(old => [...old, index]);
			setPlayerTurn(false);
			console.log(checkForVictory(xMarkedBoxes));
		}
	};

	useEffect(() => {
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
		// eslint-disable-next-line
	}, [playerTurn]);

	return (
		<>
			{/* <GameDirections playerTurn={playerTurn} /> */}
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

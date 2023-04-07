import React, { useRef, useState } from "react";
import DarkModeToggle from "../components/DarkModeButton";

function MenuPage({ setOnMenuPage, setIsSinglePlayerMode, pageRef }) {
	const [onDarkMode, setOnDarkMode] = useState(false);

	const singlePlayerModeRef = useRef();
	const multiPlayerModeRef = useRef();

	const changeActiveToSinglePlayer = () => {
		singlePlayerModeRef.current.classList.add("active");
		multiPlayerModeRef.current.classList.remove("active");
		setIsSinglePlayerMode(true);
	};

	const changeActiveToMultiPlayer = () => {
		singlePlayerModeRef.current.classList.remove("active");
		multiPlayerModeRef.current.classList.add("active");
		setIsSinglePlayerMode(false);
	};

	return (
		<>
			<DarkModeToggle
				pageRef={pageRef}
				onDarkMode={onDarkMode}
				setOnDarkMode={setOnDarkMode}
			/>
			<section className="menu">
				<main className="middle">
					{onDarkMode ? (
						<img
							src={require("../media/dark-mode-logo.png")}
							alt=""
						/>
					) : (
						<img
							src={require("../media/light-mode-logo.png")}
							alt=""
						/>
					)}
					<h1>Welcome {localStorage.playedBefore ? "back" : ""} </h1>
					<p>Select a player mode and press Start to play</p>
				</main>
				<div className="btn-container">
					<div className="mode-btns">
						<button
							ref={singlePlayerModeRef}
							className="active"
							onClick={changeActiveToSinglePlayer}
						>
							Single Player
						</button>
						<button
							ref={multiPlayerModeRef}
							className=""
							onClick={changeActiveToMultiPlayer}
						>
							Multiplayer
						</button>
					</div>
					<button
						className="start"
						onClick={() => {
							if (!localStorage.playedBefore)
								localStorage.playedBefore = true;
							setOnMenuPage(false);
							localStorage.leftMenu = true;
						}}
					>
						Start
					</button>
				</div>
			</section>
		</>
	);
}

export default MenuPage;

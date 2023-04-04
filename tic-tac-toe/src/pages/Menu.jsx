import React, { useRef } from "react";

function MenuPage({ setOnMenuPage, setSinglePlayerMode }) {
	const singlePlayerModeRef = useRef();
	const multiPlayerModeRef = useRef();

	const changeActiveToSinglePlayer = () => {
		singlePlayerModeRef.current.classList.add("active");
		multiPlayerModeRef.current.classList.remove("active");
		setSinglePlayerMode(true);
	};

	const changeActiveToMultiPlayer = () => {
		singlePlayerModeRef.current.classList.remove("active");
		multiPlayerModeRef.current.classList.add("active");
		setSinglePlayerMode(false);
	};

	return (
		<section className="menu">
			{/* <button className="stats">Stats</button> */}
			<main className="middle">
				<img src={require("../media/light-mode-logo.png")} alt="" />
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
				<button className="start" onClick={() => setOnMenuPage(false)}>
					Start
				</button>
			</div>
		</section>
	);
}

export default MenuPage;

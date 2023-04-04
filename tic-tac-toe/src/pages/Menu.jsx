import React, { useRef } from "react";

function MenuPage({ setOnMenuPage, setSinglePlayerMode }) {
	const singlePlayerModeRef = useRef();
	const multiPlayerModeRef = useRef();

	const changeActiveToSinglePlayer = () => {
		singlePlayerModeRef.current.classList.add("active");
		multiPlayerModeRef.current.classList.remove("active");
	};

	const changeActiveToMultiPlayer = () => {
		singlePlayerModeRef.current.classList.remove("active");
		multiPlayerModeRef.current.classList.add("active");
	};

	return (
		<main className="menu">
			{/* <button className="stats">Stats</button> */}
			<img src={require("../media/light-mode-logo.png")} alt="" />
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
		</main>
	);
}

export default MenuPage;

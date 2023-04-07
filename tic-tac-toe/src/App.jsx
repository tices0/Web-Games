import React, { useEffect, useRef, useState } from "react";
import "./styles/style.css";
import MenuPage from "./pages/Menu";
import GamePlay from "./pages/GamePlay";
import DarkModeToggle from "./components/DarkModeButton";

function App() {
	const [onMenuPage, setOnMenuPage] = useState(true);
	const [isSinglePlayerMode, setIsSinglePlayerMode] = useState(true);

	useEffect(() => {
		if (onMenuPage) setIsSinglePlayerMode(true);
	}, [onMenuPage]);

	let insideSection;

	if (onMenuPage)
		insideSection = (
			<MenuPage
				setOnMenuPage={setOnMenuPage}
				setIsSinglePlayerMode={setIsSinglePlayerMode}
			/>
		);
	else
		insideSection = (
			<GamePlay
				setOnMenuPage={setOnMenuPage}
				isSinglePlayerMode={isSinglePlayerMode}
			/>
		);

	const pageRef = useRef();
	return (
		<div className="container" ref={pageRef}>
			<DarkModeToggle pageRef={pageRef} />
			{insideSection}
		</div>
	);
}

export default App;

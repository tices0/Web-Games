import React, { useEffect, useRef, useState } from "react";
import "./styles/style.css";
import MenuPage from "./pages/Menu";
import GamePlay from "./pages/GamePlay";

function App() {
	const [onMenuPage, setOnMenuPage] = useState(true);
	const [isSinglePlayerMode, setIsSinglePlayerMode] = useState(true);

	useEffect(() => {
		if (onMenuPage) setIsSinglePlayerMode(true);
	}, [onMenuPage]);

	let insideSection;
	const pageRef = useRef();

	if (onMenuPage)
		insideSection = (
			<MenuPage
				setOnMenuPage={setOnMenuPage}
				setIsSinglePlayerMode={setIsSinglePlayerMode}
				pageRef={pageRef}
			/>
		);
	else
		insideSection = (
			<GamePlay
				setOnMenuPage={setOnMenuPage}
				isSinglePlayerMode={isSinglePlayerMode}
			/>
		);

	return <div ref={pageRef}>{insideSection}</div>;
}

export default App;

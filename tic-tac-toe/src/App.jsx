import React, { useEffect, useState } from "react";
import "./styles/style.css";
import MenuPage from "./pages/Menu";
import GamePlay from "./pages/GamePlay";

function App() {
	const [onMenuPage, setOnMenuPage] = useState(true);
	const [isSinglePlayerMode, setIsSinglePlayerMode] = useState(true);

	useEffect(() => {
		if (onMenuPage) setIsSinglePlayerMode(true);
	}, [onMenuPage]);

	if (onMenuPage)
		return (
			<MenuPage
				setOnMenuPage={setOnMenuPage}
				setIsSinglePlayerMode={setIsSinglePlayerMode}
			/>
		);
	return (
		<GamePlay
			setOnMenuPage={setOnMenuPage}
			isSinglePlayerMode={isSinglePlayerMode}
		/>
	);
}

export default App;

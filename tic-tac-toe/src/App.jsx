import React, { useEffect, useState } from "react";
import "./styles/style.css";
import SinglePlayer from "./pages/SinglePlayer";
import MenuPage from "./pages/Menu";
import Multiplayer from "./pages/Multiplayer";

function App() {
	const [onMenuPage, setOnMenuPage] = useState(true);
	const [singlePlayerMode, setSinglePlayerMode] = useState(true);

	useEffect(() => {
		if (onMenuPage) setSinglePlayerMode(true);
	}, [onMenuPage]);

	if (onMenuPage)
		return (
			<MenuPage
				setOnMenuPage={setOnMenuPage}
				setSinglePlayerMode={setSinglePlayerMode}
			/>
		);
	if (singlePlayerMode) return <SinglePlayer setOnMenuPage={setOnMenuPage} />;
	return <Multiplayer setOnMenuPage={setOnMenuPage} />;
}

export default App;

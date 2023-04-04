import React, { useState } from "react";
import "./styles/style.css";
import SinglePlayer from "./pages/SinglePlayer";
import MenuPage from "./pages/Menu";

function App() {
	const [onMenuPage, setOnMenuPage] = useState(true);
	if (onMenuPage) return <MenuPage setOnMenuPage={setOnMenuPage} />;
	return <SinglePlayer setOnMenuPage={setOnMenuPage} />;
}

export default App;

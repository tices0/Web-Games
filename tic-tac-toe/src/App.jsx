import React from "react";
import "./styles/style.css";

const list = [0, 1, 2, 3, 4, 5, 6, 7, 8];

function App() {
	return (
		<main className="grid">
			{list.map(item => (
				<button className="box">{item}</button>
			))}
		</main>
	);
}

export default App;

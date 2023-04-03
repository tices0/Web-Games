import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const possibleCombinations = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

export const checkForVictory = boxes => {
	console.log("boxes:", boxes);
	for (let combition in possibleCombinations) {
		let count = 0;
		for (let box in boxes) {
			if (combition.includes(box)) {
				count++;
				console.log("count:", count);
			}
			// console.log("box:", box);
		}
		if (count > 2) return true;
	}
	return false;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);

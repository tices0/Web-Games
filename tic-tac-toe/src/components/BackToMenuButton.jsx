import React from "react";

function BackToMenuButton({ setOnMenuPage }) {
	return (
		<button className="back-to-menu" onClick={() => setOnMenuPage(true)}>
			<i className="fa-solid fa-chevron-left"></i>
		</button>
	);
}

export default BackToMenuButton;

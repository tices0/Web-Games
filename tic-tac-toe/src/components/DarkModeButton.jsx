import React, { useEffect, useRef } from "react";

function DarkModeToggle({ pageRef, onDarkMode, setOnDarkMode }) {
	useEffect(() => {
		if (localStorage.onDarkMode !== onDarkMode) {
			setOnDarkMode(localStorage.onDarkMode);
		}

		if (onDarkMode) {
			pageRef.current.className = "dark-mode";
			darkModeButtonRef.current.classList.add("on-dark-mode");
			localStorage.onDarkMode = onDarkMode;
		} else {
			pageRef.current.className = "";
			darkModeButtonRef.current.classList.remove("on-dark-mode");
			localStorage.onDarkMode = onDarkMode;
		}

		// eslint-disable-next-line
	}, [onDarkMode]);

	const darkModeButtonRef = useRef();

	return (
		<button
			ref={darkModeButtonRef}
			className="dark-mode-toggle"
			onClick={() => setOnDarkMode(old => !old)}
		>
			{onDarkMode ? (
				<i className="fa-solid fa-sun"></i>
			) : (
				<i className="fa-solid fa-moon"></i>
			)}
		</button>
	);
}

export default DarkModeToggle;

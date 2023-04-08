import React, { useEffect, useRef } from "react";

function DarkModeToggle({ pageRef, onDarkMode, setOnDarkMode }) {
	const darkModeButtonRef = useRef();

	useEffect(() => {
		console.log("first set up of dark mode");
		// console.log("before:", localStorage.onDarkMode);
		if (localStorage.onDarkMode) console.log("if statement true");
		else console.log("if statement false");
		if (
			localStorage.onDarkMode &&
			JSON.parse(localStorage.onDarkMode) !== onDarkMode
		) {
			console.log("changing dark mode");
			setOnDarkMode(JSON.parse(localStorage.onDarkMode));
		}
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		// console.log("==============");
		if (onDarkMode) {
			pageRef.current.className = "dark-mode";
			darkModeButtonRef.current.classList.add("on-dark-mode");
			localStorage.onDarkMode = onDarkMode;
			console.log("local storage changed to:", onDarkMode);
		} else {
			pageRef.current.className = "";
			darkModeButtonRef.current.classList.remove("on-dark-mode");
			localStorage.onDarkMode = onDarkMode;
			console.log("local storage changed to:", onDarkMode);
		}

		// eslint-disable-next-line
	}, [onDarkMode]);

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

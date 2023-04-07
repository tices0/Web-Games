import React, { useEffect, useState } from "react";

function DarkModeToggle({ pageRef }) {
	const [onDarkMode, setOnDarkMode] = useState(false);

	useEffect(() => {
		if (onDarkMode) pageRef.current.className = "dark-mode";
		else pageRef.current.className = "";
		// eslint-disable-next-line
	}, [onDarkMode]);

	return (
		<button
			className="dark-mode-toggle"
			onClick={() => setOnDarkMode(old => !old)}
		>
			{onDarkMode ? (
				<i class="fa-solid fa-sun"></i>
			) : (
				<i class="fa-solid fa-moon"></i>
			)}
		</button>
	);
}

export default DarkModeToggle;

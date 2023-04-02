import React, { useRef, useState, useEffect } from "react";

const list = [0, 1, 2, 3, 4, 5, 6, 7, 8];

function Board() {
	// const [xMarked, setXMarked] = useState({});
	const [lastClick, setLastClick] = useState();
	const xMarkedRef = useRef({});

	useEffect(() => {
		console.log(lastClick);
	}, [lastClick]);

	return (
		<main className="grid">
			{list.map((item, index) => (
				<button
					className="box"
					ref={el => (xMarkedRef.current[index] = el)}
					onClick={event => setLastClick(event.target)}
				>
					{/* <div className="background red"></div> */}
					{/* <i className="fa-sharp fa-solid fa-xmark"></i> */}
					{/* <i className="fa-solid fa-o"></i> */}
				</button>
			))}
		</main>
	);
}

export default Board;
